const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
  {
    bugtext: { type: String, required: true },
    state: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Bug", bugSchema);
