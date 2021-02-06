const router = require("express").Router();


router
  .route("/:email")
  .get(menuController.find)
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;