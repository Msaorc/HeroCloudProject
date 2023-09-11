import Evaluation from "../models/Course.js"

const saveEvaluation = async (evaluationModel) => {
    return await Evaluation.create(evaluationModel)
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id)
}

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({where: {id: id}})
}

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const result = await Evaluation.update(evaluationModel, {where: {id: id}})
        if (result[0] === 1) {
            return { message: "evaluation updated with sucess"}
        } else {
            return { message: "can not find evaluation ${id} to update", status: 404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory