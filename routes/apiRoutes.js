const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log("I made it to this route...")
  axios
   // .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
   .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`)
    //.then(({ data: { volumeInfo } }) => res.json(volumeInfo))
   .then(({ data: { items } }) => { console.log(items); console.log(items[0].volumeInfo); res.json(items)})
   // .then(({ data: { volumeInfo } }) => { console.log(volumeInfo); console.log(volumeInfo[0]); res.json(volumeInfo)})

    //.catch(err => res.status(422).json(err));
    .catch(err => res.status(422).json(err));
    
});  
//I wanted to check out someone else did this since I knew I was off by a character, and I am trying 
//a snippet from github.com/pengjoshua/react-axios-bookfinder/blob/master/src/App.js'
/* getBooks() {
  axios.request({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
  }).then((response) => {
    this.setState({books: response.data.items}, () => {
      console.log(this.state);
    })
  }).catch((error) => {
    console.log(error);
  });
} */
//end of pengjoshua snippet
/*
handleChange(text){
  this.setState({text: text}, this.getBooks());
} */

module.exports = router;
