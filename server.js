const express = require('express');
const connectdb = require('./config/dbConnection');
const errHandler = require('./middleware/errorHandler');


const app = express();
const dotenv = require('dotenv').config();
connectdb()


const port = process.env.PORT || 13000
app.listen(13000)


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errHandler);
// const server = http.createServer ((req, res) =>{
//     if(req.url=== '/') {
//         res.write("hello everyone")
//         res.end()
//     }

//     if(req.url === "/api/courses") {
//         res.write(JSON.stringify([1,2,3]))
//         res.end()
//     }

//     if(req.url === "/api/courses1") {
//         res.write("hello pretty")
//         res.end()
//     }
// });




console.log('server running on port 13000')