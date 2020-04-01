'use strict';

var deepFind = function(obj, path) {

  if (((typeof obj !== "object") && (typeof obj !== "function")) || obj === null) {
	  return undefined;
  }
  if (typeof path === 'string') {
    path = path.split('.');
  }

  if (!Array.isArray(path)) {
    throw "path must be either an array or a string";
  }

  return path.reduce(function (o, part) {
    var keys = part.match(/\[(.*?)\]/);
    if (keys) {
	  var key = part.replace(keys[0], '');
	  if (!((typeof o === "undefined") || (o === null))) {
		  if (!((typeof o[key] === "undefined") || (o[key] === null))) {
			return o[key][keys[1]];
		  } else {
			  return undefined;
		  }
	  } else {
		  return undefined;
	  }
	}
	if (!((typeof o === "undefined") || (o === null))) {
		return o[part];
	} else {
		return undefined;
	}
  }, obj);
};

module.exports = deepFind;
