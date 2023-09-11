import User from "./User";
import Teacher from "./Teacher";
import Course from "./Course";
import Evaluation from "./Evaluation";

const associations = () => {
    Course.hasMany(Teacher)
    User.hasMany(Evaluation)
    Course.hasMany(Evaluation)
}

const factory = {
    associations
}

export default factory
