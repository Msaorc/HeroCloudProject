import userRepository from  "../repositories/UserRepository.js"

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel)
}

const getUserById = (id) => {
    return userRepository.getUserById(id)
}

const getAllUsers = (id) => {
    return userRepository.getAllUsers(id)
}

const deleteUserById = (id) => {
    return userRepository.deleteUserById(id)
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel)
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default service