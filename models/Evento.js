const mongoose = require("mongoose");
const{Schema} = mongoose;

const eventoSchema = new Schema({
   name:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        require: true
    },
    eventType:{
        type: String,
        require: true
    },
    isLargeEvent:{
        type: Boolean,
        require: true
    }
}, 
{timestamps: true}
);

const Evento = mongoose.model("Evento", eventoSchema);
module.exports = {
    Evento,
    eventoSchema,
};