const mongoose = require("mongoose");
const{Schema} = mongoose;

const taskSchema = new Schema({
   descricao:{
        type: String,
        require: true,
    }
}, 
{timestamps: true}
);

const Task = mongoose.model("Task", taskSchema);
module.exports = {
    Task,
    taskSchema,
};