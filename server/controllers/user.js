const _ = require("lodash");
const User = require("../data_models/user");

exports.getAllUsers = (req, res, next) => {
  User.find()
    .exec()
    .then(users => {
      const usersToSend = users.map(user => {
        return user.infoToSend();
      });
      return res.json(_.mapKeys(usersToSend, "_id"));
    })
    .catch(err => {
      console.log(err);
      return res.json({ err: true, errMsg: err });
    });
};
