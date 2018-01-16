const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  console.log(tweets)
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
  // console.log(list)
});

router.get('/tweets/:tweetId', function(req, res) {
	var tweetId = req.params.tweetId; 
	var ourTweet = tweetBank.find({tweetId: tweetId}); 
	res.render( 'index', { tweets: tweets})
});





module.exports = router;