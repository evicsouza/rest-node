// const mongoose = require("mongoose");

// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     roles: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Role"
//       }
//     ]
//   })
// );

// module.exports = User;

//const nanoid = require('nanoid');
const mongoose = require("mongoose");
const{Schema} = mongoose;

const userSchema = new Schema({
    // id: {
    //     type: String,
    //     default: () => nanoid(),
    //   },
   email:{
        type: String,
        require: true,
    },
    password:{
      type: String,
      require: true,
    }
}, 
{timestamps: true}
);

const User = mongoose.model("User", userSchema);
module.exports = {
    User,
    userSchema,
};