module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 构建相关
        'ci', // CI 相关
        'docs', // 文档相关
        'feat', // 新功能
        'fix', // 修复 bug

        'perf', // 性能优化
        'refactor', // 代码重构
        'revert', // 回滚
        'style', // 格式相关
        'test', // 测试相关
      ],
    ],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
