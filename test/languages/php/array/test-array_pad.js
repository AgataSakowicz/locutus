// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_pad = require('/Users/kvz/code/phpjs/src/php/array/array_pad.js')

describe('src/php/array/array_pad.js', function () {
  it('should pass example 1', function (done) {
    array_pad([ 7, 8, 9 ], 2, 'a')
    var expected = [ 7, 8, 9]
    var result = array_pad([ 7, 8, 9 ], 2, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_pad([ 7, 8, 9 ], 5, 'a')
    var expected = [ 7, 8, 9, 'a', 'a']
    var result = array_pad([ 7, 8, 9 ], 5, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_pad([ 7, 8, 9 ], 5, 2)
    var expected = [ 7, 8, 9, 2, 2]
    var result = array_pad([ 7, 8, 9 ], 5, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    array_pad([ 7, 8, 9 ], -5, 'a')
    var expected = [ 'a', 'a', 7, 8, 9 ]
    var result = array_pad([ 7, 8, 9 ], -5, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
})