// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_unshift = require('/Users/kvz/code/phpjs/src/php/array/array_unshift.js')

describe('src/php/array/array_unshift.js', function () {
  it('should pass example 1', function (done) {
    array_unshift(['van', 'Zonneveld'], 'Kevin')
    var expected = 3
    var result = array_unshift(['van', 'Zonneveld'], 'Kevin')
    expect(result).to.deep.equal(expected)
    done()
  })
})