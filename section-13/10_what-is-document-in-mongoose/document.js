import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findById("67cb2deebdc4aad5e332e131");

const json = user.toJSON();

console.log(json);
