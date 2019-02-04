const express = require("express");
const router = express.Router();
const Film = require("../../models/Films"); //--> Bring in Film Model.[We need it to make queries to our DB, like "film.find" or "film.save"]

/***
 * @process: GET REQUEST to api/films
 * @description: Get All films
 * @access: Public
 ***/
router.get("/", (req, res) => {
  Film.find()
    .sort({ date: -1 }) //--> sorting films in descending order
    .then(films => res.json(films));
});

/***
 * @process: POST REQUEST to api/films
 * @description: Create(Post) a Film
 * @access: Public
 * @comes from "client/src/actions/filmAction.js"
 ***/
router.post("/", (req, res) => {
  const newFilm = new Film({
    name: req.body.name,
    year: req.body.year,
    description: req.body.description,
    actor: req.body.actor,
    image: req.body.image
  });
  newFilm.save().then(film => res.json(film));
  console.log(newFilm);
});

/***
 * @process: DELETE REQUEST to api/films:id
 * @description: Delete a Film
 * @access: Public
 ***/
router.delete("/:id", (req, res) => {
  Film.findById(req.params.id)
    .then(film =>
      film
        .remove()
        .then(() => res.json({ success: "Film deleted successfully" }))
    )
    .catch(error => res.status(404).json({ success: "Film is not exists" }));
  console.log(req.params.id);
});

module.exports = router;
