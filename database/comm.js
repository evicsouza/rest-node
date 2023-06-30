const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://evss1:4A5Y2Y9ie5fnuZlB@cluster0.zirpbm6.mongodb.net/') //usando o email do if
        console.log("A aplicação está conectada ao mongodb")
    }catch (error) { 
        console.log('Error: ${error}');
    }
}

module.exports = main;