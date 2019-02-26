var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hw1', { title: "Miranda's Hw1" });
});

  router.post('/user', function(req, res) {
    var Name = req.body.Name;
    var LastName = req.body.LastName;
    res.send(Name + ' ' + LastName);
});


module.exports = router;