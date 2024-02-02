const router = require("express").Router();
const bookrouter = require("../module/book/book.route");
router.use("/api/v1/book", bookrouter);
router.get("/", (res, req, next) => {
  try {
    res.json({ msg: "hello form indedx" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
