import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  forget,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser
  .get("/boginoo", getAllUser)
  .post("/boginoo", createUser)
  .post("/login", login)
  .post("/forget", forget);
routerUser.route("/boginoo/:id").delete(deleteUser).get(getUser);

export default routerUser;
