// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var split = require('/Users/kvz/code/phpjs/src/php/strings/split.js')

describe('src/php/strings/split.js', function () {
  it('should pass example 1', function (done) {
    split(' ', 'Kevin van Zonneveld')
    var expected = ['Kevin', 'van', 'Zonneveld']
    var result = split(' ', 'Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})