const router = require("express").Router();
const orderRoutes = require("./order");
const menuRoutes = require("./menu");

// Order routes
router.use("/order", orderRoutes);

// Menu routes
router.use("/menu", menuRoutes);

module.exports = router;
