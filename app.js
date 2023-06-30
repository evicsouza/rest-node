// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// // const Role = db.role;

// // app.use(require('./routes/auth'));
// app.use(require('./routes/users'));


// // require('./routes/auth')(app);
// // require('./routes/users')(app);

// const port = 3000;
// app.use(cors(corsOptions));


// const comm = require("./database/comm")
// comm();

// const routes = require("./routes/router");
// app.use("/", routes);

// app.listen(port, function (){
//     console.log("A api está sendo executada na porta " + port)
// })

// // function initial() {
// //   Role.estimatedDocumentCount((err, count) => {
// //     if (!err && count === 0) {
// //       new Role({
// //         name: "user"
// //       }).save(err => {
// //         if (err) {
// //           console.log("error", err);
// //         }

// //         console.log("added 'user' to roles collection");
// //       });

// //       new Role({
// //         name: "moderator"
// //       }).save(err => {
// //         if (err) {
// //           console.log("error", err);
// //         }

// //         console.log("added 'moderator' to roles collection");
// //       });

// //       new Role({
// //         name: "admin"
// //       }).save(err => {
// //         if (err) {
// //           console.log("error", err);
// //         }

// //         console.log("added 'admin' to roles collection");
// //       });
// //     }
// //   });
// // }

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

//database
const conn = require("./database/comm")
conn();

//routes
const routes = require("./routes/router");
app.use("/api", routes);

const port = 3000;
app.listen(port, function(){
    console.log("Servidor ativo.");
})