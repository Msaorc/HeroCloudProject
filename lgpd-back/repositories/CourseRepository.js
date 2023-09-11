import Course from "../models/Course.js"

const saveCourse = async (courseModel) => {
    return await Course.create(courseModel)
}

const getAllCourses = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getCourseById = async (id) => {
    return await Course.findByPk(id)
}

const deleteCourseById = async (id) => {
    return await Course.destroy({where: {id: id}})
}

const updateCourseById = async (id, courseModel) => {
    try {
        const result = await Course.update(courseModel, {where: {id: id}})
        if (result[0] === 1) {
            return { message: "course updated with sucess"}
        } else {
            return { message: "can not find course ${id} to update", status: 404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory