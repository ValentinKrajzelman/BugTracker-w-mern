const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // project_ids: [{ type: Schema.Types.ObjectId, ref: "Project" }], implemente otra solucion mas simple.
});

const User = mongoose.model("User", userSchema);

module.exports = User;
