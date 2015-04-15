'use strict';

var deepFind = function(obj, path) {
  if (typeof path === 'string') {
    path = path.split('.');
  }

  if (typeof path === 'array') {
    path = path;
  }

  for (var i = 0; i < path.length; i++) {
    if ((/\[[0-9]]/).test(path[i])) {
      var keyIndex = path[i].split('[')
      obj = obj[keyIndex[0]][parseInt(keyIndex[1], 10)]
    } else {
      obj = obj[path[i]];
    }

    if (!obj) {
      return false;
    }
  }
  return obj;
}

module.exports = deepFind;
