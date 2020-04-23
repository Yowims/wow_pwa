const express = require('express')
const app = express();
const path = require('path');

const reload = require('reload');

const router = express.Router();

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname+"/views/index.html"));
});

router.get("/manifest", function(req, res){
  res.sendFile(path.join(__dirname+"/manifest.webmanifest"));
});

app.use('/', router);

app.use(express.static('public'));

app.use(
  express.static('views')
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!')
});

reload(app);