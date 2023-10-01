import UserRepositories from '../repositories/user.js'

const getAll = async () => {
  try {
    const data = await UserRepositories.getAll()
    return data
  } catch (error) {
    console.log(error)
  }
}

const count = async () => {
  try {
    const data = await UserRepositories.count()
    return data
  } catch (error) {
    console.log(error)
  }
}

const find = async ({ page, limit, keyword, sort }) => {
  try {
    const data = await UserRepositories.find({ page, limit, keyword, sort })
    return data
  } catch (error) {
    console.log(error)
  }
}

const findById = async (id) => {
  try {
    const data = await UserRepositories.findById(id)
    return data
  } catch (error) {
    console.log(error)
  }
}

const create = async (data) => {
  try {
    const created = await UserRepositories.create(data)
    return created
  } catch (error) {
    console.log(error)
  }
}

const update = async ({ id, data }) => {
  try {
    const updated = await UserRepositories.update({ id, data })
    return updated
  } catch (error) {
    console.log(error)
  }
}

const _delete = async (id) => {
  try {
    const data = await UserRepositories.delete(id)
    return data
  } catch (error) {
    console.log(error)
  }
}

const UserMiddleware = {
  getAll,
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}

export default UserMiddleware
