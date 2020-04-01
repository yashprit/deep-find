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
  assert.strictEqual('yash', value)
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
  assert.strictEqual('yash', value)
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
  assert.strictEqual('yash', value)
});

it("should handle non existant array value", function() {
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

	var value = deepFind(obj, ['employees[2]', 'name', 'first']);
	assert.strictEqual(undefined, value)
  });

  it("should handle non existant parent key", function() {
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

	var value = deepFind(obj, ['employees[0]', 'person', 'first']);
	assert.strictEqual(undefined, value)
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
  assert.strictEqual('yash', value)
});

it("should return undefined when no result is found", function() {
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
  assert.strictEqual(undefined, value)
});

it("should handle null object", function() {
	var obj = null;

	var value = deepFind(obj, 'employees[0].name.address');
	assert.strictEqual(undefined, value)
  });

  it("should handle invalid datatypes", function() {
	var obj = "test";

	var value = deepFind(obj, 'employees[0].name.address');
	assert.strictEqual(undefined, value)
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
  assert.strictEqual('yash', value)
});
