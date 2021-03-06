var path = require('path');

/**
 * Modify the basename of a path, which is the filename without the extension.
 * @param {String} input - Path to modify.
 * @param {(String|Function)} name - New filename, or a function that takes the old filename and returns the new one.
 * @returns {String} Modified path.
 *
 * @example
 * replace('/path/to/puppers.mov', 'doggos');
 * // => '/path/to/doggos.mov'
 *
 * @example
 * replace('woofers.mov', p => p.replace('oo', ''));
 * // => 'wfers.mov'
 */
module.exports = function replaceBasename(input, name) {
  var params = path.parse(input);
  var replacement = typeof name === 'function'
    ? name(params.name)
    : name;

  params.base = params.base.replace(params.name, replacement);
  params.name = replacement;
  return path.format(params);
}
