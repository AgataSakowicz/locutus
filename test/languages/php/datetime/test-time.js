// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var time = require('/Users/kvz/code/phpjs/src/php/datetime/time.js')

describe('src/php/datetime/time.js', function () {
  it('should pass example 1', function (done) {
    var $timeStamp = time()
    var $result = $timeStamp > 1000000000 && $timeStamp < 2000000000
    var expected = true
var $timeStamp = time()
    var result = $timeStamp > 1000000000 && $timeStamp < 2000000000
    expect(result).to.deep.equal(expected)
    done()
  })
})