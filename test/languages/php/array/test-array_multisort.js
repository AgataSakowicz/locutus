// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_multisort = require('/Users/kvz/code/phpjs/src/php/array/array_multisort.js')

describe('src/php/array/array_multisort.js', function () {
  it('should pass example 1', function (done) {
    array_multisort([1, 2, 1, 2, 1, 2], [1, 2, 3, 4, 5, 6])
    var expected = true
    var result = array_multisort([1, 2, 1, 2, 1, 2], [1, 2, 3, 4, 5, 6])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var $characters = {A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward'}
    var $jobs = {A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight'}
    array_multisort($characters, 'SORT_DESC', 'SORT_STRING', $jobs, 'SORT_ASC', 'SORT_STRING')
    var expected = true
var $characters = {A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward'}
var $jobs = {A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight'}
    var result = array_multisort($characters, 'SORT_DESC', 'SORT_STRING', $jobs, 'SORT_ASC', 'SORT_STRING')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var $lastnames = [ 'Carter','Adams','Monroe','Tyler','Madison','Kennedy','Adams']
    var $firstnames = ['James', 'John' ,'James', 'John', 'James',  'John',   'John']
    var $president = [ 39, 6, 5, 10, 4, 35, 2 ]
    array_multisort($firstnames, 'SORT_DESC', 'SORT_STRING', $lastnames, 'SORT_ASC', 'SORT_STRING', $president, 'SORT_NUMERIC')
    var expected = true
var $lastnames = [ 'Carter','Adams','Monroe','Tyler','Madison','Kennedy','Adams']
var $firstnames = ['James', 'John' ,'James', 'John', 'James',  'John',   'John']
var $president = [ 39, 6, 5, 10, 4, 35, 2 ]
    var result = array_multisort($firstnames, 'SORT_DESC', 'SORT_STRING', $lastnames, 'SORT_ASC', 'SORT_STRING', $president, 'SORT_NUMERIC')
    expect(result).to.deep.equal(expected)
    done()
  })
})