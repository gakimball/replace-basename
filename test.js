var replace = require('./');
var expect = require('chai').expect;

describe('replace()', function() {
  it('replaces the basename of a path', function() {
    expect(replace('/path/to/puppers.mov', 'doggos')).to.equal('/path/to/doggos.mov');
  });

  it('is not confused by weird extensions', function() {
    expect(replace('/path/to/puppers.puppers', 'doggos')).to.equal('/path/to/doggos.puppers');
  });

  it('can accept a function as the second parameter', () => {
    var fn = function(path) {
      return 'sub' + path;
    }

    expect(replace('/path/to/woofers.mp4', fn)).to.equal('/path/to/subwoofers.mp4');
  });
});
