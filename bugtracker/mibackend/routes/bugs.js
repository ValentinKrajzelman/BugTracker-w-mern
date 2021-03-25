const router = require("express").Router();
let Bugs = require("../models/bug.model");

router.route("/post/:projectid").post((req, res) => {
  const BugText = req.body.bugText;
  const State = req.body.state;
  const ProjectId = req.params.projectid;

  const newBug = new Bugs({ BugText, State, ProjectId });

  newBug
    .save()
    .then(() => res.json("Bug guardados con exito"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get/:projectid").get((req, res) => {
  Bugs.find({ projectId: req.params.projectid })
    .then((bugs) => res.json(bugs))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/get/:bugid").get((req, res) => {
  Bugs.findById(req.params.bugid)
    .then((bug) => res.json(bug))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:bugid").post((req, res) => {
  Bugs.findById(req.params.bugid)
    .then((bug) => {
      bug.bugText = req.body.bugTextBody;
      bug.state = req.body.stateBody;

      bug
        .save()
        .then(() => res.json("Bug modificado correctamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
