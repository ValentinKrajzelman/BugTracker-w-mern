const router = require("express").Router();
let Bugs = require("../models/bug.model");

router.route("/post/:projectid").post((req, res) => {
  const bugtext = req.body.bugtext;
  const estado = req.body.estado;
  const fechacreacion = req.body.fechacreacion;
  const projectId = req.params.projectid;

  const newBug = new Bugs({ bugtext, estado, projectId, fechacreacion });

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

router.route("/get/bugid/:bugid").get((req, res) => {
  Bugs.findById(req.params.bugid)
    .then((bug) => res.json(bug))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:bugid").delete((req, res) => {
  Bugs.findByIdAndDelete(req.params.bugid)
    .then(() => res.json("Bug eliminado con exito"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:bugid").post((req, res) => {
  Bugs.findById(req.params.bugid)
    .then((bug) => {
      bug.bugtext = req.body.bugtext;
      bug.estado = req.body.estado;

      bug
        .save()
        .then(() => res.json("Bug modificado correctamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
