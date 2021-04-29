const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
  {
    bugtext: { type: String },
    estado: { type: String },
    projectId: { type: String },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Bug", bugSchema);
