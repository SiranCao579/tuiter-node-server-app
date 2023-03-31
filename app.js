import express from "express";
import HelloControllers from "./controllers/hello-controllers.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json());

HelloControllers(app)
UsersController(app)
TuitsController(app)


app.listen(process.env.PORT || 4000)