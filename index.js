import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routerLink from "./router/url.js";
import routerUser from "./router/user.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routerLink);
app.use("/", routerUser);

const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 7000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
};

app.get("/urls", async (req, res) => {
  res.send({
    data: "asd",
  });
});

app.listen(port, async () => {
  console.log(`Server running ${port}`);
  connect();
});
