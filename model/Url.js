import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "url bichne uu"],
  },
  shortLink: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Boginoo",
    required: true,
  },
});

UrlSchema.pre("save", function (next) {
  this.shortLink = nanoid(4);
  next();
});

const Url = mongoose.model("Url", UrlSchema);
export default Url;
