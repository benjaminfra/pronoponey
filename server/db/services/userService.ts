import bcrypt from 'bcryptjs'
import { EMAIL_REGEX } from '../../../helpers/constants'
import { ensure } from '../../../helpers/types.helpers'
import { IUser, ILoggedUser, User } from '../models/userModel'
import jwt, { Secret } from 'jsonwebtoken'
import { Document } from 'mongoose'

const jwtToken: Secret = ensure(process.env.JWT_SECRET)

export const createUser = async (user: IUser): Promise<ILoggedUser> => {
  if (!user.password || user.password.length < 8) {
    throw new Error('Le mot de passe ne respecte pas les règles en place')
  }
  if (!user.email || !user.email.match(EMAIL_REGEX)) {
    throw new Error("L'email n'est pas correct")
  }
  if (!user.username) {
    throw new Error("Le nom d'utilisateur est obligatoire")
  }
  try {
    const encryptPassword = await bcrypt.hash(user.password, 10)

    const userToSave = new User({
      email: user.email,
      password: encryptPassword,
      username: user.username,
    })

    let savedUser = await userToSave.save()
    await generateToken(savedUser)
    return {
      username: ensure(savedUser.username),
      id: savedUser._id,
      tokens: ensure(savedUser.tokens),
    }
  } catch (error: any) {
    if (error.code === 11000) {
      console.log(`Utilisateur ${user.email} déjà existant`)
      throw new Error('Erreur lors de la création du compte')
    } else {
      console.log(
        `Erreur lors de la création de l'utilisateur ${user.email} : ${error}`
      )
      throw new Error('Erreur lors de la création du compte')
    }
  }
}

const INVALID_CREDENTIALS_ERROR_MESSAGE = 'Mot de passe et/ou email incorrect'

const verifyPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword)
}

const findUserByEmail = async (
  email: string
): Promise<(IUser & Document) | null> => {
  try {
    return User.findOne({ email })
  } catch (error) {
    console.log(
      `Une Erreur est survenue lors de la récupération de l'utilisateur ${email} : ${error}`
    )
    throw new Error('Une erreur lors de la connexion')
  }
}

export const login = async (user: IUser): Promise<IUser & Document> => {
  try {
    const searchedUser = await findUserByEmail(user.email)
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
      `Une Erreur est survenue lors de la récupération de l'utilisateur ${user.email} : ${error}`
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
  return await User.findOne({
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
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}
