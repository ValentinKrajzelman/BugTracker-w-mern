const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  bugtext: { type: String, required: true },
  estado: { type: String, required: true },
  fechacreacion: { type: Date, required: true },
  projectId: { type: String, required: true },
});

module.exports = mongoose.model("Bug", bugSchema);
