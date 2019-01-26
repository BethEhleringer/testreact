const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log("I made it to this route...")
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q", { params: req.query })
    .then(({ data: { volumeInfo } }) => res.json(volumeInfo))
    //.catch(err => res.status(422).json(err));
    .catch(function (error) {
      console.log(error);
    });
    
});

module.exports = router;
