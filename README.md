# deep-find [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> find value for deep nested keys


## Install

```sh
$ npm install --save deep-find
```


## Usage

### JavaScript

```js
var deepFind = require('deep-find');

var obj = {
  employee:{
    name: {
      first: 'Jack',
      last: 'Daniels'
    }
  }
}

deepFind(obj, 'employee.name.first');
```

## Methods

```js
var deepFind = require('deep-find');
```

### deepFind([object], [array])

pass array as argument

```js
const deepFind = require('deep-find');
const obj = {
  employees: [{
    name: {
      first: 'Jack',
      last: 'Daniels'
    }
  }, {
    name: {
      first: 'Milli',
      last: 'Daniels'
    }
  }]
}

const value = deepFind(obj, ['employees[0]', 'name', 'first']);

```

### deepFind([object], [string])

pass string as argument

```js
const deepFind = require('deep-find');
const obj = {
  employees: [{
    name: {
      first: 'Jack',
      last: 'Daniels'
    }
  }, {
    name: {
      first: 'Milli',
      last: 'Daniels'
    }
  }]
}

const value = deepFind(obj, 'employees[0].name.first');
```

## Run Test
```sh
npm test
```

## Benchmark
```sh
node benchmark.js
regular search x 1,212,008 ops/sec ±1.61% (81 runs sampled)
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].


## License

MIT © [Yashprit Singh](https://yashprit.github.io)

[issue-url]: https://github.com/yashprit/deep-find/issues
[npm-url]: https://npmjs.org/package/deep-find
[npm-image]: https://badge.fury.io/js/deep-find.svg
[travis-url]: https://travis-ci.org/yashprit/deep-find
[travis-image]: https://travis-ci.org/yashprit/deep-find.svg?branch=master
[daviddm-url]: https://david-dm.org/yashprit/deep-find.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/yashprit/deep-find
