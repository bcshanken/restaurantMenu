const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    db.User.findOne({ email: req.params.email, password: req.params.password }).then((admin) =>
      res.json({
        message: "Success!",
        success: true
      })
    ).catch(err => {
        res.status(422).json(err)
    });
  },
};
