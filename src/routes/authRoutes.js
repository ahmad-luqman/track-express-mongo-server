const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.get('/' , (req, res) => {
  res.send('You made it to the root route');
});

router.get('/signin' , (req, res) => {
  res.send('You made it to the signin route');
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  await user.save();

  res.send('You made it to the signup route');
});

module.exports = router;
