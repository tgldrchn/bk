import Url from "../model/Url.js";
import Boginoo from "../model/User.js";

export const checkRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const link = await Url.findById(id);
    const user = await Boginoo.findById(link.user_id);

    if (user.role === "normal") {
      return next();
    } else {
      console.log("aldaa");
    }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};
