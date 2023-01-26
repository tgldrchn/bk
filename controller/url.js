import Url from "../model/Url.js";

export const getAllUrl = async (req, res) => {
  try {
    const url = await Url.find({});
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const searchUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findOne({ shortLink: id });
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createShortUrl = async (req, res) => {
  try {
    const url = await Url.create(req.body);
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
