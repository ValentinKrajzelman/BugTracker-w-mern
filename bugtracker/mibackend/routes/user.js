const router = require("express").Router();
let User = require("../models/user.model");

// router.route("/:name/:password").post((req, res) => {
router.route("/signup").post((req, res) => {
  const name = req.params.name;
  const password = req.params.password;

  const newUser = new User({ name, password });

  newUser
    .save()
    .then(() => res.json("Usuario añadido satisfactoriamente"))
    .catch((err) =>
      res.status(400).json("Usuario ya registrado o Error:" + err)
    );
});

//fijate desp como implentas esto para que en la res mande la id de el nuevo documento asi lo usas en el front-end para hacer el route a /user/:userid podrias mandar el propio objeto "newUser" desp de .save fijate si cuando lo mandas ya tiene la propiedad de _id

// router.route("/:name").get((req, res) => {
router.route("/login").get((req, res) => {
  User.findOne({ name: req.params.name })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Usuario desconocido o Error:" + err));
});

module.exports = router;
