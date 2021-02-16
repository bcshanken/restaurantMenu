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
    items: [
      {
        title: "Tacos",
        addOns: ["Fries", "Salad"],
        details: "These Are Good",
      },
      {
        title: "Fish",
        addOns: ["Fries", "Salad"],
        details: "These Are Good",
      },
    ],
    status: "Pending",
    date: Date.now(),
    price: 23.00,
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
