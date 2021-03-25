const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/post/:userid").post((req, res) => {
  const name = req.body.name;
  const version = req.body.version;
  const idUser = req.params.userid;

  const newProject = new Project({ name, version, idUser });

  newProject
    .save()
    .then(() => res.json("Proyecto creado con exito."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get/:userid").get((req, res) => {
  Project.find({ userId: req.params.userid })
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
