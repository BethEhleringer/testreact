const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log("I made it to this route...")
 axios
   .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`)
   .then(({ data: { items } }) => { /*console.log(items); */console.log(items[0].volumeInfo); res.json(items)})
    .catch(err => res.status(422).json(err)); 
    
}); 
//axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`).then(result => res.json(result.data.items).catch(err => console.log(err)))});

module.exports = router;
