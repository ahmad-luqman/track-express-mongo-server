const express = require('express');

const router = express.Router();

router.get('/' , (req, res) => {
  res.send('You made it to the root route');
});

router.get('/signin' , (req, res) => {
  res.send('You made it to the signin route');
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.send('You made a post request');
});

module.exports = router;
