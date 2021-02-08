const router = require("express").Router();
const orderRoutes = require("./order");
const menuRoutes = require("./menu");
const userRoutes = require("./user")

// Order routes
router.use("/order", orderRoutes);

// Menu routes
router.use("/menu", menuRoutes);

router.use("/user", userRoutes)

module.exports = router;
