module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    // 魔法数字
    /* 'no-magic-numbers': ['error', {
      "ignoreArrayIndexes": true,
      "ignore": ["1n", 1],
      "ignoreDefaultValues": true
    }], */
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'warn',
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 'off',
    // 未使用的变量
    'no-unused-vars': [
      'warn',
      {
        wars: 'local',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-prototype-builtins': 'off',
    'no-multiple-empty-lines': [1, { max: 2 }],
    // 未使用的组件
    'vue/no-unused-components': ['warn'],
    // === !==
    eqeqeq: 'error',
    // 单引号
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    // 要求或禁止末尾逗号
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'never',
    //     objects: 'never',
    //     imports: 'never',
    //     exports: 'never',
    //     functions: 'never'
    //   }
    // ],
    // 驼峰命名
    // camelcase: [
    //   'warn',
    //   {
    //     properties: 'never',
    //     ignoreDestructuring: true
    //   }
    // ],
    // 行注释独占一行，在注释信息的上一行
    /*  'line-comment-position': [
      'error',
      {
        "position": 'above'
      }
    ], */
    // 解构赋值
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ]
  }
};
