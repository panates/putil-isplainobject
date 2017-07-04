/* eslint-disable */
const assert = require('assert'),
    isPlainObject = require('../');

function Test() {
}

describe('isplainobject', function() {

  it('should return true for plain object ', function(done) {
    assert.ok(isPlainObject({a: 1}));
    done();
  });

  it('should return false for Number ', function(done) {
    assert.ok(!isPlainObject(1));
    done();
  });

  it('should return false for String ', function(done) {
    assert.ok(!isPlainObject('1'));
    done();
  });

  it('should return false for class instance ', function(done) {
    assert.ok(!isPlainObject(new Test()));
    done();
  });

  it('should return false for class itself ', function(done) {
    assert.ok(!isPlainObject(Test));
    done();
  });

});