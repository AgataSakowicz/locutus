// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var xdiff_string_diff = require('/Users/kvz/code/phpjs/src/php/xdiff/xdiff_string_diff.js')

describe('src/php/xdiff/xdiff_string_diff.js', function () {
  it('should pass example 1', function (done) {
    xdiff_string_diff('', 'Hello world!')
    var expected = '@@ -0,0 +1,1 @@\n+Hello world!'
    var result = xdiff_string_diff('', 'Hello world!')
    expect(result).to.deep.equal(expected)
    done()
  })
})