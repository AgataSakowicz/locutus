// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var set_time_limit = require('/Users/kvz/code/phpjs/src/php/info/set_time_limit.js')

describe('src/php/info/set_time_limit.js', function () {
  it('should pass example 1', function (done) {
    set_time_limit(4)
    var expected = undefined
    var result = set_time_limit(4)
    expect(result).to.deep.equal(expected)
    done()
  })
})