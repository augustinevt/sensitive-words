'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replaces blacklisted words with asterisks', function () {
  expect((0, _2.default)('The name of the NX with be Nintendo Switch', ['switch'])).toBe('The name of the NX with be Nintendo ***');
});

test('replaces multiple blacklisted words with asterisks', function () {
  expect((0, _2.default)('The name of the NX with be Nintendo Switch. The switch will be awesome.', ['switch'])).toBe('The name of the NX with be Nintendo ***. The *** will be awesome.');
});