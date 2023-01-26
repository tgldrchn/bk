import express from "express";
import {
  createShortUrl,
  deleteUrl,
  getAllUrl,
  searchUrl,
} from "../controller/url.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";

const routerLink = express.Router();

routerLink
  .get("/urls", getAllUrl)
  .post("/urls", checkTokenMiddleWare, createShortUrl);
routerLink.route("/urls/:id").get(searchUrl);
routerLink.route("/urls/:id").delete(deleteUrl);

export default routerLink;