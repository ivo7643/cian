const router = require("express").Router();
const Page404 = require("../../components/Page404");

router.get("/", (req, res) => {
  res.renderComponent(Page404, { title: "404" });
});

module.exports = router;
