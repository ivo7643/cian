const router = require("express").Router();
const { Favorite } = require("../../db/models");
router.post("/", async (req, res) => {
  try {
    const { apartId } = req.body;
    const userIdsess = req.session.userId;
    if (apartId && userIdsess) {
      const favorites = await Favorite.create({ userId:userIdsess, apartmentId:apartId });
      res.json({ message: "ok" });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

module.exports = router;
