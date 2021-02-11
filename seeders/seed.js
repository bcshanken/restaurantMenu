let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurant-menu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

let menuSeed = [
    {
        title: "Chive Crab Cakes",
        description: "Fresh jumbo lump, mixed with minced chives, served with  a  chili lime sauce.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276143/Aquaman/Chive-Crab-Cakes_gg9iiw.jpg",
        price: "8.99",
        category: "Appetizer",
    },
    {
        title: "Fried Pickles",
        description: "Dill pickles spears fried with seasoned batter and served with a cajun dipping sauce.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276299/Aquaman/Fried-Pickles_ayogug.jpg",
        price: "4.50",
        category: "Appetizer",
    },
    {
        title: "Tortellini & Shrimp Skewers",
        description: "Grilled shrimp and tortellini filled with cheese and smoked peppers. Served with a Sun-Dried Tomato Sauce.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276476/Aquaman/Tortellini-Shrimp-Skewers_zm76yw.jpg",
        price: "7.50",
        category: "Appetizer",
    },
    {
        title: "Smoked Salmon Deviled Eggs",
        description: "Traditional Deviled eggs with the added flair of smoked salmon",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276679/Aquaman/Smoked-Salmon-Deviled-Egg_lsgnts.jpg",
        price: "4.00",
        category: "Appetizer",
    },
    {
        title: "Chesapeake Crab Dip",
        description: "A warm combination of cheeses, seasoning, creams and fresh lump crab served with garlic roasted chips",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276791/Aquaman/Chesapeake-Crab-Dip_cqlkhy.jpg",
        price: "6.50",
        category: "Appetizer",
    },
    {
        title: "Creamy Shrimp Pasta",
        description: "Light grilled shrimp served on a bed of pasta with our house made creamy parmesan sauce.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277203/Aquaman/Shrimp-Pasta_odsh05.jpg",
        price: "13.00",
        category: "Entree",
    },
    {
        title: "Classic Blackened Salmon",
        description: "Our ultimate salmon blackened to perfection with tastes of citrus. Sides include seasonal veggies and grilled potatoes.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277439/Aquaman/Blackened-Salmon_azh4ci.jpg",
        price: "16.50",
        category: "Entree",
    },
    {
        title: "Epic Fish Tacos",
        description: "Grilled Mahi Mahi tacos served on tasted tortillas, cabbage, and fresh cilantro topped with a baja sauce.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277705/Aquaman/Fish-Tacos_ulflcj.jpg",
        price: "12.75",
        category: "Entree",
    },
    {
        title: "Pan Fried Cod",
        description: "Coated in paprika and other seasonings and fried to a crispy perfection.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277861/Aquaman/Pan-Fried-Cod_uflmmx.jpg",
        price: "13.25",
        category: "Entree",
    },
    {
        title: "Shrimp and Broccoli",
        description: "A light alternative to give you the fresh pop of shrimp and broccoli. Flavored with your choice of a spicy chilli sauce or garlic butter.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277985/Aquaman/Shrimp-and-Broccoli_fdz5xt.jpg",
        price: "11.50",
        category: "Entree",
    },
    {
        title: "Pan Seared Scallops",
        description: "Perfectly Seared crisp outside. Served with asparagus and mashed potatoes.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278040/Aquaman/Pan-Seared-Scallops_tq5qna.jpg",
        price: "18.00",
        category: "Entree",
    },
    {
        title: "Salmon Bowl",
        description: "Grilled Salmon served in a bowl with Wild rice, broccoli and a tahini dressing.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278380/Aquaman/Salmon-Bowl_jp7fka.jpg",
        price: "15.50",
        category: "Entree",
    },
    {
        title: "Veggie Cove",
        description: "Fresh Roasted Vegetables on a bed of quinoa.  A robust collection of potatoes, squash, brocoli, chickpeas, and onions to hit all your taste buds.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278767/Aquaman/Veggie-Cove_qxfcfo.jpg",
        price: "13.00",
        category: "Entree",
    },
    {
        title: "Shrimp Curry",
        description: "All the classic flavor you would expect from a curry. This meal is splendidly balanced between spicy and savory with a Thai red curry paste.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279412/Aquaman/Shrimp-Curry_vv5p77.jpg",
        price: "14.40",
        category: "Entree",
    },
    {
        title: "Seared Ahi Tuna",
        description: "Our tuna is seared with a  custom house collection of seasoning seared onto a crispy skin. Served with seasonal veggies and potatoes.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279559/Aquaman/Ahi_Tuna_biabwg.jpg",
        price: "16.50",
        category: "Entree",
    },
    {
        title: "Quinoa Stuffed Peppers",
        description: "Roasted peppers filled with quinoa and grilled vegetables",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279688/Aquaman/Quinoa-Stuffed-Peppers_wsbezl.jpg",
        price: "12.50",
        category: "Entree",
    },
    {
        title: "Skillet Chocolate Chip Cookie",
        description: "The classic chocolate chip cooking cooked in our cast iron skillet.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279892/Aquaman/Skillet-Cookie_qdlmjt.jpg",
        price: "4.00",
        category: "Dessert",
    },
    {
        title: "Peanut Butter Balls",
        description: "A basket of peanut butter and date balls dipped in warm chocolate. Perfect for sharing",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280049/Aquaman/Peanut-Butter-Balls_luhyzx.jpg",
        price: "7.00",
        category: "Dessert",
    },
    {
        title: "Iced Applesauce Cookies",
        description: "Oatmeal and apple sauce come together to make this perfectly chewy cookies.",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280177/Aquaman/Applesauce-Cookies_cnmzxa.jpg",
        price: "3.50",
        category: "Dessert",
    },
    {
        title: "Grilled Pineapple",
        description: "Juicy slices of pineapple with a smoky grilled taste",
        img: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280236/Aquaman/Grilled-Pineapple_bb7li2.jpg",
        price: "4.50",
        category: "Dessert",
    },
]

let userSeed = [
    {
        email: "pc@test.com",
        password: "$2b$10$Gks6Vx.2pMSqEaRCPuxESO0QEW/wWmMwOHE8nrN8tqgTrYgiitJUa"
    }
]

db.User.deleteMany({}).then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Menu.deleteMany({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
// db.restaurantMenu.collection.insertMany(menuSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });