var Benchmark = require('benchmark')
var Suite = new Benchmark.Suite
var deepFind = require('./index.js')

var obj = { a: { b: [{ c: { d: 'foo' } }] } }

Suite
  .add('regular search', function () {
    deepFind(obj, 'a.b[0].c.d')
  })
  .on('cycle', function (e) {
    console.log(String(e.target))
  })
  .run({ 'async': true })
