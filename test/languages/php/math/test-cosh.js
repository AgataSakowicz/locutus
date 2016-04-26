// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var cosh = require('/Users/kvz/code/phpjs/src/php/math/cosh.js')

describe('src/php/math/cosh.js', function () {
  it('should pass example 1', function (done) {
    cosh(-0.18127180117607017)
    var expected = 1.0164747716114113
    var result = cosh(-0.18127180117607017)
    expect(result).to.deep.equal(expected)
    done()
  })
})