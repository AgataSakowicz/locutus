// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var vprintf = require('/Users/kvz/code/phpjs/src/php/strings/vprintf.js')

describe('src/php/strings/vprintf.js', function () {
  it('should pass example 1', function (done) {
    vprintf("%01.2f", 123.1)
    var expected = 6
    var result = vprintf("%01.2f", 123.1)
    expect(result).to.deep.equal(expected)
    done()
  })
})