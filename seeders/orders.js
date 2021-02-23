let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurant-menu",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

let orders = [
  {
    price: "18.50",
    items: [
      {
        instructions: "Extra crispy",
        menuItem: "602761f204bc8f768ca41b17",
        addOns: ["602761f204bc8f768ca41b22"],
      },
    ],
  },
  {
    price: "18.50",
    items: [
      {
        menuItem: "602761f204bc8f768ca41b0e",
        addOns: [
          "602761f204bc8f768ca41b20",
          "602761f204bc8f768ca41b21",
          "602761f204bc8f768ca41b1f",
        ],
      },
    ],
  },
];

db.Order.deleteMany({})
  .then(() => db.Order.collection.insertMany(orders))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
