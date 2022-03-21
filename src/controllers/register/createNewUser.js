const { hash } = require("bcryptjs");
const { createNewUserQuery, getUserByEmailQuery } = require("../../database");
const {
  registerSchema,
  signToken,
  costumizesErr,
} = require("../../validation");

const createNewUser = (req, res, next) => {
  const { user_name, email, password } = req.body;
  registerSchema
    .validateAsync(req.body)
    .then(() => getUserByEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw costumizesErr("Email is used", 400);
      } else {
        return hash(password, 8);
      }
    })
    .then((hashPassword) =>
      createNewUserQuery({ user_name, email, password: hashPassword })
    )
    .then(({ rows }) => signToken({ userId: rows.id }))
    .then((token) => {
      res
        .cookie("token", token,{
          
              httpOnly: true,
              secure: true,
            
        })
        .redirect("/");
    })

    .catch((err) => {
      if (err.name === "ValidationError") {
        res.json({ massage: err });
      } else {
        next(err);
      }
    });
};

module.exports = createNewUser;