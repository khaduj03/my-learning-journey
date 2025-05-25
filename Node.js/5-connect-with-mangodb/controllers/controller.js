const autoBind = require("auto-bind").default;

class Controller {
  constructor() {
    //here we use from auto-bind
    autoBind(this);
  }
}
module.exports = Controller;
