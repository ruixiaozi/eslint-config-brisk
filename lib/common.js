module.exports = {
  "rules": {
    // 禁止使用特定的语法
    // no-restricted-syntax

    // 要求标识符匹配一个指定的正则表达式
    // id-match: ["error", "^[a-z]+([A-Z][a-z]+)*$"]

    // 禁止debugger
    'no-debugger': "warn",
    // 禁止console
    'no-console': "warn",
    // 禁止alert
    'no-alert': "warn",

    // 禁止eval
    "no-eval": "error",

    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': "error",

    // 强制类方法使用this, 否则应该声明为静态方法
    "class-methods-use-this": "error",

    // 最大圈复杂度20
    "complexity": ["error", {
      "max": 20
    }],

    // 控制语句必须加大括号
    "curly": "error",

    // switch默认语句如果没有default，需要注释no default
    "default-case": ["error", {
      "commentPattern": "^no\\sdefault"
    }],

    // .应该与属性放在同一行
    "dot-location": ["error", "property"],

    // 使用===和!==
    "eqeqeq": "error",

    // 一个文件只能包含一个类
    "max-classes-per-file": ["error", 1],

    // 禁用arguments.caller 或者 callee
    "no-caller": "error",


    // 不允许再case子句中声明变量
    "no-case-declarations": "error",

    // 禁止使用看起来像除法的正则表达式（/=）
    "no-div-regex": "error",

    // 禁止if中return之后的else
    "no-else-return": "error",

    // 禁止空解构
    "no-empty-pattern": "error",

    // 禁止扩展内置对象（修改原型）
    "no-extend-native": "error",

    // 禁止不必要的bind
    "no-extra-bind": "error",

    // 禁止不必要的标签（break和continue标签）
    "no-extra-label": "error",

    // 禁止没有break的switch case，但是可以通过注释// break omitted 来使用
    "no-fallthrough": ["error", {
      "commentPattern": "break[\\s\\w]*omitted"
    }],

    // 禁止前导和末尾小数点
    "no-floating-decimal": "error",

    // 禁止对原生对象和制度的全局对象进行赋值
    "no-global-assign": "error",

    // 禁止使用较短的符号实现类型转换,例如!!,~
    "no-implicit-coercion": "error",

    // 禁止使用类似 eval() 的方法, 即执行变量内容为js语句，比如setTimeout的第一个参数可以为字符串
    "no-implied-eval": "error",

    // 禁止不必要的嵌套块
    "no-lone-blocks": "error",

    // 禁止多余空格
    "no-multi-spaces": "error",

    // 禁止多行字符串
    "no-multi-str": "error",

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-new-wrappers": "error",

    // 可以使用八进制
    "no-octal": "off",

    // 禁止对函数参数重新赋值
    "no-param-reassign": "error",

    // 禁止__proto__ ，使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
    "no-proto": "error",

    // 禁止多次声明同一变量
    "no-redeclare": "error",

    // 禁止return赋值语句，除非在（）内
    "no-return-assign": "error",

    // 禁用不必要的 return await
    "no-return-await": "error",

    // 禁用 Script URL，在链接地址中使用 javascript: 被有些人认为是 eval 的一种形式。
    "no-script-url": "error",

    // 禁止自身赋值
    "no-self-assign": "error",

    // 禁止自身比较
    "no-self-compare": "error",

    // 不允许使用逗号操作符,除非 1. 在初始化或者更新部分 for 语句时。 2. 如果表达式序列被明确包裹在括号中
    "no-sequences": "error",

    // 禁止抛出字面量和那些不可能是 Error 对象的表达式
    "no-throw-literal": "error",

    // 禁用一成不变的循环条件
    "no-unmodified-loop-condition": "error",

    // 禁止未使用过的标签
    "no-unused-labels": "error",

    // 禁用不必要的 .call() 和 .apply()
    "no-useless-call": "error",

    // 禁止不必要的 catch 子句
    "no-useless-catch": "error",

    // 禁止没有必要的字符拼接
    "no-useless-concat": "error",

    // 禁用不必要的转义
    "no-useless-escape": "error",

    // 禁止多余的 return 语句
    "no-useless-return": "error",

    // 禁用警告注释，例如TODO,FIXME,ANY OTHER TERM
    "no-warning-comments": ["error", {
      "terms": ["todo", "fixme"],
      "location": "anywhere"
    }],

    // 禁用 with 语句
    "no-with": "error",

    // 建议在正则表达式中使用命名捕获组, /(?<id>ba[rz])/
    "prefer-named-capture-group": "error",

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    "prefer-promise-reject-errors": "error",

    // 强制在 parseInt() 使用基数参数
    "radix": "error",

    // 禁止使用不带 await 表达式的 async 函数
    "require-await": "error",

    // 强制在 RegExp 上使用 u 标志, 1. 使正则表达式正确处理 UTF-16 Surrogate Pair 2. 使正则表达式在禁用时尽早抛出语法错误
    "require-unicode-regexp": "error",

    // 需要把立即执行的函数包裹起来,(function () { return { y: 1 };})()
    "wrap-iife": ["error", "inside"],

    // 禁止Yoda条件,字符串字面量只能出现在后面，例如color === "red"
    "yoda": "error",

    // 禁止删除变量（但是可以删除对象属性）
    "no-delete-var": "error",

    // 禁用与变量同名的标签
    "no-label-var": "error",

    // 关键字不能被遮蔽
    "no-shadow-restricted-names": "error",

    // 禁用未声明的变量,除非显式地在 /*global ...*/ 注释中指定，或在 globals key in the configuration file 中指定
    "no-undef": "error",

    // 不允许初始化变量值为 undefined
    "no-undef-init": "error",



    /**
     * ---------------------------------------
     * 这些规则是关于风格指南的，而且是非常主观的
     * Stylistic Issues
     * ---------------------------------------
     */

    // 在数组开括号后和闭括号前强制换行(数组元素只要有换行则必须换行)
    "array-bracket-newline": ["error", { "multiline": true }],

    // 禁止在括号内使用空格
    "array-bracket-spacing": ["error", "never"],

    // 强制在代码块中开括号前和闭括号后有空格
    "block-spacing": "error",

    // 大括号风格要求,将大括号放在控制语句或声明语句同一行的位置
    "brace-style": "error",

    // 要求使用骆驼拼写法
    "camelcase": "error",

    // 要求使用拖尾逗号,反括号与最后一个元素不在一行的时候
    "comma-dangle": ["error", "always-multiline"],

    // 强制在逗号后使用空格
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],

    // 强制换行逗号位于上一行的行末
    "comma-style": ["error", "last"],

    // 计算属性，即[]包围的属性，[]内不需要空格
    "computed-property-spacing": ["error", "never"],

    // 指定一个变量作为 this 的别名，只能使用_that来保存this
    "consistent-this": ["error", "_that"],

    // 要求文件末尾保留一行空行
    "eol-last": ["error", "always"],

    // 禁止在函数标识符和其调用之间有空格
    "func-call-spacing": ["error", "never"],

    // 要求函数名与赋值给它们的变量名或属性名相匹配
    "func-name-matching": "error",

    // 函数参数有一个换行，则其他必须换行
    "function-paren-newline": ["error", "multiline"],

    // 强制标识符的最大（25）和最小（2）长度
    "id-length": ["error", {
      "min": 2,
      "max": 25,
      "exceptions": ["i", "j", "k"]
    }],

    // 禁止在箭头函数体之前出现换行。
    "implicit-arrow-linebreak": ["error", "beside"],

    // 2个空格，switch也是2个空格缩进
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],

    // jsx中使用双引号
    "jsx-quotes": ["error", "prefer-double"],

    // 强制在对象字面量的键和值之间空格
    "key-spacing": "error",

    // 要求在关键字之前/之后至少有一个空格
    "keyword-spacing": "error",

    // 强制行内注释在上方
    "line-comment-position": ["error", {
      "position": "above"
    }],

    // 强制使用一致的换行符风格 Linux
    "linebreak-style": ["error", "unix"],

    // 要求块注释前空一行
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "beforeLineComment": false
    }],

    // 要求在类成员之后有一行空行
    "lines-between-class-members": ["error", "always"],

    // 最大嵌套深度4
    "max-depth": ["error", 4],

    // 一行最大字符数 150
    "max-len": ["error", {
      "code": 150,
      "ignoreComments": true
    }],

    // 一个文件最大行数 500
    "max-lines": ["error", 500],

    // 一个函数的最大行数 50
    "max-lines-per-function": ["error", 50],

    // 回调函数的最大深度 4
    "max-nested-callbacks": ["error", 4],

    // 限制函数定义中最大参数个数5
    "max-params": ["error", 5],

    // 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *
    "multiline-comment-style": ["error", "starred-block"],

    // 要求构造函数首字母大写
    "new-cap": ["error", {
      "capIsNew": false
    }],

    // 要求调用无参构造函数时带括号
    "new-parens": "error",

    // 要求方法链式调用有一个换行符(同一行最多2个链式调用)
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 2
    }],

    // 禁止使用 Array 构造函数.唯一的例外是通过给构造函数传入指定的一个数值来创建稀疏数组。
    "no-array-constructor": "error",

    // 注释紧随代码，会使代码是变得难以阅读.禁止使用内联注释
    "no-inline-comments": "error",

    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    "no-lonely-if": "error",

    // 禁止混合使用不同的操作符，需要使用括号来包裹不同操作符的表达式
    "no-mixed-operators": "error",

    // 禁止使用 空格 和 tab 混合缩进
    "no-mixed-spaces-and-tabs": "error",

    // 禁止连续赋值
    "no-multi-assign": "error",

    // 不允许多个空行 ，最大2个连续空行，文件末尾最大1个，文件开始不允许出现空行
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 1,
      "maxBOF": 0
    }],

    // 1.含有 else 分支的 if 语句 ; 2.三元表达式.  禁用否定表达式
    "no-negated-condition": "error",

    // 禁止使用嵌套的三元表达式
    "no-nested-ternary": "error",

    // 禁止使用 Object 构造函数
    "no-new-object": "error",

    // 禁用 tab
    "no-tabs": "error",

    // 禁用行尾空白
    "no-trailing-spaces": "error",

    // 禁止可以表达为更简单结构的三元操作符
    "no-unneeded-ternary": "error",

    // 禁止属性前有空白 foo. bar 或者foo .bar
    "no-whitespace-before-property": "error",

    // 强制在花括号内使用一致的换行符
    "object-curly-newline": ["error"],

    // 要求花括号内有空格 (除了 {})
    "object-curly-spacing": ["error", "always"],

    // 要求尽可能地简化赋值操作
    "operator-assignment": ["error", "always"],

    // 换行，操作符要放在行首
    "operator-linebreak": ["error", "before"],

    // 禁止类的开始或末尾有空行,块语句和switch开始和末尾不能有空行
    "padded-blocks": [
      "error",
      { "blocks": "never", "classes": "always", "switches": "never" },
    ],

    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
    "prefer-object-spread": "error",

    // 要求对象字面量属性名称使用一致的引号，要么全部用引号，要么都不用
    "quote-props": ["error", "consistent"],

    // 要求尽可能地使用单引号
    "quotes": ["error", "single"],

    // 要求在语句末尾使用分号
    "semi": ["error", "always"],

    // 它强制分号之后有空格，禁止分号之前有空格。
    "semi-spacing": "error",

    // 强制分号出现在句子末尾。
    "semi-style": ["error", "last"],

    // 块语句要求有一个前置空格，即{}前有一个空格
    "space-before-blocks": "error",

    // 禁止在参数的 ( 前面有空格。
    "space-before-function-paren": ["error", "never"],

    // 强制圆括号内没有空格
    "space-in-parens": ["error", "never"],

    // 要求中缀操作符周围有空格
    "space-infix-ops": "error",

    // 要求一元操作符周围有正确的空格
    "space-unary-ops": "error",

    // // 或 /* 必须跟随至少一个空白。
    "spaced-comment": ["error", "always"],

    // switch 的冒号左右空格.要求冒号之后又一个或多个空格。禁止冒号之前又空格。
    "switch-colon-spacing": "error",

    // 禁止在模板标记和它们的字面量之间有空格
    "template-tag-spacing": "error",

    // 箭头函数体使用大括号,当大括号是可以省略的，强制不使用它们
    "arrow-body-style": ["error", "as-needed"],

    // 要求箭头函数的参数使用圆括号
    "arrow-parens": ["error", "always"],

    // 要求箭头函数的箭头之前或之后有空格
    "arrow-spacing": "error",

    // 验证构造函数中 super() 的调用
    "constructor-super": "error",

    // 强制 generator 函数中 * 号周围有空格,前方1个，后面没有
    "generator-star-spacing": ["error", {
      "before": true,
      "after": false
    }],

    // 不允许修改类声明的变量
    "no-class-assign": "error",

    // 箭头函数 (=>) 在语法上与一些比较操作符(>，<，<= 和 >=)相似,禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-confusing-arrow": "error",

    // 不允许类成员中有重复的名称
    "no-dupe-class-members": "error",

    // 禁止重复导入
    "no-duplicate-imports": "error",

    // 禁止 Symbolnew 操作符和 new 一起使用
    "no-new-symbol": "error",

    // 在构造函数中禁止在调用super()之前使用this或super。
    "no-this-before-super": "error",

    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": "error",

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-useless-rename": "error",

    // 要求使用 let 或 const 而不是 var
    "no-var": "error",

    // 要求对象字面量简写语法
    "object-shorthand": "error",

    // 优先使用箭头函数作为回调函数
    "prefer-arrow-callback": "error",

    // 优先使用数组和对象解构
    "prefer-destructuring": "error",

    // 使用剩余参数代替 arguments
    "prefer-rest-params": "error",

    // 建议使用扩展语法而非.apply()
    "prefer-spread": "error",

    // 建议使用模板字面量而非字符串连接
    "prefer-template": "error",

    // 禁用函数内没有yield的 generator 函数
    "require-yield": "error",

    // 扩展运算符及其表达式之间不允许有空格。
    "rest-spread-spacing": ["error", "never"],

    // 要求 symbol 描述
    "symbol-description": "error",

    // 模板字符串中禁止花括号内出现空格。
    "template-curly-spacing": "error",

    // 强制在 yield* 表达式中 * 前面使用空格
    "yield-star-spacing": ["error", "before"],

  }

}
