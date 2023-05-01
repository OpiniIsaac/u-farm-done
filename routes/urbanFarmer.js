const express = require ("express");
const router = express.Router();

router.get('/messages', async (req, res) => {
  const user = await User.findById(req.user._id);
  const messages = await Message.find({ toUser: user._id });

  res.render('messages', { messages });
});

module.exports = router
    