import mongoose from "mongoose";
import bcrypt from "bcrypt";

const BoginooSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "нэвтрэх нэрээ оруулна уу"],
    },
    password: {
      type: String,
      required: [true, "нууц үгээ оруулна уу"],
      minLength: [8, "хэтэрхий богино байна , 8 н оронтой байна"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

BoginooSchema.virtual("url", {
  ref: "Url",
  localField: "_id",
  foreignField: "user_id",
});

BoginooSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

BoginooSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Boginoo = mongoose.model("Boginoo", BoginooSchema);
export default Boginoo;
