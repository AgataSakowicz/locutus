// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var rawurlencode = require('/Users/kvz/code/phpjs/src/php/url/rawurlencode.js')

describe('src/php/url/rawurlencode.js', function () {
  it('should pass example 1', function (done) {
    rawurlencode('Kevin van Zonneveld!')
    var expected = 'Kevin%20van%20Zonneveld%21'
    var result = rawurlencode('Kevin van Zonneveld!')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    rawurlencode('http://kvz.io/')
    var expected = 'http%3A%2F%2Fkvz.io%2F'
    var result = rawurlencode('http://kvz.io/')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    rawurlencode('http://www.google.nl/search?q=Locutus&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a')
    var expected = 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
    var result = rawurlencode('http://www.google.nl/search?q=Locutus&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a')
    expect(result).to.deep.equal(expected)
    done()
  })
})