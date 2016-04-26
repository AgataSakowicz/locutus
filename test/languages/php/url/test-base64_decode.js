// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var base64_decode = require('/Users/kvz/code/phpjs/src/php/url/base64_decode.js')

describe('src/php/url/base64_decode.js', function () {
  it('should pass example 1', function (done) {
    base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==')
    var expected = 'Kevin van Zonneveld'
    var result = base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    base64_decode('YQ==')
    var expected = 'a'
    var result = base64_decode('YQ==')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    base64_decode('4pyTIMOgIGxhIG1vZGU=')
    var expected = '✓ à la mode'
    var result = base64_decode('4pyTIMOgIGxhIG1vZGU=')
    expect(result).to.deep.equal(expected)
    done()
  })
})