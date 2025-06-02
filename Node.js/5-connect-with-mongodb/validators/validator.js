const autoBind = require("auto-bind").default;

class Validator {
  constructor() {
    autoBind(this);
  }
}
module.exports = Validator;
