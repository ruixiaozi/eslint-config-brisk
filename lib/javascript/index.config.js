const {rules} = require("../common");

module.exports = {
  "globals": {
    "windows": "writable", // 可写入1
    "$": "readonly" // 只读
  },
  "rules": {
    ...rules,

    // 禁止变量声明覆盖外层作用域的变量
    "no-shadow": "error",

    // 禁止定义前使用
    "no-use-before-define": "error",

    // 禁用不必要的构造函数
    "no-useless-constructor": "error",

    // 禁止未使用过的变量 ,不检查最后一个使用的参数之前出现的未使用的位置参数，但是检查最后一个使用的参数之后的所有命名参数和所有位置参数
    "no-unused-vars": ["error", {
      "args": "after-used"
    }],

  }

}
