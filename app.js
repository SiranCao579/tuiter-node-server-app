import express from "express";
import HelloControllers from "./controllers/hello-controllers.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
const CONNECTION_STRING = "mongodb+srv://sirancao:supersecretpasswordagain@cluster0.dzxezhk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

HelloControllers(app)
UsersController(app)
TuitsController(app)


app.listen(5001)

console.log("")