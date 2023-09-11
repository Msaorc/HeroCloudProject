import Teacher from "../models/Teacher.js"

const saveTeacher = async (teacherModel) => {
    return await Teacher.create(teacherModel)
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id)
}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({where: {id: id}})
}

const updateTeacherById = async (id, teacherModel) => {
    try {
        const result = await Teacher.update(teacherModel, {where: {id: id}})
        if (result[0] === 1) {
            return { message: "teacher updated with sucess"}
        } else {
            return { message: "can not find teacher ${id} to update", status: 404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory