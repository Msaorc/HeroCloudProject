import User from "../models/User.js"

const saveUser = async (UserModel) => {
    return await User.create(UserModel)
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getUserById = async (id) => {
    return await User.findByPk(id)
}

const deleteUserById = async (id) => {
    return await User.destroy({where: {id: id}})
}

const updateUserById = async (id, userModel) => {
    try {
        const result = await User.update(userModel, {where: {id: id}})
        if (result[0] === 1) {
            return { message: "user updated with sucess"}
        } else {
            return { message: "can not find user ${id} to update", status: 404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory