const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({origin:'http://localhost:8080'}));

// app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:56274');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });

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