const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();
const val = '';

app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req, res) {
  res.json({ name: val });
});

// app.get("/", function (req, res, next) {
//   res.json({ name: "Aayansh" });
// });

// module.exports = router;

app.post('/', function(req,res){
    console.log(req.body);
    val = req.body;
    res.status(200).send({"message": "data recevied"});
})

app.listen(PORT, function(req, res){
    console.log("Server is running on localhost " + PORT)
})
