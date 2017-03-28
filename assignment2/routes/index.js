var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About Us'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact Us'
  });
});

module.exports = router;
