const mongoose = require("mongoose");
// const { schema } = require("./bug.model");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  nombre: { type: String, required: true },
  version: { type: String, required: true },
  descripcion: { type: String, required: true },
  // user: { type: mongoose.Schema.Types.ObjectId, required: true },
  user: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
