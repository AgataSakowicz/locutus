// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var unserialize = require('/Users/kvz/code/phpjs/src/php/var/unserialize.js')

describe('src/php/var/unserialize.js', function () {
  it('should pass example 1', function (done) {
    unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}')
    var expected = ['Kevin', 'van', 'Zonneveld']
    var result = unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}')
    var expected = {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
    var result = unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}')
    expect(result).to.deep.equal(expected)
    done()
  })
})