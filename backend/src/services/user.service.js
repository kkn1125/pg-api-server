const { throwException, CustomException } = require("../customException");
const sql = require("../database/mariadb");

const user = require("../models/user");

user.findAll = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    try {
      if (err) {
        throwException(500);
      } else {
        res.status(200).json({
          ok: true,
          payload: rows,
        });
      }
    } catch (e) {
      res.status(e.status).json(new CustomException(e).toJson());
    }
  });
};

user.findById = (req, res) => {
  sql.query("select * from user where ?", req.params, (err, rows) => {
    try {
      if (err) {
        throwException(500);
      } else {
        if (rows.length === 0) {
          throwException(404);
        } else {
          res.status(200).json({
            ok: true,
            payload: rows[0],
          });
        }
      }
    } catch (e) {
      res.status(e.status).json(new CustomException(e).toJson());
    }
  });
};

user.update = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

user.delete = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

/**
 * ## user signup
 */
user.signup = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

/**
 * ## compare password with input password
 */
user.comparePassword = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

module.exports = user;
