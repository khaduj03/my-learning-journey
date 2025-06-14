const validator = require("./validator");
const { check } = require("express-validator");

class AuthValidator extends validator {
  register() {
    return [
      check("first_name", "Name is required").not().isEmpty(),

      check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("The email format is incorrect"),

      check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 5 })
        .withMessage("The password must be at least 5 characters"),
    ];
  }

  login() {
    return [
      check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("The email format is incorrect"),

      check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 5 })
        .withMessage("The password must be at least 5 characters"),
    ];
  }
}

module.exports = new AuthValidator();
