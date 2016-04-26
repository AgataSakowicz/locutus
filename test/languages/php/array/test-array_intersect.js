// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_intersect = require('/Users/kvz/code/phpjs/src/php/array/array_intersect.js')

describe('src/php/array/array_intersect.js', function () {
  it('should pass example 1', function (done) {
    var $array1 = {'a' : 'green', 0:'red', 1: 'blue'}
    var $array2 = {'b' : 'green', 0:'yellow', 1:'red'}
    var $array3 = ['green', 'red']
    var $result = array_intersect($array1, $array2, $array3)
    var expected = {0: 'red', a: 'green'}
var $array1 = {'a' : 'green', 0:'red', 1: 'blue'}
var $array2 = {'b' : 'green', 0:'yellow', 1:'red'}
var $array3 = ['green', 'red']
    var result = array_intersect($array1, $array2, $array3)
    expect(result).to.deep.equal(expected)
    done()
  })
})