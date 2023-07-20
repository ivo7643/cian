const router = require("express").Router();
const RegForm = require("../../components/RegForm");
const LoginForm = require("../../components/LoginForm");

router.get("/reg", (req, res) => {
  res.renderComponent(RegForm, { title: "Registration" });
});

router.get("/log", (req, res) => {
  res.renderComponent(LoginForm, { title: "Login" });
});
module.exports = router;
