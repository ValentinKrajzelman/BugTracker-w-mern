const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/post").post((req, res) => {
  const nombre = req.data.nombre;
  const version = req.data.version;
  const descripcion = req.data.descripcion;
  const user = req.data.user;

  const newProject = new Project({ nombre, version, descripcion, user });

  newProject
    .save()
    .then(() => res.json("Proyecto creado con exito."))
    .catch((err) => res.status(400).json("Error1: " + err));
});

// router.route("/get/").get((req, res) => {
//   Project.find({ user: req.params.userid })
//     .then((projects) => res.json(projects))
//     .catch((err) => res.status(400).json("Error1:" + err));
// });

module.exports = router;
