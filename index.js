var path = require('path');

/**
 * Modify the basename of a path, which is the filename without the extension.
 * @param {String} input - Path to modify.
 * @param {String} name - New filename.
 * @returns {String} Modified path.
 *
 * @example
 * replace('/path/to/puppers.mov', 'doggos');
 * // => '/path/to/doggos.mov'
 */
module.exports = function replaceBasename(input, name) {
  var params = path.parse(input);
  params.base = params.base.replace(params.name, name);
  params.name = name;
  return path.format(params);
}
