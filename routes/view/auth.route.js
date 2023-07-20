const router = require("express").Router();
const RegForm = require("../../components/RegForm");

router.get("/reg", (req, res) => {
  res.renderComponent(RegForm, { title: "Registration" });
});

module.exports = router;
