const router = require("express").Router();


router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;