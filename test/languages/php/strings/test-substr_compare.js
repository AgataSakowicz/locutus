// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var substr_compare = require('/Users/kvz/code/phpjs/src/php/strings/substr_compare.js')

describe('src/php/strings/substr_compare.js', function () {
  it('should pass example 1', function (done) {
    substr_compare("abcde", "bc", 1, 2)
    var expected = 0
    var result = substr_compare("abcde", "bc", 1, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})