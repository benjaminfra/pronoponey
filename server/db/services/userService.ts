import bcrypt from 'bcryptjs'
import { ensure } from '../../../helpers/types.helpers'
import { IUser, ILoggedUser, User, Roles } from '../models/userModel'
import jwt, { Secret } from 'jsonwebtoken'
import { Document } from 'mongoose'

const jwtToken: Secret = ensure(process.env.JWT_SECRET)

export const createUser = async (user: IUser): Promise<ILoggedUser> => {
  if (!user.password || user.password.length < 8) {
    throw new Error('Le mot de passe ne respecte pas les règles en place')
  }
  if (!user.username || user.username.length < 6) {
    throw new Error("Le nom d'utilisateur n'est pas correct")
  }
  try {
    const encryptPassword = await bcrypt.hash(user.password, 10)

    const userToSave = new User({
      password: encryptPassword,
      username: user.username,
      role: Roles.User,
    })

    let savedUser = await userToSave.save()
    await generateToken(savedUser)
    return {
      username: ensure(savedUser.username),
      id: savedUser._id,
      tokens: ensure(savedUser.tokens),
      role: ensure(savedUser.role),
    }
  } catch (error: any) {
    if (error.code === 11000) {
      console.log(`Utilisateur ${user.username} déjà existant`)
      throw new Error('Erreur lors de la création du compte')
    } else {
      console.log(
        `Erreur lors de la création de l'utilisateur ${user.username} : ${error}`
      )
      throw new Error('Erreur lors de la création du compte')
    }
  }
}

const INVALID_CREDENTIALS_ERROR_MESSAGE =
  "Mot de passe et/ou nom d'utilisateur incorrect"

const verifyPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword)
}

const findUserByUsername = async (
  username: string
): Promise<(IUser & Document) | null> => {
  try {
    return User.findOne({ username })
  } catch (error) {
    console.log(
      `Une Erreur est survenue lors de la récupération de l'utilisateur ${username} : ${error}`
    )
    throw new Error('Une erreur lors de la connexion')
  }
}

export const login = async (user: IUser): Promise<IUser & Document> => {
  try {
    const searchedUser = await findUserByUsername(user.username)
    if (!searchedUser) {
      throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE)
    }
    const isPasswordValid = await verifyPassword(
      user.password,
      searchedUser.password
    )
    if (isPasswordValid) {
      return searchedUser
    } else {
      throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE)
    }
  } catch (error) {
    console.log(
      `Une Erreur est survenue lors de la récupération de l'utilisateur ${user.username} : ${error}`
    )
    throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE)
  }
}

export const findByToken = async (
  token: string
): Promise<(IUser & Document) | null> => {
  let decoded: any
  try {
    if (!token) {
      throw new Error('Missing token header')
    }
    decoded = jwt.verify(token, jwtToken)
  } catch (error) {
    throw new Error('Erreur lors de la vérification du token utilisateur')
  }
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
  })
}

export const generateToken = async (
  user: IUser & Document
): Promise<string> => {
  const token = jwt.sign({ _id: ensure(user._id).toString() }, jwtToken, {
    expiresIn: '72h',
  })
  if (!user.tokens) {
    user.tokens = []
  }
  user.tokens.push({ token })
  await user.save()
  return token
}

export const logout = async (
  user: IUser & Document,
  token: string
): Promise<void> => {
  if (!user.tokens) {
    return
  }

  user.tokens = user.tokens.filter((userToken) => userToken.token !== token)
  await user.save()
}
