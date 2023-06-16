import User from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generateUserID = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  //Increment by one
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
  // currentUserId++;
  // return currentUserId.toString().padStart(5, '0');
}
