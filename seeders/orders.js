let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurant-menu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

let orders =[
    {
      items: [{
          title: "Tacos",
          desc: "Tacooooo Tuesday!",
          details: "These Are Good",
          price: "$15.00"
      }],
      status: "Pending",
      date: Date.now()
    }
]

db.Order.deleteMany({}).then(() => db.Order.collection.insertMany(orders))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });