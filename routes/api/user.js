const router = require("express").Router();
const userController = require("../../controllers/userController")

router
  .route("/:email")
  .get(userController.findOne)

module.exports = router;