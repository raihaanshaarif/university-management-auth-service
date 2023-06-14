import User from './users.model'
import { IUser } from './users.interface'
import config from '../../../config'
import { generateUserID } from './users.util'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto Generate incremented ID
  const id = await generateUserID()
  user.id = id

  // Default Password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Failed to Create User!')
  }
  return createdUser
}

export default {
  createUser,
}
