// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var json_last_error = require('/Users/kvz/code/phpjs/src/php/json/json_last_error.js')

describe('src/php/json/json_last_error.js', function () {
  it('should pass example 1', function (done) {
    json_last_error()
    var expected = 0
    var result = json_last_error()
    expect(result).to.deep.equal(expected)
    done()
  })
})