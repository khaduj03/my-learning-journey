const validator=require("./validator")
const { check } = require("express-validator");

class UserValidator extends validator {
    handle(){
        return   [

            check("email", "The email format is incorrect").isEmail(),
        
            check("password", "The password must be at least 5 characters").isLength({
              min: 5,
            }),
          ]
    }
}

module.exports = new UserValidator;