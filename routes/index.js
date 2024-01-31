const router = require("express").Router();
router.get("/", (res, req, next) => {
  try {
    res.json({ msg: "hello form indedx" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
