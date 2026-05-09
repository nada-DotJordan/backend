const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/protected", auth, (req, res) => {
  res.json({
    msg: "You accessed protected route ",
    userId: req.user,
  });
});

module.exports = router;