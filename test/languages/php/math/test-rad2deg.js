// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var rad2deg = require('/Users/kvz/code/phpjs/src/php/math/rad2deg.js')

describe('src/php/math/rad2deg.js', function () {
  it('should pass example 1', function (done) {
    rad2deg(3.141592653589793)
    var expected = 180
    var result = rad2deg(3.141592653589793)
    expect(result).to.deep.equal(expected)
    done()
  })
})