import bcrypt from 'bcryptjs'
import { User, IUser } from '../models/userModel'

export const createUser = async (user: IUser): Promise<IUser> => {
  const encryptPassword = await bcrypt.hash(user.password, 10)

  const userToSave = new User({
    email: user.email,
    password: encryptPassword,
    username: user.username,
  })

  try {
    const savedUser = await userToSave.save()
    return savedUser.toObject()
  } catch (error: any) {
    if (error.code === 11000) {
      console.log(`Utilisateur ${user.email} déjà existant`)
      throw new Error('User already exists')
    } else {
      console.log(
        `Erreur lors de la création de l'utilisateur ${user.email} : ${error}`
      )
      throw new Error('Create user error')
    }
  }
}
