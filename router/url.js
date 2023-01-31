import express from "express";
import {
  createShortUrl,
  deleteUrl,
  getAllUrl,
  history,
  searchUrl,
} from "../controller/url.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
import Url from "../model/Url.js";
import { paginationFunction } from "../pagination/pagination.js";

const routerLink = express.Router();

routerLink
  .get("/urls", getAllUrl)
  .post("/urls", checkTokenMiddleWare, createShortUrl);
routerLink.route("/urls/:id").get(searchUrl);
routerLink.route("/urls/:id").delete(checkRole, deleteUrl);
routerLink.route("/history/:id").get(paginationFunction(Url));

export default routerLink;
