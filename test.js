'use strict';

var assert = require('assert');
var deepFind = require('./');

it("should except string as path", function() {
  var obj = {
    employee: {
      name: {
        first: 'yash',
        last: 'singh'
      }
    }
  }

  var value = deepFind(obj, 'employee.name.first');
  assert.equal('yash', value)
});

it("should except array as path", function() {
  var obj = {
    employee: {
      name: {
        first: 'yash',
        last: 'singh'
      }
    }
  }

  var value = deepFind(obj, ['employee', 'name', 'first']);
  assert.equal('yash', value)
});

it("should handle array as value", function() {
  var obj = {
    employees: [{
      name: {
        first: 'yash',
        last: 'singh'
      }
    }, {
      name: {
        first: 'ruby',
        last: 'singh'
      }
    }]
  }

  var value = deepFind(obj, ['employees[0]', 'name', 'first']);
  assert.equal('yash', value)
});

it("should handle array as value", function() {
  var obj = {
    employees: [{
      name: {
        first: 'yash',
        last: 'singh'
      }
    }, {
      name: {
        first: 'ruby',
        last: 'singh'
      }
    }]
  }

  var value = deepFind(obj, 'employees[0].name.first');
  assert.equal('yash', value)
});

it("should return null when no result is found", function() {
  var obj = {
    employees: [{
      name: {
        first: 'yash',
        last: 'singh'
      }
    }, {
      name: {
        first: 'ruby',
        last: 'singh'
      }
    }]
  }

  var value = deepFind(obj, 'employees[0].name.address');
  assert.equal(null, value)
});

it("should handle string selectors", function() {
  var obj = {
    employees: {
      'spaced key': {
        first: 'yash',
        last: 'singh'
      }
    }
  }

  var value = deepFind(obj, 'employees[spaced key].first');
  assert.equal('yash', value)
});
