const mongoose = require("mongoose");
// const { schema } = require("./bug.model");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  version: { type: Number, required: true },
  // bugs_ids: [{ type: Schema.Types.objectId, ref: "Bug" }], cambie esto que me parecio innecesariamente complejo.
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
