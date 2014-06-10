var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'npm demo for CI with Artifactory' });
});

module.exports = router;
