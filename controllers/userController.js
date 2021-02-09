const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    db.User.findOne({ email: req.params.email }).then((admin) =>
      res.json(admin)
    ).catch(err => {
        res.status(422).json(err)
    });
  }
};
