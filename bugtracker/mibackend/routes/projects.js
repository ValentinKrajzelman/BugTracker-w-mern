const router = require("express").Router();
let Project = require("../models/project.model");
const bugModel = require("../models/bug.model");

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
  Project.find({ name: req.body.name })
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.route("/get/:id").get((req, res) => {
  Project.find({ _id: req.params.id })
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Project.findById(req.params.id)
    .then((project) => {
      project.version = req.body.version;

      project
        .save()
        .then(() => res.json("Proyecto modificado correctamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
