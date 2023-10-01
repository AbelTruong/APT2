import { Op } from 'sequelize'
import Model from '../models/user.js'

const getAll = async () => {
  try {
    const items = await Model.findAll({
      order: [['updatedAt', 'ASC']],
    })

    return items.map((item) => item.toJSON())
  } catch (error) {
    console.log(error)
  }
}

const count = async () => {
  try {
    const data = await Model.count()
    return data
  } catch (error) {
    console.log(error)
  }
}

const find = async ({ page, limit, keyword, sort }) => {
  try {
    let _page = page ? (parseInt(page) >= 1 ? parseInt(page) : 1) : 1
    let _limit = limit ? (parseInt(limit) >= 1 ? parseInt(limit) : 10) : 10
    let _sort = sort
      ? [sort.split(',')[0], sort.split(',')[1].toLowerCase()]
      : ['updatedAt', 'DESC']

    let where = {}

    if (keyword) {
      where = {
        ...where,
        name: {
          [Op.like]: `%${keyword}%`,
        },
      }
    }

    const count = await Model.count({ where })
    const items = await Model.findAll({
      where,
      limit: _limit,
      offset: (_page - 1) * _limit,
      order: [[_sort]],
    })

    return {
      items,
      page: _page,
      limit: _limit,
      totalPages: Math.ceil(count / _limit),
      totalItems: count,
    }
  } catch (error) {
    throw error
  }
}

const findById = async (id) => {
  try {
    const entry = await Model.findOne({ where: { id } })

    if (!entry) throw new Error('User Not Found')

    return entry
  } catch (error) {
    console.log(error)
  }
}

const create = async (data) => {
  try {
    const created = await Model.create(data)

    return created
  } catch (error) {
    console.log(error)
  }
}

const update = async ({ id, data }) => {
  try {
    const updated = await Model.update(data, {
      where: { id },
      returning: true,
      plain: true,
    })

    return findById(updated[1].id)
  } catch (error) {
    console.log(error)
  }
}

const _delete = async (id) => {
  try {
    const deleted = await Model.destroy({ where: { id } })

    return deleted
  } catch (error) {
    console.log(error)
  }
}

const UserRepositories = {
  getAll,
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}

export default UserRepositories
