// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var getrandmax = require('/Users/kvz/code/phpjs/src/php/math/getrandmax.js')

describe('src/php/math/getrandmax.js', function () {
  it('should pass example 1', function (done) {
    getrandmax()
    var expected = 2147483647
    var result = getrandmax()
    expect(result).to.deep.equal(expected)
    done()
  })
})