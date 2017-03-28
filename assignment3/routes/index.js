var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

/* GET about page. */
router.get('/about', function(req, res){
  res.render('about', {
    title: 'About Us'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact Us'
  });
});

/* POST user data entered on Contact page is sent to server */
router.post('/contact', function (req, res) {
	let fname = req.body.firstname;
	let lname = req.body.lastname;
    let email = req.body.email;

    console.log('First Name: ' + fname);
    console.log('Last Name: ' + lname);
    console.log('Email Address: ' + email )
    res.send('Posted data: First Name: ' + fname + 
    	', Last Name: ' + lname + ', Email Address: ' + email);
});


module.exports = router;
