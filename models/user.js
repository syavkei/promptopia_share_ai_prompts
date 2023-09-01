import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email Already Exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Email is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

// The "models" object is provided by the mongoose library and stores all the regsitered models.
// If a model named "User" already exists in the "models" object, it assigns that existing model to the "User" variable.
// This prevent redifining the model and ensures that the esisting model is reused.

// If amodel named "User" doesnot exists in the model object, the "model" function on mongoose is called to create a new model.
// The newly created model is then assigned to the "User" variable.
