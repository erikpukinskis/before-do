var library = require("module-library")(require)

library.define(
  "before-do",
  function() {
    return function beforeDo() {}
  }
)
