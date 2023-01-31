import Boginoo from "../model/User.js";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const user = await Boginoo.find({}).populate("url").limit(2);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Boginoo.findById(id).populate("url");
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await Boginoo.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Boginoo.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await Boginoo.findOne({
      username: req.body.username,
    });
    const token = jwt.sign({ ...user }, "secret", { expiresIn: "1d" });
    const boolean = await user.comparePassword(req.body.password);
    if (!user) {
      res.status(400).send({
        error: "iim hereglegch baihgyu",
      });
    }
    if (!boolean) {
      return res.status(400).send({
        error: "buruu",
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
        token: token,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const forget = async (req, res) => {
  try {
    const user = await Boginoo.findOne({
      username: req.body.username,
    });

    if (req.body.username === user.username) {
      res.status(200).send({
        success: true,
        data: user.password,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
