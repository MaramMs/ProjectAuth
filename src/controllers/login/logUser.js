const { compare } = require("bcryptjs");
const { loginSchema, costumizesErr, signToken } = require("../../validation");
const { logUserQuery } = require("../../database");

let userId = "";

const logUser = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then(({ email }) => logUserQuery(email))
    .then((data) => {
      if (data.rowCount) {
        userId = data.rows[0].id;
        return compare(password, data.rows[0].password);
      }
    })
    .then((value) => {
      if (value === true) {
        return signToken({ id: userId });
      } else {
        throw costumizesErr(
          "Soooory you do not have account ,please Sign Up",
          400
        );
      }
    })
    .then((token) => {
      res
        .cookie("token", token)
        .json("login");
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.json({ massage: err });
      } else {
        next(err);
      }
    });
};

module.exports = {
  logUser,
};
