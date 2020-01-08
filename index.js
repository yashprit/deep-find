'use strict';

var deepFind = function(obj, path) {

  if ((typeof obj !== "object") | obj === null) {
	  return undefined;
  }
  if (typeof path === 'string') {
    path = path.split('.');
  }

  if (!Array.isArray(path)) {
    path = path.concat();
  }

  return path.reduce(function (o, part) {
    var keys = part.match(/\[(.*?)\]/);
    if (keys) {
      var key = part.replace(keys[0], '');
      return o[key][keys[1]];
    }
    return o[part];
  }, obj);
};

module.exports = deepFind;
