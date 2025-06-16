const {check}=require("express-validator")

exports.register=()=>{
    return [
      check("username", "Name is required").not().isEmpty(),
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

  exports.login=()=>{
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