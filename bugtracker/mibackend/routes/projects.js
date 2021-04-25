const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/post").post((req, res) => {
  const nombre = req.body.nombre;
  const version = req.body.version;
  const descripcion = req.body.descripcion;
  const user = req.body.user;

  const newProject = new Project({ nombre, version, descripcion, user });

  newProject
    .save()
    .then(() => res.json("Proyecto creado con exito."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get/").get((req, res) => {
  Project.find({ user: req.body.user })
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error1:" + err));
});

module.exports = router;
