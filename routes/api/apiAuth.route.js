const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.post("/reg", async (req, res) => {
  try {
    const { login, password, email } = req.body;
    if (login && password && email) {
      let user = await User.findOne({ where: email });
      if (!user) {
        const hashPass = await bcrypt.hash(password, 10);
        user = await User.create({ login, password: hashPass, email });
        req.session.userId = user.id;
        res.locals.user = user.name;
        res.json({ message: "ok" });
      } else {
        res.json({ message: "Такой пользователь уже существует" });
      }
    } else {
      res.json({ message: "Заполните все поля" });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

module.exports = router;
