require("env2")(".env");
const { sign, verify } = require("jsonwebtoken");

const signToken = (data) => {
  return new Promise((resolve, reject) => {
    sign(data, process.env.SECRT_KEY, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.SECRT_KEY, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

module.exports = {
  signToken,
  checkToken,
};
