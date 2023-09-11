import couseRepository from  "../repositories/CourseRepository.js"

const saveCourse = (curseModel) => {
    return couseRepository.saveCourse(curseModel)
}

const getCourseById = (id) => {
    return couseRepository.getCourseById(id)
}

const getAllCourses = () => {
    return couseRepository.getAllCourses()
}

const deleteCourseById = (id) => {
    return couseRepository.deleteCourseById(id)
}

const updateCorseById = (id, curseModel) => {
    return couseRepository.updateCorseById(id, curseModel)
}

const service = {
    saveCourse,
    getCourseById,
    getAllCourses,
    deleteCourseById,
    updateCorseById
}

export default service