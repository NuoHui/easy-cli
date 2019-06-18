const env = require('../lib/util/env');

test('Has git.', () => {
  expect(env.hasGit()).toBeTruthy();
});

test('hasProjectGit', () => {
  expect(env.hasProjectGit()).toBeTruthy();
});
