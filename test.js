var replace = require('./');
var expect = require('chai').expect;

describe('replace()', function() {
  it('replaces the basename of a path', function() {
    expect(replace('/path/to/puppers.mov', 'doggos')).to.equal('/path/to/doggos.mov');
  });

  it('is not confused by weird extensions', function() {
    expect(replace('/path/to/puppers.puppers', 'doggos')).to.equal('/path/to/doggos.puppers');
  });
});
