/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(31);
var enhanceError = __webpack_require__(5);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(32);
var cookies = __webpack_require__(33);
var buildURL = __webpack_require__(4);
var buildFullPath = __webpack_require__(34);
var parseHeaders = __webpack_require__(37);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(7);
var defaults = __webpack_require__(1);
var Cancel = __webpack_require__(2);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(5);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "version": "0.25.0"
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(44);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  router.addRoutes([{
    name: 'here-api-map-tool',
    path: '/here-api-map-tool',
    component: __webpack_require__(13)
  }]);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(43)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__here_maps_api_for_javascript_bin_mapsjs_ui_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__here_maps_api_for_javascript_bin_mapsjs_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__here_maps_api_for_javascript_bin_mapsjs_ui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            map: null,
            route_instructions: [],
            markers: [],
            distance: null,
            estimated_time: null,
            gps_points: [],
            intervalId: null,
            heading: ""
        };
    },

    methods: {
        init: function init(platform) {
            // departure point (origin).
            var start = this.gps_points[0].lat + "," + this.gps_points[0].lng;

            // waypoints.
            var waypoints = this.gps_points.slice(1, -1).map(function (element) {
                return element.lat + "," + element.lng;
            });

            // end point (destination)
            var end = this.gps_points[this.gps_points.length - 1].lat + "," + this.gps_points[this.gps_points.length - 1].lng;

            // routing parameters
            var routingParameters = {
                origin: start,
                destination: end,
                via: new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].service.Url.MultiValueQueryParameter(waypoints),
                routingMode: Nova.config.tool.type ? Nova.config.tool.type : "fast",
                transportMode: Nova.config.tool.Transport_mode ? Nova.config.tool.Transport_mode : "car",
                traffic: Nova.config.tool.traffic_mode ? Nova.config.tool.traffic_mode : "enabled",
                return: "polyline,turnByTurnActions,actions,instructions,travelSummary"
            };

            // Get an instance of the routing service version 8:
            var router = platform.getRoutingService(null, 8);

            // Call `calculateRoute` with the routing parameters,
            // the success callback and an error callback function
            // The implementation of the two callback functions is left out for brevity
            // see documentation link below for callback examples
            router.calculateRoute(routingParameters, this.onSuccess, this.onError);
        },
        onSuccess: function onSuccess(result) {
            /*
             * The styling of the route response on the map is entirely under the developer's control.
             * A representitive styling can be found the full JS + HTML code of this example
             * in the functions below:
             */
            this.addRouteShapeToMap(result);

            this.addMarkers();

            this.addCirles();

            this.addInstructions(result);

            this.addDistance(result);

            this.addEstimatedTravelTime(result);

            this.refreshMarkersPosistion();
        },
        onError: function onError(error) {
            alert("Can't reach the remote server");
        },


        /**
         * Add marker popup message.
         */
        openBubble: function openBubble(position, text) {
            if (!this.bubble) {
                this.bubble = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].ui.InfoBubble(position,
                // The FO property holds the province name.
                { content: text });
                this.ui.addBubble(this.bubble);
            } else {
                this.bubble.setPosition(position);
                this.bubble.setContent(text);
                this.bubble.open();
            }
        },


        /**
         * this will draw the route line in the map.
         *
         */
        addRouteShapeToMap: function addRouteShapeToMap(result) {
            var _this = this;

            var draw_route = Nova.config.tool.draw_route !== undefined ? Nova.config.tool.draw_route : true;
            if (result.routes.length && draw_route && this.gps_points.length > 1) {
                result.routes[0].sections.forEach(function (section, index) {
                    _this.addRouteSectionShape(section);
                });
            }
        },


        /**
         * this will draw the route section line in the map.
         *
         */
        addRouteSectionShape: function addRouteSectionShape(section) {
            // Create a linestring to use as a point source for the route line
            var linestring = __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].geo.LineString.fromFlexiblePolyline(section.polyline);

            // Create a polyline to display the route:
            var routeLine = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].map.Polyline(linestring, {
                style: {
                    strokeColor: Nova.config.tool.route_line_color !== undefined ? Nova.config.tool.route_line_color : "blue",
                    lineWidth: Nova.config.tool.route_line_width !== undefined ? Nova.config.tool.route_line_width : 5
                }
            });

            // Add the route polyline and the two markers to the map:
            this.map.addObjects([routeLine]);

            // Set the map's viewport to make the whole route visible:
            this.map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });

            this.setMapInitPosition();
        },


        /**
         * This function will add markers to the map.
         *
         */
        addMarkers: function addMarkers() {
            var _this2 = this;

            var group = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].map.Group(),
                i,
                j;

            // first let's filter markers that user want to hide via show_marker attribute by default it will be true.
            this.gps_points.filter(function (gps_point) {
                gps_point = gps_point;
                return gps_point.show_marker === false ? false : true;
            }).forEach(function (gps_point) {
                gps_point = gps_point;
                var defaultMarkerIcon = Nova.config.tool.defaultMarkerSvg ? Nova.config.tool.defaultMarkerSvg : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
                    markerIcon = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].map.Icon(gps_point.svg ? gps_point.svg : defaultMarkerIcon, { size: { w: 56, h: 56 } });
                var marker = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].map.Marker({
                    lat: gps_point.lat,
                    lng: gps_point.lng
                }, {
                    icon: markerIcon
                });
                marker.instruction = gps_point.description;

                // Let's save this marker to the markers array if the user want to update the postion frequently.
                if (Nova.config.tool.updateUrl) {
                    _this2.markers[gps_point.id] = marker;
                }

                group.addObject(marker);
                group.addEventListener("tap", function (evt) {
                    this.map.setCenter(evt.target.getGeometry());
                    this.openBubble(evt.target.getGeometry(), evt.target.instruction, this.ui);
                }.bind(_this2), false);
            });
            this.map.addObject(group);
        },


        /**
         * Add a radius circle to the map.
         */
        addCirles: function addCirles() {
            var _this3 = this;

            if (Nova.config.tool.circles === undefined) return;
            Nova.config.tool.circles.forEach(function (circle) {
                if (circle.lat && circle.lng && circle.radius) {
                    _this3.map.addObject(new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].map.Circle(
                    // The central point of the circle
                    {
                        lat: circle.lat,
                        lng: circle.lng
                    },
                    // The radius of the circle in meters
                    circle.radius, {
                        style: {
                            strokeColor: circle.border_color !== undefined ? circle.border_color : "rgba(0, 0, 255, 0.1)", // Color of the perimeter
                            lineWidth: circle.border_width !== undefined ? circle.border_width : 5,
                            fillColor: circle.color !== undefined ? circle.color : "rgba(0, 0, 255, 0.1)" // Color of the circle
                        }
                    }));
                }
            });
        },


        /**
         * Add a list of actions under the map.
         */
        addInstructions: function addInstructions(result) {
            var _this4 = this;

            if (result.routes.length > 0 && Nova.config.tool.showInstructions && this.gps_points.length > 1) {
                result.routes[0].sections.forEach(function (section) {
                    section.actions.forEach(function (action) {
                        _this4.route_instructions.push(action.instruction);
                    });
                });
            }
        },


        /**
         * Calculate the route distance.
         */
        addDistance: function addDistance(result) {
            var _this5 = this;

            if (Nova.config.tool.showDistance && this.gps_points.length > 1) {
                result.routes[0].sections.forEach(function (section) {
                    _this5.distance += section.travelSummary.length / 1000;
                });
            }
        },


        /**
         * Calculate the estimated travel time.
         */
        addEstimatedTravelTime: function addEstimatedTravelTime(result) {
            var _this6 = this;

            if (Nova.config.tool.showTime && this.gps_points.length > 1) {
                result.routes[0].sections.forEach(function (section) {
                    _this6.estimated_time += section.travelSummary.duration;
                });
            }
        },


        /**
         * Convert to humain readble time.
         */
        toMMSS: function toMMSS(time) {
            return Math.floor(time / 60) + " minutes " + time % 60 + " seconds.";
        },


        /**
         * Set the initial map position and zoom.
         */
        setMapInitPosition: function setMapInitPosition() {
            this.map.setCenter({
                lat: Nova.config.tool.center_lat !== undefined ? Nova.config.tool.center_lat : this.gps_points[0].lat,
                lng: Nova.config.tool.center_lng !== undefined ? Nova.config.tool.center_lng : this.gps_points[0].lng
            });
            this.map.setZoom(Nova.config.tool.zoom !== undefined ? Nova.config.tool.zoom : 14);
        },


        /**
         * Refresh marker position.
         */
        refreshMarkersPosistion: function refreshMarkersPosistion() {
            var _this7 = this;

            {
                if (Nova.config.tool.updateUrl) {
                    this.intervalId = setInterval(function () {
                        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(Nova.config.tool.updateUrl).then(function (result) {
                            result.data.forEach(function (p) {
                                var marker = _this7.markers[p.id];
                                if (marker) {
                                    _this7.ease(marker.getGeometry(), { lat: p.lat, lng: p.lng }, 4000, function (p) {
                                        marker.setGeometry({
                                            lat: p.lat,
                                            lng: p.lng
                                        });
                                    });
                                    //marker.setGeometry({ lat: p.lat, lng: p.lng });
                                }
                                //console.log("Call BACK-END");
                            });
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }, Nova.config.tool.time);
                }
            }
        },


        /**
         * Here we make sure that we are not calling the back-end when the tab is hidden.
         */
        intervalEvent: function intervalEvent() {
            if (this.intervalId) {
                if (document.hidden) {
                    clearInterval(this.intervalId);
                } else {
                    this.refreshMarkersPosistion();
                }
            }
        },


        /**
         * Ease function add animation to the market when its moving position.
         * @param   {H.geo.IPoint} startCoord   start geo coordinate
         * @param   {H.geo.IPoint} endCoord     end geo coordinate
         * @param   number durationMs           duration of animation between start & end coordinates
         * @param   function onStep             callback executed each step
         * @param   function onStep             callback executed at the end
         */
        ease: function ease() {
            var startCoord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lat: 0, lng: 0 };
            var endCoord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { lat: 1, lng: 1 };
            var durationMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
            var onStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.log;
            var onComplete = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

            var raf = window.requestAnimationFrame || function (f) {
                window.setTimeout(f, 16);
            },
                stepCount = durationMs / 16,
                valueIncrementLat = (endCoord.lat - startCoord.lat) / stepCount,
                valueIncrementLng = (endCoord.lng - startCoord.lng) / stepCount,
                sinValueIncrement = Math.PI / stepCount,
                currentValueLat = startCoord.lat,
                currentValueLng = startCoord.lng,
                currentSinValue = 0;

            function step() {
                currentSinValue += sinValueIncrement;
                currentValueLat += valueIncrementLat * Math.pow(Math.sin(currentSinValue), 2) * 2;
                currentValueLng += valueIncrementLng * Math.pow(Math.sin(currentSinValue), 2) * 2;

                if (currentSinValue < Math.PI) {
                    onStep({ lat: currentValueLat, lng: currentValueLng });
                    raf(step);
                } else {
                    onStep(endCoord);
                    onComplete();
                }
            }

            raf(step);
        }
    },
    mounted: function mounted() {
        this.heading = Nova.config.tool.heading;
        if (Nova.config.tool.gpsPoints.length < 1) {
            alert("Please provide at least one gps point.");
            return false;
        }
        // Let's convert the array elements to json objects.
        this.gps_points = Nova.config.tool.gpsPoints;

        this.routeInstructionsContainer = this.$refs.panel;

        var platform = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].service.Platform({
            apikey: Nova.config.tool.globalApiKey || Nova.config.tool.apiKey
        });

        var defaultLayers = platform.createDefaultLayers();

        var map = new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].Map(this.$refs.map, defaultLayers.vector.normal.map, {
            // initial center and zoom level of the map
            center: new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].geo.Point(this.gps_points[0].lat, this.gps_points[0].lng),
            zoom: Nova.config.tool.zoom !== undefined ? Nova.config.tool.zoom : 14,
            pixelRatio: window.devicePixelRatio || 1
        });

        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener("resize", function () {
            return map.getViewPort().resize();
        });

        this.map = map;

        //add abolity to zoom in out wen scrolling in the map.
        new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].mapevents.Behavior(new __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].mapevents.MapEvents(map));

        // Create the default UI components
        this.ui = __WEBPACK_IMPORTED_MODULE_0__here_maps_api_for_javascript__["a" /* default */].ui.UI.createDefault(this.map, defaultLayers);

        this.init(platform);

        //Here we make sure that we are not calling the back-end when the tab is hidden.
        document.addEventListener("visibilitychange", this.intervalEvent);
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {
/**
 * The code below uses open source software. Please visit the URL below for an overview of the licenses:
 * http://js.api.here.com/v3/3.1.30.8/HERE_NOTICE
 */

(function(){var n,aa=[];function ba(a){return function(){return aa[a].apply(this,arguments)}}function ca(a,b){return aa[a]=b}function da(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}}function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ka(a,b){if(b){var c=ja;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ha(c,a,{configurable:!0,writable:!0,value:b})}}
ka("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});function la(){la=function(){};ja.Symbol||(ja.Symbol=ma)}function na(a,b){this.a=a;ha(this,"description",{configurable:!0,writable:!0,value:b})}na.prototype.toString=function(){return this.a};
var ma=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new na("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function oa(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(da(this))}});oa=function(){}}
function pa(a){oa();a={next:a};a[ja.Symbol.iterator]=function(){return this};return a}function qa(a,b){oa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ka("Array.prototype.keys",function(a){return a?a:function(){return qa(this,function(b){return b})}});var ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={Wg:!0},ua={};try{ua.__proto__=ta;sa=ua.Wg;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;ka("Object.setPrototypeOf",function(a){return a||va});
ka("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ja.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var k=
g[h];g[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:g(this.W),reject:g(this.g)}};b.prototype.W=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.u(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.o(g):this.i(g)}};
b.prototype.o=function(g){var h=void 0;try{h=g.then}catch(k){this.g(k);return}"function"==typeof h?this.eb(h,g):this.i(g)};b.prototype.g=function(g){this.j(2,g)};b.prototype.i=function(g){this.j(1,g)};b.prototype.j=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.m()};b.prototype.m=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.u=function(g){var h=
this.f();g.Nf(h.resolve,h.reject)};b.prototype.eb=function(g,h){var k=this.f();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(v){try{l(q(v))}catch(w){m(w)}}:r}var l,m,p=new b(function(q,r){l=q;m=r});this.Nf(k(g,l),k(h,m));return p};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Nf=function(g,h){function k(){switch(l.b){case 1:g(l.c);break;case 2:h(l.c);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?f.b(k):this.a.push(k)};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=ea(g),m=l.next();!m.done;m=l.next())d(m.value).Nf(h,k)})};b.all=function(g){var h=ea(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(w){q[v]=w;r--;0==r&&l(q)}}var q=[],r=0;do q.push(void 0),r++,d(k.value).Nf(p(q.length-1),m),k=h.next();while(!k.done)})};return b});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});ka("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
var wa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ka("Object.assign",function(a){return a||wa});ka("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});var ya=this||self;
function za(a,b,c){a=a.split(".");c=c||ya;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function Aa(){}
function Ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function Ca(a){var b=Ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function Da(a){return"function"==Ba(a)}function Ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function Ja(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ja=Ha:Ja=Ia;return Ja.apply(null,arguments)}
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){za(a,b,void 0)}function u(a,b){function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ap=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function La(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(La,Error);La.prototype.name="CustomError";function Ma(a,b){this.c=a;this.f=b;this.b=0;this.a=null}Ma.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};Ma.prototype.put=function(a){this.f(a);100>this.b&&(this.b++,a.next=this.a,this.a=a)};function Na(){this.b=this.a=null}var Pa=new Ma(function(){return new Oa},function(a){a.reset()});Na.prototype.add=function(a,b){var c=Pa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};Na.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};function Oa(){this.next=this.b=this.a=null}Oa.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Oa.prototype.reset=function(){this.next=this.b=this.a=null};var Qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ra(a,b){return-1!=a.indexOf(b)}function Sa(a,b){return a<b?-1:a>b?1:0};function Ta(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function Ua(a){for(var b in a)return!1;return!0}function Va(a){var b={},c;for(c in a)b[c]=a[c];return b}var Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wa.length;f++)c=Wa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ya;a:{var Za=ya.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}function ab(a){return Ra(Ya,a)};var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function cb(a,b){this.b=a===db&&b||"";this.a=eb}var eb={},db={},fb=new cb(db,"");function gb(a,b){this.b=a===hb&&b||"";this.a=ib}gb.prototype.xc=function(){return 1};var ib={},hb={};function jb(){this.b="";this.c=kb;this.a=null}jb.prototype.xc=function(){return this.a};function lb(){var a=mb;if(a instanceof jb&&a.constructor===jb&&a.c===kb)return a.b;Ba(a);return"type_error:SafeHtml"}var kb={};function nb(a){var b=new jb;b.b=a;b.a=0;return b}nb("<!DOCTYPE html>");var mb=nb("");nb("<br>");function ob(a){var b=new gb(hb,fb instanceof cb&&fb.constructor===cb&&fb.a===eb?fb.b:"type_error:Const");b instanceof gb&&b.constructor===gb&&b.a===ib?b=b.b:(Ba(b),b="type_error:TrustedResourceUrl");a.src=b.toString()};function pb(a){pb[" "](a);return a}pb[" "]=Aa;function qb(a,b){var c=rb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var sb=ab("Opera"),tb=ab("Trident")||ab("MSIE"),ub=ab("Edge"),vb=ab("Gecko")&&!(Ra(Ya.toLowerCase(),"webkit")&&!ab("Edge"))&&!(ab("Trident")||ab("MSIE"))&&!ab("Edge"),xb=Ra(Ya.toLowerCase(),"webkit")&&!ab("Edge");function yb(){var a=ya.document;return a?a.documentMode:void 0}var zb;
a:{var Ab="",Bb=function(){var a=Ya;if(vb)return/rv:([^\);]+)(\)|;)/.exec(a);if(ub)return/Edge\/([\d\.]+)/.exec(a);if(tb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xb)return/WebKit\/(\S+)/.exec(a);if(sb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Bb&&(Ab=Bb?Bb[1]:"");if(tb){var Cb=yb();if(null!=Cb&&Cb>parseFloat(Ab)){zb=String(Cb);break a}}zb=Ab}var rb={};
function Db(a){return qb(a,function(){for(var b=0,c=Qa(String(zb)).split("."),d=Qa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=0==g[1].length?0:parseInt(g[1],10);var k=0==h[1].length?0:parseInt(h[1],10);b=Sa(b,k)||Sa(0==g[2].length,0==h[2].length)||Sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Eb;
Eb=ya.document&&tb?yb():void 0;!vb&&!tb||tb&&9<=Number(Eb)||vb&&Db("1.9.1");tb&&Db("9");function Fb(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function Gb(a){ya.setTimeout(function(){throw a;},0)}var Hb;
function Ib(){var a=ya.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!ab("Presto")&&(a=function(){var e=Fb("IFRAME");e.style.display="none";ob(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(lb());e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ja(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!ab("Trident")&&!ab("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Cj;c.Cj=null;e()}};return function(e){d.next={Cj:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Fb("SCRIPT")?function(e){var f=Fb("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;
f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){ya.setTimeout(e,0)}};function Jb(a,b){Kb||Lb();Mb||(Kb(),Mb=!0);Nb.add(a,b)}var Kb;function Lb(){if(ya.Promise&&ya.Promise.resolve){var a=ya.Promise.resolve(void 0);Kb=function(){a.then(Ob)}}else Kb=function(){var b=Ob;!Da(ya.setImmediate)||ya.Window&&ya.Window.prototype&&!ab("Edge")&&ya.Window.prototype.setImmediate==ya.setImmediate?(Hb||(Hb=Ib()),Hb(b)):ya.setImmediate(b)}}var Mb=!1,Nb=new Na;function Ob(){for(var a;a=Nb.remove();){try{a.a.call(a.b)}catch(b){Gb(b)}Pa.put(a)}Mb=!1};function Pb(a){this.a=Qb;this.j=void 0;this.f=this.b=this.c=null;this.g=this.i=!1;if(a!=Aa)try{var b=this;a.call(void 0,function(c){Rb(b,Sb,c)},function(c){Rb(b,Tb,c)})}catch(c){Rb(this,Tb,c)}}var Qb=0,Sb=2,Tb=3;function Ub(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}Ub.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var Vb=new Ma(function(){return new Ub},function(a){a.reset()});function Wb(a,b,c){var d=Vb.get();d.f=a;d.b=b;d.c=c;return d}
function Xb(a){if(a instanceof Pb)return a;var b=new Pb(Aa);Rb(b,Sb,a);return b}function Zb(a){return new Pb(function(b,c){c(a)})}function $b(){var a,b,c=new Pb(function(d,e){a=d;b=e});return new ac(c,a,b)}Pb.prototype.then=function(a,b,c){return bc(this,Da(a)?a:null,Da(b)?b:null,c)};Pb.prototype.$goog_Thenable=!0;Pb.prototype.cancel=function(a){if(this.a==Qb){var b=new cc(a);Jb(function(){dc(this,b)},this)}};
function dc(a,b){if(a.a==Qb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Qb&&1==d?dc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):ec(c),fc(c,e,Tb,b)))}a.c=null}else Rb(a,Tb,b)}function gc(a,b){a.b||a.a!=Sb&&a.a!=Tb||ic(a);a.f?a.f.next=b:a.b=b;a.f=b}
function bc(a,b,c,d){var e=Wb(null,null,null);e.a=new Pb(function(f,g){e.f=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;e.b=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof cc?g(h):f(k)}catch(l){g(l)}}:g});e.a.c=a;gc(a,e);return e.a}Pb.prototype.o=function(a){this.a=Qb;Rb(this,Sb,a)};Pb.prototype.W=function(a){this.a=Qb;Rb(this,Tb,a)};
function Rb(a,b,c){if(a.a==Qb){a===c&&(b=Tb,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.o,f=a.W;if(d instanceof Pb){gc(d,Wb(e||Aa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ea(d))try{var k=d.then;if(Da(k)){jc(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.j=c,a.a=b,a.c=null,ic(a),b!=Tb||c instanceof cc||kc(a,c))}}
function jc(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function ic(a){a.i||(a.i=!0,Jb(a.m,a))}function ec(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}Pb.prototype.m=function(){for(var a;a=ec(this);)fc(this,a,this.a,this.j);this.i=!1};
function fc(a,b,c,d){if(c==Tb&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,lc(b,c,d);else try{b.g?b.f.call(b.c):lc(b,c,d)}catch(e){mc.call(null,e)}Vb.put(b)}function lc(a,b,c){b==Sb?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function kc(a,b){a.g=!0;Jb(function(){a.g&&mc.call(null,b)})}var mc=Gb;function cc(a){La.call(this,a)}u(cc,La);cc.prototype.name="cancel";function ac(a,b,c){this.hl=a;this.resolve=b;this.reject=c};var x=this;function nc(){return Object.create(y,void 0)}var A=Ja,oc=String,pc=x.Object.freeze||function(a){return a};function qc(a){for(var b=Object.keys(a),c=b.length,d;c--;)d=a[b[c]],Ea(d)&&qc(d);return pc(a)}function rc(a){var b=Ba(a);if("object"==b||"array"==b){if(Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)a.hasOwnProperty(c)&&(b[c]=rc(a[c]));return b}return a}var B=[].pop(),y=/x/.exec("");function sc(a,b){return oc(a).split(b!==B?b:" ")}var tc="prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function C(a,b,c,d,e){if(!(b=a instanceof b)&&c)throw new D(c,d,uc(e)?e:a);return b}function vc(a,b){if(!0===(C(a,b)&&a.constructor===b))throw new TypeError("Illegal constructor "+wc(b));}function xc(a,b,c,d,e){if(!(b=yc(a)===b)&&c)throw new D(c,d,uc(e)?e:a);return b}function zc(a,b,c,d){return xc(a,"Array",b,c,d)}t("H.lang.isArray",zc);function uc(a){return a!==B}function Ac(a){return"string"===typeof a}t("H.lang.isString",Ac);var Bc=parseInt,Cc=parseFloat,E=isNaN;
function Dc(a){return a===+a}t("H.lang.isNumber",Dc);t("H.lang.isInteger",Number.isInteger?Number.isInteger:function(a){return"number"===typeof a&&0===a%1});function Ec(a){return!E(+a)}function yc(a){var b=Object[tc[0]][tc[6]].call(a).match(/^\[object (\w+)\]$/);return b?b[1]:typeof a}var Fc=[];function Gc(a){0>Fc.indexOf(a)&&Fc.push(a)}Gc(Fc);
function wc(a,b,c,d){var e="",f=2>arguments.length,g;f&&(b={H:x.H},c="",d=Fc.slice());Hc(b,!0,function(h,k){try{if(g=h[k],k=Ic(h,g),!(Ea(g)&&g.window===g&&g.self===g||Ea(g)&&0<g.nodeType&&Da(g.cloneNode))&&Ea(g)){if(g===a)return e=c+"."+k,!0;if(0>d.indexOf(g)&&(d.push(g),e=wc(a,g,c+"."+k,d)))return!0}}catch(l){}});f&&(e=e?e.substr(1).replace("."+tc[0]+".","#"):"~"+(Da(a)?Jc(a)+"()":yc(a)));return e}
function Ic(a,b){var c=[];Hc(a,!1,function(d,e){d[e]===b&&c.push(e)});return c.sort(Kc)[0]}function Kc(a,b){return b.length-a.length}var Lc=Object[tc[0]][tc[2]];function Hc(a,b,c){var d;if(a){for(e in a)if((!b||Lc.call(a,e))&&c(a,e,!0))return;for(d=tc.length;d--;){var e=tc[d];if((!b||Lc.call(a,e))&&c(a,e,!1))break}}}function Jc(a){return(a=/^\s*function ([^\( ]+)/.exec(a))?a[1]:"anonymous"}function Mc(a,b,c){c[b]="#"+b}var Nc=!!x.__karma__;function Oc(){throw Error("unimplemented method");};function Pc(a,b){b=b||{};"status"in b&&(this.status=+b.status);"statusText"in b&&(this.statusText=b.statusText);this.ok=200<=this.status&&300>this.status;this.bodyUsed=!1;a?"string"===typeof a?this.c=a:ArrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||a.buffer)?this.a=a.buffer||a:Blob.prototype.isPrototypeOf(a)&&(this.b=a):this.c=""}t("H.net.Response",Pc);Pc.prototype.type="default";Pc.prototype.type=Pc.prototype.type;Pc.prototype.status=200;Pc.prototype.status=Pc.prototype.status;
Pc.prototype.statusText="OK";Pc.prototype.statusText=Pc.prototype.statusText;function Qc(a){if(a.bodyUsed)return Zb(new TypeError("Already read"));a.bodyUsed=!0}Pc.error=function(){Pc.a||(Pc.a=new Pc(null,{status:0,statusText:""}),Pc.a.type="error");return Pc.a};Pc.error=Pc.error;
Pc.prototype.text=function(){var a=Qc(this);if(!a)if(this.c)a=Xb(this.c);else if(this.a){a=new Uint8Array(this.a);var b=a.length,c=Array(b),d;for(d=0;d<b;d++)c[d]=String.fromCharCode(a[d]);a=Xb(c.join(""))}else this.b?a=Rc(this.b):a=Zb("Unsupported response body");return a};Pc.prototype.json=function(){return this.text().then(x.JSON.parse)};Pc.prototype.blob=function(){var a,b=Qc(this);b||(this.b?a=this.b:this.a&&(a=new Blob([this.a],{type:"application/octet-stream"})));return b||Xb(a)};
Pc.prototype.arrayBuffer=function(){return this.a?Qc(this)||Xb(this.a.slice(0)):this.blob().then(Pc.b)};Pc.b=function(a){var b=new FileReader;b.readAsArrayBuffer(a);return new Pb(function(c,d){b.onload=function(){c(b.result)};b.onerror=function(){d(b.error)}})};function Rc(a){var b=new FileReader;b.readAsText(a);return new Pb(function(c,d){b.onload=function(){c(b.result)};b.onerror=function(){d(b.error)}})}!Nc&&x.Response&&x.Response.error&&(Pc=x.Response,Gc(Pc.prototype));function Sc(a,b,c){function d(){var m=A(l.a,l),p=+k.timeout||0;Tc?(Uc(l,"timeout",m),e.timeout=p):p&&(l.c=setTimeout(function(){e.abort();l.a({type:"timeout"})},p));Uc(l,"error",m);Uc(l,"load",m);e.send(k.data)}var e,f,g,h=c&&c.headers||{},k={},l=this;if(!Da(b))throw new D(Sc,1,"function required");Xa(h,Vc.headers,h);Xa(k,Vc,c||{});k.headers=h;this.b=b;this.S=e=new XMLHttpRequest;b=k.method;try{e.open(b,a,!0);for(f in h)h.hasOwnProperty(f)&&(g=h[f])&&e.setRequestHeader(f,g);e.withCredentials=!!k.withCredentials;
d()}catch(m){this.a({type:"cors"})}}t("H.net.Xhr",Sc);var Vc={method:"GET",headers:{},data:null},Wc="withCredentials"in new XMLHttpRequest,Tc="timeout"in new XMLHttpRequest;function Uc(a,b,c){Wc?a.S.addEventListener(b,c):a.S["on"+b]=c}function Xc(a,b,c){Wc?a.S.removeEventListener(b,c):a.S["on"+b]=null}Sc.prototype.abort=function(){this.S&&(this.S.abort(),this.S&&this.a({type:"abort"}))};Sc.prototype.abort=Sc.prototype.abort;
Sc.prototype.a=function(a){var b=a.type;a=this.S;var c,d;this.c&&clearTimeout(this.c);"load"===b?a instanceof XMLHttpRequest&&200!==a.status&&(c="network"):c=4===a.readyState&&0===a.status&&"error"==b?"cors":"error"!=b?b:"network";b=this.a;Xc(this,"timeout",b);Xc(this,"error",b);Xc(this,"load",b);0===a.status||c&&"network"!==c?d=Pc.error():d=new Pc(a.responseText||null,a);c=this.b;delete this.a;delete this.b;delete this.S;c(d)};function Yc(a,b){var c=[];a&&c.push(wc(a));1<arguments.length&&c.push(""+b);c=Error(c.join(" "));Object.setPrototypeOf(c,Yc.prototype);return c}u(Yc,Error);t("H.lang.IllegalOperationError",Yc);Yc.prototype.name="IllegalOperationError";var Zc,$c,ad;function D(a,b,c){var d=arguments.length;b=b!==B?+b:b;if(b!==B){var e=(e=/^.*?\(([^\)]+)/.exec((""+a).replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm,"")))?sc(e[1].replace(/\s+/g,""),","):[];e.forEach(Mc);e=e[b]||"#"+b}var f=a?wc(a):"";d=2<d?oc(c):"";if(e||d)f+=" (Argument "+(e||"")+(d?" "+d:"")+")";d=Error(f);Object.setPrototypeOf(d,D.prototype);return d}u(D,Error);t("H.lang.InvalidArgumentError",D);D.prototype.name="InvalidArgumentError";function bd(){if(!Ac("STATIC_DB"))throw new D(this.constructor,0);this.g=x.indexedDB||x.sp||x.Ho||x.Io;if(!this.g)throw new Yc(this.constructor,"This browser does not support IndexedDB");this.a=[];this.c=[];this.wi=A(this.wi,this)}var dd,ed;n=bd.prototype;n.put=function(a,b,c,d){if(!Ac(a)&&!Dc(a))throw new D(this.put,0);if(!fd(b))throw new D(this.put,1);gd(this,function(e){hd(e.put(b,a),c,d)},d)};
n.get=function(a,b,c){var d;if(!Ac(a)&&!Dc(a))throw new D(this.get,0);if(!Da(b))throw new D(this.get,1);gd(this,function(e){d=e.get(a);hd(d,b,c)},c);return{cancel:function(){d&&(d.onsuccess=id)}}};n.remove=function(a,b,c){if(!Ac(a)&&!Dc(a))throw new D(this.remove,0);gd(this,function(d){hd(d["delete"](a),b,c)},c)};n.clear=function(a,b){gd(this,function(c){hd(c.clear(),a,b)},b)};n.wi=function(){var a=this.b.result;a.objectStoreNames.contains("data")||a.createObjectStore("data")};
function jd(a,b,c){if(a.b)a.a?(a.a.push(b),c&&a.c.push(c)):a.f?c&&c(a.f):b(a.b.result);else{a.b=a.g.open(kd+"STATIC_DB",1);a.b.onupgradeneeded=a.wi;var d=a.b.onerror=function(){clearTimeout(a.i);a.f=this.error;a.c.forEach(function(e){e(a.f)});a.a=a.c=null};a.i=setTimeout(function(){d.call({error:Error("DbOpenTimeoutError")})},500);a.b.onsuccess=function(){clearTimeout(a.i);a.a?(a.a.forEach(function(e){e(this.result)},this),a.a=a.c=null):(a.b=a.f=null,a.a=[],a.c=[])};a.a.push(b);c&&a.c.push(c)}}
function gd(a,b,c){jd(a,function(d){d=d.transaction(["data"],"readwrite");b(d.objectStore("data"))},c)}function hd(a,b,c){b&&(a.onsuccess=function(){b(this.result)});c&&(a.onerror=function(){c(this.error)})}function fd(a){var b=Object.prototype.toString.call(a);return"[object Blob]"===b||"[object ArrayBuffer]"===b||Ac(a)||Ea(a)}function ld(){dd||(dd=new bd);return dd}t("H.util.IndexedDBStorage.getInstance",ld);var kd="H_";
function md(){var a="";if(!uc(ed))if("file:"===window.location.protocol&&-1<navigator.userAgent.toLowerCase().indexOf("firefox")&&128<=window.location.href.length)ed=!1;else{try{var b=x.indexedDB||x.sp||x.Ho||x.Io;a=kd+"TEST_DB";var c=b&&b.open(a,1)}catch(d){}ed=!!c&&null===c.onupgradeneeded;c&&b.deleteDatabase&&b.deleteDatabase(a)}return ed}t("H.util.IndexedDBStorage.isSupported",md);function od(){0!=pd&&(qd[this[Fa]||(this[Fa]=++Ga)]=this);this.Pd=this.Pd;this.eb=this.eb}var pd=0,qd={};od.prototype.Pd=!1;od.prototype.C=function(){if(!this.Pd&&(this.Pd=!0,this.s(),0!=pd)){var a=this[Fa]||(this[Fa]=++Ga);if(0!=pd&&this.eb&&0<this.eb.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete qd[a]}};
od.prototype.yb=function(a,b){this.Pd?void 0!==b?a.call(b):a():(this.eb||(this.eb=[]),this.eb.push(void 0!==b?Ja(a,b):a))};od.prototype.s=function(){if(this.eb)for(;this.eb.length;)this.eb.shift()()};function rd(a){a&&"function"==typeof a.C&&a.C()};function sd(a,b){this.type=a;this.currentTarget=this.target=b;this.f=this.a=!1;this.ql=!0}sd.prototype.stopPropagation=function(){this.a=!0};sd.prototype.preventDefault=function(){this.f=!0;this.ql=!1};t("H.util.Event",sd);sd.prototype.stopPropagation=sd.prototype.stopPropagation;sd.prototype.stopPropagation=sd.prototype.stopPropagation;sd.prototype.CAPTURING_PHASE=1;sd.prototype.CAPTURING_PHASE=sd.prototype.CAPTURING_PHASE;sd.prototype.AT_TARGET=2;sd.prototype.AT_TARGET=sd.prototype.AT_TARGET;sd.prototype.BUBBLING_PHASE=3;sd.prototype.BUBBLING_PHASE=sd.prototype.BUBBLING_PHASE;sd.prototype.eventPhase=0;sd.prototype.eventPhase=sd.prototype.eventPhase;function td(a,b,c){td.l.constructor.call(this,a,c);this.data=b}u(td,sd);t("H.util.DataEvent",td);function ud(a,b,c){ud.l.constructor.call(this,a,c);this.message=b}u(ud,sd);t("H.util.ErrorEvent",ud);var vd=Math,wd=vd.min,xd=vd.max,yd=vd.round,zd=vd.floor,Ad=vd.ceil,Bd=vd.abs,Cd=vd.log,Dd=vd.sqrt,Ed=vd.pow,Fd=vd.exp,Gd=vd.sin,Hd=vd.asin,Id=vd.cos,Jd=vd.tan,Kd=vd.atan,Ld=vd.atan2,Md=vd.LN2,Nd=vd.PI,Od=Nd/2,Pd=Nd/4,Qd=2*Nd,Rd=3*Nd,Sd=Nd/180,Td=180/Nd,Ud=1/0,Vd=Ed(-2,53),Wd=Wd||function(a){return Cd(a)/Md};function Xd(a,b){var c;return 0>(c=a%b)===0>b?c:c+b}function Yd(a,b,c){b-=c=c||0;a-=c;return a-zd(a/b)*b+c}t("H.math.normalize",Yd);function Zd(a,b,c){return a>c?c:a<b?b:a}
t("H.math.clamp",Zd);function $d(a,b,c,d){d||(d=0);return b<c?a>=b-d&&a<=c+d:a>=c-d&&a<=b+d}function ae(a,b,c,d,e,f){return Dd(Ed((a-e)*(d-f)-(b-f)*(c-e),2)/(Ed(c-e,2)+Ed(d-f,2)))}var be={NONE:0,VERTEX:1,EDGE:2,SURFACE:3};t("H.math.CoverType",be);
function ce(a,b,c,d,e,f){var g=c.length,h=g,k=c[0],l=0,m=0,p=0;d=d/2||0;var q=f||2;f=q*(e?0:1)+1;for(var r=q-2;1!=l&&h>f;){h-=r;var v=c[--h];q=c[--h];var w=c[h?h-r-1:(g+(h-r-1))%g];var z=c[h?h-r-2:(g+(h-r-2))%g];if(q>=a-d&&q<=a+d&&v>=b-d&&v<=b+d||z>=a-d&&z<=a+d&&w>=b-d&&w<=b+d)l=1;else if(!l&&q===a)z===a&&(v<b&&w>b||v>b&&w<b)||(k<=a&&z>a||k>=a&&z<a)&&(v>=b?++m:++p),l=$d(b,v,w,d)&&ae(a,b,q,v,z,w)<=d?2:0;else if(!l&&$d(a,q,z,d)){if(q<a&&z>a||q>a&&z<a)k=v+(a-q)/(z-q)*(w-v),m+=k>b,p+=k<b;l=$d(b,v,w,d)&&
ae(a,b,q,v,z,w)<=d?2:0}k=q}!l&&e&&0!==p&&0!==m%2&&(l=3);return l}function de(a,b){return ce(a.x,a.y,b,0,!0)!==be.NONE}t("H.math.isPointInsidePolygon",de);function ee(a){for(var b=a.length,c=new Float64Array(2*b),d=b&&uc(a[0].x);b--;){var e=a[b],f=b<<1;c[f]=d?e.x:e[0];c[f+1]=d?e.y:e[1]}return c}t("H.math.flatten",ee);function fe(a,b,c){this.type=a;this.data=b;this.f=$b();this.resolve=A(this.resolve,this);this.reject=A(this.reject,this);this.priority=ge;c!==B&&(this.priority=c);this.Bh().add(this)}var ge=1,he={wp:0,zp:ge,vp:2};n=fe.prototype;n.then=function(a,b,c){return this.f.hl.then(a,b,c)};n.resolve=function(a){this.re=3;this.f.resolve(a)};n.reject=function(a){this.re=5;this.f.reject(a)};n.re=0;n.cancel=function(){3>this.re&&(this.Ke(),this.Bh().remove(this),this.re=4)};function ie(a){var b;this.a={};for(b in he)this.a[he[b]]=[];this.vf=a;this.vf.addEventListener("allocatable",A(this.b,this))}t("H.util.JobManager",ie);var je=Object.keys(he).map(function(a){return he[a]}).sort().reverse();ie.prototype.add=function(a){C(a,fe,this.add,0);this.a[a.priority].push(a);this.b()};ie.prototype.contains=function(a){return-1<this.a[a.priority].indexOf(a)};
ie.prototype.remove=function(a){var b=a.priority,c=this.a[b].indexOf(a);if(-1<c)return this.a[b].splice(c,1),!0;a.kj&&this.vf.Vf(a.kj);return!1};ie.prototype.b=function(){je.forEach(function(a){this.a[a]=this.a[a].filter(function(b){var c;if((c=this.vf.bh(b))!==y){var d=A(this.vf.Vf,this.vf,c,b);b.kj=c;b.then(d,d);b.re=b.Rj(c)?1:5}else return!0},this)},this)};function ke(a,b,c){var d=[],e=arguments.length;a&&d.push(wc(a));1<e&&(e=2<e&&zc(c)?" out of ["+c[0]+"..."+c[1]+"]":"",d.push("("+b+e+")"));d=Error(d.join(" "));Object.setPrototypeOf(d,ke.prototype);return d}u(ke,Error);t("H.lang.OutOfRangeError",ke);ke.prototype.name="OutOfRangeError";var le="closure_listenable_"+(1E6*Math.random()|0);function me(a){return!(!a||!a[le])}var ne=0;function oe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ig=e;this.key=++ne;this.ue=this.Mf=!1}function pe(a){a.ue=!0;a.listener=null;a.proxy=null;a.src=null;a.ig=null};function qe(a){this.src=a;this.a={};this.b=0}qe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=re(a,b,d,e);-1<g?(b=a[g],c||(b.Mf=!1)):(b=new oe(b,this.src,f,!!d,e),b.Mf=c,a.push(b));return b};qe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=re(e,b,c,d);return-1<b?(pe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
function se(a,b){var c=b.type;if(!(c in a.a))return!1;var d=a.a[c],e=bb(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(pe(b),0==a.a[c].length&&(delete a.a[c],a.b--));return f}qe.prototype.ra=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,pe(d[e]);delete this.a[c];this.b--}return b};
function te(a,b){var c=void 0!==b,d=c?b.toString():"";return Ta(a.a,function(e){for(var f=0;f<e.length;++f)if(!c||e[f].type==d)return!0;return!1})}function re(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ue&&f.listener==b&&f.capture==!!c&&f.ig==d)return e}return-1};var ue=!tb||9<=Number(Eb),ve=tb&&!Db("9");!xb||Db("528");vb&&Db("1.9b")||tb&&Db("8")||sb&&Db("9.5")||xb&&Db("528");vb&&!Db("8")||tb&&Db("9");var we=function(){if(!ya.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{ya.addEventListener("test",Aa,b),ya.removeEventListener("test",Aa,b)}catch(c){}return a}();function xe(a,b){sd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(vb){a:{try{pb(b.nodeName);var e=!0;break a}catch(f){}e=
!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.b=a;a.defaultPrevented&&this.preventDefault()}}u(xe,sd);var ye={2:"touch",3:"pen",4:"mouse"};xe.prototype.stopPropagation=function(){xe.l.stopPropagation.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.l.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ve)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ze="closure_lm_"+(1E6*Math.random()|0),Ae={},Be=0;function Ce(a,b,c,d,e){if(d&&d.once)return De(a,b,c,d,e);if("array"==Ba(b)){for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);return null}c=Ee(c);return me(a)?a.W.add(String(b),c,!1,Ea(d)?!!d.capture:!!d,e):Fe(a,b,c,!1,d,e)}
function Fe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ea(e)?!!e.capture:!!e,h=Ge(a);h||(a[ze]=h=new qe(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=He();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)we||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ie(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Be++;return c}
function He(){var a=Je,b=ue?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function De(a,b,c,d,e){if("array"==Ba(b)){for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);return null}c=Ee(c);return me(a)?a.W.add(String(b),c,!0,Ea(d)?!!d.capture:!!d,e):Fe(a,b,c,!0,d,e)}
function Ke(a,b,c,d,e){if("array"==Ba(b)){for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);return null}d=Ea(d)?!!d.capture:!!d;c=Ee(c);if(me(a))return a.W.remove(String(b),c,d,e);if(!a)return!1;if(a=Ge(a))if(b=a.a[b.toString()],a=-1,b&&(a=re(b,c,d,e)),c=-1<a?b[a]:null)return Le(c);return!1}
function Le(a){if("number"===typeof a||!a||a.ue)return!1;var b=a.src;if(me(b))return se(b.W,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ie(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Be--;(c=Ge(b))?(se(c,a),0==c.b&&(c.src=null,b[ze]=null)):pe(a);return!0}function Ie(a){return a in Ae?Ae[a]:Ae[a]="on"+a}
function Me(a,b,c,d){var e=!0;if(a=Ge(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ue&&(f=Ne(f,d),e=e&&!1!==f)}return e}function Ne(a,b){var c=a.listener,d=a.ig||a.src;a.Mf&&Le(a);return c.call(d,b)}
function Je(a,b){if(a.ue)return!0;if(!ue){if(!b)a:{b=["window","event"];for(var c=ya,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new xe(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.a&&0<=e;e--){b.currentTarget=d[e];var f=Me(d[e],a,!0,b);c=c&&f}for(e=0;!b.a&&e<d.length;e++)b.currentTarget=
d[e],f=Me(d[e],a,!1,b),c=c&&f}return c}return Ne(a,new xe(b,this))}function Ge(a){a=a[ze];return a instanceof qe?a:null}var Oe="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ee(a){if(Da(a))return a;a[Oe]||(a[Oe]=function(b){return a.handleEvent(b)});return a[Oe]};function F(){od.call(this);this.W=new qe(this);this.no=this;this.ph=null}u(F,od);F.prototype[le]=!0;n=F.prototype;n.Qb=function(){return this.ph};n.ka=function(a){this.ph=a};n.addEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};n.removeEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
n.dispatchEvent=function(a){var b,c=this.Qb();if(c)for(b=[];c;c=c.Qb())b.push(c);c=this.no;var d=a.type||a;if("string"===typeof a)a=new sd(a,c);else if(a instanceof sd)a.target=a.target||c;else{var e=a;a=new sd(d,c);Xa(a,e)}e=!0;if(b)for(var f=b.length-1;!a.a&&0<=f;f--){var g=a.currentTarget=b[f];e=g.wd(d,!0,a)&&e}a.a||(g=a.currentTarget=c,e=g.wd(d,!0,a)&&e,a.a||(e=g.wd(d,!1,a)&&e));if(b)for(f=0;!a.a&&f<b.length;f++)g=a.currentTarget=b[f],e=g.wd(d,!1,a)&&e;return e};
n.s=function(){F.l.s.call(this);this.W&&this.W.ra(void 0);this.ph=null};n.wd=function(a,b,c){a=this.W.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.ue&&f.capture==b){var g=f.listener,h=f.ig||f.src;f.Mf&&se(this.W,f);d=!1!==g.call(h,c)&&d}}return d&&0!=c.ql};t("H.util.EventTarget",F);F.prototype.ka=F.prototype.ka;F.prototype.setParentEventTarget=F.prototype.ka;F.prototype.Qb=F.prototype.Qb;F.prototype.getParentEventTarget=F.prototype.Qb;F.prototype.addEventListener=F.prototype.addEventListener;F.prototype.addEventListener=F.prototype.addEventListener;F.prototype.removeEventListener=F.prototype.removeEventListener;F.prototype.removeEventListener=F.prototype.removeEventListener;F.prototype.dispatchEvent=F.prototype.dispatchEvent;
F.prototype.dispatchEvent=F.prototype.dispatchEvent;F.prototype.C=F.prototype.C;F.prototype.dispose=F.prototype.C;F.prototype.yb=F.prototype.yb;F.prototype.addOnDisposeCallback=F.prototype.yb;F.prototype.oo=F.prototype.wd;
F.prototype.wd=function(a,b,c){var d,e,f=!0;var g=c[c.currentTarget===c.target?"AT_TARGET":b?"CAPTURING_PHASE":(d=!0,"BUBBLING_PHASE")];if(!d||"pointerenter"!==(e=c.type)&&"pointerleave"!==e)c.eventPhase=g,f=F.prototype.oo.apply(this,arguments),d&&this.Qb&&null===this.Qb()&&delete c.eventPhase;return f};function Qe(a){a=a||{};var b=a.callback;this.b=a.label;Da(b)&&(this.callback=b);this.a=!!a.disabled;Qe.l.constructor.call(this)}u(Qe,F);t("H.util.ContextItem",Qe);Qe.prototype.$e=function(){return this.b};Qe.prototype.getLabel=Qe.prototype.$e;Qe.prototype.Oc=function(a){this.b!==a&&(this.b=a,this.dispatchEvent("update"));return this};Qe.prototype.setLabel=Qe.prototype.Oc;Qe.prototype.kc=function(){return this.a};Qe.prototype.isDisabled=Qe.prototype.kc;
Qe.prototype.Ca=function(a){a^this.a&&(this.a=a,this.dispatchEvent("update"));return this};Qe.prototype.setDisabled=Qe.prototype.Ca;var Re=new Qe;Qe.SEPARATOR=Re;function Se(){if(x.document){var a=document.createElement("canvas");a.width=a.height=1;return a.getContext("2d")}return null}function Te(){return window.devicePixelRatio||1}t("H.util.getPixelRatio",Te);var Ue=/^rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)$/;
function Ve(a){var b=We[a],c=x.RegExp;b||(x.Uint8ClampedArray||(x.Uint8ClampedArray=function(d){return d instanceof Number?Array(d):d.map(function(e){return Zd(yd(e),0,255)})}),"none"===a?b=new Uint8ClampedArray([0,0,0,0]):(Xe.fillStyle="black",Xe.fillStyle=a,Ue.test(Xe.fillStyle)?b=new Uint8ClampedArray([c.$1,c.$2,c.$3,255*c.$4]):(Xe.clearRect(0,0,1,1),Xe.fillRect(0,0,1,1),b=Xe.getImageData(0,0,1,1).data)),We[a]=b);return b}function Ye(a){return"none"!==a&&0<Ve(a)[3]}var We=nc(),Ze=!!x.VBArray;
t("H.util.eval",function(a){return eval(a)});function $e(a,b){return a!==B?a:b}function af(a){return/^<svg/.test(a)?"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a):a}t("H.util.provide",function(a){var b=ya.$jscomp;if(b&&("function"!=typeof b.Nm?0:b.Nm()))throw Error("goog.provide cannot be used within a module.");za(a,void 0)});function bf(a){this.mc=0<a?vd.round(a):0}bf.prototype.next=function(a){if(9007199254740992===this.mc)throw new ke(a,this.mc,[0,9007199254740991]);return this.mc++};
var cf=new bf,df=A(cf.next,cf);function ef(){return!0}function ff(){return!1}function id(){}var gf=pc([]),hf=pc({});function jf(a){return"CANVAS"===a.tagName?[a]:a.getElementsByTagName("CANVAS")}function kf(a,b,c){var d;b=a.ownerDocument===b?a.cloneNode(!0):b.importNode(a,!0);if(c)for(a=jf(a),c=jf(b),d=c.length;d--;)c[d].getContext("2d").drawImage(a[d],0,0);return b}var Xe=Se(),lf=Se();
function mf(a){var b=a.complete,c=0<a.naturalWidth;if(b&&!c&&Ze)try{lf.drawImage(a,0,0),c=!0}catch(d){}return b&&c}var nf=x.BlobBuilder||x.WebKitBlobBuilder||x.MozBlobBuilder;function of(a,b){b=b||"";if(nf){var c=new nf;c.append(a);a=c.getBlob(b)}else a=new Blob([a],{type:b});return a}var pf=x.navigator;$c=/Edge\/\d+/.test(pf.appVersion);ad=/(A|a)ndroid/.test(pf.appVersion);function qf(){var a=qf.a;a||(a=this,qf.a=a,Gc(qf.a),F.call(a),rf(this));return a}u(qf,F);qf.prototype.s=function(){qf.l.s.call(this);rf(this)};function rf(a){a.g=10;a.i=6;a.a=nc();a.b=nc();a.c=0}qf.prototype.bh=function(a){a=a.type;var b=this.a[a]||0;if(this.c<this.g&&b<this.i){var c=++this.f;this.c++;this.a[a]=b+1;this.b[c+""]=a;return c}return y};
qf.prototype.Vf=function(a){var b=this.b[a];if(!uc(b)||!this.a[b])throw new Yc(this.Vf,"Unknown requestId");this.c--;this.a[b]--;this.a[b]||delete this.a[b];delete this.b[a];this.dispatchEvent("allocatable")};qf.prototype.f=-1;function sf(a,b,c,d){if(!this.b[a])throw new D(sf,0,"Mime type is not supported");this.g=a;a=d?Va(d):{};"crossOrigin"in a||(a.crossOrigin="anonymous");this.a=a;tf.href=b.toString();fe.call(this,tf.protocol+"//"+tf.hostname,b,c)}u(sf,fe);sf.prototype.Rj=function(){this.c=this.b[this.g].call(this);return!0};sf.prototype.Ke=function(){this.c&&(this.c.abort(),this.c=null)};
sf.prototype.b={"application/json":function(){var a=this,b=uf(this.a),c=b.headers;b.headers=c=c?Va(c):{};c.Accept="application/json";return new Sc(this.data,function(d){200<=d.status&&300>d.status?a.resolve(d.json()):a.reject(d)},b)},"text/plain":function(){var a=this;return new Sc(this.data,function(b){200<=b.status&&300>b.status?a.resolve(b.text()):a.reject(b)},uf(this.a))},image:function(){var a=x.document.createElement("img"),b=this,c=this.data;a.onload=A(this.resolve,this,a);a.onerror=function(){b.reject(Pc.error())};
a.crossOrigin=this.a.crossOrigin;a.src=c;return{abort:function(){a.onerror=a.onload=null;Ze&&mf(a)||a.removeAttribute("src")}}}};
(function(){try{var a=new XMLHttpRequest;a.open("get","/",!0)}catch(b){a={}}"response"in a&&(sf.prototype.b.arraybuffer=function(){var b=new XMLHttpRequest,c=this,d=this.a,e=d.headers,f;b.open("GET",this.data);vf(b,d);b.responseType="arraybuffer";if(e)for(f in e)b.setRequestHeader(f,e[f]);b.onerror=b.ontimeout=function(){c.reject(Pc.error())};b.onload=function(){c.resolve(new Pc(b.response))};b.send();return b})})();var wf=new ie(new qf);sf.prototype.Bh=function(){return wf};var tf=x.document.createElement("a");
function uf(a){var b=Va(a);delete b.crossOrigin;vf(b,a);return b}function vf(a,b){a.withCredentials="use-credentials"===b.crossOrigin};function I(a,b){this.x=+a;this.y=+b}t("H.math.Point",I);I.prototype.set=I;I.prototype.set=I.prototype.set;I.prototype.clone=function(a){a?(a.x=this.x,a.y=this.y):a=new I(this.x,this.y);return a};I.prototype.clone=I.prototype.clone;I.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};I.prototype.add=I.prototype.add;I.prototype.sub=function(a){this.x-=a.x;this.y-=a.y;return this};I.prototype.sub=I.prototype.sub;I.prototype.scale=function(a,b){this.x*=a;this.y*=void 0===b?a:b;return this};
I.prototype.scale=I.prototype.scale;I.prototype.round=function(){this.x=yd(this.x);this.y=yd(this.y);return this};I.prototype.round=I.prototype.round;I.prototype.floor=function(){this.x=zd(this.x);this.y=zd(this.y);return this};I.prototype.floor=I.prototype.floor;I.prototype.ceil=function(){this.x=Ad(this.x);this.y=Ad(this.y);return this};I.prototype.ceil=I.prototype.ceil;I.prototype.oa=function(a){return!(!a||this.x!==a.x||this.y!==a.y)};I.prototype.equals=I.prototype.oa;
I.prototype.ck=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=a;if(c||d){var f=((this.x-a.x)*c+(this.y-a.y)*d)/(c*c+d*d);0>=f?e=a:1<=f?e=b:e=new I(a.x+f*c,a.y+f*d)}return e};I.prototype.getNearest=I.prototype.ck;I.prototype.$a=function(a){return Dd(Ed(this.x-a.x,2)+Ed(this.y-a.y,2))};I.prototype.distance=I.prototype.$a;function xf(a){if(!a)throw Error("invalid argument");return a instanceof I?a:new I(a.x,a.y)}I.fromIPoint=xf;function yf(a){var b=zf[a];if(!b)if(a in Af)b=zf[a]=a;else{b=Bf.length;var c="",d=a.charAt(0).toUpperCase()+a.substr(1),e="",f=!1;Cf&&(e=Cf+d,f=e in Af);for(;b--&&!f;)c=Bf[b],e=c+d,f=e in Af;f&&(Cf=c);if(b=f?e:null)zf[a]=b;else throw Error("Could not find any variant of CSS property ["+a+"]");}return b}t("H.dom.cssPrefixer.prefix",yf);var Bf=["O","Ms","ms","Moz","Webkit"],zf={},Cf="",Af=document.createElement("span").style;function Df(a,b,c,d){if(!a||!b||!c)throw new D(Df,null,"Must specify name, version and revision parameter");this.name=a;this.version=b;this.revision=c;d&&Xa(this,d)}t("H.util.BuildInfo",Df);Df.prototype.toString=function(){var a,b=[];for(a in this)Ac(this[a])&&b.push(this[a]);return b.join(";")};var Ef={};function Ff(a,b,c,d){if(!a)throw new D(Ff,1,"Must specify a name parameter");return Ef[a]||(Ef[a]=new Df(a,b,c,d))}Df.get=Ff;function Gf(){Gf.l.constructor.call(this);this.a=Hf(this);this.f=nc();this.c=A(this.c,this);this.a.addEventListener("message",this.c);this.b={}}u(Gf,F);Gf.prototype.s=function(){this.a.terminate()};Gf.prototype.g=function(a){var b=a.type,c=!!this.f[b],d=a.data,e=If++,f=d&&d.pp?d.pp:B,g=!0;c?(this.b[e]=a,Jf(this,b,e,d&&d.message,f)):(a.reject(new D(this.g,0,"processor_not_found")),g=!1);return g};
Gf.prototype.c=function(a){a=a.data;var b=this.b[a.taskId],c=a.taskId,d=a.data,e=this;if(2===a.type)(new sf("arraybuffer",d)).then(function(f){return f.arrayBuffer()}).then(function(f){e.a.postMessage(["3",c,[f]],[f])},function(){e.a.postMessage(["3",c,[null,"ERROR"]])});else{if(b){switch(a.type){case 1:b.resolve(d);break;case 0:b.reject(d)}delete this.b[c]}this.dispatchEvent(new sd(this.v.IDLE))}};var If=0;function Kf(a,b,c){var d=If++,e;a.b[d]=e=$b();Jf(a,b,d,c);return e.hl}
function Jf(a,b,c,d,e){d===B||Ca(d)||(d=[d]);try{a.a.postMessage([b,c,d],e)}catch(f){a=a.b[c],a.reject(f.message)}}Gf.prototype.v={IDLE:"idle",nj:"error"};Gf.prototype.i=function(a,b){var c=this.j||(this.j=new sd(this.v.nj));c.data=b;delete this.f[a];this.dispatchEvent(c)};
function Hf(a){var b=x.H.__bootstrap__;b=Da(b)?(""+b).replace(/^[^{]+{((.|[\r\n])+?)}\s*$/,"$1"):""+b;if(x.Worker&&x.URL)try{var c=new x.Worker(x.URL.createObjectURL(of(b,"application/javascript")))}catch(d){}c||(a=new Lf(a),function(){eval("var self = arguments[0];"+b)}(a),c=new Mf(a));return c}function Mf(a){F.call(this);this.a=a}u(Mf,F);Mf.prototype.postMessage=function(a){x.setTimeout(A(this.b,this,a),0)};Mf.prototype.b=function(a){var b=new sd("message");b.data=a;this.a.dispatchEvent(b)};
Mf.prototype.terminate=function(){this.a.C();this.C()};function Lf(a){F.call(this);this.a=a;this.addEventListener=A(this.addEventListener,this);this.removeEventListener=A(this.removeEventListener,this);this.postMessage=A(this.postMessage,this);this.eval=A(eval,this)}u(Lf,F);Lf.prototype.postMessage=function(a){var b=new sd("message");b.data=a;x.setTimeout(A(this.a.c,this.a,b),0)};function Nf(){var a=Of;a||(a=Of=this,F.call(a),Pf(this));return a}var Of;u(Nf,F);Nf.prototype.s=function(){Nf.l.s.call(this);Pf(this)};function Pf(a){var b=a.b,c;if(b)for(c=b.length;c--;)b[c].C();a.b=[];Gc(a.b);a.c=nc();a.f=nc()}
Nf.prototype.bh=function(a){var b;a=a.type;if(b=this.f[a]){var c=this.b;var d=c[0];d||(d=c[0]=new Gf,this.yb(Ka(rd,d)),Ua(this.c)||(c=x.Object.keys(this.c),Kf(d,"0",c)));c=d;c.f[a]||(c.f[a]=b,Kf(c,"1",[a,Da(b)?b+"":b]).then(id,A(c.i,c,a)))}else throw new Yc(this.bh,'Unknown type "'+a+'"');return d};Nf.prototype.Vf=function(){};Nf.prototype.a=function(a,b){var c=this.f,d=c[a];if(d){if(b!==d)throw new Yc(this.a,'Type "'+a+'" is already registered');}else c[a]=b};function Qf(a,b,c){fe.call(this,a,b,c)}var Rf;u(Qf,fe);Qf.prototype.Bh=function(){Rf||(Rf=new ie(new Nf));return Rf};Qf.prototype.Ke=function(){};Qf.prototype.Rj=function(a){return a.g(this)};function Sf(a,b,c){var d=Zd(+a,-90,90);if(b&&E(d))throw new D(b,c,a);return d}function Tf(a,b,c){var d=+a;if(-180>d||180<d)d=Xd(d+180,360)-180;if(b&&E(d))throw new D(b,c,a);return d}function Uf(a,b,c){var d;if(a!==B&&E(d=+a)&&b)throw new D(b,c,a);return d}function Vf(a,b){return 0!==(0>a^0>b)&&180<Bd(b-a)}t("H.geo.isDBC",Vf);function Xf(){vc(this,Xf)}t("H.geo.AbstractGeometry",Xf);Xf.prototype.getBoundingBox=Xf.prototype.G;Xf.prototype.equals=Xf.prototype.oa;Xf.prototype.sb="";Xf.prototype.Mb="";Xf.prototype.toString=function(){return this.Rc([this.sb.toUpperCase()," "]).join("")};Xf.prototype.toString=Xf.prototype.toString;Xf.prototype.Qc=function(){return{type:this.Mb,coordinates:this.od()}};Xf.prototype.toGeoJSON=Xf.prototype.Qc;Xf.prototype.X=function(){return{type:this.sb,coordinates:this.wc(),boundingBox:this.G().X()}};
Xf.prototype.forWorkerMessage=Xf.prototype.X;function Yf(a,b,c){this.lat=Sf(a,Yf,0);this.lng=Tf(b,Yf,1);c!==B&&(this.alt=Uf(c,Yf,2))}u(Yf,Xf);t("H.geo.Point",Yf);Yf.prototype.oa=function(a){return this===a||!!a&&this.lat===a.lat&&this.lng===a.lng&&(this.alt||0)===(a.alt||0)};Yf.prototype.equals=Yf.prototype.oa;Yf.prototype.$a=function(a){if(this===a||this.lat===a.lat&&this.lng===a.lng)a=0;else{var b=this.lat*Sd;var c=a.lat*Sd;a=1.274200158E7*Hd(wd(1,Dd(Ed(Gd((b-c)/2),2)+Id(b)*Id(c)*Ed(Gd((this.lng*Sd-a.lng*Sd)/2),2))))}return a};
Yf.prototype.distance=Yf.prototype.$a;
Yf.prototype.Qg=function(a,b,c){if(c){if(b/=6371000.79){a*=Sd;var d=Sd*this.lat;var e=Gd(d);var f=Gd(b);var g=Id(b);var h=Sd*this.lng;var k=Id(d);d=Hd(k*Id(a)*f+e*g);a=Ld(Gd(a)*k*f,g-e*Gd(d));a=(h+a+Nd)%(2*Nd)-Nd;k=a*Td}return b?new Yf(d*Td,(k+540)%360-180):this}a=(a%360+360)%360;if(0===(a+90)%180)return d=this.lng+b/(6371000.79*Qd*Id(this.lat*Sd))*(270===a?-360:360),new Yf(this.lat,(d+540)%360-180);if(b/=6371000.79){a*=Sd;h=this.lat*Sd;e=this.lng*Sd;f=h+b*Id(a);g=f-h;d=Cd(Jd(f/2+Pd)/Jd(h/2+Pd));
d=E(g/d)?Id(h):g/d;var l=b*Gd(a)/d;Bd(f)>Od&&(f=0<f?Nd-f:-(Nd+f))}return b?new Yf(f*Td,((e+l+Rd+(Bd(h+g)>Od?Nd:0))%Qd-Nd)*Td):this};Yf.prototype.walk=Yf.prototype.Qg;Yf.prototype.G=function(){return new K(this.lat,this.lng,this.lat,this.lng)};Yf.prototype.getBoundingBox=Yf.prototype.G;function Zf(a,b,c){var d=Ea(a)&&!(E(a.lat=Sf(a.lat))||E(a.lng=Tf(a.lng))||a.alt!==B&&E(a.alt=Uf(a.alt)));if(!d&&b)throw new D(b,c,a);return d}Yf.validate=Zf;
function $f(a){if(!a)throw new D($f,0,a);return new Yf(a.lat,a.lng,a.alt)}Yf.fromIPoint=$f;n=Yf.prototype;n.sb="Point";n.Rc=function(a){a.push("(",this.lng," ",this.lat,")");return a};n.Mb="Point";n.od=function(){return[this.lng,this.lat,this.alt||0]};n.wc=function(){return[this.lat,this.lng,this.alt||0]};function K(a,b,c,d){ag(this,Sf(a,K,0),Tf(b,K,1),Sf(c,K,2),Tf(d,K,3))}u(K,Xf);t("H.geo.Rect",K);K.prototype.sb="Polygon";K.prototype.Rc=function(a){var b=this.la,c=this.ba,d=this.na,e=this.ia;a.push("(","(",c," ",b,",",e," ",b,",",e," ",d,",",c," ",d,",",c," ",b,")",")");return a};K.prototype.oa=function(a){return this===a||!!a&&this.la===a.la&&this.ba===a.ba&&this.na===a.na&&this.ia===a.ia};K.prototype.equals=K.prototype.oa;K.prototype.clone=function(){return new K(this.la,this.ba,this.na,this.ia)};
K.prototype.clone=K.prototype.clone;function ag(a,b,c,d,e){a.ba=c;a.ia=e;b<d&&(c=b,b=d,d=c);a.la=b;a.na=d;a.c=a.a=a.b=null;return a}K.prototype.Rb=function(){this.c||(this.c=new Yf(this.la,this.ba));return this.c};K.prototype.getTopLeft=K.prototype.Rb;K.prototype.Nb=function(){this.a||(this.a=new Yf(this.na,this.ia));return this.a};K.prototype.getBottomRight=K.prototype.Nb;K.prototype.Rn=function(){return this.la};K.prototype.getTop=K.prototype.Rn;K.prototype.Hm=function(){return this.na};
K.prototype.getBottom=K.prototype.Hm;K.prototype.nn=function(){return this.ba};K.prototype.getLeft=K.prototype.nn;K.prototype.Hn=function(){return this.ia};K.prototype.getRight=K.prototype.Hn;K.prototype.hb=function(){this.b||(this.b=new Yf(this.na+(this.la-this.na)/2,bg(this.ba,this.Eb())));return this.b};K.prototype.getCenter=K.prototype.hb;K.prototype.Eb=function(){return cg(this.ba,this.ia)};K.prototype.getWidth=K.prototype.Eb;K.prototype.ce=function(){return this.la-this.na};
K.prototype.getHeight=K.prototype.ce;K.prototype.Fb=function(){return this.ba>this.ia};K.prototype.isCDB=K.prototype.Fb;K.prototype.mg=function(){return!this.Eb()&&!this.ce()};K.prototype.isEmpty=K.prototype.mg;K.prototype.G=function(){return new K(this.la,this.ba,this.na,this.ia)};K.prototype.getBoundingBox=K.prototype.G;
K.prototype.Qf=function(a,b,c){var d=this.hb();c||(a=Sf(a,this.Qf,0),b=Tf(b,this.Qf,1));b=this.jd(a,b,c);a=b.hb();return a.lat===d.lat&&a.lng===d.lng&&this.ce()===b.ce()&&this.Eb()===b.Eb()};K.prototype.containsLatLng=K.prototype.Qf;K.prototype.sd=function(a,b){b||Zf(a,this.sd,0);return this.Qf(a.lat,a.lng,b)};K.prototype.containsPoint=K.prototype.sd;
K.prototype.jh=function(a,b){var c=this.hb();if(!b&&!C(a,K))throw new D(this.jh,0,a);b=this.lc(a,b);a=b.hb();return a.lat===c.lat&&a.lng===c.lng&&this.ce()===b.ce()&&this.Eb()===b.Eb()};K.prototype.containsRect=K.prototype.jh;K.prototype.jd=function(a,b,c,d){if(!c){if(E(a=Sf(a)))throw new D(this.jd,0,a);if(E(b=Tf(b)))throw new D(this.jd,1,b);}return dg(this.la,this.ba,this.na,this.ia,a,b,a,b,d)};K.prototype.mergeLatLng=K.prototype.jd;
K.prototype.Qk=function(a,b,c){b||Zf(a,this.Qk,0);return this.jd(a.lat,a.lng,b,c)};K.prototype.mergePoint=K.prototype.Qk;K.prototype.lc=function(a,b,c){if(!b&&!C(a,K))throw new D(this.lc,0,a);return dg(this.la,this.ba,this.na,this.ia,a.la,a.ba,a.na,a.ia,c)};K.prototype.mergeRect=K.prototype.lc;K.prototype.Gc=function(a,b,c,d,e,f){e||(a=Sf(a,this.Gc,0),b=Tf(b,this.Gc,1),c=Sf(c,this.Gc,2),d=Tf(d,this.Gc,3));return dg(this.la,this.ba,this.na,this.ia,a,b,c,d,f)};K.prototype.mergeTopLeftBottomRight=K.prototype.Gc;
K.prototype.Cd=function(a,b){var c=this.ba<=this.ia,d=a.ba<=a.ia,e=this.ba<a.ia,f=a.ba<this.ia;if(!b&&!C(a,K))throw new D(this.Cd,0,a);return this.na<=a.la&&a.na<=this.la&&(!c&&(!d||e||f)||!d&&(e||f)||e&&f)};K.prototype.intersects=K.prototype.Cd;function cg(a,b){a=b-a;return a+(0>a?360:0)}function bg(a,b){a+=b/2;return a-(180<a?360:0)}
function dg(a,b,c,d,e,f,g,h,k){c=wd(c,g);a=xd(a,e);e=cg(b,d);var l=bg(b,e);g=cg(f,h);var m=bg(f,g)-l;m+=0>m-1E-6?360:0;if(180>m-1E-6){l=b;var p=h}else m=360-m,l=f,p=d;m=m+e/2+g/2;360<=m+5E-7?(l=-180,p=180):m-5E-7<e?(l=b,p=d):m-5E-7<g&&(l=f,p=h);return k?ag(k,a,l,c,p):new K(a,l,c,p)}K.merge=dg;function eg(a,b,c){c||(Zf(a,eg,0),Zf(b,eg,1));return new K(a.lat,a.lng,b.lat,b.lng)}K.fromPoints=eg;
function fg(a,b){var c=1,d=a.length,e=null;if(!Ca(a))throw new D(fg,0,a);if(0<d){var f=a[0];for(e=eg(f,f,b);c<d;c++)f=a[c],e.jd(f.lat,f.lng,b,e)}return e}K.coverPoints=fg;function gg(a,b){var c=3,d=a.length,e;if(!(b||a&&null!=a.length))throw new D(gg,0,a);if(0<d)for(e=new K(a[0],a[1],a[0],a[1]);c<d;c+=3)e.jd(a[c],a[c+1],b,e);return e}K.coverLatLngAlts=gg;
function hg(a,b){var c=1,d=a.length,e;if(b&&(!a||null==a.length))throw new D(hg,0,a);if(0<d)for(e=new K(a[0].la,a[0].ba,a[0].na,a[0].ia);c<d;c++)e.lc(a[c],b,e);return e}K.coverRects=hg;
K.prototype.pl=function(a,b){var c=this.ba,d=this.la,e=this.ia,f=this.na,g=this.hb().lng;Zf(a,this.pl,0);var h=a.lat-f-(d-f)/2;var k=a.lng-g;k=180<k||-180>k?-(g+a.lng):k;a=c+(0>k?2*k:0);a=-180>a?360+a:a;e+=0<k?2*k:0;e=180<e?e-360:e;d=0<h?d+2*h:d;90<=d&&(d=90);f=0>h?f+2*h:f;-90>=f&&(f=-90);return b?ag(b,d,a,f,e):new K(d,a,f,e)};K.prototype.resizeToCenter=K.prototype.pl;K.prototype.Mb="Polygon";
K.prototype.od=function(){return[[this.ba,this.la,0],[this.ia,this.la,0],[this.ia,this.na,0],[this.ba,this.na,0],[this.ba,this.la,0]]};K.prototype.X=function(){return this.wc()};K.prototype.wc=function(){return[this.la,this.ba,this.na,this.ia]};function ig(a,b,c,d,e,f){vc(this,ig);this.c=a||10;this.b=this.a=null;this.f=d||0;this.g=e||0;this.i=b||1;this.j=c||1;this.o=!!f;this.flush()}function jg(a){var b=a.b;if(a.o&&!b){var c=a.head;if(c.entries||c[0]||c[1]||c[2]||c[3])b=[c],b=kg([b,b,b,b],[c[6],c[7],c[4],c[5]]),a.b=b}return b}
function kg(a,b){var c,d,e,f,g=0;for(c=3;0<=c;c--){var h=c+4;var k=0<c%3;var l=[];var m=b[c];var p=a[c];for(d=p.length;d--;){var q=p[d];if(e=q.entries)for(f=e.length;f--;){var r=e[f].zd(c);if(k?r>m:r<m)m=r}for(f=4;f--;)(e=q[f])&&(k?e[h]>m:e[h]<m)&&l.push(e)}g+=l.length;b[c]=m;a[c]=l}g&&(b=kg(a,b));return b}function lg(a,b,c){var d,e;if(a.o&&(d=a.b))for(e=3;0<=e;e--){var f=b.zd(e);if(e%3?f>=d[e]:f<=d[e])if(c)d[e]=f;else{a.b=null;break}}}
ig.prototype.remove=function(a){var b,c,d,e=!1;a&&(b=a.node)&&b.b===this&&(c=b.entries)&&0<=(d=c.indexOf(a))&&(c.splice(d,1),this.m(b),lg(this,a,!1),e=!0);return e};ig.prototype.flush=function(){var a=new mg(null,NaN,this.f-this.i,this.g-this.j,this.f+this.i,this.g+this.j);a.b=this;this.head=this.a=a;this.b=null};function ng(a,b){var c=a.head,d;if(b){var e=b;if(e!==c)for(c=e;e=e.parent;)if(e.entries||1<e.a)c=e}else for(;!c.entries&&2>(d=c.a);)if(d)c=e;else break;a.head=c}
ig.prototype.bb=function(a,b,c,d,e,f){var g=[],h=this.head,k=this.a;a<=h[5]&&b<=h[6]&&(e?c>=h[7]:c>h[7])&&(f?d>=h[4]:d>h[4])&&og(this,h,g,a,b,c,d,f||d>=k[6],e||c>=k[5]);return g};
function og(a,b,c,d,e,f,g,h,k){var l=b.entries,m=b[7],p=b[4],q=b[5],r=b[6],v=b[8],w=b[9],z;if(l){var J=l.length;if(e>p||d>m||g<r||f<q)for(;J--;){m=l[J];p=m.zd(3);q=m.zd(0);r=m.zd(1);var G=m.zd(2);G>=e&&r>=d&&(q<g||h&&q==g)&&(p<f||k&&p==f)&&c.push(m)}else for(;J--;)c.push(l[J])}if(f>v||k&&f==v)e<w&&(z=b[1])&&og(a,z,c,d,e,f,g,h,k),(g>w||h&&g==w)&&(z=b[3])&&og(a,z,c,d,e,f,g,h,k);d<v&&(e<w&&(z=b[0])&&og(a,z,c,d,e,f,g,h,k),(g>w||h&&g==w)&&(z=b[2])&&og(a,z,c,d,e,f,g,h,k))}ig.prototype.Sc=ba(1);var pg=0;
function mg(a,b,c,d,e,f){this.c=b;a&&(this.parent=a,this.b=a.b,b&1?(c=a[8],e=a[5]):(c=a[7],e=a[8]),b&2?(d=a[9],f=a[6]):(d=a[4],f=a[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2}mg.prototype.a=0;function qg(a,b){return a[b]||(++a.a,a[b]=new mg(a,b))}mg.prototype.removeChild=function(a){var b=a.c;this[b]===a&&(delete this[b],delete a.parent,--this.a)};mg.prototype.Sc=ba(0);function rg(a,b){(a.entries||(a.entries=[])).push(b);b.node=a}
function sg(a,b,c,d,e){var f=a[5],g=a[6];return a[7]<=b&&a[4]<=c&&(f>d||f===d&&f===a.b.a[5])&&(g>e||g===e&&g===a.b.a[6])};function tg(a,b,c,d,e,f){tg.l.constructor.apply(this,arguments)}u(tg,ig);tg.prototype.m=function(a){for(var b,c,d=this.head;a;){if(!(b=a.entries)||!b.length)if(b&&delete a.entries,!a.a&&(c=a.parent)){c.removeChild(a);d===a&&(d=c);a=c;continue}a=y}this.head!==d&&(this.head=d,ng(this))};function ug(a,b,c,d,e){if(sg(a.a,b,c,d,e))return vg(a,a.a,b,c,d,e,a.c);throw Error("Coordinates out of bounds");}tg.prototype.Dc=function(a,b){return ug(this,a,b,a,b)};
function vg(a,b,c,d,e,f,g){var h=b[8],k=b[9],l,m;g&&(e<h||(l=c>=h))&&(f<k||(m=d>=k))?c=vg(a,qg(b,l|m<<1),c,d,e,f,g-1):(rg(b,c=new wg(c,d,e,f)),lg(a,c,!0),ng(a,b));return c}function wg(a,b,c,d){this.id=pg++;this[0]=b;this[1]=c;this[2]=d;this[3]=a}wg.prototype.zd=function(a){return this[a]};function xg(a){this.f=new tg(+a||10,180,90,0,0,!0);this.c=[];this.g=!1;this.a=this.b=this.O=null}t("H.geo.QuadTree",xg);n=xg.prototype;n.$h=0;n.cd=function(){return this.$h};n.Fb=function(){return this.g};
n.G=function(){var a,b;if(!this.O){var c=[];!this.b&&(a=jg(this.f))&&(this.b=new K(-a[0],a[3],-a[2],a[1]));(b=this.b)&&c.push(b);var d,e,f;if(!this.a&&(f=(e=this.c).length)){a=90;var g=360;var h=-90;for(d=0;f--;){var k=e[f];a=wd(a,k[0]);g=wd(g,k[3]);h=xd(h,k[2]);d=xd(d,k[1])}this.a=new K(-a,g,-h,d-360)}(b=this.a)&&c.push(b);if(b=c[0])c[1]&&(b=b.lc(c[1],!0)),this.O=b}return this.O};
function yg(a,b,c,d,e,f){f?(f=new wg(e,-b,c+360,-d),a.c.push(f),a.g=!0,a.a&&a.a.Gc(b,c,d,e,!0,a.a)):(f=ug(a.f,c,-b,e,-d),a.b&&a.b.Gc(b,c,d,e,!0,a.b));++a.$h;a.O=null;return f}n.Dc=function(a){var b=a.lng;a=a.lat;return yg(this,a,b,a,b,!1)};n.sk=function(a){var b=a.Rb(),c=a.Nb();return(a=a.Fb())?yg(this,b.lat,c.lng,c.lat,b.lng,a):yg(this,b.lat,b.lng,c.lat,c.lng,a)};xg.prototype.insertBoundingBox=xg.prototype.sk;
xg.prototype.remove=function(a){var b;if(a.node){var c=this.f.remove(a);this.b=null}else if(a=(b=this.c).indexOf(a),c=0<=a)b.splice(a,1),this.g=0<b.length,this.a=null;c&&(--this.$h,this.O=null);return c};xg.prototype.remove=xg.prototype.remove;function zg(a,b,c,d,e,f,g){a=a.c;var h=a.length,k=[],l;if(h){var m=c+360;for(l=e+360;h--;){var p=a[h];Ag(p,b,c,d,e,f,g)?k.push(p):Ag(p,b,m,d,l,f,g)&&k.push(p)}}return k}
function Ag(a,b,c,d,e,f,g){var h=a[3],k=a[0],l=a[1];a=a[2];return(f?k<=d:k<d)&&(g?h<=e:h<e)&&a>=b&&l>=c}function Bg(a,b){var c,d,e;if(c=b.length){var f=a.length;for(d={};f--;)d[a[f].id]=1;for(;c--;)(e=b[c]).id in d||a.push(e)}}xg.prototype.kg=function(a,b,c){var d=this.f,e=a.Rb(),f=a.Nb(),g=-e.lat;e=e.lng;var h=-f.lat;f=f.lng;!b&&g===h||!c&&e===f?a=[]:a.Fb()?(a=d.bb(-180,g,f,h,c,b),Bg(a,d.bb(e,g,180,h,!1,b)),Bg(a,zg(this,g,f,h,e+360,b,c))):(a=d.bb(e,g,f,h,c,b),Bg(a,zg(this,g,e,h,f,b,c)));return a};
xg.prototype.intersectBoundingBox=xg.prototype.kg;var Cg=[62,-1,-1,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,63,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],Dg="undefined"!==typeof BigInt?BigInt:Number;
function Eg(a){var b=Dg(0),c=Dg(0),d=[];a.split("").forEach(function(e){e=Dg(Cg[e.charCodeAt(0)-45]);b|=(e&Dg(31))<<c;(e&Dg(32))===Dg(0)?(d.push(b),b=Dg(0),c=Dg(0)):c+=Dg(5)});if(0<c)throw Error("Invalid encoding");return d}function Fg(a){a&Dg(1)&&(a=~a);a>>=Dg(1);return+a.toString()}
function Gg(a){var b=void 0===a.precision?5:a.precision,c=void 0===a.Df?0:a.Df,d=void 0===a.Ef?0:a.Ef;a=a.Ai;var e=Math.pow(10,b),f=Math.pow(10,d);b=Hg(b,c,d);var g=[],h=Dg(0),k=Dg(0),l=Dg(0);a.forEach(function(m){var p=Dg(Math.round(m[0]*e));g.push(Ig(p-h));h=p;p=Dg(Math.round(m[1]*e));g.push(Ig(p-k));k=p;c&&(m=Dg(Math.round(m[2]*f)),g.push(Ig(m-l)),l=m)});return(b instanceof Array?b:fa(ea(b))).concat(g instanceof Array?g:fa(ea(g))).join("")}
function Hg(a,b,c){if(0>a||15<a)throw Error("precision out of range. Should be between 0 and 15");if(0>c||15<c)throw Error("thirdDimPrecision out of range. Should be between 0 and 15");if(0>b||7<b||4===b||5===b)throw Error("thirdDim should be between 0, 1, 2, 3, 6 or 7");a=c<<7|b<<4|a;return Jg(1)+Jg(a)}
function Jg(a){var b="";for(a=Dg(a);31<a;){var c=a&Dg(31)|Dg(32);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[c];a>>=Dg(5)}return b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[a]}function Ig(a){a=Dg(a);var b=0>a;a<<=Dg(1);b&&(a=~a);return Jg(a)}function Kg(a){return Gg({Ai:a.polyline,precision:a.precision,Df:a.thirdDim,Ef:a.thirdDimPrecision})}t("H.util.flexiblePolyline.encode",Kg);
function Lg(a){a=Eg(a);if(1!==+a[0].toString())throw Error("Invalid format version");var b=+a[1].toString();b={precision:b&15,Df:b>>4&7,Ef:b>>7&15};for(var c=Math.pow(10,b.precision),d=Math.pow(10,b.Ef),e=b.Df,f=0,g=0,h=0,k=[],l=2;l<a.length;){var m=Fg(a[l])/c,p=Fg(a[l+1])/c;f+=m;g+=p;e?(m=Fg(a[l+2])/d,h+=m,k.push([f,g,h]),l+=3):(k.push([f,g]),l+=2)}if(l!==a.length)throw Error("Invalid encoding. Premature ending reached");a=Object.assign({},b,{Ai:k});return{polyline:a.Ai,precision:a.precision,thirdDim:a.Df,
thirdDimPrecision:a.Ef}}t("H.util.flexiblePolyline.decode",Lg);function L(a){L.l.constructor.call(this);a&&Mg(a,L,0);this.Y=a||[];this.a=Ng(this,0,this.Y.length)}u(L,Xf);t("H.geo.LineString",L);function Ng(a,b,c){a=a.Y;var d=0;b=xd(b,0);c=wd(c,a.length);c-=2;for(b+=1;b<c;)d+=Vf(a[b],a[b+=3]);return d}L.prototype.Fi=function(a,b,c){Og(this,a,b,c,this.Fi)};L.prototype.pushLatLngAlt=L.prototype.Fi;function Og(a,b,c,d,e){var f=a.Y.length;b=Sf(b,e);c=Tf(c,e);a.Y.push(Sf(b,e),Tf(c,e),d===B?0:Uf(d,e));f&&(a.a+=Vf(a.Y[f-2],c));delete a.O;delete a.b}
L.prototype.Bf=function(a,b,c){c&&Mg(c,this.Bf,2);void 0===b&&(b=this.Y.length);b&&(this.a-=Ng(this,a-3,a+b+3));var d=c?this.Y.splice.apply(this.Y,[a,b].concat(c)):this.Y.splice(a,b);c&&(this.a+=Ng(this,a-3,a+c.length+3));b&&!c&&(this.a+=Ng(this,a-3,a-3));delete this.O;delete this.b;return d};L.prototype.spliceLatLngAlts=L.prototype.Bf;L.prototype.tk=function(a,b,c,d){this.Bf(a,0,[b,c,d])};L.prototype.insertLatLngAlt=L.prototype.tk;L.prototype.ll=function(a){this.Bf(a,3)};
L.prototype.removeLatLngAlt=L.prototype.ll;L.prototype.Hd=function(a){Og(this,a.lat,a.lng,a.alt,this.Hd)};L.prototype.pushPoint=L.prototype.Hd;L.prototype.Dc=function(a,b){this.tk(3*a,b.lat,b.lng,b.alt)};L.prototype.insertPoint=L.prototype.Dc;L.prototype.sf=function(a){this.ll(3*a)};L.prototype.removePoint=L.prototype.sf;L.prototype.Re=function(a,b){var c=this.Y,d=3*a;a=c[d];var e=c[d+1];c=c[d+2];b&&(b.lat=a,b.lng=e,b.alt=c);return b||new Yf(a,e,c)};L.prototype.extractPoint=L.prototype.Re;
L.prototype.wm=function(a,b,c){var d=this.Y;b=b||0;c=$e(c,d.length/3);for(var e=3*b;b<c;)a(d[e++],d[e++],d[e++],b++)};L.prototype.eachLatLngAlt=L.prototype.wm;L.isDBC=Vf;L.prototype.zh=function(a){var b=this.a;a&&(a=this.Y,b+=Vf(a[a.length-2],a[1]));return b};L.prototype.getDBCs=L.prototype.zh;L.prototype.af=function(){return this.Y.length/3};L.prototype.getPointCount=L.prototype.af;L.prototype.ln=function(){return this.Y};L.prototype.getLatLngAltArray=L.prototype.ln;L.prototype.O=y;
L.prototype.G=function(){var a;if(!(a=this.O)){a=this.Y;var b=a.length,c=3,d,e,f=y;if(3<=b){var g=d=a[0];var h=e=a[1];for(f=new K(g,h,d,e);c<b;c+=3){g=a[c-3];h=a[c-2];d=a[c];e=a[c+1];if(h>e&&180<e-h||h<e&&-180>h-e||e<h&&180>Bd(e-h)){var k=h;h=e;e=k}g<d&&(k=g,g=d,d=k);dg(f.la,f.ba,f.na,f.ia,g,h,d,e,f)}}a=this.O=f}return a};L.prototype.getBoundingBox=L.prototype.G;L.prototype.bo=function(){return this.O!==y};L.prototype.hasBoundingBox=L.prototype.bo;
function Mg(a,b,c){for(var d=a.length,e=!(d%3),f;e&&d;)e=!(E(a[--d]=Uf((f=a[d])===B?0:f))||E(a[--d]=Tf(a[d]))||E(a[--d]=Sf(a[d])));if(!e&&b)throw new D(b,c,a);}function Pg(a){var b=new L,c=0,d=a.length;if(d%2)throw new D(Pg,0,a);for(;c<d;)Og(b,a[c++],a[c++],0,Pg);return b}L.fromLatLngArray=Pg;L.prototype.oa=function(a){var b=this===a,c;if(!b&&(b=C(a,L))){var d=this.Y;a=a.Y;for(b=(c=d.length)===a.length;b&&c--;)b=d[c]==a[c]}return b};L.prototype.equals=L.prototype.oa;
function Qg(a,b){return a.a-b.a}
function Rg(a,b){var c=a.Y,d=-2,e=[],f;var g=a.b;if(!g){g=a.b=new xg;var h=0;var k=a.Y;var l=k.length;for(f=0;f<l;f+=3){var m=k[f];var p=k[f+1];if(f){if(r<p){var q=r;var r=p}else q=p;if(w<m)var v=m;else{v=w;var w=m}q=yg(g,v,q,w,r,180<r-q);q.a=h++}w=m;r=p}}g=g.kg(b).sort(Qg);k=g.length;for(b=0;b<k;b++){h=g[b];h=h.a;l=3*h;if(h>d+1){var z=[c[l],c[l+1]];e.push(z)}d=h;z.push(c[l+3],c[l+4])}if(a.a){c=[];d=e.length;for(b=0;b<d;b++)if(z=e[b],g=z.length){k=[];for(a=0;a<g;a+=2)h=z[a],l=z[a+1],k.push(h,l),f=
z[a-1],a&&Vf(l,f)&&(c.push(k),k=[],f+=0>f?360:-360,k.push(z[a-2],f,h,l));c.push(k)}e=c}return e}n=L.prototype;n.sb="LineString";n.Rc=function(a,b){var c=this.Y,d=c.length,e;if(d){a.push("(");for(e=0;e<d;e+=3)e&&a.push(","),a.push(c[e+1]," ",c[e]);b&&(c[0]!==c[d-3]||c[1]!==c[d-2])&&a.push(",",c[1]," ",c[0]);a.push(")")}else a.push("EMPTY");return a};n.Mb="LineString";n.od=function(){var a=[],b=this.Y,c=b.length,d;for(d=0;d<c;d+=3)a.push([b[d+1],b[d],b[d+2]]);return a};
n.wc=function(){var a=this.Y,b;if(this.G().Fb()){a=a.slice();var c=1;for(b=a.length;c<b;c+=3)0>a[c]&&(a[c]+=360)}return a};n.np=function(a){a=void 0===a?5:a;for(var b=this.Y,c=b.length,d=[],e=0;e<c;e+=3)d.push([b[e],b[e+1],b[e+2]]);return Kg({polyline:d,precision:a,thirdDim:2,thirdDimPrecision:a})};L.prototype.toFlexiblePolyline=L.prototype.np;
function Sg(a){var b=Lg(a);a=b.polyline;var c=b.thirdDim;b=2===c||3===c;c=0===c;if(!a)throw new D(Sg,0,"data");if(b||c){c=a.length;var d=Array(3*c);for(var e=0,f=0;e<c;e++){var g=a[e];d[f++]=g[0];d[f++]=g[1];d[f++]=b?g[2]:0}}if(!d)throw new D(Sg,0,"only ABSENT, ALTITUDE or ELEVATION are supported as type of the 3rd dimension");return new L(d)}L.fromFlexiblePolyline=Sg;function Tg(a){Tg.l.constructor.call(this);void 0!==a&&(this.data=a)}u(Tg,F);t("H.map.Feature",Tg);Tg.prototype.getData=function(){return this.data};Tg.prototype.getData=Tg.prototype.getData;Tg.prototype.s=function(){Tg.l.s.call(this);delete this.data};function Ug(){}t("H.map.provider.Invalidations",Ug);Ug.MARK_INITIAL=Vd;Ug.prototype.update=function(a,b){b!==Vg.NONE&&(this.a=a,b&Vg.SPATIAL&&(this.f=a),b&Vg.VISUAL&&(this.g=a),b&Vg.ADD&&(this.b=a),b&Vg.REMOVE&&(this.c=a),b&Vg.Z_ORDER&&(this.j=a),b&Vg.VOLATILITY&&(this.i=a))};Ug.prototype.update=Ug.prototype.update;Ug.prototype.rn=function(){return this.a};Ug.prototype.getMark=Ug.prototype.rn;Ug.prototype.a=Vd;Ug.prototype.ho=function(a){return this.a>a};Ug.prototype.isAny=Ug.prototype.ho;
Ug.prototype.g=Vd;Ug.prototype.oe=function(a){return this.g>a};Ug.prototype.isVisual=Ug.prototype.oe;Ug.prototype.f=Vd;Ug.prototype.Th=function(a){return this.f>a};Ug.prototype.isSpatial=Ug.prototype.Th;Ug.prototype.b=Vd;Ug.prototype.uk=function(a){return this.b>a};Ug.prototype.isAdd=Ug.prototype.uk;Ug.prototype.c=Vd;Ug.prototype.ng=function(a){return this.c>a};Ug.prototype.isRemove=Ug.prototype.ng;Ug.prototype.j=Vd;Ug.prototype.Uh=function(a){return this.j>a};Ug.prototype.isZOrder=Ug.prototype.Uh;
Ug.prototype.i=Vd;Ug.prototype.mo=function(a){return this.i>a};Ug.prototype.isVolatility=Ug.prototype.mo;var Vg={NONE:0,VISUAL:1,SPATIAL:2,ADD:4,REMOVE:8,Z_ORDER:16,VOLATILITY:32};Ug.Flag=Vg;function Wg(a,b,c){Wg.l.constructor.call(this,a);this.oldValue=c;this.newValue=b}u(Wg,sd);t("H.util.ChangeEvent",Wg);function M(a){vc(this,M);M.l.constructor.call(this,a?a.data:B);this.aa=Xg.next();if(a){var b="min";Dc(a[b])&&(this.A=a[b]);b="max";Dc(a[b])&&(this.u=a[b]);b="visibility";b in a&&(this.B=!!a[b]);b="volatility";b in a&&(this.R=!!a[b]);b="zIndex";b in a&&(this.o=+a[b]||0);b="provider";b in a&&!C(a[b],N)&&(this.qa=a[b],this.ya(Vg.ADD))}}u(M,Tg);t("H.map.Object",M);var Xg=new bf(1),Yg={ANY:31,OVERLAY:1,SPATIAL:2,MARKER:4,DOM_MARKER:8,GROUP:16};M.Type=Yg;M.prototype.ib=function(){return this.aa};
M.prototype.getId=M.prototype.ib;M.prototype.Wi=function(a){if(!Dc(a)&&!Ac(a))throw new D(this.Wi,0,"id must be a number or a string");this.m=a;return this};M.prototype.setRemoteId=M.prototype.Wi;M.prototype.Gn=function(){return this.m};M.prototype.getRemoteId=M.prototype.Gn;M.prototype.A=-1/0;M.prototype.u=1/0;M.prototype.$j=function(a){var b=this.u;if(a)for(a=this;a=a.Ia;)b=wd(b,a.u);return b};M.prototype.getMax=M.prototype.$j;
M.prototype.bk=function(a){var b=this.A;if(a)for(a=this;a=a.Ia;)b=xd(b,a.A);return b};M.prototype.getMin=M.prototype.bk;M.prototype.B=!0;M.prototype.wb=function(a){var b=this.B;(a=!!a)^b&&(this.B=a,this.invalidate(Vg.VISUAL));return this};M.prototype.setVisibility=M.prototype.wb;M.prototype.Bc=function(a){for(var b=this,c;(c=b.B)&&a&&(b=b.Ia););return c};M.prototype.getVisibility=M.prototype.Bc;M.prototype.R=!1;M.prototype.hg=function(a){for(var b=this,c;!(c=b.R)&&a&&(b=b.Ia););return c};
M.prototype.getVolatility=M.prototype.hg;M.prototype.Hl=function(a){var b=this.R;b^a&&(this.R=!b,this.invalidate(Vg.VOLATILITY));return this};M.prototype.setVolatility=M.prototype.Hl;M.prototype.o=B;M.prototype.kk=function(){return this.o};M.prototype.getZIndex=M.prototype.kk;M.prototype.Ae=function(a){a!==this.o&&(this.uf(),this.o=a,this.invalidate(Vg.Z_ORDER));return this};M.prototype.setZIndex=M.prototype.Ae;M.prototype.U=B;
M.prototype.fd=function(){var a=this.U,b,c;if(!a){var d=(b=this.o)!==B;(a=this.Ia)?(a=a.fd().slice(),a[0]|=d):a=[d|0];a.push(b||0,0>(c=this.Zi)?this.aa:c);this.U=a}return a};M.prototype.getZInfo=M.prototype.fd;M.prototype.uf=function(){this.U=B};function Zg(a,b,c){var d,e;if(!c||a[0]|b[0]){var f=a.length;var g=b.length;var h=wd(f,g);var k=1;for(e=1+c;k<h;k+=e)if(d=a[k]-b[k])return d}return c?0:f-g}M.compareZInfo=Zg;function $g(a,b){return a.Dj(b)}M.compareZOrder=$g;
M.prototype.Dj=function(a){return this.Rg-a.Rg||Zg(this.fd(),a.fd(),!1)};M.prototype.compareZOrder=M.prototype.Dj;n=M.prototype;n.previousSibling=y;n.nextSibling=y;n.Zi=-1;n.Ia=y;n.vn=function(){return this.Ia};M.prototype.getParentGroup=M.prototype.vn;M.prototype.ic=function(){for(var a=this,b;b=a.Ia;)a=b;return a};M.prototype.getRootGroup=M.prototype.ic;M.prototype.contains=function(a){return this===a};M.prototype.contains=M.prototype.contains;
M.prototype.ka=function(a){if(this.Ia)throw new Yc(this.ka,"Not allowed for a child of a group");M.l.ka.call(this,a)};M.prototype.setParentEventTarget=M.prototype.ka;M.prototype.qa=y;M.prototype.ga=function(){return this.qa};M.prototype.getProvider=M.prototype.ga;
M.prototype.ze=function(a,b){var c=this.qa,d;if(d=c!==a){if(b&&(c&&!C(c,N)||a&&!C(a,N)))throw new Yc(b,"Only LocalObjectProvider allows an object transfers");b=this.type!==Yg.GROUP;c&&(this.invalidate(Vg.REMOVE),b&&c.Ja(this));if(this.qa=a)b&&a.da(this),this.Ea=y,this.invalidate(Vg.ADD)}return d};M.prototype.Pb=function(){return this.Ea||(this.Ea=new Ug)};M.prototype.getInvalidations=M.prototype.Pb;M.prototype.ya=function(a){var b=this.ga(),c;(c=!!b)&&b.invalidateObject(this,a);return c};
M.prototype.invalidate=M.prototype.ya;M.prototype.s=function(){this.Ia&&this.Ia.Ja(this);M.l.s.call(this)};M.prototype.setData=function(a){this.data=a;return this};M.prototype.setData=M.prototype.setData;M.prototype.Qc=function(a){if(a&&!Da(a))throw new D(M.prototype.Qc,0,"opt_callback must be a function");a={type:"Feature",properties:ah(this,a?a(this.data):this.data,!!a),geometry:this.ea().Qc()};this.m&&(a.id=this.m);return a};M.prototype.toGeoJSON=M.prototype.Qc;
function ah(a,b,c){if(null===b||b===B)return null;if(0<=Object.keys(b).length&&"[object Object]"!==Object.prototype.toString.call(b))throw Error(bh(a,c));try{return JSON.stringify(b),b}catch(d){throw Error(bh(a,c));}}function bh(a,b){return"Object Remote-Id: "+a.m+" - "+(b?"The value returned by the callback is not a valid JSON object and cannot be set as Feature properties.":"The given object data is not a valid JSON object and cannot be set as Feature properties.")}
M.prototype.X=function(){return{id:this.aa,properties:{min:this.bk(),max:this.$j(),zIdx:this.o,sIdx:this.Zi,parent:this.Ia?this.Ia.ib():0,visible:this.Bc(),"volatile":this.hg()},type:"Feature"}};M.prototype.forWorkerMessage=M.prototype.X;function ch(a){var b;if(a){var c=dh;for(b=C(a,ch);c--;){var d=eh[c];if(a.hasOwnProperty(d)){var e=a[d];if(b)this[d]=e;else{if((e=fh[c](e))===gh)throw new D(ch,0,d+": "+a[d]);e!==this[d]&&e!==B&&(this[d]=e)}}}c=b?a.b:this.lineWidth&&Ye(this.strokeColor);c||(this.b=c);c=b?a.Sb:Ye(this.fillColor);c||(this.Sb=c);c=b?a.a:"none"!==this.strokeColor&&this.lineWidth;c||(this.a=c)}pc(this)}t("H.map.SpatialStyle",ch);ch.prototype.Sb=!0;ch.prototype.b=!0;ch.prototype.a=!0;var eh="strokeColor fillColor lineWidth lineCap lineJoin miterLimit lineDash lineDashOffset lineHeadCap lineTailCap".split(" ");
ch.prototype.strokeColor="rgba(0,85,170,.6)";ch.prototype.strokeColor=ch.prototype.strokeColor;ch.prototype.fillColor="rgba(0,85,170,.4)";ch.prototype.fillColor=ch.prototype.fillColor;ch.prototype.lineWidth=2;ch.prototype.lineWidth=ch.prototype.lineWidth;ch.prototype.lineCap="round";ch.prototype.lineCap=ch.prototype.lineCap;ch.prototype.lineJoin="miter";ch.prototype.lineJoin=ch.prototype.lineJoin;ch.prototype.miterLimit=1;ch.prototype.miterLimit=ch.prototype.miterLimit;ch.prototype.ro=gf;
ch.prototype.lineDash=ch.prototype.ro;ch.prototype.lineDashOffset=0;ch.prototype.lineDashOffset=ch.prototype.lineDashOffset;ch.prototype.so=B;ch.prototype.lineHeadCap=ch.prototype.so;ch.prototype.to=B;ch.prototype.lineTailCap=ch.prototype.to;var dh=eh.length;ch.prototype.oa=function(a){var b=this===a;if(!b&&a){for(b=0;b<dh;b++){var c=eh[b];if(this[c]!==a[c])break}b=b===dh}return b};ch.prototype.equals=ch.prototype.oa;ch.prototype.Wj=function(a){if(a){var b={};Xa(b,this,a)}else b=this;return new ch(b)};
ch.prototype.getCopy=ch.prototype.Wj;
var gh=pc({}),fh=[function(a){return a?oc(a):gh},function(a){return a?oc(a):gh},function(a){return 0<=a&&100>=a?+a:gh},function(a){a=oc(a);return"butt"===a||"square"===a||"round"===a||"arrow-head"===a||"arrow-tail"===a?a:gh},function(a){return"round"===a||"bevel"===a||"miter"===a?a:gh},function(a){return 0<a&&100>=a?+a:gh},function(a){return a&&a.every&&a.every(Ec)?a:gh},function(a){return E(+a)?gh:+a},function(a){return uc(a)?fh[3](a):B},function(a){return uc(a)?fh[3](a):B}];ch.MAX_LINE_WIDTH=100;
var hh=new ch;ch.DEFAULT_STYLE=hh;var ih="fillColor strokeColor lineWidth lineCap lineJoin miterLimit lineDashOffset lineDash lineTailCap lineHeadCap".split(" ");ch.prototype.X=function(){for(var a={},b=ih.length,c;b--;)c=ih[b],a[c]=this[c];return a};ch.prototype.forWorkerMessage=ch.prototype.X;function jh(a){var b;if(a){var c=C(a,jh);for(b in a)if(b in this){var d=a[b];d!==this[b]&&("fillColor"===b||0<(d=+d))&&(this[b]=d)}a=c?a.Sb:!!(Ye(this.fillColor)&&this.width&&this.width);a||(this.Sb=a)}pc(this)}t("H.map.ArrowStyle",jh);jh.prototype.Sb=!0;jh.prototype.fillColor="rgba(255,255,255,.75)";jh.prototype.width=1.2;jh.prototype.length=1.6;jh.prototype.frequency=5;jh.prototype.Vj=function(){return new jh(this)};
jh.prototype.oa=function(a){var b=this===a;!b&&a&&(b=a.width===this.width&&a.fillColor===this.fillColor&&a.length===this.length&&a.frequency===this.frequency);return b};jh.prototype.equals=jh.prototype.oa;function kh(a,b){var c;kh.l.constructor.call(this,b);b&&this.pc(b.style);a&&(this.j=!0);b&&(c=b.arrows)&&this.wl(c)}u(kh,M);t("H.map.Spatial",kh);kh.prototype.type=Yg.SPATIAL;kh.prototype.Rg=0;kh.prototype.style=hh;kh.prototype.wa=function(){return this.style};kh.prototype.getStyle=kh.prototype.wa;kh.prototype.pc=function(a){var b=!0;a?this.style=C(a,ch)?a:new ch(a):this.style?delete this.style:b=!1;b&&this.invalidate(Vg.VISUAL);return this};kh.prototype.setStyle=kh.prototype.pc;
kh.prototype.Em=function(){return this.g};kh.prototype.getArrows=kh.prototype.Em;kh.prototype.wl=function(a){var b=this.g,c=!1;!a&&b?(delete this.g,c=!0):!a||b&&b.oa(a)||(this.g=new jh(a),c=!0);c&&"none"!==this.style.strokeColor&&this.ya(1);return this};kh.prototype.setArrows=kh.prototype.wl;function lh(a,b){var c=!1,d=!1,e;if(b.length){for(c=0;c<b.length;c++)if(b[c]!==mh){d=!0;break}b=a.style;c=d?b.b||b.Sb&&a.j||(e=a.g||!1)&&b.a&&e.Sb:b.Sb}return c&&a.Bc(!0)}kh.prototype.j=!1;kh.prototype.jo=function(){return this.j};
kh.prototype.isClosed=kh.prototype.jo;kh.prototype.getGeometriesForTile=kh.prototype.be;kh.prototype.Ch=function(){return y};kh.prototype.getLabels=kh.prototype.Ch;function nh(a,b){nh.l.constructor.call(this,a,b)}u(nh,kh);t("H.map.GeoShape",nh);nh.prototype.getBoundingBox=nh.prototype.G;function oh(a,b,c,d){var e=[],f=b.length,g;for(g=0;g<f;g++){var h=b[g];h.length&&e.push(ph(a,h,c,d))}return e}function ph(a,b,c,d){var e,f=[],g=b.length,h=0;a.fa=0;for(e=e||0;h<g;)f.push(qh(a,b[h++],b[h++],e,d));c&&f.push(qh(a,b[0],b[1],e,d));return f}function qh(a,b,c,d,e){var f=a.fa;f&&180<Bd(f-c)&&(c+=0>f?-360:360);a.fa=c;return e.Vh(b,c+d)}
function rh(a,b,c){for(var d=b,e,f=a.length+b,g,h;d--;){b=a[d];g=b.length;for(e=Array(g);g--;)h=b[g],e[g]=new I(h.x+c,h.y);a[--f]=e}}var sh=new L([0,0,0,0,0,0,0,0,0]);function th(a){vc(this,th);th.l.constructor.call(this);this.pa=uh(this,a,this.constructor,0)}u(th,Xf);t("H.geo.MultiGeometry",th);th.prototype.splice=function(a,b,c){a=[a];b!==B&&a.push(b);c&&(b=uh(this,c,this.splice,2),a=a.concat(b));this.O=y;return this.pa.splice.apply(this.pa,a)};th.prototype.splice=th.prototype.splice;th.prototype.nc=function(a){var b=this.pa.length;if(!(0<=a&&a<b))throw new ke(this.nc,a,[0,b-1]);this.O=y;return this.pa.splice(a,1)[0]};th.prototype.removeAt=th.prototype.nc;
th.prototype.remove=function(a){a=this.pa.indexOf(a);if(0<=a){var b=this.pa.splice(a,1)[0];this.O=y}return b||y};th.prototype.remove=th.prototype.remove;th.prototype.bn=function(){return this.pa};th.prototype.getGeometries=th.prototype.bn;th.prototype.push=function(a){var b=uh(this,[a],this.push,0)[0];this.O&&(this.O=this.O.lc(a.G()));this.pa.push(b)};th.prototype.push=th.prototype.push;
th.prototype.G=function(){var a;if(!(a=this.O)){a=y;var b,c;if(this.pa.length)for(a=this.pa[0].G(),c=1;c<this.pa.length;c++)if(b=this.pa[c].G())a=a?a.lc(b):b}return this.O=a};th.prototype.getBoundingBox=th.prototype.G;th.prototype.O=y;function uh(a,b,c,d){var e,f=[];if(!zc(b))throw new D(c,d);for(e=0;e<b.length;e++)if(a.a(b[e]))f.push(a.b(b[e]));else throw new D(c,d);return f}th.prototype.b=function(a){return a};
th.prototype.oa=function(a){var b=this===a,c;if(!b&&(b=C(a,this.constructor))){var d=this.pa;a=a.pa;for(b=(c=d.length)===a.length;b&&c--;)b=d[c].oa(a[c])}return b};th.prototype.equals=th.prototype.oa;n=th.prototype;n.Rc=function(a){var b=this.pa,c=b.length,d,e,f=!1;if(c){a.push("(");for(d=0;d<c;d++)(e=0<d&&f)&&a.push(","),b[d].Rc(a),"EMPTY"===a[a.length-1]?a.splice(-1-e,1+e):f=!0;f?a.push(")"):a.splice(-1,1,"EMPTY")}else a.push("EMPTY");return a};
n.toString=function(){return this.Rc([this.sb.toUpperCase()," "]).join("")};n.wc=function(){for(var a=[],b=this.pa,c=b.length;c--;)a[c]=b[c].wc();return a};n.X=function(){var a=th.l.X.call(this);a.type=this.sb;return a};n.od=function(){for(var a=[],b=this.pa,c=b.length;c--;)a[c]=b[c].od();return a};function vh(a){vh.l.constructor.call(this,a)}u(vh,th);t("H.geo.MultiLineString",vh);vh.prototype.a=function(a){return C(a,L)};vh.prototype.sb="Multi"+L.prototype.sb;vh.prototype.Mb="Multi"+L.prototype.Mb;function wh(a,b){wh.l.constructor.call(this,!1,b);this.ca(a)}u(wh,nh);t("H.map.Polyline",wh);wh.prototype.G=function(){return this.a.G()};wh.prototype.getBoundingBox=wh.prototype.G;wh.prototype.a=y;wh.prototype.ca=function(a){var b=this.ca,c,d;if(C(a,vh)){var e=a.pa;if(c=e.length)for(d=0;d<c;d++)xh(e[d],b);else throw new D(b,0);}else xh(a,b);this.f=!!e;this.a=a;this.ya(Vg.SPATIAL);return this};wh.prototype.setGeometry=wh.prototype.ca;wh.prototype.ea=function(){return this.a};
wh.prototype.getGeometry=wh.prototype.ea;wh.prototype.clip=function(a){var b=this.a;return Rg(this.f?b.pa[0]:b,a)};wh.prototype.clip=wh.prototype.clip;wh.prototype.be=function(a){var b=this.a;var c,d=[];if(this.f)for(b=b.pa,c=b.length;c--;)yh(this,b[c],a,d);else yh(this,b,a,d);return d.length?d:B};wh.prototype.getGeometriesForTile=wh.prototype.be;function xh(a,b){if(!C(a,L)||2>a.af())throw new D(b,0);}
function yh(a,b,c,d){var e=Rg(b,c.dg());if(e.length&&(b=c.fg(),a=oh(a,e,!1,b),e=a.length)){var f=c.cf();b=b.w;c.x||rh(a,e,-b);c.x===(1<<c.z)-1&&rh(a,e,b);c=zh(a,f.left,f.top,f.right,f.bottom,!1);c.length&&d.push(new Ah(c))}}wh.prototype.X=function(){var a=wh.l.X.call(this),b=a.properties;a.geometry=this.ea().X();b.style=this.wa().X();b.height=0;return a};wh.prototype.forWorkerMessage=wh.prototype.X;var Bh;function Ch(a,b){if(x.URL)return(new x.URL(a,b)).toString();if(!a||!Dh(a))return a;if(!b||Dh(b))throw new TypeError("Failed to construct 'URL': Invalid base URL");Bh||(Bh=document.createElement("a"),Gc(Bh));var c=Bh;c.href=b;"/"!==a[0]?a=c.href.replace(/\/[^\/]*$/,"/")+a:((b=c.origin)||(b=c.protocol+"//"+c.host),a=b+a);return a}function Dh(a){var b=!1;"string"===typeof a&&(b=!(-1<a.search(/^(http|https|data|blob):/)||"//"===a.substr(0,2)));return b};function Eh(a,b){var c,d=arguments.length,e,f;for(c=1;c<d;c++)if((e=arguments[c])&&e!==a&&e!==g){var g=e;for(f in e){var h=e[f];a[f]!==h&&(Fh(h)?Fh(a[f])?a[f]=Eh(a[f],h):a[f]=rc(h):void 0!==h&&(a[f]=rc(h)))}}return a}t("H.util.webgl.mergeObjects",Eh);var Gh=nc();function Hh(a,b,c){var d=c[a];return b&&d in b&&0>tc.indexOf(d)?(b=b[d],++a<c.length?Hh(a,b,c):b):Gh}
var Ih=Hh.bind(null,0),Jh={polygons:1,lines:1,"pattern-lines":1,points:1,text:1,raster:1,custom_icons:1,overlays:1},Kh={data:1,draw:1,enabled:1,filter:1,properties:1},Lh=Object.keys(Kh);function Mh(a,b,c,d,e,f){var g=d[a],h=c[g];if(++a<d.length){var k=b[g]||{};for(c=Lh.length;c--;){var l=Lh[c];if("draw"!==l||!f){var m=h[l];m!==B&&(k[l]=rc(m))}}Mh(a,k,h,d,e,f)}else e?k=rc(h):(k=h,delete c[g]);b[g]=b[g]?Eh(b[g],k):k}var Nh=Mh.bind(null,0);function Oh(a,b){a in Jh&&(b[a]=1)}
function Ph(a,b,c){var d,e,f;for(d in a)if(Kh[d]){if("draw"===d){var g=a[d];for(e in g){var h=g[e];(f=h.style)?(h.style=b+f,Oh(f,c)):(delete g[e],g[b+e]=h,Oh(e,c))}}}else Ph(a[d],b,c)}
function Qh(a,b){var c={},d,e,f,g;b+="_";a=Eh({},a);if(d=a.styles)for(e in d){var h=d[e];delete d[e];d[b+e]=h;if(f=h.mix)for(Ac(f)&&(f=[f]),g=f.length;g--;)Oh(f[g],c),f[g]=b+f[g];if(g=h.base)f||(f=h.mix=[]),f.unshift(b+g),delete h.base,Oh(g,c);Oh(e,c)}else d=a.styles={};if(h=a.layers)for(e in h)f=h[e],delete h[e],(g=f.data)&&!g.layer&&(g.layer=e),h[b+e]=f,Ph(f,b,c);for(e in c)d[b+e]={base:e};return a}
function Rh(a,b){var c=a.sources,d=Object.keys(c)[0],e=Eh(c[d],{uid:b});c=a.layers;var f;a.sources={};a.sources[b]=e;for(f in c)a=c[f],a.data?a.data.source===d&&(a.data.source=b):a.data={source:b}}function Sh(a,b){var c;var d=a.textures;var e=a.fonts;for(c in d){var f=d[c];f.url&&(f.url=Ch(f.url,b))}for(c in e)if(d=e[c],zc(d))for(f=0;f<d.length;f++){var g=d[f];g.url=g.url&&Ch(g.url,b)}else g=a.fonts[c],g.url=g.url&&Ch(g.url,b)}
function Th(a,b){return"function(){return "+("feature."+a+(b||""))+";}"}function Uh(a){return Th("style."+a,void 0)}function Vh(a,b,c,d){a={base:a,blend:b,blend_order:c};d&&(a.clean_depth=!!d);return a}function Wh(a){var b={};b["translucent-"+(a?"extruded-":"")+"polygons"]={color:Uh("fillColor"),order:1,interactive:!0,extrude:a};return b}function Xh(a,b,c,d){a={data:{source:a,layer:b}};c&&(a.draw=c);d&&(a.filter=d);return a}function Fh(a){return Ea(a)&&!zc(a)};function Yh(a,b){Yh.l.constructor.call(this);if(b&&Dh(b))throw new D(Yh,1,"Base URL must be absolute");this.j=Zh.INIT;this.a=null;this.c=b}u(Yh,F);t("H.map.render.Style",Yh);Yh.prototype.load=Yh.prototype.load;Yh.prototype.getState=function(){return this.j};Yh.prototype.getState=Yh.prototype.getState;Yh.prototype.N=function(a){this.j=a};Yh.prototype.setState=Yh.prototype.N;Yh.prototype.fc=function(){return this.c};Yh.prototype.getBaseUrl=Yh.prototype.fc;Yh.prototype.yd=function(){return rc(this.a)};
Yh.prototype.getConfig=Yh.prototype.yd;Yh.prototype.Lm=function(){return this.a};Yh.prototype.getConfigReference=Yh.prototype.Lm;Yh.prototype.Nd=function(a){this.a=a};Yh.prototype.setConfig=Yh.prototype.Nd;Yh.prototype.Lb=function(a){this.a=null;this.N(Zh.ERROR);var b=$h;te(this.W,void 0!==b?String(b):void 0)?this.dispatchEvent(new ud($h,a,this)):console.error(a)};Yh.prototype.dispatchError=Yh.prototype.Lb;Yh.prototype.s=function(){Yh.l.s.call(this);this.a=null};
var $h="error",ai={pd:"change",nj:$h},Zh={ERROR:-1,INIT:0,LOADING:1,READY:2};Yh.State=Zh;function bi(a,b){bi.l.constructor.call(this,a,b);if(Ac(a))ci.test(a)&&-1===a.indexOf("import:")?(this.f=a,b||(this.m=Dh(this.f)?B:this.f)):this.g=a;else if(Ea(a))this.Nd(rc(a));else throw new D(bi,0,di);}u(bi,Yh);t("H.map.render.webgl.Style",bi);
bi.prototype.load=function(){var a=this,b=this.fc();this.f?(this.N(Zh.LOADING),(new sf("text/plain",this.f)).then(function(c){var d={};return ei(c,b,!1,(d[b]=!0,d))}).then(function(c){return a.Nd(c)},function(c){return a.Lb(c.message)}),this.f=null):this.g&&(this.N(Zh.LOADING),ei(this.g,b).then(function(c){return a.Nd(c)},function(c){return a.Lb(c.message)}),this.g=null)};
bi.prototype.Cl=function(a,b,c){var d;fi(this);a=gi(this,a,this.Cl,c);for(c=0;c<a.length;c++){var e=a[c].jb.draw;for(d in e){var f=e[d];Fh(f)&&(f.interactive=!!b)}}hi(this)};bi.prototype.setInteractive=bi.prototype.Cl;
bi.prototype.setProperty=function(a,b,c){var d,e=a.split("."),f=0,g=e.length;fi(this);if(!uc(b))throw new D(this.setProperty,1,"value");if(d=ii(this.a,e)){if(!(d.parent instanceof Object)||d.parent instanceof Array)if(c)e.pop(),e=ii(this.a,e),d.parent=e.parent[e.yg]={};else throw new D(this.setProperty,0,a+" property is not primitive type");d.parent[d.yg]=b}else{for(d=this.a;f!==g-1;)d[e[f]]={},d=d[e[f++]];d[e[f]]=b}ji(this)&&hi(this)};bi.prototype.setProperty=bi.prototype.setProperty;
bi.prototype.Hh=function(a){fi(this);return(a=ii(this.a,a.split(".")))?rc(a.node):void 0};bi.prototype.getProperty=bi.prototype.Hh;bi.prototype.removeProperty=function(a){fi(this);(a=ii(this.a,a.split(".")))&&a.parent&&a.parent.hasOwnProperty(a.yg)&&(delete a.parent[a.yg],ji(this)&&hi(this))};bi.prototype.removeProperty=bi.prototype.removeProperty;
bi.prototype.Qe=function(a,b,c){var d;fi(this);var e=this.a;var f=e.layers;var g=gi(this,a,this.Qe,!1);a=g.length;for(d={};a--;)Nh(d,f,g[a].id,!!b,!!c);c={};g=Object.keys(e);for(a=g.length;a--;){var h=g[a];var k=e[h];c[h]=k===f?d:rc(k)}b||hi(this);return c};bi.prototype.extractConfig=bi.prototype.Qe;bi.prototype.hf=function(a){fi(this);if(!Ea(a))throw new D(this.hf,0,"config");this.Nd(Eh(this.a,a))};bi.prototype.mergeConfig=bi.prototype.hf;bi.prototype.b=ba(2);
bi.prototype.toString=function(){return this.getState()===Zh.READY?x.H.gl.yaml.safeDump(this.a,{lineWidth:120}):""};bi.prototype.s=function(){bi.l.s.call(this);this.g=this.f=null};function ji(a){var b=a.a,c;if(Ea(b)){var d;if(d=a.i){b=b&&b.sources;d=!1;for(var e in b)if(b[e].type===a.i){d=!0;break}d=!(b?d:1)}d&&(c="invalid source, the only valid type is "+a.i)}else c=di;c&&a.Lb(c);return!c}function hi(a){a.dispatchEvent(new sd("change",a))}
function fi(a){if(a.getState()!==Zh.READY)throw new Yc(a.hf,"style is not ready yet");}function gi(a,b,c,d){var e=[],f=zc(b)?b:[b],g,h;void 0===d&&(d=!0);for(f=f.sort().reverse();g=f.pop();){b=String(g).split(".");a:{var k=a.a;for(var l=b.length;l--&&!Kh[b[l]];);if(k&&0>l&&(k=Ih(k.layers,b),Fh(k)))break a;k=Gh}if(k===Gh)throw new D(c,0,'Unresolvable layer ID "'+g+'"');e.push({id:b,jb:k});if(d)for(h in k)!Kh[h]&&Fh(k[h])&&f.push(g+"."+h)}return e}
function ii(a,b){var c=0,d;for(d=b.length;c!==d;){var e=b[c++];var f=a;a=f[e];if(!a)break}return c===d?{node:a,parent:f,yg:e}:void 0}var ci=/^(http[s]?)?.*\.ya?ml/i,di="invalid style configuration";
function ei(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?{}:d;try{var e=x.H.gl.yaml.safeLoad(a,{json:!0})}catch(f){return Promise.reject(f)}return e&&(a=e["import"],Ac(a)&&(a=[a]),c&&b&&ki(e,b),delete e["import"],zc(a)&&a.length)?(c=a.reduce(function(f,g){var h=b?Ch(g,b):g;d[h]||(d[h]=!0,f.push((new sf("text/plain",h)).then(function(k){return ei(k,h,!0,d)})));return f},[]),Promise.all(c).then(function(f){var g={};f.forEach(function(h){return h&&Eh(g,h)});Eh(g,e);return g})):Promise.resolve(e)}
function ki(a,b){function c(g){g.url&&(g.url=Ch(g.url,b))}var d=a&&a.fonts;if(d)for(var e in d)zc(d[e])?d[e].forEach(c):c(d[e]);if(a=a&&a.textures)for(var f in a)c(a[f])}bi.normalize=ki;bi.prototype.Nd=function(a){bi.l.Nd.call(this,a);ji(this)&&(this.N(Zh.READY),hi(this))};bi.prototype.yd=function(){return bi.l.yd.call(this)};bi.prototype.fc=function(){return this.m||bi.l.fc.call(this)};t("H.map.Style",bi);bi.State=Zh;function zh(a,b,c,d,e,f){var g,h,k=a.length,l,m;if(k)for(g=[];k--;){var p=a[k];var q=p.length;var r=0;for(l=1;l<q;l++)if(m=li(p[l-1],p[l],c,b,d,e)){var v=m[0];var w=m[1];r&&r.oa(v)?h.push(w):g.push(h=m);r=w;f&&(l=q,k=0)}}else g=a;return g}t("H.math.clipping.clipStrips",zh);
function li(a,b,c,d,e,f){var g=a.x;a=-a.y;var h=b.x;b=-b.y;c=-c;f=-f;if(g>h){if(h>e||g<d)return;var k=g;var l=a;g=h;a=b;h=k;b=l;k=1}else if(g>e||h<d)return;if(a>b){if(b>c||a<f)return;var m=1;a=-a;b=-b;l=f;f=-c;c=-l}else if(a>c||b<f)return;if(g<d){if((a+=(d-g)*(b-a)/(h-g))>c)return;g=d}if(a<f){if((g+=(f-a)*(h-g)/(b-a))>e)return;a=f}h>e&&(b=a+(e-g)*(b-a)/(h-g),h=e);b>c&&(h=g+(c-a)*(h-g)/(b-a),b=c);m&&(a=-a,b=-b);return k?[new I(h,-b),new I(g,-a)]:[new I(g,-a),new I(h,-b)]}
function mi(a,b,c){a=ni(a,!0);b=ni(b,!1);var d,e;var f={};var g=d=1;switch(~~(c||0)){case 1:g=d=0;break;case 2:d=0;g=1;break;case 3:d=1,g=0}c=d;var h=g;if(b&&a){b.Sf=oi(b.x,b.y,null,pi(b));a.Sf=oi(a.x,a.y,null,pi(a));for(g=b;g.next;g=g.next)if(!g.bb)for(d=a;d.next;d=d.next)if(!d.bb){var k=qi(g.next);var l=qi(d.next);if(e=ri(g,k,d,l,f)){e=f.gm;var m=f.hm;var p=f.tp;var q=f.up;e=oi(p,q,null,null,null,null,!0,0,0,e);si(e,g,k);k=oi(p,q,null,null,null,null,!0,0,0,m);si(k,d,l);e.pi=k;k.pi=e}}f=de(b,ti(a));
c&&(f=!f);for(g=b;g;g=g.next)g.bb&&(g.rh=f,f=!f);f=de(a,ti(b));h&&(f=!f);for(d=a;d.next;d=d.next)d.bb&&(d.rh=f,f=!f);ui(b);for(ui(a);(a=vi(b))!=b;){for(c=null;!a.Pg;a=a.pi){for(f=a.rh;;){c=oi(a.x,a.y,c);c.artificial=a.bb||a.io;a.Pg=1;a=f?a.next:a.Ub;if(!a)break;if(a.bb){a.Pg=1;break}}if(!a)break}c.ri=r;var r=c}return r}}t("H.math.clipping.clipPolygon",mi);
function oi(a,b,c,d,e,f,g,h,k,l){a={x:a,y:b,next:c||null,Ub:d||null,ri:e||null,pi:f||null,bb:!!g,rh:h||0,Pg:k||0,alpha:l||0};d&&(a.Ub.next=a);c&&(a.next.Ub=a);return a}function qi(a){for(;a&&a.bb;)a=a.next;return a}function pi(a){if(a)for(;a.next;)a=a.next;return a}function vi(a){var b=a;if(b){do b=b.next;while(b!=a&&(!b.bb||b.bb&&b.Pg))}return b}function ui(a){var b=pi(a);b.Ub.next=a;a.Ub=b.Ub}
function ri(a,b,c,d,e,f){var g,h=b.x-a.x,k=b.y-a.y;var l=d.x-c.x;var m=d.y-c.y;var p=h*m-k*l;if(!p)return 0;l=((c.x-a.x)*m-(c.y-a.y)*l)/p;p=(k*(c.x-a.x)-h*(c.y-a.y))/p;if(0>l||1<l||0>p||1<p)return 0;0===l?g=a:1===l?g=b:0===p?g=c:1===p&&(g=d);if(g&&!f)return g.x+=2.480549651603763E-5,g.y+=7.321997314118067E-5,g.Sf&&(g.Sf.x=g.x,g.Sf.y=g.y),ri(a,b,c,d,e);e.tp=a.x+l*h;e.up=a.y+l*k;e.gm=l;e.hm=p;return 1}function ti(a){for(var b=[];a;)b.push(a.x,a.y),a=a.next;return b}
function si(a,b,c){for(b=b.next;b!==c&&b.alpha<=a.alpha;)b=b.next;a.next=b;a.Ub=b.Ub;a.next.Ub=a;a.Ub.next=a}function ni(a,b){for(var c,d=null,e=0,f=a.length;e<f;e++){c=oi(a[e].x,a[e].y,d);c.io=b;if(c.next=d)d.Ub=c;d=c}return d};function O(a,b){var c;O.l.constructor.call(this);C(a,L,O,0);if(b!==B&&zc(b,O,1)){for(c=0;c<b.length;c++)C(b[c],L,O,1,"index "+c);this.Qa=b}else this.Qa=[];this.gb=a;this.a=[]}u(O,Xf);t("H.geo.Polygon",O);function wi(a){var b=O,c=L,d=a.la,e=a.ba,f=a.na,g=a.ia;e=[d,e,B,d,g,B,f,g,B,f,e,B];180<=a.Eb()&&(e.splice(9,0,f,a=a.hb().lng,B),e.splice(3,0,d,a,B));return new b(new c(e))}O.fromRect=wi;var xi={NORTH:90,SOUTH:-90};O.Direction=xi;O.prototype.Ed=xi.NORTH;
O.prototype.Dl=function(a){this.Ed!==a&&(this.O=y,this.a.length=0,this.Ed=a);return this};O.prototype.setPoleCovering=O.prototype.Dl;O.prototype.An=function(){return this.Ed};O.prototype.getPoleCovering=O.prototype.An;O.prototype.Wm=function(){return this.gb};O.prototype.getExterior=O.prototype.Wm;O.prototype.Al=function(a){if(!C(a,L))throw new D(this.Al,0,a);this.gb=a;this.O=y};O.prototype.setExterior=O.prototype.Al;O.prototype.gn=function(){return this.Qa};O.prototype.getInteriors=O.prototype.gn;
O.prototype.Og=function(a,b,c){var d=arguments.length,e;for(e=2;e<d;e++)C(arguments[e],L,this.Og,e);var f=this.Qa.splice.apply(this.Qa,arguments);for(e=2;e<d;e++)arguments[e]=B;this.a.splice.apply(this.a,arguments);return f};O.prototype.spliceInteriors=O.prototype.Og;O.prototype.Wo=function(a){return this.Og(a,1)[0]};O.prototype.removeInteriorAt=O.prototype.Wo;O.prototype.Vo=function(a){a=this.Qa.indexOf(a);return 0>a?B:this.Og(a,1)[0]};O.prototype.removeInterior=O.prototype.Vo;
O.prototype.il=function(a){if(!C(a,L))throw new D(this.il,0,a);this.Qa.push(a)};O.prototype.pushInterior=O.prototype.il;O.prototype.G=function(){var a=this.O;a||(this.O=a=yi(this.gb,this.Ed));return a};O.prototype.getBoundingBox=O.prototype.G;n=O.prototype;n.Uj=function(a){var b=this.Qa.length;if(0>a||a>=b)throw new ke(this.Uj,a,[0,b-1]);(b=this.a[a])||(this.a[a]=b=yi(this.Qa[a],this.Ed));return b};n.gb=y;n.Qa=[];
function yi(a,b){var c,d,e;if(e=a.G())(c=a.zh(!0))&&(d=a.af())&&(e=e.lc(fg([a.Re(0),a.Re(d-1)],!0),!0)),360===e.Eb()&&1===c%2&&(e=e.jd(b,0));return e}n.sb="Polygon";n.Rc=function(a){var b=this.Qa,c=b.length,d;if(this.gb.af()){a.push("(");this.gb.Rc(a,!0);for(d=0;d<c;d++)b[d].af()&&(a.push(","),b[d].Rc(a,!0));a.push(")")}else a.push("EMPTY");return a};n.Mb="Polygon";
n.od=function(){var a,b=[],c=this.Qa,d=this.gb.od();d[0].toString()!==d[d.length-1].toString()&&d.push(d[0]);b.push(d);for(a=0;a<c.length;a++)d=c[a].od(),d[0].toString()!==d[d.length-1].toString()&&d.push(d[0]),b.push(d);return b};n.X=function(){var a=O.l.X.call(this);this.G().Fb()&&(a.type="Multi"+a.type);return a};n.wc=function(){var a=[],b=this.Qa,c=b.length;for(a.push(this.gb.wc());c--;)a[c+1]=b[c].wc();return this.G().Fb()?[a]:a};
n.oa=function(a){var b=!1;if(C(a,O)){var c=a.Qa,d=this.Qa.length;b=c.length;var e=0;for(b=this.gb.oa(a.gb)&&d===b;b&&e<d;)b=b&&this.Qa[e].oa(c[e]),e++}return b};function Ai(a,b,c,d){d=void 0===d?!0:d;var e=a.Qa,f=Bi.bind(null,b,c);return ce(b,c,a.gb.Y,0,!0,3)!==be.NONE?d?!e.some(f):!0:!1}function Bi(a,b,c){return ce(a,b,c.Y,0,!0,3)===be.SURFACE}
function Ci(a,b){b=b.Y;a=a.gb.Y;var c,d,e=b.length-3,f=a.length-3,g={};for(c=0;c<e;c+=3){var h=b[c];var k=b[c+1];var l=b[c+3];var m=b[c+4];for(d=0;d<f;d+=3){var p=a[d];var q=a[d+1];var r=a[d+3];var v=a[d+4];if(ri({x:k,y:h},{x:m,y:l},{x:q,y:p},{x:v,y:r},g,!0))return!0}}return!1}
function Di(a,b){var c=b.gb,d=b.Qa,e=d.length,f=c.Y,g=f.length,h=a.gb.Y,k=h.length;if(Ci(a,c))return!0;for(c=0;c<g;c+=3)if(Ai(a,f[c],f[c+1]))return!0;for(c=0;c<k;c+=3)if(Ai(b,h[c],h[c+1]))return!0;for(c=0;c<e;c++)if(Ci(a,d[c]))return!0;return!1};function Ei(a){Ei.l.constructor.call(this,a)}u(Ei,th);t("H.geo.MultiPolygon",Ei);Ei.prototype.a=function(a){return C(a,O)};Ei.prototype.sb="Multi"+O.prototype.sb;Ei.prototype.Mb="Multi"+O.prototype.Mb;function Ah(a,b,c){this.paths=this.a=a;b!==B&&(this.interiorsIndex=this.b=b);c!==B&&(this.outlinesIndex=this.c=c)}Ah.prototype.interiorsIndex=Ah.prototype.b=Ud;Ah.prototype.outlinesIndex=Ah.prototype.c=Ud;var mh=qc(new Ah([])),Fi=pc([]);function Gi(a,b){var c=b&&(+b.extrusion||+b.extrude),d=b&&+b.elevation,e=0;Gi.l.constructor.call(this,!0,b);0<d&&(e+=d,this.c=d);0<c&&(e+=c,this.i=c);if(e>Hi)throw new ke(Gi,e,[0,Hi]);C(a,L)?this.ca(new O(a)):this.ca(a)}u(Gi,nh);t("H.map.Polygon",Gi);Gi.prototype.i=0;Gi.prototype.c=0;Gi.prototype.a=y;var Hi=2047;Gi.MAX_EXTRUDE_HEIGHT=Hi;Gi.prototype.Mi=function(a){var b=+a;if(b!==a)throw new D(this.Mi,0,a);if(0>b||this.c+b>Hi)throw new ke(this.Mi,this.c+b,[0,Hi]);this.i=b;this.ya(Vg.SPATIAL)};
Gi.prototype.setExtrusion=Gi.prototype.Mi;Gi.prototype.Xm=function(){return this.i};Gi.prototype.getExtrusion=Gi.prototype.Xm;Gi.prototype.Li=function(a){var b=+a;if(b!==a)throw new D(this.Li,0,a);if(0>b||this.i+b>Hi)throw new ke(this.Li,this.i+b,[0,Hi]);this.c=b;this.ya(Vg.SPATIAL)};Gi.prototype.setElevation=Gi.prototype.Li;Gi.prototype.Um=function(){return this.c};Gi.prototype.getElevation=Gi.prototype.Um;Gi.prototype.ea=function(){return this.a};Gi.prototype.getGeometry=Gi.prototype.ea;
Gi.prototype.ca=function(a){if(a===y||C(a,O))var b=!1;else C(a,Ei,this.ca,0),b=!0;this.f=b;b=this.a;this.a=a;b!==y&&this.ya(Vg.SPATIAL);return this};Gi.prototype.setGeometry=Gi.prototype.ca;Gi.prototype.G=function(){return this.ea().G()};Gi.prototype.getBoundingBox=Gi.prototype.G;
Gi.prototype.be=function(a){var b,c=this.ea(),d,e;if(this.f){c=c.pa;var f=0;for(e=c.length;f<e;f++)if(d=Ii(this,c[f],a,c[f].Ed))b||(b=[]),b.push(d)}else d=this.Fa,d===B&&(d=this.f?xi.NORTH:this.ea().Ed),(d=Ii(this,c,a,d))&&(b=[d]);return b};Gi.prototype.getGeometriesForTile=Gi.prototype.be;
function Ii(a,b,c,d){var e,f,g=0,h=!0;if(e=Ji(a,b.gb,c,d,b.G())){var k=new Ah(e);var l=b.Qa;if(f=l.length)for(k.b=k.a.length;g<f;g++)if(e=Ji(a,l[g],c,d,b.Uj(g)))k.a=k.a.concat(e);f=k.a.length;for(g=0;g<f;g++)if(k.a[g]!==Fi){h=!1;break}h&&(k=g%2?mh:B)}return k}
function Ji(a,b,c,d,e){var f=c.cf(),g=e,h=g.Eb();var k=[[]];var l=b.Y;var m=[],p=l.length,q,r=!1;for(q=0;q<p;q+=3){var v=l[q];var w=l[q+1];r||180!=Bd(w)||(m.push(v),m.push(w),m.push(v),m.push(-w),r=!0);m.push(v);m.push(w)}l=m;360>h&&-180==g.ba&&(g=new K(g.la,180,g.na,g.ia));360>h&&180==g.ia&&(g=new K(g.la,g.ba,g.na,-180));if(g.Fb()){h=l;v=h.length;l=-1;for(m=0;m<v-2;m+=2)if(Vf(h[m+1],h[m+3])){l=m+2;break}-1===l&&Vf(h[v-1],h[1])&&(l=v);-1!==l&&(p=h[l-2],m=h[l-1],q=h[l%v],r=h[(l+1)%v],180!==Bd(p)&&
180!==Bd(q)&&(w=Bd(q-p),v=Bd(r-m),v+=180<v?-360:0,r=Bd(180-r),r+=180<r?-360:0,v&&r&&(w/=Bd(v)/Bd(r),p=q+(q>p?-w:w),m=0<m?180:-180,h.splice(l,0,p,m,p,-m))));l=h}k[0]=Ki([].concat(l),g.ba);360>g.Eb()&&g.sd(new Yf(g.la,180))&&(l=Ki([].concat(l),g.ia),k.push(l));g=c.fg();a=oh(a,k,!0,g);if(360===e.Eb()&&1===b.zh(!0)%2){b=a;a=c.cf();b[0][1].x>b[0][b[0].length-1].x&&(b[0]=b[0].reverse());l=[];h=b[0].length-1;for(k=0;k<h;k++)m=b[0][k],l[k]=new I(m.x-2*g.w,m.y),l[k+h]=new I(m.x-g.w,m.y),l[k+2*h]=new I(m.x,
m.y),l[k+3*h]=new I(m.x+g.w,m.y),l[k+4*h]=new I(m.x+2*g.w,m.y);b[0]=l;k=g.Vh(d,0);k.y=2*a[d===xi.NORTH?"top":"bottom"];d=k.clone();k.x=b[0][b[0].length-1].x+1;d.x=b[0][0].x-1;b[0].push(k,d);a=b}d=f.left;b=f.top;k=f.right;f=f.bottom;if(zh(a,d,b,k,f,!0).length){if(!c.dg().jh(e)){c=a;e=[new I(d,b),new I(k,b),new I(k,f),new I(d,f)];f=[];for(a=c.length;a--;)if(d=mi(e,c[a]))for(b=Li(d),f.push(b);d.ri;)d=d.ri,b=Li(d),f.push(b);a=f}}else c=Mi(d,b,a[0]),a[1]&&(c^=Mi(d,b,a[1])),a=c?[Fi]:B;return a}
function Mi(a,b,c){var d,e,f;var g=d=c[0].x;var h=e=c[0].y;var k=1;for(f=c.length;k<f;k++){var l=c[k].x;var m=c[k].y;l>d?d=l:l<g&&(g=l);m>e?e=m:m<h&&(h=m)}return g<=a&&a<=d&&h<=b&&b<=e&&de({x:a,y:b},ee(c.concat(c[0])))}function Li(a){var b=[],c=a;do{var d=yd(100*(c.Oo?c.Oo:c.x))/100;var e=yd(100*(c.Po?c.Po:c.y))/100;if(!f||.01<Dd(Ed(f.x-d,2)+Ed(f.y-e,2))){var f=new I(d,e);b.push(f)}c=c.next}while(c&&c!==a);return b}Gi.prototype.T=y;
function Ki(a,b){var c,d=Number.POSITIVE_INFINITY,e=-1,f=a.length;for(c=0;c<f;c+=2){var g=Bd(a[c+1]-b);g+=180<g?360-g:g;g<d&&(d=g,e=c)}return 0<c?(b=a.splice(e,a.length-e),b.concat(a)):a}
Gi.prototype.X=function(){var a=Gi.l.X.call(this),b=this.ea(),c=this.f?b.pa:[b],d,e=a.properties;var f=a.geometry=b.X();e.style=this.wa().X();e.height=this.i+this.c;e.min_height=this.c;if(this.G().Fb()&&(f.type="MultiPolygon",this.f)){var g=[];c.forEach(function(h,k){d=f.coordinates[k];h.G().Fb()?g=g.concat(d):g.push(d)});f.coordinates=g}return a};Gi.prototype.forWorkerMessage=Gi.prototype.X;function Ni(a,b,c){Ni.l.constructor.call(this,sh,c);this.Jg(a);this.Vi(b);c&&"precision"in c&&this.Ti(c.precision)}u(Ni,Gi);t("H.map.Circle",Ni);Ni.prototype.Jg=function(a){(a=$f(a)).oa(this.b)||(this.b=a,Oi(this))};Ni.prototype.setCenter=Ni.prototype.Jg;Ni.prototype.hb=function(){return this.b};Ni.prototype.getCenter=Ni.prototype.hb;Ni.prototype.Vi=function(a){if(E(a=Zd(a,0,6371000.79*Nd/2)))throw new D(this.Vi,0,a);this.sa!==a&&(this.sa=a,Oi(this))};Ni.prototype.setRadius=Ni.prototype.Vi;
Ni.prototype.Fn=function(){return this.sa};Ni.prototype.getRadius=Ni.prototype.Fn;Ni.prototype.L=60;Ni.prototype.Ti=function(a){if(!Dc(a))throw new D(this.Ti,0,a);this.L!==(a=Zd(yd(a),4,360))&&(this.L=a,Oi(this))};Ni.prototype.setPrecision=Ni.prototype.Ti;Ni.prototype.Cn=function(){return this.L};Ni.prototype.getPrecision=Ni.prototype.Cn;Ni.prototype.ca=function(){return this};Ni.prototype.setGeometry=Ni.prototype.ca;Ni.prototype.ea=function(){this.a||Ni.l.ca.call(this,Pi(this));return this.a};
Ni.prototype.getGeometry=Ni.prototype.ea;function Oi(a){a.a!==y&&Ni.l.ca.call(a,Pi(a))}function Pi(a){var b=a.b,c=b.lat,d=a.sa,e=0,f=new L;if(90===Bd(c))for(c=b.Qg(0,d,!0).lat;360>e;e+=120)f.Fi(c,e-180,B);else for(a=a.L,a=360/a;360>e;e+=a)f.Hd(b.Qg(e,d,!0));b=new O(f);0>c&&b.Dl(xi.SOUTH);return b};function Qi(a,b){if(!C(a,Element)){Ri.innerHTML=a;a=Ri.firstElementChild;if(!a)throw new D(Qi,0,"No element data");Ri.removeChild(a);var c=!0;Ri.innerHTML=""}this.a=0!==jf(a).length;this.c=c?a:kf(a,x.document,this.a);b&&(c="onAttach",c in b&&xc(a=b[c],"Function",Qi,1,c)&&(this.si=a),c="onDetach",c in b&&xc(a=b[c],"Function",Qi,1,c)&&(this.b=a))}t("H.map.DomIcon",Qi);var Ri=document.createElement("DIV");Qi.prototype.si=null;Qi.prototype.b=null;Qi.prototype.Vj=function(a){return kf(this.c,a,this.a)};
Qi.prototype.a=!1;function Si(a){Si.l.constructor.call(this,a)}u(Si,th);t("H.geo.MultiPoint",Si);Si.prototype.a=function(a){return Zf(a)};Si.prototype.b=function(a){return C(a,Yf)?a:$f(a)};Si.prototype.sb="Multi"+Yf.prototype.sb;Si.prototype.Mb="Multi"+Yf.prototype.Mb;function Ti(a,b){this.w=+a;this.h=+b}t("H.math.Size",Ti);function Ui(a,b){var c;var d=a;var e=b||[];if(a!==Vi.NONE){b=c=e.length;if(-1===this.b.indexOf(d))throw new D(Ui,0,a);if(!e)throw new D(Ui,1,e);for(;c--;)if(E(e[c]))throw new D(Ui,1,e);d===Vi.RECT&&3<b&&(e=[e[0],e[1],e[2],e[1],e[2],e[3],e[0],e[3]],d=Vi.POLYGON);if(d===Vi.CIRCLE&&2<b&&(a=e[2],0<a)){d=e[0];var f=e[1];c=wd(2*Ad(a),40);var g=360/c;for(e=[];c--;){var h=g*c*Sd;e.push(d+Gd(h)*a,f+Id(h)*a)}d=Vi.POLYGON}if(d!==Vi.POLYGON||!b||e.length%2)throw new D(Ui,1,e);this.a=e}}
t("H.map.HitArea",Ui);var Vi={NONE:0,RECT:1,CIRCLE:2,POLYGON:3};Ui.ShapeType=Vi;Ui.prototype.b=[Vi.RECT,Vi.CIRCLE,Vi.POLYGON];Ui.prototype.jg=function(a,b,c){return this.a?ce(a,b,this.a,c,!0):be.NONE};Ui.prototype.hitTest=Ui.prototype.jg;function Wi(a,b){var c;vc(this,Wi);Wi.l.constructor.call(this,b);this.ca(a);b&&"icon"in b&&(c=b.icon);this.Nc(c||Xi(this))}u(Wi,M);t("H.map.AbstractMarker",Wi);Wi.prototype.ea=function(){return this.a};Wi.prototype.getGeometry=Wi.prototype.ea;Wi.prototype.ca=function(a){var b=this.a;C(a,Yf)||C(a,Si)?this.a=a:(Zf(a,this.ca,0),this.a=$f(a));b&&this.ya(Vg.SPATIAL);return this};Wi.prototype.setGeometry=Wi.prototype.ca;Wi.prototype.G=function(){return this.a.G()};Wi.prototype.Bb=function(){return this.icon};
Wi.prototype.getIcon=Wi.prototype.Bb;Wi.prototype.Nc=function(a){var b=this.icon,c=!b;if(b!==a){if(!this.xk(a)){if(c)throw new D(this.constructor,1,a);throw new D(this.Nc,0,a);}this.icon=a;c||this.ya(Vg.VISUAL)}return this};Wi.prototype.setIcon=Wi.prototype.Nc;function Xi(a){var b=a.c;b||(b=a.constructor.prototype.c=a.b(Yi));return b}
var Yi={svg:'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="47" viewBox="0 0 38 47"><g fill="none"><path fill="#0F1621" fill-opacity=".4" d="M15 46c0 .317 1.79.574 4 .574s4-.257 4-.574c0-.317-1.79-.574-4-.574s-4 .257-4 .574z"></path><path fill="#01b6b2" d="M33.25 31.652A19.015 19.015 0 0 0 38 19.06C38 8.549 29.478 0 19 0S0 8.55 0 19.059c0 4.823 1.795 9.233 4.75 12.593L18.975 46 33.25 31.652z"></path><path fill="#6A6D74" fill-opacity=".5" d="M26.862 37.5l4.714-4.77c3.822-3.576 5.924-8.411 5.924-13.62C37.5 8.847 29.2.5 19 .5S.5 8.848.5 19.11c0 5.209 2.102 10.044 5.919 13.614l4.719 4.776h15.724zM19 0c10.493 0 19 8.525 19 19.041 0 5.507-2.348 10.454-6.079 13.932L19 46 6.079 32.973C2.348 29.495 0 24.548 0 19.04 0 8.525 8.507 0 19 0z"></path></g></svg>',size:new Ti(38,
47),anchor:new I(19,45),hitArea:new Ui(Vi.POLYGON,[19,46,2,27,0,18,5,6,19,0,32,5,38,15,36,27,19,47])};Wi.prototype.X=function(){var a=Wi.l.X.call(this),b=this.Bb(),c=b.Cb(),d=b.xd();a.geometry=this.ea().X();c&&(b=a.properties.icon={id:b.uid},b.size={w:c.w,h:c.h},b.offset=[c.w/2-(d?d.x:0),c.h/2-(d?d.y:0)]);return a};Wi.prototype.forWorkerMessage=Wi.prototype.X;function Zi(a,b){Zi.l.constructor.call(this,a,b)}u(Zi,Wi);t("H.map.DomMarker",Zi);Zi.prototype.type=Yg.DOM_MARKER;Zi.prototype.Rg=2;Zi.prototype.b=function(a){var b=new Qi(a.svg,a);a=a.anchor;b.c.style.margin=-a.y+"px 0 0 -"+a.x+"px";return b};Zi.prototype.xk=function(a){return C(a,Qi)};function $i(a,b,c,d){$i.l.constructor.call(this,a,b,c);this.modifiers=d}u($i,Wg);t("H.map.ChangeEvent",$i);var aj={SIZE:1,POSITION:2,HEADING:4,TILT:8,INCLINE:16,ZOOM:32,BOUNDS:64};$i.Type=aj;$i.prototype.bm=aj.SIZE;$i.prototype.SIZE=$i.prototype.bm;$i.prototype.uj=aj.POSITION;$i.prototype.POSITION=$i.prototype.uj;$i.prototype.oj=aj.HEADING;$i.prototype.HEADING=$i.prototype.oj;$i.prototype.wj=aj.TILT;$i.prototype.TILT=$i.prototype.wj;$i.prototype.pj=aj.INCLINE;$i.prototype.INCLINE=$i.prototype.pj;
$i.prototype.xj=aj.ZOOM;$i.prototype.ZOOM=$i.prototype.xj;$i.prototype.lj=aj.BOUNDS;$i.prototype.BOUNDS=$i.prototype.lj;function bj(){this.a=[];bj.l.constructor.call(this)}u(bj,F);t("H.util.OList",bj);function cj(a,b,c){a=a.a.length;if(c)var d=a;else if(E(d=0>(d=+b)?xd(0,a+d):wd(a,d)))throw new ke(bj,b,[0,a-1]);return d}bj.prototype.add=function(a,b){b=cj(this,b,E(b));this.a.splice(b,0,a);this.dispatchEvent(new dj(this,this.v.De,b,a,null,null))};bj.prototype.add=bj.prototype.add;function ej(a,b){var c=a.a.splice(b,1)[0];a.dispatchEvent(new dj(a,a.v.Fe,b,null,c,null));return c}
bj.prototype.nc=function(a){this.get(a);return ej(this,a)};bj.prototype.removeAt=bj.prototype.nc;bj.prototype.remove=function(a){a=this.indexOf(a);return 0<=a?(ej(this,a),!0):!1};bj.prototype.remove=bj.prototype.remove;bj.prototype.set=function(a,b){if(0!==this.a.length||0!==a){this.get(a);a=cj(this,a,!1);var c=this.a[a]}this.a[a]=b;this.dispatchEvent(new dj(this,this.v.Ge,a,b,c,null));return c};bj.prototype.set=bj.prototype.set;bj.prototype.indexOf=function(a){return this.a.indexOf(a)};
bj.prototype.indexOf=bj.prototype.indexOf;bj.prototype.get=function(a){var b=cj(this,a,!1),c=this.a;if(b>=c.length)throw new ke(this.get,a,[0,c.length-1]);return c[b]};bj.prototype.get=bj.prototype.get;bj.prototype.on=function(){return this.a.length};bj.prototype.getLength=bj.prototype.on;bj.prototype.Oa=function(){return[].concat(this.a)};bj.prototype.asArray=bj.prototype.Oa;bj.prototype.flush=function(){for(var a=this.a.length;a--;)ej(this,a)};bj.prototype.flush=bj.prototype.flush;
bj.prototype.s=function(){this.flush();bj.l.s.call(this)};bj.prototype.v={De:"add",Fe:"remove",Ge:"set",yp:"move"};function dj(a,b,c,d,e,f){dj.l.constructor.call(this,b,a);this.idx=c;this.added=d;this.removed=e;this.moved=f}u(dj,sd);var fj={};t("H.geo.mercator",fj);fj.a=function(a){return wd(1,xd(0,.5-Cd(Jd(Pd+Od*a/180))/Nd/2))};fj.b=function(a){return a/360+.5};fj.og=function(a,b,c){c?(c.x=fj.b(b),c.y=fj.a(a)):c=new I(fj.b(b),fj.a(a));return c};fj.latLngToPoint=fj.og;fj.ad=function(a,b){return fj.og(a.lat,a.lng,b)};fj.geoToPoint=fj.ad;fj.f=function(a){return 0>=a?90:1<=a?-90:Td*(2*Kd(Fd(Nd*(1-2*a)))-Od)};fj.c=function(a){return 360*(1===a?1:Xd(a,1))-180};
fj.Ta=function(a,b,c){c?(c.lat=fj.f(b),c.lng=fj.c(a)):c=new Yf(fj.f(b),fj.c(a));return c};fj.xyToGeo=fj.Ta;fj.xg=function(a,b){return fj.Ta(a.x,a.y,b)};fj.pointToGeo=fj.xg;t("H.util.constants.DEFAULT_MIN_ZOOM_LEVEL",0);t("H.util.constants.DEFAULT_MAX_ZOOM_LEVEL",22);function gj(a,b){this.projection=a||fj;this.b=0;this.a=this.exp=Cd(b||256)/Md;hj(this);this.y=this.x=0}t("H.geo.PixelProjection",gj);var ij=Bd(24)+Bd(-8);gj.prototype.fl=fj;gj.prototype.projection=gj.prototype.fl;gj.prototype.x=0;gj.prototype.x=gj.prototype.x;gj.prototype.y=0;gj.prototype.y=gj.prototype.y;gj.prototype.rp=Ed(2,ij);gj.prototype.w=gj.prototype.rp;gj.prototype.$n=Ed(2,ij);gj.prototype.h=gj.prototype.$n;
gj.prototype.Ra=function(a){if(E(a))throw new D(this.Ra,0,a);var b=this.x/this.w;var c=this.y/this.h;this.b=a;this.a=this.exp+a;hj(this);this.x=b*this.w;this.y=c*this.h};gj.prototype.rescale=gj.prototype.Ra;function hj(a){a.a>ij&&(a.a=ij);a.w=Ed(2,a.a);a.h=Ed(2,a.a)}gj.prototype.lk=function(){return this.b||0};gj.prototype.getZoomScale=gj.prototype.lk;gj.prototype.mb=function(a,b){a=this.projection.og(a.lat,a.lng,b);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};gj.prototype.geoToPixel=gj.prototype.mb;
gj.prototype.lf=function(a,b){return this.projection.Ta((a.x+this.x)/this.w,(a.y+this.y)/this.h,b)};gj.prototype.pixelToGeo=gj.prototype.lf;gj.prototype.Ta=function(a,b,c){return this.projection.Ta((a+this.x)/this.w,(b+this.y)/this.h,c)};gj.prototype.xyToGeo=gj.prototype.Ta;gj.prototype.Vh=function(a,b,c){a=this.projection.og(a,b,c);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};gj.prototype.latLngToPixel=gj.prototype.Vh;
gj.prototype.se=function(a){return new I(a.x*this.w-this.x,a.y*this.h-this.y)};gj.prototype.pointToPixel=gj.prototype.se;function jj(a){a=a||{};jj.l.constructor.call(this);this.min=0;this.max=22;this.qm=this.dark=!!a.dark;a.min&&this.Qi(a.min);a.max&&this.Oi(a.max);this.pixelProjection=new gj(a.projection,a.minWorldSize);a.provider&&(this.qa=a.provider,this.Za=A(this.Za,this),this.qa.addEventListener(P.prototype.v.Da,this.Za,!1,this),this.fb=A(this.fb,this),this.qa.addEventListener(P.prototype.v.Ee,this.fb,!1,this))}u(jj,F);t("H.map.layer.Layer",jj);jj.prototype.min=0;jj.prototype.min=jj.prototype.min;
jj.prototype.max=22;jj.prototype.max=jj.prototype.max;jj.prototype.ta=y;jj.prototype.pixelProjection=jj.prototype.ta;jj.prototype.v={Da:"update",Ee:"configchange",tj:"minchange",sj:"maxchange"};jj.prototype.ga=function(){return this.qa};jj.prototype.getProvider=jj.prototype.ga;jj.prototype.lo=function(a){return this.min<=a&&a<=this.max};jj.prototype.isValid=jj.prototype.lo;
function kj(a,b,c){var d=a[b],e="min"===b,f=e?a.Qi:a.Oi;if(c!==d)if(e?c<=a.max:c>=a.min)a[b]=c,a.Za(),a.fb(),a.dispatchEvent(new Wg(e?a.v.tj:a.v.sj,c,d));else throw new D(f,0,"Invalid condition min <= max");return a}jj.prototype.Qi=function(a){return kj(this,"min",+a)};jj.prototype.setMin=jj.prototype.Qi;jj.prototype.Oi=function(a){return kj(this,"max",+a)};jj.prototype.setMax=jj.prototype.Oi;jj.prototype.Za=function(){this.dispatchEvent(this.v.Da)};jj.prototype.fb=function(){this.dispatchEvent(this.v.Ee)};
jj.prototype.s=function(){jj.l.s.call(this)};jj.prototype.va=function(){return null};jj.prototype.getCopyrights=jj.prototype.va;function lj(a){var b;lj.l.constructor.call(this);this.dispatchEvent=A(this.dispatchEvent,this);if(a){var c=a.length;for(b=0;b<c;b++)this.add(a[b])}}u(lj,bj);t("H.map.DataModel",lj);function mj(a,b){var c=b.getProvider&&b.getProvider();c&&(nj[c.uid]=c);b.ka(a)}function oj(a){var b=a.getProvider&&a.getProvider();b&&delete nj[b.uid];a.ka(null)}lj.prototype.add=function(a,b){C(a,jj,this.add,0);mj(this,a);lj.l.add.call(this,a,b)};lj.prototype.add=lj.prototype.add;
lj.prototype.set=function(a,b){C(b,jj,this.set,0);mj(this,b);(a=lj.l.set.call(this,a,b))&&oj(a);return a};lj.prototype.set=lj.prototype.set;lj.prototype.nc=function(a){var b;(b=lj.l.nc.call(this,a))&&oj(b);return b};lj.prototype.removeAt=lj.prototype.nc;lj.prototype.remove=function(a){var b;(b=lj.l.remove.call(this,a))&&oj(a);return b};lj.prototype.remove=lj.prototype.remove;lj.prototype.flush=function(){for(var a=this.a.length;a--;)this.nc(a);lj.l.flush.call(this)};lj.prototype.flush=lj.prototype.flush;
var nj={};Gc(nj);function pj(a,b,c){if(a=nj[a])return C(a[b],Function,pj,1,"invalid method"),a[b].apply(a,c)}lj.invoke=pj;function qj(a,b){Da(a)&&(this.j=a);Dc(b)&&(this.b=b)}t("H.util.Request",qj);qj.State={PENDING:0,PROCESSING:1,COMPLETE:2,CANCELLED:3,ERROR:4};var rj=[0,1,2,3,4];qj.prototype.a=0;qj.prototype.getState=function(){return this.a};qj.prototype.getState=qj.prototype.getState;qj.prototype.N=function(a){if(0>rj.indexOf(a))throw new D(this.N,0,a);if(this.a!==a||1===a&&1<this.b)this.a=a,this.j&&this.j(this)};qj.prototype.b=1;qj.prototype.Sn=function(){return this.b};qj.prototype.getTotal=qj.prototype.Sn;
qj.prototype.c=0;qj.prototype.Dn=function(){return this.c};qj.prototype.getProcessed=qj.prototype.Dn;qj.prototype.i=0;qj.prototype.Ym=function(){return this.i};qj.prototype.getFailed=qj.prototype.Ym;function sj(a,b){a.c<a.b&&(uc(b)||(b=2),0===b||1===b||0!==a.a&&1!==a.a||(a.c++,2!==b&&a.i++,a.N(a.c<a.b?1:2)))}qj.prototype.Ke=function(){};qj.prototype.cancel=function(){3!==this.a&&(this.Ke(),this.N(3))};qj.prototype.cancel=qj.prototype.cancel;function tj(){}t("H.util.ICapturable",tj);tj.prototype.capture=function(){};tj.prototype.capture=tj.prototype.capture;t("H.util.Disposable",od);od.prototype.yb=od.prototype.yb;od.prototype.addOnDisposeCallback=od.prototype.yb;t("H.util.dispose",rd);od.prototype.C=od.prototype.C;od.prototype.dispose=od.prototype.C;od.prototype.s=od.prototype.s;function uj(a,b){var c=a.K(),d=c.ownerDocument;uj.l.constructor.call(this);this.a=a;this.P=c=c.appendChild(vj(d,"DIV","position:absolute;bottom:0;right:0;left:0px;z-index:1;direction:ltr;pointer-events:none;height:40px-webkit-touch-callout: none;-webkit-user-select:none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select:none;",null,"H_imprint"));this.Lf=vj(d,"DIV","margin: 0 0 "+wj+"px "+wj+"px;display:inline-block;",xj,"H_logo");c.appendChild(this.Lf);c=c.appendChild(vj(d,
"DIV","right:0;bottom:0;position:absolute;background-color:rgba(255,255,255,.8);color:#0F1621;padding:2px 16px",null,"H_copyright"));this.g=c.appendChild(vj(d,"A","color:inherit; margin:0px 8px; text-decoration:none; pointer-events:all;","Terms of use"));this.g.target="_blank";this.f=c.appendChild(vj(d,"SPAN","margin:0px 8px"));this.j=Va(yj);this.Ri(b);this.c=A(this.c,this);this.b=A(this.b,this);this.a.addEventListener(this.a.v.rj,this.c);this.a.a.addEventListener("add",this.b);this.a.a.addEventListener("remove",
this.b);this.a.a.addEventListener("set",this.b);this.b()}var zj;u(uj,od);t("H.map.Imprint",uj);var wj=16,yj={font:'11px "Lucida Grande", Arial, Helvetica, sans-serif',href:"https://legal.here.com/{LN}/terms/serviceterms/{CN}",invert:!1,reportHref:"https://wego.here.com/",locale:"en-US"};
uj.prototype.Ri=function(a){var b,c=this.Lf.firstChild.firstChild.childNodes;a||(this.j=Va(yj));var d=this.j;for(b in d)a&&b in a&&(d[b]=a[b]);a=(this.Rh=a=d.invert)?Aj:Bj;c[0].style.fill=a.Il;c[0].style.fillOpacity=a.Jl;c[1].style.fill=a.Nl;c[1].style.fillOpacity=a.Ol;a=d.locale;Cj[a]||(a="en-US",d.locale=a);this.g.innerHTML=Cj[a];a=a.split("-");this.g.href=d.href.replace("{LN}",a[0]).replace("{CN}",a[1].toLowerCase());this.P.style.font=d.font};uj.prototype.setOptions=uj.prototype.Ri;
function vj(a,b,c,d,e){a=a.createElement(b);c&&(a.style.cssText=c);d&&(a.innerHTML=d);e&&(a.className=e);return a}uj.prototype.K=function(){return this.P};uj.prototype.c=function(){this.f.innerHTML=this.i+" "+this.va()};uj.prototype.b=function(){this.c();setTimeout(this.c,5E3)};
var xj='<svg height="40" viewBox="0 0 47 40" width="47" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m45.2054149 8.82876345.6003191.40637037-.2240425.6914074-.4490426 1.38570368c-.1024468.3148889-.6998936 1.9596297-2.43 3.5918519l-.017234.0163704c-.188617.1887407-.3801064.3659259-.5467021.5084444l-.4605319.4285185-.486383.4516296-.1407447-.0702963c-.7257447.4583704-1.4926596.7886667-2.2796809.9831852l.5840426.5864445-.6769149.6817778-2.052766 2.0636296-.169468.1704444-.019149.0192593-2.3821276 2.3958518c-.4902128.8493334-1.1202128 1.6331852-1.8497873 2.3111112-.6031915.6047407-1.2504255 1.1054814-1.935 1.4954814l-.4777659.4805186-4.3247873 4.3506666-.0296808.0298519-.0315958.0269629-2.1532978 1.8171111-.2661702.2253334h-.3485107-3.8948936l-3.968617 3.9914815-1.3547873 1.3616296-.6769148.6808148-.6769149-.6808148-1.3538298-1.3616296-4.80925535-4.837926-3.2687234-3.2875555-1.63436171-1.6437778h2.3112766 4.62255319 2.67223407l-4.71063832-4.7368148-.6769149-.6808148.6769149-.6808148 4.93851062-4.9650371.6769149-.6798518.6769149.6808148 2.7296809 2.7454074c.9363829-.8820741 2.1485106-1.4685185 3.4037234-1.6562963.278617-1.4694815 1.0187234-2.834963 2.168617-3.9885926.5696808-.572 1.1843617-1.0438519 1.8335106-1.4107407l.2901064-.2917778 4.3094681-4.31985187c.5830851-1.0582963 1.4256383-1.78918519 2.0364893-2.12718519l.4471277-.24748148c.3829787-.7617037.9047872-1.47622222 1.5539362-2.12622222 1.510851-1.51666667 3.3165957-2.31881482 5.22-2.31881482.0871276 0 .1752127.00192593.2594681.00577778 1.9484042.06933334 3.8441489.97933334 5.4775532 2.62792593.1512765.15022222.3303191.34859259.5361702.5797037l.0526595.05874074c.1120213.12518519.2345745.26192593.370532.40733334l1.2657446 1.36066666.6328724.67985185-.6548936.65866667-.2508511.25325926zm-27.9288192 22.17414815h-9.57446804l4.78723404 4.8148148zm23.1864894-21.70422223c-.9220213 1.38666663-2.5180851 3.63037033-4.1984042 1.94133333l4.2510638-4.27651851c-.3810638-.41022222-.6711702-.754-.8923404-.97740741-2.2921277-2.31207407-4.8743617-2.34192593-6.8984043-.312-1.3528723 1.35681481-1.7071277 2.91007407-1.313617 4.38533332l-1.332766-1.52629628c-.385851.21474074-2.0182979 1.65918518-.7937234 3.84703708l-1.5252127-1.274963-2.0240426 2.0299259 2.7344681 2.7502222c-2.1121277-1.6861481-4.3889362-1.5205185-6.2157447.312-1.9560638 1.9615556-1.8181915 4.3381482-.3532979 6.293926l-.295851-.2946667c-1.9321277-1.9432593-4.0318085-1.2576296-5.0706383-.2128148-.8023405.8079259-1.2944681 1.9191852-1.0924468 2.6905185l-4.195532-4.2187407-2.22893613 2.2408148 8.25893613 8.3065185h4.4339362l-2.9767021-2.9938519c-.5893908-.6029568-.9604155-1.0987731-1.1531529-1.5232627-.3182349-.7008886-.1504161-1.2073234.3230465-1.680515.7334043-.7318519 1.583617-.2763704 3.0829787 1.2277777l2.9412766 2.9562963 2.2164894-2.2292592-2.7909575-2.8060741c2.0125532 1.5291852 4.4224468 1.612 6.5728724-.545037 1.3567021-1.2653334 1.7425532-2.4565185 1.7425532-2.4565185l-1.6755319-1.1314815c-.9229788 1.3866666-2.5152128 3.6361481-4.195532 1.9461481l4.2606383-4.2851852 2.655 2.6712593 2.3160639-2.3294074-3.3223405-3.3424445c-1.5520212-1.5609629-.6328723-3.0275555.0124469-3.5793333.3025531.6442222.7448936 1.2624445 1.3078723 1.8296296 2.1485106 2.1676297 4.9260638 2.6038519 7.3685106.1550371 1.3567022-1.2643704 1.7425532-2.4565185 1.7425532-2.4565185zm-3.6564894-1.35537321-2.0211702 2.03377777c-.9890425-1.18251851-.9392553-1.81422222-.3245744-2.43051851.7439361-.7462963 1.4993617-.43044445 2.3457446.39674074zm-12.4879787 12.56088884c-.9890425-1.1825185-.9411702-1.819037-.3284042-2.4353333.7448936-.7462963 1.5003191-.4304444 2.3467021.3967408z" fill="#0f1621" fill-opacity=".7"/><path d="m17.2765957 31.0029116-4.787234 4.8148148-4.78723404-4.8148148zm23.1864894-21.70422223 1.6755319 1.13148153s-.385851 1.1921481-1.7425532 2.4565185c-2.4424468 2.4488148-5.22 2.0125926-7.3685106-.1550371-.5629787-.5671851-1.0053192-1.1854074-1.3078723-1.8296296-.6453192.5517778-1.5644681 2.0183704-.0124469 3.5793333l3.3223405 3.3424445-2.3160639 2.3294074-2.655-2.6712593-4.2606383 4.2851852c1.6803192 1.69 3.2725532-.5594815 4.195532-1.9461481l1.6755319 1.1314815s-.3858511 1.1911851-1.7425532 2.4565185c-2.1504256 2.157037-4.5603192 2.0742222-6.5728724.545037l2.7909575 2.8060741-2.2164894 2.2292592-2.9412766-2.9562963c-1.4993617-1.5041481-2.3495744-1.9596296-3.0829787-1.2277777-.4734626.4731916-.6412814.9796264-.3230465 1.680515.1927374.4244896.5637621.9203059 1.1531529 1.5232627l2.9767021 2.9938519h-4.4339362l-8.25893613-8.3065185 2.22893613-2.2408148 4.195532 4.2187407c-.2020213-.7713333.2901063-1.8825926 1.0924468-2.6905185 1.0388298-1.0448148 3.1385106-1.7304445 5.0706383.2128148l.295851.2946667c-1.4648936-1.9557778-1.6027659-4.3323704.3532979-6.293926 1.8268085-1.8325185 4.103617-1.9981481 6.2157447-.312l-2.7344681-2.7502222 2.0240426-2.0299259 1.5252127 1.274963c-1.2245745-2.1878519.4078724-3.63229634.7937234-3.84703708l1.332766 1.52629628c-.3935107-1.47525925-.0392553-3.02851851 1.313617-4.38533332 2.0240426-2.02992593 4.6062766-2.00007407 6.8984043.312.2211702.22340741.5112766.56718519.8923404.97740741l-4.2510638 4.27651851c1.6803191 1.689037 3.2763829-.5546667 4.1984042-1.94133333zm-16.1444681 11.20551563 2.0182979-2.0385925c-.846383-.8271852-1.6018085-1.1430371-2.3467021-.3967408-.612766.6162963-.6606383 1.2528148.3284042 2.4353333zm12.4879787-12.56088884c-.8463829-.82718519-1.6018085-1.14303704-2.3457446-.39674074-.6146809.61629629-.6644681 1.248.3245744 2.43051851z" fill="#fff" fill-opacity=".3"/></g></svg>',Bj=
{Nl:"#0F1621",Ol:.3,Il:"#fff",Jl:.6},Aj={Nl:"#fff",Ol:1,Il:"#0F1621",Jl:.7},Dj="1987&ndash;"+xd(2015,(new Date).getFullYear())+" HERE";uj.prototype.va=function(){var a=this.a,b=a.vb(),c=a.b.nb().bounds;a=a.a;var d=a.a.length,e={},f=0,g,h,k,l=[Dj];if(c)for(;f<d;f++)if(h=a.get(f).getCopyrights(c.G(),b))for(g=0;g<h.length;g++)e[k=h[g].label]||(l.push(k),e[k]=1);return l.join(", ")};uj.prototype.getCopyrights=uj.prototype.va;uj.prototype.wa=function(){return this.P.style};uj.prototype.i=String.fromCharCode(169);
uj.prototype.s=function(){this.a.removeEventListener(this.a.v.rj,this.c);this.a.a.removeEventListener("add",this.b);this.a.a.removeEventListener("remove",this.b);this.a.a.removeEventListener("set",this.b);if(this.P.parentNode){var a=this.P;a.parentNode.removeChild(a)}};
uj.prototype.capture=function(a,b,c,d){var e=a.getContext("2d"),f=window.getComputedStyle(this.f.parentElement),g=2*Bc(f.paddingLeft,10),h=(this.f.offsetWidth+2*g)*b,k=this.f.offsetHeight*b,l=Cc(f.getPropertyValue("font-size")),m=this.P.ownerDocument,p=+a.width,q=+a.height,r=wj*b,v=this.Lf.childNodes[0].getBoundingClientRect(),w=v.width*b,z=v.height*b,J=id;Da(d)&&(J=function(){d("capture_error")});e.fillStyle=f.backgroundColor;e.fillRect(p-h,q-k,h,k);h=this.i+" "+function(G){G=vj(m,"div",null,G);
return G.textContent||G.innerText||""}(this.va());e.font=l*b+"px "+f.getPropertyValue("font-family");e.fillStyle=f.getPropertyValue("color");e.textBaseline="bottom";e.textAlign="right";e.fillText(h,p-g*b,q);Ej(this,e.font,function(G){(new sf("image",G)).then(function(U){e.drawImage(U,r,q-(z+r),w,z);c(a)},J)},J)};uj.prototype.capture=uj.prototype.capture;
function Ej(a,b,c,d){Fj(A(function(e){e?this.Rh?c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAADNklEQVRYR82XW6hVVRSGv7+rmJfSMKSnSkMEfY7EogcJC7tilGRopBAiSaI+SBARQSCIIqgFISih2YW0oAgLCsKXojA0RB+81VugZEFZv/yHuWTt7d7Hfc4+6+h4OWefNfcc3xlj/v+YS1zjoab5bE8DZgGngB8keSg5GwO0PQ54F3i2BnQIWCLpx14hGwG0fT3wOfBwB5DzwOOSDvQC2RTgM8Ae4D/gaeA3YDdwN5AWvyxp+6gD2r4OmAq8AbwInAMmA/OAT4CbgBWStvYClzUjWkHbrwHLgF8LVHJ8DDxah7P9JHCil7M40oA/A7OBC8ANtSqlrQOVs30/8CWQat8r6cxg1RwRQNvPA88Bk4D7gJzBV4A5teSp5MlS4VuA/ZIeu1Kr+wa0/QTwIRDlRhT5eTswBvi2CKOd42AULilndNAYCcA7gK+BmbVMiyXtsh3Qt4FFBTgW8w6wXtLfV4LrSyS2FwAvAWOBX+JtwF0laUDmS/oun23fDNwJnJb0Ty9g1ZphVdB2qrK2LdFfBbb685/AIxXkUKDqa4cMaDs2kjalRe8Fola57J3qRQSJviGHA3gMuAdYI2lDUfDOArQLWAd8VTuTOW9vjUoFy6TIGYpS9wKfAjuK5wVuSfn91iKcvZJeHy5ci0hsZwzNk5Qh3xIFbLyks7aPAtPLgv+L4VZwDwLvA6uKz6XdfcVAi22PBz4q4+lVSRurXW2vKYKIZfwEHCmmXC35HngAyITYD0ys2t8XWflyBfhmvKm24QCk7aVFCPVc7WMszzKucknI+NoHPCUppt13VICZm2nNwjoksByY0SXL72Vi3FieZ97mgrpyqF432H9xScW2O0H+W6oSE/4D2FYuA9kzlUzVTwO3Ad9IOtx3ydo2aLGZLpABm5KW2Z4AfAbMLfsEcpGkKLqRuMwHu0CukrSpCCrvGlF6hBEVL5MUw24kOhp1B8gc+FTqgxpkFLuzSbjk6jpJOkC2tDPeKCkVbDRkO67fDTTC2VK7vgfyBUlfNEpV2zyAK4HNXRLmZfshScdHC6g9T+WDGU2XpkdZdNXhWs6g7dXAhmsJ7jKR2M77bG4kV7Wt9TZfBLgYEC7PSpcIAAAAAElFTkSuQmCC"):c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIMSURBVFiFzdZPiE1RGADwXzPTTPIMQoodVpbKgpoUG5qExUi8DSVJQv4slJJsbNjYWFhNETWLUUosRDRLUVLCYhIiojFojHkW997uvefNGIuZc99Xp/fOO6/Or++c75xDi0d7hDlWYQNqeB9hvv+OGq6jUWjPsKZKVBbtuKOMy9p3bKqOlsROCWYc27AWr9PfJnCgKlgbluNqivmGDmzBrxR3sCocnMEw7sqXdEAzboeK9uLTFPVbed8VcesxglFJtqNEHbcxlIL68ChADuCSpEgauBULt11SDI3C5yJJdrLCCNsQumMBl+J5AKinY4slBfNTfsRcxJwYsK0YxD3J0r1RPut6Cv/twgp0xoDBBc3LNhr0RwJktNifAn7gsnLmsuxVinyVTn4i7dcLoH4sU96Tp2Pi2uSVehN75Gdev+QO7pIXztmZnLwTvf+AzU+/v5Rn50+A24gP2IW5M4mbJ7+ejgVjJ/EpHXuCa8p77nGK68FX5eWfsTgfTJoh92qu1vAaa+CtPJuDZuEh3CHZUyHyxSSYrL3DWKE/gStm8aybDDkmKYperJM/BrJMnsJuHMLq2YJNh/wsX7JuPAyQfTFg0yGPFMZreCCv4n2xgTQjxyXP+CxquK8iXBYhMlzOtliQBVg4RVuCG/iSto/YHAuWxWFTHyXDWBkbNFkc1cK4LI5rYVwW57QY7i/pZeJv8QQJRQAAAABJRU5ErkJggg=="):
(e=this.Lf.cloneNode(!0),e.firstChild.setAttribute("style","font:"+b),c(af(e.innerHTML)))},a),d)}uj.prototype.Rh=!1;function Fj(a,b){var c="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(xj),d=zj;uc(d)?a(d):(new sf("image",c)).then(function(e){Xe.drawImage(e,0,0);try{Xe.getImageData(0,0,1,1),d=!1}catch(f){d=18===f.code}finally{zj=d,a(d)}},b)}uj.prototype.em=function(a,b){Cj[a]=b};uj.prototype.addL11NString=uj.prototype.em;
var Cj={"de-DE":"Nutzungsbedingungen","en-US":"Terms of use","en-GB":"Terms of use","es-ES":"Condiciones de uso","fi-FI":"Palveluehdot","fr-FR":"Conditions d'utilisation","it-IT":"Condizioni di utilizzo","nl-NL":"Dienstvoorwaarden","pl-PL":"Warunki \u015bwiadczenia us\u0142ugi","pt-BR":"Termos de servi\u00e7o","pt-PT":"Termos do servi\u00e7o","ru-RU":"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","tr-TR":"Servis Ko\u015fullar\u0131",
"zh-CN":"\u4f7f\u7528\u6761\u6b3e"};function Q(a){var b={};this.f=b.previousSibling=b.nextSibling=b;this.g=new bf;Q.l.constructor.call(this,a);a&&"objects"in a&&this.dc(a.objects)}u(Q,M);t("H.map.Group",Q);Q.prototype.type=Yg.GROUP;Q.prototype.ze=function(a,b){this.b=!0;a=Q.l.ze.call(this,a,b);this.b=!1;a&&this.forEach(Gj,!0);return a};Q.prototype.setProvider=Q.prototype.ze;function Gj(a,b,c){a.ze(c.qa)}Q.prototype.contains=function(a){var b=this===a;if(!b&&this.a&&C(a,M))for(;!b&&a;)a===this?b=!0:a=a.Ia;return b};
Q.prototype.contains=Q.prototype.contains;Q.prototype.uf=function(){this.U=B;this.forEach(Hj,!0)};Q.prototype.resetZInfo=Q.prototype.uf;function Hj(a){a.uf()}Q.prototype.b=!1;Q.prototype.ya=function(a){var b=Q.l.ya.call(this,a);b&&!this.b&&(this.c=a,this.forEach(Ij,!0),delete this.c);return b};Q.prototype.invalidate=Q.prototype.ya;function Ij(a,b,c){a.ya(c.c)}
Q.prototype.forEach=function(a,b,c){var d;if(this.a){var e=this.f;var f=e.nextSibling;for(d=0;f!==e;){var g=f.nextSibling;a.call(c,f,d++,this);b&&C(f,Q)&&f.forEach(a,b,c);f=g}}};Q.prototype.forEach=Q.prototype.forEach;Q.prototype.Wa=function(a){var b=[];this.forEach(Jj,a,b);return b};Q.prototype.getObjects=Q.prototype.Wa;Q.prototype.G=function(){var a=null;this.a&&this.forEach(function(b){(b=b.G())&&(a?a=a.lc(b):a=b)});return a};Q.prototype.getBoundingBox=Q.prototype.G;
function Jj(a){this.push(a)}Q.prototype.a=0;Q.prototype.Jm=function(){return this.a};Q.prototype.getChildCount=Q.prototype.Jm;
Q.prototype.da=function(a){var b=this.f,c=b.previousSibling;C(a,M,this.da,0);if(a.contains(this))throw new Yc(this.da,"The new object contains the parent group");var d=a.hg(!0);var e=a.Ia;if(e!==this){if(e){e=a.previousSibling;var f=a.nextSibling;e.nextSibling=f;f.previousSibling=e}a.Ia=this;M.l.ka.call(a,this);c.nextSibling=a;a.previousSibling=c;a.nextSibling=b;b.previousSibling=a;this.a++}a.Zi=this.g.next();a.uf();b=a.ze(this.qa,this.da);a.hg(!0)^d&&a.ya(Vg.VOLATILITY);b||a.ya(Vg.Z_ORDER);return a};
Q.prototype.addObject=Q.prototype.da;Q.prototype.dc=function(a){var b;zc(a,this.dc,0);var c=a.length;for(b=0;b<c;b++)this.da(a[b])};Q.prototype.addObjects=Q.prototype.dc;Q.prototype.Ja=function(a){if(!a||a.Ia!==this)throw new Yc(this.Ja,"object not found");var b=a.previousSibling,c=a.nextSibling;b.nextSibling=c;c.previousSibling=b;a.Ia=null;M.l.ka.call(a,null);delete a.previousSibling;delete a.nextSibling;C(a.qa,N)&&a.ze(null,this.Ja);this.a--;return a};Q.prototype.removeObject=Q.prototype.Ja;
Q.prototype.Id=function(a){var b;zc(a,this.Id,0);var c=a.length;for(b=0;b<c;b++)this.Ja(a[b])};Q.prototype.removeObjects=Q.prototype.Id;Q.prototype.ra=function(){var a=this.Wa();this.Id(a)};Q.prototype.removeAll=Q.prototype.ra;
Q.prototype.Qc=function(a){for(var b=this.Wa(),c=0,d=b.length,e=[],f,g,h;c<d;c++)h=b[c],h instanceof Q?(f=a?a(h.getData()):h.getData(),g=ah(this,f,!!a),f={type:"Feature"},f.properties=g,h.m&&(f.id=h.m),f.geometry={},f.geometry.type="GeometryCollection",f.geometry.geometries=Kj(this,h.Wa()),e.push(f)):e.push(h.Qc(a));return{type:"FeatureCollection",features:e}};Q.prototype.toGeoJSON=Q.prototype.Qc;
function Kj(a,b){for(var c=0,d=b.length,e,f,g=[];c<d;c++)e=b[c],f={},e instanceof Q?(f.type="GeometryCollection",f.geometries=Kj(a,e.Wa())):f=e.ea().Qc(),g.push(f);return g}Q.prototype.X=function(){var a=Q.l.X.call(this);a.type="Group";return a};Q.prototype.forWorkerMessage=Q.prototype.X;var Lj={PROVIDES_BY_VIEWPORT:1,PROVIDES_RASTERS:2,PROVIDES_SPATIALS:4,PROVIDES_OVERLAYS:8,PROVIDES_MARKERS:16,PROVIDES_DOM_MARKERS:32,PROVIDES_GEOJSON:64,PROVIDES_OMV:128,CROP_LINES_BY_TILE:256,CROP_POLYGONS_BY_TILE:512,HAS_VOLATILE_DATA:1024};t("H.map.provider.Capabilities",Lj);Lj.PROVIDES_WEBGL_RENDERABLE_OBJECTS=Lj.PROVIDES_SPATIALS|Lj.PROVIDES_OVERLAYS|Lj.PROVIDES_MARKERS;function Mj(a,b,c,d,e){b&&(this.b=b);uc(c)&&(this.dh=!!c);this.dh&&d&&(this.eh=new Ti(d.w,d.h));uc(e)&&(this.c={crossOrigin:e});switch(Nj[yc(a)]){case 2:this.Fd=a;Oj(this,1);break;case 1:if(mf(a)){this.Fd=a;Pj(this);Oj(this,1);break}a=a.src;case 0:if(a){a=af(a);this.a=new sf("image",a,B,this.c);this.a.then(A(this.Lo,this),A(this.Ko,this));break}default:throw Oj(this,-1),new D(Mj,0,"No image data");}}n=Mj.prototype;n.ni=0;n.getState=function(){return this.ni};
function Oj(a,b){a.ni=b;delete a.a;a.b&&a.b(b,a)}n.dh=!0;function Pj(a){if(a.dh){var b=a.Fd,c=Qj(a),d=c&&c.w||+b.width,e=c&&c.h||+b.height,f=Te();if(C(b,x.HTMLCanvasElement))c=b;else{c=b.ownerDocument.createElement("canvas");c.width=Ad(d*f);c.height=Ad(e*f);var g=c.getContext("2d");g.scale(f,f);g.drawImage(b,0,0,d,e);$c&&(g.clearRect(0,0,d,e),g.drawImage(b,0,0,d,e))}a.Fd=c}}n.Fd=y;n.getData=function(){return this.Fd};var Nj={String:0,HTMLImageElement:1,HTMLCanvasElement:2};n=Mj.prototype;n.eh=y;
n.Cb=function(){return 1===this.ni?Qj(this):y};function Qj(a){var b=a.eh,c;if(!b){var d=a.Fd;b=d.naturalWidth||d.width;if(0===b&&Ze&&1===Nj[yc(d)]){var e=!0;if(c=d.parentNode)var f=d.nextSibling;document.body.appendChild(d)}a.eh=b=new Ti(d.naturalWidth||d.width,d.naturalHeight||d.height);e&&(c?c.insertBefore(d,f):document.body.removeChild(d))}return b}n.Lo=function(a){this.Fd=a;Pj(this);Oj(this,1)};n.Ko=function(){Oj(this,-1)};n.cancel=function(){this.a&&this.a.cancel()};function Rj(a,b){var c,d="anonymous";this.uid=Sj.next();Rj.l.constructor.call(this);if(b){var e="size";if(e in b){var f=b[e];if(!f||isNaN(f.w)||isNaN(f.h))throw new D(Rj,1,e);this.c=new Ti(f.w,f.h)}e="anchor";if(e in b){f=b[e];if(!f||isNaN(f.x)||isNaN(f.y))throw new D(Rj,1,e);this.b=new I(f.x,f.y)}e="hitArea";e in b&&(f=b[e],C(f,Ui,Rj,1),this.g=b[e]);e="asCanvas";e in b&&(c=b[e]);e="crossOrigin";e in b&&(d=b[e]);f=b.stickHeight;f===+f&&0<f&&(this.ip=f);e="stickColor";f=b[e];e in b&&Ac(f)&&(this.hp=
f)}a=new Mj(a,A(this.i,this),c,this.c,d);b=this.j=a.getState();0!==b?this.i(b,a):this.f=a}u(Rj,F);t("H.map.Icon",Rj);var Sj=new bf;Rj.State={ERROR:-1,LOADING:0,READY:1};Rj.prototype.getState=function(){return this.j};Rj.prototype.getState=Rj.prototype.getState;Rj.prototype.i=function(a,b){this.a=b.getData();if(1===a){var c=this.c;c||(c=this.c=b.Cb());this.b||(this.b=new I(c.w/2|0,c.h))}this.f&&(this.j=a,delete this.f,this.dispatchEvent("statechange"))};Rj.prototype.a=y;Rj.prototype.bd=function(){return this.a};
Rj.prototype.getBitmap=Rj.prototype.bd;Rj.prototype.c=y;Rj.prototype.Cb=function(){return this.c};Rj.prototype.getSize=Rj.prototype.Cb;Rj.prototype.b=y;Rj.prototype.xd=function(){return this.b};Rj.prototype.getAnchor=Rj.prototype.xd;Rj.prototype.g=y;Rj.prototype.cn=function(){return this.g};Rj.prototype.getHitArea=Rj.prototype.cn;Rj.prototype.s=function(){Rj.l.s.call(this);this.a?(this.a.removeAttribute("src"),delete this.a):(this.f.cancel(),delete this.f)};function Tj(a,b,c,d,e,f){Tj.l.constructor.call(this,isNaN(a)?15:a,b,c,d,e,f)}u(Tj,ig);Tj.prototype.m=function(a){for(var b,c,d,e=this.head;a;){if(b=a.entries)if(c=b.length){if(2>c&&(d=a.parent)&&1===d.a){d.removeChild(a);e===a&&(e=d);d.entries=b;a=b[0].node=d;continue}}else if(delete a.entries,d=a.parent)if(d.removeChild(a),e===a&&(e=d),1===d.a){a=d.a?d[0]||d[1]||d[2]||d[3]:null;continue}a=y}this.head!==e&&(this.head=e,ng(this))};
Tj.prototype.Dc=function(a,b){if(sg(this.a,a,b,a,b))return Uj(this,this.a,a,b,this.c);throw Error("Coordinates out of bounds");};function Uj(a,b,c,d,e){var f=b.entries;if(e)if(b.a)f=Vj(a,b,c,d,e);else if(f){f=f[0];var g=qg(b,f[1]>=b[8]|(f[0]>=b[9])<<1);g.entries=b.entries;delete b.entries;f.node=g;ng(a,g);f=Vj(a,b,c,d,e)}else rg(b,f=new Wj(c,d)),ng(a,b),lg(a,f,!0);else f||ng(a,b),rg(b,f=new Wj(c,d)),lg(a,f,!0);return f}function Vj(a,b,c,d,e){return Uj(a,qg(b,c>=b[8]|(d>=b[9])<<1),c,d,e-1)}
function Wj(a,b){this.id=pg++;this[0]=b;this[1]=a}Wj.prototype.zd=function(a){return this[a%2]};function Xj(){this.a=new Tj(10,180,90,0,0,!0)}n=Xj.prototype;n.Zh=0;n.cd=function(){return this.Zh};n.O=null;n.G=function(){var a=this.O,b;!a&&(b=jg(this.a))&&(this.O=a=new K(-b[0],b[3],-b[2],b[1]));return a};n.Dc=function(a){++this.Zh;this.O=null;return this.a.Dc(a.lng,-a.lat)};n.remove=function(a){if(a=this.a.remove(a))--this.Zh,this.O=null;return a};
n.kg=function(a,b,c){var d=this.a,e=a.Rb(),f=a.Nb(),g=-e.lat;e=e.lng;var h=-f.lat;f=f.lng;var k;a.Fb()?k=d.bb(-180,g,f,h,c,b).concat(d.bb(e,g,180,h,c,b)):k=d.bb(e,g,f,h,c,b);return k};function Yj(a,b,c){this.c=a;this.a=b;this.g=c;this.f=this.c&Lj.PROVIDES_BY_VIEWPORT?"function(){return sources[$source].isInMinMaxRange(feature, $zoom) && feature.ref.effectiveVisibility;}":B;this.b={}};function Zj(a,b,c,d){this.a=a;this.b=b;this.c=c;this.Ff=d}function ak(a,b,c,d){a={type:b,uid:a.b,tiled:c,max_zoom:a.c};d&&Xa(a,d);return a};function bk(a){this.a=a};function ck(a,b,c,d,e){this.a=a;this.b=b;this.c=c;this.f=d;this.Ff=e}
function dk(a){if(a.a&Lj.PROVIDES_DOM_MARKERS&&!(a.a&Lj.PROVIDES_MARKERS))return{};var b=new Zj(a.a,a.b,a.c,a.Ff);var c=new bk(a.a);a=new Yj(a.a,a.b,a.f);var d={},e=b.b;b=b.a&Lj.PROVIDES_BY_VIEWPORT?ak(b,"ObjectSource",!1,{progressiveUpdate:!0,has_volatile_data:!!(b.a&Lj.HAS_VOLATILE_DATA)}):b.a&Lj.PROVIDES_RASTERS?ak(b,"RemoteRasterTileSource",!0,{url:""}):ak(b,"ObjectTileSource",!0,{tile_size:b.Ff});d[e]=b;b={};c.a&Lj.PROVIDES_RASTERS&&(b={"translucent-raster":Vh("raster","inlay",1)});if(c.a&Lj.PROVIDES_WEBGL_RENDERABLE_OBJECTS){e=
!!(c.a&Lj.CROP_LINES_BY_TILE);var f={"translucent-polygons":Vh("polygons","inlay",2),"translucent-extruded-polygons":Vh("polygons","translucent",3),"translucent-pattern-lines":Vh("pattern-lines","translucent",4),"translucent-overlays":Vh("overlays","inlay",5),markers:Vh("custom_icons","overlay",6,!1)};f["translucent-polygons"].crop_by_tile=!!(c.a&Lj.CROP_POLYGONS_BY_TILE);f["translucent-pattern-lines"].crop_by_tile=e;f.markers.suppress_fade=!0;f.markers.stick=!0;Xa(b,f)}a.c&Lj.PROVIDES_RASTERS&&(a.b["tile_layer_"+
a.a]=Xh(a.a,"_default",{"translucent-raster":{color:[1,1,1,a.g],order:0}}));if(a.c&Lj.PROVIDES_SPATIALS){c={"translucent-pattern-lines":{color:Uh("strokeColor"),width:Uh("lineWidth * $meters_per_pixel"),join:Uh("lineJoin"),cap:Uh("lineCap"),tail_cap:Uh("lineTailCap"),head_cap:Uh("lineHeadCap"),miter_limit:Uh("miterLimit"),order:"function() { return 2 + feature.effectiveZIdx / 2; }",interactive:!0,dash:Uh("lineDash"),extrude:!0,dash_phase:Uh("lineDashOffset")}};e=a.b;f="polygon_layer_"+a.a;var g=Xh(a.a,
"polygons",void 0,a.f);g.flat={filter:"function(){return !feature.height && !feature.min_height;}",draw:Wh(!1)};g.extruded={filter:"function(){return feature.height || feature.min_height;}",draw:Wh(!0)};e[f]=g;a.b["outline_layer_"+a.a]=Xh(a.a,"outlines",c,a.f);a.b["polyline_layer_"+a.a]=Xh(a.a,"polylines",c,a.f)}a.c&Lj.PROVIDES_OVERLAYS&&(a.b["overlay_layer_"+a.a]=Xh(a.a,"overlays",{"translucent-overlays":{color:[1,1,1,a.g],order:8190,interactive:!0}}));a.c&Lj.PROVIDES_MARKERS&&(a.b["marker_layer_"+
a.a]=Xh(a.a,"markers",{markers:{sprite:Th("icon.id"),offset:Th("icon.offset"),collide:!1,priority:8191,elevate_by_altitude:!0,interactive:!0,stick:{color:Th("icon.stick_color"),height:Th("icon.stick_height")}}},a.f));return{sources:d,styles:b,layers:a.b}};function P(a){var b=""+df(),c;P.l.constructor.call(this);a=a||{};this.min=a.min||0;this.max=a.max||22;if(c=a.uri){if(/_/.test(c))throw new D(P,0,"uri "+c);}else c=b;this.uri=c||b;this.uid=b;a.getCopyrights&&xc(a.getCopyrights,"Function",P)&&(this.getCopyrights=a.getCopyrights);this.fb=this.fb.bind(this);this.sa=!0;this.f=a.engineType||ek.WEBGL;if(this.f===ek.HARP&&!H.map.render.harp)throw new D(P,0,"HARP engine is not supported, module not found");}u(P,F);t("H.map.provider.Provider",P);n=P.prototype;
n.v={Ee:"configchange",Da:"update"};n.Za=function(a,b){this.dispatchEvent(new td(this.v.Da,b,a))};n.fb=function(){this.dispatchEvent(this.v.Ee)};n.s=function(){F.prototype.s.call(this);this.b&&(this.b.removeEventListener("change",this.fb),this.b=null)};n.va=function(){return null};P.prototype.getCopyrights=P.prototype.va;
P.prototype.getCapabilities=function(){var a=0;this.Ci()&&(a|=Lj.PROVIDES_BY_VIEWPORT);this.providesRasters()&&(a|=Lj.PROVIDES_RASTERS);this.providesSpatials()&&(a|=Lj.PROVIDES_SPATIALS);this.providesOverlays()&&(a|=Lj.PROVIDES_OVERLAYS);this.providesMarkers()&&(a|=Lj.PROVIDES_MARKERS);this.providesDomMarkers()&&(a|=Lj.PROVIDES_DOM_MARKERS);this.providesGeoJSON()&&(a|=Lj.PROVIDES_GEOJSON);this.providesOMV()&&(a|=Lj.PROVIDES_OMV);return a};P.prototype.getCapabilities=P.prototype.getCapabilities;
P.prototype.Ci=ff;P.prototype.pf=ff;P.prototype.providesRasters=P.prototype.pf;P.prototype.Hc=ff;P.prototype.providesSpatials=P.prototype.Hc;P.prototype.Ei=ff;P.prototype.providesOverlays=P.prototype.Ei;P.prototype.Wb=ff;P.prototype.providesMarkers=P.prototype.Wb;P.prototype.Vb=ff;P.prototype.providesDomMarkers=P.prototype.Vb;P.prototype.Di=ff;P.prototype.providesGeoJSON=P.prototype.Di;P.prototype.Gd=ff;P.prototype.providesOMV=P.prototype.Gd;P.prototype.Vm=function(){return this.f};
P.prototype.getEngineType=P.prototype.Vm;P.prototype.nf=id;P.prototype.preprocessData=P.prototype.nf;P.prototype.g=1;function fk(a,b){b=Zd(b,0,1);E(b)&&(b=1);a.g!==b&&(a.g=b,a.sa&&gk(a),a.fb(),a.Za())}P.prototype.un=function(){return this.g};P.prototype.getOpacityInternal=P.prototype.un;
P.prototype.ac=function(a,b){var c=this;if(this.f===ek.WEBGL&&!C(a,bi)||this.f===ek.HARP&&!C(a,H.map.render.harp.Style))throw a=Object.entries(ek).find(function(d){return d[1]===c.f}),new D(this.ac,0,"Invalid style for engineType "+a);this.b&&(this.b.removeEventListener("change",this.fb),this.b.removeEventListener($h,this.fb));this.b=a;this.b.addEventListener("change",this.fb);this.b.addEventListener($h,this.fb);b||this.fb();this.sa=!1};P.prototype.setStyleInternal=P.prototype.ac;
P.prototype.ub=function(){this.b||gk(this);return this.b};P.prototype.getStyleInternal=P.prototype.ub;function gk(a){if(a.f===ek.WEBGL){var b=new ck(a.getCapabilities(),a.uid,a.max,a.g,a.tileSize);a.b=new bi(dk(b))}else a.f===ek.HARP&&H.map.render.harp&&(a.b=new H.map.render.harp.Style({}));a.sa=!0}P.prototype.fk=function(){var a=this.getCapabilities(),b=hk.FEATURE;a&Lj.PROVIDES_BY_VIEWPORT?b=hk.SOURCE:a&Lj.PROVIDES_RASTERS?b=null:a&Lj.PROVIDES_WEBGL_RENDERABLE_OBJECTS&&(b=hk.PROVIDER);return b};
P.prototype.getPickingMode=P.prototype.fk;P.prototype.Zm=function(){return!1};P.prototype.getFeatureProxy=P.prototype.Zm;function ik(a){var b;vc(this,ik);ik.l.constructor.call(this,a);this.fa=a=[];for(b in Yg)a[Yg[b]]=new Ug}u(ik,P);t("H.map.provider.ObjectProvider",ik);ik.prototype.Ci=ef;ik.prototype.providesByViewport=ik.prototype.Ci;ik.prototype.Pb=function(a){return this.fa[a||Yg.ANY]};ik.prototype.getInvalidations=ik.prototype.Pb;ik.prototype.me=function(a,b){if(b!==Vg.NONE){var c=this.fa[Yg.ANY];var d=c.a+1;c.update(d,b);c=this.fa[a.type];c.update(d,b);a.Pb().update(d,b);this.Za(a)}};
ik.prototype.invalidateObject=ik.prototype.me;ik.prototype.requestOverlays=ik.prototype.Jd;ik.prototype.requestSpatials=ik.prototype.Cg;ik.prototype.requestSpatialsByTile=ik.prototype.Dg;ik.prototype.Ea=!1;ik.prototype.requestMarkers=ik.prototype.Jc;ik.prototype.requestDomMarkers=ik.prototype.Ic;function N(a){a=a||{};N.l.constructor.call(this,a);this.c=a=new Q({min:a.min,max:a.max});a.qa=this;a.ka(this);a.ya(Vg.ADD);this.u=new xg;this.i=new xg;this.m=new Xj;this.o=new xg;this.B=new Xj;this.R=new xg}u(N,ik);t("H.map.provider.LocalObjectProvider",N);N.prototype.getCapabilities=function(){return Lj.PROVIDES_BY_VIEWPORT|Lj.PROVIDES_WEBGL_RENDERABLE_OBJECTS|Lj.PROVIDES_DOM_MARKERS|Lj.CROP_LINES_BY_TILE};
N.prototype.ub=function(){if(!this.U){this.U=N.l.ub.call(this);var a=new ck(this.getCapabilities()|Lj.HAS_VOLATILE_DATA,this.uid+"_vol",this.max,this.g,this.tileSize);this.U.hf(dk(a))}return this.U};N.prototype.ic=function(){return this.c};N.prototype.getRootGroup=N.prototype.ic;N.prototype.me=function(a,b){b&Vg.SPATIAL&&this.da(a);N.l.me.call(this,a,b)};N.prototype.invalidateObject=N.prototype.me;
N.prototype.da=function(a){var b;C(a,M,this.da,0);if(a.qa!==this)throw new Yc(this.da,"foreign object");this.Ja(a);var c=a.type;if(c===Yg.MARKER)if((b=a.ea())instanceof Yf){var d=!0;c=this.m}else c=this.o;else c===Yg.DOM_MARKER?(b=a.ea())instanceof Yf?(d=!0,c=this.B):c=this.R:c=c===Yg.OVERLAY?this.u:this.i;d=d?c.Dc(b):c.sk(a.G());d.jj=a;a.ma=d};
N.prototype.Ja=function(a){var b;if(a)if(a.qa!==this){if(C(a,M))throw new Yc(this.Ja,"foreign object");}else if(b=a.ma){var c=a.type;c===Yg.MARKER?this.m.remove(b)||this.o.remove(b):c===Yg.DOM_MARKER?this.B.remove(b)||this.R.remove(b):c===Yg.OVERLAY?this.u.remove(b):this.i.remove(b);delete b.jj;delete a.ma}};N.prototype.removeObject=N.prototype.Ja;
function jk(a,b,c,d,e,f,g){g=g||[];if(b.cd())for(a=b!==a.m&&b!==a.o,e=!e,b=b.kg(c,f,f),c=b.length,f=0;f<c;f++){var h=b[f].jj;var k;if(k=void 0!==d){for(var l=zd(d),m=h;(k=m.A<=l&&m.u>=l)&&(m=m.Ia););k=!k}k||!e&&!h.Bc(!0)||(a||1===h.Bb().getState())&&g.push(h)}return g}N.prototype.Ei=function(){return 0<this.u.cd()};N.prototype.providesOverlays=N.prototype.Ei;N.prototype.Jd=function(a,b,c){return jk(this,this.u,a,b,c,!1).filter(function(d){return d.bd()})};N.prototype.requestOverlays=N.prototype.Jd;
N.prototype.Hc=function(){return 0<this.i.cd()};N.prototype.providesSpatials=N.prototype.Hc;N.prototype.Cg=function(a,b,c){return jk(this,this.i,a,b,c,!1)};N.prototype.requestSpatials=N.prototype.Cg;N.prototype.Dg=function(a,b){return jk(this,this.i,a.dg(),a.zL,b,!1)};N.prototype.requestSpatialsByTile=N.prototype.Dg;N.prototype.Wb=function(){return 0<this.m.cd()+this.o.cd()};N.prototype.providesMarkers=N.prototype.Wb;N.prototype.Jc=function(a,b,c){return kk(this,a,b,c,!1)};
N.prototype.requestMarkers=N.prototype.Jc;function kk(a,b,c,d,e){var f=jk(a,a.m,b,c,d,e);jk(a,a.o,b,c,d,e,f);return f}N.prototype.Vb=function(){return 0<this.B.cd()+this.R.cd()};N.prototype.providesDomMarkers=N.prototype.Vb;N.prototype.Ic=function(a,b,c){return lk(this,a,b,c,!1)};N.prototype.requestDomMarkers=N.prototype.Ic;function lk(a,b,c,d,e){var f=jk(a,a.B,b,c,d,e);jk(a,a.R,b,c,d,e,f);return f}
function mk(a,b,c){var d=c.ea(),e,f=nk.bind(null,a);a=ok.bind(null,a);C(c,wh)?e=C(d,L)?f(d):d.pa.some(f):C(c,Gi)?e=C(d,O)?a(d):d.pa.some(a):C(c,pk)&&(e=a(wi(d)));e&&b.push(c)}function nk(a,b){a:{var c=b.Y;var d=Ci(a,b);if(!d){b=b.Y.length;for(var e=0;e<b;e+=3)if(Ai(a,c[e],c[e+1])){a=!0;break a}}a=d}return a}function ok(a,b){return Di(a,b)}
function qk(a,b,c){for(var d=a.length;d--;){var e=a[d],f=e.ea();if(C(f,Si)){f=f.pa;for(var g=f.length,h;g--;)if(h=f[g],Ai(b,h.lat,h.lng)){c.push(e);break}}else Ai(b,f.lat,f.lng)&&c.push(e)}}
N.prototype.Wa=function(a,b,c,d,e){for(var f=this,g=a.G(),h=[],k=Xb(),l=1;l&Yg.ANY;){if(l&d)switch(l){case Yg.MARKER:k=k.then(function(){return kk(f,g,c,b,!0)}).then(function(m){return qk(m,a,h)});break;case Yg.DOM_MARKER:k=k.then(function(){return lk(f,g,c,b,!0)}).then(function(m){return qk(m,a,h)});break;case Yg.SPATIAL:k=k.then(function(){return jk(f,f.i,g,c,b,!0)}).then(function(m){m.forEach(mk.bind(null,a,h))});break;case Yg.OVERLAY:k=k.then(function(){return jk(f,f.u,g,c,b,!0)}).then(function(m){m.forEach(mk.bind(null,
a,h))})}l<<=1}k.then(function(){return e(h)})};N.prototype.s=function(){N.l.s.call(this);this.c.ra()};var rk={PENDING:0,ACTIVE:1,DONE:2};t("H.map.render.RenderState",rk);function sk(a,b){b=b||{};var c;if(!C(a,Element))throw new D(sk,0,a);var d=a.ownerDocument.createElement("div");this.P=a;sk.l.constructor.call(this);this.padding=new tk(0,0,0,0);this.center=new I(0,0);this.margin=0;this.element=d;d.style.zIndex=0;d.style.height=d.style.width="100%";d.style.direction="ltr";d.style.position="relative"===a.style.position?"absolute":"relative";this.resize();a.appendChild(d);(c=b.padding)!==B&&this.Si(c.top,c.right,c.bottom,c.left);this.Ni((c=b.margin)!==B?c:0)}u(sk,F);
t("H.map.ViewPort",sk);sk.prototype.v={Da:"update",He:"sync"};sk.prototype.Ni=function(a){if(this.margin!==+a){if(E(this.margin=+a))throw new D(this.Ni,0,a);uk(this);this.dispatchEvent(this.v.Da)}};sk.prototype.setMargin=sk.prototype.Ni;sk.prototype.Si=function(a,b,c,d){var e=this.padding;if(e.top!==a||e.right!==b||e.bottom!==c||e.left!==d){if(E(a+b+c+d))throw new D(this.Si);e.top=a;e.right=b;e.bottom=c;e.left=d;uk(this);this.dispatchEvent(this.v.Da)}};sk.prototype.setPadding=sk.prototype.Si;
function uk(a){var b=a.padding;a.center.set((a.width+b.left-b.right)/2<<0,(a.height+b.top-b.bottom)/2<<0)}sk.prototype.resize=function(){var a=this.P.offsetWidth,b=this.P.offsetHeight;if(this.width!==a||this.height!==b)this.b=new Ti(this.width,this.height),this.width=a,this.height=b,uk(this),this.dispatchEvent(this.v.Da)};sk.prototype.resize=sk.prototype.resize;sk.prototype.cb=function(a){this.dispatchEvent(new $i(this.v.He,this.b,a,aj.SIZE))};sk.prototype.synchronize=sk.prototype.cb;
sk.prototype.s=function(){x.clearTimeout(this.a);this.a=null;this.P.removeChild(this.element);this.element=this.P=null;sk.l.s.call(this)};sk.prototype.sc=Oc;sk.prototype.startInteraction=sk.prototype.sc;sk.prototype.jc=Oc;sk.prototype.interaction=sk.prototype.jc;sk.prototype.Ab=Oc;sk.prototype.endInteraction=sk.prototype.Ab;function vk(a,b,c,d,e,f){var g;for(g=[];d<=e;d++)g=g.concat(wk(a,c,d));a=g.length;qj.call(this,f,a);this.m=c=[];this.g=A(this.g,this);this.f=A(this.f,this);for(this.N(1);a--;)f=g[a],c.push(xk(b,f[0],f[1],f[2],this.g,this.f))}u(vk,qj);vk.prototype.g=function(){sj(this,2)};vk.prototype.f=function(){sj(this,4)};vk.prototype.Ke=function(){for(var a=this.m,b=a.length;b--;)a[b].cancel();this.m=y};function yk(){}t("H.util.ICancelable",yk);yk.prototype.cancel=function(){};yk.prototype.cancel=yk.prototype.cancel;function zk(a,b){var c=this;if(!Da(b))throw new D(Ak,1,b);if(!Da(a.next||Da(a.cycle)))throw new D(zk,2,'Argument "mode" must implement H.util.AsyncQueue.Mode');this.b=[];this.c=[];this.g=a;this.i=b;this.j=function(){Bk(c)};this.a=null;this.f=function(){c.a||(c.a=x.setTimeout(c.j,1))}}t("H.util.AsyncQueue",zk);zk.prototype.push=function(a,b){if(!Da(b))throw new D(this.push,1,b);a=Ck(new Dk,a,this.f,b);this.b.push(a);this.f();return a};zk.prototype.push=zk.prototype.push;
function Bk(a){var b=a.c,c=0,d=a.g;d.a();for(a.a=null;c<b.length;){var e=b[c];e.wk?b.splice(c,1):c++}for(;e=d.next(a.b,a.c);)e.cancelled?e.done(null,"cancelled"):(b.push(e),a.i(e,e.data))}function Dk(){Ck(this,null,null,null)}zk.Task=Dk;function Ck(a,b,c,d){a.data=b;a.cancelled=!1;a.wk=!1;a.b=c;a.c=d;a.a=null;return a}Dk.prototype.done=function(a,b){this.wk=!0;this.b();this.c(this,a,b)};Dk.prototype.done=Dk.prototype.done;Dk.prototype.cancel=function(){this.a&&this.a();this.cancelled=!0};
Dk.prototype.cancel=Dk.prototype.cancel;Dk.prototype.ap=function(a){this.a=a;return this};Dk.prototype.setCancelFn=Dk.prototype.ap;function Ek(){}zk.Mode=Ek;Ek.prototype.next=function(){};Ek.prototype.a=function(){};function Fk(a,b){Fk.l.constructor.call(this,new Gk(a),b)}u(Fk,zk);t("H.util.SequentialQueue",Fk);function Gk(a){if(isNaN(a)||0>a)throw new D(Fk,1,'Argument "maxTime" must be a positive number');this.b=a;this.Pc=Hk()}Gk.prototype.next=function(a){return a.length&&Hk()-this.Pc<this.b?a=a.shift():null};Gk.prototype.a=function(){this.Pc=Hk()};function Ik(a){vc(this,Ik);Ik.l.constructor.call(this,a);if(a&&"tileSize"in a){var b=Cd(+a.tileSize)/Md;if(isNaN(b)||b%1||0>b||30<b)throw new D(Ik,0,"tileSize: "+a.tileSize);this.tileSize=+a.tileSize}}u(Ik,P);t("H.map.provider.TileProvider",Ik);function Jk(a,b){return Wd(a)-8-yd(Wd(b))}Ik.getZoomLevelOffset=Jk;Ik.prototype.Bd=function(a,b,c){return this.uri.concat("_",a,"_",b,"_",c)};Ik.prototype.getTileKey=Ik.prototype.Bd;Ik.prototype.Ff=256;Ik.prototype.tileSize=Ik.prototype.Ff;function Kk(){}t("H.util.ICache",Kk);Kk.prototype.add=function(){};Kk.prototype.add=Kk.prototype.add;Kk.prototype.get=function(){};Kk.prototype.get=Kk.prototype.get;Kk.prototype.Wf=function(){};Kk.prototype.drop=Kk.prototype.Wf;Kk.prototype.forEach=function(){};Kk.prototype.forEach=Kk.prototype.forEach;Kk.prototype.ra=function(){};Kk.prototype.removeAll=Kk.prototype.ra;Kk.prototype.te=function(){};Kk.prototype.registerOnDrop=Kk.prototype.te;Kk.prototype.nh=function(){};
Kk.prototype.deRegisterOnDrop=Kk.prototype.nh;function Lk(a,b,c){this.g=[];b&&this.te(b);if(c&&!Da(c))throw new D(Lk,2,c);this.b=0;this.filter=c;this.a={};this.f=this.c=null;this.Pi(a)}t("H.util.Cache",Lk);Lk.prototype.add=function(a,b,c){var d,e;c=+c;if(!Dc(c)||0>c)throw new D(this.add,2,c);a=String(a);if(e=this.filter?this.filter(a,b,c):!0)(d=this.a[a])?(d.data!==b&&Mk(this,d),this.b+=c-d.size,d.size=c,d.data=b,Nk(this,d)):this.a[a]=Ok(this,{id:a,data:b,size:c,mc:null,ld:null},this.c),Pk(this);return e};Lk.prototype.add=Lk.prototype.add;
Lk.prototype.te=function(a){if(!Da(a))throw new D(this.te,0,a);this.g.push(a)};Lk.prototype.registerOnDrop=Lk.prototype.te;Lk.prototype.nh=function(a){this.g=this.g.filter(function(b){return b!==a})};Lk.prototype.deRegisterOnDrop=Lk.prototype.nh;Lk.prototype.get=function(a,b){return(a=b?this.a[a]:Nk(this,this.a[a]))&&a.data};Lk.prototype.get=Lk.prototype.get;Lk.prototype.Wf=function(a){var b;(b=this.a[a])&&Qk(this,b,!0)};Lk.prototype.drop=Lk.prototype.Wf;
Lk.prototype.forEach=function(a,b,c){var d;for(d in this.a){var e=this.a[d];(c?c(d,e.data,e.size):1)&&a.call(b,d,e.data,e.size)}};Lk.prototype.forEach=Lk.prototype.forEach;Lk.prototype.ra=function(a){var b;for(b in this.a){var c=this.a[b];(a?a(b,c.data,c.size):1)&&Qk(this,this.a[b],!0)}};Lk.prototype.removeAll=Lk.prototype.ra;Lk.prototype.Pi=function(a){if(!(0<+a))throw new D(Lk.prototype.Pi,0,a);this.i=+a;Pk(this);return this};Lk.prototype.setMaxSize=Lk.prototype.Pi;Lk.prototype.sn=function(){return this.i};
Lk.prototype.getMaxSize=Lk.prototype.sn;Lk.prototype.Pm=function(){return this.b};Lk.prototype.getCurrentSize=Lk.prototype.Pm;function Nk(a,b){b&&(a.c=Ok(a,b,a.c));return b}function Pk(a){for(;a.b>a.i&&a.f;)Qk(a,a.f,!0)}function Ok(a,b,c){if(c!==b){(b.mc||b.ld)&&Qk(a,b,!1);if(b.mc=c)b.ld=c.ld,c.ld=b;b.ld||(a.c=b);b.mc||(a.f=b);a.b+=b.size}return b}function Qk(a,b,c){var d=b.ld,e=b.mc;if(d||e||b==a.c&&b==a.f)d?d.mc=e:a.c=e,e?e.ld=d:a.f=d,a.b-=b.size,c&&(delete a.a[b.id],Mk(a,b));b.mc=b.ld=null}
function Mk(a,b){for(var c=a.g.length;c--;)a.g[c].call(a,b.id,b.data,b.size)};var Rk,Sk=function(){function a(){}for(var b,c,d,e=sc("o ms moz webkit "),f=5;f--&&!b;)b=e[f],b=(c=x[b+(b?"R":"r")+"equestAnimationFrame"])&&!E(c.call(window,a))&&(d=x[b+(b?"C":"c")+"ancelAnimationFrame"]);Rk=b?function(g){return c.call(x,g)}:function(g){return x.setTimeout(g,25)};return b?function(g){return d.call(x,g)}:function(g){return x.clearTimeout(g)}}(),Hk=x.performance&&x.performance.now?function(){return x.performance.now()}:function(){return x.Date.now()};function Tk(a,b,c,d){this.key="";this.x=a;this.y=b;this.z=c;this.data=d;this.valid=!0}t("H.map.provider.Tile",Tk);function Uk(a,b,c,d){a-=c;b-=d;return a*a+b*b}function Vk(a,b,c){return Wk(a,b*b,c||0,0,a.length-1)}t("H.math.simplifyDP",Vk);
function Wk(a,b,c,d,e){var f=0,g=d,h=a[d].x,k=a[d].y,l=a[e].x,m=a[e].y,p=d+1,q=Uk(h,k,l,m);if(q)for(;p<e;){var r=a[p++];var v=r.x;r=r.y;var w=((v-h)*(l-h)+(r-k)*(m-k))/q;v=0>w?Uk(v,r,h,k):1<w?Uk(v,r,l,m):Uk(v,r,h+w*(l-h),k+w*(m-k));v>f&&(f=v,g=p-1)}else for(;p<e;)r=a[p++],v=r.x,r=r.y,v=Uk(v,r,h,k),v>f&&(f=v,g=p-1);f>=b||0<c&&g-d?(--c,1<g-d?(d=Wk(a,b,c,d,g),d.splice(d.length-1,1)):d=[a[d]],d=1<e-g?d.concat(Wk(a,b,c,g,e)):d.concat(a.slice(g,e+1))):d=[a[d],a[e]];return d};function Xk(a,b,c,d,e,f,g,h){Xk.l.constructor.call(this,b,c,d,null);this.key=a;this.W=h;this.a=e;this.g=f;this.i={};this.zL=g;this.o=Ad(ch.MAX_LINE_WIDTH/2*this.g+1)}u(Xk,Tk);t("H.map.provider.SpatialTile",Xk);Xk.prototype.c=Vd;Xk.prototype.u=Vd;Xk.prototype.b=Vd;function Yk(a){return a.W.getInvalidations(Yg.SPATIAL)}
function Zk(a){var b=Yk(a),c=b.a,d=a.c,e=d===c,f;if(!(e||b.uk(d)||b.Th(d))){e=a.f;var g=a.i;if(b.ng(d))for(f=e.length;f--;){var h=e[f];if(h.Pb().ng(d)){e.splice(f,1);var k=k||$k(a,h.ib())}}if(b.Uh(d)){for(f=e.length;f--;)if(h=e[f],h.Pb().Uh(d)){var l=1;if((h=g[h.ib()])&&h.a){k=1;break}}l&&e.sort(al)}if(!k&&b.oe(d))for(f=e.length;f--;)if(e[f].Pb().oe(d)){var m=1;break}a.u!==d||m||(a.u=c,a.b!==d||k||(a.b=c));a.c=c;e=!0}return e}
Xk.prototype.ne=function(){var a=Yk(this),b=a.a,c=this.b,d=c===b;d||(this.W.Ea&&!a.oe(c)?d=!0:Zk(this)&&(d=this.b===b));return d};Xk.prototype.isCanvasValid=Xk.prototype.ne;Object.defineProperty(Xk.prototype,"valid",{get:function(){return this.ne()},set:id,configurable:!0});function bl(a,b){this.b=a;this.a=b}function $k(a,b){a=a.i;var c=a[b];if(c)return delete a[b],c.a}Xk.prototype.f=gf;
function cl(a){var b=Yk(a),c=a.c,d=a.f,e;if(!Zk(a)){for(e=d.length;e--;){var f=d[e];var g=f.Pb();(g.ng(c)||g.Th(c))&&$k(a,f.ib())}a.f=a.W.requestSpatialsByTile(a,!1,!1).sort(al);a.c=b.a}}function al(a,b){return Zg(a.fd(),b.fd(),!1)}Xk.prototype.Wa=function(){return this.f};Xk.prototype.getObjects=Xk.prototype.Wa;Xk.prototype.Pn=function(){return this.a};Xk.prototype.getTileSize=Xk.prototype.Pn;var dl={};
Xk.prototype.cf=function(){var a=this.a+"_"+this.g,b=dl[a];if(!b){b=-this.o;var c=this.a-b;b=dl[a]=new tk(b,b,c,c)}return b};Xk.prototype.getPxClipRect=Xk.prototype.cf;Xk.prototype.dg=function(){var a=this.eb;if(!a){var b=this.fg();a=0;var c=this.a;this.z&&(c-=a+=this.cf().top);a=this.eb=eg(b.lf(new I(a,a)),b.lf(new I(c,c)))}return a};Xk.prototype.getGeoClipRect=Xk.prototype.dg;Xk.prototype.fg=function(){var a=this.A;if(!a){var b=this.a;a=this.A=new gj(B,b);a.Ra(this.z);a.x=this.x*b;a.y=this.y*b}return a};
Xk.prototype.getPxProj=Xk.prototype.fg;Xk.prototype.ab=function(){return this.g};Xk.prototype.getPixelRatio=Xk.prototype.ab;Xk.prototype.zg=function(){var a=this.data;this.data=null;this.b=Vd;return a};Xk.prototype.releaseCanvas=Xk.prototype.zg;Xk.prototype.Ag=function(){this.i={};delete this.f;this.c=Vd};Xk.prototype.releaseData=Xk.prototype.Ag;
Xk.prototype.V=function(a){var b=a.getContext("2d"),c,d,e,f,g=0;cl(this);if(this.b<this.c){var h=this.f;if(c=h.length){a.width=a.height=this.a;b.clearRect(0,0,this.a,this.a);var k=this.i;for(d=0;d<c;d++){var l=h[d];var m=l.ib();if(f=(e=k[m])?e.b:l.getGeometriesForTile(this)){if(e)l.Pb().oe(this.b)&&(e.a=lh(l,f)),e=e.a;else{e=lh(l,f);var p;var q=f;for(var r=l.j?2:0,v=q.length;v--;){var w=q[v];if(w!==mh){var z=w.a;for(p=z.length;p--;)w=z[p],4<w.length&&(z[p]=Vk(w,.6,r))}}this.i[m]=new bl(f,e)}if(e){b.save();
q=l.j?this.B:this.L;for(m=0;m<f.length;m++)q.call(this,l,f[m],l.wa(),b);if(f=l.getLabels(this))for(l=b,m=f.length;m--;)for(r=f[m],q=r.size,l.font=q+"px "+r.font,l.fillStyle=r.color,l.textAlign="center",l.translate(r.x,r.y),l.rotate(r.angle),q=r.lineHeight||1.375*q,v=r.lines,r=v.length;r--;)l.fillText(v[r],0,r*q);b.restore()}g|=e}}}this.data=g?a:null;this.u=this.b=this.c}else this.data&&(g=1);return 0<g};Xk.prototype.render=Xk.prototype.V;
Xk.prototype.L=function(a,b,c,d){var e;c.b&&(el(d,c,this.g),fl(b,d,!1,!0,!1,this.a,this.o));c.a&&(e=a.g)&&e.Sb&&(gl(d,e),hl(this,d,b,e,c.lineWidth))};
Xk.prototype.B=function(a,b,c,d){var e=c.Sb,f=c.b,g,h=this.a,k=this.o;if(b===mh)e&&(gl(d,c),d.fillRect(0,0,h,h));else{f&&el(d,c,this.g);if(c.a&&(g=a.g)){var l=c.lineWidth;g.Sb||(g=null)}a=b.c;if(a===Ud){if(f||e)gl(d,c),fl(b,d,!0,f,e,h,this.o);g&&(gl(d,g),hl(this,d,b,g,l,0))}else e&&(gl(d,c),fl(b,d,!0,!1,e,h,k,0,a)),f&&fl(b,d,!1,f,!1,h,k,a),g&&(gl(d,g),hl(this,d,b,g,l,a))}};
function fl(a,b,c,d,e,f,g,h,k){var l=a.a,m=-g;g=f+g;h=h||0;k===B&&(k=l.length);if(e&&a===mh)b.fillRect(0,0,f,f);else if(k>h){b.beginPath();for(f=h;f<k;f++){var p=l[f];var q=p.length;if(p===Fi)b.moveTo(m,m),b.lineTo(m,g),b.lineTo(g,g),b.lineTo(g,m);else{var r=p[0];b.moveTo(r.x,r.y);for(h=1;h<q;h++)r=p[h],b.lineTo(r.x,r.y)}c&&b.closePath()}c&&e&&b.fill(a.b!==Ud?"evenodd":"nonzero");d&&b.stroke()}}
function el(a,b,c){var d;a.strokeStyle=b.strokeColor;a.lineWidth=b.lineWidth*c;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.miterLimit=b.miterLimit;a.setLineDash&&(d=b.lineDash)!==gf&&(a.setLineDash(d),a.lineDashOffset=b.lineDashOffset)}function gl(a,b){a.fillStyle=b.fillColor}
function hl(a,b,c,d,e,f){var g=e*d.width/2;e=e*d.length/2;var h=e/2;d=2*e*d.frequency;var k=Dd(Ed(e,2)+Ed(g,2));a=a.a-k;a=new tk(k,k,a,a);c=c.a;var l,m,p,q,r,v,w,z=Nd/2;f=f||0;for(k=c.length;k-- >f;){var J=0;var G=c[k];if(m=l=G.length){var U=G;m=U.length;for(p=0;--m;)p+=U[m].$a(U[m-1]);m=(U=p)>=d}if(m)for(m=wd(zd(U/d),1E3),m=U/(m+1),p=m/2;--l;){for(q=(r=G[l]).$a(v=G[l-1]);p<=J+q;){var X=r.x+(v.x-r.x)*(w=(p-J)/q);w=r.y+(v.y-r.y)*w;a.Rf(X,w)&&(b.save(),b.translate(X,w),b.rotate(-Kd((v.y-r.y)/(r.x-v.x))+
(r.x<v.x?z:-z)),b.beginPath(),b.moveTo(-g,-e),b.lineTo(0,e),b.lineTo(g,-e),b.lineTo(0,-h),b.closePath(),b.fill(),b.restore());p+=m}J+=q}}}var il=[];
Xk.prototype.Ha=function(a,b,c){for(var d=this.f,e=d.length,f,g,h,k,l,m,p=gf,q,r=this.g;e--;)if(g=d[e],g.Bc(!0)&&(h=this.i[g.ib()])&&(k=h.b)){f=g.wa();m="none"!==f.fillColor&&g.j;q="none"===f.strokeColor?0:f.lineWidth*r;for(f=k.length;f--;){l=k[f];var v;if(!(v=m&&l===mh)&&(v=m||q)){var w;v=a;var z=b,J=m,G=q,U=l.b,X=l.c,xa=X!==Ud,ia=l.a,hc=ia.length,wb=0,nd=0,zi=!1;for(l=0;l<hc;l++){var Pe=ia[l];var Yb=l>=X;var Wf=!Yb&&l>=U;if(Pe===Fi&&J)Wf?wb++:nd++;else{var cd=Pe.length;il.length=2*cd;for(w=0;w<
cd;w++){var aq=Pe[w];il[2*w]=aq.x;il[2*w+1]=aq.y}w=J&&!Yb;Yb=xa&&!Yb?0:G;if(w||Yb)if(Yb=ce(v,z,il,Yb,w),Yb===be.EDGE||Yb===be.VERTEX){zi=!0;break}else if(Yb===be.SURFACE)if(Wf)wb++;else if(nd++,U===Ud)break}}v=zi||0<nd&&!(wb%2)}if(v){p===gf&&(p=[]);p.push(g);break}}if(c&&p.length)break}return p};function jl(a,b){var c;jl.l.constructor.call(this,b);this.A=a;this.L=a=b.pixelRatio;this.tileSize=c=1<<yd(Wd((b.tileSize||256)*a));this.R=Jk(c,a);this.ci=A(this.ci,this);this.ti=A(this.ti,this);this.di=A(this.di,this);this.bi=A(this.bi,this);this.o=A(this.o,this);this.A.addEventListener(P.prototype.v.Da,this.o,!1,this);this.c=[];this.i=new Lk(b.tileCacheSize||256,this.ci);this.m=new Lk(b.dataCacheSize||512,this.ti);this.B=new Fk(20,this.di);this.a={};this.u=Hk()}u(jl,Ik);
jl.prototype.o=function(a){a.target.type===Yg.SPATIAL&&this.Za(a.target)};jl.prototype.lb=function(a,b,c,d){var e=this.getTileKey(a,b,c),f;if(f=this.i.get(e,d)){if(d||f.ne())return f;d||this.i.Wf(e)}if((f=this.m.get(e,d))&&(d||Zk(f)))return a=this.c.pop()||document.createElement("canvas"),f.V(a)||this.c.push(a),this.i.add(e,f,1),f;d||((f=this.a[e])?f.count++:(f=this.B.push([e,a,b,c],this.bi),f.count=1,this.a[e]=f))};jl.prototype.requestTile=jl.prototype.lb;jl.prototype.ud=function(){};
jl.prototype.Xc=function(a,b,c){this.Of(this.getTileKey(a,b,c))};jl.prototype.cancelTile=jl.prototype.Xc;jl.prototype.Of=function(a){var b;if(b=this.a[a])b.count--,b.count||(b.cancel(),delete this.a[a])};jl.prototype.cancelTileByKey=jl.prototype.Of;n=jl.prototype;n.di=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3];c=this.i.get(c)||new Xk(c,d,e,f,this.tileSize,this.L,f+this.R,this.A);d=c.data||this.c.pop()||document.createElement("canvas");c.V(d)||this.c.push(d);b.push(c);a.done(c)};
n.bi=function(a,b){a=a.data[0];b&&this.i.add(a,b,1);delete this.a[a];this.Za()};n.ci=function(a,b){b.data&&this.c.push(b.zg());this.m.add(a,b,1)};n.ti=function(a,b){b.Ag()};n.s=function(){for(var a in this.a)this.a[a].cancel();this.i.ra();this.m.ra();this.c.length=0;jl.l.s.call(this)};function kl(a,b){b=b||{};if(!a)throw new D(kl,0,a);this.tileSize=a.tileSize;this.a={};jj.call(this,{min:void 0!==b.min?b.min:a.min,max:void 0!==b.max?b.max:a.max,minWorldSize:this.tileSize,projection:b.fl,dark:b.dark,provider:a})}u(kl,jj);t("H.map.layer.BaseTileLayer",kl);kl.prototype.Ve=function(a,b){var c=this.pixelProjection;if(!C(a,K))throw new D(this.Ve,0,a);if(!E(b)){var d=c.lk();c.Ra(b)}a=ll(c.mb(a.Rb()),c.mb(a.Nb()));!E(d)&&c.Ra(d);return a};kl.prototype.geoRectToRect=kl.prototype.Ve;
kl.prototype.le=function(a,b){var c=Ed(2,zd(b)),d=this.tileSize;if(!C(a,tk))throw new D(this.le,0,a);if(E(b=+b))throw new D(this.le,1,b);b=zd(a.left/d);b===c&&--b;var e=zd(a.right/d);e===c&&--e;return new tk(b,Zd(zd(a.top/d),0,c-1),e,Zd(zd(a.bottom/d),0,c-1))};kl.prototype.getTileBounds=kl.prototype.le;kl.prototype.lb=function(a,b,c,d){return this.qa.requestTile(a,b,c,d)};kl.prototype.Xc=function(a,b,c){this.qa.cancelTile(a,b,c)};kl.prototype.cancelTile=kl.prototype.Xc;
kl.prototype.va=function(a,b){return this.qa.getCopyrights?this.qa.getCopyrights(a,b):null};kl.prototype.getCopyrights=kl.prototype.va;function ml(a,b,c,d,e){d=zd(d);var f=Ed(2,d),g=b.left,h=b.top,k=b.right;c=k+(c?f+(k===b.left?0:1):1);var l=b.bottom,m=[];if(e){var p=g+(1+k-g)/2+e.x/a.tileSize-.5;var q=h+(1+l-h)/2+e.y/a.tileSize-.5}for(;g<c;){for(h=b.top;h<=l;)a=g%f,m.push([a,h,d,e?Bd(p-g)+Bd(q-h):0]),h++;g++}return m}
function wk(a,b,c){c=zd(c);a.pixelProjection.Ra(c);b=a.Ve(b);var d=a.le(b,c);return ml(a,d,b.left>b.right,c)}
kl.prototype.bf=function(a,b,c,d,e,f){var g,h=[],k,l=this.qa;f=null!=f?f:"__default__";var m=l.requestTile;if(!C(a,tk))throw new D(this.bf,0,a);if(E(c=+c))throw new D(this.bf,1,c);d||(g={});b=ml(this,a,b,c,e);if(a=b.length)for(d||b.sort(nl),c=a;c--;)e=b[c],d||(g[l.Bd.apply(l,e)]=!0),e[3]=+d,(k=m.apply(l,e))&&h.push(k);if(!d){d=g;var p;g=this.a[f]||{};for(p in g)g.hasOwnProperty(p)&&g[p]&&!d[p]&&this.qa.cancelTileByKey(p);this.a[f]=d}return{total:a,tiles:h}};kl.prototype.getProviderTiles=kl.prototype.bf;
function nl(a,b){return b[3]-a[3]};function R(a){vc(this,R);R.l.constructor.call(this,a);this.qd=new ol;this.ec=A(this.ec,this);this.R=pl;this.createTileInternal=this.ud.bind(this)}u(R,Ik);t("H.map.provider.RemoteTileProvider",R);R.prototype.$d=function(){return 1};R.prototype.getEntryWeight=R.prototype.$d;var pl=new Lk(65536);R.prototype.i={};R.prototype.U={};R.prototype.Ob=function(){return this.R};R.prototype.getCache=R.prototype.Ob;R.prototype.u=ba(3);R.prototype.ec=function(a){var b=this.uri;return!a.indexOf(b)&&"_"===a.charAt(b.length)};
R.prototype.cacheFilter=R.prototype.ec;R.prototype.ma=function(a,b){b.valid=!1};R.prototype.reload=function(a){var b=this.getCache();a?b.ra(this.ec):b.forEach(this.ma,this,this.ec);ql(this);this.Za(this,{isReload:!0})};R.prototype.reload=R.prototype.reload;R.prototype.hh=function(){return!1};R.prototype.MAX_STORE_TIME=Infinity;R.prototype.ie=function(){return this.qd};R.prototype.aa=function(a,b){b(a)};
function xk(a,b,c,d,e,f){d=~~d;return a.requestInternal(b,c,d,function(g,h){a.ie().put(a.Bd(b,c,d),{raw:h&&h.raw||g,timestamp:x.Date.now()},e,f)},f,0)}R.prototype.requestInternal=R.prototype.J;
R.prototype.lb=function(a,b,c,d){var e=this;var f=this.getCache();if(E(a=+a))throw new D(this.lb,0,a);if(E(b=+b))throw new D(this.lb,0,b);if(E(c=+c))throw new D(this.lb,0,c);c=~~c;var g=this.getTileKey(a,b,c);f=f.get(g);f&&f.valid||d||this.i[g]||(f=B,this.requestTileAsPromise(a,b,c,d).then(function(h){e.Za(h)},id));return f};R.prototype.requestTile=R.prototype.lb;
R.prototype.ol=function(a,b,c,d){var e=this,f=this.getCache(),g=this.getTileKey(a,b,c),h=this.i,k=this.U,l,m=this.ie();if(k[g])return k[g];k[g]=k=new Pb(function(p,q){function r(v){var w,z;var J=function(G,U){z=e.createTileInternal(a,b,c,G,U);z.key=g;f.add(g,z,e.$d(G));p(z);rl(e,g)};v&&(w=x.Date.now()-v.timestamp);v&&w<e.MAX_STORE_TIME?e.aa(v.raw,J):(w&&m.remove(g),(z=f.get(g))&&z.valid||d?p(z||null):h[g]=e.requestInternal(a,b,c,J,q))}l=m.get(g,r,r)});h[g]||(h[g]=l);k.then(function(){rl(e,g)},function(){rl(e,
g)});return k};R.prototype.requestTileAsPromise=R.prototype.ol;R.prototype.nl=function(a,b){var c=this,d=a.id,e=a.tile.coords;return new Pb(function(f,g){c.ol(e.x,e.y,e.z,b).then(function(h){var k=y;h=h.Wa?h.Wa():h.data;for(var l=h.length,m;l--;)if(m=h[l],m.ib()===d){k=m;break}f(k)},g)})};R.prototype.requestObjectAsPromise=R.prototype.nl;function rl(a,b){delete a.i[b];delete a.U[b]}function ql(a){for(var b in a.i)a.ec(b)&&a.cancelTileByKey(b)}var sl={cancel:function(){}};
R.prototype.ud=function(a,b,c,d){return new Tk(a,b,c,d)};R.prototype.Of=function(a){var b=this.i[a];b&&(b.cancel(),rl(this,a))};R.prototype.cancelTileByKey=R.prototype.Of;R.prototype.Xc=function(a,b,c){this.cancelTileByKey(this.getTileKey(a,b,c))};R.prototype.cancelTile=R.prototype.Xc;R.prototype.s=function(){R.l.s.call(this);this.getCache().ra(this.ec);ql(this)};function ol(){}R.NullStorage=ol;ol.prototype.get=function(a,b){b();return sl};ol.prototype.get=ol.prototype.get;
ol.prototype.put=function(a,b,c){c&&c()};ol.prototype.put=ol.prototype.put;ol.prototype.clear=function(a){a&&a()};ol.prototype.clear=ol.prototype.clear;ol.prototype.remove=function(a,b){b&&b()};ol.prototype.remove=ol.prototype.remove;function Ak(a){Ak.l.constructor.call(this,a);a&&(this.A={crossOrigin:a.crossOrigin||"anonymous",headers:a.headers||{}},this.o=a.getURL);if(!Da(this.o))throw new D(Ak,0,"getURL");fk(this,a.opacity);this.c=x.URL||x.webkitURL;a=this.A.crossOrigin;if(!(a="anonymous"===a||"use-credentials"===a)){a=this.o(0,0,0);var b=window.location,c=document.createElement("a");c.href=a;a=c.hostname===b.hostname&&c.port===b.port&&c.protocol===b.protocol}(this.L=a&&!!sf.prototype.b.arraybuffer&&!!this.c)&&this.Ob().te(A(this.fa,
this))}u(Ak,R);t("H.map.provider.ImageTileProvider",Ak);Ak.prototype.oc=function(a){fk(this,a)};Ak.prototype.setOpacity=Ak.prototype.oc;Ak.prototype.ed=function(){return this.g};Ak.prototype.getOpacity=Ak.prototype.ed;Ak.prototype.pf=ef;Ak.prototype.providesRasters=Ak.prototype.pf;Ak.prototype.$d=function(){return this.tileSize};Ak.prototype.getEntryWeight=Ak.prototype.$d;
Ak.prototype.J=function(a,b,c,d,e,f){var g=this,h=this.o(a,b,c),k;a=null;if(h){var l=x.setTimeout(function(){g.L?(k=new sf("arraybuffer",h,f,g.A),k.then(function(m){return m.blob()}).then(function(m){var p=new Image;p.onload=A(d,null,p,{raw:m});p.onerror=A(e,null,"bad url");try{p.src=g.c.createObjectURL(m)}catch(q){}},e)):(k=new sf("image",h,f,g.A),k.then(d,e))},150);a={cancel:function(){k?k.cancel():x.clearTimeout(l)}}}else d(null);return a};Ak.prototype.requestInternal=Ak.prototype.J;
Ak.prototype.aa=function(a,b){var c=new Image;c.onload=function(){b(this)};c.src=this.c.createObjectURL(a)};Ak.prototype.fa=function(a,b){(a=b.data)&&a instanceof HTMLImageElement&&this.c.revokeObjectURL(a.src)};function tk(a,b,c,d){this.left=+a;this.top=+b;this.right=+c;this.bottom=+d}t("H.math.Rect",tk);tk.prototype.set=tk;tk.prototype.set=tk.prototype.set;tk.prototype.Rb=function(){return this.c||(this.c=new I(this.left,this.top))};tk.prototype.getTopLeft=tk.prototype.Rb;tk.prototype.Nb=function(){return this.a||(this.a=new I(this.right,this.bottom))};tk.prototype.getBottomRight=tk.prototype.Nb;tk.prototype.Rf=function(a,b){return this.left<=a&&this.right>=a&&this.top<=b&&this.bottom>=b};
tk.prototype.containsXY=tk.prototype.Rf;function ll(a,b){return new tk(a.x,a.y,b.x,b.y)}tk.fromPoints=ll;tk.prototype.clone=function(){return new tk(this.left,this.top,this.right,this.bottom)};tk.prototype.clone=tk.prototype.clone;function tl(a,b){kl.call(this,a,b)}u(tl,kl);t("H.map.layer.TileLayer",tl);tl.prototype.Kd=function(a,b,c,d,e){if(!C(a,K))throw new D(this.Kd,0,a);if(E(b=+b))throw new D(this.Kd,1,b);b=zd(b);this.pixelProjection.Ra(b);a=this.Ve(a);var f=this.le(a,b);return this.bf(f,a.left>a.right,b,c,d,e)};tl.prototype.requestTiles=tl.prototype.Kd;function ul(a,b){b=b?Va(b):{};b.tileSize=b.tileSize||256;b.pixelRatio=b.pixelRatio||Te();b.max=24;this.a=new jl(a,b);this.b=new tl(this.a);b.minWorldSize=this.a.tileSize;b.provider=a;ul.l.constructor.call(this,b);this.tileSize=this.b.tileSize;this.c=A(this.c,this);this.a.addEventListener(this.a.v.Da,this.c);a.addEventListener(a.v.Da,this.c)}u(ul,jj);t("H.map.layer.ObjectLayer",ul);ul.prototype.c=function(a){a.currentTarget!==this.a&&a.target.type===Yg.SPATIAL||this.Za()};var vl={markers:gf,total:0};
ul.prototype.Jc=function(a,b,c){var d=this.qa,e;return d.providesMarkers()&&(e=d.requestMarkers(a,b,!0,c)).length?{markers:e,total:e.length}:vl};ul.prototype.requestMarkers=ul.prototype.Jc;ul.prototype.Ic=function(a,b,c){var d=this.qa,e;return d.providesDomMarkers()&&(e=d.requestDomMarkers(a,b,!0,c)).length?{markers:e,total:e.length}:vl};ul.prototype.requestDomMarkers=ul.prototype.Ic;var wl={tiles:gf,total:0};
ul.prototype.Kd=function(a,b,c,d){if(this.qa.providesSpatials()){var e=this.b.Kd(a,b,c,d);c||(c=this.a,e=Hk(),33<e-c.u&&(Bk(c.B),c.u=e),e=this.b.Kd(a,b,!0,d))}else e=wl;return e};ul.prototype.requestTiles=ul.prototype.Kd;ul.prototype.lb=function(a,b,c,d){return this.b.lb(a,b,c,d)};ul.prototype.requestTile=ul.prototype.lb;ul.prototype.Xc=function(a,b,c){this.b.Xc(a,b,c)};ul.prototype.cancelTile=ul.prototype.Xc;var xl={overlays:gf,total:0};
ul.prototype.Jd=function(a,b,c){var d=this.qa,e=xl;d.providesOverlays&&d.providesOverlays()&&(a=d.requestOverlays(a,b,!0,c),b=a.length)&&(e={overlays:a,total:b});return e};ul.prototype.requestOverlays=ul.prototype.Jd;ul.prototype.s=function(){this.a.C();this.b.C();this.qa.dispose();ul.l.s.call(this)};function yl(a,b,c,d){var e=new tk(0,0,0,0);yl.l.constructor.call(this);if(!a)throw new D(yl,0,a);if(!b)throw new D(yl,1,b);if(!c)throw new D(yl,2,c);if("object"!==typeof d)throw new D(yl,3,d+" is not an object");if("number"!==typeof d.pixelRatio)throw new D(yl,3,d.pixelRatio+" is not a number");this.ua=d.pixelRatio;this.zoom=0;this.kb=Cd(this.ua)/Md;this.ta=new gj;this.qd={1:e.clone(),2:e.clone(),4:e.clone()};this.m=new I(.5,.5);this.g=a;zl(this,this.ua);this.sc=A(this.sc,this);this.jc=A(this.jc,
this);this.Ab=A(this.Ab,this);a.startInteraction=this.sc;a.interaction=this.jc;a.endInteraction=this.Ab;a.addEventListener(a.v.Da,this.aa,!1,this);this.getCapabilities=this.getCapabilities;this.capture=this.capture;this.zoomAt=this.Ce;this.relaunch=this.ha;this.dispose=this.C;this.screenToGeo=this.Xa;this.geoToScreen=this.Ga;this.screenToLookAtData=this.Gg;this.B=b;this.rc=A(this.rc,this);this.control=A(this.control,this);this.zb=A(this.zb,this);b.startControl=this.rc;b.control=this.control;b.endControl=
this.zb;b.addEventListener(b.v.Da,this.lh,!1,this);this.c=c;this.sg=A(this.sg,this);this.ef=A(this.ef,this);this.ff=A(this.ff,this);this.rg=A(this.rg,this);c.addEventListener(jj.prototype.v.Da,this.sg,!1,this);c.addEventListener(c.v.De,this.ef,!1,this);c.addEventListener(c.v.Fe,this.ff,!1,this);c.addEventListener(c.v.Ge,this.rg,!1,this)}u(yl,F);t("H.map.render.RenderEngine",yl);
function zl(a,b){var c=a.g,d=c.width,e=c.height,f=c.padding,g=f.top,h=f.left,k=f.bottom;f=f.right;c=c.margin;var l=-(d+h-f)/2<<0,m=-(e+g-k)/2<<0;d+=l;e+=m;a=a.qd;a[1].set((l-c)*b,(m-c)*b,(d+c)*b,(e+c)*b);a[2].set(l*b,m*b,d*b,e*b);a[4].set((l+h)*b,(m+g)*b,(d-f)*b,(e-k)*b)}yl.prototype.aa=function(){zl(this,this.ua)};
yl.prototype.s=function(){var a=this.g,b=this.B,c=this.c;a.removeEventListener(a.v.Da,this.aa,!1,this);a.startInteraction===this.sc&&(a.startInteraction=sk.prototype.sc);a.interaction===this.jc&&(a.interaction=sk.prototype.jc);a.endInteraction===this.Ab&&(a.endInteraction=sk.prototype.Ab);b.removeEventListener(b.v.Da,this.lh,!1,this);b.startControl===this.rc&&(b.startControl=Al.prototype.rc);b.control===this.control&&(b.control=Al.prototype.control);b.endControl===this.zb&&(b.endControl=Al.prototype.zb);
c.removeEventListener(jj.prototype.v.Da,this.sg,!1,this);c.removeEventListener(c.v.De,this.ef,!1,this);c.removeEventListener(c.v.Fe,this.ff,!1,this);c.removeEventListener(c.v.Ge,this.rg,!1,this)};yl.prototype.Ji=function(a){this.Vg=a};yl.prototype.setAnimationCallback=yl.prototype.Ji;yl.prototype.Gi=function(){this.Vg=void 0};yl.prototype.resetAnimationCallback=yl.prototype.Gi;yl.prototype.control=function(){};yl.prototype.capture=function(){return Zb(Error("not implemented"))};
function Bl(a,b){a.style.transition="opacity 1.5s";De(a,"transitionend",b,!1);a.style.opacity=0}var Cl={ZOOM:1,HEADING:2,TILT:4,INCLINE:8,COORD:16};yl.InteractionModifiers=Cl;n=yl.prototype;n.v={vj:"render"};n.sg=function(a){this.Uk(a);this.ha()};n.ef=function(a){this.jf(a.idx,a.added)};n.ff=function(a){this.ui(a.idx,a.removed,a.type===this.c.v.Ge)};n.rg=function(a){a.removed&&this.ff(a);this.ef(a)};n.Uk=id;n.jf=function(a,b){this.Ph(a,b);0===a&&this.Jb();C(b,jj)&&Dl(this,b,!0);this.ve();this.ha()};
n.Jb=function(){var a=this.c.Oa();if(0<a.length){var b=a[0].max;this.Xg=a[0].min;this.Sg=b}else a=this.getCapabilities().lookAt.zoom,b=a.max,this.Xg=a.min,this.Sg=b;a=El(this,this.zoom);a!==this.zoom&&(this.zoom=a,this.ta.Ra(a),this.cb())};n.cb=function(a){this.R=this.nb();a&&(this.R.position=a);this.R.zoom=this.zoom-this.kb;this.R.position.alt=0};n.Ql=0;n.heading=180;n.nb=function(){return Fl(this,{position:this.ta.projection.xg(this.m),zoom:this.zoom,tilt:this.Ql,heading:this.heading})};
function Fl(a,b){b.tilt=Gl(a,b.tilt);b.heading=Hl(a,b.heading);b.incline=a.getCapabilities().lookAt.incline.min;return b}function El(a,b){var c=a.getCapabilities().lookAt.zoom;return Zd(b,xd(c.min,a.Xg),wd(c.max,a.Sg))}function Gl(a,b){a=a.getCapabilities().lookAt.tilt;return Zd(b,a.min,a.max)}function Hl(a,b){a=a.getCapabilities().lookAt.heading;return Zd((b%360+360)%360,a.min,a.max)}
function Dl(a,b,c){c=c?b.addEventListener:b.removeEventListener;c.call(b,b.v.tj,a.vi,!1,a);c.call(b,b.v.sj,a.vi,!1,a)}n.Ph=id;n.ui=id;n.bp=function(a,b){this.L={before:a,after:b}};yl.prototype.setOnRenderCallbacks=yl.prototype.bp;var Il={P2D:0,WEBGL:1,HARP:2};yl.EngineType=Il;var Jl={lookAt:{zoom:{min:-8,max:24},tilt:{min:0,max:85},incline:{min:0,max:0},heading:{min:0,max:360}},interaction:{ZOOM:Cl.ZOOM,COORD:Cl.COORD},capture:!0};t("H.map.render.webgl.capabilities",Jl);function Kl(a){var b,c=this,d=x.H.gl;Kl.l.constructor.call(this);this.a=b=d.Scene.create(x.URL.createObjectURL(of(JSON.stringify(Ll))),{viewport:a.viewport,container:a.tc,disableRenderLoop:!0,devicePixelRatio:a.devicePixelRatio,logLevel:"error"});a.Mo&&b.subscribe({load:a.Mo});b.subscribe({view_complete:function(){c.g=!0;a.Wk()}});var e=b.requestRedraw;b.requestRedraw=function(){e.apply(b);a.Wk()};this.i=A(this.i,this);this.f=A(this.f,this);this.j=0;this.c={};this.b={}}u(Kl,od);Kl.prototype.g=!1;
function Ml(a){a=a.a.sources;var b;for(b in a){var c=a[b];if(c.hasPendingCommands&&c.hasPendingCommands())return!0}return x.H.gl.Task.hasPendingTasks()}Kl.prototype.V=function(){var a=x.H.gl.Task;this.a.immediateRedraw();a.setState({user_moving_view:this.a.view.user_input_active});a.processAll();return this.g&&!this.a.dirty&&!this.a.building&&!Ml(this)&&!Object.keys(this.b).length};function Nl(a){a.g=!1;a.a.resetViewComplete()}function Ol(a){return a.a.view}
function Pl(a,b){function c(){var e=b.Oa(),f={},g={},h,k,l,m=++a.j,p,q;Eh(g,Ll);for(k=0;k<e.length;k++){var r=e[k];if(h=r.ga()){var v=h.ub();if(v.getState()===Zh.READY){var w=v.yd();if(!Ua(w)){delete w.cameras;delete w.camera;f[k]=w=Qh(w,k);!C(r,ul)&&w.sources&&Rh(w,h.uid);for(l in w.sources){var z=w.sources[l];z.max_zoom=wd(h.max,Jl.lookAt.zoom.max);z.max_display_zoom=r.max;z.min_display_zoom=r.min;if(q=h.tileSize)2<=d&&256<q&&h instanceof Ak&&(q/=2),z.tile_size=q}(p=v.fc())&&Sh(w,p);Eh(g,w)}}}}Eh(g.layers.skybox.draw.skybox.color,
g.scene.sky);a.a.config=g;return a.a.updateConfig().then(function(){var J={},G,U;if(m!==a.j)return!1;a.j=0;for(U in f){r=e[+U];var X=f[U].sources;for(G in X)if(X=a.a.sources[G])J[G]=X,X.initialize&&r.getProvider()&&X.initialize(r.getProvider(),a.i,a.a.getWorkers().length,X.tiled?B:a.a.tile_manager.getWorkerForTile(y,X))}for(G in a.c)!J[G]&&a.c[G].dispose&&a.c[G].dispose();a.c=J;return!0})}var d=a.a.pixelRatio();a.a.initialized?c():a.a.load(y,{blocking:!1}).then(c)}
Kl.prototype.i=function(a,b,c){var d=this,e=this.a.sources[a],f=c&&c.isReload;b?!0!==this.b[a]&&(this.b[a]||(this.b[a]={Pl:{},Bj:[]}),C(b,Tk)?this.b[a].Pl[b.x+"/"+b.y+"/"+b.z]=!0:(b=b.boundingBox,this.b[a].Bj.push(new K(b[0],b[1],b[2],b[3])))):this.b[a]=!0;e&&e.has_volatile_data?Ql(this,f):(x.clearTimeout(this.m),this.m=x.setTimeout(function(){return Ql(d,f)},Rl))};var Rl=100;
Kl.prototype.f=function(a){var b=!1,c=this.b[a.source.name],d=x.H.gl;if(c)if(!0===c)b=!0;else{var e=d.Tile.coord(d.Geo.wrapTile(a.coords));b=!!c.Pl[e.key];if(!b){var f=d.Geo.getTileBoundingBox(e,a.source.tile_size,ch.MAX_LINE_WIDTH/2);f=eg(f.getTopLeft(),f.getBottomRight());b=c.Bj.some(function(g){return g.Cd(f,!0)||f.sd(g.hb(),!0)})}}return b};function Ql(a,b){var c=a.a.tile_manager;c.removeTiles(a.f);c.updateTilesForView();b&&c.removeCachedTiles(a.f);Nl(a);a.b={}}Kl.prototype.yd=function(){return this.a.config};
function Sl(a,b,c,d){a.a.getFeatureAt(b,c,d);a.a.update()}function Tl(a){return a.a.screenshot(void 0).then(function(b){return new Pb(function(c,d){new Mj(URL.createObjectURL(b.blob),function(e,f){1===e?c(f.getData()):d()},!1)})})}Kl.prototype.ab=function(){return this.a.pixelRatio()};Kl.prototype.s=function(){var a=this.c;Kl.l.s.call(this);this.a.destroy();this.b={};a&&Object.keys(a).forEach(function(b){a[b].dispose()});x.clearTimeout(this.m);this.c=this.a=null};
var Ll={scene:{background:{color:"#FFFFFF"},sky:{zenith:"#347BC0",horizon:"#EDF2F9",fog:"#FFFFFF"}},lights:{default_light:{type:"directional",name:"default_light",visible:!0}},camera:{type:"perspective"},styles:{},fonts:{},sources:{skybox:{type:"SkyBox"}},layers:{skybox:{data:{source:"skybox"},draw:{skybox:{color:{}}}}},global:{}};var hk={FEATURE:1,SOURCE:2,PROVIDER:3};t("H.map.provider.PickingMode",hk);function Ul(a){return a}t("H.util.animation.ease.LINEAR",Ul);t("H.util.animation.ease.EASE_IN_QUAD",function(a){return a*a});function Vl(a){return-a*(a-2)}t("H.util.animation.ease.EASE_OUT_QUAD",Vl);t("H.util.animation.ease.EASE_IN_OUT_QUINT",function(a){a*=2;return 1>a?Ed(a,5)/2:(a-=2,Ed(a,5)/2+1)});function Wl(a){return 1-Math.sqrt(1-a*a)}function Xl(a){return Dd(2*a-a*a)}t("H.util.animation.ease.EASE_OUT_CIRC",Xl);function Yl(a){return 1-Math.cos(a*Math.PI/2)}
function Zl(a){return Math.sin(a*Math.PI/2)};function $l(a,b){this.a={tilt:am(a.tilt,b.tilt),heading:am(a.heading,b.heading),zoom:b.zoom-a.zoom};var c=this.b=$f(a.position),d=b.position;a=d.lat*Sd;var e=c.lat*Sd;d=d.lng*Sd-c.lng*Sd;c=Gd(d)*Id(a);a=Id(e)*Gd(a)-Gd(e)*Id(a)*Id(d);a=Math.atan2(c,a);this.j=(0<=a?a:Qd+a)*Td;this.c=this.b.$a(b.position);b=this.a.zoom;this.i=0===b?this.f:Object.assign({},this.f,{zoom:0>b?Xl:Wl,position:0>b?Yl:Zl});this.g=Object.assign({},{tilt:0,heading:0,zoom:0})}
function am(a,b){a=b-a;return-180<a&&180>=a?a:180<a?a-360:a+360}$l.prototype.f={tilt:Ul,heading:Ul,zoom:Ul,position:Ul};function bm(a,b){if(E(this.x=+a))throw new D(bm,0,a);if(E(this.y=+b))throw new D(bm,1,b);}bm.prototype.add=function(a){return new bm(this.x+a.x,this.y+a.y)};bm.prototype.a=function(a){if(!C(a,bm))throw new D(this.a,0,a);a=this.b(a);return a.x+a.y};bm.prototype.b=function(a){if(!C(a,bm))throw new D(this.b,0,a);return new bm(this.x*a.x,this.y*a.y)};bm.prototype.Ra=function(a){return new bm(this.x*a,this.y*a)};function cm(a){return Dd(a.a(a))};function dm(a){a=a||hf;this.eb=uc(a.Go)?a.Go:3;this.W=uc(a.Eo)?a.Eo:300;this.u=uc(a.qp)?a.qp:3;this.A=uc(a.lp)?a.lp:50;this.f=[];this.clear()}t("H.map.render.InteractionUtils",dm);dm.prototype.ko=function(){return this.c};dm.prototype.isGestureDetected=dm.prototype.ko;dm.prototype.start=function(a,b){var c=Cl.HEADING,d=Cl.TILT;this.a&&this.clear();this.i=a;this.m=!!b;this.a=!0;this.c=!(a&(c|d))||a===c||a===d};dm.prototype.start=dm.prototype.start;
dm.prototype.store=function(a,b,c,d,e){var f=!1;if(this.a){a=new em(a,b,c,d,e);f=a.c;this.o=this.b;this.b=a;if(this.g){if(this.j=!0,f){b=this.i;var g=this.c;if(!g&&this.j){e=Cl.HEADING;var h=Cl.TILT;c=Cl.COORD;d=Cl.ZOOM;var k=b&(c|h)?this.ee(!0):fm;var l=b&d?this.Zf(!0):1;var m=b&e?Bd(this.xh(!0)):0;var p=Bd(k.x);var q=Bd(k.y);k=10<p||10<q;p=10<q&&q>3*p;l=.8>l||1.2<l;m=7<m;b&h&&(m||l||k&&!p?gm(this,h):p&&(gm(this,~h>>>0),g=!0));!g&&b&e&&b&(c|d)&&(l||k?(gm(this,e),g=!0):m&&(gm(this,h),g=!0));this.c=
g}}}else this.g=a,f||(this.c=!0);this.m&&this.f.push(a)}return f};dm.prototype.store=dm.prototype.store;dm.prototype.clear=function(){this.f.length=0;this.a=this.m=this.j=this.c=!1;this.g=this.o=this.b=void 0};dm.prototype.clear=dm.prototype.clear;dm.prototype.Fc=function(a){return 0<(this.i&a)};dm.prototype.isModifierEnabled=dm.prototype.Fc;function gm(a,b){a.i^=a.i&b}dm.prototype.xa=function(){return this.a};dm.prototype.isRunning=dm.prototype.xa;var fm=pc(new bm(0,0));
dm.prototype.xc=function(){var a;if(this.m){var b=this.f;var c=b.length;var d=0;for(a=new bm(0,0);--c&&d<this.u;)a=a.add(hm(b[c-1],b[c])),d++}else a=this.ee();b=a;c=cm(b);return 0!==c?new bm(b.x/c,b.y/c):b};dm.prototype.getDirection=dm.prototype.xc;
dm.prototype.Db=function(a){a=a||Hk();var b,c;if(this.m){var d=this.f;var e=this.f.length;var f=this.f[e-1];for(c=b=0;--e&&b<this.u;)c+=cm(hm(d[e],d[e-1])),b++;d=c/b}else f=this.b,d=cm(this.ee());return d=d>=this.eb&&a-f.timestamp<=this.A?d>this.W?this.W:d:0};dm.prototype.getSpeed=dm.prototype.Db;dm.prototype.Yf=function(){return this.b?im(this.b):B};dm.prototype.getBifocalCenter=dm.prototype.Yf;dm.prototype.ee=function(a){return(a=a?this.g:this.o)?hm(a,this.b):new bm(0,0)};
dm.prototype.getMoveVector=dm.prototype.ee;dm.prototype.Zf=function(a){var b=1;if(this.j){var c=this.b;a=a?this.g:this.o;if(a=jm(a))if(c=jm(c))b=c/a}return b};dm.prototype.getBifocalScaling=dm.prototype.Zf;dm.prototype.xh=function(a){if(this.j){var b=a?this.g:this.o,c=this.b;a=b.b;var d=c.b,e=0;a&&d&&(b=b.a,c=c.a,e-=Ld(d.y-c.y,d.x-c.x)*Td-Ld(a.y-b.y,a.x-b.x)*Td);a=e}else a=0;return a};dm.prototype.getBifocalRotation=dm.prototype.xh;
function em(a,b,c,d,e){this.a=new I(a,b);c!==B&&(this.b=new I(c,d),this.c=!0);this.timestamp=e!==B?e:Hk()}em.prototype.c=!1;function im(a){var b=a.a;return(a=a.b)?new I(b.x-(b.x-a.x)/2,b.y-(b.y-a.y)/2):B}function km(a,b){var c=a.a;return(a=a.b)&&a.$a(b)<c.$a(b)?a:c}function hm(a,b){var c=a.b,d=b.b;d&&c?(b=im(b),a=im(a)):c?(b=b.a,a=km(a,b)):d?(a=a.a,b=km(b,a)):(b=b.a,a=a.a);return new bm(b.x-a.x,b.y-a.y)}function jm(a){var b=a.b;return b?a.a.$a(b):0};function lm(){F.call(this);this.reset()}u(lm,F);lm.prototype.start=function(a,b){this.a&&this.reset();E(a-b)||(this.b=+a,this.c=+b);this.a=!0};lm.prototype.reset=function(){this.a=!1;this.b=this.c=null;this.f=new mm(0,0,0,0,0,0)};lm.prototype.xa=function(){return this.a};lm.prototype.v={Ug:"animationupdate"};function nm(a){nm.l.constructor.call(this,lm.prototype.v.Ug);this.c=a}u(nm,sd);
lm.prototype.set=function(a,b,c,d,e,f){var g=this.f;this.a&&(a=new mm(a/1E3,b/1E3,c/1E3,d/1E3,e/1E3,f/1E3),g.oa(a)||(this.f=a,this.dispatchEvent(new nm(om(this)))))};function om(a){return x.Object.create(a.f)}lm.prototype.Db=function(){return om(this).Db()};lm.prototype.xc=function(){var a=om(this),b=this.Db()||1;return new mm(a.ob/b,a.pb/b,a.qb/b,a.we,a.xe,a.wf)};lm.prototype.s=function(){this.reset();lm.l.s.call(this)};
function mm(a,b,c,d,e,f){this.ob=a;this.pb=b;this.qb=c;this.we=d;this.xe=e;this.wf=f}mm.prototype.Db=function(){return Dd(this.ob*this.ob+this.pb*this.pb+this.qb*this.qb)};mm.prototype.xc=function(){var a=this.Db()||1;return new mm(this.ob/a,this.pb/a,this.qb/a,this.we,this.xe,this.wf)};mm.prototype.oa=function(a){return!!a&&this.ob===a.ob&&this.pb===a.pb&&this.qb===a.qb&&this.we===a.we&&this.xe===a.xe&&this.wf===a.wf};function pm(a,b,c,d){pm.l.constructor.call(this);this.tc=a;this.ua=d;this.a=a.appendChild(this.createElement(a.ownerDocument));this.yf(b,c)}u(pm,od);pm.prototype.K=function(){return this.a};pm.prototype.yf=function(a,b){this.size?(this.size.w=a,this.size.h=b):this.size=new Ti(a,b);this.Gl(this.a,this.a.style,a,b,this.ua)};pm.prototype.setSize=pm.prototype.yf;n=pm.prototype;n.Cb=function(){return this.size};n.ab=function(){return this.ua};n.yk=!0;
n.wb=function(a){a!==this.yk&&(this.a.style.display=a?"block":"none",this.yk=a)};n.ei=1;n.oc=function(a){this.ei!==a&&(this.Dk(a),this.ei=a)};n.ed=function(){return this.ei};n.Ae=function(a){this.a.style.zIndex=a};pm.prototype.setZIndex=pm.prototype.Ae;n=pm.prototype;n.kk=function(){return+this.a.style.zIndex};n.$c=function(){};n.clear=function(){};n.s=function(){this.clear();this.tc.removeChild(this.a);this.yf(0,0);this.a=this.tc=null;pm.l.s.call(this)};n.kl=0;n.Fg=function(){++this.kl};
n.release=function(){--this.kl||this.C()};function qm(a,b,c,d){qm.l.constructor.apply(this,arguments)}u(qm,pm);t("H.map.render.dom.Surface",qm);n=qm.prototype;n.Zd=function(){return"dom"};n.createElement=function(a){a=a.createElement("DIV");a.style.position="absolute";a.style.pointerEvents="none";return a};n.Gl=function(a,b,c,d){b.width=c+"px";b.height=d+"px"};n.Dk=function(a){this.a.style.opacity=a};
n.$c=function(a,b,c){var d=this.ua,e=a.style;e[yf("transform")]="matrix(1,0,0,1,"+b/d+","+c/d+")";a.parentNode!==this.a&&(e.position="absolute",this.a.appendChild(a),this.a.style.pointerEvents="auto","auto"===getComputedStyle(a).pointerEvents&&(a.style.pointerEvents="all"),this.a.style.pointerEvents="none")};n.clear=function(a){a?this.a.removeChild(a):this.a.innerHTML=""};function rm(a,b,c,d,e,f){var g=e||"2d";rm.l.constructor.apply(this,arguments);this.b=this.a.getContext(g,f);this.c="2d"===g;this.f=g;this.Ek=f}u(rm,pm);n=rm.prototype;n.createElement=function(a){a=a.createElement("canvas");var b=a.style;b.position="absolute";b.top=b.left="0";return a};n.Gl=function(a,b,c,d,e){a.width=xd(c,1);a.height=xd(d,1);b.width=yd(c/e)+"px";b.height=yd(d/e)+"px"};n.Dk=function(a){this.b.globalAlpha=a};n.$c=function(a,b,c,d,e){this.c&&this.b.drawImage(a,b,c,d,e)};
n.getContextAttributes=function(){return this.Ek};n.Zd=function(){return this.f};n.clear=function(a){var b,c;this.c&&(a?this.b.clearRect(b=a.left,c=a.top,a.right-b,a.bottom-c):this.a.width=this.size.w)};n.s=function(){this.a.width=this.a.height=0;this.b=y;rm.l.s.call(this)};function sm(a){this.jb=a}u(sm,od);sm.prototype.tb=function(){return this.jb};sm.prototype.getLayer=sm.prototype.tb;sm.prototype.Nn=function(){return this.xb};sm.prototype.getSurface=sm.prototype.Nn;sm.prototype.nd=function(a){var b=this.xb;a!==b&&(this.xb=a,a.Fg(),b&&b.release())};sm.prototype.setSurface=sm.prototype.nd;sm.prototype.s=function(){this.xb.release()};sm.prototype.ke=function(){};sm.prototype.render=sm.prototype.V;function tm(a){var b="dom";tm.l.constructor.call(this,a);C(this.jb,um)&&(b="2d"===a.Zd()?"2d":"webgl");this.a=b}u(tm,sm);tm.prototype.V=function(a,b,c,d,e,f,g,h){g=this.jb;var k=this.xb,l=!(C(k,rm)&&"2d"===k.Zd());if(d>=g.min&&d<=g.max)return l&&k.wb(!0),g.V(k.K(),{boundingBox:a,zoom:d,screenCenter:b,priorityCenter:f,projection:c,cacheOnly:e,size:k.Cb(),pixelRatio:k.ab(),cameraMatrix:h});l&&k.wb(!1);return rk.DONE};tm.prototype.ke=function(){return this.a};function vm(a,b,c,d,e){if(!Da(a.Ji)||!Da(a.Gi))throw new D(vm,0,a);this.b=a;if(!Da(this.i=b))throw new D(vm,1,b);if(E(this.g=+c))throw new D(vm,2,c);if(!Da(this.f=d)&&null!=d)throw new D(vm,3,d);if(!Da(this.c=e)&&null!=e)throw new D(vm,4,e);this.id=(new bf).next();this.a=!1}t("H.util.animation.Animation",vm);
vm.prototype.start=function(){var a=this;this.Pc=Hk();this.a=!0;var b=this.Pc;this.b.Ji(function(){if(a.a){var c=Hk(),d=c-a.Pc,e=d/a.g,f=!1;1<=e&&(e=1,f=!0);a.i(a.c?a.c(e):e,d,c-b,c);b=c;f&&a.stop()}else a.stop()})};vm.prototype.start=vm.prototype.start;vm.prototype.stop=function(a){this.a=!1;this.b.Gi();a||this.f&&this.f(this)};vm.prototype.stop=vm.prototype.stop;vm.prototype.xa=function(){return this.a};vm.prototype.isRunning=vm.prototype.xa;function wm(a,b){wm.l.constructor.call(this,a);this.vc=!(!b||!b.vc);this.f={}}u(wm,sm);wm.prototype.nd=function(a){wm.l.nd.call(this,a);this.g=a.tc.ownerDocument};wm.prototype.setSurface=wm.prototype.nd;var xm=function(a,b){b=b.ea();return C(b,th)?b.pa:(a[0]=b,a)}.bind(null,[]);
wm.prototype.V=function(a,b,c,d,e,f,g){var h=this.jb,k,l,m,p;this.m=b=this.f;this.f=c={};if(d>=h.min&&d<=h.max){var q=this.Sj(a,d,e,f);var r=q.markers;if(a=r.length){d=[];e=this.xb;for(f=0;f<a;f++){h=r[f];var v=xm(h);for(k=v.length;k--;)if(l=g(v[k]))(p=b[m=h.ib()+"_"+k])?delete b[m]:p={Pk:h},c[m]=p,d.push([p,h,h.Bb(),e,l.x,l.y])}d.sort(ym);a=d.length;for(f=0;f<a;f++)this.ml.apply(this,d[f])}}return!q||q.requested&&q.requested===q.total||!q.requested&&r.length===q.total?rk.DONE:rk.PENDING};
wm.prototype.render=wm.prototype.V;function ym(a,b){var c=a[1].fd(),d=b[1].fd();return Zg(c,d,!0)||a[5]-b[5]||Zg(c,d,!1)}wm.prototype.Ha=function(){};wm.prototype.getObjectsAt=wm.prototype.Ha;function zm(a,b){zm.l.constructor.apply(this,arguments);this.c=0;this.a=[];this.b=A(this.b,this)}u(zm,wm);t("H.map.render.dom.MarkerRenderer",zm);zm.prototype.Sj=function(){return this.jb.Ic.apply(this.jb,arguments)};zm.prototype.V=function(a,b,c,d,e,f,g){this.b();this.j=0;var h=zm.l.V.apply(this,arguments);var k=this.xb,l=this.m,m;for(m in l)Am(this,k,l[m]);return 0===this.a.length&&h?rk.DONE:rk.PENDING};zm.prototype.render=zm.prototype.V;
zm.prototype.nd=function(a){zm.l.nd.call(this,a);this.i=a.ab()};zm.prototype.setSurface=zm.prototype.nd;zm.prototype.b=function(){for(var a=this.a.length,b,c,d;a--;)d=this.a[a],b=d.Hf,c=d.Hf.Bb(),c.si(d,c,b);this.a.length=0};zm.prototype.ml=function(a,b,c,d,e,f){var g;var h=d.ab();var k=b.Pb();e*=h;f*=h;this.vc||(e=yd(e),f=yd(f));a.detail&&(k.oe(a.fo)?Am(this,d,a):g=a.detail);g||(a.detail=g=c.Vj(this.g),this.c++,Da(c.si)&&this.a.push(g));a.fo=k.a;g.style.zIndex=this.j++;g.Hf=b;d.$c(g,e,f,0,0)};
var Bm,Cm="pointer-events",Dm;if(Ze){var Em;Ze&&Zc!==y&&(Zc=(Em=/(MSIE\s+|rv:)([^\);]+)(\)|;)/.exec(navigator.userAgent))?+Em[2]:y);Dm=Zc;9===Dm?Cm="display":10===Dm&&(Cm="visibility")}Bm=Cm;
zm.prototype.Ha=function(a,b,c){var d=this.i,e=gf,f,g,h,k,l;if(this.c){a/=d;b/=d;d=this.g;var m=d.documentElement;var p=this.xb.K();var q=p.getBoundingClientRect();a+=q.left;for(b+=q.top;(g=h=d.elementFromPoint(a,b))&&g!==p&&g!==m&&h!==r;){for(;(k=g.parentNode)&&(!Da(k.contains)||!k.contains(p));)g=k;if(k===p&&(g!==h||"svg"!==g.nodeName)&&0>e.indexOf(l=g.Hf)&&(e===gf&&(e=[]),e.push(l),c))break;f||(f=[]);var r=g.style;f.push({Gj:r.getPropertyValue(Bm),eo:r.getPropertyPriority(Bm),style:r});r.setProperty(Bm,
"visibility"===Bm?"hidden":"none","important");r=h}if(f)for(b=f.length;b--;)a=f[b],a.style.removeProperty(Bm),Ac(a.Gj)&&a.style.setProperty(Bm,a.Gj,a.eo)}return e};zm.prototype.getObjectsAt=zm.prototype.Ha;zm.prototype.ke=function(){return"dom"};function Am(a,b,c){b.clear(b=c.detail);delete b.Hf;a.c--;c=(a=c.Pk).Bb();c.b&&c.b(b,c,a)}zm.prototype.s=function(){this.a.length=0;var a=this.xb,b=this.f,c;for(c in b)Am(this,a,b[c]);this.xb.C();zm.l.s.call(this)};function um(a,b){var c=b||{},d=c.contextType;c=c.contextAttributes;um.l.constructor.call(this,b);xc(a,"Function",um,0,"invalid render callback");if(d){if(-1===Fm.indexOf(d))throw new D(um,1,"invalid context type");this.ai=d}c&&(this.b=c);this.c=a}u(um,jj);t("H.map.layer.CanvasLayer",um);var Fm=["2d","webgl","webgl2","experimental-webgl"];n=um.prototype;n.ai="2d";n.Zd=function(){return this.ai};n.getContextAttributes=function(){return this.b};
n.V=function(a,b){this.a&&this.a.canvas===a||(this.a=a.getContext(this.ai,this.b));return this.c(this.a,b)};n.s=function(){um.l.s.call(this);this.a=B};function Gm(a,b){Gm.l.constructor.call(this,b);xc(a,"Function",Gm,0,"invalid render callback");this.a=a}u(Gm,jj);t("H.map.layer.DomLayer",Gm);Gm.prototype.V=function(a,b){return this.a(a,b)};function Hm(a,b){if(E(this.b=+a))throw new D(Hm,0,a);this.a=0;b&&this.Bl(b)}t("H.util.kinetics.KineticMove",Hm);Hm.prototype.Bl=function(a){this.a=a;return this};Hm.prototype.setInitialSpeed=Hm.prototype.Bl;Hm.prototype.Tm=function(){return Math.abs(this.a/this.b)};Hm.prototype.getDuration=Hm.prototype.Tm;Hm.prototype.Ye=function(a){return this.a+this.b*a};Hm.prototype.getCurrentSpeed=Hm.prototype.Ye;Hm.prototype.Om=function(a){return this.a*a+this.b*a*a/2};Hm.prototype.getCurrentPath=Hm.prototype.Om;function Im(a,b){this.a=a;this.b=b}
function Jm(a,b,c){var d=[],e={tc:a.a,width:b.w,height:b.h,ua:a.b};for(a=0;a<c.length;a++){b=c[a];var f=b.ke();var g={};Xa(g,e);var h=b.xb;switch(f){case "2d":C(b.tb(),um)&&(g.kh=b.tb().getContextAttributes());if(f=m&&"2d"===m.Zd()){f=g.kh;var k=m.Ek;f=k===f?!0:k&&!f?!k.alpha&&!k.willReadFrequently:f&&!k?!f.alpha&&!f.willReadFrequently:!f.alpha===!f.alpha&&!k.willReadFrequently===!f.willReadFrequently}if(f)var l=!1;else if(h&&!l){var m=h;l=!1}else m=new rm(g.tc,g.width,g.height,g.ua,"2d",g.kh),l=
!0;break;case "dom":m=h||new qm(g.tc,g.width,g.height,g.ua);l=!h;break;default:m=h||new rm(g.tc,g.width,g.height,g.ua,b.tb().Zd(),g.kh),l=!h}d[d.length-1]!==m&&(m.Ae(d.length),d.push(m));b.nd(m)}return d};t("H.util.events.listenOnce",De);t("H.util.events.dispatchEvent",function(a,b){return a.dispatchEvent(b)});t("H.util.events.fireListeners",function(a,b,c,d){return me(a)?a.wd(b,c,d):Me(a,b,c,d)});t("H.util.events.listen",Ce);t("H.util.events.unlisten",Ke);var Km=Ne;
Ne=function(a,b){var c,d,e=!0;var f=b[b.currentTarget===b.target?"AT_TARGET":a.capture?"CAPTURING_PHASE":(c=!0,"BUBBLING_PHASE")];if(!c||"pointerenter"!==(d=b.type)&&"pointerleave"!==d)b.eventPhase=f,e=Km(a,b),c&&a.src&&a.src.Qb&&null===a.src.Qb()&&delete b.eventPhase;return e};function Al(){Al.l.constructor.call(this);this.b={};this.a={position:new Yf(0,0),zoom:0,heading:180,incline:0,tilt:0,bounds:new O(Pg([90,-180,90,0,90,180,-90,180,-90,-180]))}}u(Al,F);t("H.map.ViewModel",Al);Al.prototype.v={Da:"update",He:"sync"};
Al.prototype.$b=function(a,b){if(!a)throw new D(this.$b,0,a);var c=a[Lm];if(uc(c)&&!Zf(c))throw new D(this.$b,0,Lm);c=a[Mm];if(uc(c)&&E(+c))throw new D(this.$b,0,Mm);c=a[Nm];if(uc(c)&&!C(c,Xf))throw new D(this.$b,0,Nm);a=x.Object.assign({},a);c=Om(a,this.b,this.a);Pm(this,this.b,a);this.dispatchEvent(new Qm(this.b,c,b));return this};Al.prototype.setLookAtData=Al.prototype.$b;Al.prototype.nb=function(){var a={};a[Lm]=$f(this.a[Lm]);Pm(this,a,this.a,!0);return a};Al.prototype.getLookAtData=Al.prototype.nb;
var Lm="position",Mm="zoom",Nm="bounds",Rm={uj:Lm,xj:Mm,oj:"heading",wj:"tilt",pj:"incline",lj:Nm},Sm=Object.keys(Rm).map(function(a){return Rm[a]});
function Pm(a,b,c,d){a.g={};a.f={};a.c=[];for(var e=a.j,f=a.i,g=Sm.length,h,k,l;g--;)if(h=Sm[g],l=c[h],k=b[h],null==k||!d)if(null!=l){uc(e)&&e.call(a,h,k,l);var m=h,p;(p="position"!==h)||(p=l,p=!p||E(p.lat)||E(p.lng)?!1:!0);b[m]=p?l:$f(l);if(uc(f)){switch(h){case "position":k=l&&k&&(l.lat!==k.lat||l.lng!==k.lng);break;case "bounds":k=l&&k&&!l.oa(k);break;default:k=l!==k}k&&f.call(a,h)}}else delete b[h]}Al.prototype.j=function(a,b,c){this.g[a]=b;this.f[a]=c};Al.prototype.i=function(a){this.c.push(Tm[a])};
var Tm=Sm.reduce(function(a,b){a[b]=aj[b.toUpperCase()];return a},{});function Om(a,b,c){var d=0;["tilt","incline","heading",Mm].forEach(function(e){if(E(a[e])){var f=E(b[e])?c[e]:b[e];a[e]=f}else d|=Tm[e]});[Lm,Nm].forEach(function(e){a[e]?d|=Tm[e]:a[e]=b[e]||c[e]});return d}Al.prototype.cb=function(a){var b={},c={};Pm(this,this.a,a);this.b={};b.lookAt=this.f;c.lookAt=this.g;a=this.c;a=a.length?a.reduce(Um):0;this.dispatchEvent(new $i(this.v.He,b,c,a))};Al.prototype.synchronize=Al.prototype.cb;
function Um(a,b){return a|b}Al.prototype.zf=function(a,b){if(E(a=+a))throw new D(this.zf,0,Mm);this.$b({zoom:a},b)};Al.prototype.vb=function(){return this.a.zoom};Al.prototype.rc=Oc;Al.prototype.startControl=Al.prototype.rc;Al.prototype.control=Oc;Al.prototype.control=Al.prototype.control;Al.prototype.zb=Oc;Al.prototype.endControl=Al.prototype.zb;function Qm(a,b,c){Qm.l.constructor.call(this,Al.prototype.v.Da,a,null,b);this.b=this.animate=!!c}u(Qm,$i);function S(a,b,c,d){S.l.constructor.call(this,a,b,c,d);this.Hb=new Lk(100);this.T=new I(0,0);this.Se=!!d.enableSubpixelRendering;this.Tc=Vm;this.o=new dm;this.i=d=new lm;this.Uc=A(this.Uc,this);d.addEventListener(d.v.Ug,this.Uc);d=a.element;this.U=a=d.ownerDocument.createElement("div");a.style.position="absolute";a.style.width=a.style.height="100%";a.style.zIndex=0;d.insertBefore(a,d.firstChild);this.Rd=new Im(this.U,this.ua);this.ma=b.nb().position;b=x.H.gl;if(!b)throw new Yc(S,'"H-webgl" module is missing');
this.a=new Kl({viewport:this.g,tc:this.U,devicePixelRatio:this.ua,Wk:A(this.ha,this)});b.WorkerBroker.addTarget("model",lj);b=this.c.Oa();a=0;d=b.length;this.j={Zc:[],ja:[]};for(this.f=b;a<d;a++){var e=b[a];this.jf(a,e);Dl(this,e,!0)}this.Jb();this.Vc=A(this.Vc,this);this.gi=A(this.gi,this);this.Ga=A(this.Ga,this);c.addEventListener(jj.prototype.v.Ee,this.Vc);this.sa=Wm;this.zoom=El(this,this.B.vb());this.Jb();this.aa()}u(S,yl);t("H.map.render.webgl.RenderEngine",S);
S.prototype.nb=function(){var a=this.ma;return Fl(this,{position:{Ak:a.Ak,Ck:a.Ck},zoom:this.zoom,tilt:this.Ql,heading:this.heading})};S.prototype.Vc=function(a){a=(a=a.target.ga())&&a.ub();(a&&a.getState())===Zh.INIT?a.load():(Nl(this.a),Pl(this.a,this.c),this.ha())};S.prototype.type=Il.WEBGL;var Wm=2;S.prototype.getState=function(){return this.sa};S.prototype.getState=S.prototype.getState;function Xm(a,b,c){b=c-b;a=Ed(2,8+a.zoom);return b<a/2?b:b-a*c/Bd(c)}
function Ym(a,b,c){function d(h){return e[h]+am(e[h],b[h])/2}if(!(c&aj.POSITION||c&aj.BOUNDS))return null;var e=Ol(a.a).getLookAtData();c=e.position;var f=b.position,g=b.bounds;if(Ai(e.bounds,f.lat,f.lng,!1)||g&&Ai(g,c.lat,c.lng,!1))return null;c=Zm(a,{tilt:d("tilt"),heading:d("heading"),incline:0,bounds:fg([c,f])});c.zoom=El(a,c.zoom-.5);delete c.bounds;return c}S.prototype.rd=!1;
function $m(a,b,c,d){a=a.getCapabilities().lookAt[d];a=a.max-a.min;return Bd("zoom"===d?c[d]-b[d]:am(b[d],c[d]))/a||0}function an(a,b,c){a=xd(8*$m(a,b,c,"zoom"),$m(a,b,c,"heading"),$m(a,b,c,"tilt")/2);return Zd(3E3*a,300,4E3)}
S.prototype.lh=function(a){var b=this,c=a.newValue,d=a.modifiers,e=Ol(this.a);bn(this);this.T.set(0,0);var f=cn(this,c);Sm.forEach(function(l){d&a[l.toUpperCase()]||delete f[l]});if(a.b){e=Ol(this.a).getLookAtData();var g=Zm(this,f);c=Ym(this,g,d);var h=function(){return b.rd=!1};delete g.bounds;this.rd=!0;if(c){e=an(this,e,c);var k=an(this,c,g);dn(this,c,e,function(){return dn(b,g,k,h)})}else c=an(this,e,g),dn(this,g,c,h)}else en(f),e.setLookAtData(f);fn(this);Nl(this.a);this.ha()};
function Zm(a,b){en(b);return Ol(a.a).getBestLookAtData(b)}function en(a){var b=a.bounds;!b||b instanceof O||(a.bounds=wi(b.G()))}function gn(a,b,c){Ol(a.a).setLookAtData(b);Nl(a.a);fn(a);a.ha();c&&setTimeout(c,0)}
function dn(a,b,c,d){var e=Ol(a.a).getLookAtData(),f=new $l(e,b);0!==f.a.tilt+f.a.heading+f.a.zoom+f.c?hn(a,function(g){for(var h in f.a)if(0!==f.a[h]){var k=f.i[h](g);e[h]+=f.a[h]*(k-f.g[h]);f.g[h]=k}0!==f.c&&(e.position=f.b.Qg(f.j,f.c*f.i.position(g),!0));return gn(a,e)},c,function(){return gn(a,b,d)}):gn(a,b,d)}S.prototype.Hg=function(){};S.prototype.setAnimationDuration=S.prototype.Hg;S.prototype.vh=function(){};S.prototype.getAnimationDuration=S.prototype.vh;S.prototype.Ig=function(){};
S.prototype.setAnimationEase=S.prototype.Ig;S.prototype.wh=function(){};S.prototype.getAnimationEase=S.prototype.wh;S.prototype.Eg=function(){};S.prototype.resetAnimationDefaults=S.prototype.Eg;function jn(a,b){a.Hb.ra(function(c,d){return d.Qb()===b})}n=S.prototype;n.Uk=function(a){jn(this,a.target.ga());Nl(this.a);this.ha()};n.jf=function(a,b){S.l.jf.call(this,a,b);kn(b)&&(Nl(this.a),(a=(a=b.ga())&&a.ub())&&a.getState()===Zh.INIT&&a.load())};
n.ui=function(a,b,c){var d;this.Ea=Hk();jn(this,b.ga());if(b.requestDomMarkers||C(b,um)||C(b,Gm)){var e=this.j.ja;for(d=e.length;d--;){var f=e[d];if(f.tb()===b){e.splice(d,1);f.C();break}}}kn(b)&&Pl(this.a,this.c);this.f=this.c.Oa();0===a&&(Dl(this,b,!1),this.Jb());Jm(this.Rd,ln(this),this.j.ja.filter(uc));this.ve();c||this.ha()};function kn(a){return!(C(a,Gm)||C(a,um))}n.vi=function(){this.Jb()};
n.Jb=function(){S.l.Jb.call(this);var a=this.getCapabilities().lookAt.zoom;Ol(this.a).setZoomConstraints(xd(a.min,this.Xg),wd(a.max,this.Sg))};n.Ph=function(a,b){var c;if(b){a={vc:this.Se,kb:this.kb};b.V?C(b,um)?c=new tm(b):C(b,Gm)&&(c=new tm(b)):b.requestDomMarkers&&(c=new zm(b,a));if(c){this.j.ja.push(c);var d=this.c.Oa();this.j.ja.sort(function(e,f){return d.indexOf(e.jb)-d.indexOf(f.jb)});Jm(this.Rd,ln(this),this.j.ja.filter(uc))}kn(b)&&Pl(this.a,this.c)}this.f=this.c.Oa()};
function cn(a,b){var c=b.position;return Fl(a,{zoom:El(a,b.zoom),position:new Yf(c.lat,c.lng),tilt:b.tilt,heading:b.heading,bounds:b.bounds})}function fn(a){var b=Ol(a.a).getLookAtData();a.zoom=b.zoom;a.ma=b.position}function mn(a,b){a=Ol(a.a).geoToMeters(b);return new I(a.x/4.007501668557849E7+.5,1-(a.y/4.007501668557849E7+.5))}function nn(a,b){return b.sub(mn(a,a.ma)).scale(Ed(2,8+a.zoom))}n.Ga=function(a){return Ol(this.a).geoToPixel(a)};S.prototype.geoToScreen=S.prototype.Ga;
S.prototype.Xa=function(a,b){return Ol(this.a).xyToGeo(a,b)};S.prototype.screenToGeo=S.prototype.Xa;S.prototype.Gg=function(a,b){a=this.Xa(a,b);b=this.B.nb();b.position=a;return b};
function on(a,b,c,d,e,f,g,h){var k,l,m=0,p;var q=function(){0===--m&&f(e)};if(h&&h.features)for(m=l=h.features.length,p=0;p<l;p++){var r=h.features[p];var v=r.id;if(k=a.a.a.sources[r.source_name]){var w=k.provider;var z=w.fk();if(z===hk.SOURCE){var J=r.source_layer;if("overlays"===J)pn(a,b,c,d,e,k,r.properties.overlays_config);else if(k=k.getMapObjectById(v))if("markers"!==J)e.push(k);else if(qn(a,b,c,k))e.push(k);else if(d&&!g){var G=!0;Sl(a.a,{x:b,y:c},{radius:rn,top_most_only:!1},function(U){on(a,
b,c,d,e,f,!0,U)})}m--}else z===hk.FEATURE?(J=r.tile.coords,G=w.getFeatureProxy(r.properties,J,function(U){if(U){for(var X=U,xa;X&&(xa=X.Qb())&&xa!==w;)X=xa;xa||X.ka(w);e.push(U)}q()}),G||(k=a.Hb.get(v),k||(k=new Tg(r),k.ka(w),a.Hb.add(v,k,1)),e.push(k),m--)):z===hk.PROVIDER&&(G=!0,w.nl(r,!1).then(function(U){U&&(U instanceof Wi?qn(this,b,c,U):1)&&e.push(U);q()},function(){q()},a))}}z&&(G||0!==m)||f(e)}
function pn(a,b,c,d,e,f,g){var h;a=a.Xa(b,c);for(b=g.length;b--&&(!(h=f.getMapObjectById(g[b].id))||0<=e.indexOf(h)||!h.ea().sd(a)||(e.push(h),!d)););}function qn(a,b,c,d){var e=d.Bb(),f=e.g,g,h=!f;if(f)if(e=e.xd(),b+=e.x,c+=e.y,e=d.ea(),C(e,Si))for(d=e.pa,g=d.length;g--&&!h;)e=a.Ga(d[g]),h=f.jg(b-e.x,c-e.y,0)!==be.NONE;else e=a.Ga(e),h=f.jg(b-e.x,c-e.y,0)!==be.NONE;return h}
S.prototype.Ha=function(a,b,c,d){var e=this,f=[];f=sn(f,this.j.ja,a*this.ua,b*this.ua,c);c&&f.length?d(f):this.a.a.initialized?Sl(this.a,{x:a,y:b},{radius:rn,top_most_only:c},function(g){on(e,a,b,c,f,d,!1,g)}):d(f)};S.prototype.getObjectsAt=S.prototype.Ha;function sn(a,b,c,d,e){for(var f=b.length,g;f--&&!((g=b[f])&&g.Ha&&(a=a.concat(g.Ha(c,d,e)),a.length&&e)););return a}S.prototype.Fa=y;function ln(a){a=a.qd[2];return{w:a.right-a.left,h:a.bottom-a.top}}
S.prototype.aa=function(){var a=this.j.ja.length;zl(this,this.ua);this.T.set(0,0);var b=ln(this);var c=b.w;var d=b.h;for(this.a.a.handleViewportUpdate();a--;){b=this.j.ja[a].xb;var e=b.Cb();e.w===c&&e.h===d||b.yf(c,d)}this.Fa=new Ti(c,d);Nl(this.a);this.ha()};S.prototype.getCapabilities=function(){return Jl};S.prototype.getCapabilities=S.prototype.getCapabilities;function tn(a){a.b&&a.b.xa()||(Ml(a.a)||Hk()-a.Ea<a.Tc)&&!a.A?a.Xd||(a.Xd=Rk(a.gi)):(a.A&&(a.ve(),un(a)),a.sa=Wm)}n=S.prototype;n.Xd=0;
n.ve=function(){this.j.Zc.length=0};
n.gi=function(){this.Xd=0;this.L&&this.L.before();var a=Ol(this.a);var b=a.getLookAtData(!1);var c=a.getLookAtData(!0);a=this.g.center.clone();c=c.bounds.G();var d=this.zoom;var e=this.T;var f=this.f;var g=f.length;for(this.Tc=Vm;g--;){var h=f[g];C(h,jj)&&h.ga()&&h.ga().nf(c,d)}this.A=this.a.V();this.B.cb(b);b=this.A;f=this.j;g=f.ja.length;var k=!0,l;for(l=0;l<g;l++){h=f.ja[l];var m=f.Zc;if(h){var p=h.V(c,a,void 0,d,!1,e,this.Ga,this.a.a.getCameraMatrix());p===rk.ACTIVE&&(this.Tc=Infinity);p!==rk.DONE||
m[l]||(un(this,h.tb()),m[l]=!0);m[l]||(k=!1)}}this.A=b&k;this.Fa&&(this.g.cb(this.Fa),this.Fa=y);this.b&&this.b.xa()&&this.Vg();this.L&&this.L.after();tn(this)};function un(a,b){a.rd||setTimeout(A(a.dispatchEvent,a,{type:a.v.vj,target:b||a}),1)}n.s=function(){var a=this.c.Oa()[0],b=this.g;Sk(this.Xd);vn(this);a&&Dl(this,a,!1);this.j.ja.filter(uc).forEach(function(c){c.C()});b.element&&b.element.removeChild(this.U);this.U=null;this.sa=3;this.a.C();S.l.s.call(this)};
n.ha=function(){this.Ea=Hk();this.sa===Wm&&(this.A=!1,this.sa=1,tn(this))};function wn(a,b,c){Ol(a.a).applyPxOffset([b,c]);fn(a);a.T.set(0,0);Nl(a.a);a.ha()}n.Ce=function(a,b,c){a=El(this,El(this,a));xn(this,a,b,c)};S.prototype.zoomAt=S.prototype.Ce;function xn(a,b,c,d){Ol(a.a).setLookAtData({zoom:b},Dc(c)&&Dc(c)?[c,d]:B);fn(a);Nl(a.a);a.ha()}function bn(a){vn(a);a.i.xa()&&a.zb(!0);a.o.xa()&&a.Ab(!0)}function yn(a,b){if(b){var c={};c.mf=b.power;c.Pe=b.ease;c.duration=b.duration;a.u=c}}
S.prototype.sc=function(a,b){var c=!!(b||a&(Cl.HEADING|Cl.TILT));bn(this);yn(this,b);this.o.start(a,c);Ol(this.a).setPanning(!0)};S.prototype.startInteraction=S.prototype.sc;
S.prototype.jc=function(a,b,c,d,e){var f=this.o;var g=!1;if(f.xa()){var h=Ol(this.a);var k=h.getLookAtData();var l=this.g.center;l=[l.x,l.y];b=f.store(a,b,c,d,e);c=f.Yf();a=f.ee();e=this.o.Zf();d=this.o.xh();f.c&&(f.Fc(Cl.TILT)&&(h.setLookAtData({tilt:Gl(this,k.tilt+a.y/this.g.height*-180)},l),g=!0),b&&1!==e&&f.Fc(Cl.ZOOM)&&(g=f.Yf(),e=Cd(Ed(2,this.zoom)*e)/Md,xn(this,El(this,e),g.x,g.y),g=!0),f.Fc(Cl.COORD)&&0<cm(a)&&(wn(this,-a.x,-a.y),g=!0),f.Fc(Cl.HEADING)&&(b?h.setLookAtData({heading:k.heading+
Hl(this,d)},[c.x,c.y]):a.x&&h.setLookAtData({heading:Hl(this,k.heading+a.x/this.g.width*360)},l),g=!0),g&&(Nl(this.a),this.ha()))}};S.prototype.interaction=S.prototype.jc;
S.prototype.Ab=function(a){var b=this;if(this.o.xa()&&!a){if(this.u){a=this.o.Db();var c=this.o.xc();var d=this.u.duration;var e=(this.u.mf||1)*a;var f=new Hm(-e/(0<d?d:1),e);!E(c.x)&&!E(c.y)&&0<e&&b.o.Fc(Cl.COORD)&&hn(this,function(g){e=f.Ye(g*d);E(e)||wn(b,yd(-c.x*e),yd(-c.y*e))},d,void 0,this.u.Pe)}this.u=null;this.o.clear()}Ol(this.a).setPanning(!1);this.ha()};S.prototype.endInteraction=S.prototype.Ab;S.prototype.rc=function(a,b,c){bn(this);this.i.start(b,c);yn(this,a);Ol(this.a).setPanning(!0)};
S.prototype.startControl=S.prototype.rc;S.prototype.control=function(a,b,c,d,e,f){for(var g=0,h;g<arguments.length;g++)if(h=+arguments[g],h!==h)throw new D(this.control,g,h);this.i.xa()&&this.i.set(a,b,c,d,e,f)};S.prototype.control=S.prototype.control;
S.prototype.zb=function(a,b){var c=this,d;if(this.i.xa()){vn(this);var e=Hk();var f=e-this.fa;if(1<=f){var g=om(this.i);zn(this,g,f)}if(!this.u||a||b)"function"===typeof b&&(a=Ol(this.a),a=a.getLookAtData(),b(a),An(this,a));else{b=this.i.Db();var h=this.i.xc();var k=this.u.duration;var l=(this.u.mf||1)*b;var m=new Hm(-l/(0<k?k:1),l);!E(h.ob)&&!E(h.pb)&&0<l&&hn(this,function(p,q,r,v){e&&(r=v-e,e=0);l=m.Ye(p*k)*r;E(l)||((d=h.qb*l)&&xn(c,El(c,c.zoom+d),c.i.b,c.i.c),wn(c,yd(h.ob*l),yd(h.pb*l)))},k,void 0,
this.u.Pe)}this.i.reset();Ol(this.a).setPanning(!1);this.ha()}};S.prototype.endControl=S.prototype.zb;
function An(a,b){var c=nn(a,mn(a,b.position)),d=c.y;c=c.x;var e=b.zoom,f=nn(a,mn(a,a.ma));b=f.y;var g=f.x;f=a.zoom;var h=a.i.Db(),k=a.i.b,l=a.i.c,m=0;c=Xm(a,g,c);c-=g;d-=b;f=e-f;b=Dd(c*c+d*d+f*f);if(0!==h&&0!==b){var p=c/b;var q=d/b;var r=f/b;var v=h*h/(2*b);hn(a,function(w,z){var J;if(1!==w){w=h*z-v*z*z/2;z=w-m;if(J=r*z)J=El(a,a.zoom+J),xn(a,J,k,l);wn(a,yd(p*z),yd(q*z));m=w}else xn(a,El(a,e),k,l),a.ha()},2*b/h)}}
S.prototype.Uc=function(a){var b=this,c=a.c;this.T.set(0,0);c.ob||c.pb||c.qb||c.we||c.xe||c.wf?(this.fa=Hk(),hn(this,function(d,e,f,g){b.fa=g;zn(b,c,f)},Ud),this.ha()):vn(this)};function zn(a,b,c){c=c||0;var d=a.i,e=Ol(a.a),f=e.getLookAtData();b.qb&&xn(a,El(a,f.zoom+b.qb*c),d.b,d.c);e.setLookAtData({heading:Hl(a,f.heading+b.xe*c),tilt:Gl(a,f.tilt+b.we*c)});fn(a);wn(a,b.ob*c,b.pb*c)}function hn(a,b,c,d,e){a.b&&a.b.xa()&&a.b.stop(!0);a.b=new vm(a,b,c,d,e);a.b.start()}
function vn(a){a.b&&a.b.xa()&&a.b.stop(!0)}S.prototype.qh=function(){};S.prototype.enter=S.prototype.qh;S.prototype.Xf=function(a){Bl(this.U,a)};S.prototype.exit=S.prototype.Xf;S.prototype.capture=function(a,b,c,d){var e=this;return Tl(e.a).then(function(f){var g=e.U.ownerDocument.createElement("canvas"),h=e.ua,k=g.getContext("2d"),l=e.a.ab()/h,m=(c-a)*h;h*=d-b;g.width=m;g.height=h;k.drawImage(f,a*l,b*l,m*l,h*l,0,0,m,h);return g})};S.prototype.Am=function(a){return Ol(this.a).geoToMeters(a)};
S.prototype.geoToMeters=S.prototype.Am;S.prototype.Fo=function(a){return Ol(this.a).metersToGeo(a)};S.prototype.metersToGeo=S.prototype.Fo;var Vm=5E3,rn=3.5;function T(a,b,c){var d={};T.l.constructor.call(this);this.R=A(T.prototype.R,this);this.j=Bn(c,T);this.b=c=new Al;this.U=!1;c.addEventListener(c.v.He,this.fa,!1,this);if(!C(a,Element))throw new D(T,0,a);c=this.P=a.ownerDocument.createElement("div");var e=c.style;e.position="relative";e.height=c.style.width="100%";e.overflow="hidden";e.webkitTapHighlightColor="transparent";"transparent"!==e.webkitTapHighlightColor&&(e.webkitTapHighlightColor="rgba(0,0,0,0)");a.appendChild(c);this.c=new sk(this.P,this.j);
this.c.addEventListener(this.c.v.He,this.fa,!1,this);a=this.a=new lj(this.j.layers);a.addEventListener(a.v.Ge,this.aa,!1,this);a.addEventListener(a.v.De,this.aa,!1,this);a.addEventListener(a.v.Fe,this.aa,!1,this);!this.g&&Cn(this);this.f=null;this.a.add(b,0);this.i=this.B(null!=this.j.engineType?this.j.engineType:ek.WEBGL,this.j);this.A=A(this.A,this);this.L=A(this.L,this);b=this.j.imprint;if(b!==B&&"object"!==typeof b)throw new D(T,1,"imprint");this.o=null===b?b:new uj(this,b);b=this.j.autoColor;
this.T=b===B||!!b;Dn(this);(b=this.j.zoom)&&(d.zoom=b);(b=this.j.bounds)&&(d.bounds=b);(b=this.j.center)&&(d.position=b);this.b.$b(d)}u(T,F);t("H.Map",T);function Bn(a,b){if(a){var c=a.pixelRatio;if(c===B)a.pixelRatio=Te();else if(!(0<c))throw new D(b,0,"pixelRatio: "+c);}else a={},a.pixelRatio=Te();a.renderBaseBackground||(a.renderBaseBackground={lower:3,higher:2});return a}
T.prototype.s=function(){this.T=!1;this.o&&this.o.C();this.i.dispose();this.b.C();this.c.C();this.g.C();this.m.C();this.a.C();var a=this.P;a.parentNode.removeChild(a);this.P=null;F.prototype.s.call(this)};T.prototype.K=function(){return this.P};T.prototype.getElement=T.prototype.K;T.prototype.ab=function(){return this.j.pixelRatio};T.prototype.getPixelRatio=T.prototype.ab;function Dn(a){a.o&&a.T&&a.o.Ri({invert:a.f&&a.f.qm})}
T.prototype.aa=function(a){var b=a.added,c=a.removed;b&&b.ga()&&b.ga().ka(this);c&&c.ga()&&c.ga().ka(null);c===this.g&&(this.m=this.g=null);c===this.f&&(this.f=null);0===a.idx&&(this.dispatchEvent(new Wg(this.v.If,this.f=a.type!==this.a.v.Fe?b:0<this.a.a.length?this.a.get(0):y,a.type!==this.a.v.De?c:1<this.a.a.length?this.a.get(1):y)),Dn(this))};
T.prototype.fa=function(a){a.modifiers&&(this.U||(En(this,"start"),this.U=!0),En(this,"",a),this.ma&&x.clearTimeout(this.ma),this.ma=x.setTimeout(this.L,333))};function En(a,b,c){a.dispatchEvent(c?new $i(a.v.qj,c.newValue,c.oldValue,c.modifiers):a.v.qj+b)}T.prototype.L=function(){En(this,"end");this.U=!1};T.prototype.Jg=function(a,b){this.i.getCapabilities().lookAt&&this.b.$b({position:a},!!b);return this};T.prototype.setCenter=T.prototype.Jg;
T.prototype.hb=function(){var a=this.b.nb();return a?a.position:y};T.prototype.getCenter=T.prototype.hb;T.prototype.zf=function(a,b){this.b.zf(a,!!b);return this};T.prototype.setZoom=T.prototype.zf;T.prototype.vb=function(){return this.b.vb()};T.prototype.getZoom=T.prototype.vb;T.prototype.Ce=function(a,b,c){this.i.zoomAt(a,b,c)};T.prototype.zoomAt=T.prototype.Ce;T.prototype.Xn=function(){return this.c};T.prototype.getViewPort=T.prototype.Xn;T.prototype.Wn=function(){return this.b};
T.prototype.getViewModel=T.prototype.Wn;T.prototype.mn=function(){return this.a};T.prototype.getLayers=T.prototype.mn;T.prototype.fn=function(){return this.o};T.prototype.getImprint=T.prototype.fn;
T.prototype.capture=function(a,b,c,d,e,f){function g(G,U){q?G.cancel():(w.save(),U.capture(v,m,function(X){w.restore();G.done(X)},function(X){G.done(null,X);h(null)}))}function h(G){q||(q=!0,a(G))}var k=this.gc(),l=k.getCapabilities(),m=this.j.pixelRatio,p=this.c,q=!1,r=this,v,w;if(!Da(a))throw new D(this.capture,0,a);c=c||0;d=d||0;e=e||p.width;f=f||p.height;var z=xd(0,wd(c,e));var J=xd(0,wd(d,f));c=wd(p.width,xd(c,e));d=wd(p.height,xd(d,f));l.capture?k.capture(z,J,c,d).then(function(G){var U=r.o,
X=b||[];v=G;w=v.getContext("2d");v.style.width=v.width/m+"px";v.style.height=v.height/m+"px";var xa=new Fk(10,g);X=X.concat(U).filter(function(ia){return Da(ia&&ia.capture)});X.length?(G=X.pop(),X.forEach(function(ia){xa.push(ia,id)}),xa.push(G,A(h,r,v)),Bk(xa)):h(v)},function(){h(y)}):a(null)};T.prototype.capture=T.prototype.capture;T.prototype.gc=function(){return this.u||this.i};T.prototype.getEngine=T.prototype.gc;
T.prototype.zl=function(a){this.i.type===a||this.sa||(this.sa=!0,this.u=this.B(a),this.u.addEventListener("render",this.A));return this};T.prototype.setEngineType=T.prototype.zl;T.prototype.A=function(a){a.target===this.u&&(this.u.removeEventListener("render",this.A),this.i.Xf(this.R))};T.prototype.R=function(){var a=this.i.type;this.i.C();this.i=this.u;this.u=B;this.sa=!1;this.dispatchEvent(new Wg(this.v.Yl,this.i.type,a))};
T.prototype.B=function(a,b){b=b?Bn(b,this.B):this.j;Dn(this);if(a===ek.P2D)return new x.H.map.render.p2d.RenderEngine(this.c,this.b,this.a,b);if(a===ek.WEBGL)return new S(this.c,this.b,this.a,b);if(a===ek.HARP)return new x.H.map.render.harp.RenderEngine(this.c,this.b,this.a,b);throw new D(this.zl,0,a);};
T.prototype.Cf=function(a,b,c,d,e){b=uc(b)?C(b,K,this.Cf,1,b)&&b:this.b.nb().bounds.G();e=e||this.f;if(!C(e,kl))throw new D(this.Cf,4);var f=e.ga(),g=this.ab(),h=e.tileSize;2<=g&&256<h&&f instanceof Ak&&(h/=2);g=this.vb();h=Math.log2(h)-8;c=uc(c)?+c:g;d=uc(d)?+d:g;if(!(c<=d))throw new D(this.Cf,B,"!(min <= max)");g=f.min;var k=f.max,l=this.gc().type===ek.WEBGL?zd:yd;c=Zd(l(c)-h,g,k);d=Zd(l(d)-h,g,k);if(!(f&&C(f,R)&&md()&&f.hh()))throw new Yc(this.Cf,"Storing is not supported");return new vk(e,f,b,
c,d,a)};T.prototype.storeContent=T.prototype.Cf;function Fn(a){qj.call(this,a)}u(Fn,qj);Fn.prototype.g=function(){sj(this,2)};Fn.prototype.f=function(){sj(this,4)};T.prototype.pm=function(a){a=new Fn(a);ld().clear(A(a.g,a),A(a.f,a));return a};T.prototype.clearContent=T.prototype.pm;T.prototype.$g=function(a,b){var c=this.a,d=c.indexOf(a),e=b!==+b;b=e?c.a.length-1:b;0>d?c.add(a,b):d-b&&(c.nc(d),c.add(a,e?b-1:b));return this};T.prototype.addLayer=T.prototype.$g;
T.prototype.rf=function(a){var b=this.a.indexOf(a);a!==this.f&&a!==this.g&&-1!==b&&this.a.nc(b);return this};T.prototype.removeLayer=T.prototype.rf;T.prototype.Md=function(a){this.f!==a&&(this.a.a.length&&this.a.get(0)!==this.g?this.a.set(0,a):this.a.add(a,0),this.f=a);return this};T.prototype.setBaseLayer=T.prototype.Md;T.prototype.Gm=function(){return this.f};T.prototype.getBaseLayer=T.prototype.Gm;
T.prototype.Ga=function(a){if(!Zf(a))throw new D(this.Ga,0,a);return(a=this.i.geoToScreen(a))?xf(a):y};T.prototype.geoToScreen=T.prototype.Ga;T.prototype.Xa=function(a,b){var c;if(c=+E(a)||2*E(b))throw new D(this.Xa,c-1,arguments[c-1]);return(c=this.i.screenToGeo(a,b))?$f(c):y};T.prototype.screenToGeo=T.prototype.Xa;T.prototype.Gg=function(a,b){return this.i.screenToLookAtData(a,b)};T.prototype.screenToLookAtData=T.prototype.Gg;
T.prototype.da=function(a){if(!C(a,M))throw new D(this.da,0,a);!this.g&&Cn(this);this.m.ic().da(a);return a};T.prototype.addObject=T.prototype.da;T.prototype.Ja=function(a){if(!C(a,M))throw new D(this.Ja,0,a);!this.g&&Cn(this);this.m.ic().Ja(a);return a};T.prototype.removeObject=T.prototype.Ja;T.prototype.Wa=function(a){!this.g&&Cn(this);return this.m.ic().Wa(a)};T.prototype.getObjects=T.prototype.Wa;
T.prototype.dc=function(a){var b;zc(a,this.dc,0,a);!this.g&&Cn(this);var c=a.length;for(b=0;b<c;b++)this.da(a[b]);return this};T.prototype.addObjects=T.prototype.dc;T.prototype.Id=function(a){var b;zc(a,this.Id,0,a);!this.g&&Cn(this);var c=a.length;for(b=0;b<c;b++)this.Ja(a[b]);return this};T.prototype.removeObjects=T.prototype.Id;T.prototype.fe=function(a,b,c){var d;if(d=+E(a)||2*E(b))throw new D(this.fe,d-1,arguments[d-1]);this.i.getObjectsAt(a,b,!0,function(e){c(e[0])})};
T.prototype.getObjectAt=T.prototype.fe;T.prototype.Ha=function(a,b,c){var d;if(d=+E(a)||2*E(b))throw new D(this.fe,d-1,arguments[d-1]);this.i.getObjectsAt(a,b,!1,c)};T.prototype.getObjectsAt=T.prototype.Ha;T.prototype.Eh=function(a,b,c){var d=c||hf;c=d.visiblesOnly;var e=d.zoom;d=d.types;var f=Yg.ANY;C(a,O,this.Eh,0,"area");xc(b,"Function",this.Eh,1,"callback");this.m.Wa(a,uc(c)?!!c:!0,uc(e)?+e:this.b.vb(),uc(d)?d&f:f,b)};T.prototype.getObjectsWithin=T.prototype.Eh;
function Cn(a){a.m=new N({max:24});a.g=new ul(a.m,a.j);a.a.add(a.g)}var ek={P2D:Il.P2D,WEBGL:Il.WEBGL};T.EngineType=ek;ek.HARP=Il.HARP;T.prototype.v={xp:"mapviewchangestart",qj:"mapviewchange",rj:"mapviewchangeend",If:"baselayerchange",Yl:"enginechange"};function Gn(a,b){Gn.l.constructor.call(this,a,b)}u(Gn,Wi);t("H.map.Marker",Gn);n=Gn.prototype;n.type=Yg.MARKER;n.Rg=1;n.ya=function(a){if(a!==Vg.VISUAL||1===this.el||1===this.icon.getState())var b=Gn.l.ya.call(this,a);return b||!1};n.el=0;n.xk=function(a){return C(a,Rj)};n.Sh=!1;n.Tk=function(){this.ya(Vg.VISUAL)};
n.Nc=function(a){var b=this.icon;this.Sh&&(b.removeEventListener("statechange",this.Tk,!1,this),delete this.Sh);b&&(this.el=b.getState());Gn.l.Nc.call(this,a);0===a.getState()&&(this.Sh=!0,De(a,"statechange",this.Tk,!1,this));return this};Gn.prototype.setIcon=Gn.prototype.Nc;Gn.prototype.b=function(a){return new Rj(a.svg,a)};Gn.prototype.X=function(){var a=this.getIcon(),b=a.ip||0,c=Gn.l.forWorkerMessage.call(this),d=c.properties.icon;d&&0<b&&Xa(d,{stick_color:a.hp,stick_height:b});return c};
Gn.prototype.forWorkerMessage=Gn.prototype.X;function Hn(a,b){Hn.l.constructor.call(this,sh,b);this.ye(a)}u(Hn,Gi);t("H.map.Rect",Hn);Hn.prototype.ye=function(a){if(!C(a,K))throw new D(this.ye,0,a);a.oa(this.T)||(this.T=this.O=a,this.a!==y&&Hn.l.ca.call(this,wi(a)))};Hn.prototype.setBoundingBox=Hn.prototype.ye;Hn.prototype.G=function(){return this.O};Hn.prototype.getBoundingBox=Hn.prototype.G;Hn.prototype.ca=function(){return this};Hn.prototype.setGeometry=Hn.prototype.ca;
Hn.prototype.ea=function(){this.a||Hn.l.ca.call(this,wi(this.T));return this.a};Hn.prototype.getGeometry=Hn.prototype.ea;function pk(a,b,c){var d="anonymous",e=1;this.b=A(this.b,this);M.call(this,c);this.ca(a);c&&(a="crossOrigin",a in c&&(d=c[a]),a="opacity",a in c&&(e=c[a]));this.yl(b,d);this.oc(e)}u(pk,M);t("H.map.Overlay",pk);pk.prototype.type=Yg.OVERLAY;pk.prototype.G=function(){return this.O};pk.prototype.getBoundingBox=pk.prototype.G;pk.prototype.ye=function(a){C(a,K,this.ye,0,a);return this.ca(a)};pk.prototype.setBoundingBox=pk.prototype.ye;pk.prototype.ea=function(){return this.O};
pk.prototype.getGeometry=pk.prototype.ea;pk.prototype.ca=function(a){var b=this.O,c=!b;C(a,K,this.ca,0,a);if(c||!b.oa(a))this.O=a,c||this.ya(Vg.SPATIAL);return this};pk.prototype.setGeometry=pk.prototype.ca;pk.prototype.bd=function(){return this.a.getData()};pk.prototype.getBitmap=pk.prototype.bd;pk.prototype.yl=function(a,b){var c=this.a;c&&1!==c.getState()&&c.cancel();this.a=new Mj(a,this.b,!0,B,b);return this};pk.prototype.setBitmap=pk.prototype.yl;
pk.prototype.b=function(a,b){this.a=b;1===a&&this.ya(Vg.VISUAL)};pk.prototype.ed=function(){return this.c};pk.prototype.getOpacity=pk.prototype.ed;pk.prototype.oc=function(a){var b=this.c,c=2>b;if(0<=a&&1>=a)a!==b&&(this.c=a,c&&this.ya(Vg.VISUAL));else throw new D(this.oc,0);return this};pk.prototype.setOpacity=pk.prototype.oc;pk.prototype.X=function(){var a=pk.l.X.call(this);a.geometry=wi(this.O).X();a.properties.overlay=!0;return a};pk.prototype.forWorkerMessage=pk.prototype.X;function In(a){if(!a||!Da(a.requestData))throw new D(In,0,"options.requestData");In.l.constructor.call(this,a);this.L=a.requestData;this.B=!!a.providesDomMarkers}u(In,R);t("H.map.provider.MarkerTileProvider",In);In.prototype.$d=function(a){return a?a.length+1:1};In.prototype.getEntryWeight=In.prototype.$d;
In.prototype.J=function(a,b,c,d,e){var f=this;return this.L(a,b,c,function(g){for(var h=[],k,l,m=g.length;m--;)l=g[m],l.kp=f.getTileKey(a,b,c),l.ka(f),k=l.Bb(),(C(l,Zi)||1===k.getState())&&h.push(g[m]);d(h)},e)};In.prototype.requestInternal=In.prototype.J;In.prototype.me=function(a,b){b===Vg.VISUAL&&(a=this.Ob().get(a.kp))&&(a.valid=!1,this.Za(a))};In.prototype.invalidateObject=In.prototype.me;In.prototype.Vb=function(){return this.B};In.prototype.providesDomMarkers=In.prototype.Vb;
In.prototype.Wb=ef;In.prototype.providesMarkers=In.prototype.Wb;function Jn(a,b){Jn.l.constructor.call(this,a,b)}u(Jn,kl);t("H.map.layer.MarkerTileLayer",Jn);var Kn={markers:[],total:0,requested:0};function Ln(a,b,c,d,e){var f=zd(c);a.pixelProjection.Ra(f);b=a.le(a.Ve(b),f);c=a.bf(b,b.left>b.right,~~c,d,e);a=c.tiles;c=c.total;d=a.length;e=[];var g;for(g=0;g<d;g++)for(b=a[g],f=b.data.length;f--;)e.push(b.data[f]);return{markers:e,total:a.length,requested:c}}Jn.prototype.Jc=function(a,b,c,d){return this.qa.providesDomMarkers()?Kn:Ln(this,a,b,c,d)};
Jn.prototype.requestMarkers=Jn.prototype.Jc;Jn.prototype.Ic=function(a,b,c,d){return this.qa.providesDomMarkers()?Ln(this,a,b,c,d):Kn};Jn.prototype.requestDomMarkers=Jn.prototype.Ic;function Mn(a,b,c){var d,e=6;if(b){for(d=' expected close to: "'+b;e--;)b=a.a.next(),-1!==b&&(d+=String.fromCharCode(b));d+='"'}throw new D(Nn,0,"- Malformed WKT: "+(d?c+d:"unexpected end of stream"));}var On={cm:" ",$l:"(",am:")",Xl:",",Zl:""};Object.keys(On).reduce(function(a,b){a[On[b]]=!0;return a},nc());function Pn(a,b){var c=a.next();b=b?")":"(";c!==b&&Mn(a,c,'"'+b+'"')}function Qn(a){return","===Rn(a)?(a.next(),!0):!1}
function Sn(a,b,c,d,e){var f,g,h=2+b+c;for(g=1;g<=h;g++)(c=a.next())?(f=+c)!==f?Mn(a,c,"number"):1===g?d[e+1]=f:2===g?d[e]=f:3===g&&(d[e+2]=f):Mn(a,c);b||(d[e+2]=0)}var Tn=[];function Un(a,b,c,d){d||Pn(a,0);Sn(a,b,c,Tn,0);d||Pn(a,1);return new Yf(Tn[0],Tn[1],b?Tn[2]:B)}function Vn(a,b,c){var d=[];Pn(a,0);do Sn(a,b,c,d,d.length);while(Qn(a));Pn(a,1);return new L(d)}function Wn(a,b,c){Pn(a,0);var d=Vn(a,b,c);if(Qn(a)){var e=[];do e.push(Vn(a,b,c));while(Qn(a))}Pn(a,1);return new O(d,e)}
var Xn=[],Yn=[Wn],Zn=[Un],$n={POINT:Zn,LINESTRING:[Vn],POLYGON:Yn,MULTIPOINT:[Un,Si],MULTILINESTRING:[Vn,vh],MULTIPOLYGON:[Wn,Ei],GEOMETRY:Xn,GEOMETRYCOLLECTION:Xn,CIRCULARSTRING:Xn,COMPOUNDCURVE:Xn,CURVEPOLYGON:Xn,MULTICURVE:Xn,MULTISURFACE:Xn,CURVE:Xn,SURFACE:Xn,POLYHEDRALSURFACE:Xn,TIN:Xn,TRIANGLE:Xn},ao={Z:1,M:2,ZM:3};
function Nn(a){a=new bo(a);var b;var c=a.next();(b=$n[c.toUpperCase()])||Mn(a,c,"type name");if(b!==Xn){c=Rn(a);c=ao[c.toUpperCase()];var d=c&1;var e=c>>1;d|e&&a.next();c=Rn(a);if("EMPTY"===c)if(a.next(),d=b[1])var f=new d([]);else b!==Zn&&(f=new L([]),b===Yn&&(f=new O(f)));else if("("===c){f=b[0];b=b[1];if(b){var g=[];Pn(a,0);if(f===Un){var h="("!==Rn(a);do g.push(f(a,d,e,h));while(Qn(a))}else{do g.push(f(a,d,e));while(Qn(a))}Pn(a,1);d=new b(g)}else d=f(a,d,e);f=d}else Mn(a,c,'"Z", "M", "ZM", "(" or "EMPTY"');
a.next()&&Mn(a,c,"end of stream")}return f||y}function bo(a){this.a=a}function Rn(a){var b=a.b;if(b===B){for(b=a.a;b.Tb()===co;)b.next();if(eo[b.Tb()])b=b.next(),b=b===fo?"":String.fromCharCode(b);else{b.Be();do b.next();while(!eo[b.Tb()]);b=String.fromCharCode.apply(null,b.Wd())}a.b=b}return b}bo.prototype.next=function(){var a=Rn(this);""!==a&&delete this.b;return a};var co=32,fo=-1,go={cm:co,$l:40,am:41,Xl:44,Zl:fo},eo=Object.keys(go).reduce(function(a,b){a[go[b]]=!0;return a},nc());function ho(){}t("H.util.ICharStream",ho);ho.prototype.next=function(){};ho.prototype.Be=function(){};ho.prototype.Wd=function(){};ho.prototype.Tb=function(){};function io(a){this.c=String(a);this.f=0;this.a=[];this.b=!1}t("H.util.CharStream",io);io.prototype.next=function(){var a=this.c.charCodeAt(this.f++);a=isNaN(a)?-1:a;this.b&&this.a.push(a);return a};io.prototype.Be=function(){this.b=!0;this.a=[]};io.prototype.Wd=function(){var a=this.a.slice();this.b=!1;this.a=[];return a};io.prototype.Tb=function(){var a=this.c.charCodeAt(this.f);return isNaN(a)?-1:a};t("H.util.wkt.toGeometry",function(a){return Nn(new io(a))});t("H.buildInfo",function(){return Ff("H-core","1.30.8","52900f78")});var jo,ko="maps".concat("js-"),lo,mo,no,oo,po;lo=x.document.querySelector('script[src*="'+ko+'"]');if(!lo)for(mo=x.document.getElementsByTagName("script"),oo=new RegExp("^.*"+ko),po=0,no=mo.length;po<no;po++)if(oo.test(mo[po].src)){lo=mo[po];break}jo=lo?lo.src.replace(/\/[^\/]*$/,"/"):"";t("H.getScriptPath",function(){return jo});

function qo(a,b){if(!a)throw new D(qo,0,a);qo.l.constructor.call(this,a);this.b={};this.c=b&&b.vc;this.f=ro++}u(qo,sm);var ro=0;
qo.prototype.V=function(a,b,c,d,e,f){var g=yd(d),h=this.jb,k=g+(c.exp-h.pixelProjection.exp),l=h.min,m=h.max;d=h.tileSize;var p=h.ga().g,q=this.xb,r=q.ed();var v=q.Cb().w;var w=c.w,z=c.x,J=c.y,G={};if(g<l||g>m)return rk.DONE;e=h.requestTiles(a,k,e,f,this.f);a=e.total;e=e.tiles;f=e.length;this.g=c;this.j=b;this.a=k;r!==p&&q.oc(p);c=d=d*w/(Ed(2,k)*d);this.c||(d%1&&(d=zd(d),w=c/d,z/=w,J/=w,w=Ed(2,k)*d),z=zd(z),J=zd(J));this.i=c;k=-d;g=v+d;for(h=0;h<f;h++){v=e[h];if((l=v.data)&&l.tagName){c=b.x-(z-v.x*
d);p=b.y-(J-v.y*d);q.$c(l,c,p,d,d);for(r=c;(r-=w)>k;)q.$c(l,r,p,d,d);for(r=c;(r+=w)<g;)q.$c(l,r,p,d,d)}G[this.a+"_"+v.x+"_"+v.y]=v}this.b=G;return f===a?rk.DONE:rk.PENDING};qo.prototype.Ha=function(a,b,c){var d=this.i,e=d/this.jb.tileSize,f=this.g,g=this.j,h;if(uc(this.a)&&f){a=f.x+(a-g.x);b=f.y+(b-g.y);var k=zd(f.w/d);var l=f=zd(a/d);g=zd(b/d);Bd(l)>=k&&(l%=k);0>l&&(l=k+l);(k=this.b[this.a+"_"+l+"_"+g])&&k.Ha&&(h=k.Ha((a-d*f)/e,(b-d*g)/e,c))}return h||gf};qo.prototype.ke=function(){return"2d"};function so(a,b){b=b||{};C(a,ul,so,0);so.l.constructor.call(this,a);this.vc=!!b.vc;this.c=b.kb||0;this.a=[];this.b={}}u(so,sm);
so.prototype.V=function(a,b,c,d,e,f){var g,h=this.jb,k;d-=this.c;this.a.length=0;var l=this.b;this.b=g={};if(d>=h.min&&d<=h.max){var m=h.Jd(a,d,e,f);var p=m.overlays;if(a=p.length)for(p.sort($g),d=this.xb,e=this.vc,f=0;f<a;f++){h=p[f];var q=h.G();var r=c.mb(q.Rb());var v=c.mb(q.Nb());q=c.w;r.x>=v.x&&(r.x-=q);q=-((r.x+v.x)/q>>1)*q;r.x+=q;r.add(b);v.x+=q;v.add(b);e||(r.round(),v.round());(q=l[k=h.ib()])?delete l[k]:q={Qo:h};g[k]=q;var w=r.x;r=r.y;var z=v.x;v=v.y;var J=z-w;var G=v-r;d.oc(h.ed());d.$c(h.bd(),
w,r,J,G);q.oh?q.oh.set(w,r,z,v):q.oh=new tk(w,r,z,v);this.a.push(q)}}return!m||m.requested&&m.requested===m.total||!m.requested&&p.length===m.total?rk.DONE:rk.PENDING};so.prototype.Ha=function(a,b,c){for(var d=this.a,e=d.length,f,g,h;e--;)if(f=d[e],g=f.oh,g.Rf(a,b))if(f=f.Qo,h)h.push(f);else if(h=[f],c)break;return h||gf};so.prototype.ke=function(){return"2d"};so.prototype.s=function(){this.a=null;so.l.s.call(this)};var to={lookAt:{zoom:{min:-8,max:24},tilt:{min:0,max:0},incline:{min:0,max:0},heading:{min:180,max:180}},interaction:{ZOOM:Cl.ZOOM,COORD:Cl.COORD},capture:!0};t("H.map.render.p2d.capabilities",to);function uo(a,b){this.a=[];uo.l.constructor.apply(this,arguments)}u(uo,wm);n=uo.prototype;n.Sj=function(){return this.jb.Jc.apply(this.jb,arguments)};n.V=function(a,b,c,d,e,f,g){this.a=[];return uo.l.V.apply(this,arguments)};n.Gk=1;n.ml=function(a,b,c,d,e,f){var g=this.Gk=d.ab();e*=g;f*=g;var h=c.Cb();b=h.w*g;h=h.h*g;var k=c.xd();this.vc?(e-=k.x*g,f-=k.y*g):(e=yd(e-k.x*g),f=yd(f-k.y*g));d.$c(c.bd(),e,f,b,h);a.detail?a.detail.set(e,f,e+b,f+h):a.detail=new tk(e,f,e+b,f+h);this.a.push(a)};
n.Ha=function(a,b,c){for(var d=this.a,e=d.length,f,g,h,k=gf,l=this.Gk;e--&&!(f=d[e],g=f.detail,g.Rf(a,b)&&(f=f.Pk,(!(h=f.Bb().g)||h.jg((a-g.left)/l,(b-g.top)/l,0))&&0>k.indexOf(f)&&(k===gf&&(k=[]),k.push(f),c))););return k};n.ke=function(){return"2d"};n.s=function(){this.a=null;uo.l.s.call(this)};function V(a,b,c,d){V.l.constructor.call(this,a,b,c,d);this.U=new I(0,0);if(c=d.renderBaseBackground)this.Jo=c.lower,this.vo=c.higher;this.po=!!d.enableSubpixelRendering;this.rd=vo;this.nk=0;this.Se=this.Tj=!1;this.i=new dm;this.a=d=new lm;this.Rd=A(this.Rd,this);d.addEventListener(d.v.Ug,this.Rd);this.Ga=A(this.Ga,this);d=a.element;this.Fa=a=d.ownerDocument.createElement("div");a.style.position="absolute";a.style.width=a.style.height="100%";a.style.zIndex=0;d.insertBefore(a,d.firstChild);this.qk=
new Im(this.Fa,this.ua);this.o=[];wo(this);this.fi=A(V.prototype.fi,this);this.Hb=xo;this.Eg();this.zoom=yo(this,this.B.vb()+this.kb);this.Jb();zo(this,b.nb().position,this.zoom);this.cb();this.aa()}u(V,yl);t("H.map.render.p2d.RenderEngine",V);V.prototype.type=Il.P2D;var xo=2;V.prototype.getState=function(){return this.Hb};V.prototype.getState=V.prototype.getState;function Ao(a,b,c){b=c-b;return Bd(b)<a.ta.w/2?b:b-a.ta.w*c/Bd(c)}
V.prototype.lh=function(a){var b=this,c=a.b,d=a.newValue,e=a.modifiers;a=d.position;var f=d.bounds,g,h=this.zoom,k=this.m,l=0;e&aj.POSITION&&(g=b.ta.mb(a));if(e&aj.BOUNDS)d=Bo(this,f.G(),e&aj.ZOOM?d.zoom:B,e&aj.POSITION?a:B),this.B.$b(d,c);else{e&aj.POSITION||(g=b.ta.mb(d.position));var m=g.x;var p=g.y;Co(this);this.U.set(0,0);d=Do(this,d);var q=d.zoom;var r=d.position;if(c){var v=q-h;var w={x:k.x,y:k.y};c=this.ta.se(w).x;var z=this.ta.projection.ad(a);if(z.x!==this.m.x||z.y!==this.m.y||q!==this.zoom)m=
Ao(this,c,m),Eo(this,function(J){var G=J-l;if(q!==h){g=b.ta.se(z);var U=b.ta.se(w);m=Ao(b,U.x,g.x);p=g.y-U.y}l=J;Fo(b,m*G,p*G);h+=v*G;Go(b,h);b.cb();b.ha()},this.Tc,function(){zo(b,r,q);Go(b,q);b.cb(r);b.ha()},this.Uc)}else Ho(this),zo(this,r,q),Go(this,q),this.cb(r);this.ha()}};V.prototype.Tc=300;V.prototype.Hg=function(a){var b=Dc(a);if(!b||b&&0>a)throw new D(this.Hg,1,"positive number required");this.Tc=a};V.prototype.setAnimationDuration=V.prototype.Hg;V.prototype.vh=function(){return this.Tc};
V.prototype.getAnimationDuration=V.prototype.vh;V.prototype.Uc=Vl;V.prototype.Ig=function(a){if(!Da(a))throw new D(this.Ig,1,"function required");this.Uc=a};V.prototype.setAnimationEase=V.prototype.Ig;V.prototype.wh=function(){return this.Uc};V.prototype.getAnimationEase=V.prototype.wh;V.prototype.Eg=function(){this.Uc=Vl;this.Tc=300};V.prototype.resetAnimationDefaults=V.prototype.Eg;
V.prototype.ui=function(a,b,c){var d;this.Ea=Hk();(d=this.T.ja.splice(a,1)[0])&&d.C&&d.C();(d=this.u.ja.splice(a,1)[0])&&d.C&&d.C();(d=this.ma.ja.splice(a,1)[0])&&d.C&&d.C();(d=this.sa.ja.splice(a,1)[0])&&d.C&&d.C();this.f=this.c.Oa();0===a&&(Dl(this,b,!1),this.Jb());this.o=Jm(this.qk,Io(this),Jo(this));this.ve();c||this.ha()};function wo(a){var b=a.c.Oa(),c=0,d=b.length;[a.T={},a.u={},a.ma={},a.sa={}].forEach(function(e){e.Zc=[];e.ja=[]});for(a.f=a.c.Oa();c<d;c++)a.jf(c,b[c]);a.Jb()}
V.prototype.vi=function(){this.Jb();this.ha()};V.prototype.Ph=function(a,b,c){var d,e,f,g;if(b){var h={vc:this.po,kb:this.kb};b.V?C(b,um)?e=new tm(b):C(b,Gm)&&(g=new tm(b)):(b.requestOverlays&&(d=new so(b,h)),b.requestTiles&&(e=new qo(b,h)),b.requestMarkers&&(f=new uo(b,h)),b.requestDomMarkers&&(g=new zm(b,h)))}c=c||0;this.T.ja.splice(a,c,d);this.u.ja.splice(a,c,e);this.ma.ja.splice(a,c,f);this.sa.ja.splice(a,c,g);this.f=this.c.Oa();this.o=Jm(this.qk,Io(this),Jo(this))};
function Jo(a){var b=[];b=b.concat(a.u.ja);b=b.concat(a.T.ja);b=b.concat(a.ma.ja);b=b.concat(a.sa.ja);return b=b.filter(uc)}function Do(a,b){var c=El(a,El(a,b.zoom)+a.kb);a=Fl(a,b);a.zoom=c;return a}function zo(a,b,c){var d=a.ta;d.Ra(c);a.m=d.projection.ad(b);d.x=d.w*a.m.x;d.y=d.h*a.m.y}V.prototype.Xa=function(a,b){var c=this.g.center,d=this.ua;return this.ta.Ta((a-c.x)*d,(b-c.y)*d)};V.prototype.screenToGeo=V.prototype.Xa;V.prototype.Gg=function(a,b){a=this.Xa(a,b);b=this.B.nb();b.position=a;return b};
V.prototype.Ga=function(a){var b=this.ua,c=this.g.center,d=c.x*b;c=c.y*b;a=this.ta.mb(a);var e=this.ta.w;return new I(yd((a.x-yd(a.x/e)*e+d)/b),yd((a.y+c)/b))};V.prototype.geoToScreen=V.prototype.Ga;V.prototype.G=function(a,b){var c=this.qd[a||4];a=this.ta;var d=c.left-b,e=a.Ta(d,c.top-b),f=c.right+b;b=a.Ta(f,c.bottom+b);f-d>=a.w&&(e.lng=-(b.lng=180));return eg(e,b)};
V.prototype.Ha=function(a,b,c,d){var e=[],f=this.ua,g;a*=f;b*=f;f=[this.T,this.u,this.ma,this.sa];for(g=f.length;g--&&(!c||!e.length);){for(var h=e,k=f[g].ja,l=a,m=b,p=c,q=k.length;q--&&!((e=k[q])&&e.Ha&&(h=h.concat(e.Ha(l,m,p)),h.length&&p)););e=h}d(e)};V.prototype.getObjectsAt=V.prototype.Ha;V.prototype.Vc=y;function Io(a){a=a.qd[2];return{w:a.right-a.left,h:a.bottom-a.top}}
V.prototype.aa=function(){var a=this.o.length,b;V.l.aa.call(this);var c=Io(this);this.U.set(0,0);var d=c.w;for(b=c.h;a--;){c=this.o[a];var e=c.Cb();e.w===d&&e.h===b||c.yf(d,b)}this.Vc=new Ti(d,b);this.ha()};V.prototype.getCapabilities=function(){return to};V.prototype.getCapabilities=V.prototype.getCapabilities;function Ko(a){a.b&&a.b.xa()||Hk()-a.Ea<a.rd&&!a.A?a.Xd=Rk(a.fi):(a.A&&(a.ve(),Lo(a)),a.Hb=xo)}n=V.prototype;
n.ve=function(){this.T.Zc.length=0;this.u.Zc.length=0;this.ma.Zc.length=0;this.sa.Zc.length=0};
n.fi=function(){var a;this.L&&this.L.before();var b=this.u.ja;var c=this.g.center.clone().scale(this.ua).round();var d=this.G(1,0);var e=this.G(1,Mo);var f=this.zoom;var g=f-this.kb;var h=this.ta;var k=this.Jo;var l=this.vo;var m=b[0];b=this.U;var p=this.o.length;var q=this.f;for(a=q.length;p--;){var r=this.o[p];C(r,rm)&&r.clear()}if(m){if(k)for(;k;)p=f-k,m.V(d,c,h,p,!0,b),--k;if(l&&this.Se)for(r=1;r<=l&&(p=f+r,h.Ra(p),k=this.G(2,0),h.Ra(f),!m.V(k,c,h,p,!0,b));r++);}for(this.rd=vo;a--;)h=q[a],C(h,
jj)&&h.ga()&&h.ga().nf(e,g);d=this.Fk(d,c,f,!1,b,No,this.u,this.T);c=this.Fk(e,c,g,!1,b,Oo,this.ma,this.sa);this.A=d&&c;this.b&&this.b.xa()&&this.Vg();this.R||(this.R=this.B.nb());this.R.bounds=this.G(4,0);this.B.cb(this.R);this.R=null;this.Vc&&(this.g.cb(this.Vc),this.Vc=y);f<this.nk?this.Se=!0:this.Tj&&(this.Se=!1);this.nk=f;this.Tj=d;this.L&&this.L.after();Ko(this)};
n.Fk=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments,6),k=h.length,l=h[0].ja.length,m=k*l,p=!!m,q;for(q=0;q<m;q++){if(f===No){var r=q%k;var v=Math.floor(q/k)}else r=Math.floor(q/l),v=q%l;var w=h[r].ja[v];r=h[r].Zc;w&&(w=w.V(a,b,this.ta,c,d,e,this.Ga),w===rk.ACTIVE&&(this.rd=Infinity),w!==rk.DONE||r[v]||(Lo(this,this.f[v]),r[v]=!0),r[v]||(p=!1))}return p};function Lo(a,b){a.dispatchEvent({type:a.v.vj,target:b||a})}
n.s=function(){var a=this.c.Oa()[0],b=this.g;Sk(this.Xd);Ho(this,!0);a&&Dl(this,a,!1);Jo(this).forEach(function(c){c.C()});b.element&&b.element.removeChild(this.Fa);this.Fa=null;this.Hb=3;V.l.s.call(this)};n.ha=function(){this.Ea=Hk();this.Hb===xo&&(this.A=!1,this.Hb=1,Ko(this))};function Po(a,b,c){Fo(a,b*a.ua,c*a.ua);a.U.set(0,0);a.cb();a.ha()}function Fo(a,b,c){var d=a.ta;a=a.m;d.x=Xd(d.x+b,d.w);d.y=xd(0,wd(d.w,d.y+c));a.x=d.x/d.w;a.y=d.y/d.h}
n.Ce=function(a,b,c){a=El(this,El(this,a)+this.kb);Go(this,a,b,c)};V.prototype.zoomAt=V.prototype.Ce;function Go(a,b,c,d){var e=a.ua,f=a.g.center;c===+c&&d===+d?(c=(c-f.x)*e,d=(d-f.y)*e,a.U.set(c,d),Fo(a,c,d),a.ta.Ra(b),Fo(a,-c,-d)):(a.U.set(0,0),a.ta.Ra(b));a.zoom=b;a.cb();a.ha()}
function Bo(a,b,c,d){var e=a.getCapabilities().lookAt.zoom.max,f=b.hb(),g=d||f;if(b.mg()||c&&d)c=c===B?e:c;else{var h=new gj(a.ta.projection);h.Ra(e);var k=h.mb(b.Rb()).round();var l=h.mb(b.Nb()).round();e=h.w;b.Fb()&&(k.x-=e);d?(f=h.mb(g),b=2*xd(f.x-k.x,l.x-f.x),k=2*xd(f.y-k.y,l.y-f.y)):(b=l.x-k.x,k=l.y-k.y,g=f);c===B&&(f=a.qd[4],c=f.right-f.left,f=f.bottom-f.top,c=-8+wd(Cd(c/b*e)/Md,Cd(f/k*e)/Md)-a.kb,c=El(a,c))}return{zoom:zd(c),position:g}}
function Co(a){Ho(a,!0);a.a.xa()&&a.zb(!0);a.i.xa()&&a.Ab(!0);Ho(a,!0)}V.prototype.sc=function(a,b){Co(this);Qo(this,b);this.i.start(a,!!b)};V.prototype.startInteraction=V.prototype.sc;function Qo(a,b){if(b){var c={};c.mf=b.power;c.Pe=b.ease;c.duration=b.duration;a.j=c}}function yo(a,b){return El(a,El(a,b-a.kb)+a.kb)}
V.prototype.jc=function(a,b,c,d,e){var f=!1;this.i.xa()&&(b=this.i.store(a,b,c,d,e),this.i.Fc(Cl.COORD)&&(a=this.i.ee(),0<cm(a)&&(Po(this,-a.x,-a.y),f=!0)),b&&this.i.Fc(Cl.ZOOM)&&(a=this.i.Yf(),b=this.i.Zf(),b=Cd(Ed(2,this.zoom)*b)/Md,b!==this.zoom&&(b=yo(this,b),Go(this,b,a.x,a.y),f=!0)),f&&this.ha())};V.prototype.interaction=V.prototype.jc;
V.prototype.Ab=function(a){var b=this;if(this.i.xa()&&!a){if(this.j){a=this.i.Db();var c=this.i.xc();var d=this.j.duration;var e=(this.j.mf||1)*a;var f=new Hm(-e/(0<d?d:1),e);!E(c.x)&&!E(c.y)&&0<e&&b.i.Fc(Cl.COORD)&&Eo(this,function(g){e=f.Ye(g*d);E(e)||Po(b,yd(-c.x*e),yd(-c.y*e))},d,void 0,this.j.Pe)}this.j=null;this.i.clear()}};V.prototype.endInteraction=V.prototype.Ab;V.prototype.rc=function(a,b,c){Co(this);this.a.start(b,c);Qo(this,a)};V.prototype.startControl=V.prototype.rc;
V.prototype.control=function(a,b,c){if(E(+c))throw new D(this.control,2,c);if(E(a))throw new D(this.control,0,a);if(E(b))throw new D(this.control,1,b);this.a.xa()&&this.a.set(a,b,c,0,0,0)};V.prototype.control=V.prototype.control;
V.prototype.zb=function(a,b){var c=this,d;if(this.a.xa()){Ho(this,!0);var e=Hk();var f=e-this.fa;if(1<=f){var g=om(this.a);Ro(this,g,f)}if(!this.j||a||b)"function"===typeof b&&(a=this.nb(),a.zoom=this.zoom-this.kb,b(a),a.zoom+=this.kb,So(this,a));else{b=this.a.Db();var h=this.a.xc();var k=this.j.duration;var l=(this.j.mf||1)*b;var m=new Hm(-l/(0<k?k:1),l);!E(h.ob)&&!E(h.pb)&&0<l&&Eo(this,function(p,q,r,v){e&&(r=v-e,e=0);l=m.Ye(p*k)*r;E(l)||((d=h.qb*l)&&Go(c,yo(c,c.zoom+d),c.a.b,c.a.c),Po(c,yd(h.ob*
l),yd(h.pb*l)))},k,void 0,this.j.Pe)}this.a.reset()}};V.prototype.endControl=V.prototype.zb;
function So(a,b){var c=a.m,d=a.ta.projection.ad(b.position),e=a.ta.se(d),f=e.y;e=e.x;var g=b.zoom;c=a.ta.se(c);b=c.y;var h=c.x;c=a.zoom;var k=a.a.Db(),l=a.a.b,m=a.a.c,p=0;e=Ao(a,h,e);e-=h;f-=b;c=g-c;b=Dd(e*e+f*f+c*c);if(0!==k&&0!==b){var q=e/b;var r=f/b;var v=c/b;var w=k*k/(2*b);Eo(a,function(z,J){var G;if(1!==z){z=k*J-w*J*J/2;J=z-p;if(G=v*J)G=yo(a,a.zoom+G),Go(a,yo(a,G),l,m);Po(a,yd(q*J),yd(r*J));p=z}else a.m=d,Go(a,yo(a,g),l,m),a.cb(),a.ha()},2*b/k)}}
V.prototype.Rd=function(a){var b=this,c=a.c;this.U.set(0,0);c.ob||c.pb||c.qb?(this.fa=Hk(),Eo(this,function(d,e,f,g){b.fa=g;Ro(b,c,f)},Number.POSITIVE_INFINITY),this.ha()):Ho(this,!0)};function Ro(a,b,c){c=c||0;b.qb&&Go(a,yo(a,a.zoom+b.qb*c),a.a.atX,a.a.atY);Po(a,b.ob*c,b.pb*c)}function Eo(a,b,c,d,e){a.b&&a.b.xa()&&a.b.stop(!0);a.b=new vm(a,b,c,d,e);a.b.start()}function Ho(a,b){a.b&&a.b.xa()&&a.b.stop(b)}V.prototype.qh=function(){};V.prototype.enter=V.prototype.qh;
V.prototype.Xf=function(a){Bl(this.Fa,a)};V.prototype.exit=V.prototype.Xf;V.prototype.capture=function(a,b,c,d){var e=this.Fa.ownerDocument.createElement("canvas"),f=e.getContext("2d"),g=this.ua;e.width=(c-a)*g;e.height=(d-b)*g;for(c=0;c<this.o.length;c++)d=this.o[c],C(d,rm)&&f.drawImage(d.K(),-a*g,-b*g);return Xb(e)};var Oo=0,No=1,vo=1E3,Mo=256;

function To(a){var b=a.ownerDocument;b=b.documentElement||b.body.parentNode||b.body;try{var c=a.getBoundingClientRect()}catch(d){c={top:0,right:0,bottom:0,left:0,height:0,width:0}}return{x:c.left+("number"===typeof window.pageXOffset?window.pageXOffset:b.scrollLeft),y:c.top+("number"===typeof window.pageYOffset?window.pageYOffset:b.scrollTop)}}var Uo=function(){return this}.apply(null);function Vo(a,b,c,d,e,f,g){Vo.l.constructor.call(this,a);this.pointers=b;this.changedPointers=c;this.targetPointers=d;this.currentPointer=e;this.originalEvent=g;this.target=f}u(Vo,sd);t("H.mapevents.Event",Vo);function Wo(a,b,c,d,e,f){if(isNaN(a))throw Error("x needs to be a number");if(isNaN(b))throw Error("y needs to be a number");if(isNaN(c))throw Error("pointer must have an id");this.viewportX=a;this.viewportY=b;this.target=null;this.id=c;this.type=d;this.dragTarget=null;this.button=uc(e)?e:-1;this.buttons=uc(f)?f:0;this.a=this.button}t("H.mapevents.Pointer",Wo);
function Xo(a,b,c){if(isNaN(b))throw Error("x needs to be a number");if(isNaN(c))throw Error("y needs to be a number");a.viewportX=b;a.viewportY=c}Wo.prototype.kn=function(){return this.a};Wo.prototype.getLastChangedButton=Wo.prototype.kn;function Yo(a,b){a.a=b;a.buttons|=Wo.prototype.b[+b]||0}function Zo(a,b){a.a=b;a.buttons&=~(Wo.prototype.b[+b]||0)}Wo.prototype.b=[1,4,2];var $o={NONE:-1,LEFT:0,MIDDLE:1,RIGHT:2};Wo.Button=$o;function ap(a){this.a=a instanceof Array?a.slice(0):[]}n=ap.prototype;n.clear=function(){this.a.splice(0,this.a.length)};n.length=function(){return this.a.length};n.indexOf=function(a){for(var b=this.a.length;b--;)if(this.a[b].id===a)return b;return-1};function bp(a,b){b=a.indexOf(b);return-1!==b?a.a[b]:null}n.remove=function(a){a=this.indexOf(a);return-1!==a?this.a.splice(a,1)[0]:null};function cp(a,b){for(var c=a.a.length,d=[];c--;)a.a[c].type!==b&&d.push(a.a[c]);a.a=d}
function dp(a,b){for(var c=a.a.length;c--;)if(a.a[c].dragTarget===b)return!0;return!1}n.push=function(a){if(a instanceof Wo)return this.a.push(a);throw Error("list needs a pointer");};n.Oa=function(){return this.a};n.clone=function(){return new ap(this.a)};function ep(a,b,c){c=c||{};if(!(a instanceof T))throw Error("events: map instance required");if(!(b instanceof Array))throw Error("events: map array required");od.call(this);this.mh=c.mh||300;this.Hj=c.Hj||50;this.Ll=c.Ll||50;this.Ml=c.Ml||500;this.Yh=c.Yh||900;this.Xh=c.Xh||8;this.map=a;this.o=this.map.c;this.j=this.o.element;this.B=b;this.a=new ap;this.b=new ap;this.i={};this.c=null;this.u=!0;this.W={};this.f={};this.m=null;this.Ne=A(this.Ne,this);this.L={pointerdown:this.tm,pointermove:this.um,
pointerup:this.vm,pointercancel:this.sm};fp(this)}u(ep,od);function fp(a,b){var c,d=a.B.length;for(c=0;c<d;c++){var e=a.B[c];var f=e.listener;"function"===typeof f&&(b?(e.target||a.j).removeEventListener(e.Ua,f):(e.target||a.j).addEventListener(e.Ua,f))}}function gp(a,b,c){var d;if("function"===typeof a.L[b]){"pointermove"!==b&&(a.u=!0);var e=0;for(d=a.b.length();e<d;e++){var f=a.b.a[e];a.j.contains(c.composedPath()[0])?hp(a,f,a.Oj.bind(a,c,b,f)):a.Oj(c,b,f,null)}}a.b.clear()}n=ep.prototype;
n.Oj=function(a,b,c,d){ip(c.id,this.W);this.L[b].call(this,c,d,a)};function hp(a,b,c){if(a.c===b)c(b.target);else{var d=a.o;var e=b.viewportX;b=b.viewportY;if(0>e||0>b||e>=d.width||b>=d.height)c(y);else{var f=a.map;f.fe(e,b,function(g){c(g||f)})}}}
n.vm=function(a,b,c){var d=a.id;a.target=b;jp(this,a,c);kp(this,b,"pointerup",c,a);"mouse"!==a.type&&kp(this,b,"pointerleave",c,a);b=this.i[a.id];var e={x:a.viewportX,y:a.viewportY},f=c.timeStamp,g=a.target,h=this.m;b&&b.target===g&&b.Je.$a(e)<this.Ll&&f-b.dj<this.Ml?(kp(this,g,"tap",c,a),h&&h.target===g&&f-h.dj<this.mh?h.Je.$a({x:a.viewportX,y:a.viewportY})<this.Hj&&(kp(this,g,"dbltap",c,a),this.m=null):this.m={target:g,Je:new I(a.viewportX,a.viewportY),dj:c.timeStamp}):this.m=null;this.i={};ip(d,
this.f)};function jp(a,b,c){b===a.c&&(kp(a,b.dragTarget,"dragend",c,b),a.c=null,ip(b.id,a.W));b.dragTarget=null}n.Ne=function(a,b){var c=this;kp(this,a.dragTarget,"drag",b,a);ip(a.id,this.W);this.W[a.id]=setTimeout(function(){c.Ne(a,b)},150)};function ip(a,b){b[a]&&(b[a].timeout?clearTimeout(b[a].timeout):clearTimeout(b[a]),delete b[a])}
function lp(a,b,c){var d=b.target,e=new I(b.viewportX,b.viewportY),f=b.id;ip(f,a.f);var g=setTimeout(function(){d&&d===b.target&&e.$a({x:b.viewportX,y:b.viewportY})<a.Xh&&(kp(a,d,"longpress",c,b),delete a.i[b.id])},a.Yh);a.f[f]={timeout:g,Je:e}}
n.um=function(a,b,c){var d=a.dragTarget,e=a.id;var f=a.target;a.target=b;f!==b&&(kp(this,f,"pointerleave",c,a),kp(this,b,"pointerenter",c,a));d?this.c?(this.Ne(a,c),this.f[e]&&this.f[e].Je.$a({x:a.viewportX,y:a.viewportY})>this.Xh&&ip(e,this.f)):this.u?this.u=!1:(this.c=a,kp(this,d,"dragstart",c,a),this.Ne(a,c),delete this.i[e],this.u=!0):(!this.c||this.c&&this.c.dragTarget!==b&&this.c.dragTarget!==this.map)&&kp(this,b,"pointermove",c,a)};
n.tm=function(a,b,c){var d=!(/^(?:mouse|pen)$/.test(a.type)&&0!==c.button);if(b){a.target=b;this.i[a.id]={Je:new I(a.viewportX,a.viewportY),target:a.target,dj:c.timeStamp};"mouse"!==a.type&&kp(this,b,"pointerenter",c,a);var e=kp(this,b,"pointerdown",c,a);!this.c&&d&&(b.draggable&&!dp(this.a,b)?a.dragTarget=b:!this.map.draggable||e.defaultPrevented||dp(this.a,this.map)||(a.dragTarget=this.map));lp(this,a,c)}};
n.sm=function(a,b,c){var d=a.id;a.target=null;b?(kp(this,b,"pointerleave",c,a),kp(this,b,"pointercancel",c,a)):kp(this,this.map,"pointercancel",c,a);jp(this,a,c);this.i={};ip(d,this.f)};function kp(a,b,c,d,e){if(b&&"function"===typeof b.dispatchEvent){var f=Vo;var g=a.a.Oa(),h=a.b.Oa();a=a.a;var k,l=a.a.length,m=[];for(k=0;k<l;k++)a.a[k].target===b&&m.push(a.a[k]);f=new f(c,g,h,m,e,b,d);e.button=/^(?:longpress|(?:dbl)?tap|pointer(?:down|up))$/.test(c)?e.a:$o.NONE;b.dispatchEvent(f)}return f}
n.s=function(){fp(this,!0);this.a.clear();this.b.clear();var a=this.W,b;for(b in a)ip(b,a);a=this.f;for(var c in a)ip(c,a);this.c=this.i=this.m=this.map=this.b=this.a=this.B=this.P=null;od.prototype.s.call(this)};function mp(a){this.g=A(this.g,this);ep.call(this,a,[{Ua:"touchstart",listener:this.g},{Ua:"touchmove",listener:this.g},{Ua:"touchend",listener:this.g},{Ua:"touchcancel",listener:this.g}]);this.R={touchstart:"pointerdown",touchmove:"pointermove",touchend:"pointerup",touchcancel:"pointercancel"};this.A=(a=(a=a.o)?a.K():null)?Array.prototype.slice.call(a.querySelectorAll("a"),0):[]}u(mp,ep);
mp.prototype.g=function(a){var b=a.touches,c=this.a.length(),d;if("touchstart"===a.type&&c>=b.length){c=this.a.clone();for(d=b.length;d--;)c.remove(b[d].identifier);for(d=c.length();d--;)this.a.remove(c.a[d].id);this.b=c;gp(this,"pointercancel",a);this.b.clear()}if(this.R[a.type]){b=To(this.o.element);c=a.type;d=a.changedTouches;var e=d.length,f;this.b.clear();for(f=0;f<e;f++){var g=d[f];var h=bp(this.a,g.identifier);var k=g.pageX-b.x;var l=g.pageY-b.y;if(h)if("touchmove"===c){g=Math.abs(h.viewportX-
k);var m=Math.abs(h.viewportY-l);if(1<g||1<m||1===g&&1===m)Xo(h,k,l),this.b.push(h)}else"touchend"===c&&(this.a.remove(h.id),this.b.push(h),Zo(h,$o.LEFT));else h=new Wo(k,l,g.identifier,"touch",$o.LEFT,1),this.a.push(h),this.b.push(h)}gp(this,this.R[a.type],a);-1===this.A.indexOf(a.target)&&a.preventDefault()}};mp.prototype.s=function(){this.A=null;ep.prototype.s.call(this)};function np(a){var b=op(this);(window.PointerEvent||window.MSPointerEvent)&&b.push({Ua:"MSHoldVisual",listener:"prevent"});ep.call(this,a,b)}u(np,ep);function op(a){var b=!!window.PointerEvent,c,d,e=[];a.g=A(a.g,a);"MSPointerDown MSPointerMove MSPointerUp MSPointerCancel MSPointerOut MSPointerOver".split(" ").forEach(function(f){c=f.toLowerCase().replace(/ms/g,"");d=b?c:f;e.push({Ua:d,listener:a.g,target:/^pointer(up|move)$/.test(c)?window:null})});return e}var pp={2:"touch",3:"pen",4:"mouse"};
np.prototype.g=function(a){var b=window.PointerEvent?a.type:a.type.toLowerCase().replace(/ms/g,""),c=To(this.j),d=bp(this.a,a.pointerId),e=a.pageX-c.x;c=a.pageY-c.y;var f=pp[a.pointerType]||a.pointerType;$c&&"rtl"===x.getComputedStyle(this.o.element).direction&&(e-=(x.devicePixelRatio-1)*this.o.width);if(!(d||/^pointer(up|out|cancel)$/.test(b)||"touch"===f&&"pointerdown"!==b)){d={x:e,y:c};var g=a.pointerType;"number"===typeof g&&(g=pp[g]);d=new Wo(d.x,d.y,a.pointerId,g,a.button,a.buttons);this.a.push(d)}if(d)if(/^pointer(up|cancel)$/.test(b)?
("touch"===f&&this.a.remove(d.id),Zo(d,a.button)):"pointerdown"===b&&("touch"===a.pointerType&&(cp(this.a,"mouse"),cp(this.a,"pen")),Yo(d,a.button)),this.b.push(d),"pointermove"!==b)Xo(d,e,c),gp(this,/^pointer(over|out)$/.test(b)?"pointermove":b,a);else if(d.viewportX!==e||d.viewportY!==c)Xo(d,e,c),gp(this,b,a);this.b.clear()};function qp(a,b,c,d){qp.l.constructor.call(this,"contextmenu");this.items=[];this.viewportX=a;this.viewportY=b;this.target=c;this.originalEvent=d}u(qp,sd);t("H.mapevents.ContextMenuEvent",qp);function rp(a){this.Kh=A(this.Kh,this);this.Mh=A(this.Mh,this);this.Lh=A(this.Lh,this);this.A=!1;this.g=-1;this.R=0;rp.l.constructor.call(this,a,[{Ua:"contextmenu",listener:this.Kh},{target:a,Ua:"longpress",listener:this.Mh},{target:a,Ua:"dbltap",listener:this.Lh}])}u(rp,ep);n=rp.prototype;n.Mh=function(a){var b=a.currentPointer;"touch"===b.type&&1===a.pointers.length&&sp(this,b.viewportX,b.viewportY,a.originalEvent,a.target)};n.Lh=function(a){"touch"===a.currentPointer.type&&(this.R=Date.now())};
n.Kh=function(a){var b=this;-1===this.g?this.g=setTimeout(function(){var c=To(b.j),d=a.pageX-c.x;c=a.pageY-c.y;b.g=-1;sp(b,d,c,a)},this.mh):(clearInterval(this.g),this.g=-1);a.preventDefault()};function sp(a,b,c,d,e){var f=a.map,g=Date.now()-a.R;e?!a.A&&g>a.Yh&&(a.A=!0,e.dispatchEvent(new qp(b,c,e,d)),De(f.K(),a.mj,a.Nj,!1,a)):f.fe(b,c,a.wo.bind(a,b,c,d))}n.wo=function(a,b,c,d){d=d&&Da(d.dispatchEvent)?d:this.map;sp(this,a,b,c,d)};n.mj=["mousedown","touchstart","pointerdown","wheel"];
n.Nj=function(){this.A&&(this.A=!1,this.map.dispatchEvent(new sd("contextmenuclose",this.map)))};n.s=function(){var a=this.map.K();clearInterval(this.g);a&&Ke(a,this.mj,this.Nj,!1,this);ep.prototype.s.call(this)};function tp(a,b,c,d,e){tp.l.constructor.call(this,"wheel");this.delta=a;this.viewportX=b;this.viewportY=c;this.target=d;this.originalEvent=e}u(tp,sd);t("H.mapevents.WheelEvent",tp);function up(a){var b="onwheel"in document;this.U=b;this.R=(b?"d":"wheelD")+"elta";this.g=A(this.g,this);up.l.constructor.call(this,a,[{Ua:(b?"":"mouse")+"wheel",listener:this.g}]);this.A=this.map.c}u(up,ep);
up.prototype.g=function(a){if(!a.Wl){var b=To(this.j);var c=a.pageX-b.x;b=a.pageY-b.y;var d=this.R,e=a[d+(d+"Y"in a?"Y":"")],f;$c&&"rtl"===x.getComputedStyle(this.A.element).direction&&(c-=(x.devicePixelRatio-1)*this.A.width);if(e){var g=Math.abs;var h=g(e);e=(!(f=a[d+"X"])||3<=h/g(f))&&(!(f=a[d+"Z"])||3<=h/g(f))?((0<e)-(0>e))*(this.U?1:-1):0}c=new tp(e,c,b,null,a);c.delta&&(a.stopImmediatePropagation(),a.preventDefault(),this.map.fe(c.viewportX,c.viewportY,this.aa.bind(this,c)))}};
up.prototype.aa=function(a,b){var c=a.target=b||this.map,d,e;setTimeout(function(){c.dispatchEvent(a);a.f||(d=a.originalEvent,e=new x.WheelEvent("wheel",d),e.Wl=1,d.target.dispatchEvent(e))},0)};function vp(a){this.g=A(this.g,this);ep.call(this,a,[{Ua:"mousedown",listener:this.g},{Ua:"mousemove",listener:this.g,target:window},{Ua:"mouseup",listener:this.g,target:window},{Ua:"mouseover",listener:this.g},{Ua:"mouseout",listener:this.g},{Ua:"dragstart",listener:this.A}])}u(vp,ep);
vp.prototype.g=function(a){var b=a.type,c=To(this.j);c={x:a.pageX-c.x,y:a.pageY-c.y};var d;(d=this.a.a[0])||(d=new Wo(c.x,c.y,1,"mouse"),this.a.push(d));this.b.push(d);Xo(d,c.x,c.y);/^mouse(?:move|over|out)$/.test(b)?gp(this,"pointermove",a):(/^mouse(down|up)$/.test(b)&&(c=a.which-1,"up"===Uo.RegExp.$1?Zo(d,c):Yo(d,c)),gp(this,b.replace("mouse","pointer"),a));this.b.clear()};vp.prototype.A=function(a){a.preventDefault()};function wp(a){var b=a.c.element.style;if(-1!==xp.indexOf(a))throw Error("InvalidArgument: map is already in use");this.a=a;xp.push(a);b.msTouchAction=b.touchAction="none";ad||!window.PointerEvent&&!window.MSPointerEvent?(this.c=new mp(this.a),this.b=new vp(this.a)):this.c=new np(this.a);this.g=new up(this.a);this.f=new rp(this.a);this.a.yb(this.C,this);od.call(this)}u(wp,od);t("H.mapevents.MapEvents",wp);wp.prototype.c=null;wp.prototype.b=null;wp.prototype.g=null;wp.prototype.f=null;
var xp=[];Gc(xp);wp.prototype.C=function(){this.a=null;this.c.C();this.g.C();this.f.C();this.b&&this.b.C();xp.splice(xp.indexOf(this.a),1);od.prototype.C.call(this)};wp.prototype.dispose=wp.prototype.C;wp.prototype.Fm=function(){return this.a};wp.prototype.getAttachedMap=wp.prototype.Fm;function yp(a,b){b=void 0===b?{}:b;var c;yp.l.constructor.call(this);if(-1!==zp.indexOf(a))throw new D(yp,0,"events are already used");this.b=c=a.a;this.j=a;zp.push(a);c.draggable=!0;this.i=b.kinetics||{duration:600,ease:Vl};this.m=b.modifierKey||"Alt";this.enable(b.enabled);this.c=c.c;this.f=this.c.element;this.g=0;c.addEventListener("dragstart",this.ii,!1,this);c.addEventListener("drag",this.Ik,!1,this);c.addEventListener("dragend",this.hi,!0,this);c.addEventListener("wheel",this.Xk,!1,this);c.addEventListener("dbltap",
this.Sk,!1,this);c.addEventListener("pointermove",this.Jk,!1,this);Ce(this.f,"contextmenu",this.Hk,!1,this);a.yb(this.C,this)}u(yp,od);t("H.mapevents.Behavior",yp);var zp=[];Gc(zp);yp.prototype.a=0;var Ap={PANNING:1,PINCH_ZOOM:2,WHEEL_ZOOM:4,DBL_TAP_ZOOM:8,FRACTIONAL_ZOOM:16,TILT:32,HEADING:64};yp.Feature=Ap;var Bp=Ap.PANNING,Cp=Ap.PINCH_ZOOM,Dp=Ap.WHEEL_ZOOM,Ep=Ap.DBL_TAP_ZOOM,Fp=Ap.FRACTIONAL_ZOOM,Gp=Ap.TILT,Hp=Ap.HEADING,Ip=Bp|Cp|Dp|Ep|Fp|Gp|Hp;yp.DRAGGING=Bp;yp.WHEELZOOM=Dp;
yp.DBLTAPZOOM=Ep;yp.FRACTIONALZOOM=Fp;function Jp(a,b){if(a!==+a||a%1||0>a||2147483647<a)throw new D(b,0,"integer in range [0...0x7FFFFFFF] required");}yp.prototype.disable=function(a){var b=this.a;a!==B?(Jp(a,this.disable),b^=b&a):b=0;this.c.endInteraction(!0);this.a=b;this.b.draggable=0<(b&(Bp|Gp|Hp|Cp))};yp.prototype.disable=yp.prototype.disable;yp.prototype.enable=function(a){var b=this.a;a!==B?(Jp(a,this.enable),b|=a&Ip):b=Ip;this.a=b;this.b.draggable=0<(b&(Bp|Gp|Hp|Cp))};
yp.prototype.enable=yp.prototype.enable;yp.prototype.isEnabled=function(a){Jp(a,this.isEnabled);return a===(this.a&a)};yp.prototype.isEnabled=yp.prototype.isEnabled;
function Kp(a,b,c){var d="touch"===b.currentPointer.type,e=0,f;if(f=!d){f=a.m;var g,h=b.originalEvent;h.getModifierState?g=h.getModifierState(f):g=!!h[f.replace(/^Control$/,"ctrl").toLowerCase()+"Key"];f=g}f?e|=Gp|Hp:(e|=Bp,d&&(b=b.pointers,2===b.length&&(e|=Cp|Hp,c?55>Bd(b[0].viewportY-b[1].viewportY)&&(e|=Gp):a.Qh&Cl.TILT&&(e|=Gp))));e&=a.a;return(e&Gp?Cl.TILT:0)|(e&Hp?Cl.HEADING:0)|(e&Cp?Cl.ZOOM:0)|(e&Bp?Cl.COORD:0)}
function Lp(a){var b=a.pointers;a=b[0];b=b[1];a=[a.viewportX,a.viewportY];b&&a.push(b.viewportX,b.viewportY);return a}n=yp.prototype;n.Qh=0;n.ii=function(a){var b=Kp(this,a,!0);if(this.Qh=b){var c=this.c;a=Lp(a);c.startInteraction(b,this.i);c.interaction.apply(c,a);if(this.a&Dp&&!(this.a&Fp)&&(b=a[0],c=a[1],this.g)){a=this.b.vb();var d=(0>this.g?Ad:zd)(a);a!==d&&(this.g=0,Mp(this,a,d,b,c))}}};
n.Ik=function(a){var b=Kp(this,a,!1);if(b!==this.Qh)"pointerout"!==a.originalEvent.type&&"pointerover"!==a.originalEvent.type&&(this.hi(a),this.ii(a));else if(b){b=this.c;var c=Lp(a);b.interaction.apply(b,c);a.originalEvent.preventDefault()}};n.hi=function(a){Kp(this,a,!1)&&this.c.endInteraction(!this.i)};
function Mp(a,b,c,d,e){var f=+c-+b;a=a.b.b;if(isNaN(+b))throw Error("start zoom needs to be a number");if(isNaN(+c))throw Error("to zoom needs to be a number");0!==f&&(a.startControl(null,d,e),a.control(0,0,6,0,0,0),a.endControl(!0,function(g){g.zoom=c}))}n.Xk=function(a){if(!a.defaultPrevented&&this.a&Dp){var b=a.delta;var c=this.b.vb();var d=this.b;var e=d.gc().type;d=this.a&Fp?c-b:(0>-b?Ad:zd)(c)-b;if(e===ek.P2D||e===ek.WEBGL||e===ek.HARP)Mp(this,c,d,a.viewportX,a.viewportY),this.g=b;a.preventDefault()}};
n.Jk=function(){};n.Sk=function(a){var b=a.currentPointer,c=this.b.vb(),d=a.currentPointer.type,e=this.b.gc().type;(e===ek.P2D||e===ek.WEBGL||e===ek.HARP)&&this.a&Ep&&(a="mouse"===d?0===a.originalEvent.button?-1:1:0<a.pointers.length?1:-1,a=this.a&Fp?c-a:(0>-a?Ad:zd)(c)-a,Mp(this,c,a,b.viewportX,b.viewportY))};n.Hk=function(a){return this.a&Ep?(a.preventDefault(),!1):!0};
n.C=function(){var a=this.b;a&&(a.draggable=!1,a.removeEventListener("dragstart",this.ii,!1,this),a.removeEventListener("drag",this.Ik,!1,this),a.removeEventListener("dragend",this.hi,!0,this),a.removeEventListener("wheel",this.Xk,!1,this),a.removeEventListener("dbltap",this.Sk,!1,this),a.removeEventListener("pointermove",this.Jk,!1,this),this.b=null);this.f&&(this.f.style.msTouchAction="",Ke(this.f,"contextmenu",this.Hk,!1,this),this.f=null);this.i=this.c=null;zp.splice(zp.indexOf(this.j),1);od.prototype.C.call(this)};
yp.prototype.dispose=yp.prototype.C;t("H.mapevents.buildInfo",function(){return Ff("H-mapevents","1.30.8","cb4e043")});

R.prototype.u=ca(3,function(a){var b=this.getCache(),c=this;if(a!==y){C(a,Lk,R.prototype.u,0);var d=a}else d=pl;d!==b&&b.ra(function(e,f,g){return c.ec(e)?(d.add(e,f,g),!0):!1});this.R=d});bi.prototype.b=ca(2,function(a){this.i=a;a=this.getState();a!==Zh.INIT&&a!==Zh.LOADING&&ji(this)});function Np(a,b){Xa.apply(null,arguments);return a}function Op(){this.a={}}
function Pp(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d,e=b[c],f=a.a[c]||(a.a[c]=[]),g=e.length;for(d=0;d<g;d++)f.push(new Qp(e[d]))}}function Rp(a,b,c,d){var e=(a=a.a[b])?a.length:0,f=[];for(b=0;b<e;b++)a[b].Cd(c,d)&&f.push(a[b]);return f}
function Qp(a){var b,c=a.boxes;this.label=a.label;this.min=a.minLevel;this.max=a.maxLevel;this.b=[];if(c&&(b=c.length)){var d=c[0];var e=new K(d[0],d[1],d[2],d[3]);this.b.push(e);this.a=new K(d[0],d[1],d[2],d[3]);for(a=1;a<b;a++)d=c[a],e=new K(d[0],d[1],d[2],d[3]),this.b.push(e),this.a.lc(e,!1,this.a)}}Qp.prototype.Cd=function(a,b){if(a>=this.min&&a<=this.max)if((a=this.b.length)&&this.a){if(this.a.Cd(b))for(;a--;)if(this.b[a].Cd(b))return!0}else return!0;return!1};function W(a,b,c,d,e,f){if(a&&b)this.Fl(a),this.Kg(b),this.Od(c),this.El(e),this.ul(f),this.Ui(d);else throw Error('Parameters "scheme" and "host" must be specified');}t("H.service.Url",W);
function Sp(a,b){var c=x.document,d,e=c&&c.createElement("a"),f="";if(c){if(b){var g=(d=c.getElementsByTagName("base")[0])&&d.href;var h=c.head;var k=d||h.appendChild(c.createElement("base"));k.href=b}e.href=a;f=e.href;b&&(d?d.href=g:h.removeChild(k))}else/[\w]+:\/\//.test(a)&&(f=a);g=/(?:(\w+):\/\/)?(?:([^:]+):([^@/]*)@)?([^/:]+)?(?:[:]{1}([0-9]+))?(\/[^?#]*)?(\?[^#]+)?(#.*)?/.exec(f);a=g[1];k=g[4];b=g[5];h=g[6];c=g[7];d=g[8];!g[2]&&k&&/@/.test(k)&&(k=k.split("@")[1]);g=k;h=h&&0<h.length?h.substr(1):
"";k={};if(c)for(e=/([?&]?([^=&+]+))(=([^&]+))?/g;f=e.exec(c);)k[decodeURIComponent(f[2])]=f[4]?decodeURIComponent(f[4]):void 0;return new W(a,g,h,k,isNaN(+b)?void 0:+b,d&&0<d.length?d.substr(1):"")}W.parse=Sp;var Tp=0;W.prototype.clone=function(){Tp++;var a={},b;for(b in this.a)a[b]=this.a[b];return new W(this.m,this.f,this.c,a,this.g,this.b)};W.prototype.clone=W.prototype.clone;
W.prototype.Fl=function(a){if(!a||"string"!==typeof a)throw Error('The "scheme" parameter must be a non-empty string.');this.m=a;return this};W.prototype.setScheme=W.prototype.Fl;W.prototype.Kn=function(){return this.m};W.prototype.getScheme=W.prototype.Kn;W.prototype.Kg=function(a){if(!a||"string"!==typeof a||"-"===a.charAt(0)||"."===a.charAt(0)||"."===a.charAt(a.length-1))throw Error('The "host" parameter is not a valid host name.');this.f=a;return this};W.prototype.setHost=W.prototype.Kg;
W.prototype.dn=function(){return this.f};W.prototype.getHost=W.prototype.dn;W.prototype.Od=function(a){this.c=a||void 0;return this};W.prototype.setPath=W.prototype.Od;W.prototype.xn=function(){return this.c};W.prototype.getPath=W.prototype.xn;W.prototype.Ui=function(a){if(a)if("object"==typeof a)this.a=a;else throw Error('Parameter "params" must be an object.');else this.a={};return this};W.prototype.setQuery=W.prototype.Ui;W.prototype.pk=function(){return!Up(this)};W.prototype.hasQuery=W.prototype.pk;
W.prototype.getQuery=function(){return this.a};W.prototype.getQuery=W.prototype.getQuery;W.prototype.El=function(a){if(a&&isNaN(parseInt(a,10)))throw Error('Parameter "port" must be a number or undefined');this.g=+a||void 0;return this};W.prototype.setPort=W.prototype.El;W.prototype.Bn=function(){return this.g};W.prototype.getPort=W.prototype.Bn;W.prototype.ul=function(a){this.b=a||void 0;return this};W.prototype.setAnchor=W.prototype.ul;W.prototype.xd=function(){return this.b};
W.prototype.getAnchor=W.prototype.xd;W.prototype.I=function(a){if("object"!==typeof a)throw Error('Parameter "other" must be an object.');var b=this.a,c;for(c in a)a.hasOwnProperty(c)&&"function"!==typeof a[c]&&(b[c]=a[c]);return this};W.prototype.mergeQuery=W.prototype.I;W.prototype.Na=function(a){if(!a||"string"!==typeof a)throw Error('Parameter "subDomain" must be a non-empty string');"."===a.substr(a.length-1)&&(a=a.substr(0,a.length-1));return this.Kg(a+"."+this.f)};
W.prototype.addSubDomain=W.prototype.Na;W.prototype.F=function(a){if(!a||"string"!==typeof a)throw Error('Parameter "subPath" must be a non-empty string');return this.Od((this.c?this.c+"/":"")+a)};W.prototype.addSubPath=W.prototype.F;W.prototype.toString=function(){return[this.m+"://",this.f,this.g?":"+this.g:"",this.c||!Up(this)||this.b?"/":"",this.c?encodeURI(this.c):"",Vp(this),this.b?"#"+encodeURIComponent(this.b):""].join("")};W.prototype.toString=W.prototype.toString;
function Vp(a){function b(g,h){return encodeURIComponent(g)+(void 0===h?"":"="+encodeURIComponent(h).replace(/[!'()*]/g,function(k){return"%"+k.charCodeAt(0).toString(16)}))}var c=[],d,e=a.a;for(d in e)if(e.hasOwnProperty(d)&&"function"!==typeof e[d]){var f=a.a[d];C(f,Wp)?f.Ul.forEach(function(g){c.push(b(d,g))}):c.push(b(d,f))}return 0<c.length?"?"+c.join("&"):""}function Xp(a){var b=Ff("H-service","1.30.8","00959ca");a.a.xnlp="CL_JSMv3."+b.version;return a}
function Up(a){var b,c=0;for(b in a.a)if(a.a.hasOwnProperty(b)&&"function"!==typeof a.a[b]&&(c++,0<c))break;return!c}function Wp(a){var b;if(!zc(a))throw new D(Wp,0,a);for(b=0;b<a.length;b++){var c=a[b];if(!Ac(c)&&!Dc(c))throw new D(Wp,0,"The array can only contain strings and numbers");}this.Ul=a}W.MultiValueQueryParameter=Wp;Wp.prototype.Vn=function(){return this.Ul};Wp.prototype.getValues=Wp.prototype.Vn;var Yp=globalThis;sc("monospace serif");function Zp(){}Zp.prototype.pop=function(a){this[a]||(this[a]=[]);return this[a].pop()||Yp.document.createElement("canvas")};Zp.prototype.push=function(a,b){this[b]||(this[b]=[]);this[b].push(a)};var $p=new Zp;t("H.service.util.eval",function(a){return eval(a)});function bq(){var a=decodeURIComponent(x.H.getScriptPath());a=a?"/"===a[a.length-1]?a.substring(0,a.length-1):a:"https://js.api.here.com/v3/3.1.30.8";return Sp(a).F("styles")};function cq(a,b,c,d,e,f,g){var h=this;g=g||{};f=f?f:{};var k=a.D().clone().F(b+"/"+a.Ac()+"/"+c).I(f),l=a.Ih();this.B=a;this.T=k;Ak.call(this,{tileSize:d,max:512===d?19:20,min:512===d?2:0,getURL:function(m,p,q){var r=h.T.clone();l&&r.Na(l[(q+p+m)%l.length]);r.F(q+"/"+m+"/"+p+"/"+d+"/"+e);return r.toString()},crossOrigin:g.crossOrigin,headers:g.headers,uri:k.toString().replace(/_/g,"")+d,engineType:g.engineType});this.Fa=b;this.m=c;this.a=f;this.Ea=c.split(".")[0];this.pg=A(this.pg,this);this.getCopyrights=
this.va;a.addEventListener("versionupdate",this.pg)}u(cq,Ak);cq.prototype.MAX_STORE_TIME=2592E6;n=cq.prototype;n.s=function(){Ak.prototype.s.call(this);this.B.removeEventListener("versionupdate",this.pg)};n.va=function(a,b){return Rp(this.B.va(),this.Ea,b,a)};n.pg=function(){var a=this.B;this.T=a.D().clone().F(this.Fa+"/"+a.Ac()+"/"+this.m).I(this.a);this.reload(!1)};n.hh=function(){return md()};n.ie=function(){return md()?ld():cq.l.ie.call(this)};function dq(a,b){b=void 0===b?{}:b;if(!a.vk)throw new Yc(a);dq.l.constructor.call(this);var c=eq(this,b);if(!c.baseUrl&&!c.platformBaseUrl)throw new D(a,0,'either "baseUrl" or "platformBaseUrl" must be specified');this.c=(c.baseUrl?c.baseUrl:c.platformBaseUrl).clone();a=c.baseUrl?b:c;a.host&&this.c.Kg(a.host);a.subDomain&&this.c.Na(a.subDomain);a.path&&this.c.Od(a.path);Xp(this.c);this.gf=c.headers||{}}u(dq,F);t("H.service.Service",dq);function eq(a,b){a=a.a();return b?Np({},a,b):a}
dq.prototype.a=function(){return{}};dq.prototype.D=function(){return this.c};dq.prototype.getUrl=dq.prototype.D;dq.prototype.J=function(a,b,c,d){d=new sf(void 0===d?"application/json":d,a.toString(),ge,{headers:this.gf});d.then(b,fq(this,a,c));return d};function fq(a,b,c){return function(d){return"function"!==typeof d.json?Promise.reject(c(gq(b,d))):d.json().then(function(e){return c(a.b(e))},function(){return c(gq(b,d))})}}dq.prototype.b=function(a){return Error(a.message)};
function gq(a,b){return Error((b.statusText?"["+b.statusText+"] ":"")+a+" request failed")};function Y(a){a=Np({},this.b,a);var b=a.apikey||a.apiKey,c=a.baseUrl;if(c=b?c?0:"baseUrl":"apikey")throw new D(Y,0,'"'+c+'" must be specified');this.xl(a.baseUrl);this.a=b;this.c.I({apikey:b});this.f=a.headers||{};this.g=Va(a.servicesConfig||{})}t("H.service.Platform",Y);Y.prototype.b={apikey:null,baseUrl:new W("https","hereapi.com")};Y.prototype.xl=function(a){this.c=Xp(a.clone());this.a=a=this.a;this.c.I({apikey:a})};Y.prototype.setBaseUrl=Y.prototype.xl;Y.prototype.fc=function(){return this.c};
Y.prototype.getBaseUrl=Y.prototype.fc;Y.prototype.Ya=function(a,b){try{return a.vk=!0,new a(Np({platformBaseUrl:this.fc(),headers:this.f},this.g[a.CONFIG_KEY]||{},b||{}))}finally{delete a.vk}};Y.prototype.createService=Y.prototype.Ya;function hq(a){hq.l.constructor.call(this,hq,a);a=eq(this,a);this.bc=a.shards;(this.Sa=a.ignoreTypes?null:a.type)&&this.D().Na(this.Sa);this.cc=a.version;this.Yc=new Op;this.Bi={};this.Tf=0;"newest"===this.cc&&this.sh()}u(hq,dq);t("H.service.MapTileService",hq);hq.prototype.a=function(){return{subDomain:"maps.ls",path:"maptile/2.1",type:"base",version:"newest",shards:["1","2","3","4"]}};hq.CONFIG_KEY="maptile";
function iq(a,b){for(var c={},d=a[b+"s"][b],e=d.length;e--;)c[d[e].id]=d[e];a[b+"s"]=c}hq.prototype.Ih=function(){return this.bc};hq.prototype.jk=function(){return this.Sa};hq.prototype.getType=hq.prototype.jk;hq.prototype.Ac=function(){return this.cc};hq.prototype.getVersion=hq.prototype.Ac;hq.prototype.Yi=function(a){this.cc=a};hq.prototype.va=function(){this.Tf||(this.cc&&"newest"!==this.cc||"traffic"===this.Sa)&&this.Te();return this.Yc};hq.prototype.getCopyrights=hq.prototype.va;n=hq.prototype;
n.fj=function(a){a=a.response;var b;iq(a,"map");iq(a,"scheme");iq(a,"tiletype");iq(a,"format");iq(a,"resolution");iq(a,"language");if("newest"===this.cc&&"traffic"!==this.Sa)for(b in a.maps)a.maps[b].hash&&a.maps[b].newest&&(this.Yi(a.maps[b].hash),this.dispatchEvent("versionupdate"));this.Oh=a;this.dispatchEvent("infoupdate")};n.ej=function(a){Pp(this.Yc,a);this.dispatchEvent("copyrightupdate")};
n.sh=function(){var a=this;var b=this.D().clone().F("info").I({output:"json"});this.bc&&b.Na(this.bc[0]);this.J(b,function(c){a.fj(c)},function(c){throw c;})};n.Te=function(){var a=this;var b=this.D().clone().F("copyright").F(a.Ac()).I({output:"json"});this.bc&&b.Na(this.bc[0]);this.Tf=1;this.J(b,function(c){a.Tf=2;a.ej(c)},function(c){a.Tf=-1;throw c;})};n.Ah=function(){return this.Oh};hq.prototype.getInfo=hq.prototype.Ah;
hq.prototype.Oe=function(a,b,c,d,e,f){var g=this.D().clone().F(a+"/"+this.Ac()+"/"+b+"/"+c+"/"+d).I(e?e:{}).toString();var h=0,k,l=g.length;if(0!==l)for(k=0;k<l;k++){var m=g.charCodeAt(k);h=(h<<5)-h+m;h|=0}g=h;h=this.Bi[g];h||(h=new cq(this,a,b,c,d,e,Np({headers:this.gf},f||{})),this.Bi[g]=h);return h};hq.prototype.createTileProvider=hq.prototype.Oe;hq.prototype.uc=function(a,b,c,d,e,f,g,h){a=this.Oe(a,b,c,d,e,h);return new tl(a,{opacity:f,dark:!!g})};hq.prototype.createTileLayer=hq.prototype.uc;
Y.prototype.Dh=function(a){return this.Ya(hq,a)};Y.prototype.getMapTileService=Y.prototype.Dh;function jq(a,b,c){var d=this;c=c||{};var e=+c.min,f=+c.max;c.tileSize=c.tileSize||512;c.min=e?Zd(e,1,17):1;c.min+=Jk(c.tileSize,1);c.max=f?Zd(f,1,17):17;jq.l.constructor.call(this,c);C(a,kq,jq,0);C(b,Yh,jq,1);this.j=a;b.b&&b.b("OMV");this.ac(b,!0);this.o=function(){lq(d);d.reload(!1)};a.addEventListener("versionupdate",this.o);lq(this);jq.prototype.T=function(){var g=/^v2\/vectortiles\/(.+)\/mc$/.exec(a.D().c);return g?g[1]:B+""}()}u(jq,R);t("H.service.omv.Provider",jq);jq.prototype.Gd=ef;
jq.prototype.providesOMV=jq.prototype.Gd;function lq(a){var b=a.Bd("_#-;,:","_#-;,:","_#-;,:");a.A=new RegExp("^"+b.replace(/[.*+?^${}()|[\]\\\/]/g,"\\$&").replace(/_#-;,:/g,"\\d+")+"$")}jq.prototype.ec=function(a){return this.A.test(a)};jq.prototype.cacheFilter=jq.prototype.ec;jq.prototype.Bd=function(a,b,c){return mq(this.j,a,b,c).toString()};jq.prototype.getTileKey=jq.prototype.Bd;jq.prototype.Ob=function(){return this.fa};jq.prototype.getCache=jq.prototype.Ob;jq.prototype.MAX_STORE_TIME=2592E6;
jq.prototype.hh=function(){return md()};jq.prototype.ie=function(){return md()?ld():jq.l.ie.call(this)};jq.prototype.J=function(a,b,c,d,e){return this.j.lb(a,b,c,d,e)};jq.prototype.requestInternal=jq.prototype.J;jq.prototype.pc=function(a){a.b&&a.b("OMV");this.ac(a)};jq.prototype.setStyle=jq.prototype.pc;jq.prototype.wa=function(){return jq.l.ub.apply(this)};jq.prototype.getStyle=jq.prototype.wa;
jq.prototype.ub=function(){var a=jq.l.ub.apply(this),b;this.L&&(a.getState()===Zh.READY?(b=a.yd())&&b.global&&(this.m&&(b.global.ux_language=this.m),this.c&&(b.global.ux_language_fallback=this.c),a=new bi(b,a.fc())):a.load());return a};function nq(a,b,c){var d=a.ub().getState()===Zh.READY,e=Ac(b),f=Ac(c);e&&(a.m=b);f&&(a.c=c);if(e||f)a.a=[],e=/^([a-zA-Z]{2})(-|$)/,(b=e.exec(b))&&a.a.push(b[1]),(b=e.exec(c))&&a.a.push(b[1]),a.L=!0,d&&a.fb()}jq.prototype.B=["en"];
jq.prototype.jn=function(){return this.a||this.B};jq.prototype.getLanguages=jq.prototype.jn;jq.prototype.s=function(){jq.l.s.call(this);this.j.removeEventListener("versionupdate",this.o)};jq.prototype.fa=new Lk(256);jq.prototype.va=function(a,b){return Rp(this.j.va(),this.T,b,a)};jq.prototype.getCopyrights=jq.prototype.va;function kq(a){kq.l.constructor.call(this,kq,a);a=eq(this,a).mapVersion;this.df=uc(a)?a:oq[this.D().toString()];uc(this.df)||pq(this)}u(kq,dq);t("H.service.omv.Service",kq);kq.prototype.a=function(){return{subDomain:"vector",path:"v2/vectortiles/base/mc"}};kq.CONFIG_KEY="omv";var oq={};Gc(oq);kq.prototype.qn=function(){return this.df};kq.prototype.getMapVersion=kq.prototype.qn;
function pq(a){a.J(a.D().clone().F("../../info"),function(b){b=b.mapVersion;var c=a.D().toString();a.df=b;b!==oq[c]&&(oq[c]=b,a.dispatchEvent("versionupdate"))},function(){})}kq.prototype.td=function(a,b){return new tl(new jq(this,a,b),{max:22})};kq.prototype.createLayer=kq.prototype.td;kq.prototype.lb=function(a,b,c,d,e){return this.J(mq(this,a,b,c),function(f){return f.arrayBuffer().then(d,e)},e,"arraybuffer")};
function mq(a,b,c,d){b=a.D().clone().F(d+"/"+b+"/"+c+"/omv");uc(a.df)&&b.I({mv:a.df});return b}kq.prototype.je=function(a){return bq().F(a)};kq.prototype.Fh=function(a,b){if(!Da(a))throw new D(this.Fh,0,'"onResult" must be a function');if(!Da(b))throw new D(this.Fh,1,'"onError" must be a function');return this.J(this.D().clone().Od("v2/vectortiles/pviews"),a,b)};kq.prototype.getPoliticalViews=kq.prototype.Fh;Y.prototype.ek=function(a){return this.Ya(kq,a)};Y.prototype.getOMVService=Y.prototype.ek;
kq.prototype.Te=function(){this.Yc=new Op;this.J(this.D().clone().F("../../copyrights"),A(this.ej,this),id)};kq.prototype.ej=function(a){Pp(this.Yc,a);this.dispatchEvent("copyrightupdate")};kq.prototype.va=function(){this.Yc||this.Te();return this.Yc};kq.prototype.getCopyrights=kq.prototype.va;Y.prototype.Uf=function(a,b,c,d,e,f){var g=this.Dh(),h=this.Dh({type:"aerial"}),k=this.ik(),l=this.ek(),m=ek.WEBGL,p={},q={crossOrigin:"anonymous"};if(Ea(a)){var r=a;"crossOrigin"in r&&(q.crossOrigin=r.crossOrigin);a=r.tileSize;b=r.ppi;c=r.lg;d=r.lg2;e=r.style;f=r.pois;r.engineType&&(m=r.engineType,q.engineType=m)}var v=a||512;if(0>[72,250,320,500].indexOf(+b)){if(b!==B)throw new D(this.Uf,1,b);}else p.ppi=+b;c&&(p.lg=c);d&&(p.lg2=d);e&&(p.style=e);f&&(p.pois=f);a=function(w,z,J,G,U){return w.uc(z,
J,v,G,p,1,U,q)};if(m===ek.HARP&&!H.map.render.harp)throw new D(this.Uf,0,"HARP engine is not supported, module not found");b=m===ek.WEBGL?new bi(l.je("omv/miami/normal.day.yaml").toString()):new H.map.render.harp.Style(l.je("harp/oslo/normal.day.json").toString());c=m===ek.WEBGL?new bi(l.je("omv/miami/truck.day.yaml").toString()):new H.map.render.harp.Style(l.je("harp/oslo/normal.day.json").toString());d={engineType:m};b=l.td(b,d);nq(b.ga(),p.lg,p.lg2);c=l.td(c,d);nq(c.ga(),p.lg,p.lg2);l=k.Fj(p.lg?
{lg:p.lg,i18n:!0,engineType:m}:{engineType:m});return{vector:{normal:{map:b,truck:c,traffic:k.Ej(void 0,m),trafficincidents:l}},raster:{normal:{xbase:a(g,"xbasetile","normal.day","png8",!1),xbasenight:a(g,"xbasetile","normal.night","png8",!0),base:a(g,"basetile","normal.day","png8",!1),basenight:a(g,"basetile","normal.night","png8",!0),map:a(g,"maptile","normal.day","png8",!1),mapnight:a(g,"maptile","normal.night","png8",!0),trafficincidents:l,transit:a(g,"maptile","normal.day.transit","png8",!1),
labels:a(g,"labeltile","normal.day","png",!1)},satellite:{xbase:a(h,"xbasetile","hybrid.day","jpg",!0),base:a(h,"basetile","hybrid.day","jpg",!0),map:a(h,"maptile","hybrid.day","jpg",!0),labels:a(h,"labeltile","hybrid.day","png",!0)},terrain:{xbase:a(h,"xbasetile","terrain.day","jpg",!1),base:a(h,"basetile","terrain.day","jpg",!1),map:a(h,"maptile","terrain.day","jpg",!1),labels:a(h,"labeltile","terrain.day","png",!1)}}}};Y.prototype.createDefaultLayers=Y.prototype.Uf;function qq(){this.a={}}qq.prototype.Bb=function(a,b){var c=a+b,d;if(d=this.a[c])return d;a=rq.MARKER.replace("{{icon}}",sq[a]||sq.OTHER);a=a.replace("{{color}}",tq[b]||tq.BLOCKING);b={size:{w:26,h:33},anchor:{x:13,y:30},hitArea:new Ui(Vi.POLYGON,uq.MARKER)};return this.a[c]=d=new Rj(a,b)};
var rq={MARKER:'<svg width="26" height="33" enable-background="new 0 0 26 33" viewBox="0 0 26 33" xmlns="http://www.w3.org/2000/svg"><path d="m26 33h-26v-33h26z" fill="#8c8c8c" opacity="0"/><path d="m17 29.566c0 1.116-1.791 2.022-4 2.022s-4-.906-4-2.022c0-1.118 1.791-2.026 4-2.026s4 .908 4 2.026" fill="#878787" opacity=".6"/><path d="m1.795 17.971c-1.562-1.555-1.574-3.828-.028-5.655l8.343-10.021c.769-.895 1.795-1.384 2.894-1.384 1.117 0 2.197.521 2.889 1.394l8.338 10.014c1.588 1.854 1.578 4.022-.029 5.65l-11.202 11.202z" fill="{{color}}"/>{{icon}}</svg>'},sq=
{CONGESTION:'<path style="fill:#FFFFFF;" d="M12.966,1.177c0.965,0,1.894,0.442,2.496,1.204l8.378,10.258c1.362,1.592,1.482,3.477,0,4.979L12.994,28.464L2.143,17.618c-1.381-1.375-1.38-3.348,0-4.979l8.314-10.258C11.174,1.547,12.085,1.177,12.966,1.177 M12.967,0.177L12.967,0.177c-1.247,0-2.408,0.551-3.269,1.552l-8.332,10.28c-1.711,2.022-1.688,4.567,0.07,6.317l10.85,10.845l0.707,0.707l0.707-0.707l10.847-10.846c1.784-1.807,1.803-4.292,0.053-6.337L16.237,1.748C15.462,0.769,14.236,0.177,12.967,0.177L12.967,0.177z M16.645,10.405l-2.025-2.22c-0.48-0.51-1.15-0.8-1.84-0.8H9.53c-0.69,0-1.36,0.29-1.84,0.8l-1.94,2.22c-0.39,0.63-0.59,1.35-0.59,2.09v1.64c0,0.69,0.56,1.25,1.25,1.25h1.44l0.255-0.539c0.204-0.431,0.456-0.837,0.753-1.21l0.962-1.211l0.83-0.9c0.32-0.35,0.72-0.63,1.15-0.82H8.23c-0.28,0-0.55-0.07-0.79-0.22l-0.28-0.17l1.27-1.45c0.28-0.31,0.68-0.48,1.1-0.48h3.25c0.42,0,0.82,0.17,1.1,0.48l1.354,1.54H16.645z M18.31,12.205c-0.35-0.37-0.81-0.63-1.3-0.74c-0.18-0.04-0.36-0.06-0.54-0.06h-3.24c-0.7,0-1.37,0.29-1.84,0.8l-1.13,1.22l-0.82,1c-0.38,0.63-0.59,1.35-0.59,2.09v1.64c0,0.69,0.56,1.25,1.25,1.25h1.75v-1h5.99v1h1.75c0.69,0,1.25-0.56,1.25-1.25v-1.64c0-0.74-0.2-1.46-0.59-2.09L18.31,12.205z M12.1,17.105h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C12.35,16.993,12.238,17.105,12.1,17.105z M18.59,17.105h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C18.84,16.993,18.728,17.105,18.59,17.105z M18.56,14.505c-0.24,0.15-0.51,0.22-0.79,0.22h-5.85c-0.28,0-0.55-0.07-0.78-0.22l-0.29-0.17l1.27-1.45c0.15-0.16,0.33-0.28,0.53-0.37c0.18-0.07,0.38-0.11,0.58-0.11h3.24c0.24,0,0.48,0.06,0.68,0.16c0.16,0.08,0.3,0.19,0.42,0.32l1.27,1.45L18.56,14.505z M8.42,13.03h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C8.67,12.918,8.559,13.03,8.42,13.03z"/>',
ROADWORKS:'<path d="m13.004 1.411c.964 0 1.894.441 2.496 1.204l8.346 10.023c1.363 1.592 1.482 3.477 0 4.979l-10.846 10.847-10.852-10.846c-1.381-1.375-1.379-3.348 0-4.979l8.346-10.023c.717-.835 1.628-1.205 2.51-1.205m0-1c-1.248 0-2.408.551-3.268 1.552l-8.356 10.035c-1.718 2.033-1.695 4.578.064 6.328l10.85 10.845.706.707.707-.707 10.846-10.846c1.784-1.808 1.803-4.293.053-6.337l-8.337-10.012c-.769-.973-1.996-1.565-3.265-1.565zm-.575 15.264c.018-.332-.13-.651-.394-.851l-2.945-2.235-.21.36c-.22.39-.41.78-.58 1.19l-.677 2.129-1.364 3.051h1.314l2.109-4.672 1.317 1.212.138 3.46h1.092zm6.16-1.327c-.401-.54-1.209-.539-1.609.001l-1.17 1.58-2.29-1.74-.139-4.054c-.011-.276-.134-.535-.342-.716l-.7-.61c-.185-.161-.422-.25-.667-.25h-1.885c-.335 0-.648.168-.833.447l-1.144 1.723 7.58 5.76-1.86 2.51c-.098.132-.004.32.161.32h6.648l1.142-1.077zm-8.79-2.989-.876-.665.841-1.018.965.043zm1.63 1.24.969-1.781.118 2.61zm2.76-5.79c-.64 0-1.16.52-1.16 1.16 0 .65.52 1.17 1.16 1.17s1.16-.52 1.16-1.17c0-.64-.52-1.16-1.16-1.16z" fill="#fff"/>',
ACCIDENT:'<path style="fill:#FFFFFF;" d="M12.998,1.091c0.964,0,1.894,0.442,2.496,1.204l8.346,10.344c1.363,1.592,1.482,3.477,0,4.979L12.994,28.465L2.143,17.618c-1.381-1.375-1.379-3.348,0-4.979l8.346-10.344C11.205,1.462,12.115,1.091,12.998,1.091 M12.998,0.091L12.998,0.091c-1.248,0-2.408,0.551-3.269,1.552L1.364,12.011c-1.708,2.021-1.685,4.566,0.073,6.316l10.85,10.845l0.707,0.707l0.707-0.707l10.846-10.846c1.784-1.808,1.803-4.293,0.053-6.337l-8.327-10.32C15.494,0.684,14.268,0.091,12.998,0.091L12.998,0.091z M7.83,18.982l-3.309-1.855l0.945,1.855H7.83z M16.111,19h3.942l1.596-2L16.111,19z M10.512,20.064l1.021-1.021l1.632,0.076c0.329,0.018,0.651-0.022,0.963-0.123c0.626-0.206,1.122-0.76,1.288-1.44l0.264-1.089l2.066-0.93c0.373-0.17,0.673-0.42,0.861-0.731c0.275-0.449,0.405-0.97,0.369-1.498L18.9,11.676l1.021-1.021l-0.724-0.724l-0.427,0.427l-0.121-0.364c-0.201-0.603-0.54-1.151-0.989-1.6l-1.159-1.159c-0.5-0.5-1.31-0.5-1.809,0l-1.267,1.267l0.724,0.724l-5.066,5.066l-0.724-0.724l-1.267,1.267c-0.5,0.5-0.5,1.31,0,1.809l1.159,1.159c0.449,0.449,0.997,0.788,1.6,0.989l0.364,0.121l-0.427,0.427L10.512,20.064z M14.901,10.349l0.732-0.732c0.098-0.098,0.256-0.098,0.354,0l0.732,0.732c0.098,0.098,0.098,0.256,0,0.354l-0.732,0.732c-0.098,0.098-0.256,0.098-0.354,0l-0.732-0.732C14.803,10.604,14.803,10.446,14.901,10.349z M9.472,15.777l0.732-0.732c0.098-0.098,0.256-0.098,0.354,0l0.732,0.732c0.098,0.098,0.098,0.256,0,0.354l-0.732,0.732c-0.098,0.098-0.256,0.098-0.354,0L9.472,16.13C9.375,16.033,9.375,15.874,9.472,15.777z M11.391,17.615c0.069-0.271,0.206-0.518,0.405-0.717l4.961-4.961c0.195-0.195,0.445-0.337,0.717-0.405l0.344-0.083l0.137,1.925c0.022,0.318-0.058,0.63-0.221,0.901c-0.101,0.166-0.279,0.271-0.409,0.329L14.8,15.74l-0.38,1.574c-0.083,0.344-0.318,0.615-0.612,0.713c-0.188,0.058-0.38,0.083-0.579,0.072l-1.925-0.138L11.391,17.615z"/>',
OTHER:'<path style="fill:#FFFFFF;" d="M13.004,1.411c0.964,0,1.894,0.441,2.496,1.204l8.346,10.023c1.363,1.592,1.482,3.477,0,4.979L13,28.465L2.148,17.618c-1.381-1.375-1.379-3.348,0-4.979l8.346-10.023C11.211,1.781,12.122,1.411,13.004,1.411 M13.004,0.411L13.004,0.411c-1.248,0-2.408,0.551-3.268,1.552L1.38,11.998c-1.718,2.033-1.694,4.579,0.064,6.328l10.85,10.845L13,29.878l0.707-0.707l10.846-10.846c1.784-1.808,1.803-4.293,0.053-6.337L16.269,1.976C15.5,1.003,14.273,0.411,13.004,0.411L13.004,0.411z M14.716,20.139c0,0.947-0.758,1.724-1.724,1.724c-0.947,0-1.704-0.777-1.704-1.724c0-0.928,0.757-1.704,1.704-1.704C13.958,18.435,14.716,19.211,14.716,20.139z M14.204,16.33H11.78l-0.537-8.533h3.5L14.204,16.33z"/>'},
tq={BLOCKING:"#323232",VERYHIGH:"#d5232f",HIGH:"#ffa100"},uq={MARKER:[24.1,17.8,14.2,28.42,16.8,29.4,12.8,31.4,8.79,29.4,11.23,28.42,1.7,17.8,1.7,12.1,10,1.9,12.9,.498,15.8,1.9,24.1,12.1,24.1,17.8]};function vq(a,b,c){c=c?c:{};c.criticality||(c.criticality="major,critical");C(a,wq,vq,0);In.call(this,{max:20,min:8,requestData:A(this.T,this),engineType:c.engineType});this.m=new qq;this.A=a;this.a=c;this.reload=A(this.reload,this);this.o=setInterval(this.reload,b||18E4)}u(vq,In);t("H.service.traffic.incidents.Provider",vq);vq.prototype.c={minor:"HIGH","low impact":"HIGH",major:"VERYHIGH",critical:"BLOCKING"};
vq.prototype.T=function(a,b,c,d,e){var f=this,g=this.c,h=this.m;return this.A.requestIncidentsByTile(a,b,c,function(k){var l=[];k=k.TRAFFIC_ITEMS;var m;if(k)for(k=k.TRAFFIC_ITEM,m=k.length;m--;){var p=k[m];var q=p.TRAFFIC_ITEM_TYPE_DESC;switch(q){case "ACCIDENT":case "CONGESTION":var r=q;break;case "CONSTRUCTION":r="ROADWORKS";break;default:r="OTHER"}r=h.Bb(r,g[p.CRITICALITY.DESCRIPTION]);q=p.LOCATION.GEOLOC.ORIGIN;q=new Gn({lat:q.LATITUDE,lng:q.LONGITUDE},{provider:f,icon:r});q.setData(p);l.push(q)}d(l)},
e,this.a)};vq.prototype.C=function(){In.prototype.C.call(this);clearInterval(this.o)};var xq="A21 A22 F01 F02 F08 F04 F05 F07 F03 F06 A2F F13 A25 A2C F12 D1B F1B A27 E12 A3A A24 A3D A3F F1F F25 F2C E32 A33 F29 D26 D36 F26 D0F F0F F2B E0C D3A A45 D23 D11 F2E F19 F14 F39 A4A A4B A5C D38 F2A F1A D0A F1C A48 D25 D1D F32 A46 A3E D24 E1C E32 A5F D2E D22 D0A".split(" ");function yq(a,b){var c={};this.a=a;Xa(c,b||c);ik.call(this,c);this.Bg={};a=this.Pb(Yg.SPATIAL);a.update(a.a+1,Vg.ADD)}u(yq,ik);t("H.service.remote.ObjectProvider",yq);yq.prototype.C=function(){ik.prototype.C.call(this)};yq.prototype.Jc=function(){return gf};yq.prototype.requestMarkers=yq.prototype.Jc;yq.prototype.Ic=function(){return gf};yq.prototype.requestDomMarkers=yq.prototype.Ic;yq.prototype.Jd=function(){return gf};yq.prototype.requestOverlays=yq.prototype.Jd;yq.prototype.Wb=ef;
yq.prototype.providesMarkers=yq.prototype.Wb;yq.prototype.Vb=ef;yq.prototype.providesDomMarkers=yq.prototype.Vb;yq.prototype.Hc=ef;yq.prototype.providesSpatials=yq.prototype.Hc;yq.prototype.Cg=function(){return gf};yq.prototype.requestSpatials=yq.prototype.Cg;function zq(a){return a.Bc(!0)}yq.prototype.Dg=function(a,b){a=Aq(this,a,Bq);b&&(a=a.filter(zq));return a};yq.prototype.requestSpatialsByTile=yq.prototype.Dg;
function Aq(a,b,c){var d=b.j&&b.j[c],e;!d&&(e=b.m)&&(delete b.m,(b.j=a=a.a.parse(a,b,e))&&(d=a[c]));return d||gf}yq.prototype.da=function(a){var b=a.ib();if(this.Bg[b])throw new Yc(this.da,"Remote object "+b+" already added");return this.Bg[b]=a};yq.prototype.Ja=function(a){delete this.Bg[a.ib()]};var Bq="spatials";function Cq(a,b,c,d){Cq.l.constructor.call(this,{min:Dq,max:Eq,engineType:d});C(a,wq,Cq,0);this.m=a;this.a=c||Fq;this.a.responseattributes="sh,fc";this.c=setInterval(A(this.reload,this),b||18E4);this.f===ek.WEBGL?this.ac(new bi(a.je("traffic/flow.yaml").toString()),!0):this.ac(new H.map.render.harp.Style({styles:[{when:["==",["geometry-type"],"LineString"],technique:"solid-line",renderOrder:10002,attr:{color:["case",[">=",["get","JF"],10],"black",[">=",["get","JF"],8],"red",[">=",["get","JF"],4],
"yellow","green"],lineWidth:3,metricUnit:"Pixel"}}]}))}u(Cq,R);t("H.service.traffic.flow.Provider",Cq);Cq.prototype.Di=ef;Cq.prototype.providesGeoJSON=Cq.prototype.Di;Cq.prototype.wa=function(){return this.ub()};Cq.prototype.getStyle=Cq.prototype.wa;Cq.prototype.pc=function(a){a.b&&a.b("GeoJSONTileSource");this.ac(a)};Cq.prototype.setStyle=Cq.prototype.pc;var Fq={locationreferences:"tmc,shp"};Cq.prototype.s=function(){Cq.l.s.call(this);clearInterval(this.c)};
Cq.prototype.J=function(a,b,c,d,e){return this.m.requestFlowByTile(a,b,c,function(f){f.type&&-1!==f.type.indexOf("Error")?e(f.Details):d(f)},e,this.a)};Cq.prototype.requestInternal=Cq.prototype.J;
Cq.prototype.ud=function(a,b,c,d,e){var f,g,h,k,l={type:"FeatureCollection",features:[]},m;var p=d.RWS.length;for(f=0;f<p;f++){var q=d.RWS[f];var r=q.RW;var v=r.length;var w=-1!==xq.indexOf(q.EXTENDED_COUNTRY_CODE+q.EBU_COUNTRY_CODE);for(q=0;q<v;q++){var z=r[q].FIS;var J=z.length;for(z=0;z<J;z++){var G=r[q].FIS[z].FI;var U=G.length;for(g=0;g<U;g++){var X=G[g];var xa=[];var ia=X.CF[0];var hc=!!ia.SSS;var wb={type:"Feature",properties:ia,geometry:{type:"MultiLineString",coordinates:xa}};wb.properties.LHT=
w;X.SHP.length&&(wb.properties.FC=X.SHP[0].FC);hc&&(m=[]);for(ia=0;ia<X.SHP.length;ia++){var nd=X.SHP[ia].value;var zi=nd.length;for(h=0;h<zi;h++){var Pe=hc?m:void 0,Yb=new io(nd[h].trim()),Wf=[],cd={};for(Yb.Be();-1!==(k=Yb.Tb());)k===Gq?(cd.lat=+String.fromCharCode.apply(Cq,Yb.Wd()),Yb.next(),Yb.Be()):k===Hq?(cd.lng=+String.fromCharCode.apply(Cq,Yb.Wd()),Wf.push([cd.lng,cd.lat]),Pe&&Pe.push($f(cd)),cd=[],Yb.next(),Yb.Be()):Yb.next();cd.lng=+String.fromCharCode.apply(Cq,Yb.Wd());Wf.push([cd.lng,
cd.lat]);Pe&&Pe.push($f(cd));k=Wf;xa.push(k)}}l.features.push(wb)}}}}return Cq.l.ud.call(this,a,b,c,l,e)};Cq.prototype.createTileInternal=Cq.prototype.ud;var Eq=21,Dq=10,Hq=32,Gq=44;function Iq(a){function b(m){d.contains(e)&&d.removeChild(e);l&&clearTimeout(l);delete Iq.a[f];m&&a.Qj&&a.Qj.call(k,m)}if(!a.url||!a.gh)throw Error('Parameter "options" must specify at least a URL and a callback.');if("function"!==typeof a.gh)throw Error("Parameters options.callback must be a function");var c=a.Cp||document;var d=c.getElementsByTagName("head")[0];var e=c.createElement("script");c=a.url instanceof W?a.url:Sp(a.url,a.Bp);var f=Iq.b++;var g=a.mm||"callback";var h=a.gh;var k={};var l=
null;k.id=f;k.cancel=function(){b("cancelled")};0!==a.timeout&&(l=x.setTimeout(function(){b("timeout")},a.timeout||3E4));Iq.a[f]=function(m){b();h.call(k,m)};e.type="text/javascript";e.src=c.toString()+(c.pk()?"&":"?")+g+"="+(a.Dp?"H.service.jsonp.handleResponse("+f+")":encodeURI("H.service.jsonp.handleResponse("+f+")"));d.appendChild(e);return k}t("H.service.jsonp",Iq);Iq.ao=function(a){return(a=Iq.a[a])?a:function(){}};Iq.handleResponse=Iq.ao;Iq.b=0;Iq.a={};function wq(a){wq.l.constructor.call(this,wq,a);this.nm=eq(this,a).callbackKey}u(wq,dq);t("H.service.traffic.Service",wq);wq.prototype.a=function(){return{subDomain:"traffic.ls",path:"traffic/6.1",callbackKey:"jsoncallback"}};wq.CONFIG_KEY="traffic";wq.prototype.Ej=function(a,b){return new tl(new Cq(this,void 0,a,b),{max:22})};wq.prototype.createFlowLayer=wq.prototype.Ej;wq.prototype.Fj=function(a){return new Jn(new vq(this,void 0,a))};wq.prototype.createIncidentsLayer=wq.prototype.Fj;
function Jq(a,b,c,d){return Iq({url:b,gh:c,Qj:function(e){d(Error("["+e+"] "+b+" request failed"))},mm:a.nm})}wq.prototype.Yo=function(a,b,c){a=this.D().clone().F("incidents.json").I(a);return Jq(this,a,b,c)};wq.prototype.requestIncidents=wq.prototype.Yo;wq.prototype.Xo=function(a,b,c,d,e,f){a=this.D().clone().F(["flow/json",c,a,b].join("/")).I(f||{});return Jq(this,a,d,e)};wq.prototype.requestFlowByTile=wq.prototype.Xo;
wq.prototype.Zo=function(a,b,c,d,e,f){a=this.D().clone().F(["incidents/json",c,a,b].join("/")).I(f||{});return Jq(this,a,d,e)};wq.prototype.requestIncidentsByTile=wq.prototype.Zo;wq.prototype.je=function(a){return bq().F(a)};Y.prototype.ik=function(a){return this.Ya(wq,a)};Y.prototype.getTrafficService=Y.prototype.ik;function Kq(a){Kq.l.constructor.call(this,Kq,a);this.rl=eq(this,a).reverseSubDomain}u(Kq,dq);t("H.service.GeocodingService",Kq);Kq.prototype.a=function(){return{subDomain:"geocoder.ls",reverseSubDomain:"reverse",path:"6.2"}};Kq.CONFIG_KEY="geocoding";Kq.prototype.b=function(a){return Error(a.Details||a.message||a.error)};Kq.prototype.uh=function(a,b,c){a=this.D().clone().F("geocode.json").I(a);return this.J(a,b,c)};Kq.prototype.geocode=Kq.prototype.uh;
Kq.prototype.Hi=function(a,b,c){a=this.D().clone().F("reversegeocode.json").I(a);this.rl&&a.Na(this.rl);return this.J(a,b,c)};Kq.prototype.reverseGeocode=Kq.prototype.Hi;Kq.prototype.search=function(a,b,c){a=this.D().clone().F("search.json").I(a);return this.J(a,b,c)};Kq.prototype.search=Kq.prototype.search;Y.prototype.$m=function(a){return this.Ya(Kq,a)};Y.prototype.getGeocodingService=Y.prototype.$m;function Lq(a){Lq.l.constructor.call(this,Lq,a)}u(Lq,dq);t("H.service.PlacesService",Lq);Lq.prototype.a=function(){return{subDomain:"places.ls",path:"places/v1"}};Lq.CONFIG_KEY="places";Lq.EntryPoint={SEARCH:"discover/search",SUGGEST:"suggest",EXPLORE:"discover/explore",AROUND:"discover/around",HERE:"discover/here",CATEGORIES:"categories/places"};Lq.prototype.request=function(a,b,c,d){return this.S(a,b,c,d)};
Lq.prototype.S=function(a,b,c,d){a=this.D().clone().F(a).I(b||{});return this.J(a,c,d)};Lq.prototype.search=function(a,b,c){return this.S("discover/search",a,b,c)};Lq.prototype.search=Lq.prototype.search;Lq.prototype.jp=function(a,b,c){return this.S("suggest",a,b,c)};Lq.prototype.suggest=Lq.prototype.jp;Lq.prototype.xm=function(a,b,c){return this.S("discover/explore",a,b,c)};Lq.prototype.explore=Lq.prototype.xm;Lq.prototype.im=function(a,b,c){return this.S("discover/around",a,b,c)};
Lq.prototype.around=Lq.prototype.im;Lq.prototype.co=function(a,b,c){return this.S("discover/here",a,b,c)};Lq.prototype.here=Lq.prototype.co;Lq.prototype.om=function(a,b,c){return this.S("categories/places",a,b,c)};Lq.prototype.categories=Lq.prototype.om;Lq.prototype.ym=function(a,b,c,d){a=Sp(a).I(this.D().getQuery()).I(d||{});return this.J(a,b,c)};Lq.prototype.follow=Lq.prototype.ym;Y.prototype.yn=function(a){return this.Ya(Lq,a)};Y.prototype.getPlacesService=Y.prototype.yn;function Mq(a){Mq.l.constructor.call(this,Mq,a);this.f=a.getToken}u(Mq,dq);t("H.service.iml.Service",Mq);Mq.prototype.a=function(){return{host:"interactive.data.api.platform.here.com",path:"interactive/v1/catalogs"}};
Mq.prototype.b=function(a){function b(){for(var d=ea(c),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.format;if(e.keys.every(function(g){return a[g]}))return f()}return JSON.stringify(a)}var c=[{keys:["code","title","cause","action"],format:function(){return a.code+": "+a.title+"; cause: "+a.cause+"; action: "+a.action}},{keys:["error","error_description"],format:function(){return a.error+": "+a.error_description}},{keys:["error","errorMessage"],format:function(){return a.error+": "+a.errorMessage}}];
return Error(Ea(a)?b():a)};Mq.prototype.he=function(a,b,c,d,e){var f=this.he;Nq(f,0,a,b);Oq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/statistics").I(e||{});return this.S(a,"GET",c,d)};Mq.prototype.getStatistics=Mq.prototype.he;Mq.prototype.bg=function(a,b,c,d,e,f,g,h,k){var l=k?"":".mvtf";a=this.D().clone().F(d+"/layers/"+e+"/tile/web/"+c+"_"+a+"_"+b+l).I(Object.assign({clip:!0},h));return this.S(a,"GET",k?f:function(m){return m.arrayBuffer().then(f)},g,void 0,k?"application/json":"arraybuffer")};
Mq.prototype.getFeaturesByTile=Mq.prototype.bg;Mq.prototype.Xj=function(a,b,c,d,e,f){var g=this.Xj;Pq(g,a);Nq(g,1,b,c);Oq(g,3,d,e);a=Qq(this,a,b,c,f);return this.S(a,"GET",d,e)};Mq.prototype.getFeatureById=Mq.prototype.Xj;Mq.prototype.dd=function(a,b,c,d,e,f){var g=this.dd;Rq(g,a);Nq(g,1,b,c);Oq(g,3,d,e);a=Sq(this,a,b,c,f);return this.S(a,"GET",d,e)};Mq.prototype.getFeaturesById=Mq.prototype.dd;
Mq.prototype.ae=function(a,b,c,d,e){var f=this.ae;if(!Ea(a)||!(a.bbox||a.north&&a.east&&a.south&&a.west))throw new D(f,0,'must be an object with either "bbox" or a full set of "north", "east", "south" and "west"');Nq(f,1,b,c);Oq(f,3,d,e);a=this.D().clone().F(b+"/layers/"+c+"/bbox").I(a);return this.S(a,"GET",d,e)};Mq.prototype.getFeaturesByBoundingBox=Mq.prototype.ae;
Mq.prototype.Zj=function(a,b,c,d,e){var f=this.Zj;if(!(Ea(a)&&a.radius&&(a.lat&&(a.lng||a.lon)||a.refCatalogHrn&&a.refLayerId&&a.refFeatureId)))throw new D(f,0,'must be an object with "radius" and a combination of either "lat"+"lng" or "refCatalogHrn"+"refLayerId"+"refFeatureId"');Nq(f,1,b,c);Oq(f,3,d,e);a=this.D().clone().F(b+"/layers/"+c+"/spatial").I(a);return this.S(a,"GET",d,e)};Mq.prototype.getFeaturesByPointAndRadius=Mq.prototype.Zj;
Mq.prototype.Yj=function(a,b,c,d,e,f){var g=this.Yj;if(!Ea(a)||!a.radius)throw new D(g,0,'must be an object with "radius"');Tq(g,1,b);Nq(g,2,c,d);Oq(g,4,e,f);a=this.D().clone().F(c+"/layers/"+d+"/spatial").I(a);return this.S(a,"POST",e,f,b)};Mq.prototype.getFeaturesByGeometryAndRadius=Mq.prototype.Yj;Mq.prototype.sl=function(a,b,c,d,e){var f=this.sl;Nq(f,0,a,b);Oq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/search").I(e||{});return this.S(a,"GET",c,d)};Mq.prototype.searchFeatures=Mq.prototype.sl;
Mq.prototype.zk=function(a,b,c,d,e){var f=this.zk;Nq(f,0,a,b);Oq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/iterate").I(e||{});return this.S(a,"GET",c,d)};Mq.prototype.iterateFeatures=Mq.prototype.zk;Mq.prototype.md=function(a,b,c,d,e,f){var g=this.md;Tq(g,0,a);Nq(g,1,b,c);Oq(g,3,d,e);b=Uq(this,b,c,f);return this.S(b,"PUT",d,e,a)};Mq.prototype.putFeatures=Mq.prototype.md;
Mq.prototype.kd=function(a,b,c,d,e,f){var g=this.kd;Tq(g,0,a);Nq(g,1,b,c);Oq(g,3,d,e);b=Uq(this,b,c,f);return this.S(b,"POST",d,e,a)};Mq.prototype.postFeatures=Mq.prototype.kd;Mq.prototype.vd=function(a,b,c,d,e){var f=this.vd;Rq(f,a);Nq(f,1,b,c);Oq(f,3,d,e);a=Sq(this,a,b,c);return this.S(a,"DELETE",d,e)};Mq.prototype.deleteFeatures=Mq.prototype.vd;Mq.prototype.jl=function(a,b,c,d,e,f,g){var h=this.jl;Pq(h,a);Tq(h,1,b);Nq(h,2,c,d);Oq(h,4,e,f);a=Qq(this,a,c,d,g);return this.S(a,"PUT",e,f,b)};
Mq.prototype.putFeature=Mq.prototype.jl;Mq.prototype.bl=function(a,b,c,d,e,f,g){var h=this.bl;Pq(h,a);Tq(h,1,b);Nq(h,2,c,d);Oq(h,4,e,f);a=Qq(this,a,c,d,g);return this.S(a,"PATCH",e,f,b)};Mq.prototype.patchFeature=Mq.prototype.bl;Mq.prototype.Jj=function(a,b,c,d,e){var f=this.Jj;Pq(f,a);Nq(f,1,b,c);Oq(f,3,d,e);a=Qq(this,a,b,c);return this.S(a,"DELETE",d,e,void 0,"text/plain")};Mq.prototype.deleteFeature=Mq.prototype.Jj;
function Uq(a,b,c,d){return a.D().clone().F(b+"/layers/"+c+"/features").I(d||{})}function Sq(a,b,c,d,e){b=Object.assign({},e,{id:new Wp(b)});return Uq(a,c,d,b)}function Qq(a,b,c,d,e){return a.D().clone().F(c+"/layers/"+d+"/features/"+b).I(e||{})}
Mq.prototype.S=function(a,b,c,d,e,f){f=void 0===f?"application/json":f;b={method:b,headers:Object.assign({},e?{"Content-Type":"application/geo+json"}:void 0,"function"===typeof this.f?{Authorization:"Bearer "+this.f()}:void 0,this.gf)};e&&(b.data=JSON.stringify(e));e=new sf(f,a.toString(),ge,b);e.then(c,fq(this,a,d));return e};Mq.CONFIG_KEY="iml";function Nq(a,b,c,d){xc(c,"String",a,b,"must be a string");xc(d,"String",a,b+1,"must be a string")}
function Pq(a,b){xc(b,"String",a,0,"must be a string")}function Rq(a,b){if(!Array.isArray(b)||0===b.length||b.some(function(c){return"string"!==typeof c}))throw new D(a,0,"must be a non-empty array of strings");}function Tq(a,b,c){if(!Ea(c))throw new D(a,b,"must be a GeoJSON object");}function Oq(a,b,c,d){if(!Da(c))throw new D(a,b,"must be a function");if(!Da(d))throw new D(a,b+1,"must be a function");}Y.prototype.en=function(a){return this.Ya(Mq,a)};Y.prototype.getIMLService=Y.prototype.en;function Vq(a,b,c,d){Vq.l.constructor.call(this,d?{min:d.min,max:d.max,engineType:d.engineType}:void 0);C(a,Mq,Vq,0);if(!Ac(b))throw new D(Vq,1,'"catalogHrn" must be a string');if(!Ac(c))throw new D(Vq,2,'"layerId" must be a string');this.o=a;this.a=b;this.c=c;this.m=Ea(d)&&Ea(d.parameters)?d.parameters:{};this.ac(this.f===ek.WEBGL?new bi({sources:{iml:{type:"MVT"}},layers:{iml:{data:{source:"iml",layer:this.a+":"+this.c},points:{filter:{$geometry:"point"},draw:{points:{collide:!1,order:200,color:"#92CF48",
size:[[10,"8px"],[14,"12px"],[18,"16px"]]}}},polygons:{filter:{$geometry:"polygon"},draw:{polygons:{order:201,color:"#E39E3C"},lines:{order:202,color:"#755DA5",width:"1px"}}},lines:{filter:{$geometry:"line"},draw:{lines:{order:203,color:"#0258AE",width:"2px",join:"round",cap:"round"}}}}}}):new H.map.render.harp.Style({styles:[{layer:this.a+":"+this.c,when:["==",["geometry-type"],"Point"],technique:"circles",renderOrder:200,color:"#92CF48",size:["interpolate",["linear"],["zoom"],10,8,14,12,18,16]},
{layer:this.a+":"+this.c,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#E39E3C",renderOrder:201},{layer:this.a+":"+this.c,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#755DA5",lineWidth:"1px",renderOrder:202},{layer:this.a+":"+this.c,when:["==",["geometry-type"],"LineString"],technique:"solid-line",color:"#0258AE",lineWidth:"2px",renderOrder:203}]}))}u(Vq,R);t("H.service.iml.Provider",Vq);
Vq.prototype.J=function(a,b,c,d,e){return this.o.bg(a,b,c,this.a,this.c,d,e,this.m)};Vq.prototype.requestInternal=Vq.prototype.J;Vq.prototype.Gd=ef;Vq.prototype.providesOMV=Vq.prototype.Gd;Vq.prototype.wa=function(){return this.ub()};Vq.prototype.getStyle=Vq.prototype.wa;Vq.prototype.pc=function(a){C(a,bi)&&a.b("MVT");this.ac(a)};Vq.prototype.setStyle=Vq.prototype.pc;function Wq(a){Wq.l.constructor.call(this,Wq,a)}u(Wq,dq);t("H.service.publicTransit.Service",Wq);Wq.prototype.a=function(){return{subDomain:"transit.router",path:"v8"}};Wq.CONFIG_KEY="publicTransit";Wq.prototype.In=function(a,b,c){a=this.D().clone().F("routes").I(a);return this.J(a,b,c)};Wq.prototype.getRoutes=Wq.prototype.In;Wq.prototype.Sm=function(a,b,c){a=this.D().clone().F("departures").I(a);return this.J(a,b,c)};Wq.prototype.getDepartures=Wq.prototype.Sm;
Wq.prototype.Mn=function(a,b,c){a=this.D().clone().F("stations").I(a);return this.J(a,b,c)};Wq.prototype.getStations=Wq.prototype.Mn;Wq.prototype.b=function(a){return Error(JSON.stringify(a))};Y.prototype.En=function(a){return this.Ya(Wq,a)};Y.prototype.getPublicTransitService=Y.prototype.En;function Xq(a){Xq.l.constructor.call(this,Xq,a)}u(Xq,dq);t("H.service.RoutingService",Xq);Xq.prototype.a=function(){return{subDomain:"route.ls",path:"routing/7.2"}};Xq.prototype.b=function(a){return Error(a.details)};Xq.CONFIG_KEY="routing";Xq.prototype.Sd=function(a,b,c){a=this.D().clone().F("calculateroute.json").I(a);return this.J(a,b,c)};Xq.prototype.calculateRoute=Xq.prototype.Sd;
Xq.prototype.fh=function(a,b,c){a=this.D().clone().Na("isoline").F("calculateisoline.json").I(a);return this.J(a,b,c)};Xq.prototype.calculateIsoline=Xq.prototype.fh;function Yq(a){Yq.l.constructor.call(this,Yq,a)}u(Yq,dq);t("H.service.RoutingService8",Yq);Yq.CONFIG_KEY="routing_v8";Yq.prototype.a=function(){return{subDomain:"router",path:"v8/routes"}};Yq.prototype.b=function(a){return Error(a.error)};Yq.prototype.Sd=function(a,b,c){a=this.D().clone().I(a);return this.J(a,b,c)};Yq.prototype.calculateRoute=Yq.prototype.Sd;Yq.prototype.fh=function(a,b,c){a=this.D().clone().Na("isoline").Od("v8/isolines").I(a);return this.J(a,b,c)};
Yq.prototype.calculateIsoline=Yq.prototype.fh;Y.prototype.gk=function(a,b){b=+b||7;if(7===b)b=Xq;else if(8===b)b=Yq;else throw new D(this.gk,1,"allowed values are 7 and 8");return this.Ya(b,a)};Y.prototype.getRoutingService=Y.prototype.gk;function Zq(){}t("H.service.extension.dataView.ITable",Zq);Zq.prototype.de=function(){};Zq.prototype.getMeta=Zq.prototype.de;Zq.prototype.ge=function(){};Zq.prototype.getRowCount=Zq.prototype.ge;Zq.prototype.zc=function(){};Zq.prototype.getRow=Zq.prototype.zc;Zq.prototype.Va=function(){};Zq.prototype.getColumnNames=Zq.prototype.Va;Zq.prototype.We=function(){};Zq.prototype.getColumn=Zq.prototype.We;Zq.prototype.za=function(){};Zq.prototype.getCell=Zq.prototype.za;Zq.prototype.concat=function(){};
Zq.prototype.concat=Zq.prototype.concat;function $q(){}t("H.service.extension.dataView.IRow",$q);$q.prototype.Va=function(){};$q.prototype.getColumnNames=$q.prototype.Va;$q.prototype.za=function(){};$q.prototype.getCell=$q.prototype.za;$q.prototype.Ad=function(){};$q.prototype.getTable=$q.prototype.Ad;function ar(a,b){this.a=a;this.b=b}t("H.service.extension.dataView.ObjRow",ar);ar.prototype.Va=function(){return this.a.Va()};ar.prototype.getColumnNames=ar.prototype.Va;ar.prototype.za=function(a){return this.a.za(this.b,a)};ar.prototype.getCell=ar.prototype.za;ar.prototype.Ad=function(){return this.a};ar.prototype.getTable=ar.prototype.Ad;function br(){}t("H.service.extension.dataView.IColumn",br);br.prototype.za=function(){};br.prototype.getCell=br.prototype.za;function cr(a,b){this.b=a;this.a=b}t("H.service.extension.dataView.ObjColumn",cr);cr.prototype.za=function(a){return this.b.za(a,this.a)};cr.prototype.getCell=cr.prototype.za;function dr(a,b,c){var d;b=b||(a&&a.length?Object.keys(a[0]):B);this.Gb=a;if(b)for(this.Td=b,this.ih=a=nc(),d=b.length;d--;)a[b[d]]=!0;c!==B&&(this.oi=c)}t("H.service.extension.dataView.ObjTable",dr);n=dr.prototype;n.oi=B;n.Gb=B;n.Td=B;n.ih=B;n.de=function(){return this.oi};dr.prototype.getMeta=dr.prototype.de;dr.prototype.ge=function(){return this.Gb?this.Gb.length:0};dr.prototype.getRowCount=dr.prototype.ge;dr.prototype.zc=function(a){var b=this.Gb;return b&&b[a]?new ar(this,a):B};
dr.prototype.getRow=dr.prototype.zc;dr.prototype.Va=function(){return this.Td||gf};dr.prototype.getColumnNames=dr.prototype.Va;dr.prototype.We=function(a){return this.ih[a]?new cr(this,a):B};dr.prototype.getColumn=dr.prototype.We;dr.prototype.za=function(a,b){var c=this.Gb;return(a=c&&this.ih[b]&&c[a])&&a[b]};dr.prototype.getCell=dr.prototype.za;
dr.prototype.concat=function(){var a=arguments.length,b,c=this.Td,d=""+this.Td,e=(this.Gb||[]).slice();for(b=0;b<a;b++){var f=arguments[b];if(!(f instanceof dr))throw new D(this.concat,b);if(f.Gb){if(c&&""+f.Td!==d)throw new D(this.concat,b,"Incompatible columns!");e=e.concat(f.Gb)}}return new dr(e,this.Td,this.oi)};dr.prototype.concat=dr.prototype.concat;function er(a,b){a.Gb?a.Gb.push(b):a.Gb=[b];return a.Gb.length-1};function fr(a){var b=gr;if(!a||!Ac($e(a.layerId,a.layer))||!Dc(a.level)||uc(a.rowFilter)&&!Da(a.rowFilter)||uc(a.rowFilterContext)&&!Ea(a.rowFilterContext))throw new D(b,1,uc("invalid layer config")?"invalid layer config":a);};function hr(a,b,c,d){d=d||ir;this.tf={};d.provider=a;this.invalidate=ff;hr.l.constructor.call(this,b,d);delete this.invalidate;c&&(this.a=c);this.ya(Vg.ADD)}u(hr,kh);t("H.service.remote.Spatial",hr);var ir={};hr.prototype.ib=function(){return this.a||kh.prototype.ib.call(this)};hr.prototype.getId=hr.prototype.ib;hr.prototype.Fg=id;hr.prototype.retain=hr.prototype.Fg;hr.prototype.release=ef;hr.prototype.release=hr.prototype.release;function jr(a,b){this.a=a;b&&(this.b=b)}var kr=new jr([]);
hr.prototype.be=function(a){return(this.tf[a.key]||kr).a};hr.prototype.getGeometriesForTile=hr.prototype.be;hr.prototype.Ch=function(a){return(this.tf[a.key]||kr).b};hr.prototype.getLabels=hr.prototype.Ch;function lr(a,b,c){a.tf[b.key]=new jr(c,void 0)};function mr(a,b,c,d,e,f){nr(mr,1,b,c);nr(mr,2,d,e);(this.f=a.length)?(this.W=a,this.o=b,this.i=c,this.b=0,this.c=A(this.c,this),this.m=d,this.j=e,this.a=nc(),Xa(this.a,or,f||{}),this.g={},x.setTimeout(this.c,0)):b(gf,!0)}var or={duration:100,Cm:"geometry",Bm:"WKT",$o:"searchAttributes",Ij:B};
mr.prototype.c=function(){var a=[];var b=!1;for(var c=Hk(),d;this.b<this.f;){var e=this.W[this.b];b=e.attributes;d=e.layerId||this.a.Ij;e.distance&&(b[this.a.$o]={nearest:new Yf(e.nearestLat,e.nearestLon),distance:e.distance});if(e=e[this.a.Cm]){try{var f=Nn(new io(e))}catch(g){this.i(new x.Error(g.message));b=!0;break}b[this.a.Bm]=f}(e=this.g[d])||(e=this.g[d]=this.m({layerId:d,columnNames:Object.keys(b)}));b=this.j(e,b);a.push(b);this.b++;if((b=this.b===this.f)||Hk()-c>=this.a.duration){this.o(a,
b);break}}b?this.g=y:this.Gf=x.setTimeout(this.c,0)};mr.prototype.cancel=function(){x.clearTimeout(this.Gf);this.b<this.f&&this.i(new x.Error("parsing canceled"))};mr.prototype.cancel=mr.prototype.cancel;function nr(a,b,c,d){if(!Da(c))throw new D(a,b,"has invalid type");if(!Da(d))throw new D(a,b+1,"has invalid type");};function pr(a,b,c){var d=8===a;this.b=b;this.c=c||id;(this.a=4===a||d)?this.j=d:this.g=1===a;this.f=this.a?"$HProjGeometry":"geometry"}
pr.prototype.parse=function(a,b,c){var d,e,f={},g=[],h,k;var l=0;for(h=c.length;l<h;l++){var m=c[l];var p=m.Rows;if(m=p.length){var q=Object.keys(p[0]).filter(function(v){return"geometry"!==v&&"$HProjGeometry"!==v});q=new dr(p,q);for(k=0;k<m;k++){var r=p[k];if(e=r[this.f]){if(delete r[this.f],r=q.zc(k))try{this.a?d=qr(this,a,b,r,e):d=rr(this,a,r,e.path),d.ka(a),g.push(d)}catch(v){this.c(v.message)}}else this.c("Layer must contain geometries")}}}f[this.a?"spatials":this.g?"markers":"domMarkers"]=
g;return f};function qr(a,b,c,d,e){var f=[],g=e.paths,h=g.length,k=0,l=a.b&&a.b(d);for(a=new hr(b,a.j,B,{style:l||a.i,data:d});k!==h;)f.push(sr(g[k++]));lr(a,c,[new Ah(f,e.interiorsIndex,e.outlinesIndex)]);return a}function rr(a,b,c,d){d=new Yf(d[0],d[1]);var e=a.b&&a.b(c);a.g?(a={icon:e,data:c,provider:b},a=new Gn(d,a)):(a={icon:e,data:c,provider:b},a=new Zi(d,a));return a}function sr(a){for(var b=0,c=a.length,d=[];b<c;)d.push(new I(a[b++],a[b++]));return d};function tr(a){a=a||{};var b=a.tileCacheSize||1024,c=a.resultType,d=a.styleCallback;uc(a.min)||(a.min=12);tr.l.constructor.call(this,a);if(-1===ur.indexOf(c))throw new D(tr,2,"invalid resultType");this.a=c;if(d&&!Da(d))throw new D(tr,2,"invalid style callback");this.fa=d;this.T=a.pixelRatio||Te();this.Lb=A(this.Lb,this);this.u(new Lk(b,A(this.Hb,this)));this.createTileInternal=4===c||8===c?A(this.L,this):A(this.B,this)}u(tr,R);t("H.service.extension.TileProvider",tr);tr.prototype.c=!1;
tr.prototype.getCapabilities=function(){return tr.l.getCapabilities.call(this)|Lj.CROP_LINES_BY_TILE|Lj.CROP_POLYGONS_BY_TILE};tr.prototype.lb=function(a,b,c,d){return this.c?tr.l.lb.call(this,a,b,c,d):B};tr.prototype.requestTile=tr.prototype.lb;tr.prototype.Lb=function(a){this.dispatchEvent(new ud("error",Ac(a)?a:a+"",this))};tr.prototype.Wb=function(){return 1===this.a};tr.prototype.providesMarkers=tr.prototype.Wb;tr.prototype.Vb=function(){return 2===this.a};tr.prototype.providesDomMarkers=tr.prototype.Vb;
tr.prototype.Hc=function(){return 4===this.a||8===this.a};tr.prototype.providesSpatials=tr.prototype.Hc;function vr(a){var b=a.Ea;b||(a.o||(a.o=a.m(a.a,a.fa,a.Lb)),b=a.Ea=new yq(a.o),b.ka(a),b.addEventListener(a.v.Da,A(a.Fa,a)),b.Ea=!0);return b}
tr.prototype.B=function(a,b,c,d){var e=this.getTileKey(a,b,c);e=this.Ob().get(e);var f=2==this.a,g=[],h=vr(this);e?e.valid=!0:(a=e=new Tk(a,b,c,y),delete a.j,a.m=d);d=f?Aq(h,e,"domMarkers"):Aq(h,e,"markers");for(b=d.length;b--;)a=d[b],a.gj=e,(f||1===a.Bb().getState())&&g.push(a);e.data=g;return e};tr.prototype.Fa=function(a){if(a=a.target.gj)a.valid=!1};tr.prototype.ep=function(a){this.A=!!a};tr.prototype.setTileCanvasRendering=tr.prototype.ep;tr.prototype.A=!0;
tr.prototype.L=function(a,b,c,d){var e=vr(this),f=this.getTileKey(a,b,c),g=this.tileSize,h=this.Ob().get(f);h||(a=h=new Xk(f,a,b,c,g,this.T,c,e),delete a.j,a.m=d);this.A?(d=$p.pop(g),h.V(d)||$p.push(d,g)):cl(h);return h};tr.prototype.Hb=function(a,b){var c;if(4===this.a||8===this.a){a=b.Wa();for(c=a.length;c--;)delete a[c].tf[b.key];b.data&&($p.push(b.zg(),this.tileSize),b.Ag())}else for(a=b.data,c=a.length;c--;)delete a[c].gj};tr.prototype.s=function(){tr.l.s.call(this);vr(this).C()};
var wr={MARKER:1,DOM_MARKER:2,POLYLINE:4,POLYGON:8};tr.ResultType=wr;var ur=[1,2,4,8];function gr(a,b,c){var d=this,e=b&&b.rowFilter,f=c.resultType;gr.l.constructor.call(this,c);C(a,xr,gr,0);fr(b);e?(c=Va(b),c.rowFilter=e.toString()):c=Va(b);delete c.layer;c.layerId=$e(b.layerId,b.layer);(new Nf).a("pde","H.service.extension.worker.processor");a=a.D().clone().F(yr+"."+zr).I({meta:1});(new Qf("pde",{message:[this.uid,0,{tileSize:this.tileSize,projected:!0,onlyOutline:4===f,serverUrl:a.toString(),layerConfigs:[c],horizontalMargin:1}]})).then(function(){d.c=!0;d.Za()},this.Lb)}
u(gr,tr);t("H.service.extension.platformData.TileProvider",gr);gr.prototype.m=function(a,b,c){a=new pr(a,b,c);a.i=Ar;return a};var Ar=new ch({strokeColor:"transparent",fillColor:"transparent",lineWidth:0,lineJoin:"round",lineCap:"round"});
gr.prototype.J=function(a,b,c,d,e){var f=this,g=this.getTileKey(a,b,c),h;g=this.Ob().get(g);var k={cancel:id},l=!0,m=this.a;g&&(4===m||8===m?g.ne()||(d($p.pop(this.tileSize),null),l=!1):(d(y),l=!1));if(l){var p=Yp.setTimeout(function(){h=new Qf("pde",{message:[f.uid,1,[a,b,c]]});h.then(d,e)},500);k.cancel=function(){h?h.cancel():Yp.clearTimeout(p)}}return k};gr.prototype.requestInternal=gr.prototype.J;gr.prototype.s=function(){gr.l.s.call(this);new Qf("pde",{message:[this.uid,3]})};
gr.ResultType=wr;function Br(a){this.a=a}Br.prototype.cancel=function(){for(var a=this.a,b=a.length;b--;)a[b].cancel();a.length=0};function xr(a){xr.l.constructor.call(this,xr,a)}u(xr,dq);t("H.service.extension.platformData.Service",xr);xr.prototype.a=function(){return{subDomain:"s.fleet.ls",path:"1"}};xr.CONFIG_KEY="platformData";xr.prototype.request=function(a,b,c,d,e){return this.S(a,b,c,d,e)};
xr.prototype.S=function(a,b,c,d,e){var f="text/plain";if(!a)throw new D(this.request,0,a);if(!b)throw new D(this.request,1,b);if(!d)throw new D(this.request,3,d);if(!e)throw new D(this.request,4,e);a=this.D().clone().F(a+"."+b).I(c);b===Cr.JSON&&(f="application/json");return this.J(a,d,e,f)};var yr="tiles";
xr.EntryPoint={DOC_ATTRIBUTES:"doc/attributes",DOC_LAYER:"doc/layer",DOC_LAYERS:"doc/layers",DOC_MAPS:"doc/maps",DOC_INDEXES:"doc/indexes",SEARCH_BBOX:"search/bbox",SEARCH_CORRIDOR:"search/corridor",SEARCH_PROXIMITY:"search/proximity",SEARCH_QUADKEY:"search/quadkey",SERVICE_CONFIGURATION:"serviceconfiguration",STATIC:"static",TILE:"tile",TILES:yr,FILE:"file",INDEX:"index"};var zr="json",Cr={TXT:"txt",JSON:zr,HTML:"html",BIN:"bin"};xr.EntryPointType=Cr;
xr.prototype.uc=function(a,b){var c=b&&b.resultType;a=new gr(this,a,b);var d;1==c||2===c?d=new Jn(a):d=new tl(a);return d};xr.prototype.createTileLayer=xr.prototype.uc;xr.prototype.Ld=function(a,b,c,d){var e=[],f,g=b.layer_id||b.layer_ids;a=this.request(a,zr,b,function(h){f=new mr(h.geometries,c,d,function(k){return new dr([],k.columnNames,k)},function(k,l){return k.zc(er(k,l))},{Ij:g});e.push(f)},function(h){d(new x.Error(h))});e.push(a);return new Br(e)};
function Dr(a,b,c){if(!zc(a))throw new D(c,0,"has invalid type");if(!zc(b))throw new D(c,1,"has invalid type");if(a.length!==b.length||!a.length)throw new D(c,1,"specify one key attribute for each given layer id in the same order");}
xr.prototype.Kc=function(a,b,c,d,e,f){function g(l,m){m&&h--;d(l,!h)}var h,k=[];Dr(a,b,this.Kc);nr(this.Kc,3,d,e);C(c,K,this.Kc,2);c={bbox:c.la+","+c.ba+";"+c.na+","+c.ia};f&&Xa(c,f);a=c.layer_id?[c.layer_id]:a;f=0;for(h=a.length;f<h;f++)c.layer_id=a[f],c.key_attribute=b[f],k.push(this.Ld("search/bbox",c,g,e));return new Br(k)};xr.prototype.searchByBoundingBox=xr.prototype.Kc;
xr.prototype.Yb=function(a,b,c,d,e,f,g){Dr(a,b,this.Yb);C(c,Yf,this.Yb,2,"has invalid type");if(!Dc(d))throw new D(this.Yb,3,"has invalid type");nr(this.Yb,4,e,f);a={layer_ids:a.join(","),key_attributes:b.join(","),proximity:c.lat+","+c.lng+","+d};g&&Xa(a,g);return this.Ld("search/proximity",a,e,f)};xr.prototype.searchByProximity=xr.prototype.Yb;
xr.prototype.Xb=function(a,b,c,d,e,f,g){var h="";Dr(a,b,this.Xb);if(!Ac(c)&&!C(c,L))throw new D(this.Xb,1,"has invalid type");if(!Dc(d))throw new D(this.Xb,2,"has invalid type");nr(this.Xb,4,e,f);a={layer_ids:a.join(","),key_attributes:b.join(","),radius:d};if(Ac(c))a.route_id=c;else{d=c.Y;c=0;for(b=d.length;c<b;c+=3)h+=d[c]+","+d[c+1],c<b-3&&(h+=";");a.corridor=h}g&&Xa(a,g);return this.Ld("search/corridor",a,e,f)};xr.prototype.searchByCorridor=xr.prototype.Xb;
Y.prototype.zn=function(a){return this.Ya(xr,a)};Y.prototype.getPlatformDataService=Y.prototype.zn;function Er(a){Er.l.constructor.call(this,Er,a)}u(Er,dq);t("H.service.extension.geofencing.Service",Er);Er.prototype.a=function(){return{subDomain:"fleet.ls",path:"2"}};Er.CONFIG_KEY="geofencing";Er.prototype.request=function(a,b,c,d){return this.S(a,b,c,d)};Er.prototype.b=function(a){return Error(a.issues&&a.issues.length?a.issues.map(function(b){return b.message}).join(". "):a.message||a.response_code)};
Er.prototype.S=function(a,b,c,d){if(!a)throw new D(this.request,0,a);if(!Da(c))throw new TypeError("onResult must be a function");if(!Da(d))throw new TypeError("onError must be a function");a=this.D().clone().F(a+".json").I(b);return this.J(a,c,d)};Er.EntryPoint={SEARCH_PROXIMITY:"search/proximity"};Y.prototype.an=function(a){return this.Ya(Er,a)};Y.prototype.getGeofencingService=Y.prototype.an;t("H.service.extension.customLocation.Permission",{READ:"read",WRITE:"write",EXPORT:"export"});t("H.service.extension.customLocation.Storage",{READONLY:"readonly",UPDATABLE:"updatable"});function Fr(a){var b=Gr;if(!a||!Ac(a.layerId)||uc(a.rowFilter)&&!Da(a.rowFilter)||uc(a.rowFilterContext)&&!Ea(a.rowFilterContext))throw new D(b,1,uc("invalid layer config")?"invalid layer config":a);}function Hr(a){return Ac(a)&&/^[A-Z][A-Z0-9_]*$/.test(a)}function Ir(a){for(var b=a&&a.length,c=2<=b&&"WKT"===a[--b]&&"GEOMETRY_ID"===a[--b];c&&b--;)c=Hr(a[b]);return c}
function Jr(a,b){var c="",d,e,f=[];if(!b){var g={};f=[];if(a.geometries)for(e=0;e<a.geometries.length;e++)b=a.geometries[e],g[b.layerId]||(g[b.layerId]=[]),g[b.layerId].push(b);for(d in g)f.push({layerId:d,geometries:g[d]});for(d=0;d<f.length;d++)c+=Jr(f[d],f[d].layerId)}else if(a.geometries&&a.geometries.length)for(e=Object.keys(a.geometries[0].attributes),c=c+("Meta:\t"+b+"\n")+e.join("\t"),c+="\tWKT\n",d=0;d<a.geometries.length;d++){var h=a.geometries[d].attributes;g=a.geometries[d].geometry;for(b=
0;b<e.length;b++)f.push(h[e[b]]);c+=f.join("\t");c+="\t"+g+"\n";f=[]}return c};function Gr(a,b,c){var d=this,e=b&&b.rowFilter,f;Gr.l.constructor.call(this,c);C(a,Kr,Gr,0);var g=c.resultType;Fr(b);if(e){var h=Va(b);h.rowFilter=e.toString()}else h=b;(new Nf).a("cle","H.service.extension.worker.processor");var k=b.layerId;a.request(Lr,Mr,{detail_level:"all",layer_id:k},function(l){l=l.layers;var m;for(m=0;m<l.length;m++)if(l[m].layerId===k){h.level=l[m].level;break}f=a.D().clone().F(Nr+"."+Mr).I({meta:1});(new Qf("cle",{message:[d.uid,0,{tileSize:d.tileSize,projected:!0,onlyOutline:4===
g,serverUrl:f.toString(),layerConfigs:[h],batchTiles:!1,horizontalMargin:1}]})).then(function(){d.c=!0;d.Za()},d.Lb)},function(l){d.Lb(l.message)})}u(Gr,tr);t("H.service.extension.customLocation.TileProvider",Gr);Gr.prototype.m=function(a,b,c){return new pr(a,b,c)};
Gr.prototype.J=function(a,b,c,d,e){var f=this,g=this.getTileKey(a,b,c),h;g=this.Ob().get(g);var k={cancel:id},l=!0,m=this.a;g&&(4===m||8===m?g.ne()||(d($p.pop(this.tileSize),null),l=!1):(d(y),l=!1));if(l){var p=Yp.setTimeout(function(){h=new Qf("cle",{message:[f.uid,1,[a,b,c]]});h.then(d,e)},500);k.cancel=function(){h?h.cancel():Yp.clearTimeout(p)}}return k};Gr.prototype.requestInternal=Gr.prototype.J;Gr.prototype.s=function(){Gr.l.s.call(this);new Qf("cle",{message:[this.uid,3]})};function Or(){if(Pr)throw new Yc(Or);}t("H.service.extension.customLocation.Table",Or);var Pr=!0;function Qr(a,b){var c;Pr=!1;var d=new Or;Pr=!0;d.c=qc(x.JSON.parse(x.JSON.stringify(a)));a=a.columnNames;var e=nc();for(c=a.length;c--;)e[a[c]]=c;d.f=e;d.b=a.length;if(b){if(b.length%a.length)throw new D(Qr,1,"Invalid number of cells");}else b=[];d.a=b;return d}Or.prototype.de=function(){return this.c};Or.prototype.getMeta=Or.prototype.de;Or.prototype.ge=function(){return this.a.length/this.b};
Or.prototype.getRowCount=Or.prototype.ge;Or.prototype.zc=function(a){return a<this.a.length/this.b?new Rr(this,a):B};Or.prototype.getRow=Or.prototype.zc;Or.prototype.Jn=function(){var a=this.a.length/this.b,b,c=new x.Array(a);for(b=0;b<a;b++)c[b]=new Rr(this,b);return c};Or.prototype.getRows=Or.prototype.Jn;Or.prototype.Zg=function(a){var b=this.b,c=this.a,d=c.length/this.b;if(!a||a.length%b)throw new D(this.Zg,0,"Invalid number of cells");this.a=c.concat(a);return d};Or.prototype.addCells=Or.prototype.Zg;
Or.prototype.fm=function(){for(var a=this.b,b=this.a,c=this.a.length/this.b;a--;)b.push(y);return this.zc(c)};Or.prototype.addRow=Or.prototype.fm;Or.prototype.Va=function(){return this.c.columnNames};Or.prototype.getColumnNames=Or.prototype.Va;Or.prototype.We=function(a){return this.f[a]===B?B:new Sr(this,a)};Or.prototype.getColumn=Or.prototype.We;Or.prototype.za=function(a,b){return this.a[a*this.b+this.f[b]]};Or.prototype.getCell=Or.prototype.za;
Or.prototype.Lc=function(a,b,c){b=this.f[b];if(a>=this.a.length/this.b)throw new D(this.Lc,0,"Row index out of bounds");if(b===B)throw new D(this.Lc,0,"Column unknown");this.a[a*this.b+b]=c};Or.prototype.setCell=Or.prototype.Lc;
Or.prototype.concat=function(a){var b=arguments.length,c,d=""+this.Va(),e=this.a?this.a.slice():[];for(c=0;c<b;c++){var f=arguments[c];if(!(f instanceof Or))throw new D(this.concat,c);if(""+f.Va()!==d)throw new D(this.concat,c,"Incompatible columns!");f.a&&(e=e.concat(f.a))}return Qr(this.c,e)};Or.prototype.concat=Or.prototype.concat;var Tr=/(\n|\t|\r|")/;
Or.prototype.cj=function(a,b){var c,d=this.b,e=this.Va(),f=[],g=[],h=this.a,k=-1;for(c=0;c<d;c++)if(!a||a.test(e[c]))"WKT"===e[c]&&(k=f.length),f.push(c);if(!(a=f.length))throw new D(this.cj,1,"No columns filtered");Ur(this,g,e,0,d,f,a,k);if(b){var l=b.length;for(c=0;c<l;c++)g.push("\n"),e=b[c],Ur(this,g,h,e,d,f,a,k)}else for(l=this.ge(),e=0;e<l;e++)g.push("\n"),Ur(this,g,h,e,d,f,a,k);return g.join("")};
function Ur(a,b,c,d,e,f,g,h){var k;for(k=0;k<g;k++){k&&b.push("\t");var l=c[d*e+f[k]];if(k!==h){if(l!==y){l=String(l);if(Tr.test(l))throw new D(a.cj,0,'Invalid character (\\n, \\r, \\t, or ") in row '+d+" column "+a.c.columnNames[f[k]]);b.push(l)}}else b.push(l)}}function Sr(a,b){this.b=a;this.a=b}Or.Column=Sr;Sr.prototype.za=function(a){return this.b.za(a,this.a)};Sr.prototype.getCell=Sr.prototype.za;Sr.prototype.Lc=function(a,b){this.b.Lc(a,this.a,b)};Sr.prototype.setCell=Sr.prototype.Lc;
function Rr(a,b){this.a=a;this.ki=b}Or.Row=Rr;Rr.prototype.Va=function(){return this.a.Va()};Rr.prototype.getColumnNames=Rr.prototype.Va;Rr.prototype.za=function(a){return this.a.za(this.ki,a)};Rr.prototype.getCell=Rr.prototype.za;Rr.prototype.Lc=function(a,b){this.a.Lc(this.ki,a,b)};Rr.prototype.setCell=Rr.prototype.Lc;Rr.prototype.Ad=function(){return this.a};Rr.prototype.getTable=Rr.prototype.Ad;function Vr(a){if(a===B)a="\t";else if(!/^[^"\r\n]$/.test(a))throw new D(Vr,0);this.c=String(a).charCodeAt(0);this.li=A(this.li,this);this.a=Wr}var Wr=0;n=Vr.prototype;n.getState=function(){return this.a};function Xr(a,b,c){var d=a.a;if(d!==b)throw 1===d&&(a.a=Wr),new Yc(c,"Requires state: "+["READY","PARSE","PAUSE"][b]+" but found "+["READY","PARSE","PAUSE"][d]);}n.abort=function(){Xr(this,2,Vr.prototype.abort);this.a=Wr};
n.li=function(a){this.a=Wr;throw new D(Vr.prototype.parse,0,"Malformed DSV at row "+this.b.j+" column "+this.b.b+": "+a);};function Yr(a,b){var c=[];a.parse(b,function(d,e,f){1>d&&(c[e]=f);return 0<d});a.a=Wr;return c}n.parse=function(a,b,c){Xr(this,Wr,Vr.prototype.parse);a=a.trim();this.b=new Zr(a,this.c,this.li);this.f=b;this.Rk=c||ff;this.a=2;this.resume()};n.Rk=ff;
n.resume=function(){var a=this.b,b=[];Xr(this,2,Vr.prototype.resume);this.a=1;do{if(!a.g){this.a=Wr;break}if(e>a.b){if(void 0!==c&&c!==e){this.b.a("The number of columns must be the same for all rows");return}var c=e}var d=a.j;var e=a.b;var f=a.Pf;var g=this.Rk(d,e,a);if(a.Pf>f)for(;-1!==a.next(););else{for(;-1!==(f=a.next());)b.push(f);g=String.fromCharCode.apply(y,b);b.length=0}$r(a);this.f(d,e,g)&&(this.a=a.g?2:Wr)}while(1===this.a);2!=this.a&&void 0!==c&&0<e&&c!==e&&this.b.a("The number of columns must be the same for all rows")};
function Zr(a,b,c){this.c=new io(a);this.m=b;this.g=!0;this.Pf=this.j=this.b=0;$r(this);this.a=c;this.f=[];this.i=!1}n=Zr.prototype;n.Pf=0;function $r(a){var b=a.c.Tb();a.o=!1;(a.W=34===b)&&a.c.next()}function as(a,b){var c=a.c;a.o=!0;switch(b){case a.m:a.b++;break;case 13:c.next(),10!==c.Tb()&&a.a("CR without LF");case 10:a.b=0;a.j++;break;case -1:a.g=!1;break;default:a.a("End of field expected")}c.next();return-1}
n.Tb=function(){if(this.o)var a=-1;else{var b=this.c;a=b.Tb();if(this.W)switch(a){case 34:b.next();a=b.Tb();34!==a&&(a=as(this,a));break;case -1:this.a("Closing quotation mark expected")}else switch(a){case 34:this.a("Unexpected quotation mark");case this.m:case 13:case 10:case -1:a=as(this,a)}}return a};n.Be=function(){this.i=!0;this.f=[]};n.Wd=function(){var a=this.f.slice();this.i=!1;this.f=[];return a};n.next=function(){var a=this.Tb();-1!==a&&this.c.next();this.i&&this.f.push(a);this.Pf++;return a};function bs(a,b,c,d){d=d||{};if(!b)throw new D(bs,1,"has to be a function");if(!c)throw new D(bs,2,"has to be a function");this.c=b;this.g=c;this.a=[];this.i=d.duration||cs;this.b=A(this.b,this);this.f={};a=a.split("Meta:\t").slice(1);for(b=0;b<a.length;b++){d=a[b].split("\n");c=d[0].split("\t")[0];d=d.slice(1).join("\n");this.Vd[c]=new Vr;this.ji[c]=Yr(this.Vd[c],d);var e={layerId:c,columnNames:this.ji[c]};this.Wh.push(c);this.f[c]=Qr(e);this.Pc[c]=Hk();ds(this,d,c);this.b(c)}}var cs=100;n=bs.prototype;
n.ji={};n.Wh=[];n.Vd={};n.Pc={};n.bj={};function ds(a,b,c){var d=[],e=a.ji[c].length-1,f=a.f[c];try{a.Vd[c].parse(b,function(g,h,k){var l=!1;0<g&&(d[h]=k,h===e&&(a.a.push(f.zc(f.Zg(d))),Hk()-a.Pc[c]>a.i&&(l=!0)));return l},function(g,h,k){if(0<g&&h===e)return Nn(k)})}catch(g){a.g(g)}}n.cancel=function(){for(var a in this.bj)x.clearTimeout(this.bj[a])};bs.prototype.cancel=bs.prototype.cancel;
bs.prototype.b=function(a){var b=this,c,d;this.bj[a]=x.setTimeout(function(){if(2===b.Vd[a].getState())b.Pc[a]=Hk(),b.c(b.a,!1),b.a=[],b.Vd[a].resume(),b.b(a);else{c=!0;for(d=0;d<b.Wh.length;d++)if(b.Vd[b.Wh[d]].getState()!==Wr){c=!1;break}c&&(0<b.a.length&&b.c(b.a,!0),b.a=[])}},0)};function Kr(a){Kr.l.constructor.call(this,Kr,a)}u(Kr,dq);t("H.service.extension.customLocation.Service",Kr);Kr.prototype.a=function(){return{subDomain:"fleet.ls",path:"2"}};Kr.CONFIG_KEY="customLocation";Kr.prototype.uc=function(a,b){var c=b&&b.resultType;a=new Gr(this,a,b);var d;1===c||2===c?d=new Jn(a):d=new tl(a);return d};Kr.prototype.createTileLayer=Kr.prototype.uc;
function es(a,b,c,d){var e;a=a===fs?"changes":"file";var f=b[a],g=Ac(f),h=!g&&C(f,Blob);if(!g&&!h)throw new D(d,0,"Invalid "+a+" parameter");if(gs)h?e=f:e=of(f,"text/plain"),d=new x.FormData,d.append(a,e,e.name||a+".wkt"),c.method="POST",c.data=d,delete b[a];else if(h)throw new D(d,0,"Sending Blob data is not supported by the browser");}var gs=x.FormData&&!!x.FormData.prototype.append;Kr.prototype.request=function(a,b,c,d,e){return this.S(a,b,c,d,e)};
Kr.prototype.S=function(a,b,c,d,e){var f="text/plain",g=a===hs.LAYERS_UPLOAD||a===hs.LAYERS_MODIFY||a===hs.LAYERS_IMPORT,h=c,k={data:B,method:"GET",headers:this.gf};if(!a)throw new D(this.request,0,a);if(!b)throw new D(this.request,1,b);nr(this.request,3,d,e);g&&(C(c,Object,this.request,2,"Invalid request parameters"),h=Va(c),es(a,h,k,this.request));var l=this.D().clone().F(a+"."+b).I(h);b===is.JSON&&(f="application/json");a=new sf(f,l.toString(),ge,k);a.then(function(m){var p=m.issues;p&&m.error_id&&
m.response_code?e(Error(p[0].message)):d(m)},function(m){"error"===m.type||404===m.status?e(Error(m.statusText||"Unable to load data")):m.json().then(function(p){e(Error("["+p.issues[0].message+"] "+l+" request failed"))},function(){e(Error("["+m.statusText+"] "+l+" request failed"))})});return a};
var Lr="layers/list",fs="layers/modify",Nr="tiled/tile",hs={LAYERS_DELETE:"layers/delete",LAYERS_GRANT:"layers/access/grant",LAYERS_LIST:Lr,LAYERS_MODIFY:fs,LAYERS_UPLOAD:"layers/upload",LAYERS_IMPORT:"layers/import",SEARCH_ALL:"search/all",SEARCH_BBOX:"search/bbox",SEARCH_CORRIDOR:"search/corridor",SEARCH_PROXIMITY:"search/proximity",SEARCH_QUADKEY:"search/quadkey",SEARCH_TILE:Nr};Kr.EntryPoint=hs;var Mr="json",is={TXT:"txt",JSON:Mr};Kr.EntryPointType=is;
Kr.prototype.tb=function(a,b,c){var d=this;return this.request("search/all","txt",{filter:'WKT==""',layer_id:a},function(e){var f=e.replace(/[\r\n]+$/g,"").split("\t");d.request(Lr,Mr,{layer_id:a,detail_level:"all"},function(g){g=g.layers[0];g.columnNames=f;b(Qr(g))},c)},c)};Kr.prototype.getLayer=Kr.prototype.tb;
Kr.prototype.mk=function(a,b,c,d){function e(){return++g<f?h.request("layers/access/grant",Mr,{layer_id:a,granted_app_id:b[g].grantedAppId,permissions:b[g].permissions.join(",")},e,d):h.tb(a,c,d)}var f=b&&b.length,g=-1,h=this;return e()};Kr.prototype.grantAccess=Kr.prototype.mk;Kr.prototype.Kj=function(a,b,c){return this.request("layers/delete",Mr,{layer_ids:a},b,c)};Kr.prototype.deleteLayer=Kr.prototype.Kj;
Kr.prototype.td=function(a,b,c){function d(){setTimeout(function(){k.tb(g,function(q){setTimeout(e.bind(null,q),m)},function(){64E3>l?(l+=m,d()):c(x.Error("Timeout"))})},m);m*=2}function e(q){var r=JSON.stringify(q.Va()),v=a.grants;if(r!==JSON.stringify(h)){var w="Results into different column names on the backend: "+r;setTimeout(function(){k.Kj(g,function(){c(x.Error(w))},function(z){c(x.Error(w+". "+z.message))})},m)}else v&&v.length?k.mk(g,v,b,c):b(q)}var f,g,h,k=this,l=0,m=1E3;var p=!a||!Hr(g=
a.layerId)&&(f="layerId")||!Ir(h=a.columnNames)&&(f="columnNames")?0:Da(b)?Da(c)?-1:2:1;if(0<=p)throw new D(k.td,p,f||arguments[p]);return k.tb(g,function(){c(x.Error("Layer exists already"))},function(){var q={layer_id:g,file:h.join("\t")},r=a.level,v=a.storage;r!==B&&(q.level=r);v!==B&&(q.storage=v);k.request("layers/upload",Mr,q,d,c)})};Kr.prototype.createLayer=Kr.prototype.td;
Kr.prototype.Ld=function(a,b,c,d){var e=[],f;a=this.request(a,Mr,b,function(g){g.geometries.length?(g=Jr(g,b.layer_id),f=new bs(g,c,d),e.push(f)):c(gf,!0)},d);e.push(a);return new Br(e)};Kr.prototype.Yb=function(a,b,c,d,e,f){if(!zc(a))throw new D(this.Yb,0,"has invalid type");C(b,Yf,this.Yb,1,"has invalid type");if(!Dc(c))throw new D(this.Yb,2,"has invalid type");nr(this.Yb,3,d,e);a={layer_ids:a.join(","),proximity:b.lat+","+b.lng+","+c};f&&Xa(a,f);return this.Ld("search/proximity",a,d,e)};
Kr.prototype.searchByProximity=Kr.prototype.Yb;Kr.prototype.Xb=function(a,b,c,d,e,f){var g="";if(!zc(a))throw new D(this.Xb,0,"has invalid type");if(!Ac(b)&&!C(b,L))throw new D(this.Xb,1,"has invalid type");if(!Dc(c))throw new D(this.Xb,2,"has invalid type");nr(this.Xb,3,d,e);a={layer_ids:a.join(","),radius:c};if(Ac(b))a.route_id=b;else{var h=b.Y;b=0;for(c=h.length;b<c;b+=3)g+=h[b]+","+h[b+1],b<c-3&&(g+=",");a.corridor=g}f&&Xa(a,f);return this.Ld("search/corridor",a,d,e)};
Kr.prototype.searchByCorridor=Kr.prototype.Xb;Kr.prototype.Kc=function(a,b,c,d,e){function f(k,l){l&&h--;c(k,!h)}var g=[],h;if(!zc(a))throw new D(this.Kc,0,"has invalid type");C(b,K,this.Kc,1,"has invalid type");nr(this.Kc,2,c,d);b={bbox:b.la+","+b.ba+";"+b.na+","+b.ia};e&&Xa(b,e);a=b.layer_id?[b.layer_id]:a;e=0;for(h=a.length;e<h;e++)b.layer_id=a[e],g.push(this.Ld("search/bbox",b,f,d));return new Br(g)};Kr.prototype.searchByBoundingBox=Kr.prototype.Kc;
Kr.prototype.Ii=function(a,b,c,d){var e,f=[];if(!Ac(a))throw new D(this.Ii,0,"has invalid type");nr(this.Ii,1,b,c);var g={layer_id:a};d&&Xa(g,d);d=this.request("search/all",Mr,g,function(h){h.geometries.length?(h=Jr(h,a),e=new bs(h,b,c),f.push(e)):b(gf,!0)},c);f.push(d);return new Br(f)};Kr.prototype.searchAll=Kr.prototype.Ii;var js={"delete":/^GEOMETRY_ID$/,append:/^(?!GEOMETRY_ID$)/};
function ks(a,b,c,d,e,f){function g(){v++;d(this,v===q)}function h(U){v++;e(U,this,v===q)}var k="append"!==b,l,m={},p=nc(),q=0,r=[],v=0;if(!zc(c))throw new D(f,0,c);nr(f,1,d,e);for(l=c.length;l--;){var w=c[l];if(C(w,Rr)){var z=w.Ad().de().layerId;var J=w.za("GEOMETRY_ID");if(k){if(J===y||""===String(J))var G='GEOMETRY_ID must not be null or ""';m[J=z+"_"+J]&&(G="same GEOMETRY_ID for multiple rows");m[J]=w}else J!==y&&""!==String(J)&&(G='GEOMETRY_ID must be null or ""')}else G="Invalid type";if(G)throw new D(f,
0,"- Invalid row at index "+l+", "+G);J=p[z];J||(J=p[z]=[],q++);J.push(w)}for(z in p){J=p[z];c=[];for(l=J.length;l--;)c.push(J[l].ki);r.push(a.request(fs,Mr,{layer_id:z,action:b,changes:J[0].Ad().cj(js[b]||null,c)},A(g,J),A(h,J)))}return new Br(r)}Kr.prototype.Aj=function(a,b,c){return ks(this,"append",a,b,c,this.Aj)};Kr.prototype.appendRows=Kr.prototype.Aj;Kr.prototype.Tl=function(a,b,c){return ks(this,"update",a,b,c,this.Tl)};Kr.prototype.updateRows=Kr.prototype.Tl;
Kr.prototype.Lj=function(a,b,c){return ks(this,"delete",a,b,c,this.Lj)};Kr.prototype.deleteRows=Kr.prototype.Lj;Y.prototype.Qm=function(a){return this.Ya(Kr,a)};Y.prototype.getCustomLocationService=Y.prototype.Qm;function ls(a){Lq.l.constructor.call(this,ls,a)}u(ls,dq);t("H.service.extension.customRoute.Service",ls);ls.prototype.a=function(){return{subDomain:"s.fleet.ls",path:"2"}};ls.CONFIG_KEY="customRoute";ls.prototype.b=function(a){return Error(a.issues&&a.issues.length?a.issues.map(function(b){return b.message}).join(". "):a)};ls.prototype.Sd=function(a,b,c){nr(this.Sd,1,b,c);a=this.D().clone().F("calculateroute.json").I(a);return this.J(a,b,c)};ls.prototype.calculateRoute=ls.prototype.Sd;
Y.prototype.Rm=function(a){return this.Ya(ls,a)};Y.prototype.getCustomRoutingService=Y.prototype.Rm;function ms(a){ms.l.constructor.call(this,ms,a)}u(ms,dq);t("H.service.SearchService",ms);ms.CONFIG_KEY="search";ms.prototype.a=function(){return{subDomain:"search",path:"v1"}};ms.prototype.b=function(a){a=[a.title,a.action,a.cause].filter(function(b){return b});return Error(a.join(". "))};ms.prototype.uh=function(a,b,c){a=this.D().clone().Na("geocode").F("geocode").I(a);return this.J(a,b,c)};ms.prototype.geocode=ms.prototype.uh;
ms.prototype.Hi=function(a,b,c){a=this.D().clone().Na("revgeocode").F("revgeocode").I(a);return this.J(a,b,c)};ms.prototype.reverseGeocode=ms.prototype.Hi;ms.prototype.jm=function(a,b,c){a=this.D().clone().Na("autosuggest").F("autosuggest").I(a);return this.J(a,b,c)};ms.prototype.autosuggest=ms.prototype.jm;ms.prototype.rm=function(a,b,c){a=this.D().clone().Na("discover").F("discover").I(a);return this.J(a,b,c)};ms.prototype.discover=ms.prototype.rm;
ms.prototype.uo=function(a,b,c){a=this.D().clone().Na("lookup").F("lookup").I(a);return this.J(a,b,c)};ms.prototype.lookup=ms.prototype.uo;ms.prototype.lm=function(a,b,c){a=this.D().clone().Na("browse").F("browse").I(a);return this.J(a,b,c)};ms.prototype.browse=ms.prototype.lm;Y.prototype.Ln=function(a){return this.Ya(ms,a)};Y.prototype.getSearchService=Y.prototype.Ln;function ns(a){this.g=!!a.toBypassToken;if(!this.g&&!a.token)throw new D(ns,0,'"token" must be specified');ns.l.constructor.call(this,ns,a);this.j=a.token;this.i={};this.f={}}u(ns,dq);t("H.service.xyz.Service",ns);ns.prototype.a=function(){return{host:"xyz.api.here.com",path:"hub/spaces"}};ns.prototype.b=function(a){return Error(a.errorMessage||a.message)};
ns.prototype.Gh=function(a,b,c){xc(a,"String",this.Gh,0,'"projectId" must be a string');os(this.Gh,1,b,c);a=ps(this.D().clone().Od("project-api/projects/"+a));return this.J(a,b,c)};ns.prototype.getProject=ns.prototype.Gh;ns.prototype.hk=function(a,b,c){os(this.hk,0,a,b);c=qs(this,this.D().clone().I(c||{}));return this.J(c,a,b)};ns.prototype.getSpaces=ns.prototype.hk;
ns.prototype.gg=function(a,b,c){xc(a,"String",this.gg,0,'"spaceId" must be a string');os(this.gg,1,b,c);a=qs(this,this.D().clone().F(a));return this.J(a,b,c)};ns.prototype.getSpace=ns.prototype.gg;ns.prototype.he=function(a,b,c){xc(a,"String",this.he,0,'"spaceId" must be a string');os(this.he,1,b,c);a=qs(this,this.D().clone().F(a+"/statistics"));return this.J(a,b,c)};ns.prototype.getStatistics=ns.prototype.he;
ns.prototype.bg=function(a,b,c,d,e,f,g){a=qs(this,this.D().clone().F(d+"/tile/web/"+c+"_"+a+"_"+b+".mvtf").I(Object.assign({clip:!0},g)));return this.J(a,function(h){return h.arrayBuffer().then(e)},f,"arraybuffer")};ns.prototype.search=function(a,b,c,d){xc(a,"String",this.search,0,'"spaceId" must be a string');os(this.search,1,b,c);a=qs(this,this.D().clone().F(a+"/search").I(d||{}));return this.J(a,b,c)};ns.prototype.search=ns.prototype.search;
ns.prototype.dd=function(a,b,c,d){xc(a,"String",this.dd,0,'"spaceId" must be a string');if(!Ea(b))throw new D(this.dd,1,'"params" must be an object');os(this.dd,2,c,d);a=qs(this,this.D().clone().F(a+"/features").I(b));return this.J(a,c,d)};ns.prototype.getFeaturesById=ns.prototype.dd;
ns.prototype.ae=function(a,b,c,d){xc(a,"String",this.ae,0,'"spaceId" must be a string');if(!Ea(b))throw new D(this.dd,1,'"params" must be an object');os(this.ae,2,c,d);a=qs(this,this.D().clone().F(a+"/bbox").I(b));return this.J(a,c,d)};ns.prototype.getFeaturesByBoundingBox=ns.prototype.ae;ns.prototype.va=function(a){var b=this.i[a];if(b)return b;this.f[a]||this.Te(a);return null};
ns.prototype.md=function(a,b,c,d,e){xc(a,"String",this.md,0,'"spaceId" must be a string');if(!Ea(b))throw new D(this.md,1,'"geojsonObject" must be an object');os(this.md,2,c,d);if(e&&!Ea(e))throw new D(this.md,4,'"opt_params" must be an object');return rs(this,a,c,d,"PUT",b,e)};ns.prototype.putFeatures=ns.prototype.md;
ns.prototype.kd=function(a,b,c,d,e){xc(a,"String",this.kd,0,'"spaceId" must be a string');if(!Ea(b))throw new D(this.kd,1,'"featureCollection" must be an object');os(this.kd,2,c,d);if(e&&!Ea(e))throw new D(this.kd,4,'"opt_params" must be an object');return rs(this,a,c,d,"POST",b,e)};ns.prototype.postFeatures=ns.prototype.kd;
ns.prototype.vd=function(a,b,c,d){xc(a,"String",this.vd,0,'"spaceId" must be a string');if(!Ea(b))throw new D(this.vd,1,'"params" must be an object');os(this.vd,2,c,d);return rs(this,a,c,d,"DELETE",B,b)};ns.prototype.deleteFeatures=ns.prototype.vd;
function rs(a,b,c,d,e,f,g){var h=Object.assign(a.g?{}:{authorization:"Bearer "+a.j},{"Content-Type":"application/geo+json"},a.gf);e={method:e,headers:h};f&&(e.data=JSON.stringify(f));b=ps(a.D().clone().F(b+"/features").I(g||{}));f=new sf("application/json",b.toString(),ge,e);f.then(c,fq(a,b,d));return f}ns.prototype.Te=function(a){var b=this;this.f[a]=ss;this.gg(a,function(c){b.f[a]=ts;b.i[a]=c.copyright;b.dispatchEvent("copyrightupdate")},function(c){b.f[a]=us;throw c;})};
function qs(a,b){return a.g?b:ps(b).I({access_token:a.j})}function ps(a){var b=Object.assign({},a.getQuery());delete b.apikey;return a.Ui(b)}ns.CONFIG_KEY="xyz";var ss=1,ts=2,us=-1;function os(a,b,c,d){if(!Da(c))throw new D(a,b,'"onResult" must be a function');if(!Da(d))throw new D(a,b+1,'"onError" must be a function');}Y.prototype.Yn=function(a){return this.Ya(ns,a)};Y.prototype.getXYZService=Y.prototype.Yn;function vs(a,b,c){var d;vs.l.constructor.call(this,c?{min:c.min,max:c.max,engineType:c.engineType}:void 0);C(a,ns,vs,0);if(!Ac(b))throw new D(vs,1,'"spaceId" must be a string');this.m=a;this.a=b;this.c={};if(c&&(["limit","simplificationLevel","tags"].forEach(function(e){e in c&&(this.c[e]=c[e])},this),a=c.parameters))for(d in a)this.c[d]=a[d];this.ac(this.f===ek.WEBGL?new bi({sources:{xyz:{type:"MVT"}},layers:{xyz:{data:{source:"xyz",layer:this.a},points:{filter:{$geometry:"point"},draw:{points:{collide:!1,
order:200,color:"#92CF48",size:[[10,"8px"],[14,"12px"],[18,"16px"]]}}},polygons:{filter:{$geometry:"polygon"},draw:{polygons:{order:201,color:"#E39E3C"},lines:{order:202,color:"#755DA5",width:"1px"}}},lines:{filter:{$geometry:"line"},draw:{lines:{order:203,color:"#000000",width:"2px",join:"round",cap:"round"}}}}}}):new H.map.render.harp.Style({styles:[{layer:this.a,when:["==",["geometry-type"],"Point"],technique:"circles",renderOrder:200,color:"#92CF48",size:["interpolate",["linear"],["zoom"],10,
8,14,12,18,16]},{layer:this.a,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#E39E3C",renderOrder:201},{layer:this.a,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#755DA5",lineWidth:"1px",renderOrder:202},{layer:this.a,when:["==",["geometry-type"],"LineString"],technique:"solid-line",color:"#000000",lineWidth:"2px",renderOrder:203}]}))}u(vs,R);t("H.service.xyz.Provider",vs);vs.prototype.J=function(a,b,c,d,e){return this.m.bg(a,b,c,this.a,d,e,this.c)};
vs.prototype.requestInternal=vs.prototype.J;vs.prototype.va=function(){return this.m.va(this.a)};vs.prototype.getCopyrights=vs.prototype.va;vs.prototype.Gd=ef;vs.prototype.providesOMV=vs.prototype.Gd;vs.prototype.wa=function(){return this.ub()};vs.prototype.getStyle=vs.prototype.wa;vs.prototype.pc=function(a){C(a,bi)&&a.b("MVT");this.ac(a)};vs.prototype.setStyle=vs.prototype.pc;t("H.service.buildInfo",function(){return Ff("H-service","1.30.8","00959ca")});

function ws(a){var b;if(a)for(this.a={},b=a.length;b--;)this.a[a[b]]=!0;this.Kl={}}var xs;ws.prototype.a={};ws.prototype.parse=function(a,b,c){var d,e,f,g,h;xs=!1;try{c=Yp.JSON.parse(c)}catch(m){xs=!0}if(c&&(d=c.metadata)){var k={spatials:[]};for(e in d){if(c=!this.a[e]&&(f=ys[e]))(g=d[e])||(xs=!0,g=void 0),c=g;if(c)for(c=g.length;c--;){var l;(l=g[c])||(xs=!0,l=void 0);(h=l)&&f(b,a,this,e,h,k)}}}else xs=!0;return xs?void 0:k};ws.prototype.parse=ws.prototype.parse;
var ys={"street labels":function(a,b,c,d,e,f){var g;(g=e.vertices)||(xs=!0,g=void 0);if(g){var h,k=g.length,l;(l=0<k)||(xs=!0,l=void 0);if(l)for(h=Array(k/2);k;){var m=g[--k];l=g[--k];h[k/2]=new I(l,m)}h=h?{a:[h]}:B;k=+e["font size"]/a.ab();g=c.Kl[k];g||(zs.lineWidth=k,g=c.Kl[k]=c.Ud.Wj(zs));As(a,b,h,!1,g,e,d,f)}delete e.vertices},"city center labels":function(a,b,c,d,e,f){As(a,b,Bs(e,new Ah([])),!0,c.Ud,e,d,f)},labels:function(a,b,c,d,e,f){var g;(g=e["bounding boxes"])||(xs=!0,g=void 0);if(g){for(var h=
g.length,k=new Ah([]),l;h--;){var m;(m=g[h])||(xs=!0,m=void 0);(l=m)&&Bs(l,k)}As(a,b,k,!0,c.Ud,e,d,f)}delete e["bounding boxes"]},buildings:function(a,b,c,d,e,f){var g=e.id,h=b.Bg[g],k,l,m,p=[],q=[];(k=e)||(xs=!0,k=void 0);if(k&&((l=k.vertices)||(xs=!0,l=void 0),l)){var r;(r=k.polygons)||(xs=!0,r=void 0);(m=r)&&p.push.apply(p,Cs(l,m));(k=k.outlines)||(xs=!0,k=void 0);(m=k)&&q.push.apply(q,Cs(l,m))}m=p.length;p.push.apply(p,q);q=new Ah(p,Ud,m);(p=p.length)||(xs=!0,p=void 0);p&&(h?(lr(h,a,[q]),f.spatials.push(h)):
(h=As(a,b,q,!0,c.Ud,e,d,f,g),b.da(h)))}};ys["transit stops"]=ys.POIs=ys.labels;var Ds=["box 2","box 1","annotation box","icon box"];function Bs(a,b){for(var c=Ds.length,d,e;c--;)if(d=Ds[c],e=a[d]){var f=e[0],g=e[1],h=e[2];e=e[3];b.a.push([new I(f,g),new I(f+h,g),new I(f+h,g+e),new I(f,g+e)]);delete a[d]}return b}
function Cs(a,b){var c=b.length,d,e,f;if(0<c)for(e=Array(c);c--;)if((d=b[c])||(xs=!0,d=void 0),d){var g=d.length;if(0<g)for(e[c]=f=Array(g);g--;){var h=2*d[g];f[g]=new I(a[h],a[h+1])}}return e||[]}var Es={};function As(a,b,c,d,e,f,g,h,k){Es.style=e;d=new hr(b,d,k,Es);c&&lr(d,a,[c]);Fs(f);f.category=g;d.setData(f);h.spatials.push(d);d.ka(b);return d}ws.prototype.Ud=new ch({strokeColor:"transparent",fillColor:"transparent",lineWidth:0});var zs={};
function Fs(a){var b,c=!1;switch(typeof a){case "object":if(a instanceof Array)for(b=a.length;b--;)Fs(a[b])?c=!0:delete a[b];else if(a)for(b in a)Fs(a[b])?c=!0:delete a[b];break;case "number":c=!0;break;default:c=!!a}return c};function Gs(a,b,c){c=c||{};b=b||{};var d=c.tileType||"maptile",e=c.scheme||"normal.day";R.call(this,{min:0,max:20});!0===b.pois&&(b.pois="!F");this.a=b;if(!(a&&a instanceof Hs))throw Error("InvalidArgument: service required");this.A=a;this.o=A(this.o,this);this.A.addEventListener("versionupdate",this.o);this.c=a.D().clone().F(d+"/"+a.Ac()+"/"+e).I(this.L).I(b);this.bc=a.Ih()||null;this.T=c.pixelRatio||c.pixelratio||Te();this.tileSize=c.tileSize||256;this.tileType=d;this.scheme=e;this.m=new yq(new ws(c.categoryFilter));
this.m.ka(this);this.B=A(this.B,this);this.m.addEventListener("update",this.B);R.call(this,{min:0,max:20});this.u(new Lk(c.tileCacheSize||256,A(this.fa,this)))}u(Gs,R);t("H.service.metaInfo.TileProvider",Gs);Gs.prototype.fa=function(a,b){a=b.Wa();for(var c=a.length,d;c--;)d=a[c],delete d.tf[b.key],d.release();b.data&&($p.push(b.zg(),this.tileSize),b.Ag())};Gs.prototype.B=function(){this.dispatchEvent("update")};
Gs.prototype.J=function(a,b,c,d,e){var f=this.c.clone(),g=this.bc,h=this.tileSize,k=this.getTileKey(a,b,c);k=this.Ob().get(k);var l;if(k&&!k.ne()){d($p.pop(this.tileSize),null);var m={cancel:function(){}}}else{g&&f.Na(g[(c+b+a)%g.length]);f.F(c+"/"+a+"/"+b+"/"+h+"/png8");var p=Yp.setTimeout(function(){l=new sf("text/plain",f.toString());l.then(function(q){d(null,q)},e)},500)}return m||{cancel:function(){l?l.cancel():Yp.clearTimeout(p)}}};Gs.prototype.requestInternal=Gs.prototype.J;
Gs.prototype.ud=function(a,b,c,d,e){var f=this.m;var g=d||$p.pop(this.tileSize);if(d)a=this.Ob().get(this.getTileKey(a,b,c)),a.V(d);else if(d=a=new Xk(this.Bd(a,b,c),a,b,c,this.tileSize,this.T,c,f),delete d.j,d.m=e,a.V(g))for(e=a.Wa(),g=e.length;g--;)e[g].Fg();else $p.push(g,this.tileSize);return a};Gs.prototype.createTileInternal=Gs.prototype.ud;Gs.prototype.C=function(){this.m.C();this.A.removeEventListener("versionupdate",this.o);R.prototype.C.call(this)};
Gs.prototype.o=function(){var a=this.A;this.c=a.D().clone().F(this.tileType+"/"+a.Ac()+"/"+this.scheme).I(this.L).I(this.a);this.reload(!1)};Gs.prototype.L={metadata:"metaonly",mgen:"2"};function Hs(a){Hs.l.constructor.call(this,Hs,a);a=eq(this,a);this.bc=a.shards;(this.Sa=a.ignoreTypes?null:a.type)&&this.D().Na(this.Sa);this.cc=a.version;this.Bi={};this.Yc=new Op;"newest"===this.cc&&this.sh()}u(Hs,dq);t("H.service.metaInfo.Service",Hs);Hs.prototype.a=function(){return{type:"base",version:"newest",subDomain:"maps.ls",path:"maptile/2.1",shards:["1","2","3","4"]}};Hs.CONFIG_KEY="metaInfo";function Is(a,b){for(var c={},d=a[b+"s"][b],e=d.length;e--;)c[d[e].id]=d[e];a[b+"s"]=c}
Hs.prototype.Ih=function(){return this.bc};Hs.prototype.jk=function(){return this.Sa};Hs.prototype.Ac=function(){return this.cc};Hs.prototype.getVersion=Hs.prototype.Ac;Hs.prototype.Yi=function(a){this.cc=a};Hs.prototype.va=function(){return this.Yc};Hs.prototype.getCopyrights=Hs.prototype.va;
Hs.prototype.fj=function(a){a=a.response;var b;Is(a,"map");Is(a,"scheme");Is(a,"tiletype");Is(a,"format");Is(a,"resolution");Is(a,"language");if("newest"===this.cc&&"traffic"!==this.Sa)for(b in a.maps)a.maps[b].hash&&a.maps[b].newest&&(this.Yi(a.maps[b].hash),this.dispatchEvent("versionupdate"));this.Oh=a;this.dispatchEvent("infoupdate")};
Hs.prototype.sh=function(){var a=this;var b=this.D().clone().F("info").I({output:"json"});this.bc&&b.Na(this.bc[0]);this.J(b,function(c){a.fj(c)},function(c){throw c;})};Hs.prototype.Ah=function(){return this.Oh};Hs.prototype.getInfo=Hs.prototype.Ah;Hs.prototype.Oe=function(a,b,c,d,e,f){return new Gs(this,d,{tileSize:a,pixelRatio:b,categoryFilter:c,tileType:e,scheme:f})};Hs.prototype.createTileProvider=Hs.prototype.Oe;Hs.prototype.uc=function(a,b,c,d,e,f){return new tl(this.Oe(a,b,c,d,e,f))};
Hs.prototype.createTileLayer=Hs.prototype.uc;Y.prototype.ak=function(a){return this.Ya(Hs,a)};Y.prototype.getMetaInfoService=Y.prototype.ak;(function(){var a=Y.prototype.createDefaultLayers;Y.prototype.createDefaultLayers=function(b,c,d,e,f,g){var h=a.call(this,b,c,d,e,f,g),k={},l=this.ak();"object"===typeof b&&(g=b,b=g.tileSize,c=g.ppi,d=g.lg,e=g.lg2,f=g.style,g=g.pois);b=b||256;var m=320===c?2:1;if(0>[72,250,320,500].indexOf(+c)){if(c!==B)throw new D(this.Uf,1,c);}else k.ppi=+c;d&&(k.lg=d);e&&(k.lg2=e);f&&(k.style=f);g&&(k.pois=g);h.raster.normal.metaInfo=l.uc(b,m,["buildings"],k);return h}})();

function Js(a,b,c,d,e){e&1&&Ks(a,a,b,c,d,0);e&2&&Ks(a,a,b,c,d,1);e&4&&Ks(a,a,b,c,d,2);e&8&&Ks(a,a,b,c,d,3)}
function Ks(a,b,c,d,e,f){var g=(c+1)*(c+1),h,k=4*d,l=c+1,m,p=[{r:0,zm:0,km:0,Wg:0,next:null}];var q=1;var r=["r","g","b","a"][f];var v=2*c+1;for(var w,z;q<v;q++)p[q]={r:0,zm:0,km:0,Wg:0,next:null},p[q-1].next=p[q];p[2*c].next=p[0];var J=4*(d-1);for(h=0;h<e;h++){var G=h*k;var U=a[G+f];var X=U*l*(c+2)/2;v=U*l;for(q=0;q<=c;q++)p[q][r]=U;var xa=0;for(q=1;q<=c;q++){var ia=q<d?G+4*q:G+J;ia=a[ia+f];X+=ia*(l-q);xa+=ia;p[c+q][r]=ia}ia=p[0];w=p[l];q=G;z=4*l;var hc=G+J;for(U=0;U<d;U++){b[q+f]=X/g;X-=v;var wb=
U+l<d?q+z:hc;wb=a[wb+f];xa+=wb;X+=xa;v-=ia[r];v+=w[r];xa-=w[r];ia[r]=wb;ia=ia.next;w=w.next;q+=4;if(!X)for(;(m=4*(U+l))<k&&0===a[G+f+m];)U++,q+=4}}G=(e-1)*k;for(U=0;U<d;U++){a=4*U;h=b[a+f];X=h*l*(c+2)/2;v=h*l;for(q=0;q<=c;q++)p[q][r]=h;xa=0;for(q=1;q<=c;q++)ia=q<e?a+q*k:a+G,ia=b[ia+f],X+=ia*(c-q+1),xa+=ia,p[c+q][r]=ia;ia=p[0];w=p[l];q=a;hc=l*k;J=a+G;for(h=0;h<e;h++)if(b[q+f]=X/g,X-=v,wb=h+l<e?q+hc:J,wb=b[wb+f],xa+=wb,X+=xa,v-=ia[r],v+=w[r],xa-=w[r],ia[r]=wb,ia=ia.next,w=w.next,q+=k,!X)for(;(m=h+l)<
e&&0===b[m*k+f+a];)h++,q+=k}};function Ls(a,b,c){this.f=b=a>>b;this.j=Math.log(b)*Math.LOG2E;this.i=a=document.createElement("CANVAS");this.a=a.getContext("2d");this.b=a.width=a.height=3*b;var d=document.createElement("canvas");a=c.a;var e=c.b;b=[];var f;d.width=256;d.height=1;d=d.getContext("2d");for(g in e)e.hasOwnProperty(g)&&b.push({stop:parseFloat(g),value:e[g]});e=b.length;b.sort(this.m);0<b[0].stop&&b.unshift({stop:0,value:b[0].value});1>b[e-1].stop&&b.push({stop:1,value:b[e-1].value});e=b.length;var g=d.createLinearGradient(0,
0,256,0);for(f=0;f<e;f++){if(!a&&k){var h=k.stop+(b[f].stop-k.stop)/2;g.addColorStop(h,k.value);g.addColorStop(h,b[f].value)}g.addColorStop(b[f].stop,b[f].value);var k=b[f]}d.fillStyle=g;d.fillRect(0,0,256,1);this.c=d.getImageData(0,0,256,1).data;this.g=c.a}Ls.prototype.m=function(a,b){return a.stop-b.stop};function Ms(a,b){this.canvas=a;this.size=b};function Ns(a,b){var c,d=0;if(!Ea(a)||Ua(a))throw new D(Ns,0,a);for(c in a){var e=+c;d++;if(!(Dc(e)&&0<=e&&1>=e&&Ac(a[c])))throw new D(Ns,0,a);}if(2>d)throw new D(Ns,0,"Specify at least 2 stops");this.b=a;this.a=!!b}t("H.data.heatmap.Colors",Ns);var Os=new Ns({0:"#008","0.2":"#0b0","0.5":"#ff0","0.7":"#f00"},!0);Ns.DEFAULT=Os;function Ps(a,b,c){this.a=a=Zd(a,0,30);this.Sa=b;this.i=c;this.m=[];this.b=[];do this.b[a]=[],this.m[a]=new Qs;while(a--);b===Rs?(this.o=Ss,this.j=Ts):(this.o=Us,this.j=Vs);this.c=1/0;this.f=-1/0}var Ws=Math.log(.5);function Ts(a){return this.g?Math.round((a-this.c)/this.g*255):127}function Vs(a){return void 0===this.W?127:Math.round(255*Math.pow(a,this.W))}
Ps.prototype.Ib=function(a){var b,c;var d=a.value;void 0===d&&(d=1);d>this.f&&(this.f=d,this.g=this.f-this.c);d<this.c&&(this.c=d,this.g=this.f-this.c);var e=fj.ad(a).scale(1073741823).floor();d=this.a;var f=e.x>>30-d;e=e.y>>30-d;for(c=this.o;-1<d;){this.b[d][e]||(this.b[d][e]=[]);(b=this.b[d][e][f])||(b=this.b[d][e][f]=new c(f,e,d));b.Ib(a,d);var g=this.m[d];g.f>b.b&&(g.f=b.b);g.a<b.b&&(g.a=b.b);g.c>b.a&&(g.c=b.a);g.b<b.a&&(g.b=b.a);d--;f>>=1;e>>=1}};
function Xs(a,b,c,d,e){var f=1<<b,g,h;d=Yd(d,f);f=0<=c&&c<f&&(g=a.b[b])&&(h=g[c])&&(f=h[d])||null;!f&&e&&0<=b&&(f=Xs(a,b-1,c>>1,d>>1,e));return f}function Ys(a,b,c,d,e,f){for(var g,h=[];c<=d;c++)for(g=e;g<=f;g++)h.push(Xs(a,b,c,g,!1));return h}function Zs(a,b){var c=0,d=0,e=Xs(a,0,0,0,!1),f;if(b.f)return b.c;b.z===a.a?b.c=b.a:($s(a,b,function(g){var h=at(a,g),k=4-h.length;if(g.z!==a.a){for(f=0;f<h.length;f++)c+=h[f].a,d++;c+=k*e.a;d+=k}}),b.c=c/d);b.f=!0;return b.c}
function $s(a,b,c){b=[b];for(var d,e;0<b.length;)e=b.shift(),d=at(a,e),c(e),b.push.apply(b,d)}function at(a,b){var c=[],d,e,f;for(e=0;1>=e;e++)for(f=0;1>=f;f++)(d=Xs(a,b.z+1,2*b.x+e,2*b.y+f,!1))&&c.push(d);return c}Ps.prototype.clear=function(){Ps.call(this,this.a,this.Sa,this.i)};function Us(a,b,c){this.x=a;this.y=b;this.z=c;this.a=this.b=this.g=0;this.f=!1;this.c=0}Us.prototype.Ib=function(a,b){this.g++;this.b+=a.value||1;this.a=this.b/Math.pow(2,2*(30-b))};
function Ss(a,b,c){this.x=a;this.y=b;this.z=c;this.a=this.b=this.g=0;this.f=!1;this.c=0}Ss.prototype.Ib=function(a){a=a.value;this.b+=void 0!==a?a:1;this.a=this.b/++this.g;this.f=!1};function Qs(){this.f=this.c=1/0;this.a=this.b=-1/0};function bt(a){var b=a||{},c=+b.sampleDepth;a=+b.coarseness;var d=b.colors,e={min:b.min,max:b.max,engineType:b.engineType},f=b.tileSize,g=+b.dataMax;b.tileSize&&(e.tileSize=f);R.call(this,e);fk(this,b.opacity);this.Sa="value"===b.type?Rs:ct;this.sampleDepth_=Dc(c)?Zd(Math.round(c),1,8):4;this.o=!!b.assumeValues;b=this.max;this.A=Dc(g)?Zd(Math.round(g),this.min,b+this.sampleDepth_):b;a=Dc(a)?Zd(Math.round(a),0,3):1;if(d&&!C(d,Ns))throw new D(bt,0,"colors");this.a=new Ps(b+this.sampleDepth_,this.Sa,
this.A);this.L=new Ls(this.tileSize,a,d||Os);this.m=A(this.m,this);this.c=A(this.c,this);this.B=new Fk(20,this.m)}u(bt,R);t("H.data.heatmap.Provider",bt);bt.prototype.oc=function(a){fk(this,a)};bt.prototype.setOpacity=bt.prototype.oc;bt.prototype.ed=function(){return this.g};bt.prototype.getOpacity=bt.prototype.ed;bt.prototype.pf=ef;bt.prototype.providesRasters=bt.prototype.pf;
bt.prototype.J=function(a,b,c,d,e){var f=this.o,g,h;if(Xs(this.a,0,0,0,!1)){if(!f){var k=Ys(this.a,c,b-1,b+1,a-1,a+1);for(g=k.length;g--&&!f;)if(null!==k[g]){f=!0;break}}f&&(h=this.B.push([a,b,c,d,e],this.c))}f||d(null);return h};bt.prototype.requestInternal=bt.prototype.J;
function dt(a,b,c,d){var e=document.createElement("canvas"),f=a.tileSize,g=e.getContext("2d");e.width=e.height=f;var h=a.L;var k=a.a,l=a.o,m=a.Sa;var p=h.f;var q=h.a,r,v,w=m===ct?2:1,z=w;a=Math.min(a.sampleDepth_+w,h.j);w=h.b;var J=k.a;if(l&&m===Rs){for(v=-1;1>=v;v++)for(l=-1;1>=l;l++){var G=(G=Xs(k,d,c+v,b+l,!0))?k.j(Zs(k,G)):128;q.fillStyle="rgba("+G+",128,0,1)";q.fillRect((l+1)*p,(v+1)*p,p,p)}l=p-Math.floor(p/10);v=3;G=q.getImageData(0,0,w,w);Js(G.data,l,w,w,v);q.putImageData(G,0,0)}else q.fillStyle=
l?"#080":"#000",q.fillRect(0,0,w,w);for(;z<=a&&d+z<=J;z++){l=p>>z;v=p-l;var U=m===ct?127+Math.floor(128/(1<<a-z)):255;G=(1<<z)+2;var X=1<<z;var xa=b<<z;var ia=c<<z;X=Ys(k,d+z,ia-1,ia+X,xa-1,xa+X);for(xa=X.length;xa--;){ia=xa%G;var hc=xa/G<<0;if(r=X[xa])r=k.j(r.a),q.fillStyle="rgba("+r+","+U+",0,1)",q.fillRect(ia*l+v,hc*l+v,l,l)}G=q;U=l;X=v;xa=p+2*l;l=p+2*l;ia=ia=3;hc=q.getImageData(X,v,xa,l);Js(hc.data,U,xa,l,ia);G.putImageData(hc,X,v)}b=q.getImageData(0,0,w,w);c=h.c;d=h.g;k=b.data;a=0;for(w=k.length;a<
w;a+=4)m=k[a],z=k[a+1],4===c.length&&(m=0),k[a]=c[4*m],k[a+1]=c[4*m+1],k[a+2]=c[4*m+2],k[a+3]=c[4*m+3]*(d?z/255:10>z?0:1);q.putImageData(b,0,0);h=new Ms(h.i,p);p=h.size;g.drawImage(h.canvas,p,p,p,p,0,0,f,f);return e}bt.prototype.m=function(a,b){a.done(dt(this,b[0],b[1],b[2]))};bt.prototype.c=function(a,b,c){var d=a.data;a=d[3];d=d[4];c?d():a(b)};
bt.prototype.zj=function(a,b){var c;if(!zc(a))throw new D(this.zj,0,a);if(c=a.length){for(;c--;)this.a.Ib(a[c]);a=this.a;var d;c=a.m;var e=a.a,f=0;if(a.Sa===ct){var g=c[a.a].a;for(d=a.a;0<=d;d--)if(c[d].a===g)f=d;else break;g=c[0].a;for(d=0;d<=f;d++)if(g===c[d].a)e=d;else break;f>a.i&&(f=a.i);g=Math.round(e+(f-e)/2);a.W=Ws/Math.log(c[g].b)}this.reload(!!b)}};bt.prototype.addData=bt.prototype.zj;bt.prototype.clear=function(){this.a.clear();this.reload(!0)};bt.prototype.clear=bt.prototype.clear;var ct=0,Rs=1;function et(){}t("H.data.utils.Dom",et);et.prototype.Yd=function(a){return!!a&&/^\s*(1|true)\s*$/i.test(this.Pa(a))};et.prototype.getBoolean=et.prototype.Yd;et.prototype.Pa=function(a){var b;try{if(a.nodeType===Node.ATTRIBUTE_NODE)return a.value;var c="";var d=0;var e=a.childNodes;for(b=e.length;d<b;d++)e[d].nodeType!==Node.COMMENT_NODE&&(c+=e[d].nodeValue.replace(/^\s+|\s+$/g,""))}catch(f){}return c||""};et.prototype.getString=et.prototype.Pa;
et.prototype.cg=function(a){return parseFloat(this.Pa(a))||0};et.prototype.getFloat=et.prototype.cg;et.prototype.al=function(a){var b=a.split(/\s+/),c=b.length,d=!(b&&1==c),e=d?1:3,f=[],g;d||(b=a.split(","),c=b.length);for(g=0;g<c;g+=e)if(a=this.xi(d?b[g]:g+3>b.length?null:b.slice(g,g+3)))f.push(a);else return[];return f};et.prototype.parseCoords=et.prototype.al;
et.prototype.xi=function(a){if(!a)return null;var b=a instanceof Array&&0<a.length&&4>a.length?a:a.split(",");a=parseFloat(b[0]);var c=parseFloat(b[1]);b=parseFloat(b[2]);return isNaN(c)||isNaN(a)?null:new Yf(c,a,isNaN(b)?void 0:b)};et.prototype.parseCoord=et.prototype.xi;et.prototype.ag=function(a){a=this.Pa(a);return/^[0-9a-fA-F]{8}$/.test(a)?"#"+a.substr(6,2)+a.substr(4,2)+a.substr(2,2)+a.substr(0,2):"#000000ff"};et.prototype.getColor=et.prototype.ag;function ft(a){a=a.attributes;for(var b,c=a.length;c--;)switch(b=a[c],b.name){case "x":this.x=parseFloat(b.value);break;case "y":this.y=parseFloat(b.value);break;case "xunits":this.gd="fraction"===et.prototype.Pa(b);break;case "yunits":this.Ec="fraction"===et.prototype.Pa(b)}}t("H.data.kml.HotSpot",ft);function gt(a){var b=a.childNodes,c=new et;for(a=b.length;a--;){var d=b[a];switch(d.nodeName){case "href":this.href=c.Pa(d)}}}t("H.data.kml.Icon",gt);function ht(a){var b;if(a){a=a.childNodes;var c=a.length;for(b=new et;c--;){var d=a[c];switch(d.nodeName){case "scale":this.scale=b.cg(d);break;case "Icon":this.icon=d=new gt(d);break;case "hotSpot":this.a=d=new ft(d)}}}}t("H.data.kml.IconStyle",ht);function it(){this.a={4:function(a){return["#",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),"ff"].join("")},5:function(a){return["#",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),a.charAt(4),a.charAt(4)].join("")},7:function(a){return a+"ff"},9:function(a){return a}};this.b={4:function(a){return[jt(a.charAt(1)),jt(a.charAt(2)),jt(a.charAt(3)),255]},5:function(a){return[jt(a.charAt(1)),jt(a.charAt(2)),jt(a.charAt(3)),jt(a.charAt(4))]},7:function(a){a=
parseInt(a.substring(1),16);return[a>>16&255,a>>8&255,a&255,255]},9:function(a){a=parseInt(a.substring(1),16);return[a>>24&255,a>>16&255,a>>8&255,a&255]}}}t("H.data.utils.ColorHelper",it);function jt(a){a=parseInt(a,16);return(a<<4)+a}function kt(a){return 16>a?"0"+Math.round(a).toString(16):Math.round(a).toString(16)}
function lt(a,b,c){if(!/^(#|rgb).*/.test(b))return[0,0,0,255];c||(c="","#"===b.charAt(0)?c=a.a[b.length]?b:"":"rgb"===b.substr(0,3)&&(b=b.match(/\d+(\.\d+)?/g),c=b.length,c=2<c&&5>c?["#",kt(+b[0]),kt(+b[1]),kt(+b[2]),3<c?kt(255*+b[3]):"ff"].join(""):""),b=c);a=a.b[b.length](b);a[3]=Math.round(a[3]/255*100)/100;return a}
it.prototype.Rl=function(a,b){var c="";if(!/^(#|rgb).*/.test(a)){c="";var d;for(d=0;6>d;d++)c+="ABCDEF0123456789".charAt(Math.floor(16*Math.random()));return c+"ff"}a=lt(this,a,b);for(b=0;4>b;b++)3>b?d=Math.floor(Math.random()*(a[b]+1)):d=255*a[b],c+=kt(d);return c};it.prototype.toRandomRGBA=it.prototype.Rl;function mt(a){a=a.childNodes;for(var b,c=a.length,d=new et,e=new it;c--;)switch(b=a[c],b.nodeName){case "color":this.a=d.ag(b);break;case "colorMode":this.b=d.Pa(b)}"random"===this.b&&(this.a="#"+e.Rl(this.a,!1))}t("H.data.kml.ColorStyle",mt);function nt(a){var b=a.childNodes,c=b.length,d=new et;this.a=this.fill=!0;for(this.b=new mt(a);c--;)switch(a=b[c],a.nodeName){case "fill":this.fill=d.Yd(a);break;case "outline":this.a=d.Yd(a)}}t("H.data.kml.PolyStyle",nt);function ot(a){var b=a.childNodes,c=b.length,d=new et;for(this.a=new mt(a);c--;)a=b[c],"width"===a.nodeName&&(this.width=d.cg(a))}t("H.data.kml.LineStyle",ot);function pt(a){a=a.childNodes;for(var b,c=a.length,d=new et;c--;)switch(b=a[c],b.nodeName){case "bgColor":this.bgColor=d.ag(b);break;case "textColor":this.textColor=d.ag(b);break;case "text":this.text=d.Pa(b);break;case "displayMode":this.displayMode=d.Pa(b)}}t("H.data.kml.BalloonStyle",pt);function qt(a){var b=a.childNodes,c=b.length;for(this.id=a.getAttribute("id");c--;)switch(a=b[c],a.nodeName){case "IconStyle":this.rk=a=new ht(a);break;case "LineStyle":this.pe=a=new ot(a);break;case "PolyStyle":this.dl=a=new nt(a);break;case "BalloonStyle":this.Kf=a=new pt(a)}}t("H.data.kml.Style",qt);function rt(a,b){a=a.childNodes;var c=a.length,d=new et;for(this.b=b;c--;)switch(b=a[c],b.nodeName){case "key":this.key=d.Pa(b);break;case "styleUrl":this.a=d.Pa(b)}}t("H.data.kml.Pair",rt);rt.prototype.wa=function(){if(this.a){var a="highlight"===this.key?!0:!1;a=this.b.Jh(this.a.substr(1),a)}return a};rt.prototype.getStyle=rt.prototype.wa;function st(a,b){var c=a.childNodes,d=c.length;this.b=b;this.id=a.getAttribute("id");for(this.a=[];d--;)a=c[d],"Pair"===a.nodeName&&(a=new rt(a,this.b),this.a.push(a))}t("H.data.kml.StyleMap",st);st.prototype.wa=function(a){var b=null;a=a?"highlight":"normal";for(var c=this.a.length;c--;)this.a[c].key===a&&(b=this.a[c].wa());return b};st.prototype.getStyle=st.prototype.wa;function tt(){this.a={}}t("H.data.kml.StyleContainer",tt);tt.prototype.ah=function(a){a&&a.id&&(this.a["style_"+a.id]=a)};tt.prototype.addStyle=tt.prototype.ah;tt.prototype.Jh=function(a,b){a=this.a["style_"+a];a instanceof st&&(a=a.wa(b));return a};tt.prototype.getStyleById=tt.prototype.Jh;function ut(a){a=a.childNodes;for(var b,c=a.length,d=null,e=new et;c--;)b=a[c],"coordinates"===b.nodeName&&(d=e.Pa(b));this.a=null;d&&(this.a=e.xi(d)||null)}t("H.data.kml.Point",ut);function vt(a,b){var c=a&&a.childNodes||[],d=new et;if(!a||!b)throw Error("Node or stylesContainer is not defined");this.visibility=!0;this.g=a;for(a=c.length;a--;){var e=c[a];switch(e.nodeName){case "name":this.name=d.Pa(e);break;case "description":this.b=d.Pa(e);break;case "visibility":this.visibility=d.Yd(e);break;case "open":this.open=d.Yd(e);break;case "styleUrl":if(this.c=d.Pa(e))e=this.c.substr(1),this.f=b.Jh(e,!1);break;case "Style":this.a=e=new qt(e)}}}t("H.data.kml.Feature",vt);function wt(a){a=a.childNodes;for(var b,c=a.length,d=new et;c--;)if(b=a[c],"coordinates"===b.nodeName){var e=[],f=new et;try{e=f.al(d.Pa(b))}catch(g){e=[]}this.a=2>e.length?[]:e}}t("H.data.kml.Line",wt);function xt(a){for(var b=new L,c=a.a?a.a.length:0;c--;)b.Hd(a.a[c]);return b};function yt(){}yt.prototype.f=0;yt.prototype.b=0;function zt(a){var b=a.childNodes,c=b.length;this.a=new L;for(this.c=[];c--;){var d=b[c];var e=d.nodeName;if("outerBoundaryIs"===e||"innerBoundaryIs"===e){var f=d.childNodes;for(d=f.length;d--;){var g=f[d];if("LinearRing"===g.nodeName){var h=new wt(g);if("outerBoundaryIs"===e){this.a=xt(h);var k=void 0,l=a,m=h.a;h=new et;var p=l.querySelector("altitudeMode");if(p&&p.parentNode===l&&!/^\s*clampTo/.test(h.Pa(p))&&m){p=m.length;for(var q=0;q<p&&0!==k;q++){var r=m[q].alt;r?k?r!==k&&(k=0):k=r:k=0}(m=l.querySelector("*|altitudeOffset"))&&
m.parentNode===g&&"http://www.google.com/kml/ext/2.2"===m.namespaceURI&&(g=h.cg(m))&&(k+=g);k&&(k=wd(Hi,k),(g=l.querySelector("extrude"))&&g.parentNode===l&&h.Yd(g)?this.b=k:this.f=k)}}else this.c.push(xt(h))}}}}}u(zt,yt);t("H.data.kml.Polygon",zt);function At(a,b){var c=document.createElement("CANVAS");c.width=1;c.height=1;this.i=a;this.b={};this.f={};this.g=new Rj(c);this.c=b||""}At.prototype.create=function(a){this.a=new vt(a,this.i);return Bt(this,a)};
function Bt(a,b,c){b=b.childNodes;for(var d=b.length,e,f={},g;d--;){var h=b[d];switch(h.nodeName){case "Point":e=new ut(h);g=Ct(a,"Marker");e=new Gn(e.a,g);g.yi&&De(g.yi,"statechange",A(a.j,a,g.yi,e,g),!1);break;case "LineString":e=new wt(h);g=Ct(a,"Polyline");e=new wh(xt(e),g);break;case "LinearRing":e=new wt(h);g=Ct(a,"Polyline");e=new wh(xt(e),g);break;case "Polygon":e=new zt(h);g=Ct(a,"Polygon");g.elevation=e.f;g.extrusion=e.b;e=new Gi(new O(e.a,e.c),g);break;case "MultiGeometry":e=Bt(a,h,new Q)}e&&
(a.a.name&&(f.name=a.a.name),a.a.b&&(f.description=a.a.b),g&&g.Kf&&(f.balloonStyle=g.Kf),f.kmlNode=a.a.g,e.setData(f),c&&c.da(e))}return c||e}At.prototype.j=function(a,b,c){var d=c.anchor,e=c.scale;c=e+"_"+d.x+d.y+d.gd+d.Ec+"_"+c.href;var f={};if(1===a.getState()){var g=this.b[c];if(!g){var h=d.x;var k=d.y;if(g=a.Cb())g={w:g.w*e,h:g.h*e},f.size=g;h=d.gd&&g?g.w*h:h*e;k=d.Ec&&g?g.h*(1-k):!d.Ec&&g?g.h-k*e:k*e;f.anchor={x:h,y:k};g=new Rj(a.bd(),f);this.b[c]=g}b.Nc(g)}delete this.f[c]};
function Ct(a,b){var c=a.a,d={visibility:c.visibility};var e=new it;var f=1;var g={x:0,y:0,gd:!1,Ec:!1};var h=Dt(a,c.f);c.a&&(h=Dt(a,c.a,h));switch(b){case "Marker":if(h&&h.rk){e=h.rk;e.scale&&(f=e.scale);if(e.a){var k=e.a;g={x:k.x,y:k.y,gd:k.gd,Ec:k.Ec}}e.icon&&e.icon.href?(b=e.icon.href,Et.test(b)||(b=a.c+b),e=f+"_"+g.x+g.y+g.gd+g.Ec+"_"+b,k=a.b[e]||a.f[e],k||(k=new Rj(b),a.f[e]=k),0===k.getState()?(d.icon=a.g,d.yi=k,d.href=b,d.anchor=g,d.scale=f):1===k.getState()&&(d.icon=k)):1!==f&&(k||(g={x:14,
y:4,gd:!1,Ec:!1}),a={w:28*f,h:36*f},f={size:new Ti(a.w,a.h),anchor:new I(g.gd?a.w*g.x:g.x*f,g.Ec?a.h*(1-g.y):a.h-g.y*f),hitArea:new Ui(Vi.POLYGON,[0*f,16*f,0*f,7*f,8*f,0*f,18*f,0*f,26*f,7*f,26*f,16*f,18*f,34*f,8*f,34*f])},d.icon=new Rj('<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="36px"><path d="M 19 31 C 19 32.7 16.3 34 13 34 C 9.7 34 7 32.7 7 31 C 7 29.3 9.7 28 13 28 C 16.3 28 19 29.3 19 31 Z" fill="#000" fill-opacity=".2"/><path d="M 13 0 C 9.5 0 6.3 1.3 3.8 3.8 C 1.4 7.8 0 9.4 0 12.8 C 0 16.3 1.4 19.5 3.8 21.9 L 13 31 L 22.2 21.9 C 24.6 19.5 25.9 16.3 25.9 12.8 C 25.9 9.4 24.6 6.1 22.1 3.8 C 19.7 1.3 16.5 0 13 0 Z" fill="#fff"/><path d="M 13 2.2 C 6 2.2 2.3 7.2 2.1 12.8 C 2.1 16.1 3.1 18.4 5.2 20.5 L 13 28.2 L 20.8 20.5 C 22.9 18.4 23.8 16.2 23.8 12.8 C 23.6 7.07 20 2.2 13 2.2 Z" fill="#18d"/></svg>',
f))}break;case "Polyline":d.style={};h&&h.pe&&(f=h.pe,d.style.strokeColor="rgba("+lt(e,f.a.a,!0)+")",0<=f.width&&(d.style.lineWidth=f.width));break;case "Polygon":d.style={},h&&(h.pe&&(f=h.pe,d.style.strokeColor="rgba("+lt(e,f.a.a,!0)+")",0<=f.width&&(d.style.lineWidth=f.width)),h.dl&&(f=h.dl,d.style.fillColor=f.fill?"rgba("+lt(e,f.b.a,!0)+")":"rgba(0,0,0,0)",f.a||(d.style.lineWidth=0)))}d.Kf=h.Kf;return d}
function Dt(a,b,c){c=c||{};for(var d in b)b.hasOwnProperty(d)&&(c[d]="object"===typeof b[d]?Dt(a,b[d],c[d]):b[d]);return c}var Et=/^[^:\/]+:/;function Ft(a){vc(this,Ft);this.url=a;this.b=[];this.a=y;this.c=A(this.c,this);F.call(this)}u(Ft,F);t("H.data.AbstractReader",Ft);var Gt={ERROR:-1,LOADING:0,VISIT:1,READY:2};Ft.State=Gt;Ft.prototype.f=Gt.READY;Ft.prototype.v={dm:"statechange"};Ft.prototype.tb=function(){if(!this.a){this.a=new N;var a=this.a.ic();a.dc(this.b)}return new ul(this.a)};Ft.prototype.getLayer=Ft.prototype.tb;Ft.prototype.wn=function(){return this.b.concat([])};Ft.prototype.getParsedObjects=Ft.prototype.wn;
Ft.prototype.D=function(){return this.url};Ft.prototype.getUrl=Ft.prototype.D;Ft.prototype.fp=function(a){if(this.f===Gt.LOADING||this.f===Gt.VISIT)throw Error("InvalidState: state "+this.f);this.b=[];this.a=y;this.url=a;return this};Ft.prototype.setUrl=Ft.prototype.fp;Ft.prototype.getState=function(){return this.f};Ft.prototype.getState=Ft.prototype.getState;Ft.prototype.N=function(a,b,c){this.f=a;this.dispatchEvent(new Ht(b||this,this.v.dm,a,c||""))};
Ft.prototype.parse=function(){var a=this;uc(this.url)?(this.N(Gt.LOADING),(new sf("text/plain",this.url)).then(function(b){try{a.c(b)}catch(c){a.N(Gt.ERROR,y,c.message)}},function(){a.N(Gt.ERROR,y,"Error loading file")})):a.N(Gt.ERROR,y,"File url was not set")};Ft.prototype.parse=Ft.prototype.parse;function Ht(a,b,c,d){Ht.l.constructor.call(this,b,a);this.state=c;this.message=d}u(Ht,sd);function It(a){var b=a?a.lastIndexOf("/"):-1;this.g=[];Ft.call(this,a);0<=b&&(this.i=a.substr(0,b)+"/")}u(It,Ft);t("H.data.kml.Reader",It);
It.prototype.c=function(a){var b,c=null;if(Ac(a)&&""!=a.trim()){try{var d=(new DOMParser).parseFromString(a,"text/xml")}catch(h){this.N(Gt.ERROR,y,"Error parsing KML document");return}if(d.getElementsByTagName("parsererror").length)this.N(Gt.ERROR,y,"Error parsing KML document");else if((a=d.childNodes&&"kml"===d.childNodes[0].nodeName?d.childNodes[0]:void 0)&&(b=Jt(a.childNodes,"Document")[0]),b=b||a){d=new tt;for(var e=Jt(b.childNodes,"Style"),f=Jt(b.childNodes,"StyleMap"),g=e.length;g--;)a=new qt(e[g]),
d.ah(a);for(g=f.length;g--;)a=new st(f[g],d),d.ah(a);this.j=new At(d,this.i);a=b.childNodes;for(b=a.length;b--;)if(e=a[b],d=c,"Placemark"===e.nodeName?(e=this.j.create(e))&&Kt(this,e,d):"Folder"===e.nodeName&&(e={group:new Q,node:e},Kt(this,e.group,d),this.g.push(e)),!b&&(d=this.g.shift()))a=d.node.childNodes,c=d.group,b=a.length;this.N(Gt.READY)}else this.N(Gt.ERROR,y,"Invalid KML document")}else this.N(Gt.ERROR,y,"Unable to create objects from the empty data")};
function Kt(a,b,c){c?c.da(b):(a.a&&a.a.ic().da(b),a.b.push(b),a.N(Gt.VISIT,b))}function Jt(a,b){for(var c=a.length,d,e=[];c--;)d=a[c],d.nodeName===b&&e.push(d);return e};function Lt(a,b){this.b=a;this.a=b}
Lt.prototype.create=function(a,b){var c=a.coordinates;switch(a.type){case "Point":var d=new Gn(Mt(c));break;case "LineString":d=new wh(Nt(c));break;case "Polygon":d=new Gi(Ot(c));break;case "MultiPoint":var e=0;var f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(Mt(c[e]));c=new Gn(new Si(d))}else{for(;e<f;e++)d.push(new Gn(Mt(c[e])));c=new Q;c.dc(d)}d=c;f="multiPoint";break;case "MultiLineString":e=0;f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(Nt(c[e]));c=new wh(new vh(d))}else{for(;e<f;e++)d.push(new wh(Nt(c[e])));
c=new Q;c.dc(d)}d=c;f="multiLineString";break;case "MultiPolygon":d=[];e=0;f=c.length;if(this.a){for(;e<f;e++)d.push(Ot(c[e]));c=new Gi(new Ei(d))}else{for(;e<f;e++)d.push(new Gi(Ot(c[e])));c=new Q;c.dc(d)}d=c;f="multiPolygon";break;case "GeometryCollection":c=d=new Q;e=a.geometries;f=0;for(var g=e.length;f<g;f++)this.create(e[f],c);f="geometryCollection"}d&&(c=d,e=a.properties,a=a.id,g={},e&&(this.a?g=e:g.properties=e),f&&!this.a&&(g[f]=!0),a&&c.Wi(a),c.setData(g),this.b(d));b&&d&&b.da(d);return d};
Lt.prototype.create=Lt.prototype.create;function Mt(a){return new Yf(a[1],a[0])}function Ot(a){for(var b=Nt(a[0]),c=[],d,e=1,f=a.length;e<f;e++)d=Nt(a[e]),c.push(d);return new O(b,c)}function Nt(a){for(var b=0,c=a.length,d=new L;b<c;b++)d.Hd(Mt(a[b]));return d};function Pt(a,b){b=b||{};this.i=b.style||this.Ud;(this.g=!!b.disableLegacyMode)||window.console.warn("H.data.geojson.Reader: Legacy parser is enabled in GeoJSON Reader. Features like Multi-Geometries, Polygon interiors and GeoJSON feature properties might not work as expected. To maximise compatibility with the remote services it is recommended to set the `disableLegacyMode` flag to true.");Ft.call(this,a)}u(Pt,Ft);t("H.data.geojson.Reader",Pt);
Pt.prototype.c=function(a){var b,c;try{var d="string"===typeof a?JSON.parse(a):a;if("object"===typeof d){var e=new Lt(this.i,this.g);switch(d.type){case "FeatureCollection":if(b=d.features){var f=new Q;Qt(this,f);for(c=0;c<b.length;c++){var g=Rt(b[c]);(g=e.create(g))&&f.da(g)}}break;case "Feature":g=Rt(d);(g=e.create(g))&&Qt(this,g);break;default:(g=e.create(d))&&Qt(this,g)}this.N(Gt.READY)}else this.N(Gt.ERROR,y,"Invalid syntax")}catch(h){this.N(Gt.ERROR,y,"Parse error. "+h.message)}};
Pt.prototype.Ro=function(a){this.N(Gt.LOADING);this.c(a)};Pt.prototype.parseData=Pt.prototype.Ro;Pt.prototype.Ud=function(){};function Rt(a){var b={};if(a.geometry){var c=a.geometry;b.type=c.type;b.properties=a.properties;c.coordinates&&(b.coordinates=c.coordinates);c.geometries&&(b.geometries=c.geometries);a.id&&(b.id=a.id)}return b}function Qt(a,b){a.a&&a.a.ic().da(b);a.b.push(b);a.N(Gt.VISIT,b)};t("H.data.buildInfo",function(){return Ff("H-data","1.30.8","5d65eb7")});

ig.prototype.Sc=ca(1,function(a,b){this.a.Sc(a,Dc(b)?b:this.c)});mg.prototype.Sc=ca(0,function(a,b){var c=0,d;if(!a(this)&&b--)for(;3>=c;c++)(d=this[c])&&d.Sc(a,b)});function St(a,b,c){this.f=this.c=c;this.zi=[];this.a=0;this.O=eg(a,b,!0)}t("H.clustering.grid.Cluster",St);St.prototype.Ie=function(a){this.b||(this.b=$f(a));this.a+=a.wt||1;this.zi.push(a)};St.prototype.Ba=function(){return this.b};St.prototype.getPosition=St.prototype.Ba;St.prototype.Cc=function(){return this.a};St.prototype.getWeight=St.prototype.Cc;St.prototype.Dd=ef;St.prototype.isCluster=St.prototype.Dd;St.prototype.yc=function(){return this.c};St.prototype.getMinZoom=St.prototype.yc;
St.prototype.eg=function(){return this.f};St.prototype.getMaxZoom=St.prototype.eg;St.prototype.G=function(){return this.O};St.prototype.getBoundingBox=St.prototype.G;St.prototype.th=function(a){this.Ue(a)};St.prototype.forEachEntry=St.prototype.th;St.prototype.Ue=function(a){var b=this;if(!Da(a))throw new D(this.Ue,0,a);this.zi.forEach(function(c){a(new Tt(c,b.c+1))})};St.prototype.forEachDataPoint=St.prototype.Ue;function Ut(a){od.call(this);this.a=[];var b;a?Xa(b={},Vt,a):b=Vt;this.g=b;od.call(this)}u(Ut,od);var Wt={clusters:[],noisePoints:[]},Vt={projection:fj,min:0,max:22,eps:32,minWeight:2};n=Ut.prototype;n.Mc=function(a){this.a=a;this.b=!0};n.Ib=function(a){this.a.push(a);this.b=!0};n.Jf=function(a){this.a=this.a.concat(a);this.b=!0};n.qf=function(a){this.a=this.a.filter(function(b){return b!==a});this.b=!0};n.s=function(){Ut.l.s.call(this);this.a=null};n.vl=id;function Tt(a,b){this.a=a;this.b=b}t("H.clustering.grid.NoisePoint",Tt);Tt.prototype.Ba=function(){return $f(this.a)};Tt.prototype.getPosition=Tt.prototype.Ba;Tt.prototype.Cc=function(){return this.a.wt};Tt.prototype.getWeight=Tt.prototype.Cc;Tt.prototype.Dd=ff;Tt.prototype.isCluster=Tt.prototype.Dd;Tt.prototype.yc=function(){return this.b};Tt.prototype.getMinZoom=Tt.prototype.yc;Tt.prototype.getData=function(){return this.a.data};Tt.prototype.getData=Tt.prototype.getData;function Xt(a){Ut.call(this,a)}u(Xt,Ut);
Xt.prototype.$i=function(a){var b=this.g,c=b.min,d=b.max,e=[],f=[],g;if(this.b){for(g=this.a;c<=d;c++){for(var h,k=void 0,l,m,p,q,r,v,w,z=c,J=g,G=e,U=f,X=b.eps,xa=b.projection,ia=b.minWeight,hc=J.length,wb=Math.pow(2,z+8),nd=[];w=J[--hc];)if(!w.ij){m=xa.ad(w).scale(wb).floor();v=wb;r=m.x;q=m.y;for(l=nd.length;l--;)h=nd[l],p=h.Ba(),h.hj||(h.hj=xa.ad(p).scale(wb).floor()),p=h.hj,p=p.$a(m),p<v&&(v=p,k=h);k&&k.G().sd(w)||(k=new St(xa.xg({x:(r-X)/wb,y:(q-X)/wb}),xa.xg({x:(r+X)/wb,y:(q+X)/wb}),z),nd.push(k));
k.Ie(w);k=null}for(hc=nd.length;hc--;)if(h=nd[hc],l=h.Cc(),l<ia)for(h=h.zi,l=h.length;w=h[--l];)U.push(new Tt(w,z)),w.ij=!0;else G.push(h)}c=0;for(d=g.length;c<d;c++)delete g[c].ij;this.b=!1;a({clusters:e,noisePoints:f})}};function Yt(a){this.a=a;a=document.createElement("canvas");var b=a.getContext("2d"),c=this.a,d=14*c;a.width=d;a.height=d;b.scale(c,c);b.beginPath();b.strokeStyle="#FFFFFF";b.fillStyle="#1080DD";b.arc(7,7,6,0,2*Math.PI,!1);b.fill();b.lineWidth=1;b.stroke();this.f=new Rj(a,{size:{w:14,h:14},anchor:{x:7,y:7}});this.b={};this.c={}}t("H.clustering.theme.Circular",Yt);
function Zt(a,b,c){var d,e=document.createElement("canvas"),f=e.getContext("2d");var g=a.a;var h=b*g;e.width=h;e.height=h;f.scale(g,g);g=b+":"+c;(d=a.b[g])?f.putImageData(d,0,0):(b/=2,f.beginPath(),f.strokeStyle="rgba("+c+",0.2)",f.fillStyle="rgba("+c+",1)",f.arc(b,b,b/5*3,0,2*Math.PI,!1),f.fill(),f.lineWidth=b/5*4,f.stroke(),a.b[g]=f.getImageData(0,0,h,h));return e}
Yt.prototype.Km=function(a){var b=a.Cc();var c=this.c[b];if(!c){if(10>b){c=Zt(this,28,"118,209,0");var d={x:11,y:18}}else 25>b?(c=Zt(this,38,"255,105,0"),d={x:13,y:23}):50>b?(c=Zt(this,38,"240,60,0"),d={x:13,y:23}):100>b?(c=Zt(this,38,"181,0,21"),d={x:13,y:23}):1E3>b?(c=Zt(this,48,"181,0,21"),d={x:15,y:28}):(c=Zt(this,66,"181,0,21"),d={x:20,y:38});var e=c.getContext("2d");e.fillStyle="#FFFFFF";e.font="bold 11px Arial";e.fillText(b,d.x,d.y);d=c.width/this.a;c=new Rj(c,{size:{w:d,h:d},anchor:{x:d/2,
y:d/2}});this.c[b]=c}b=new Gn(a.Ba(),{icon:c,min:a.yc(),max:a.eg()});b.setData(a);return b};Yt.prototype.getClusterPresentation=Yt.prototype.Km;Yt.prototype.tn=function(a){var b=new Gn(a.Ba(),{icon:this.f,min:a.yc()});b.setData(a);return b};Yt.prototype.getNoisePresentation=Yt.prototype.tn;function $t(a){Ut.call(this,a);a=this.g;if(a.projection!==fj)throw new D($t,0,"Other projection than mercator not supported yet");this.m=a.projection;this.f=a.eps;this.A=a.minWeight;this.o=new gj(this.m);(new Nf).a("cluster","H.clustering.dynamicgrid.worker");this.i=A(this.i,this);this.j=A(this.j,this)}u($t,Ut);$t.prototype.vl=function(a,b){this.W=a;this.u=zd(b)};
$t.prototype.$i=function(a,b){var c=this.c;var d=this.W,e=this.u||0;var f=!c||!(c.zoom===e&&c.b.oa(d));if(d&&(this.b||f)){c&&3>c.re&&c.cancel();this.b=!1;c=this.f;if(c>=128*Ed(2,e))var g=au;else{f=this.o;f.Ra(e);var h=f.mb(d.Rb());g=f.mb(d.Nb());h.y-=c;g.y+=c;h=f.lf(h);var k=f.lf(g);g=new K(h.lat,h.lng,k.lat,k.lng);c=f.Ta(c,0).lng+180;g=g.Gc(h.lat,h.lng-c,k.lat,h.lng).Gc(h.lat,k.lng,k.lat,k.lng+c)}c=g;h=this.a;g=[];for(f=h.length;f--;)c.sd(h[f])&&g.push(h[f]);0<g.length?(this.c=new bu(d,e,g,this.f,
this.A,this.m!==fj,a,b),this.c.then(this.i,this.j)):a(Wt)}};$t.prototype.i=function(a){Ca(a)||(a=new x.Uint32Array(a));this.c.g(cu(this,a))};$t.prototype.j=function(a){Ac(a)&&this.c.c(a)};var au=new K(90,-180,-90,180);
function cu(a,b){for(var c=0,d=b[c++],e=Array(d),f=0,g=[],h=b.length,k=a.c.a,l=a.c.zoom;d--;)e[f++]=new Tt(k[b[c++]],l);for(;c<h;){d=b[c++];f=k[b[c]];var m=a.o;var p=a.f;m.Ra(a.c.zoom);var q=m.mb(f);f=m.Ta(q.x-p,q.y-p);m=m.Ta(q.x+p,q.y+p);f=new K(f.lat,f.lng,m.lat,m.lng);for(f=new St(f.Rb(),f.Nb(),l);d--;)f.Ie(k[b[c++]]);g.push(f)}return{clusters:g,noisePoints:e}}$t.prototype.s=function(){$t.l.s.call(this)};
function bu(a,b,c,d,e,f,g,h){this.b=a;this.zoom=b;this.a=c;this.g=g;this.c=h;a=c.length;g=3*a;h=new (x.Float64Array||Array)(g);for(var k;a--;)k=c[a],h[--g]=k.lat,h[--g]=k.lng,h[--g]=k.wt;fe.call(this,"cluster",{message:[h,d,e,b,f]},void 0)}u(bu,Qf);function du(a,b,c){this.c=a;this.a=b;this.f=c}t("H.clustering.fastgrid.NoisePoint",du);du.prototype.Ba=function(){this.b||(this.b=this.c.Ta(this.a[1],this.a[0],1));return this.b};du.prototype.getPosition=du.prototype.Ba;du.prototype.Cc=function(){return this.a.a};du.prototype.getWeight=du.prototype.Cc;du.prototype.Dd=ff;du.prototype.isCluster=du.prototype.Dd;du.prototype.yc=function(){return this.f-this.c.c};du.prototype.getMinZoom=du.prototype.yc;du.prototype.getData=function(){return this.a.data};
du.prototype.getData=du.prototype.getData;function eu(a,b,c,d){this.c=a;this.a=b;this.j=c;this.o=d;this.g=Ja(this.g,this);this.f=Ja(this.f,this)}t("H.clustering.fastgrid.Cluster",eu);eu.prototype.Ba=function(){this.b||(this.b=this.c.Ta(this.a.Le,this.a.Me,this.a.Kb));return this.b};eu.prototype.getPosition=eu.prototype.Ba;eu.prototype.Cc=function(){return this.a.Kb};eu.prototype.getWeight=eu.prototype.Cc;eu.prototype.Dd=ef;eu.prototype.isCluster=eu.prototype.Dd;eu.prototype.yc=function(){return this.j?this.j-this.c.c:-1/0};
eu.prototype.getMinZoom=eu.prototype.yc;eu.prototype.eg=function(){return this.o-this.c.c};eu.prototype.getMaxZoom=eu.prototype.eg;eu.prototype.G=function(){this.O||(this.O=eg(this.c.Ta(this.a.a,this.a.f,1),this.c.Ta(this.a.b,this.a.c,1),!0));return this.O};eu.prototype.getBoundingBox=eu.prototype.G;eu.prototype.th=function(a){this.i=a;this.a.Sc(this.g,Ud)};eu.prototype.forEachEntry=eu.prototype.th;
eu.prototype.g=function(a,b){var c=!1,d,e;a.Kb>=this.c.m&&a!==this.a&&a.Kb!==this.a.Kb&&(this.i(new eu(this.c,a,0,b)),c=!0);if(!c&&(d=a.entries))for(a=d.length,e=0;e<a;e++)this.i(new du(this.c,d[e],b));return c};eu.prototype.Ue=function(a){this.m=a;this.a.Sc(this.f,Ud)};eu.prototype.forEachDataPoint=eu.prototype.Ue;eu.prototype.f=function(a,b){var c;if(a=a.entries){var d=a.length;for(c=0;c<d;c++)this.m(new du(this.c,a[c],b))}return!1};function fu(a,b,c,d,e,f){this.g=b;a&&(this.parent=a,b&1?(c=a[8],e=a[5]):(c=a[7],e=a[8]),b&2?(d=a[9],f=a[6]):(d=a[4],f=a[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2}n=fu.prototype;n.qe=0;function gu(a,b){return a[b]||(++a.qe,a[b]=new fu(a,b))}n.removeChild=function(a){var b=a.g;this[b]===a&&(delete this[b],delete a.parent,--this.qe)};n.Sc=function(a,b){for(var c=0,d=this;d=d.parent;)++c;hu(this,a,b,c)};
function hu(a,b,c,d){var e,f;if(!b(a,d)&&c--)for(++d,e=0;4>e;e++)(f=a[e])&&hu(f,b,c,d)}n.Le=0;n.Me=0;n.Kb=0;function iu(a){this.b=a||10;this.a=null;ju(this)}function ju(a){a.head=a.a=new fu(null,NaN,0,0,4294967296,4294967296)}function ku(a,b){var c,d;for(c=0;4>c;c++)if(d=b[c])ku(a,d),delete b[c];delete b.parent;delete b.entries}function lu(a,b){var c=a.head,d;if(b){var e=b;if(e!==c)for(c=e;e=e.parent;)if(e.entries||1<e.qe)c=e}else for(;!c.entries&&2>(d=c.qe);)if(d)c=e;else break;a.head=c}
iu.prototype.Dc=function(a,b,c,d){var e=this.a;if(!(a>=e[7]&&b>=e[4]&&a<=e[5]&&b<=e[6]))throw Error("Coordinates out of bounds");return mu(this,this.a,a,b,c,this.b,d)};
function mu(a,b,c,d,e,f,g){var h=b.entries;if(f)if(b.qe)h=mu(a,gu(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g);else if(h){h=h[0];var k=gu(b,h[1]>=b[8]|(h[0]>=b[9])<<1);k.entries=b.entries;k.Le=b.Le;k.Me=b.Me;k.Kb=b.Kb;k.a=b.a;k.f=b.f;k.b=b.b;k.c=b.c;delete b.entries;h.node=k;lu(a,k);h=mu(a,gu(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g)}else f=h=new nu(c,d,e,g),(b.entries||(b.entries=[])).push(f),lu(a,b);else h||lu(a,b),a=h=new nu(c,d,e,g),(b.entries||(b.entries=[])).push(a);b.Le+=c*e;b.Me+=d*e;b.Kb+=e;b.a===B?(b.a=
b.b=c,b.f=b.c=d):(c<b.a?b.a=c:c>b.b&&(b.b=c),d<b.f?b.f=d:d>b.c&&(b.c=d));return h}iu.prototype.Sc=function(a,b){hu(this.a,a,b===+b?b:this.b,0)};function nu(a,b,c,d){this[0]=b;this[1]=a;this.a=c;this.data=d};function ou(a){Ut.call(this,a);a=this.g;this.j=a.projection;this.o=a.min;this.f=a.max;this.m=a.minWeight;this.c=7-yd(Cd(xd(1,a.eps))/Md);this.i=new iu(xd(this.o,this.f+this.c))}u(ou,Ut);n=ou.prototype;n.Mc=function(a){var b=0,c=a.length,d,e=new I(0,0),f=this.j,g=this.i;ou.l.Mc.call(this,a);ku(g,g.a);for(ju(g);b<c;b++)f.ad(d=a[b],e).scale(4294967296).floor(),g.Dc(e.x,e.y,d.wt,d.data);this.b=!0};n.Ib=function(a){ou.l.Ib.call(this,a);this.Mc(this.a)};
n.Jf=function(a){for(var b=a.length,c=ou.l.Ib;b--;)c.call(this,a[b]);this.Mc(this.a)};n.qf=function(a){ou.l.qf.call(this,a);this.Mc(this.a)};n.Ta=function(a,b,c,d){return this.j.Ta(a/c/4294967296,b/c/4294967296,d)};n.$i=function(a){if(this.b){var b={clusters:[],noisePoints:[]};pu(this,this.i.a,0,this.f+this.c,-1/0,b,null);this.b=!1;a(b)}};
function pu(a,b,c,d,e,f,g){var h=b.Kb,k;g&&(g.node.Kb!==h?(f.clusters.push(new eu(a,g.node,g.depth,c-1)),g=null):e++);g||(h>=a.m?(g={node:b,depth:c},e=c):qu(a,b,e+1,f));if(b.qe&&d--)for(c++,h=0;4>h;h++)if(k=b[h])pu(a,k,c,d,e,f,g),g=null;g&&f.clusters.push(new eu(a,g.node,g.depth,a.f+a.c))}function qu(a,b,c,d){b=b.entries;var e;if(b){var f=b.length;d=d.noisePoints;for(e=0;e<f;e++)d.push(new du(a,b[e],c))}else for(e=0;4>e;e++)(f=a[e])&&qu(a,f,c,d)}n.s=function(){ou.l.s.call(this);this.i=null};function ru(a,b,c,d){this.lat=a;this.lng=b;this.wt=c===+c?c:1;this.data=d}t("H.clustering.DataPoint",ru);ru.prototype.Ak=NaN;ru.prototype.Ck=NaN;function su(a,b){b=b||{};var c={},d=b.min||0,e=xd(d,b.max||22);d={min:d,max:e};su.l.constructor.call(this,d);this.Fa=b.pixelRatio||Te();Xa(c,Vt,d,b.clusteringOptions||{});c.minWeight=xd(Vt.minWeight,c.minWeight);switch(c.strategy){case tu.DYNAMICGRID:if(c.projection!==fj)throw new D(su,1,"Unsupported projection");this.a=new $t(c);break;case tu.GRID:this.a=new Xt(c);break;default:this.a=new ou(c)}this.a.Mc(a);this.A=b.theme||new Yt(this.Fa);this.aa=A(this.aa,this);this.ma=A(this.ma,this);uu(this)}
u(su,N);t("H.clustering.Provider",su);su.prototype.s=function(){su.l.s.call(this);this.c.ra();this.a.C();this.A=this.L=this.a=null;x.clearTimeout(this.T)};var tu={FASTGRID:0,GRID:1,DYNAMICGRID:2};su.Strategy=tu;su.prototype.aa=function(){this.dispatchEvent("start");this.a.$i(this.ma,id)};function uu(a,b,c){a.T&&x.clearTimeout(a.T);b&&a.a.vl(b,c);a.T=x.setTimeout(a.aa,150)}su.prototype.ma=function(a){this.dispatchEvent("end");this.L=a;vu(this)};su.prototype.Mc=function(a){this.a.Mc(a);uu(this)};
su.prototype.setDataPoints=su.prototype.Mc;su.prototype.Ib=function(a){this.a.Ib(a);uu(this)};su.prototype.addDataPoint=su.prototype.Ib;su.prototype.Jf=function(a){this.a.Jf(a);uu(this)};su.prototype.addDataPoints=su.prototype.Jf;su.prototype.qf=function(a){this.a.qf(a);uu(this)};su.prototype.removeDataPoint=su.prototype.qf;su.prototype.On=function(){return this.A};su.prototype.getTheme=su.prototype.On;su.prototype.cp=function(a){this.A=a;this.L&&(this.c.ra(),vu(this))};su.prototype.setTheme=su.prototype.cp;
function vu(a){var b=a.L.clusters,c=a.L.noisePoints,d=b.length,e=c.length,f=0<d+e;for(a.c.ra();e--;){var g=c[e];a.c.da(a.A.getNoisePresentation(g))}for(;d--;)c=b[d],a.c.da(a.A.getClusterPresentation(c));f&&a.Za()}su.prototype.Vb=function(){return!0};su.prototype.providesDomMarkers=su.prototype.Vb;su.prototype.Wb=function(){return!0};su.prototype.providesMarkers=su.prototype.Wb;su.prototype.Hc=function(){return!0};su.prototype.providesSpatials=su.prototype.Hc;
su.prototype.nf=function(a,b){uu(this,a,b)};su.prototype.preprocessData=su.prototype.nf;t("H.clustering.buildInfo",function(){return Ff("H-clustering","1.30.8","5f44999")});

function wu(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}var xu={};function yu(a){var b=a.ownerDocument,c=b.documentElement;b=b.defaultView;var d=a.getBoundingClientRect();a=d.left;d=d.top;isNaN(b.pageXOffset)?(a+=c.scrollLeft,d+=c.scrollTop):(a+=b.pageXOffset,d+=b.pageYOffset);return new I(a,d)}
function zu(a,b,c){b=Dc(b)?b+"px":b;c=Dc(c)?c+"px":c;a.style[yf("transform")]="translate("+b+","+c+")"}var Au,Bu=navigator.userAgent,Cu=-1<Bu.indexOf("Android")&&-1<Bu.indexOf("Mozilla/5.0")&&-1<Bu.indexOf("AppleWebKit"),Du=/AppleWebKit\/([\d.]+)/,Eu=null===Du.exec(Bu)?null:parseFloat(Du.exec(Bu)[1]);Au=Cu&&null!==Eu&&537>Eu;var Fu=globalThis,Gu=document.createElement("T");function Hu(){this.a=this.Mj()}Hu.prototype.Mj=function(){var a=navigator,b=[];a&&(a.msPointerEnabled?b.push(Iu):a.pointerEnabled&&b.push(Ju));1>b.length&&("TouchEvent"in Fu&&b.push(Ku),b.push(Lu));return b};Hu.prototype.detectEventSets=Hu.prototype.Mj;Hu.prototype.addEventListener=function(a,b,c,d){for(var e=this.a,f,g=e.length,h=!1;g--;)if(f=e[g][b])h=!0,a.addEventListener(f,c,d||!1);h||a.addEventListener(b,c,d||!1)};
Hu.prototype.removeEventListener=function(a,b,c,d){for(var e=this.a,f,g=e.length,h=!1;g--;)if(f=e[g][b])h=!0,a.removeEventListener(f,c,d||!1);h||a.removeEventListener(b,c,d||!1)};
var Ju={start:"pointerdown",end:"pointerup",move:"pointermove",cancel:"pointercancel",over:"pointerover",out:"pointerout",hover:"pointerhover"},Iu={start:"MSPointerDown",end:"MSPointerUp",move:"MSPointerMove",cancel:"MSPointerCancel",over:"MSPointerOver",out:"MSPointerOut",hover:"MSPointerHover"},Ku={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},Lu={start:"mousedown",end:"mouseup",move:"mousemove",over:"mouseover",out:"mouseout",hover:"mousehover"};function Mu(a,b,c,d){a=a.createElement(b);c&&(a.className=c);d&&(a.innerHTML=d);return a}function Nu(a,b){for(var c=1,d=arguments.length;c<d;c++)a.appendChild(arguments[c])}var Ou=new Hu;function Pu(a,b,c){Ou.addEventListener(a,b,c,void 0)}function Qu(a,b,c){Ou.removeEventListener(a,b,c,void 0)};function Z(a,b){F.call(this);this.Sa=a||"div";this.c=b?b.split(" "):[];this.L=!1;this.c.push("H_el")}u(Z,F);t("H.ui.base.Element",Z);Z.prototype.V=function(a){if(!a)throw Error("Wrong document object");this.P=Mu(a,this.Sa,this.c.join(" "));this.renderInternal(this.P,a);this.Ca(this.kc(),!0);this.qc(this.sa);this.wb(this.U);return this.P};Z.prototype.T=function(){};Z.prototype.R=function(){};Z.prototype.$=function(){};Z.prototype.renderInternal=Z.prototype.$;Z.prototype.kc=function(){return this.L};
Z.prototype.isDisabled=Z.prototype.kc;Z.prototype.Ca=function(a,b){a=!!a;if(a!==this.L||b)(this.L=a)?this.Ma("H_disabled"):this.rb("H_disabled");return this};Z.prototype.setDisabled=Z.prototype.Ca;Z.prototype.A=null;Z.prototype.getData=function(){return this.A};Z.prototype.getData=Z.prototype.getData;Z.prototype.setData=function(a){this.A=a};Z.prototype.setData=Z.prototype.setData;Z.prototype.qc=function(a){var b=this.K();this.sa=a;b&&(a?b.setAttribute("title",a):b.removeAttribute("title"))};
Z.prototype.setTooltip=Z.prototype.qc;Z.prototype.P=null;Z.prototype.K=function(){return this.P};Z.prototype.getElement=Z.prototype.K;Z.prototype.U=!0;Z.prototype.wb=function(a){var b=this.K();this.U=a;b&&(b.style.display=a?"":"none")};Z.prototype.setVisibility=Z.prototype.wb;Z.prototype.Bc=function(){return this.U};Z.prototype.getVisibility=Z.prototype.Bc;Z.prototype.Ma=function(a){var b=this.K();0>this.c.indexOf(a)&&this.c.push(a);b&&(b.className=this.c.join(" "));return this};
Z.prototype.addClass=Z.prototype.Ma;Z.prototype.rb=function(a){a=this.c.indexOf(a);var b=this.K();-1<a&&this.c.splice(a,1);b&&(b.className=this.c.join(" "));return this};Z.prototype.removeClass=Z.prototype.rb;function Ru(a){(a=a.K())&&a.parentNode&&a.parentNode.removeChild(a)}Z.prototype.s=function(){Z.l.s.call(this);Ru(this);this.A=this.P=null;delete this.sa};function Su(a){a=a||{};Z.call(this,"div","H_btn");this.Oc(a.label||" ");this.qc(a.tooltip||"");this.setData(a.data);this.Ca(!!a.disabled);this.N(Tu.UP,!0);a.onStateChange&&this.addEventListener("statechange",a.onStateChange);this.b=A(this.b,this);this.a=A(this.a,this)}u(Su,Z);t("H.ui.base.Button",Su);Su.prototype.Ca=function(a,b){a&&this.rb("H_active");return Su.l.Ca.call(this,a,b)};
Su.prototype.$=function(a){Pu(a,"start",this.b);Pu(a,"end",this.a);Pu(a,"out",this.a);this.Oc(this.$e(),!0)};Su.prototype.renderInternal=Su.prototype.$;Su.prototype.getState=function(){return this.g};Su.prototype.getState=Su.prototype.getState;Su.prototype.N=function(a,b){a!==this.g&&(this.g=a,a===Tu.DOWN?this.Ma("H_active"):this.rb("H_active"),b||this.dispatchEvent("statechange"));return this};Su.prototype.setState=Su.prototype.N;Su.prototype.$e=function(){return this.f};
Su.prototype.getLabel=Su.prototype.$e;Su.prototype.Oc=function(a,b){if(b||a!==this.f)if(this.f=a,b=this.K())b.innerHTML=a;return this};Su.prototype.setLabel=Su.prototype.Oc;Su.prototype.b=function(a){this.kc()||this.N(Tu.DOWN);a.preventDefault()};Su.prototype.a=function(a){this.kc()||this.N(Tu.UP);a.preventDefault()};Su.prototype.s=function(){var a=this.K();a&&(Qu(a,"start",this.b),Qu(a,"end",this.a),Qu(a,"out",this.a));Z.prototype.s.call(this)};var Tu={UP:"up",DOWN:"down"};Su.State=Tu;var Uu={"in":'<svg version="1.1" class="H_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><path d="m5 10.6h5.6v-5.6h2.8v5.6h5.6v2.8h-5.6v5.6h-2.8v-5.6h-5.6v-2.8z"></path></g></svg>',out:'<svg version="1.1" class="H_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="m5 10.6h14v2.8h-14z"/></svg>'};function Vu(a){a=a||{};var b;this.b=!!a.vertical;this.ma=a.length||"16em";this.a=Dc(b=a.min)?b:0;this.i=xd(this.a,Dc(b=a.max)?b:100);this.fa=E(b=a.step)?1:b;this.j=Wu(this,Dc(b=a.value)?b:(this.a+this.i)/2);this.ug=A(this.ug,this);this.qg=A(this.qg,this);this.wg=A(this.wg,this);this.vg=A(this.vg,this);this.m=a.pointerArea;Z.call(this,"div","H_slider"+(this.b?"":" H_l_horizontal"))}u(Vu,Z);t("H.ui.base.Slider",Vu);
Vu.prototype.Ng=function(a,b){var c=this.b,d=c?"top":"left";if(!this.f||b)a=Zd(a,this.a,this.i),this.g&&(b=100*(a-this.a)/(this.i-this.a),c=(c?-1:1)*b,this.g.style[d]=c+"%",this.Ea.style[d]=100+c+"%"),this.j=Wu(this,a);return this.j};Vu.prototype.setValue=Vu.prototype.Ng;Vu.prototype.Un=function(){return this.j};Vu.prototype.getValue=Vu.prototype.Un;function Xu(a){if(!a.o){Pu(a.K(),"start",a.ug);var b=a.m;Pu(b,"move",a.qg);Pu(b,"end",a.wg);Pu(b,"out",a.vg);a.o=!0}}
function Yu(a){if(a.o){Qu(a.K(),"start",a.ug);var b=a.m;Qu(b,"move",a.qg);Qu(b,"end",a.wg);Qu(b,"out",a.vg);a.o=!1}}function Wu(a,b){var c=a.fa;b=Zd(b,a.a,a.i);return c?a.a+yd((b-a.a)/c)*c:b}function Zu(a,b){var c=a.B,d=a.b;a.u||(a.u=c["offset"+(d?"Height":"Width")]);b-=yu(c)[d?"y":"x"];0>b&&(b=0);b=(a.i-a.a)*b/a.u;b=Wu(a,d?a.i-b:a.a+b);a.j!==b&&(a.Ng(b,!0),a.dispatchEvent(new Wg(a.v.pd,b,a.j)))}function $u(a,b){return(b.touches?b.targetTouches[0]:b)["page"+(a.b?"Y":"X")]}
function av(a){var b=!1,c=a.type;-1!==c.indexOf("pointer")||-1!==c.indexOf("touch")?b=!0:C(a,MouseEvent)&&(b=1===a.which||1===a.buttons);return b}function bv(a){var b=a.touches;return b&&1===b.length||C(a,MouseEvent)}n=Vu.prototype;
n.ug=function(a){var b=this.b;if(av(a)&&bv(a)){var c=$u(this,a);var d=a.target;d===this.g||d.parentElement===this.g?(this.aa=c-yu(this.g)[b?"y":"x"]-this.g.offsetWidth/2,this.K().className="H_slider H_slider_active"+(this.b?"":" H_l_horizontal"),this.f=!0):Zu(this,c);a.preventDefault()}};n.wg=function(){this.f&&(this.K().className="H_slider "+(this.b?"":" H_l_horizontal"),this.f=!1)};n.vg=function(a){this.f&&a.target===this.m&&(this.f=!1)};
n.qg=function(a){this.f&&bv(a)&&(av(a)?(Zu(this,$u(this,a)-this.aa),a.preventDefault()):this.f=!1)};n.v={pd:"change"};
n.$=function(a,b){var c=Mu(b,"div","H_slider_cont"),d=Mu(b,"div","H_slider_knob_cont"),e=Mu(b,"div","H_slider_knob"),f=Mu(b,"div","H_slider_knob_halo"),g=Mu(b,"div","H_slider_track");b=Mu(b,"div","H_slider_track H_slider_track_active");a.appendChild(c);c.appendChild(g);g.appendChild(b);c.appendChild(d);d.appendChild(e);d.appendChild(f);this.B=g;this.Ea=b;this.g=d;this.m||(this.m=a.ownerDocument.body);c.style[this.b?"height":"width"]=this.ma;this.Ng(this.j);Xu(this)};
Vu.prototype.renderInternal=Vu.prototype.$;Vu.prototype.s=function(){Yu(this)};Vu.prototype.Ca=function(a,b){a?Yu(this):this.B&&Xu(this);return Z.prototype.Ca.call(this,a,b)};Vu.prototype.setDisabled=Vu.prototype.Ca;var cv={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",LEFT_TOP:"left-top",LEFT_MIDDLE:"left-middle",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_MIDDLE:"right-middle",RIGHT_BOTTOM:"right-bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right"};t("H.ui.LayoutAlignment",cv);function dv(a,b,c){Z.call(this,a,b);this.a=c?c.concat():[]}u(dv,Z);t("H.ui.base.Container",dv);dv.prototype.Ca=function(a,b){var c=this.a?this.a.length:0;for(Z.prototype.Ca.call(this,a,b);c--;)this.a[c].Ca(a,b);return this};dv.prototype.setDisabled=dv.prototype.Ca;dv.prototype.La=function(a){var b=this.K();this.a.push(a);b&&(a.V(b.ownerDocument),b.appendChild(a.K()));return this};dv.prototype.addChild=dv.prototype.La;dv.prototype.yh=function(){return this.a.concat()};
dv.prototype.getChildren=dv.prototype.yh;dv.prototype.removeChild=function(a){var b=this.a.indexOf(a),c=this.K();0<=b&&(this.a.splice(b,1),c&&c.removeChild(a.K()))};dv.prototype.removeChild=dv.prototype.removeChild;dv.prototype.ra=function(){var a=this.K();a&&this.a.forEach(function(b){a.removeChild(b.K())});this.a=[]};dv.prototype.$=function(a,b){for(var c=0,d=this.a.length;c<d;c++)a.appendChild(this.a[c].V(b))};dv.prototype.renderInternal=dv.prototype.$;
dv.prototype.s=function(){this.ra();this.a.forEach(this.ma,this);Z.prototype.s.call(this)};dv.prototype.ma=function(a){a.C()};function ev(){dv.call(this,"div","H_ctl");this.map=null;this.Wc="top-left"}u(ev,dv);t("H.ui.Control",ev);ev.prototype.Ka=function(a){this.map=a};ev.prototype.V=function(a){return dv.prototype.V.call(this,a)};ev.prototype.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);this.Zb(this.Wc)};ev.prototype.renderInternal=ev.prototype.$;ev.prototype.kf=function(){};ev.prototype.onUnitSystemChange=ev.prototype.kf;ev.prototype.hc=function(){return this.map};ev.prototype.getMap=ev.prototype.hc;
ev.prototype.Aa=function(){return this.Ea};ev.prototype.getLocalization=ev.prototype.Aa;ev.prototype.Dm=function(){return this.Wc};ev.prototype.getAlignment=ev.prototype.Dm;ev.prototype.Zb=function(a){"string"===typeof a&&cv[a.replace("-","_").toUpperCase()]===a&&(this.Wc=a,this.dispatchEvent("alignmentchange"));return this};ev.prototype.setAlignment=ev.prototype.Zb;function fv(a){a=a||{};var b=a.slider;ev.call(this);this.m=A(this.m,this);this.g=A(this.g,this);this.b=A(this.b,this);b&&(this.u=A(this.u,this),this.B=b,this.Fa=a.sliderSnaps,this.Ma("H_zoom_slider"));this.i=new Su({label:Uu["in"],onStateChange:this.m});this.o=new Su({label:Uu.out,onStateChange:this.m});this.Ma("H_zoom");this.Ma("H_grp");this.fa=!1!==a.fractionalZoom;this.setZoomSpeed(a.zoomSpeed||4);this.Zb(a.alignment||"right-middle")}u(fv,ev);t("H.ui.ZoomControl",fv);
fv.prototype.Zn=function(){return this.aa};fv.prototype.getZoomSpeed=fv.prototype.Zn;fv.prototype.gp=function(a){this.aa=a};fv.prototype.setZoomSpeed=fv.prototype.gp;fv.prototype.Ka=function(a){this.map!==a&&(this.map&&this.map.removeEventListener("mapviewchange",this.g),gv(this));ev.prototype.Ka.apply(this,arguments);this.map&&(this.b(),a.addEventListener("mapviewchange",this.g),a.addEventListener("baselayerchange",this.b))};fv.prototype.setMap=fv.prototype.Ka;
fv.prototype.s=function(){ev.prototype.s.apply(this,arguments);this.map.removeEventListener("baselayerchange",this.b);gv(this)};fv.prototype.$=function(a,b){ev.prototype.renderInternal.call(this,a,b);this.i.qc(this.Aa().translate("zoom.in"));this.o.qc(this.Aa().translate("zoom.out"))};fv.prototype.renderInternal=fv.prototype.$;fv.prototype.Zb=function(a){var b=this.Wc;ev.prototype.Zb.call(this,a);b!==a&&this.b();return this};fv.prototype.setAlignment=fv.prototype.Zb;
fv.prototype.g=function(){var a=this.map,b=a.vb(),c=a.ab()-1;a=a.f||a.gc().getCapabilities().lookAt.zoom;this.B&&this.f.Ng(b);this.kc()||(this.i.Ca(b+c>=a.max),this.o.Ca(b<=a.min))};fv.prototype.Ca=function(a,b){fv.l.Ca.call(this,a,b);this.g();return this};fv.prototype.setDisabled=fv.prototype.Ca;function gv(a){a.removeChild(a.f);a.f=null;a.j&&(a.j.removeEventListener("minchange",a.b),a.j.removeEventListener("maxchange",a.b),a.j=null)}
fv.prototype.m=function(a){a=a.target;var b=a===this.i?1:-1,c=0<b?Math.ceil:Math.floor,d=this.map,e,f=this;d&&("down"===a.getState()?(d.b.startControl(),d.b.control(0,0,b*this.aa,0,0,0)):d.b.endControl(!0,function(g){e=f.fa?g.zoom:c(g.zoom);g.zoom=e}))};fv.prototype.u=function(a){this.map&&this.map.zf(a.newValue)};
fv.prototype.b=function(){var a=this.Wc,b=this.hc();if(/^top/g.test(a)||/^bottom/g.test(a)){var c=this.o;a=this.i;var d=!1}else c=this.i,a=this.o,d=!0;this.removeChild(c);this.removeChild(a);this.La(c);if(this.B&&b){gv(this);b=d;var e=(d=(c=this.map)&&c.f)||c.gc().getCapabilities().lookAt.zoom;if(this.j=d)d.addEventListener("minchange",this.b),d.addEventListener("maxchange",this.b);this.f=new Vu({step:this.Fa?1:0,vertical:b,min:e.min,max:e.max,value:c.vb(),pointerArea:c.K()});this.f.addEventListener(this.f.v.pd,
this.u);this.La(this.f)}this.La(a)};function hv(a,b){var c={},d={};c["top-left"]=Mu(b,"div",[iv,jv].join(" "));c["top-center"]=Mu(b,"div",[iv,kv,lv,jv].join(" "));c["top-right"]=Mu(b,"div",[iv,jv].join(" "));c["left-top"]=Mu(b,"div",[iv,mv].join(" "));c["left-middle"]=Mu(b,"div",[iv,nv,ov,mv].join(" "));c["left-bottom"]=Mu(b,"div",[iv,mv].join(" "));c["right-top"]=Mu(b,"div",[iv,mv].join(" "));c["right-middle"]=Mu(b,"div",[iv,pv,ov,mv].join(" "));c["right-bottom"]=Mu(b,"div",[iv,mv].join(" "));c["bottom-left"]=Mu(b,"div",[iv,jv].join(" "));
c["bottom-center"]=Mu(b,"div",[iv,qv,lv,jv].join(" "));c["bottom-right"]=Mu(b,"div",[iv,jv].join(" "));d["top-left"]=Mu(b,"div",[kv,nv].join(" "));d["top-right"]=Mu(b,"div",[kv,pv].join(" "));d["bottom-left"]=Mu(b,"div",[qv,nv].join(" "));d["bottom-right"]=Mu(b,"div",[qv,pv].join(" "));Nu(d["top-left"],c["top-left"],c["left-top"]);Nu(d["top-right"],c["top-right"],c["right-top"]);Nu(d["bottom-left"],c["left-bottom"],c["bottom-left"]);Nu(d["bottom-right"],c["right-bottom"],c["bottom-right"]);Nu(a,d["top-left"],
d["top-right"],d["bottom-left"],d["bottom-right"],c["top-center"],c["left-middle"],c["right-middle"],c["bottom-center"]);this.a=c}var kv="H_l_top",qv="H_l_bottom",nv="H_l_left",pv="H_l_right",lv="H_l_center",ov="H_l_middle",jv="H_l_horizontal",mv="H_l_vertical",iv="H_l_anchor";hv.prototype.update=function(){var a=this.a;rv(a["top-center"],!0);rv(a["bottom-center"],!0);rv(a["left-middle"],!1);rv(a["right-middle"],!1)};
function rv(a,b){b?(b=a.offsetWidth,a.style.marginLeft=-Math.round(.5*b)+"px"):(b=a.offsetHeight,a.style.marginTop=-Math.round(.5*b)+"px")}hv.prototype.put=function(a,b){a=a?a.K():null;var c=b?this.a[b]:null;a&&c&&(a.parentElement&&a.parentElement.removeChild(a),c.insertBefore(a,/(bottom|right)$/.test(b)||/(center|middle)/.test(b)&&c.childNodes.length%2?c.firstChild:null));this.update()};var sv={IMPERIAL:"imperial",METRIC:"metric"};t("H.ui.UnitSystem",sv);var tv={btn:'<svg class="H_icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><g transform="translate(3 2)"><path d="m18 13v7h-18v-7h2v5h2v-2h2v2h2v-3h2v3h2v-2h2v2h2v-5z"></path><path d="m2.3.3c.7 0 1.3.1 1.8.4s.9.6 1.1 1 .4.9.4 1.4c0 .5-.1 1-.3 1.4s-.57 1-1 1.6-1.3 1.3-2.3 2.2h3.9l-.2 1.7h-6.16v-1.6c1.1-1.1 2-2 2.5-2.6s.9-1 1-1.4.3-.8.3-1.2c0-.4-.1-.7-.3-.9s-.5-.3-.9-.3c-.3 0-.6 0-.9.2s-.5.4-.8.7l-1.3-1c.4-.5.9-.9 1.4-1.2s1.2-.4 1.8-.4zm14.4 9.7h-2.3l-.2-3.8c 0-.9-.1-1.7-.1-2.4 0-.5 0-1 0-1.5l-1.5 6.7h-2.2l-1.6-6.7c.1.8.1 1.6.1 2.3 0 .5 0 1.1 0 1.7l-.2 3.8h-2.2l.7-9.7h2.9l1.5 6.6 1.4-6.6h2.9z"></path></g></g></svg>',
point:'<svg height="22" viewBox="0 0 12 12" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m6 12c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" fill="#fff"></path><path d="m6 10c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" fill="#2ed5c9" stroke="#272c36" stroke-width="2"></path></g></svg>'};function uv(a){Su.call(this,a);this.j=function(b){b.preventDefault()};this.i=A(function(b){this.kc()||this.toggleState();b.preventDefault()},this)}u(uv,Su);t("H.ui.base.PushButton",uv);uv.prototype.$=function(a){Pu(a,"start",this.i);Pu(a,"end",this.j);this.Oc(this.$e(),!0)};uv.prototype.renderInternal=uv.prototype.$;uv.prototype.op=function(){var a=Tu.DOWN;this.N(this.getState()===a?Tu.UP:a);return this};uv.prototype.toggleState=uv.prototype.op;
uv.prototype.s=function(){var a=this.K();a&&Qu(a,"start",this.i);Su.prototype.s.call(this)};function vv(a,b,c){Zi.call(this,a,{icon:wv,visibility:c});xv(this,b)}u(vv,Zi);function xv(a,b){a.qo=b;a.P&&(a.P.textContent=b)}var wv=new Qi(Mu(Fu.document,"span","H_dm_label"),{onAttach:function(a,b,c){c.P=a;xv(c,c.qo)},onDetach:function(a,b,c){delete c.P}});function yv(a,b){F.call(this);this.b=a;this.f=new vv(this.mp,"");b.push(this.f);this.a=new Q({objects:b,data:this});this.Lg=this.Lg.bind(this)}u(yv,F);n=yv.prototype;n.hd=!1;n.mp={lat:0,lng:0};n.Oc=function(a,b){xv(this.f,a);this.f.ca(b)};n.Gf=0;n.Lg=function(){this.f.wb(this.o)};function zv(a,b){b&&(a.nextSibling=b,b.previousSibling=a)};function Av(a,b,c,d){var e=new L,f=[];zv(a,this);zv(this,b);e.Hd(a.Ba());e.Hd(b.Ba());this.c=new wh(e,{style:c.pe});this.i=new wh(e,{style:{strokeColor:"transparent",lineWidth:Math.min(100,this.c.wa().lineWidth+2*(d||5))}});c.c&&(this.g=new wh(e,{style:c.c}),f.push(this.g));f.push(this.c,this.i);yv.call(this,c,f);this.m=this.j=-1;a=this.a;a.addEventListener("pointermove",this.A,!0,this);a.addEventListener("pointerleave",this.u,!0,this)}u(Av,yv);Av.prototype.Ze=function(){var a=this.c.ea();return a.Re(0).$a(a.Re(1))};
function Bv(a,b,c){var d=a.c.ea();d.Bf(3*+c,3,[b.lat,b.lng,0]);a.g&&a.g.ca(d);a.i.ca(d);a.c.ca(d)}Av.prototype.A=function(a){var b=a.currentPointer;a=this.previousSibling.Ba();var c=this.nextSibling.Ba(),d=this.b.f,e=b.viewportX;b=b.viewportY;if(this.j!==e||this.m!==b)this.j=e,this.m=b,d.ca(this.b.g(a,c,{x:e,y:b})),d.wb(!0)};Av.prototype.u=function(){this.b.f.wb()};Av.prototype.Ki=function(){this.Oc(this.b.a(this.Ze()),this.c.G().hb())};function Cv(a,b,c){c=b.b(c||0);this.c=new Gn(a,{icon:c,zIndex:0});this.c.draggable=!0;yv.call(this,b,[this.c]);a=this.a;a.addEventListener("dragstart",this.Co,!0,this);a.addEventListener("drag",this.Do,!0,this);a.addEventListener("dragend",this.Bo,!0,this)}u(Cv,yv);n=Cv.prototype;n.Ok=0;n.v={pd:"change"};n.Ze=function(){return this.Ok};n.Ba=function(){return this.c.ea()};
function Dv(a){var b=0;a.nextSibling&&a.previousSibling&&(a.nextSibling.hd||a.previousSibling.hd?a.nextSibling.hd&&!a.previousSibling.hd&&(b=2):b=1);b=a.b.b(b);a.c.Nc(b)}n.Do=function(a){var b=a.currentPointer;a=b.viewportX;b=b.viewportY;if(this.i!==a||this.j!==b)this.i=a,this.j=b,this.c.ca(this.b.map.Xa(a-this.g.x,b-this.g.y)),this.dispatchEvent(new sd(this.v.pd,this))};
n.Co=function(a){var b=a.currentPointer,c=b.viewportX;b=b.viewportY;var d=this.b.map.Ga(this.Ba());this.c.Ae(1);this.g={x:c-d.x,y:b-d.y};a.stopPropagation()};n.Bo=function(){this.c.Ae(0)};n.Ki=function(a){this.Ok=a;this.Oc(this.b.a(a),this.Ba())};function Ev(a,b){this.c=b;this.b=a;this.a={hd:!0};Fv(this,this.a);this.tg=A(this.tg,this)}t("H.ui.distanceMeasurement.Model",Ev);n=Ev.prototype;n.mg=function(){return this.a.nextSibling===this.a};function Gv(a,b){a=a.a;for(var c=a.nextSibling;c!==a;){var d=c,e=c.previousSibling===a?!1:b;(d.o=e)?d.Lg():(d.Gf&&x.clearTimeout(d.Gf),d.Gf=x.setTimeout(d.Lg,100));c=c.nextSibling}}
function Hv(a,b){var c=b||a.a.nextSibling,d=0,e=0;if(b&&!Iv(a,b))throw new D(a.sf,0,b);c instanceof Cv?d=c.Ze():c instanceof Av&&(d=c.previousSibling.Ze());for(b=c;b&&b!==a.a;b=b.nextSibling,e++)b.Ki(d),1===e%2&&(d+=b.Ze())}n.Ie=function(a){var b=this.a.previousSibling,c=this.mg();a=new Cv(a,this.c,c?0:2);this.b.da(a.a);zv(a,this.a);a.addEventListener(a.v.pd,this.tg);c?Fv(this,a):(Jv(this,b,a),Dv(b),Hv(this,b));return a};
n.insertBefore=function(a,b){var c;var d=1;if(b){if(!Iv(this,b))throw new D(this.insertBefore,1,b);if(c=b.previousSibling.hd)d=0;a=new Cv(a,this.c,d);a.addEventListener(a.v.pd,this.tg);this.b.da(a.a);c?(c=this.a.nextSibling,Jv(this,a,c),Fv(this,a),b=a,Dv(c)):(c=b.previousSibling,b=c.previousSibling,d=c.nextSibling,this.b.Ja(c.a),Jv(this,b,a),Jv(this,a,d));Hv(this,b)}else a=this.Ie(a);return a};n.ra=function(){Fv(this,this.a);this.b.ra()};
n.sf=function(a){var b=this.a,c=a.previousSibling,d=a.nextSibling;if(!Iv(this,a))throw new D(this.sf,0,a);this.b.Ja(a.a);if(c===b){var e=d;e!==b?(a=e.nextSibling,Fv(this,a),a.Ki(0),Dv(a),Hv(this,a)):Fv(this,this.a)}else d===b?(e=c,a=e.previousSibling,zv(a,b),Dv(a)):c&&d&&(Jv(this,c.previousSibling,d.nextSibling),this.b.Id([d.a,c.a]),Hv(this,c.previousSibling));e&&e!==b&&this.b.Ja(e.a)};function Iv(a,b){for(var c=a.a.nextSibling,d=!1;c!==a.a;){if(c===b){d=!0;break}c=c.nextSibling}return d}
function Jv(a,b,c){b=new Av(b,c,a.c);a.b.da(b.a)}function Fv(a,b){a.a.nextSibling=b;b.previousSibling=a.a}n.tg=function(a){a=a.target;var b=a.previousSibling,c=a.nextSibling,d=a.Ba();if(!c.hd){Bv(c,d,!1);var e=a}b.hd||(Bv(b,d,!0),e=b.previousSibling);Hv(this,e)};function Kv(a){a=a||{};var b,c=a.lineStyle;ev.call(this);this.o=new uv({label:tv.btn,onStateChange:A(this.zo,this)});this.La(this.o);if(b=a.distanceFormatter)this.Pj=b;c&&(this.Bk=c,this.Yk=B);this.Zb(a.alignment||"right-bottom");this.i={};this.i[0]=a.startIcon;this.i[2]=a.endIcon;this.i[1]=a.stopoverIcon;this.i[3]=a.splitIcon}u(Kv,ev);t("H.ui.DistanceMeasurement",Kv);n=Kv.prototype;n.mi=sv.METRIC;n.Bk={strokeColor:"rgb(39,44,54)",lineWidth:5};n.Yk={strokeColor:"white",lineWidth:7};
function Lv(a){var b=a.map,c,d={};a.f||(a.m=new N,a.g=new ul(a.m,{pixelRatio:a.map.ab()}),a.u=c=a.m.ic(),a.u.Hl(!0),c.addEventListener("dragstart",a.xo,!0,a),c.addEventListener("dragend",a.Af,!0,a),c.addEventListener("pointerenter",a.Af,!0,a),c.addEventListener("pointerleave",a.yo,!0,a),c.addEventListener("tap",a.No,!0,a),a.j=Mv(a),d.a=A(a.Pj,a),d.b=A(a.Kk,a),d.g=A(a.dk,a),d.map=a.map,d.f=a.j,d.pe=a.Bk,d.c=a.Yk,a.b=new Ev(a.u,d),a.f=!0);a.j&&a.u.da(a.j);b.addEventListener("tap",a.Vk,!0,a);b.a.add(a.g)}
function Nv(a){var b=a.map;a.f&&(b.removeEventListener("tap",a.Vk,!0,a),b.rf(a.g),a.b.ra())}function Mv(a){function b(){var h=c.Cb();h={anchor:c.xd().clone().scale(f).floor(),size:new Ti(zd(h.w*f),zd(h.h*f)),hitArea:d};return new Rj(c.bd(),h)}var c=a.Kk(3),d=new Ui(Vi.NONE,[]),e,f=c===a.B?.5:1;if(1===c.getState())var g=b();else g=new Rj("<svg/>",{hitArea:d}),c.addEventListener("statechange",function(){1===c.getState()&&e.Nc(b())});return e=new Gn(a.map.hb(),{visibility:!1,icon:g})}
n.Pj=function(a){var b="m",c=0;"metric"===this.mi?1E3<=a&&(a/=1E3,b="km",c=1):(a/=.3048,b="ft",5280<=a&&(a/=5280,b="mi",c=1));return a.toFixed(c)+" "+this.Aa().translate("scale."+b)};n.dk=function(a,b,c){var d=this.map.Ga(a);b=this.map.Ga(b);c=(new I(c.x,c.y)).ck(d,b);return this.map.Xa(c.x,c.y)||$f(a)};
n.$=function(a,b){var c=22*(this.map.gc().type===ek.P2D?this.map.ab():1),d=c/2;ev.prototype.renderInternal.call(this,a,b);this.mi=sv.METRIC;this.B=new Rj(tv.point,{anchor:{x:d,y:d},size:{w:c,h:c},hitArea:new Ui(Vi.CIRCLE,[d,d,d])});this.o.qc(this.Aa().translate("distance.measurement"))};Kv.prototype.renderInternal=Kv.prototype.$;n=Kv.prototype;n.Kk=function(a){return this.i[a]||this.B};n.Af=function(){Gv(this.b,!0)};n.xo=function(){Gv(this.b)};n.yo=function(a){"touch"!==a.currentPointer.type&&Gv(this.b)};
n.No=function(a){var b=a.currentPointer;var c=a.target.Ia;var d;c&&(c=c.getData())instanceof yv&&(d=c);c=d;a=a.originalEvent;a=a.metaKey||a.altKey;c&&(a&&c instanceof Cv?this.b.sf(c):c instanceof Av&&(a=c.previousSibling.Ba(),d=c.nextSibling.Ba(),b={x:b.viewportX,y:b.viewportY},this.b.insertBefore(this.dk(a,d,b),c.nextSibling),this.j.wb()),this.Af())};
n.Vk=function(a){var b=a.currentPointer;a=a.target;a!==this.map&&a.getProvider&&a.getProvider()===this.m||(this.b.Ie(this.map.Xa(b.viewportX,b.viewportY)),this.j.wb(),this.Af())};n.zo=function(a){"down"===a.target.getState()?Lv(this):Nv(this)};n.kf=function(a){this.mi=a;this.f&&(Hv(this.b),this.Af())};Kv.prototype.onUnitSystemChange=Kv.prototype.kf;Kv.prototype.s=function(){Nv(this);this.f&&(this.m.C(),this.g.C());Kv.l.s.call(this)};
Kv.prototype.Ka=function(a){a?this.o.getState()===Tu.DOWN&&(this.map=a,Lv(this)):(Nv(this),this.f=!1);ev.prototype.Ka.apply(this,arguments)};Kv.prototype.setMap=Kv.prototype.Ka;function Ov(){this.b=Pv.CLOSED;dv.call(this,"div","H_overlay")}u(Ov,dv);t("H.ui.base.OverlayPanel",Ov);Ov.prototype.N=function(a,b){if(a!==this.b||b)this.b=a,a===Pv.OPEN?this.Ma("H_open"):this.rb("H_open");return this};Ov.prototype.setState=Ov.prototype.N;Ov.prototype.getState=function(){return this.b};Ov.prototype.getState=Ov.prototype.getState;
Ov.prototype.cl=function(a){var b=a.Wc;a=a.K();var c=this.K(),d=c.style;this.rb("H_top");this.rb("H_middle");this.rb("H_bottom");this.rb("H_left");this.rb("H_center");this.rb("H_right");d.bottom=d.top=d.left=d.right=d.margin="";if(/top/g.test(b)){this.Ma("H_top");d.top="0";d.margin="0 12px";var e=-1}else/bottom/g.test(b)?(this.Ma("H_bottom"),d.bottom="0",d.margin="0 12px",e=1):(this.Ma("H_middle"),d.top="50%",d.margin="0 12px",d.marginTop=-Math.round(.5*
c.offsetHeight)+"px",e=0);/left/g.test(b)?(this.Ma("H_left"),d.left=a.offsetWidth+"px",d.marginLeft="12px"):/right/g.test(b)?(this.Ma("H_right"),d.right=a.offsetWidth+"px",d.marginRight="12px"):(this.Ma("H_center"),d.left="50%",0>e?(d.top=a.offsetHeight+"px",d.marginTop="12px"):0<e&&(d.bottom=a.offsetHeight+"px",d.marginBottom="12px"),d.marginLeft=-Math.round(.5*c.offsetWidth)+"px",a.appendChild(c))};Ov.prototype.pointToControl=Ov.prototype.cl;var Pv={OPEN:"open",CLOSED:"closed"};
Ov.State=Pv;function Qv(a){a=a||{};dv.call(this,"div","H_rdo");this.g=new Z("div","H_rdo_title");this.b=new dv("div","H_rdo_buttons");this.La(this.g);this.La(this.b);this.i=A(function(b){b.target.getState()===Tu.DOWN?(this.tl(b.target,!0),this.dispatchEvent(Rv)):b.target.N(Tu.DOWN,!0)},this);this.addEventListener("statechange",this.i);this.Xi(a.title||"");a.onActiveButtonChange&&this.addEventListener(Rv,a.onActiveButtonChange);a.buttonsOptions&&a.buttonsOptions.forEach(function(b){this.Yg(new uv(b))},
this)}u(Qv,dv);t("H.ui.base.RadioGroup",Qv);var Rv="activebuttonchange";Qv.prototype.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);this.Xi(this.f,!0)};Qv.prototype.renderInternal=Qv.prototype.$;Qv.prototype.ra=function(){this.b.ra()};Qv.prototype.Xi=function(a,b){if(a!==this.f||b)this.f=a,this.g.K()&&(this.g.K().innerHTML=this.f);return this};Qv.prototype.setTitle=Qv.prototype.Xi;Qv.prototype.Qn=function(){return this.f};Qv.prototype.getTitle=Qv.prototype.Qn;
Qv.prototype.Yg=function(a){if(!(a instanceof uv))throw Error("PushButton expected");a.ka(this);this.b.La(a);return this};Qv.prototype.addButton=Qv.prototype.Yg;Qv.prototype.To=function(a){this.b.removeChild(a);a.ka(null);return this};Qv.prototype.removeButton=Qv.prototype.To;Qv.prototype.$f=function(){return this.b.yh()};Qv.prototype.getButtons=Qv.prototype.$f;Qv.prototype.tl=function(a,b){for(var c=this.$f(),d=c.length;d--;)c[d].N(c[d]===a?Tu.DOWN:Tu.UP,b)};Qv.prototype.setActiveButton=Qv.prototype.tl;
Qv.prototype.s=function(){this.removeEventListener("statechange",this.i);this.ra();dv.prototype.s.call(this)};function Sv(a){a=a||{};ev.call(this);this.g=new Ov;this.b=this.b.bind(this);this.m=this.m.bind(this);this.o=this.o.bind(this);this.Zb(a.alignment||"bottom-right");Tv(this,a.baseLayers,a.layers)}u(Sv,ev);t("H.ui.MapSettingsControl",Sv);function Tv(a,b,c){var d=a.hc();a.f&&a.f.forEach(function(e){var f=e.layer;e=f&&wu(c,function(g){return g.layer===f});f&&!e&&d.rf(f)});a.j=zc(b)?b:[];a.f=zc(c)?c:[];a.i&&(a.i.ra(),a.u.ra(),Uv(a))}
Sv.prototype.T=function(){var a=this.hc();a&&(a.addEventListener("tap",this.m),a=a.a,a.addEventListener("add",this.b),a.addEventListener("remove",this.b),a.addEventListener("set",this.b))};Sv.prototype.R=function(){var a=this.hc();a&&(a.removeEventListener("tap",this.m),a=a.a,a.removeEventListener("add",this.b),a.removeEventListener("remove",this.b),a.removeEventListener("set",this.b))};
Sv.prototype.$=function(a,b){var c=this.Aa().translate("layers.choose");ev.prototype.renderInternal.call(this,a,b);this.T();this.B=new uv({tooltip:c,label:'<svg xmlns="http://www.w3.org/2000/svg" class="H_icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.7,14.6 L4.5,16 L12,20.6 L19.5,16 L17.3,14.6 L19.1,13.5 L23,16 L12,23 L1,16 L4.9,13.5 L6.7,14.6 Z M12,2 L23,9 L12,16 L1,9 L12,2 Z"></path></svg>',onStateChange:A(function(d){d.target.getState()===Tu.DOWN?(this.g.N(Pv.OPEN),this.g.cl(this)):
this.g.N(Pv.CLOSED)},this)});this.i=new Qv({title:c,onActiveButtonChange:function(){a:{var d=this.i.$f();for(var e=d.length;e--;)if(d[e].getState()===Tu.DOWN){d=d[e];break a}d=null}d=d.getData();this.map.Md(this.j[d].layer);this.o()}.bind(this)});this.u=new dv("div","H_grp");this.aa=new Z("div","H_separator");this.La(this.B);this.La(this.g);this.g.La(this.i);this.g.La(this.aa);this.g.La(this.u);Uv(this)};Sv.prototype.renderInternal=Sv.prototype.$;
function Uv(a){var b=a.Aa();a.j.forEach(function(c,d){this.i.Yg(new uv({label:Vv(b,c.label),data:d,disabled:!c.layer}))},a);a.f.forEach(function(c,d){this.u.La(new uv({label:Vv(b,c.label),onStateChange:this.fa.bind(this,c.layer),data:d,disabled:!c.layer}))},a);a.aa.wb(!(!a.f.length||!a.j.length));x.setTimeout(function(){this.map&&(this.b(),this.B.Ca(!(this.j&&this.j.length||this.f&&this.f.length)))}.bind(a))}
Sv.prototype.b=function(){var a=this.map.f,b=this.map.a;this.j.forEach(function(c,d){this.i.$f()[d].N(Tu[c.layer===a?"DOWN":"UP"],!0)},this);this.f.forEach(function(c,d){d=this.u.yh()[d];c.layer?d.N(Tu[-1!==b.indexOf(c.layer)?"DOWN":"UP"],!0):d.Ca(!0)},this)};Sv.prototype.fa=function(a,b){b.target.getState()===Tu.DOWN?this.map.$g(a):this.map.rf(a);this.o()};
Sv.prototype.o=function(){var a;if(a=Wv(this)){var b=a.Tg;b.ga().wa().hf(a.ga().wa().yd());this.map.rf(a);a.C();delete a.Tg}Xv(this)&&Yv(this,this.map.f)};
function Yv(a,b){var c,d,e={},f=b.ga(),g=window.H.service&&window.H.service.omv.Provider;if(g&&b.ga()instanceof g&&f.wa().Qe){var h=f.wa();var k=function(){var l=Zv.ground.filter(function(p){return!!h.Hh("layers."+p)}),m=Zv.water.filter(function(p){return!!h.Hh("layers."+p)});l.concat(m).length&&(Eh(e,h.Qe(l)),Eh(e,h.Qe(m,!1,!0)),delete e.global,c=new bi(e,h.fc()),d=f.j.td(c),d.Tg=b,this.map.$g(d));h.removeEventListener(ai.CHANGE,k)}.bind(a);h.getState()!==Zh.READY?h.addEventListener(ai.CHANGE,
k):k()}}function Wv(a){return wu(a.map.a.Oa(),function(b){return!!b.Tg})}function Xv(a){a=a.map.a.Oa();var b=window.H.service&&window.H.service.traffic.flow.Provider;return!!b&&a.some(function(c){return c.ga()instanceof b})}var Zv={water:["water.water-labels"],ground:"road_labels continent_label island_label roads.shields roads.directions truck-restriction.signs places landuse.label".split(" ")};function Vv(a,b){return/^layers?/.test(b)&&a.Nh(b)?a.translate(b):b}Sv.prototype.m=function(){this.B.N(Tu.UP)};
Sv.prototype.s=function(){Sv.l.s.call(this);this.R()};var $v=[];t("H.ui.i18n.defaultLocales",$v);var aw={},bw=[];function cw(a,b){aw[a]=b;-1===$v.indexOf(a)&&$v.push(a);bw.length?dw(a,b):bw=Object.keys(b)}function dw(a,b){for(var c=bw,d=c.length,e;d--;)if(e=c[d],!b[e])throw Error("'"+e+"' key missing in translation map for "+a);};function ew(a){a=a||{};ev.call(this);this.f=new uv({label:'<svg xmlns="http://www.w3.org/2000/svg" class="H_icon" viewBox="0 0 24 24"><g transform="translate(1 3)"><path fill-rule="nonzero" d="M5,0 L5,2 L2,2 L2,16 L5,16 L5,18 L2,18 C0.9,18 0,17 0,15.75 L0,2.25 C0,1 0.9,0 2,0 L5,0 Z M17,0 L20,0 C21.1,0 22,1 22,2.25 L22,15.75 C22,17 21.1,18 20,18 L17,18 L17,16 L20,16 L20,2 L17,2 L17,0 Z"></path><rect width="10" height="2" x="6" y="8"></rect><rect width="2" height="10" x="10" y="4"></rect></g></svg>',
onStateChange:A(this.Ao,this)});this.La(this.f);this.Zb(a.alignment||"right-bottom")}u(ew,ev);t("H.ui.ZoomRectangle",ew);n=ew.prototype;
n.Ao=function(a){var b=this.map,c=b.c.element;a.target.getState()===Tu.DOWN?(b.addEventListener("dragstart",this.Mk,!0,this),b.addEventListener("drag",this.Nk,!0,this),b.addEventListener("dragend",this.Lk,!0,this),a=c.ownerDocument.createElement("div"),a.className="H_zoom_lasso",c.appendChild(a),this.b=a):(b.removeEventListener("dragstart",this.Mk,!0,this),b.removeEventListener("drag",this.Nk,!0,this),b.removeEventListener("dragend",this.Lk,!0,this),c.removeChild(this.b))};
n.Mk=function(a){var b=this.b.style,c=a.currentPointer,d=c.viewportX;c=c.viewportY;a.target===this.map&&(a.stopPropagation(),b.width="0px",b.height="0px",b.top=c+"px",b.left=d+"px",b.display="block",this.i=c,this.g=d)};n.Nk=function(a){var b=a.currentPointer,c=b.viewportX,d=b.viewportY;b=this.g;var e=this.i,f=this.b.style;a.target===this.map&&(a.stopPropagation(),a=c-b,c=d-e,f.left=b+(0>a?a:0)+"px",f.top=e+(0>c?c:0)+"px",f.width=Math.abs(a)+"px",f.height=Math.abs(c)+"px")};
n.Lk=function(a){var b=this.map,c=a.currentPointer;a.target===this.map&&(a.stopPropagation(),this.b.style.display="none",b.b.$b({bounds:fg([b.Xa(this.g,this.i),b.Xa(c.viewportX,c.viewportY)])},!0))};n.$=function(a,b){ev.prototype.renderInternal.call(this,a,b);this.f.qc(this.Aa().translate("zoom.rectangle"))};ew.prototype.renderInternal=ew.prototype.$;cw("nl-NL",{"layers.normal":"Kaartweergave","layers.satellite":"Satelliet","layers.terrain":"Terrein","layer.transit":"Openbaar vervoer","layer.traffic":"Verkeerssituatie","layer.incidents":"Toon verkeersincidenten","layers.choose":"Weergave kiezen",minimap:"Minimap","scale.switchToImperial":"Overgaan naar mijlen","scale.switchToMetric":"Wijzigen naar km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Uitzoomen","zoom.in":"Inzoomen","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Openbaar vervoer",
"traffic.MISCELLANEOUS":"Diversen","traffic.ACCIDENT":"Ongeval","traffic.OTHER_NEWS":"Meer informatie","traffic.PLANNED_EVENT":"Geplande afzetting","traffic.ROAD_HAZARD":"Gevaar op de weg","traffic.ROAD_CLOSURE":"Rijbaan afgesloten","traffic.WEATHER":"Weer","traffic.CONGESTION":"Verkeersopstopping","traffic.CONSTRUCTION":"Wegwerkzaamheden","traffic.DISABLED_VEHICLE":"Voertuig met pech","traffic.from":"Begintijd:","traffic.until":"Geschatte eindtijd:","distance.measurement":"Measure distance"});cw("pt-PT",{"layers.normal":"Vista do mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transportes p\u00fablicos","layer.traffic":"Condi\u00e7\u00f5es de tr\u00e2nsito","layer.incidents":"Mostrar incidentes de tr\u00e2nsito","layers.choose":"Escolher vista",minimap:"Minimap","scale.switchToImperial":"Mudar para milhas","scale.switchToMetric":"Mudar para km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Diminuir","zoom.in":"Aumentar",
"zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transportes p\u00fablicos","traffic.MISCELLANEOUS":"Diversos","traffic.ACCIDENT":"Acidente","traffic.OTHER_NEWS":"Outras not\u00edcias","traffic.PLANNED_EVENT":"Evento planeado","traffic.ROAD_HAZARD":"Perigo na estrada","traffic.ROAD_CLOSURE":"Estrada fechada","traffic.WEATHER":"Meteorologia","traffic.CONGESTION":"Congestionamento","traffic.CONSTRUCTION":"Constru\u00e7\u00e3o","traffic.DISABLED_VEHICLE":"Ve\u00edculo avariado","traffic.from":"Hora de in\u00edcio:",
"traffic.until":"Hora de fim prevista:","distance.measurement":"Measure distance"});cw("ru-RU",{"layers.normal":"\u0420\u0435\u0436\u0438\u043c \u043a\u0430\u0440\u0442\u044b","layers.satellite":"\u0421\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0430\u044f","layers.terrain":"\u041c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c","layer.transit":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","layer.traffic":"\u0414\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f",
"layer.incidents":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f","layers.choose":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u0434",minimap:"Minimap","scale.switchToImperial":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0438\u043b\u0438","scale.switchToMetric":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u044b",
"scale.km":"\u043a\u043c","scale.m":"\u043c","scale.mi":"\u043c\u0438\u043b\u044c","scale.ft":"\u0444\u0443\u0442","zoom.out":"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c","zoom.in":"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","traffic.MISCELLANEOUS":"\u041f\u0440\u043e\u0447\u0435\u0435 \u0414\u0422\u041f",
"traffic.ACCIDENT":"\u0414\u0422\u041f","traffic.OTHER_NEWS":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438","traffic.PLANNED_EVENT":"\u041f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435","traffic.ROAD_HAZARD":"\u0414\u043e\u0440\u043e\u0436\u043d\u0430\u044f \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","traffic.ROAD_CLOSURE":"\u0414\u043e\u0440\u043e\u0433\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430",
"traffic.WEATHER":"\u041f\u043e\u0433\u043e\u0434\u0430","traffic.CONGESTION":"\u041f\u0440\u043e\u0431\u043a\u0430","traffic.CONSTRUCTION":"\u0420\u0435\u043c\u043e\u043d\u0442","traffic.DISABLED_VEHICLE":"\u041d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c","traffic.from":"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430:","traffic.until":"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",
"distance.measurement":"\u0418\u0437\u043c\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"});cw("fi-FI",{"layers.normal":"Karttan\u00e4kym\u00e4","layers.satellite":"Satelliitti","layers.terrain":"Maasto","layer.transit":"Julkinen liikenne","layer.traffic":"Liikenneolosuhteet","layer.incidents":"N\u00e4yt\u00e4 liikennetapahtumat","layers.choose":"Valitse n\u00e4kym\u00e4",minimap:"Minimap","scale.switchToImperial":"Vaihda maileihin","scale.switchToMetric":"Vaihda kilometreihin","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Loitonna","zoom.in":"L\u00e4henn\u00e4",
"zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Julkinen liikenne","traffic.MISCELLANEOUS":"Erittelem\u00e4t\u00f6n syy","traffic.ACCIDENT":"Onnettomuus","traffic.OTHER_NEWS":"Muu tapahtuma","traffic.PLANNED_EVENT":"Suunniteltu tapahtuma","traffic.ROAD_HAZARD":"Vaara tiell\u00e4","traffic.ROAD_CLOSURE":"Tie suljettu","traffic.WEATHER":"S\u00e4\u00e4","traffic.CONGESTION":"Ruuhka","traffic.CONSTRUCTION":"Rakennusty\u00f6","traffic.DISABLED_VEHICLE":"Pys\u00e4htynyt ajoneuvo","traffic.from":"Alkamisaika:",
"traffic.until":"Arvioitu p\u00e4\u00e4ttymisaika:","distance.measurement":"Measure distance"});cw("pt-BR",{"layers.normal":"Exibi\u00e7\u00e3o do mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transporte p\u00fablico","layer.traffic":"Condi\u00e7\u00f5es do tr\u00e2nsito","layer.incidents":"Mostrar incidentes no tr\u00e2nsito","layers.choose":"Escolher exibi\u00e7\u00e3o",minimap:"Minimap","scale.switchToImperial":"Mudar para milhas","scale.switchToMetric":"Mudar para km","scale.km":"km","scale.m":"m","scale.mi":"milhas","scale.ft":"p\u00e9s","zoom.out":"Menos zoom",
"zoom.in":"Mais zoom","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transporte p\u00fablico","traffic.MISCELLANEOUS":"Miscel\u00e2nea","traffic.ACCIDENT":"Acidente","traffic.OTHER_NEWS":"Outras not\u00edcias","traffic.PLANNED_EVENT":"Evento planejado","traffic.ROAD_HAZARD":"Risco na estrada","traffic.ROAD_CLOSURE":"Estrada fechada","traffic.WEATHER":"Clima","traffic.CONGESTION":"Congestionamento","traffic.CONSTRUCTION":"Constru\u00e7\u00e3o","traffic.DISABLED_VEHICLE":"Ve\u00edculo incapacitado",
"traffic.from":"Hora de in\u00edcio:","traffic.until":"Tempo final estimado:","distance.measurement":"Measure distance"});cw("zh-CN",{"layers.normal":"\u5730\u56fe\u89c6\u56fe","layers.satellite":"\u536b\u661f","layers.terrain":"\u5730\u5f62","layer.transit":"\u516c\u5171\u4ea4\u901a","layer.traffic":"\u4ea4\u901a\u60c5\u51b5","layer.incidents":"\u663e\u793a\u4ea4\u901a\u4e8b\u4ef6","layers.choose":"\u9009\u62e9\u89c6\u56fe",minimap:"Minimap","scale.switchToImperial":"\u5207\u6362\u4e3a\u300c\u82f1\u91cc\u300d","scale.switchToMetric":"\u5207\u6362\u4e3a\u300c\u516c\u91cc\u300d","scale.km":"\u516c\u91cc","scale.m":"\u7c73",
"scale.mi":"\u82f1\u91cc","scale.ft":"\u82f1\u5c3a","zoom.out":"\u7f29\u5c0f","zoom.in":"\u653e\u5927","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u516c\u5171\u4ea4\u901a","traffic.MISCELLANEOUS":"\u7efc\u5408\u4e8b\u4ef6","traffic.ACCIDENT":"\u4ea4\u901a\u610f\u5916","traffic.OTHER_NEWS":"\u5176\u4ed6\u65b0\u95fb","traffic.PLANNED_EVENT":"\u9884\u5b9a\u4e8b\u4ef6","traffic.ROAD_HAZARD":"\u9053\u8def\u5371\u9669","traffic.ROAD_CLOSURE":"\u9053\u8def\u5df2\u5173\u95ed","traffic.WEATHER":"\u5929\u6c14",
"traffic.CONGESTION":"\u5835\u585e","traffic.CONSTRUCTION":"\u65bd\u5de5","traffic.DISABLED_VEHICLE":"\u8f66\u8f86\u629b\u951a","traffic.from":"\u5f00\u59cb\u65f6\u95f4\uff1a","traffic.until":"\u9884\u8ba1\u7ed3\u675f\u65f6\u95f4\uff1a","distance.measurement":"Measure distance"});cw("es-ES",{"layers.normal":"Mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transporte p\u00fablico","layer.traffic":"Estado del tr\u00e1fico","layer.incidents":"Mostrar incidentes de tr\u00e1fico","layers.choose":"Elija una vista",minimap:"Minimap","scale.switchToImperial":"Cambiar a millas","scale.switchToMetric":"Cambiar a km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Alejar","zoom.in":"Acercar","zoom.rectangle":"Zoom rectangle",
"traffic.MASS_TRANSIT":"Transporte p\u00fablico","traffic.MISCELLANEOUS":"Varios","traffic.ACCIDENT":"Accidente","traffic.OTHER_NEWS":"M\u00e1s noticias","traffic.PLANNED_EVENT":"Acto programado","traffic.ROAD_HAZARD":"Riesgo en carretera","traffic.ROAD_CLOSURE":"Carretera cerrada","traffic.WEATHER":"Tiempo","traffic.CONGESTION":"Atasco","traffic.CONSTRUCTION":"Construcci\u00f3n","traffic.DISABLED_VEHICLE":"Veh\u00edculo averiado","traffic.from":"Inicio:","traffic.until":"Finalizaci\u00f3n estimada:",
"distance.measurement":"Measure distance"});cw("fr-FR",{"layers.normal":"Carte","layers.satellite":"Satellite","layers.terrain":"Terrain","layer.transit":"Transports publics","layer.traffic":"Conditions de circulation","layer.incidents":"Afficher les incidents de circulation","layers.choose":"Choisir la vue",minimap:"Minimap","scale.switchToImperial":"Passer en miles","scale.switchToMetric":"Passer en km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom arri\u00e8re","zoom.in":"Zoom avant","zoom.rectangle":"Zoom rectangle",
"traffic.MASS_TRANSIT":"Transports publics","traffic.MISCELLANEOUS":"Divers","traffic.ACCIDENT":"Accident","traffic.OTHER_NEWS":"Autre","traffic.PLANNED_EVENT":"\u00c9v\u00e9nement pr\u00e9vu","traffic.ROAD_HAZARD":"Danger routier","traffic.ROAD_CLOSURE":"Chauss\u00e9e ferm\u00e9e","traffic.WEATHER":"M\u00e9t\u00e9o","traffic.CONGESTION":"Embouteillage","traffic.CONSTRUCTION":"Travaux","traffic.DISABLED_VEHICLE":"V\u00e9hicule en panne","traffic.from":"Date ou heure de d\u00e9but:","traffic.until":"Date et heure de fin estim\u00e9es:",
"distance.measurement":"Measure distance"});cw("pl-PL",{"layers.normal":"Widok mapy","layers.satellite":"Satelita","layers.terrain":"Teren","layer.transit":"Transport publiczny","layer.traffic":"Warunki drogowe","layer.incidents":"Poka\u017c zdarzenia drogowe","layers.choose":"Wybierz widok",minimap:"Minimap","scale.switchToImperial":"Zmie\u0144 na mile","scale.switchToMetric":"Zmie\u0144 na km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Oddal","zoom.in":"Przybli\u017c","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transport publiczny",
"traffic.MISCELLANEOUS":"Inne zdarzenie","traffic.ACCIDENT":"Wypadek","traffic.OTHER_NEWS":"Inne wiadomo\u015bci","traffic.PLANNED_EVENT":"Zdarzenie planowane","traffic.ROAD_HAZARD":"Niebezpiecze\u0144stwo na drodze","traffic.ROAD_CLOSURE":"Jezdnia zamkni\u0119ta","traffic.WEATHER":"Pogoda","traffic.CONGESTION":"Korek","traffic.CONSTRUCTION":"Budowa","traffic.DISABLED_VEHICLE":"Uszkodzony pojazd","traffic.from":"Data rozpocz\u0119cia:","traffic.until":"Przybli\u017cona data zako\u0144czenia:","distance.measurement":"Measure distance"});cw("de-DE",{"layers.normal":"Kartenansicht","layers.satellite":"Satellit","layers.terrain":"Gel\u00e4nde","layer.transit":"\u00d6ffentliche Verkehrsmittel","layer.traffic":"Verkehrslage","layer.incidents":"Verkehrsst\u00f6rungen anzeigen","layers.choose":"Ansicht ausw\u00e4hlen",minimap:"Minimap","scale.switchToImperial":"Umrechnung in Meilen","scale.switchToMetric":"Umrechnung in Kilometer","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Verkleinern","zoom.in":"Vergr\u00f6\u00dfern",
"zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u00d6ffentliche Verkehrsmittel","traffic.MISCELLANEOUS":"Diverse","traffic.ACCIDENT":"Unfall","traffic.OTHER_NEWS":"Anderes Ereignis","traffic.PLANNED_EVENT":"Geplantes Ereignis","traffic.ROAD_HAZARD":"Verkehrshindernis","traffic.ROAD_CLOSURE":"Fahrbahn gesperrt","traffic.WEATHER":"Wetter","traffic.CONGESTION":"Verkehrsstau","traffic.CONSTRUCTION":"Baustelle","traffic.DISABLED_VEHICLE":"Liegengebliebenes Fahrzeug","traffic.from":"Beginn:",
"traffic.until":"Voraussichtliches Ende:","distance.measurement":"Measure distance"});cw("tr-TR",{"layers.normal":"Harita g\u00f6r\u00fcn\u00fcm\u00fc","layers.satellite":"Uydu","layers.terrain":"Arazi","layer.transit":"Toplu ula\u015f\u0131m","layer.traffic":"Trafik durumlar\u0131","layer.incidents":"Trafik olaylar\u0131n\u0131 g\u00f6ster","layers.choose":"G\u00f6r\u00fcn\u00fcm se\u00e7",minimap:"Minimap","scale.switchToImperial":"Mile d\u00f6n\u00fc\u015ft\u00fcr","scale.switchToMetric":"Kilometreye d\u00f6n\u00fc\u015ft\u00fcr","scale.km":"km","scale.m":"m","scale.mi":"mil","scale.ft":"ft",
"zoom.out":"Uzakla\u015ft\u0131r","zoom.in":"Yak\u0131nla\u015ft\u0131r","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Toplu ula\u015f\u0131m","traffic.MISCELLANEOUS":"\u00c7e\u015fitli","traffic.ACCIDENT":"Kaza","traffic.OTHER_NEWS":"Di\u011fer haberler","traffic.PLANNED_EVENT":"Planl\u0131 etkinlik","traffic.ROAD_HAZARD":"Yol tehlikesi","traffic.ROAD_CLOSURE":"Yol kapal\u0131","traffic.WEATHER":"Hava durumu","traffic.CONGESTION":"Yo\u011funluk","traffic.CONSTRUCTION":"Yol \u00e7al\u0131\u015fmas\u0131",
"traffic.DISABLED_VEHICLE":"Ara\u00e7 ar\u0131zas\u0131","traffic.from":"Ba\u015flang\u0131\u00e7 zaman\u0131:","traffic.until":"Tahmini biti\u015f zaman\u0131:","distance.measurement":"Measure distance"});cw("it-IT",{"layers.normal":"Vista mappa","layers.satellite":"Satellite","layers.terrain":"Terreno","layer.transit":"Mezzi pubblici","layer.traffic":"Condizioni del traffico","layer.incidents":"Mostra incidenti stradali","layers.choose":"Scegli vista",minimap:"Minimap","scale.switchToImperial":"Passa a miglia","scale.switchToMetric":"Passa a km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom indietro","zoom.in":"Zoom avanti","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Mezzi pubblici",
"traffic.MISCELLANEOUS":"Varie","traffic.ACCIDENT":"Incidente","traffic.OTHER_NEWS":"Altre notizie","traffic.PLANNED_EVENT":"Evento pianificato","traffic.ROAD_HAZARD":"Strada dissestata","traffic.ROAD_CLOSURE":"Strada chiusa","traffic.WEATHER":"Maltempo","traffic.CONGESTION":"Ingorgo","traffic.CONSTRUCTION":"Lavori in corso","traffic.DISABLED_VEHICLE":"Veicolo in panne","traffic.from":"Ora di inizio:","traffic.until":"Ora di fine stimata:","distance.measurement":"Measure distance"});cw("en-US",{"layers.normal":"Map view","layers.satellite":"Satellite","layers.terrain":"Terrain","layer.transit":"Public transport","layer.traffic":"Traffic conditions","layer.incidents":"Show traffic incidents","layers.choose":"Choose view",minimap:"Minimap","scale.switchToImperial":"Change to miles","scale.switchToMetric":"Change to km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom out","zoom.in":"Zoom in","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Public transport",
"traffic.MISCELLANEOUS":"Miscellaneous","traffic.ACCIDENT":"Accident","traffic.OTHER_NEWS":"Other news","traffic.PLANNED_EVENT":"Planned event","traffic.ROAD_HAZARD":"Road hazard","traffic.ROAD_CLOSURE":"Roadway closed","traffic.WEATHER":"Weather","traffic.CONGESTION":"Congestion","traffic.CONSTRUCTION":"Construction","traffic.DISABLED_VEHICLE":"Disabled vehicle","traffic.from":"Start time:","traffic.until":"Estimated end time:","distance.measurement":"Measure distance"});function fw(a,b){if(!Ac(a))throw new TypeError("string locale code required");if(Ea(b))dw(a,b);else{if(-1===$v.indexOf(a))throw Error("Default locale '"+a+"' does nto exist.");b=aw[a]}this.a=b||{};this.b=a}t("H.ui.i18n.Localization",fw);fw.prototype.pn=function(){return this.b};fw.prototype.getLocale=fw.prototype.pn;fw.prototype.hn=function(){return Object.keys(this.a)};fw.prototype.getKeys=fw.prototype.hn;fw.prototype.Nh=function(a){return!(!this.a||!this.a[a])};fw.prototype.hasKey=fw.prototype.Nh;
fw.prototype.translate=function(a){var b=this.a[a];if(!Ac(b))throw Error("Translation missing for key '"+a+"'.");return b};fw.prototype.translate=fw.prototype.translate;function gw(a){a=a||{};ev.call(this);this.Ma("H_scalebar");this.Zb(a.alignment||"right-bottom");this.o=150;this.update=A(this.update,this);this.i=this.g=this.b=this.f=null}u(gw,ev);t("H.ui.ScaleBar",gw);
gw.prototype.$=function(a,b){ev.prototype.renderInternal.call(this,a,b);a.innerHTML='<svg height="12" version="1.1" xmlns="http://www.w3.org/2000/svg"><polyline style="fill:none; stroke:white; stroke-width:4" points="2,2 2,10 98,10 98,2"/><polyline style="fill:none; stroke:black; stroke-width:2" points="2,2 2,10 98,10 98,2"/></svg><div style="padding: 0 0 0 10px"></div>';a.style.direction="ltr";this.f=a.firstChild;b=this.f.childNodes;this.b=b[0];this.g=b[1];this.i=a.lastChild;this.j=sv.METRIC;this.m=
A(function(c){this.kc()||(this.dispatchEvent("toggleunitsystem"),c.preventDefault())},this);this.u=A(function(c){c.preventDefault()},this);Pu(a,"start",this.u);Pu(a,"end",this.m);this.qc(this.Aa().translate("scale.switchToImperial"));this.update()};gw.prototype.renderInternal=gw.prototype.$;gw.prototype.Ka=function(a){this.map&&this.map.removeEventListener("mapviewchange",this.update);a&&a.addEventListener("mapviewchange",this.update);ev.prototype.Ka.apply(this,arguments)};gw.prototype.setMap=gw.prototype.Ka;
gw.prototype.capture=function(a,b,c){var d=this.K();var e=d.ownerDocument,f=e.createElement("canvas"),g=f.getContext("2d"),h=e.createElementNS("http://www.w3.org/2000/svg","svg"),k=e.createElementNS("http://www.w3.org/2000/svg","foreignObject"),l=kf(d,e,!1);e=parseFloat(d.offsetWidth)+1;var m=parseFloat(d.offsetHeight),p=e*a;a*=m;f.width=p;f.height=a;h.setAttribute("xmlns","http://www.w3.org/2000/svg");h.setAttribute("width",p);h.setAttribute("height",a);h.setAttribute("viewBox","0 0 "+e+" "+m);k.setAttribute("width",
"100%");k.setAttribute("height","100%");h.appendChild(k);l.setAttribute("width","100%");l.setAttribute("height","100%");l.setAttribute("xmlns","http://www.w3.org/1999/xhtml");var q=window.getComputedStyle(d);"box-shadow display align-items font font-family font-size height text-shadow direction".split(" ").forEach(function(r){l.style.setProperty(r,q.getPropertyValue(r))});k.appendChild(l);d=af(h.outerHTML);(new sf("image",d)).then(function(r){g.drawImage(r,0,0);b(f)},c)};gw.prototype.capture=gw.prototype.capture;
gw.prototype.kf=function(a){this.j=a;this.qc("imperial"===a?this.Aa().translate("scale.switchToMetric"):this.Aa().translate("scale.switchToImperial"));this.update()};gw.prototype.onUnitSystemChange=gw.prototype.kf;
gw.prototype.update=function(){var a;if(this.K()){this.f=this.f;this.b=this.b;var b=this.o;var c=0;var d=this.map;if(d){var e=Math.round(.5*d.c.width);var f=Math.round(.5*d.c.height);(a=d.Xa(e,f))&&(d=d.Xa(e+1,f))&&(c=100*a.$a(d))}c&&(this.j===sv.IMPERIAL?1609.344>c?(d=c/.3048006,a=this.Aa().translate("scale.ft")):(d=c/1609.344,a=this.Aa().translate("scale.mi")):1E3>c?(d=c,a=this.Aa().translate("scale.m")):(d=c/1E3,a=this.Aa().translate("scale.km")),c=Math.pow(10,Math.floor(Math.log(d)/Math.LN10)),
d=c/d*100,d<b/5?(c*=5,d*=5):d<b/2?(c*=2,d*=2):d>b&&(c/=2,d/=2),d=Math.round(d),this.f.setAttribute("width",d),this.i.textContent=c+" "+a,this.b.points.getItem(2).x=this.g.points.getItem(2).x=this.b.points.getItem(3).x=this.g.points.getItem(3).x=d-2)}};function hw(a){C(a,Qe,hw,1);Z.call(this,"div","H_context_menu_item");this.b=a;this.f=A(this.f,this);this.a=A(this.a,this);this.b.addEventListener("update",this.a)}u(hw,Z);t("H.ui.context.Item",hw);hw.prototype.f=function(a){var b=this.b,c=b.callback;c&&!b.isDisabled()&&(this.dispatchEvent("click"),c(a))};hw.prototype.$=function(){var a=this,b=this.K();Ce(b,"click",this.f);b.addEventListener("keyup",function(c){13==c.keyCode&&a.f(c)});this.a()};hw.prototype.renderInternal=hw.prototype.$;
hw.prototype.a=function(){var a=this.K(),b=this.b;b.callback?(this.Ma("clickable"),a.setAttribute("tabindex","0")):(this.rb("clickable"),a.removeAttribute("tabindex"));b.isDisabled()?this.Ma("disabled"):this.rb("disabled");b=b.getLabel();Gu.textContent=b;a.innerHTML=Gu.innerHTML.split("\n").join("<br/>")};hw.prototype.s=function(){Z.prototype.s.call(this);this.b.removeEventListener("update",this.a)};function iw(a){C(a,Array,iw,1);dv.call(this,"div","H_context_menu");this.f=a;this.b=null}u(iw,dv);t("H.ui.context.Menu",iw);iw.prototype.$=function(){dv.prototype.$.apply(this,arguments);this.f.forEach(function(a){a===Re?a=new Z("div","H_context_menu_item_separator"):(a=new hw(a),a.addEventListener("click",this.g.bind(this)));this.La(a)},this);Ce(this.K(),["mousedown","touchstart","pointerdown","wheel"],function(a){a.stopPropagation()})};iw.prototype.renderInternal=iw.prototype.$;
iw.prototype.setPosition=function(a,b){if(this.b){var c=this.K();var d=c.offsetWidth;var e=c.offsetHeight;var f=this.b;var g=f.c.width;f=f.c.height;a+d>g&&a>g/2&&(a-=d);b+e>f&&b>f/2&&(b-=e);zu(c,a,b)}};iw.prototype.setPosition=iw.prototype.setPosition;iw.prototype.g=function(){this.b&&this.b.dispatchEvent(new sd("contextmenuclose",this.b))};iw.prototype.Ka=function(a){this.b=a};iw.prototype.setMap=iw.prototype.Ka;function jw(a,b){b=b||{};var c=this;Z.call(this,"div","H_ib H_ib_top");this.B=A(function(d){c.kc()||(c.close(),d.preventDefault())},this);this.update=A(this.update,this);this.g=A(this.g,this);this.setPosition(a);this.xf(b.content);b.onStateChange&&this.addEventListener("statechange",b.onStateChange);this.N(kw.OPEN)}u(jw,Z);t("H.ui.InfoBubble",jw);jw.prototype.a=null;jw.prototype.Ba=function(){return this.b};jw.prototype.setPosition=function(a){this.b=$f(a);this.update()};
jw.prototype.setPosition=jw.prototype.setPosition;jw.prototype.Ka=function(a){this.a=a};
jw.prototype.$=function(a,b){this.o=Mu(b,"div","H_ib_body");this.tailEl_=Mu(b,"div","H_ib_tail");this.i=Mu(b,"div","H_ib_close H_btn",'<svg version="1.1" class="H_icon" viewBox="0 0 12 12"><path d="m8.12 6 3.66-3.66c.29-.29.29-.76 0-1.05l-1.06-1.06c-.29-.29-.76-.29-1.05 0l-3.66 3.66-3.66-3.66c-.29-.29-.76-.29-1.05 0l-1.06 1.06c-.29.29-.3.76 0 1.05l3.66 3.66-3.66 3.66c-.29.29-.29.76 0 1.05l1.06 1.06c.29.29.76.29 1.05 0l3.66-3.66 3.66 3.66c.29.29.76.29 1.05 0l1.06-1.06c.29-.29.3-.76 0-1.05z"></path></svg>');this.f=
Mu(b,"div","H_ib_content","&nbsp;");this.o.appendChild(this.i);this.o.appendChild(this.f);Pu(this.i,"start",this.B);this.a.b.addEventListener("sync",this.update);this.a.c.addEventListener("sync",this.update);this.a.addEventListener("enginechange",this.g);a.appendChild(this.o);a.appendChild(this.tailEl_);this.xf(this.j)};jw.prototype.renderInternal=jw.prototype.$;jw.prototype.g=function(){this.u||(this.u=setTimeout(this.update,0))};
jw.prototype.update=function(){var a=this.K(),b=this.a,c,d="none";this.u=0;if(b&&a&&this.getState()===kw.OPEN){if(c=b.Ga(this.b)){var e=c.x;c=c.y;b=b.c.width;if(e>=-b||e<=2*b||c>=-b||c<=2*b)d="",Au?(a.style.left=e-b+"px",a.style.top=c+"px"):zu(a,e,c)}a.style.display=d;""===d&&(a.style.visibility="visible")}};var kw={OPEN:"open",CLOSED:"closed"};jw.State=kw;jw.prototype.m=kw.OPEN;jw.prototype.getState=function(){return this.m};jw.prototype.getState=jw.prototype.getState;
jw.prototype.N=function(a){a!==this.m&&(this.m=a,this.dispatchEvent("statechange"));if(a=this.K())this.m===kw.OPEN?(a.style.display="block",a.style.visibility="hidden",this.g()):a.style.display="none"};jw.prototype.setState=jw.prototype.N;jw.prototype.close=function(){this.N(kw.CLOSED)};jw.prototype.close=jw.prototype.close;jw.prototype.open=function(){this.N(kw.OPEN)};jw.prototype.open=jw.prototype.open;jw.prototype.Mm=function(){return this.f||null};jw.prototype.getContentElement=jw.prototype.Mm;
jw.prototype.xf=function(a){if(a)if("string"===typeof a||"number"===typeof a.nodeType&&"string"===typeof a.nodeName)this.j=a;else throw Error("InfoBubble content must be a string or HTML node.");else this.j="";this.K()&&(this.j?(this.f.innerHTML="","string"===typeof this.j?this.f.innerHTML=a:"number"===typeof a.nodeType&&"string"===typeof a.nodeName&&this.f.appendChild(a)):this.f.innerHTML="&nbsp;",this.g())};jw.prototype.setContent=jw.prototype.xf;
jw.prototype.s=function(){this.close();this.xf("");this.i&&Qu(this.i,"end",this.B);this.a&&(this.a.b.removeEventListener("sync",this.update),this.a.c.removeEventListener("sync",this.update));Z.prototype.s.call(this)};function lw(a){this.c=a;this.a=this.b=null;this.i=0;this.g=22;this.f=A(this.f,this);a=this.c.hc();a.addEventListener("mapviewchange",this.o,!1,this);a=a.a;a.addEventListener("add",this.j,!1,this);a.addEventListener("remove",this.m,!1,this)}function mw(a,b){a.b&&b&&a.b===b.ga()||(a.b&&a.b.removeEventListener("tap",a.f),b?(a.b=b.ga(),a.b.addEventListener("tap",a.f),a.i=a.b.min,a.g=a.b.max):(a.b=null,a.i=0,a.g=22))}
lw.prototype.o=function(a){var b=a.newValue.zoom;this.a&&a.modifiers&a.ZOOM&&(b<this.i||b>this.g)&&this.a.close()};lw.prototype.j=function(a){a=a.added;nw(a)&&mw(this,a)};lw.prototype.m=function(a){nw(a.removed)&&(this.a&&this.a.close(),mw(this,null))};function nw(a){return window.H.service&&a.ga()instanceof window.H.service.traffic.incidents.Provider}
lw.prototype.f=function(a){var b;if(a.target&&(b=a.target.getData())&&0===a.currentPointer.button){var c=a.target.ea();this.a||(this.a=new jw(c),this.a.Ma("H_tib"),this.c.yj(this.a));this.a.setPosition(c);c=b.TRAFFIC_ITEM_TYPE_DESC.replace(" ","_");this.c.Aa().Nh("traffic."+c)?c=this.c.Aa().translate("traffic."+c):c=b.TRAFFIC_ITEM_DESCRIPTION[b.TRAFFIC_ITEM_DESCRIPTION.length-1].value;this.a.xf('<div class="H_tib_content"><div class="H_rdo_title" dir="auto">{{title}}</div><div class="H_tib_desc" dir="auto"><span>{{desc}}</span><div class="H_tib_time"><span class="H_tib_left">{{traffic.from}}</span><span class="H_tib_right">{{from}}</span><br/><span class="H_tib_left">{{traffic.until}}</span><span class="H_tib_right">{{until}}</span></div></div>'.replace("{{title}}",
c).replace("{{desc}}",b.TRAFFIC_ITEM_DESCRIPTION[0].value).replace("{{traffic.from}}",this.c.Aa().translate("traffic.from")).replace("{{traffic.until}}",this.c.Aa().translate("traffic.until")).replace("{{from}}",b.START_TIME).replace("{{until}}",b.END_TIME));this.a.open()}a.stopPropagation()};function ow(a,b){var c=a.K(),d=this;F.call(this);this.c=a;this.i=c.ownerDocument;this.f={};this.b=[];new lw(this);this.P=Mu(this.i,"div","H_ui");this.setDirection();this.L=A(function(e){this.o.put(e.target,e.target.Wc)},this);this.addEventListener("alignmentchange",this.L);this.R=A(function(){this.Sl()},this);this.addEventListener("toggleunitsystem",this.R);this.P.addEventListener("contextmenu",this.A,!1);this.P.addEventListener("MSHoldVisual",this.A,!1);this.c.addEventListener("contextmenu",
this.B,!1,this);this.c.addEventListener("contextmenuclose",this.u,!1,this);this.c.yb(this.C.bind(this));this.a=null;this.m=-1;this.o=new hv(this.P,this.i);this.g=sv.METRIC;pw(this,"en-US");b&&qw(this,b);c.appendChild(this.P);x.setTimeout(function(){d.o.update()},1)}u(ow,F);t("H.ui.UI",ow);ow.prototype.A=function(a){for(var b=a.target;b&&!/\bH_ib_content\b/.test(b.className);)b=b.parentNode;b||a.preventDefault()};ow.prototype.K=function(){return this.P};ow.prototype.getElement=ow.prototype.K;
ow.prototype.hc=function(){return this.c};ow.prototype.getMap=ow.prototype.hc;ow.prototype.Tn=function(){return this.g};ow.prototype.getUnitSystem=ow.prototype.Tn;ow.prototype.Mg=function(a){var b=this.f,c;if(a!==this.g)for(c in this.g=a,b)if(b[c]instanceof ev)b[c].onUnitSystemChange(this.g)};ow.prototype.setUnitSystem=ow.prototype.Mg;ow.prototype.setDirection=function(a){this.P.setAttribute("dir",a||getComputedStyle(this.hc().K()).direction)};ow.prototype.setDirection=ow.prototype.setDirection;
function pw(a,b){if(Ac(b))var c=b;else if(b instanceof fw){c=b.b;var d=b}else throw Error("The locale parameter must be a string or a H.ui.i18n.Localization object.");if(c)if(d)a.j=d;else if(0<=$v.indexOf(c))a.j=new fw(c);else throw Error("Locale ["+c+"] is not supported.");else throw Error("No locale was defined.");}ow.prototype.Aa=function(){return this.j};ow.prototype.Sl=function(){this.g===sv.METRIC?this.Mg(sv.IMPERIAL):this.Mg(sv.METRIC)};ow.prototype.toggleUnitSystem=ow.prototype.Sl;
ow.prototype.yj=function(a){var b=this.b.length,c=this.P;if(0>this.b.indexOf(a)){a.ka(this);a.Ka(this.c);var d=a.V(this.i);b=0<b?this.b[b-1].K().nextSibling:this.P.firstChild;c.insertBefore(d,b);this.b.push(a)}};ow.prototype.addBubble=ow.prototype.yj;
ow.prototype.B=function(a){var b=a.items;this.a&&this.u();clearTimeout(this.m);this.m=x.setTimeout(function(){b.length&&(this.a=new iw(b),this.P.insertBefore(this.a.V(this.i),this.P.firstChild),this.a.ka(this),this.a.Ka(this.c),this.a.setPosition(a.viewportX,a.viewportY))}.bind(this),0)};ow.prototype.u=function(){this.a&&(this.a.C(),this.a=null)};ow.prototype.So=function(a){var b=this.b.indexOf(a);-1<b&&(a.ka(null),a.Ka(null),this.b.splice(b,1),this.P.removeChild(a.K()))};
ow.prototype.removeBubble=ow.prototype.So;ow.prototype.Im=function(){return this.b};ow.prototype.getBubbles=ow.prototype.Im;ow.prototype.Qd=function(a,b){if(this.Xe(a))throw Error("A control with name ["+a+"] is already registered.");b.ka(this);b.Ka(this.c);b.Ea=this.j;b.V(this.i);b.onUnitSystemChange(this.g);this.f[a]=b};ow.prototype.addControl=ow.prototype.Qd;
ow.prototype.Uo=function(a){var b=this.Xe(a);if(b)b.R(),b.ka(null),b.Ka(null),Ru(b),delete this.f[a];else throw Error("Control ["+a+"] not found in this UI's controls.");return b};ow.prototype.removeControl=ow.prototype.Uo;ow.prototype.Xe=function(a){return this.f[a]};ow.prototype.getControl=ow.prototype.Xe;
ow.prototype.s=function(){for(var a in this.f)xu.hasOwnProperty.call(this.f,a)&&this.f[a].C();this.b.forEach(function(b){b.C()});(a=this.P.parentNode)&&a.removeChild(this.P);F.prototype.s.call(this);delete this.P};
function qw(a,b){var c,d;b.unitSystem&&a.Mg(b.unitSystem);(d=b.locale)&&pw(a,d);(c=b.zoom)&&a.Qd("zoom",new fv(Ea(c)?c:null));(c=b.zoomrectangle)&&a.Qd("zoomrectangle",new ew(Ea(c)?c:null));(c=b.mapsettings)&&a.Qd("mapsettings",new Sv(Ea(c)?c:null));(c=b.scalebar)&&a.Qd("scalebar",new gw(Ea(c)?c:null));(c=b.distancemeasurement)&&a.Qd("distancemeasurement",new Kv(Ea(c)?c:null))}
ow.prototype.capture=function(a,b,c,d){var e=this.Xe("scalebar"),f=a.getContext("2d"),g=a.width,h=a.height,k=this.c.o,l=5+(k?k.K().childNodes[1].offsetHeight:0);e&&e.Bc()?e.capture(b,function(m){f.drawImage(m,g-m.width-5*b,h-m.height-l*b);c(a)},d):c(a)};ow.prototype.capture=ow.prototype.capture;
ow.createDefault=function(a,b,c){var d=a.gc().type;c=new ow(a,{unitSystem:sv.METRIC,zoom:{alignment:"right-bottom"},mapsettings:rw(d,b,a.f),scalebar:{alignment:"bottom-right"},locale:c||"en-US"});if(d===ek.P2D){var e=c.Xe("mapsettings");var f=function(){if(e.hc()){var g=rw(d,b,a.f);Tv(e,g.baseLayers,g.layers)}};a.addEventListener(a.v.If,f);c.yb(function(){a.removeEventListener(a.v.If,f)});e.yb(function(){a.removeEventListener(a.v.If,f)})}return c};
function rw(a,b,c){var d=b.raster;b=b.vector.normal;var e;if(a===ek.P2D){a=[{label:"layers.normal",layer:d.normal.map},{label:"layers.satellite",layer:d.satellite.map},{label:"layers.terrain",layer:d.terrain.map}];if(c)for(e in d)if(d[e].map===c){var f=e;break}c=[{label:"layer.incidents",layer:d.normal.trafficincidents},{label:"layer.transit",layer:f&&d[f].transit}]}else a=[{label:"layers.normal",layer:b.map},{label:"layers.satellite",layer:d.satellite.map}],c=[{label:"layer.traffic",layer:b.traffic},
{label:"layer.incidents",layer:b.trafficincidents}];return{alignment:"bottom-right",baseLayers:a,layers:c}};function sw(a,b){b=b||{};if(!(a&&a instanceof tl))throw Error("Base layer is mandatory for overview UI element");ev.call(this);this.f=new uv({label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="H_icon"><g fill-rule="evenodd" transform="translate(2 2)"><rect width="9" height="9" x="10" y="10"/><rect class="H_icon_stroke" width="18" height="18" x="1" y="1" fill="none" stroke="#000" stroke-width="2" rx="2"/></g></svg>',onStateChange:A(this.g,this)});this.La(this.f);this.b=
new tw(a,b.zoomDelta,b.scaleX,b.scaleY);this.Zb(b.alignment||"right-bottom");this.La(this.b)}u(sw,ev);t("H.ui.Overview",sw);sw.prototype.Md=function(a){this.b.Md(a);return this};sw.prototype.setBaseLayer=sw.prototype.Md;sw.prototype.g=function(a){a.target.getState()===Tu.DOWN?(a=this.b,uw(a,!0),a.aj(),a.Ma("H_overview_active"),a.b.addEventListener("mapviewchange",a.aj,!1,a)):vw(this.b)};
sw.prototype.$=function(a,b){ev.prototype.renderInternal.call(this,a,b);this.f.K().style["float"]=this.Wc.match("right")?"right":"left";this.b.Ka(this.map);this.f.qc(this.Aa().translate("minimap"))};sw.prototype.renderInternal=sw.prototype.$;sw.prototype.s=function(){this.b.C();Z.prototype.s.call(this)};function tw(a,b,c,d){this.j=a;"number"===typeof b&&(this.Vl=b);"number"===typeof c&&(this.Zk=c);"number"===typeof d&&(this.$k=d);dv.call(this,"div","H_overview")}u(tw,ev);tw.prototype.Md=function(a){this.f.Md(a)};
tw.prototype.$=function(a,b){b=Mu(b,"div","H_overview_map");Nu(a,b);this.g=b};tw.prototype.renderInternal=tw.prototype.$;n=tw.prototype;n.Vl=3;n.Zk=5;n.$k=5;n.Ka=function(a){this.b=a;this.f=new T(this.g,this.j,{pixelRatio:this.b.ab(),engineType:this.b.gc().type});this.f.o.K().style.display="none";this.m=this.f.b;this.i=this.b.b};function vw(a){!a.Pd&&uw(a);a.rb("H_overview_active");a.b.removeEventListener("mapviewchange",a.aj,!1,a)}
n.aj=function(a){a&&a.modifiers&a.SIZE&&uw(this,!0);a=this.i.nb();a.zoom-=this.Vl;this.m.$b(a)};function uw(a,b){var c=a.b.c.element,d=a.K().style,e=c.offsetWidth/a.Zk/10;c=c.offsetHeight/a.$k/10;var f=a.g.style;b?(d.width=e+"em",d.height=c+"em",f.width=e+"em",f.height=c+"em"):d.width=d.height="0em";a.f.c.resize()}n.s=function(){tw.l.s.call(this);vw(this);this.f.C();this.f=this.m=this.i=this.b=this.j=this.g=null};t("H.ui.buildInfo",function(){return Ff("H-ui","1.30.8","51a0cf5")});

H.__bootstrap__="var l,aa=\"function\"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca=\"undefined\"!=typeof window&&window===this?this:\"undefined\"!=typeof global&&null!=global?global:this;function da(a,b){if(b){var c=ca;a=a.split(\".\");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}var fa;\nif(\"function\"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={hb:!0},ka={};try{ka.__proto__=ia;ha=ka.hb;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+\" is not extensible\");return a}:null}var la=fa;da(\"Object.setPrototypeOf\",function(a){return a||la});var p=this||self;\nfunction ma(a,b,c){a=a.split(\".\");c=c||p;a[0]in c||\"undefined\"==typeof c.execScript||c.execScript(\"var \"+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function na(){}\nfunction oa(a){var b=typeof a;if(\"object\"==b)if(a){if(a instanceof Array)return\"array\";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(\"[object Window]\"==c)return\"object\";if(\"[object Array]\"==c||\"number\"==typeof a.length&&\"undefined\"!=typeof a.splice&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"splice\"))return\"array\";if(\"[object Function]\"==c||\"undefined\"!=typeof a.call&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"call\"))return\"function\"}else return\"null\";\nelse if(\"function\"==b&&\"undefined\"==typeof a.call)return\"object\";return b}function r(a){return\"function\"==oa(a)}function qa(a){var b=typeof a;return\"object\"==b&&null!=a||\"function\"==b}var ra=\"closure_uid_\"+(1E9*Math.random()>>>0),sa=0;function ta(a,b,c){return a.call.apply(a.bind,arguments)}\nfunction ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?va=ta:va=ua;return va.apply(null,arguments)}\nfunction wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){ma(a,b,void 0)}function xa(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a};function x(){}t(\"H.util.ICache\",x);x.prototype.add=function(){};x.prototype.add=x.prototype.add;x.prototype.get=function(){};x.prototype.get=x.prototype.get;x.prototype.sa=function(){};x.prototype.drop=x.prototype.sa;x.prototype.forEach=function(){};x.prototype.forEach=x.prototype.forEach;x.prototype.U=function(){};x.prototype.removeAll=x.prototype.U;x.prototype.ca=function(){};x.prototype.registerOnDrop=x.prototype.ca;x.prototype.qa=function(){};x.prototype.deRegisterOnDrop=x.prototype.qa;function ya(){var a=za,b;for(b in a)return!1;return!0}function Aa(a){var b={},c;for(c in a)b[c]=a[c];return b}var Ba=\"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function Ca(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ba.length;f++)c=Ba[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var y=this;function Da(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}xa(Da,Error);Da.prototype.name=\"CustomError\";var Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(\"string\"===typeof a)return\"string\"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Fa=va,Ga=String,Ha=y.Object.freeze||function(a){return a},z=[].pop(),Ia=/x/.exec(\"\");function La(a){return Ga(a).split(\",\"!==z?\",\":\" \")}var Ma=\"prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function Na(a,b,c,d){if(!(b=a instanceof b)&&c)throw new A(c,d,void 0!==z?void 0:a);return b}function Oa(a,b,c,d){var e;if(!(e=\"Array\"===Pa(a))&&b)throw new A(b,c,d!==z?d:a);return e}\nt(\"H.lang.isArray\",function(a,b,c,d){return Oa(a,b,c,d)});function Qa(a){return\"string\"===typeof a}t(\"H.lang.isString\",Qa);var Ra=isNaN;function Sa(a){return a===+a}t(\"H.lang.isNumber\",Sa);t(\"H.lang.isInteger\",Number.isInteger?Number.isInteger:function(a){return\"number\"===typeof a&&0===a%1});function Pa(a){var b=Object[Ma[0]][Ma[6]].call(a).match(/^\\[object (\\w+)\\]$/);return b?b[1]:typeof a}var Ta=[];0>Ta.indexOf(Ta)&&Ta.push(Ta);\nfunction Ua(a,b,c,d){var e=\"\",f=2>arguments.length,g;f&&(b={H:y.H},c=\"\",d=Ta.slice());Va(b,!0,function(h,k){try{if(g=h[k],k=Wa(h,g),!(qa(g)&&g.window===g&&g.self===g||qa(g)&&0<g.nodeType&&r(g.cloneNode))&&qa(g)){if(g===a)return e=c+\".\"+k,!0;if(0>d.indexOf(g)&&(d.push(g),e=Ua(a,g,c+\".\"+k,d)))return!0}}catch(m){}});f&&(e=e?e.substr(1).replace(\".\"+Ma[0]+\".\",\"#\"):\"~\"+(r(a)?Xa(a)+\"()\":Pa(a)));return e}\nfunction Wa(a,b){var c=[];Va(a,!1,function(d,e){d[e]===b&&c.push(e)});return c.sort(Ya)[0]}function Ya(a,b){return b.length-a.length}var Za=Object[Ma[0]][Ma[2]];function Va(a,b,c){var d;if(a){for(e in a)if((!b||Za.call(a,e))&&c(a,e,!0))return;for(d=Ma.length;d--;){var e=Ma[d];if((!b||Za.call(a,e))&&c(a,e,!1))break}}}function Xa(a){return(a=/^\\s*function ([^\\( ]+)/.exec(a))?a[1]:\"anonymous\"}function $a(a,b,c){c[b]=\"#\"+b};function B(a,b,c){this.g=[];b&&this.ca(b);if(c&&!r(c))throw new A(B,2,c);this.b=0;this.filter=c;this.a={};this.f=this.c=null;this.Ia(a)}t(\"H.util.Cache\",B);B.prototype.add=function(a,b,c){var d,e;c=+c;if(!Sa(c)||0>c)throw new A(this.add,2,c);a=String(a);if(e=this.filter?this.filter(a,b,c):!0)(d=this.a[a])?(d.data!==b&&db(this,d),this.b+=c-d.size,d.size=c,d.data=b,eb(this,d)):this.a[a]=fb(this,{id:a,data:b,size:c,A:null,F:null},this.c),gb(this);return e};B.prototype.add=B.prototype.add;\nB.prototype.ca=function(a){if(!r(a))throw new A(this.ca,0,a);this.g.push(a)};B.prototype.registerOnDrop=B.prototype.ca;B.prototype.qa=function(a){this.g=this.g.filter(function(b){return b!==a})};B.prototype.deRegisterOnDrop=B.prototype.qa;B.prototype.get=function(a,b){return(a=b?this.a[a]:eb(this,this.a[a]))&&a.data};B.prototype.get=B.prototype.get;B.prototype.sa=function(a){var b;(b=this.a[a])&&hb(this,b,!0)};B.prototype.drop=B.prototype.sa;\nB.prototype.forEach=function(a,b,c){var d;for(d in this.a){var e=this.a[d];(c?c(d,e.data,e.size):1)&&a.call(b,d,e.data,e.size)}};B.prototype.forEach=B.prototype.forEach;B.prototype.U=function(a){var b;for(b in this.a){var c=this.a[b];(a?a(b,c.data,c.size):1)&&hb(this,this.a[b],!0)}};B.prototype.removeAll=B.prototype.U;B.prototype.Ia=function(a){if(!(0<+a))throw new A(B.prototype.Ia,0,a);this.o=+a;gb(this);return this};B.prototype.setMaxSize=B.prototype.Ia;B.prototype.Bb=function(){return this.o};\nB.prototype.getMaxSize=B.prototype.Bb;B.prototype.xb=function(){return this.b};B.prototype.getCurrentSize=B.prototype.xb;function eb(a,b){b&&(a.c=fb(a,b,a.c));return b}function gb(a){for(;a.b>a.o&&a.f;)hb(a,a.f,!0)}function fb(a,b,c){if(c!==b){(b.A||b.F)&&hb(a,b,!1);if(b.A=c)b.F=c.F,c.F=b;b.F||(a.c=b);b.A||(a.f=b);a.b+=b.size}return b}function hb(a,b,c){var d=b.F,e=b.A;if(d||e||b==a.c&&b==a.f)d?d.A=e:a.c=e,e?e.F=d:a.f=d,a.b-=b.size,c&&(delete a.a[b.id],db(a,b));b.A=b.F=null}\nfunction db(a,b){for(var c=a.g.length;c--;)a.g[c].call(a,b.id,b.data,b.size)};function C(){}t(\"H.service.extension.dataView.ITable\",C);C.prototype.ya=function(){};C.prototype.getMeta=C.prototype.ya;C.prototype.za=function(){};C.prototype.getRowCount=C.prototype.za;C.prototype.ja=function(){};C.prototype.getRow=C.prototype.ja;C.prototype.D=function(){};C.prototype.getColumnNames=C.prototype.D;C.prototype.xa=function(){};C.prototype.getColumn=C.prototype.xa;C.prototype.s=function(){};C.prototype.getCell=C.prototype.s;C.prototype.concat=function(){};C.prototype.concat=C.prototype.concat;function ib(){}t(\"H.service.extension.dataView.IRow\",ib);ib.prototype.D=function(){};ib.prototype.getColumnNames=ib.prototype.D;ib.prototype.s=function(){};ib.prototype.getCell=ib.prototype.s;ib.prototype.Aa=function(){};ib.prototype.getTable=ib.prototype.Aa;function jb(a,b){this.a=a;this.b=b}t(\"H.service.extension.dataView.ObjRow\",jb);jb.prototype.D=function(){return this.a.D()};jb.prototype.getColumnNames=jb.prototype.D;jb.prototype.s=function(a){return this.a.s(this.b,a)};jb.prototype.getCell=jb.prototype.s;jb.prototype.Aa=function(){return this.a};jb.prototype.getTable=jb.prototype.Aa;function kb(){}t(\"H.service.extension.dataView.IColumn\",kb);kb.prototype.s=function(){};kb.prototype.getCell=kb.prototype.s;function lb(a,b){this.b=a;this.a=b}t(\"H.service.extension.dataView.ObjColumn\",lb);lb.prototype.s=function(a){return this.b.s(a,this.a)};lb.prototype.getCell=lb.prototype.s;function A(a,b,c){var d=arguments.length;b=b!==z?+b:b;if(b!==z){var e=(e=/^.*?\\(([^\\)]+)/.exec((\"\"+a).replace(/(\\/\\*([\\s\\S]*?)\\*\\/)|(\\/\\/(.*)$)/gm,\"\")))?La(e[1].replace(/\\s+/g,\"\")):[];e.forEach($a);e=e[b]||\"#\"+b}var f=a?Ua(a):\"\";d=2<d?Ga(c):\"\";if(e||d)f+=\" (Argument \"+(e||\"\")+(d?\" \"+d:\"\")+\")\";d=Error(f);Object.setPrototypeOf(d,A.prototype);return d}xa(A,Error);t(\"H.lang.InvalidArgumentError\",A);A.prototype.name=\"InvalidArgumentError\";function D(a,b,c){var d;b=b||(a&&a.length?Object.keys(a[0]):z);this.G=a;if(b)for(this.O=b,this.pa=a=Object.create(Ia,void 0),d=b.length;d--;)a[b[d]]=!0;c!==z&&(this.Ca=c)}t(\"H.service.extension.dataView.ObjTable\",D);l=D.prototype;l.Ca=z;l.G=z;l.O=z;l.pa=z;l.ya=function(){return this.Ca};D.prototype.getMeta=D.prototype.ya;D.prototype.za=function(){return this.G?this.G.length:0};D.prototype.getRowCount=D.prototype.za;D.prototype.ja=function(a){var b=this.G;return b&&b[a]?new jb(this,a):z};\nD.prototype.getRow=D.prototype.ja;D.prototype.D=function(){return this.O||mb};D.prototype.getColumnNames=D.prototype.D;D.prototype.xa=function(a){return this.pa[a]?new lb(this,a):z};D.prototype.getColumn=D.prototype.xa;D.prototype.s=function(a,b){var c=this.G;return(a=c&&this.pa[b]&&c[a])&&a[b]};D.prototype.getCell=D.prototype.s;\nD.prototype.concat=function(){var a=arguments.length,b,c=this.O,d=\"\"+this.O,e=(this.G||[]).slice();for(b=0;b<a;b++){var f=arguments[b];if(!(f instanceof D))throw new A(this.concat,b);if(f.G){if(c&&\"\"+f.O!==d)throw new A(this.concat,b,\"Incompatible columns!\");e=e.concat(f.G)}}return new D(e,this.O,this.Ca)};D.prototype.concat=D.prototype.concat;function E(a,b){this.x=+a;this.y=+b}t(\"H.math.Point\",E);E.prototype.set=E;E.prototype.set=E.prototype.set;E.prototype.clone=function(a){a?(a.x=this.x,a.y=this.y):a=new E(this.x,this.y);return a};E.prototype.clone=E.prototype.clone;E.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};E.prototype.add=E.prototype.add;E.prototype.sub=function(a){this.x-=a.x;this.y-=a.y;return this};E.prototype.sub=E.prototype.sub;E.prototype.scale=function(a,b){this.x*=a;this.y*=void 0===b?a:b;return this};\nE.prototype.scale=E.prototype.scale;E.prototype.round=function(){this.x=nb(this.x);this.y=nb(this.y);return this};E.prototype.round=E.prototype.round;E.prototype.floor=function(){this.x=ob(this.x);this.y=ob(this.y);return this};E.prototype.floor=E.prototype.floor;E.prototype.ceil=function(){this.x=pb(this.x);this.y=pb(this.y);return this};E.prototype.ceil=E.prototype.ceil;E.prototype.I=function(a){return!(!a||this.x!==a.x||this.y!==a.y)};E.prototype.equals=E.prototype.I;\nE.prototype.Cb=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=a;if(c||d){var f=((this.x-a.x)*c+(this.y-a.y)*d)/(c*c+d*d);0>=f?e=a:1<=f?e=b:e=new E(a.x+f*c,a.y+f*d)}return e};E.prototype.getNearest=E.prototype.Cb;E.prototype.ra=function(a){return qb(rb(this.x-a.x,2)+rb(this.y-a.y,2))};E.prototype.distance=E.prototype.ra;E.fromIPoint=function(a){if(!a)throw Error(\"invalid argument\");return a instanceof E?a:new E(a.x,a.y)};var F=Math,sb=F.min,tb=F.max,nb=F.round,ob=F.floor,pb=F.ceil,ub=F.abs,vb=F.log,qb=F.sqrt,rb=F.pow,wb=F.exp,xb=F.sin,yb=F.asin,zb=F.cos,Ab=F.tan,Bb=F.atan,Cb=F.atan2,Db=F.LN2,I=F.PI,Eb=I/2,Gb=I/4,Hb=2*I,Ib=3*I,Jb=I/180,Kb=180/I,Lb=1/0;rb(-2,53);function Mb(a,b){var c;return 0>(c=a%b)===0>b?c:c+b}t(\"H.math.normalize\",function(a,b,c){b-=c=c||0;a-=c;return a-ob(a/b)*b+c});function Nb(a,b,c){return a>c?c:a<b?b:a}t(\"H.math.clamp\",Nb);function Ob(a,b,c){return b<c?a>=b&&a<=c:a>=c&&a<=b}\nfunction Pb(a,b,c,d,e,f){return qb(rb((a-e)*(d-f)-(b-f)*(c-e),2)/(rb(c-e,2)+rb(d-f,2)))}var Qb={NONE:0,VERTEX:1,EDGE:2,SURFACE:3};t(\"H.math.CoverType\",Qb);\nfunction Rb(a,b,c){for(var d=c.length,e=d,f,g,h,k,m=c[0],n=0,q=0,u=0;1!=n&&1<e;){g=c[--e];f=c[--e];k=c[e?e-1:(d+(e-1))%d];h=c[e?e-2:(d+(e-2))%d];if(f>=a&&f<=a&&g>=b&&g<=b||h>=a&&h<=a&&k>=b&&k<=b)n=1;else if(!n&&f===a)h===a&&(g<b&&k>b||g>b&&k<b)||(m<=a&&h>a||m>=a&&h<a)&&(g>=b?++q:++u),n=Ob(b,g,k)&&0>=Pb(a,b,f,g,h,k)?2:0;else if(!n&&Ob(a,f,h)){if(f<a&&h>a||f>a&&h<a)m=g+(a-f)/(h-f)*(k-g),q+=m>b,u+=m<b;n=Ob(b,g,k)&&0>=Pb(a,b,f,g,h,k)?2:0}m=f}!n&&0!==u&&0!==q%2&&(n=3);return n}\nfunction Sb(a,b){return Rb(a.x,a.y,b)!==Qb.NONE}t(\"H.math.isPointInsidePolygon\",Sb);function Tb(a){for(var b=a.length,c=new Float64Array(2*b),d=b&&a[0].x!==z;b--;){var e=a[b],f=b<<1;c[f]=d?e.x:e[0];c[f+1]=d?e.y:e[1]}return c}t(\"H.math.flatten\",Tb);function Ub(a,b,c,d,e,f){var g,h,k=a.length,m,n;if(k)for(g=[];k--;){var q=a[k];var u=q.length;var J=0;for(m=1;m<u;m++)if(n=Vb(q[m-1],q[m],c,b,d,e)){var M=n[0];var v=n[1];J&&J.I(M)?h.push(v):g.push(h=n);J=v;f&&(m=u,k=0)}}else g=a;return g}t(\"H.math.clipping.clipStrips\",Ub);\nfunction Vb(a,b,c,d,e,f){var g=a.x;a=-a.y;var h=b.x;b=-b.y;c=-c;f=-f;if(g>h){if(h>e||g<d)return;var k=g;var m=a;g=h;a=b;h=k;b=m;k=1}else if(g>e||h<d)return;if(a>b){if(b>c||a<f)return;var n=1;a=-a;b=-b;m=f;f=-c;c=-m}else if(a>c||b<f)return;if(g<d){if((a+=(d-g)*(b-a)/(h-g))>c)return;g=d}if(a<f){if((g+=(f-a)*(h-g)/(b-a))>e)return;a=f}h>e&&(b=a+(e-g)*(b-a)/(h-g),h=e);b>c&&(h=g+(c-a)*(h-g)/(b-a),b=c);n&&(a=-a,b=-b);return k?[new E(h,-b),new E(g,-a)]:[new E(g,-a),new E(h,-b)]}\nfunction Wb(a,b,c){a=Xb(a,!0);b=Xb(b,!1);var d,e;var f={};var g=d=1;switch(~~(c||0)){case 1:g=d=0;break;case 2:d=0;g=1;break;case 3:d=1,g=0}c=d;var h=g;if(b&&a){b.ia=Yb(b.x,b.y,null,Zb(b));a.ia=Yb(a.x,a.y,null,Zb(a));for(g=b;g.next;g=g.next)if(!g.C)for(d=a;d.next;d=d.next)if(!d.C){var k=$b(g.next);var m=$b(d.next);if(e=ac(g,k,d,m,f)){e=f.kb;var n=f.lb;var q=f.kc;var u=f.lc;e=Yb(q,u,null,null,null,null,!0,0,0,e);bc(e,g,k);k=Yb(q,u,null,null,null,null,!0,0,0,n);bc(k,d,m);e.Da=k;k.Da=e}}f=Sb(b,cc(a));\nc&&(f=!f);for(g=b;g;g=g.next)g.C&&(g.ta=f,f=!f);f=Sb(a,cc(b));h&&(f=!f);for(d=a;d.next;d=d.next)d.C&&(d.ta=f,f=!f);dc(b);for(dc(a);(a=ec(b))!=b;){for(c=null;!a.na;a=a.Da){for(f=a.ta;;){c=Yb(a.x,a.y,c);c.artificial=a.C||a.Ob;a.na=1;a=f?a.next:a.u;if(!a)break;if(a.C){a.na=1;break}}if(!a)break}c.Xa=J;var J=c}return J}}t(\"H.math.clipping.clipPolygon\",Wb);\nfunction Yb(a,b,c,d,e,f,g,h,k,m){a={x:a,y:b,next:c||null,u:d||null,Xa:e||null,Da:f||null,C:!!g,ta:h||0,na:k||0,alpha:m||0};d&&(a.u.next=a);c&&(a.next.u=a);return a}function $b(a){for(;a&&a.C;)a=a.next;return a}function Zb(a){if(a)for(;a.next;)a=a.next;return a}function ec(a){var b=a;if(b){do b=b.next;while(b!=a&&(!b.C||b.C&&b.na))}return b}function dc(a){var b=Zb(a);b.u.next=a;a.u=b.u}\nfunction ac(a,b,c,d,e){var f,g=b.x-a.x,h=b.y-a.y;var k=d.x-c.x;var m=d.y-c.y;var n=g*m-h*k;if(!n)return 0;k=((c.x-a.x)*m-(c.y-a.y)*k)/n;n=(h*(c.x-a.x)-g*(c.y-a.y))/n;if(0>k||1<k||0>n||1<n)return 0;0===k?f=a:1===k?f=b:0===n?f=c:1===n&&(f=d);if(f)return f.x+=2.480549651603763E-5,f.y+=7.321997314118067E-5,f.ia&&(f.ia.x=f.x,f.ia.y=f.y),ac(a,b,c,d,e);e.kc=a.x+k*g;e.lc=a.y+k*h;e.kb=k;e.lb=n;return 1}function cc(a){for(var b=[];a;)b.push(a.x,a.y),a=a.next;return b}\nfunction bc(a,b,c){for(b=b.next;b!==c&&b.alpha<=a.alpha;)b=b.next;a.next=b;a.u=b.u;a.next.u=a;a.u.next=a}function Xb(a,b){for(var c,d=null,e=0,f=a.length;e<f;e++){c=Yb(a[e].x,a[e].y,d);c.Ob=b;if(c.next=d)d.u=c;d=c}return d};function fc(a,b){var c=[];a&&c.push(Ua(a));1<arguments.length&&c.push(\"\"+b);c=Error(c.join(\" \"));Object.setPrototypeOf(c,fc.prototype);return c}xa(fc,Error);t(\"H.lang.IllegalOperationError\",fc);fc.prototype.name=\"IllegalOperationError\";function gc(){if(!Qa(\"STATIC_DB\"))throw new A(this.constructor,0);this.o=y.indexedDB||y.jc||y.Rb||y.Sb;if(!this.o)throw new fc(this.constructor,\"This browser does not support IndexedDB\");this.a=[];this.c=[];this.g=Fa(this.g,this)}var hc,ic;gc.prototype.get=function(a,b,c){var d;if(!Qa(a)&&!Sa(a))throw new A(this.get,0);if(!r(b))throw new A(this.get,1);jc(this,function(e){d=e.get(a);kc(d,b,c)},c);return{cancel:function(){d&&(d.onsuccess=lc)}}};\ngc.prototype.g=function(){var a=this.b.result;a.objectStoreNames.contains(\"data\")||a.createObjectStore(\"data\")};\nfunction mc(a,b,c){if(a.b)a.a?(a.a.push(b),c&&a.c.push(c)):a.f?c&&c(a.f):b(a.b.result);else{a.b=a.o.open(nc+\"STATIC_DB\",1);a.b.onupgradeneeded=a.g;var d=a.b.onerror=function(){clearTimeout(a.v);a.f=this.error;a.c.forEach(function(e){e(a.f)});a.a=a.c=null};a.v=setTimeout(function(){d.call({error:Error(\"DbOpenTimeoutError\")})},500);a.b.onsuccess=function(){clearTimeout(a.v);a.a?(a.a.forEach(function(e){e(this.result)},this),a.a=a.c=null):(a.b=a.f=null,a.a=[],a.c=[])};a.a.push(b);c&&a.c.push(c)}}\nfunction jc(a,b,c){mc(a,function(d){d=d.transaction([\"data\"],\"readwrite\");b(d.objectStore(\"data\"))},c)}function kc(a,b,c){b&&(a.onsuccess=function(){b(this.result)});c&&(a.onerror=function(){c(this.error)})}t(\"H.util.IndexedDBStorage.getInstance\",function(){hc||(hc=new gc);return hc});var nc=\"H_\";\nt(\"H.util.IndexedDBStorage.isSupported\",function(){var a=\"\";if(ic===z)if(\"file:\"===window.location.protocol&&-1<navigator.userAgent.toLowerCase().indexOf(\"firefox\")&&128<=window.location.href.length)ic=!1;else{try{var b=y.indexedDB||y.jc||y.Rb||y.Sb;a=nc+\"TEST_DB\";var c=b&&b.open(a,1)}catch(d){}ic=!!c&&null===c.onupgradeneeded;c&&b.deleteDatabase&&b.deleteDatabase(a)}return ic});function K(){0!=oc&&(pc[this[ra]||(this[ra]=++sa)]=this);this.c=this.c;this.a=this.a}var oc=0,pc={};K.prototype.c=!1;K.prototype.B=function(){if(!this.c&&(this.c=!0,this.P(),0!=oc)){var a=this[ra]||(this[ra]=++sa);if(0!=oc&&this.a&&0<this.a.length)throw Error(this+\" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.\");delete pc[a]}};\nK.prototype.N=function(a,b){this.c?void 0!==b?a.call(b):a():(this.a||(this.a=[]),this.a.push(void 0!==b?va(a,b):a))};K.prototype.P=function(){if(this.a)for(;this.a.length;)this.a.shift()()};function L(a,b){this.type=a;this.currentTarget=this.target=b;this.a=!1;this.Za=!0}L.prototype.stopPropagation=function(){this.a=!0};L.prototype.c=function(){this.Za=!1};t(\"H.util.Event\",L);L.prototype.stopPropagation=L.prototype.stopPropagation;L.prototype.stopPropagation=L.prototype.stopPropagation;L.prototype.CAPTURING_PHASE=1;L.prototype.CAPTURING_PHASE=L.prototype.CAPTURING_PHASE;L.prototype.AT_TARGET=2;L.prototype.AT_TARGET=L.prototype.AT_TARGET;L.prototype.BUBBLING_PHASE=3;L.prototype.BUBBLING_PHASE=L.prototype.BUBBLING_PHASE;L.prototype.eventPhase=0;L.prototype.eventPhase=L.prototype.eventPhase;function qc(a,b,c){qc.W.constructor.call(this,a,c);this.data=b}xa(qc,L);t(\"H.util.DataEvent\",qc);function rc(a,b,c){rc.W.constructor.call(this,a,c);this.message=b}xa(rc,L);t(\"H.util.ErrorEvent\",rc);function sc(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sc.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function tc(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function uc(){this.b=this.a=null}var wc=new sc(function(){return new vc},function(a){a.reset()});uc.prototype.add=function(a,b){var c=wc.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xc(){var a=yc,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function vc(){this.next=this.b=this.a=null}vc.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};vc.prototype.reset=function(){this.next=this.b=this.a=null};var Bc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(a)[1]};function Cc(a,b){return a<b?-1:a>b?1:0};var Dc;a:{var Ec=p.navigator;if(Ec){var Fc=Ec.userAgent;if(Fc){Dc=Fc;break a}}Dc=\"\"}function Gc(a){return-1!=Dc.indexOf(a)};function Hc(a,b){this.b=a===Ic&&b||\"\";this.a=Jc}var Jc={},Ic={},Kc=new Hc(Ic,\"\");function Lc(a,b){this.b=a===Mc&&b||\"\";this.a=Nc}var Nc={},Mc={};function Oc(){this.a=\"\";this.b=Pc}function Qc(){var a=Rc;if(a instanceof Oc&&a.constructor===Oc&&a.b===Pc)return a.a;oa(a);return\"type_error:SafeHtml\"}var Pc={};function Sc(a){var b=new Oc;b.a=a;return b}Sc(\"<!DOCTYPE html>\");var Rc=Sc(\"\");Sc(\"<br>\");function Tc(a){var b=new Lc(Mc,Kc instanceof Hc&&Kc.constructor===Hc&&Kc.a===Jc?Kc.b:\"type_error:Const\");b instanceof Lc&&b.constructor===Lc&&b.a===Nc?b=b.b:(oa(b),b=\"type_error:TrustedResourceUrl\");a.src=b.toString()};function Uc(a){Uc[\" \"](a);return a}Uc[\" \"]=na;var Vc=Gc(\"Opera\"),Wc=Gc(\"Trident\")||Gc(\"MSIE\"),Xc=Gc(\"Edge\"),Yc=Gc(\"Gecko\")&&!(-1!=Dc.toLowerCase().indexOf(\"webkit\")&&!Gc(\"Edge\"))&&!(Gc(\"Trident\")||Gc(\"MSIE\"))&&!Gc(\"Edge\"),Zc=-1!=Dc.toLowerCase().indexOf(\"webkit\")&&!Gc(\"Edge\");function $c(){var a=p.document;return a?a.documentMode:void 0}var ad;\na:{var bd=\"\",cd=function(){var a=Dc;if(Yc)return/rv:([^\\);]+)(\\)|;)/.exec(a);if(Xc)return/Edge\\/([\\d\\.]+)/.exec(a);if(Wc)return/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(a);if(Zc)return/WebKit\\/(\\S+)/.exec(a);if(Vc)return/(?:Version)[ \\/]?(\\S+)/.exec(a)}();cd&&(bd=cd?cd[1]:\"\");if(Wc){var dd=$c();if(null!=dd&&dd>parseFloat(bd)){ad=String(dd);break a}}ad=bd}var ed={},fd;fd=p.document&&Wc?$c():void 0;function gd(a){var b=document;a=String(a);\"application/xhtml+xml\"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function hd(a){p.setTimeout(function(){throw a;},0)}var id;\nfunction jd(){var a=p.MessageChannel;\"undefined\"===typeof a&&\"undefined\"!==typeof window&&window.postMessage&&window.addEventListener&&!Gc(\"Presto\")&&(a=function(){var e=gd(\"IFRAME\");e.style.display=\"none\";Tc(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Qc());e.close();var g=\"callImmediate\"+Math.random(),h=\"file:\"==f.location.protocol?\"*\":f.location.protocol+\"//\"+f.location.host;e=va(function(k){if((\"*\"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},\nthis);f.addEventListener(\"message\",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if(\"undefined\"!==typeof a&&!Gc(\"Trident\")&&!Gc(\"MSIE\")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Oa;c.Oa=null;e()}};return function(e){d.next={Oa:e};d=d.next;b.port2.postMessage(0)}}return\"undefined\"!==typeof document&&\"onreadystatechange\"in gd(\"SCRIPT\")?function(e){var f=gd(\"SCRIPT\");f.onreadystatechange=function(){f.onreadystatechange=null;\nf.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){p.setTimeout(e,0)}};function kd(a,b){ld||md();nd||(ld(),nd=!0);yc.add(a,b)}var ld;function md(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);ld=function(){a.then(od)}}else ld=function(){var b=od;!r(p.setImmediate)||p.Window&&p.Window.prototype&&!Gc(\"Edge\")&&p.Window.prototype.setImmediate==p.setImmediate?(id||(id=jd()),id(b)):p.setImmediate(b)}}var nd=!1,yc=new uc;function od(){for(var a;a=xc();){try{a.a.call(a.b)}catch(b){hd(b)}tc(wc,a)}nd=!1};function pd(a){this.a=qd;this.v=void 0;this.f=this.b=this.c=null;this.g=this.o=!1;if(a!=na)try{var b=this;a.call(void 0,function(c){rd(b,sd,c)},function(c){rd(b,td,c)})}catch(c){rd(this,td,c)}}var qd=0,sd=2,td=3;function ud(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}ud.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var vd=new sc(function(){return new ud},function(a){a.reset()});function wd(a,b,c){var d=vd.get();d.f=a;d.b=b;d.c=c;return d}\nfunction xd(a,b,c){yd(a,b,c,null)||kd(wa(b,a))}function zd(a){return new pd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,n){d--;e[m]=n;0==d&&b(e)},g=function(m){c(m)},h=0,k;h<a.length;h++)k=a[h],xd(k,wa(f,h),g);else b(e)})}function Ad(){var a,b,c=new pd(function(d,e){a=d;b=e});return new Bd(c,a,b)}pd.prototype.then=function(a,b,c){return Cd(this,r(a)?a:null,r(b)?b:null,c)};pd.prototype.$goog_Thenable=!0;\npd.prototype.cancel=function(a){if(this.a==qd){var b=new Dd(a);kd(function(){Ed(this,b)},this)}};function Ed(a,b){if(a.a==qd)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==qd&&1==d?Ed(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Fd(c),Gd(c,e,td,b)))}a.c=null}else rd(a,td,b)}function Hd(a,b){a.b||a.a!=sd&&a.a!=td||Id(a);a.f?a.f.next=b:a.b=b;a.f=b}\nfunction Cd(a,b,c,d){var e=wd(null,null,null);e.a=new pd(function(f,g){e.f=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.b=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Dd?g(h):f(k)}catch(m){g(m)}}:g});e.a.c=a;Hd(a,e);return e.a}pd.prototype.Ea=function(a){this.a=qd;rd(this,sd,a)};pd.prototype.Ga=function(a){this.a=qd;rd(this,td,a)};\nfunction rd(a,b,c){a.a==qd&&(a===c&&(b=td,c=new TypeError(\"Promise cannot resolve to itself\")),a.a=1,yd(c,a.Ea,a.Ga,a)||(a.v=c,a.a=b,a.c=null,Id(a),b!=td||c instanceof Dd||Jd(a,c)))}function yd(a,b,c,d){if(a instanceof pd)return Hd(a,wd(b||na,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(qa(a))try{var f=a.then;if(r(f))return Kd(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}\nfunction Kd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function Id(a){a.o||(a.o=!0,kd(a.T,a))}function Fd(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}pd.prototype.T=function(){for(var a;a=Fd(this);)Gd(this,a,this.a,this.v);this.o=!1};\nfunction Gd(a,b,c,d){if(c==td&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Ld(b,c,d);else try{b.g?b.f.call(b.c):Ld(b,c,d)}catch(e){Md.call(null,e)}tc(vd,b)}function Ld(a,b,c){b==sd?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function Jd(a,b){a.g=!0;kd(function(){a.g&&Md.call(null,b)})}var Md=hd;function Dd(a){Da.call(this,a)}xa(Dd,Da);Dd.prototype.name=\"cancel\";function Bd(a,b,c){this.a=a;this.b=b;this.reject=c};function Nd(a,b,c){this.type=a;this.data=b;this.a=Ad();this.Va=Fa(this.Va,this);this.reject=Fa(this.reject,this);this.priority=Od;c!==z&&(this.priority=c);this.b().add(this)}var Od=1,Pd={nc:0,oc:Od,mc:2};l=Nd.prototype;l.then=function(a,b,c){return this.a.a.then(a,b,c)};l.Va=function(a){this.$=3;this.a.b(a)};l.reject=function(a){this.$=5;this.a.reject(a)};l.$=0;\nl.cancel=function(){if(3>this.$){this.c();var a=this.b(),b=this.priority,c=a.a[b].indexOf(this);-1<c?a.a[b].splice(c,1):this.Na&&a.ea.ob(this.Na);this.$=4}};function Qd(a){var b;this.a={};for(b in Pd)this.a[Pd[b]]=[];this.ea=a;this.ea.addEventListener(\"allocatable\",Fa(this.b,this))}t(\"H.util.JobManager\",Qd);var Rd=Object.keys(Pd).map(function(a){return Pd[a]}).sort().reverse();Qd.prototype.add=function(a){Na(a,Nd,this.add,0);this.a[a.priority].push(a);this.b()};Qd.prototype.contains=function(a){return-1<this.a[a.priority].indexOf(a)};\nQd.prototype.b=function(){Rd.forEach(function(a){this.a[a]=this.a[a].filter(function(b){var c;if((c=this.ea.pc(b))!==Ia){var d=Fa(this.ea.ob,this.ea,c,b);b.Na=c;b.then(d,d);b.$=b.qc(c)?1:5}else return!0},this)},this)};function Sd(a,b,c){var d=[],e=arguments.length;a&&d.push(Ua(a));1<e&&(e=2<e&&Oa(c,void 0,void 0,void 0)?\" out of [\"+c[0]+\"...\"+c[1]+\"]\":\"\",d.push(\"(\"+b+e+\")\"));d=Error(d.join(\" \"));Object.setPrototypeOf(d,Sd.prototype);return d}xa(Sd,Error);t(\"H.lang.OutOfRangeError\",Sd);Sd.prototype.name=\"OutOfRangeError\";var Td=\"closure_listenable_\"+(1E6*Math.random()|0),Ud=0;function Vd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++Ud;this.V=this.fa=!1}function Wd(a){a.V=!0;a.listener=null;a.proxy=null;a.src=null;a.ka=null};function Xd(a){this.src=a;this.a={};this.b=0}Xd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Yd(a,b,d,e);-1<g?(b=a[g],c||(b.fa=!1)):(b=new Vd(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};function Zd(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Ea(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Wd(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}\nXd.prototype.U=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,Wd(d[e]);delete this.a[c];this.b--}return b};function Yd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1};var $d;($d=!Wc)||($d=9<=Number(fd));var ae=$d,be;\nif(be=Wc){var ce;if(Object.prototype.hasOwnProperty.call(ed,\"9\"))ce=ed[\"9\"];else{for(var de=0,ee=Bc(String(ad)).split(\".\"),fe=Bc(\"9\").split(\".\"),ge=Math.max(ee.length,fe.length),he=0;0==de&&he<ge;he++){var ie=ee[he]||\"\",je=fe[he]||\"\";do{var ke=/(\\d*)(\\D*)(.*)/.exec(ie)||[\"\",\"\",\"\",\"\"],le=/(\\d*)(\\D*)(.*)/.exec(je)||[\"\",\"\",\"\",\"\"];if(0==ke[0].length&&0==le[0].length)break;de=Cc(0==ke[1].length?0:parseInt(ke[1],10),0==le[1].length?0:parseInt(le[1],10))||Cc(0==ke[2].length,0==le[2].length)||Cc(ke[2],le[2]);\nie=ke[3];je=le[3]}while(0==de)}ce=ed[\"9\"]=0<=de}be=!ce}var me=be,ne=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},\"passive\",{get:function(){a=!0}});try{p.addEventListener(\"test\",na,b),p.removeEventListener(\"test\",na,b)}catch(c){}return a}();function oe(a,b){L.call(this,a?a.type:\"\");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key=\"\";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType=\"\";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(Yc){a:{try{Uc(b.nodeName);var e=!0;break a}catch(f){}e=\n!1}e||(b=null)}}else\"mouseover\"==c?b=a.fromElement:\"mouseout\"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||\"\";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=\na.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=\"string\"===typeof a.pointerType?a.pointerType:pe[a.pointerType]||\"\";this.b=a;a.defaultPrevented&&this.c()}}xa(oe,L);var pe={2:\"touch\",3:\"pen\",4:\"mouse\"};oe.prototype.stopPropagation=function(){oe.W.stopPropagation.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};\noe.prototype.c=function(){oe.W.c.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,me)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qe=\"closure_lm_\"+(1E6*Math.random()|0),re={},se=0;function te(a,b,c,d,e){if(d&&d.once)ue(a,b,c,d,e);else if(\"array\"==oa(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else c=ve(c),a&&a[Td]?a.b.add(String(b),c,!1,qa(d)?!!d.capture:!!d,e):we(a,b,c,!1,d,e)}\nfunction we(a,b,c,d,e,f){if(!b)throw Error(\"Invalid event type\");var g=qa(e)?!!e.capture:!!e,h=xe(a);h||(a[qe]=h=new Xd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ye();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ne||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ze(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error(\"addEventListener and attachEvent are unavailable.\");se++}}\nfunction ye(){var a=Ae,b=ae?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ue(a,b,c,d,e){if(\"array\"==oa(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else c=ve(c),a&&a[Td]?a.b.add(String(b),c,!0,qa(d)?!!d.capture:!!d,e):we(a,b,c,!0,d,e)}\nfunction Ce(a,b,c,d,e){if(\"array\"==oa(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else(d=qa(d)?!!d.capture:!!d,c=ve(c),a&&a[Td])?(a=a.b,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Yd(f,c,d,e),-1<c&&(Wd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=xe(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Yd(b,c,d,e)),(c=-1<a?b[a]:null)&&De(c))}\nfunction De(a){if(\"number\"!==typeof a&&a&&!a.V){var b=a.src;if(b&&b[Td])Zd(b.b,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ze(c),d):b.addListener&&b.removeListener&&b.removeListener(d);se--;(c=xe(b))?(Zd(c,a),0==c.b&&(c.src=null,b[qe]=null)):Wd(a)}}}function ze(a){return a in re?re[a]:re[a]=\"on\"+a}\nfunction Ee(a,b,c,d){var e=!0;if(a=xe(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.V&&(f=Fe(f,d),e=e&&!1!==f)}return e}function Fe(a,b){var c=a.listener,d=a.ka||a.src;a.fa&&De(a);return c.call(d,b)}\nfunction Ae(a,b){if(a.V)return!0;if(!ae){if(!b)a:{b=[\"window\",\"event\"];for(var c=p,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new oe(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.a&&0<=e;e--){b.currentTarget=d[e];var f=Ee(d[e],a,!0,b);c=c&&f}for(e=0;!b.a&&e<d.length;e++)b.currentTarget=\nd[e],f=Ee(d[e],a,!1,b),c=c&&f}return c}return Fe(a,new oe(b,this))}function xe(a){a=a[qe];return a instanceof Xd?a:null}var Ge=\"__closure_events_fn_\"+(1E9*Math.random()>>>0);function ve(a){if(r(a))return a;a[Ge]||(a[Ge]=function(b){return a.handleEvent(b)});return a[Ge]};function N(){K.call(this);this.b=new Xd(this);this.v=this;this.o=null}xa(N,K);N.prototype[Td]=!0;l=N.prototype;l.K=function(){return this.o};l.Ja=function(a){this.o=a};l.addEventListener=function(a,b,c,d){te(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};\nl.dispatchEvent=function(a){var b,c=this.K();if(c)for(b=[];c;c=c.K())b.push(c);c=this.v;var d=a.type||a;if(\"string\"===typeof a)a=new L(a,c);else if(a instanceof L)a.target=a.target||c;else{var e=a;a=new L(d,c);Ca(a,e)}e=!0;if(b)for(var f=b.length-1;!a.a&&0<=f;f--){var g=a.currentTarget=b[f];e=g.R(d,!0,a)&&e}a.a||(g=a.currentTarget=c,e=g.R(d,!0,a)&&e,a.a||(e=g.R(d,!1,a)&&e));if(b)for(f=0;!a.a&&f<b.length;f++)g=a.currentTarget=b[f],e=g.R(d,!1,a)&&e;return e};\nl.P=function(){N.W.P.call(this);this.b&&this.b.U(void 0);this.o=null};l.R=function(a,b,c){a=this.b.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.V&&f.capture==b){var g=f.listener,h=f.ka||f.src;f.fa&&Zd(this.b,f);d=!1!==g.call(h,c)&&d}}return d&&0!=c.Za};t(\"H.util.EventTarget\",N);N.prototype.Ja=N.prototype.Ja;N.prototype.setParentEventTarget=N.prototype.Ja;N.prototype.K=N.prototype.K;N.prototype.getParentEventTarget=N.prototype.K;N.prototype.addEventListener=N.prototype.addEventListener;N.prototype.addEventListener=N.prototype.addEventListener;N.prototype.removeEventListener=N.prototype.removeEventListener;N.prototype.removeEventListener=N.prototype.removeEventListener;N.prototype.dispatchEvent=N.prototype.dispatchEvent;\nN.prototype.dispatchEvent=N.prototype.dispatchEvent;N.prototype.B=N.prototype.B;N.prototype.dispose=N.prototype.B;N.prototype.N=N.prototype.N;N.prototype.addOnDisposeCallback=N.prototype.N;N.prototype.T=N.prototype.R;\nN.prototype.R=function(a,b,c){var d,e,f=!0;var g=c[c.currentTarget===c.target?\"AT_TARGET\":b?\"CAPTURING_PHASE\":(d=!0,\"BUBBLING_PHASE\")];if(!d||\"pointerenter\"!==(e=c.type)&&\"pointerleave\"!==e)c.eventPhase=g,f=N.prototype.T.apply(this,arguments),d&&this.K&&null===this.K()&&delete c.eventPhase;return f};function O(a){a=a||{};var b=a.callback;this.g=a.label;r(b)&&(this.callback=b);this.f=!!a.disabled;O.W.constructor.call(this)}xa(O,N);t(\"H.util.ContextItem\",O);O.prototype.zb=function(){return this.g};O.prototype.getLabel=O.prototype.zb;O.prototype.cc=function(a){this.g!==a&&(this.g=a,this.dispatchEvent(\"update\"));return this};O.prototype.setLabel=O.prototype.cc;O.prototype.Pb=function(){return this.f};O.prototype.isDisabled=O.prototype.Pb;\nO.prototype.bc=function(a){a^this.f&&(this.f=a,this.dispatchEvent(\"update\"));return this};O.prototype.setDisabled=O.prototype.bc;var He=new O;O.SEPARATOR=He;function Ie(){if(y.document){var a=document.createElement(\"canvas\");a.width=a.height=1;a.getContext(\"2d\")}}t(\"H.util.getPixelRatio\",function(){return window.devicePixelRatio||1});Object.create(Ia,void 0);t(\"H.util.eval\",function(a){return eval(a)});t(\"H.util.provide\",function(a){var b=p.$jscomp;if(b&&(\"function\"!=typeof b.wb?0:b.wb()))throw Error(\"goog.provide cannot be used within a module.\");ma(a,void 0)});function Je(){this.A=0}\nJe.prototype.next=function(a){if(9007199254740992===this.A)throw new Sd(a,this.A,[0,9007199254740991]);return this.A++};var Ke=new Je;Fa(Ke.next,Ke);function lc(){}var mb=Ha([]);Ha({});Ie();Ie();function Le(a,b,c){var d=Nb(+a,-90,90);if(b&&Ra(d))throw new A(b,c,a);return d}function Me(a,b,c){var d=+a;if(-180>d||180<d)d=Mb(d+180,360)-180;if(b&&Ra(d))throw new A(b,c,a);return d}function Ne(a,b,c){var d;if(a!==z&&Ra(d=+a)&&b)throw new A(b,c,a);return d}t(\"H.geo.isDBC\",function(a,b){return 0!==(0>a^0>b)&&180<ub(b-a)});function Q(){var a=Q;if(!0===(Na(this,a)&&this.constructor===a))throw new TypeError(\"Illegal constructor \"+Ua(a));}t(\"H.geo.AbstractGeometry\",Q);Q.prototype.getBoundingBox=Q.prototype.Y;Q.prototype.equals=Q.prototype.I;Q.prototype.oa=\"\";Q.prototype.wa=\"\";Q.prototype.toString=function(){return this.eb([this.oa.toUpperCase(),\" \"]).join(\"\")};Q.prototype.toString=Q.prototype.toString;Q.prototype.ec=function(){return{type:this.wa,coordinates:this.cb()}};Q.prototype.toGeoJSON=Q.prototype.ec;\nQ.prototype.ua=function(){return{type:this.oa,coordinates:this.va(),boundingBox:this.Y().ua()}};Q.prototype.forWorkerMessage=Q.prototype.ua;function R(a,b,c){this.lat=Le(a,R,0);this.lng=Me(b,R,1);c!==z&&(this.alt=Ne(c,R,2))}xa(R,Q);t(\"H.geo.Point\",R);R.prototype.I=function(a){return this===a||!!a&&this.lat===a.lat&&this.lng===a.lng&&(this.alt||0)===(a.alt||0)};R.prototype.equals=R.prototype.I;R.prototype.ra=function(a){if(this===a||this.lat===a.lat&&this.lng===a.lng)a=0;else{var b=this.lat*Jb;var c=a.lat*Jb;a=1.274200158E7*yb(sb(1,qb(rb(xb((b-c)/2),2)+zb(b)*zb(c)*rb(xb((this.lng*Jb-a.lng*Jb)/2),2))))}return a};\nR.prototype.distance=R.prototype.ra;\nR.prototype.ic=function(a,b,c){if(c){if(b/=6371000.79){a*=Jb;var d=Jb*this.lat;var e=xb(d);var f=xb(b);var g=zb(b);var h=Jb*this.lng;var k=zb(d);d=yb(k*zb(a)*f+e*g);a=Cb(xb(a)*k*f,g-e*xb(d));a=(h+a+I)%(2*I)-I;k=a*Kb}return b?new R(d*Kb,(k+540)%360-180):this}a=(a%360+360)%360;if(0===(a+90)%180)return d=this.lng+b/(6371000.79*Hb*zb(this.lat*Jb))*(270===a?-360:360),new R(this.lat,(d+540)%360-180);if(b/=6371000.79){a*=Jb;h=this.lat*Jb;e=this.lng*Jb;f=h+b*zb(a);g=f-h;d=vb(Ab(f/2+Gb)/Ab(h/2+Gb));d=Ra(g/\nd)?zb(h):g/d;var m=b*xb(a)/d;ub(f)>Eb&&(f=0<f?I-f:-(I+f))}return b?new R(f*Kb,((e+m+Ib+(ub(h+g)>Eb?I:0))%Hb-I)*Kb):this};R.prototype.walk=R.prototype.ic;R.prototype.Y=function(){return new T(this.lat,this.lng,this.lat,this.lng)};R.prototype.getBoundingBox=R.prototype.Y;function Oe(a,b,c){var d=qa(a)&&!(Ra(a.lat=Le(a.lat))||Ra(a.lng=Me(a.lng))||a.alt!==z&&Ra(a.alt=Ne(a.alt)));if(!d&&b)throw new A(b,c,a);return d}R.validate=Oe;\nfunction Pe(a){if(!a)throw new A(Pe,0,a);return new R(a.lat,a.lng,a.alt)}R.fromIPoint=Pe;l=R.prototype;l.oa=\"Point\";l.eb=function(a){a.push(\"(\",this.lng,\" \",this.lat,\")\");return a};l.wa=\"Point\";l.cb=function(){return[this.lng,this.lat,this.alt||0]};l.va=function(){return[this.lat,this.lng,this.alt||0]};var W={};t(\"H.geo.mercator\",W);W.a=function(a){return sb(1,tb(0,.5-vb(Ab(Gb+Eb*a/180))/I/2))};W.b=function(a){return a/360+.5};W.la=function(a,b,c){c?(c.x=W.b(b),c.y=W.a(a)):c=new E(W.b(b),W.a(a));return c};W.latLngToPoint=W.la;W.tb=function(a,b){return W.la(a.lat,a.lng,b)};W.geoToPoint=W.tb;W.f=function(a){return 0>=a?90:1<=a?-90:Kb*(2*Bb(wb(I*(1-2*a)))-Eb)};W.c=function(a){return 360*(1===a?1:Mb(a,1))-180};W.X=function(a,b,c){c?(c.lat=W.f(b),c.lng=W.c(a)):c=new R(W.f(b),W.c(a));return c};\nW.xyToGeo=W.X;W.Wb=function(a,b){return W.X(a.x,a.y,b)};W.pointToGeo=W.Wb;t(\"H.util.constants.DEFAULT_MIN_ZOOM_LEVEL\",0);t(\"H.util.constants.DEFAULT_MAX_ZOOM_LEVEL\",22);function X(a,b){this.projection=a||W;this.b=0;this.a=this.exp=vb(b||256)/Db;Qe(this);this.y=this.x=0}t(\"H.geo.PixelProjection\",X);var Re=ub(24)+ub(-8);X.prototype.Zb=W;X.prototype.projection=X.prototype.Zb;X.prototype.x=0;X.prototype.x=X.prototype.x;X.prototype.y=0;X.prototype.y=X.prototype.y;X.prototype.hc=rb(2,Re);X.prototype.w=X.prototype.hc;X.prototype.Jb=rb(2,Re);X.prototype.h=X.prototype.Jb;\nX.prototype.da=function(a){if(Ra(a))throw new A(this.da,0,a);var b=this.x/this.w;var c=this.y/this.h;this.b=a;this.a=this.exp+a;Qe(this);this.x=b*this.w;this.y=c*this.h};X.prototype.rescale=X.prototype.da;function Qe(a){a.a>Re&&(a.a=Re);a.w=rb(2,a.a);a.h=rb(2,a.a)}X.prototype.Sa=function(){return this.b||0};X.prototype.getZoomScale=X.prototype.Sa;X.prototype.sb=function(a,b){a=this.projection.la(a.lat,a.lng,b);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};X.prototype.geoToPixel=X.prototype.sb;\nX.prototype.Fa=function(a,b){return this.projection.X((a.x+this.x)/this.w,(a.y+this.y)/this.h,b)};X.prototype.pixelToGeo=X.prototype.Fa;X.prototype.X=function(a,b,c){return this.projection.X((a+this.x)/this.w,(b+this.y)/this.h,c)};X.prototype.xyToGeo=X.prototype.X;X.prototype.Ba=function(a,b,c){a=this.projection.la(a,b,c);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};X.prototype.latLngToPixel=X.prototype.Ba;X.prototype.Xb=function(a){return new E(a.x*this.w-this.x,a.y*this.h-this.y)};\nX.prototype.pointToPixel=X.prototype.Xb;t(\"H.util.Disposable\",K);K.prototype.N=K.prototype.N;K.prototype.addOnDisposeCallback=K.prototype.N;t(\"H.util.dispose\",function(a){a&&\"function\"==typeof a.B&&a.B()});K.prototype.B=K.prototype.B;K.prototype.dispose=K.prototype.B;K.prototype.P=K.prototype.P;function Se(){}t(\"H.util.ICancelable\",Se);Se.prototype.cancel=function(){};Se.prototype.cancel=Se.prototype.cancel;function Te(a,b,c,d){this.key=\"\";this.x=a;this.y=b;this.b=c;this.Z=d;this.a=Ad()}Te.prototype.then=function(a,b,c){return this.a.a.then(a,b,c)};Te.prototype.reject=function(a){this.a.reject(a)};Te.prototype.cancel=function(){this.a.a.cancel()};function Ue(a,b,c,d){if(!a||!b||!c)throw new A(Ue,null,\"Must specify name, version and revision parameter\");this.name=a;this.version=b;this.revision=c;d&&Ca(this,d)}t(\"H.util.BuildInfo\",Ue);Ue.prototype.toString=function(){var a,b=[];for(a in this)Qa(this[a])&&b.push(this[a]);return b.join(\";\")};var Ve={};function We(a,b,c,d){if(!a)throw new A(We,1,\"Must specify a name parameter\");return Ve[a]||(Ve[a]=new Ue(a,b,c,d))}Ue.get=We;function Z(a,b,c,d,e,f){if(a&&b)this.bb(a),this.Ha(b),this.Ka(c),this.ab(e),this.$a(f),this.La(d);else throw Error('Parameters \"scheme\" and \"host\" must be specified');}t(\"H.service.Url\",Z);\nfunction Xe(a,b){var c=y.document,d,e=c&&c.createElement(\"a\"),f=\"\";if(c){if(b){var g=(d=c.getElementsByTagName(\"base\")[0])&&d.href;var h=c.head;var k=d||h.appendChild(c.createElement(\"base\"));k.href=b}e.href=a;f=e.href;b&&(d?d.href=g:h.removeChild(k))}else/[\\w]+:\\/\\//.test(a)&&(f=a);g=/(?:(\\w+):\\/\\/)?(?:([^:]+):([^@/]*)@)?([^/:]+)?(?:[:]{1}([0-9]+))?(\\/[^?#]*)?(\\?[^#]+)?(#.*)?/.exec(f);a=g[1];k=g[4];b=g[5];h=g[6];c=g[7];d=g[8];!g[2]&&k&&/@/.test(k)&&(k=k.split(\"@\")[1]);g=k;h=h&&0<h.length?h.substr(1):\n\"\";k={};if(c)for(e=/([?&]?([^=&+]+))(=([^&]+))?/g;f=e.exec(c);)k[decodeURIComponent(f[2])]=f[4]?decodeURIComponent(f[4]):void 0;return new Z(a,g,h,k,isNaN(+b)?void 0:+b,d&&0<d.length?d.substr(1):\"\")}Z.parse=Xe;var Ye=0;Z.prototype.clone=function(){Ye++;var a={},b;for(b in this.a)a[b]=this.a[b];return new Z(this.o,this.f,this.b,a,this.g,this.c)};Z.prototype.clone=Z.prototype.clone;\nZ.prototype.bb=function(a){if(!a||\"string\"!==typeof a)throw Error('The \"scheme\" parameter must be a non-empty string.');this.o=a;return this};Z.prototype.setScheme=Z.prototype.bb;Z.prototype.Gb=function(){return this.o};Z.prototype.getScheme=Z.prototype.Gb;Z.prototype.Ha=function(a){if(!a||\"string\"!==typeof a||\"-\"===a.charAt(0)||\".\"===a.charAt(0)||\".\"===a.charAt(a.length-1))throw Error('The \"host\" parameter is not a valid host name.');this.f=a;return this};Z.prototype.setHost=Z.prototype.Ha;\nZ.prototype.yb=function(){return this.f};Z.prototype.getHost=Z.prototype.yb;Z.prototype.Ka=function(a){this.b=a||void 0;return this};Z.prototype.setPath=Z.prototype.Ka;Z.prototype.Db=function(){return this.b};Z.prototype.getPath=Z.prototype.Db;Z.prototype.La=function(a){if(a)if(\"object\"==typeof a)this.a=a;else throw Error('Parameter \"params\" must be an object.');else this.a={};return this};Z.prototype.setQuery=Z.prototype.La;Z.prototype.Kb=function(){return!Ze(this)};Z.prototype.hasQuery=Z.prototype.Kb;\nZ.prototype.getQuery=function(){return this.a};Z.prototype.getQuery=Z.prototype.getQuery;Z.prototype.ab=function(a){if(a&&isNaN(parseInt(a,10)))throw Error('Parameter \"port\" must be a number or undefined');this.g=+a||void 0;return this};Z.prototype.setPort=Z.prototype.ab;Z.prototype.Eb=function(){return this.g};Z.prototype.getPort=Z.prototype.Eb;Z.prototype.$a=function(a){this.c=a||void 0;return this};Z.prototype.setAnchor=Z.prototype.$a;Z.prototype.ub=function(){return this.c};\nZ.prototype.getAnchor=Z.prototype.ub;Z.prototype.aa=function(a){if(\"object\"!==typeof a)throw Error('Parameter \"other\" must be an object.');var b=this.a,c;for(c in a)a.hasOwnProperty(c)&&\"function\"!==typeof a[c]&&(b[c]=a[c]);return this};Z.prototype.mergeQuery=Z.prototype.aa;Z.prototype.ib=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subDomain\" must be a non-empty string');\".\"===a.substr(a.length-1)&&(a=a.substr(0,a.length-1));return this.Ha(a+\".\"+this.f)};\nZ.prototype.addSubDomain=Z.prototype.ib;Z.prototype.jb=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subPath\" must be a non-empty string');return this.Ka((this.b?this.b+\"/\":\"\")+a)};Z.prototype.addSubPath=Z.prototype.jb;Z.prototype.toString=function(){return[this.o+\"://\",this.f,this.g?\":\"+this.g:\"\",this.b||!Ze(this)||this.c?\"/\":\"\",this.b?encodeURI(this.b):\"\",$e(this),this.c?\"#\"+encodeURIComponent(this.c):\"\"].join(\"\")};Z.prototype.toString=Z.prototype.toString;\nfunction $e(a){function b(g,h){return encodeURIComponent(g)+(void 0===h?\"\":\"=\"+encodeURIComponent(h).replace(/[!'()*]/g,function(k){return\"%\"+k.charCodeAt(0).toString(16)}))}var c=[],d,e=a.a;for(d in e)if(e.hasOwnProperty(d)&&\"function\"!==typeof e[d]){var f=a.a[d];Na(f,af)?f.fb.forEach(function(g){c.push(b(d,g))}):c.push(b(d,f))}return 0<c.length?\"?\"+c.join(\"&\"):\"\"}function Ze(a){var b,c=0;for(b in a.a)if(a.a.hasOwnProperty(b)&&\"function\"!==typeof a.a[b]&&(c++,0<c))break;return!c}\nfunction af(a){var b;if(!Oa(a,void 0,void 0,void 0))throw new A(af,0,a);for(b=0;b<a.length;b++){var c=a[b];if(!Qa(c)&&!Sa(c))throw new A(af,0,\"The array can only contain strings and numbers\");}this.fb=a}Z.MultiValueQueryParameter=af;af.prototype.Ib=function(){return this.fb};af.prototype.getValues=af.prototype.Ib;var bf={};function cf(a){try{importScripts.apply(self,arguments)}catch(b){this.postError(\"invalid_script\")}}function df(a){bf[a]=null;this.postMessage(a)}function ef(a,b,c){if(r(b))var d=b;else try{d=self.eval(\"(\"+b+\")\"),r(d)||(d=null)}catch(e){}d?(bf[a]=d,c||this.postMessage(a)):this.postError(\"invalid_processor\")}function ff(a){this.b=a&&a[0];this.a=a&&a[1];this.c=a&&a[2]||[]}ff.prototype.postError=function(a){this.postMessage(a,z,0)};\nff.prototype.postMessage=function(a,b,c){self.postMessage({processor:this.b,taskId:this.a,type:c===z?1:c,data:a},b||z)};function gf(a,b,c){if(!Qa(a))throw new A(gf,0,\"InvalidArgument\");if(!r(b))throw new A(gf,1,\"InvalidArgument\");var d=hf++;jf[d]={mimeType:c||kf,mb:b};(new ff([\"3\",d,[]])).postMessage(a,[],2)}var jf={},hf=0;\nfunction lf(a,b){var c=a;if(jf[this.a]){var d=jf[this.a];var e=d.mb;delete jf[this.a];if(b)e(null,b);else{if(d.mimeType===mf){a=new Uint8Array(a);b=a.byteLength;d=\"\";c=0;for(var f,g,h,k;c<b;)f=a[c++],192>f||(g=a[c++],224>f?f=(f&31)<<6|g&63:(h=a[c++],240>f?f=(f&15)<<12|(g&63)<<6|h&63:(k=a[c++],f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63))),65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode((f>>10)+55296,(f&1023)+56320));c=d}e(c)}}}var kf=0,mf=1;function T(a,b,c,d){nf(this,Le(a,T,0),Me(b,T,1),Le(c,T,2),Me(d,T,3))}xa(T,Q);t(\"H.geo.Rect\",T);T.prototype.oa=\"Polygon\";T.prototype.eb=function(a){var b=this.m,c=this.i,d=this.l,e=this.j;a.push(\"(\",\"(\",c,\" \",b,\",\",e,\" \",b,\",\",e,\" \",d,\",\",c,\" \",d,\",\",c,\" \",b,\")\",\")\");return a};T.prototype.I=function(a){return this===a||!!a&&this.m===a.m&&this.i===a.i&&this.l===a.l&&this.j===a.j};T.prototype.equals=T.prototype.I;T.prototype.clone=function(){return new T(this.m,this.i,this.l,this.j)};\nT.prototype.clone=T.prototype.clone;function nf(a,b,c,d,e){a.i=c;a.j=e;b<d&&(c=b,b=d,d=c);a.m=b;a.l=d;a.c=a.a=a.b=null;return a}T.prototype.Ra=function(){this.c||(this.c=new R(this.m,this.i));return this.c};T.prototype.getTopLeft=T.prototype.Ra;T.prototype.Qa=function(){this.a||(this.a=new R(this.l,this.j));return this.a};T.prototype.getBottomRight=T.prototype.Qa;T.prototype.Hb=function(){return this.m};T.prototype.getTop=T.prototype.Hb;T.prototype.vb=function(){return this.l};\nT.prototype.getBottom=T.prototype.vb;T.prototype.Ab=function(){return this.i};T.prototype.getLeft=T.prototype.Ab;T.prototype.Fb=function(){return this.j};T.prototype.getRight=T.prototype.Fb;T.prototype.J=function(){this.b||(this.b=new R(this.l+(this.m-this.l)/2,of(this.i,this.L())));return this.b};T.prototype.getCenter=T.prototype.J;T.prototype.L=function(){return pf(this.i,this.j)};T.prototype.getWidth=T.prototype.L;T.prototype.S=function(){return this.m-this.l};T.prototype.getHeight=T.prototype.S;\nT.prototype.Nb=function(){return this.i>this.j};T.prototype.isCDB=T.prototype.Nb;T.prototype.Qb=function(){return!this.L()&&!this.S()};T.prototype.isEmpty=T.prototype.Qb;T.prototype.Y=function(){return new T(this.m,this.i,this.l,this.j)};T.prototype.getBoundingBox=T.prototype.Y;T.prototype.ga=function(a,b,c){var d=this.J();c||(a=Le(a,this.ga,0),b=Me(b,this.ga,1));b=this.M(a,b,c);a=b.J();return a.lat===d.lat&&a.lng===d.lng&&this.S()===b.S()&&this.L()===b.L()};T.prototype.containsLatLng=T.prototype.ga;\nT.prototype.ha=function(a,b){b||Oe(a,this.ha,0);return this.ga(a.lat,a.lng,b)};T.prototype.containsPoint=T.prototype.ha;T.prototype.Pa=function(a,b){var c=this.J();if(!b&&!Na(a,T))throw new A(this.Pa,0,a);b=this.ma(a,b);a=b.J();return a.lat===c.lat&&a.lng===c.lng&&this.S()===b.S()&&this.L()===b.L()};T.prototype.containsRect=T.prototype.Pa;\nT.prototype.M=function(a,b,c,d){if(!c){if(Ra(a=Le(a)))throw new A(this.M,0,a);if(Ra(b=Me(b)))throw new A(this.M,1,b);}return qf(this.m,this.i,this.l,this.j,a,b,a,b,d)};T.prototype.mergeLatLng=T.prototype.M;T.prototype.Wa=function(a,b,c){b||Oe(a,this.Wa,0);return this.M(a.lat,a.lng,b,c)};T.prototype.mergePoint=T.prototype.Wa;T.prototype.ma=function(a,b,c){if(!b&&!Na(a,T))throw new A(this.ma,0,a);return qf(this.m,this.i,this.l,this.j,a.m,a.i,a.l,a.j,c)};T.prototype.mergeRect=T.prototype.ma;\nT.prototype.ba=function(a,b,c,d,e,f){e||(a=Le(a,this.ba,0),b=Me(b,this.ba,1),c=Le(c,this.ba,2),d=Me(d,this.ba,3));return qf(this.m,this.i,this.l,this.j,a,b,c,d,f)};T.prototype.mergeTopLeftBottomRight=T.prototype.ba;T.prototype.Ua=function(a,b){var c=this.i<=this.j,d=a.i<=a.j,e=this.i<a.j,f=a.i<this.j;if(!b&&!Na(a,T))throw new A(this.Ua,0,a);return this.l<=a.m&&a.l<=this.m&&(!c&&(!d||e||f)||!d&&(e||f)||e&&f)};T.prototype.intersects=T.prototype.Ua;function pf(a,b){a=b-a;return a+(0>a?360:0)}\nfunction of(a,b){a+=b/2;return a-(180<a?360:0)}function qf(a,b,c,d,e,f,g,h,k){c=sb(c,g);a=tb(a,e);e=pf(b,d);var m=of(b,e);g=pf(f,h);var n=of(f,g)-m;n+=0>n-1E-6?360:0;if(180>n-1E-6){m=b;var q=h}else n=360-n,m=f,q=d;n=n+e/2+g/2;360<=n+5E-7?(m=-180,q=180):n-5E-7<e?(m=b,q=d):n-5E-7<g&&(m=f,q=h);return k?nf(k,a,m,c,q):new T(a,m,c,q)}T.merge=qf;function rf(a,b,c){c||(Oe(a,rf,0),Oe(b,rf,1));return new T(a.lat,a.lng,b.lat,b.lng)}T.fromPoints=rf;\nfunction sf(a,b){var c=1,d=a.length,e=null;var f=oa(a);if(\"array\"!=f&&(\"object\"!=f||\"number\"!=typeof a.length))throw new A(sf,0,a);if(0<d)for(f=a[0],e=rf(f,f,b);c<d;c++)f=a[c],e.M(f.lat,f.lng,b,e);return e}T.coverPoints=sf;function tf(a,b){var c=3,d=a.length,e;if(!(b||a&&null!=a.length))throw new A(tf,0,a);if(0<d)for(e=new T(a[0],a[1],a[0],a[1]);c<d;c+=3)e.M(a[c],a[c+1],b,e);return e}T.coverLatLngAlts=tf;\nfunction uf(a,b){var c=1,d=a.length,e;if(b&&(!a||null==a.length))throw new A(uf,0,a);if(0<d)for(e=new T(a[0].m,a[0].i,a[0].l,a[0].j);c<d;c++)e.ma(a[c],b,e);return e}T.coverRects=uf;\nT.prototype.Ya=function(a,b){var c=this.i,d=this.m,e=this.j,f=this.l,g=this.J().lng;Oe(a,this.Ya,0);var h=a.lat-f-(d-f)/2;var k=a.lng-g;k=180<k||-180>k?-(g+a.lng):k;a=c+(0>k?2*k:0);a=-180>a?360+a:a;e+=0<k?2*k:0;e=180<e?e-360:e;d=0<h?d+2*h:d;90<=d&&(d=90);f=0>h?f+2*h:f;-90>=f&&(f=-90);return b?nf(b,d,a,f,e):new T(d,a,f,e)};T.prototype.resizeToCenter=T.prototype.Ya;T.prototype.wa=\"Polygon\";\nT.prototype.cb=function(){return[[this.i,this.m,0],[this.j,this.m,0],[this.j,this.l,0],[this.i,this.l,0],[this.i,this.m,0]]};T.prototype.ua=function(){return this.va()};T.prototype.va=function(){return[this.m,this.i,this.l,this.j]};function vf(a,b,c,d){var e=!!c,f,g=0,h=0,k=0,m=0,n=0,q,u=-1;var J=y.Float32Array;var M,v=[];if(b){b=La(b);a=La(a);e&&(f=La(c));c=b.length;d=d?1E-7:1E-5;for(M=new J(3*c);g<c;){J=b[g];var G=+J;var Y=+a[g];e&&(q=+f[g]);wf.test(J)?0<=u&&(0<g-u&&v.push(u,g+1),u=-1):0>u&&(u=g);g++;m=M[h++]=m+Y*d;k=M[h++]=k+G*d;e&&(n=M[h]=n+q);h++}0<=u&&1<c-u&&v.push(u,c)}else M=new J(0);return{path:M,outlineIndices:v}}var wf=/^-?0\\d/;\nfunction xf(a,b){for(var c=0,d=a.length/3,e=new y.Array(d),f=0;c<d;)e[c++]=b.Ba(a[f],a[++f]),f+=2;return e};function yf(a,b){b=180/(1<<b);var c=a.lat+90;a=(a.lng+180)%360;var d=0;180==c&&d--;d+=Math.floor(c/b);return[d,Math.floor(a/b)]}var zf=1/Math.pow(10,10);function Af(a,b){var c=[],d=a.Ra();a=a.Qa();var e;180==a.lng&&(a.lng-=zf);d=yf(d,b);a=yf(a,b);for(e=d[0];e>=a[0];e--)for(b=d[1];b<=a[1];b++)c.push(e,b);return c};function Bf(a,b){var c=a.tileSize||256;this.b={};this.v=Xe(a.serverUrl);this.g=b;this.fc=a.layerConfigs||[];this.o=a.projected;this.T=c;this.Ea=!1!==a.batchTiles;this.Ga=a.horizontalMargin||0;this.gc=a.onlyOutline;this.gb=new X(Ia,c);this.f=new X(Ia,c);this.f.da(22-Math.log(c)/Math.LN2+8)}xa(Bf,K);l=Bf.prototype;\nl.ac=function(a,b,c){var d=this.T,e=this.Ga,f={x:a*d-e,y:b*d};d={x:(a+1)*d-1+e,y:(b+1)*d-1};e=this.gb;e.da(c);f=e.Fa(f);d=e.Fa(d);return Cf(this,new T(f.lat,f.lng,d.lat,d.lng),this.fc,{x:a,y:b,z:c})};l.$b=function(a,b,c,d,e){return Cf(this,new T(a,b,c,d),e)};\nfunction Cf(a,b,c,d){var e=Df(c),f=e.length,g={},h,k=a.b,m=[],n=[];for(c=0;c<f;c++){var q=e[c];var u=q.layerId;var J=q.level;g[u]=q.columns;q=Af(b,J);var M=q.length-1;for(h=0;h<M;h+=2){var v=[u,q[h+1],q[h],J].join(\"_\");var G=k[v]||a.g.get(v);G||(G=new Te(q[h+1],q[h],J,u),G.key=v,k[v]=G,n.push(G));m.push(G)}}n.length&&(a.Ea?Ef(a,n):Ff(a,n));return zd(m.map(function(Y){return Y.then(Fa(this.qb,this,Y.Z,Gf(e))).then(Fa(this.Yb,this,Y,d||{})).then(Fa(this.rb,this,g[Y.Z]))},a))}\nl.qb=function(a,b,c){var d=c.Rows,e=d.length,f,g;if(e&&(f=b[a])){b=new D(c.Rows);var h=[];for(g=0;g<e;g++){var k=d[g];f(b.ja(g),a)&&h.push(k)}a={Rows:h};if(c=c.Meta)a.Meta=c}else a=c;return a};function Ff(a,b){function c(k,m,n){n?(delete a.b[k.key],k.reject(n)):Hf(a,k,m)}var d,e=b.length,f=a.v;for(d=0;d<e;d++){var g=b[d];var h=f.clone().aa({tilex:g.x}).aa({tiley:g.y}).aa({level:g.b}).aa({layer:g.Z});new gf(h.toString(),Fa(c,null,g),mf)}}\nfunction Ef(a,b){var c=b.length,d;for(d=0;d<c;d+=15){var e=b.slice(d,d+15);If(a,e)}}function If(a,b){var c=a.v.clone(),d=[],e=[],f=[],g=c.getQuery();b.length&&(b.forEach(function(h){d.push(h.x,h.y);e.push(h.b);f.push(h.Z)}),g.tilexy=d.join(\",\"),g.layers=f.join(\",\"),g.levels=e.join(\",\"),c.La(g),new gf(c.toString(),function(h,k){k?b.forEach(function(m){delete a.b[m.key];m.reject(\"error\")}):Hf(a,b,h)},mf))}\nfunction Hf(a,b,c){var d=b.length,e;if(Oa(b,void 0,void 0,void 0)){var f=c.indexOf(\"[\")+1;for(e=0;e<d;e++){var g=c.indexOf(\"]},{\",f+3)+2;g<f&&(g=c.lastIndexOf(\"]}\"));var h=c.substr(f,g-f);f=g+1;Jf(a,b[e],h)}}else Jf(a,b,c)}function Jf(a,b,c){try{var d=c.length;var e=b.key;delete a.b[e];a.g.add(e,b,2*d);var f=JSON.parse(c);b.a.b(f)}catch(g){b.reject(g.message)}}\nfunction Gf(a){var b={},c,d=a.length;for(c=0;c<d;c++){var e=a[c];if(e.rowFilter){var f=e.layerId;f=f!==z?f:e.layer;b[f]=Fa(e.rowFilter,e.rowFilterContext)}}return b}function Kf(a,b,c,d,e){return e?[new E(a,b),new E(c,b),new E(c,d),new E(a,d),new E(a,b)]:[a,b,c,b,c,d,a,d]}\nl.Yb=function(a,b,c){var d=this.f.Sa()-b.z,e=this.T<<d,f=50<<d,g=b.x*e;b=b.y*e;var h=g+e;e=b+e;var k=g-f,m=b-f,n=h+f;f=e+f;var q,u,J=c.Rows,M=J.length,v,G=/^ADAS/.test(a.Z),Y=this.f,pa=this.gc,S,ab=[],Ja=[],Ka=[],bb=[];for(a=0;a<M;a++){var w=v=J[a];var P=(S=G)?\"HPY\":\"LAT\";var U=S?\"HPX\":\"LON\";var ea=S?\"HPZ\":\"ZLEVEL\";if(w[P]){var V=vf(w[P],w[U],w[ea],S);w.geometry=V;delete w[P];delete w[U];delete w[ea];if(w.INNER_LAT)for(P=w.INNER_LAT.split(\";\"),V=w.INNER_LON.split(\";\"),delete w.INNER_LAT,delete w.INNER_LON,\nw.interiors=ea=[],U=P.length,w=0;w<U;w++)ea.push(vf(P[w],V[w],\"\",S))}if(this.o){S=void 0;U=v;V=Y;P=U.$$projected$$;if(!P){var ba=U.geometry;w=xf(ba.path,V);v=[w];U.$$projected$$=P={Vb:v};U=(ea=U.interiors)?ea.length:0;v.length+=U;S|=Lf(v,w,ba.outlineIndices);if(U)for(P.Lb=1,q=0;q<U;q++)ba=ea[q],w=xf(ba.path,V),v[1+q]=w,S|=Lf(v,w,ba.outlineIndices);S&&(P.Tb=1+U)}w=P;S=w.Vb;v=w.Lb;var zc=w.Tb;V=[];P=U=Lb;var cb=ea=z;w=S[0];if(1===w.length){var Ac=Ac||(Ac=Kf(g,b,h,e,!1));v=w[0];Rb(v.x,v.y,Ac)&&V.push(Mf(w,\ng,b,d))}else{var Be=S.length;for(ba=pa?zc:0;ba<Be&&(pa||!ba||V.length);ba++)if(w=S[ba],ba>=zc){ba===zc&&(P=V.length);var ja=Ub([w],k,m,n,f,!1);Nf(ja,g,b,d,V)}else{var Fb=Fb||(Fb=Kf(k,m,n,f,!0));if(ba>=v)if(ba===v&&(U=V.length),cb)for(q=cb.length;q--;){if(ja=Of(cb[q],w),u=ja.length){for(ea=ea||[];u--;)ea.push(q);Nf(ja,g,b,d,V)}}else ja=Of(Fb,w),Nf(ja,g,b,d,V);else if(ja=Of(Fb,w),Nf(ja,g,b,d,V),1<ja.length&&v<Be)for(cb=[],q=ja.length;q--;)cb[q]=ja[q]}}V.length&&(ab[a]=V,Ja[a]=U,Ka[a]=ea,bb[a]=P)}}return{dc:c,\nnb:ab,Mb:Ja,pb:Ka,Ub:bb}};function Lf(a,b,c){for(var d=c.length,e=0,f,g,h=b.length;e<d;)f=c[e++],g=c[e++],a.push(g-f===h?b:b.slice(f,g));return 0<c.length}function Of(a,b){var c,d=[];if(c=Wb(a,b)){do{a=[];b=c;do a.push(b);while(b=b.next);d.push(a)}while(c=c.Xa)}else Sb(b[0],Tb(a))?d.push(b):Sb(a[0],Tb(b))&&d.push(a);return d}function Nf(a,b,c,d,e){for(var f=0,g=a.length;f<g;f++)e.push(Mf(a[f],b,c,d))}\nfunction Mf(a,b,c,d){var e,f=a.length,g=new Int32Array(2*f),h=0;for(e=0;e<f;e++){var k=a[e];g[h++]=k.x-b>>d;g[h++]=k.y-c>>d}return g}\nl.rb=function(a,b){var c=b.dc,d=b.nb,e=b.Mb,f=b.Ub;b=b.pb;for(var g=[],h,k={Rows:g},m,n=a?a.length:0,q=0,u,J=c.Rows,M=J.length,v;q<M;q+=1)if(d[q]||!this.o){h={};u=J[q];if(n)for(m=0;m<n;m++)u.hasOwnProperty(a[m])&&(h[a[m]]=u[a[m]]);else for(v in u)\"$$projected$$\"!==v&&(h[v]=u[v]);u.geometry&&(h.geometry=u.geometry);m=void 0;var G,Y=h,pa=d[q],S=e[q],ab=b[q],Ja=f[q],Ka=g;if(pa){var bb=pa.length;if(ab)for(G=S;G--;){if(G){var w={};for(m in Y)w[m]=Y[m]}else w=Y;u=[pa[G]];var P=sb(bb,Ja)-S;for(h=0;h<P;h++)ab[h]===\nG&&u.push(pa[S+h]);P=u.length;if(!G)for(h=Ja;h<bb;h++)u.push(pa[h]);w.$HProjGeometry={paths:u,interiorsIndex:1,outlinesIndex:P};Ka.push(w)}else Y.$HProjGeometry={paths:pa,interiorsIndex:S,outlinesIndex:Ja},Ka.push(Y)}else Ka.push(Y)}c.Meta&&(k.Meta=c.Meta);return k};l.P=function(){var a,b=this.b;for(a in b)b.hasOwnProperty(a)&&(b[a].reject(\"disposed\"),delete b[a])};\nfunction Df(a){for(var b=[],c,d=a.length,e=0;e<d;e++){c=Aa(a[e]);if(c.rowFilter&&(c.rowFilter=eval(\"(\"+c.rowFilter+\")\"),!r(c.rowFilter)))throw Error(\"Invalid row filter for layer \"+c.layerId);b.push(c)}return b};t(\"H.service.extension.worker.processor\",function(a,b,c){function d(h){e.postMessage(h)}var e=this,f=za[a];var g=function(h){e.postError(h.toString())};if(0===b)f||(za[a]=new Bf(c,Pf)),this.postMessage();else if(f)switch(b){case 1:try{f.ac.apply(f,c).then(d,g)}catch(h){this.postError(h.message)}break;case 2:try{f.$b.apply(f,c).then(d,g)}catch(h){this.postError(h.message)}break;case 3:f.B();delete za[a];ya()&&Pf.U();break;default:e.postError(\"Unsupported command\")}});\nvar Pf=new B(26214400),za=Object.create(Ia,void 0);function Qf(a,b,c){var d=a[b];a=a[b+1];this.Ta=[];this.Ma=0;this.b=b;this.a=[a-c,d-c,a+c,d+c]}Qf.prototype.ha=function(a,b){var c=a[b];a=a[b+1];b=this.a;return b[1]<=c&&c<=b[3]&&b[0]<=a&&a<=b[2]};Qf.prototype.J=function(){return this.b};var Rf=new E(0,0);function Sf(a,b,c,d,e){d[e]=b;d[e+1]=a}var Tf=new X;function Uf(a,b,c,d,e){Tf.Ba(a,b,Rf);d[e]=Rf.x;d[e+1]=Rf.y}\nt(\"H.clustering.dynamicgrid.worker\",function(a,b,c,d,e){var f=e?Sf:Uf,g=0;e=!!self.ArrayBuffer;var h=a.byteLength?new Float64Array(a):a,k=h.length/3;a=[];var m=[],n=[],q=e?new Float64Array(2*k):[];k=0;var u=0;for(Tf.da(d);g<h.length;){var J=h[g++];var M=h[g++];var v=h[g++];f(v,M,d,q,u);for(v=a.length;v--;)if(M=a[v],M.ha(q,u)){var G=M;break}G||(G=new Qf(q,u,b),a.push(G));v=u/2;G.Ma+=J||1;G.Ta.push(v);G=null;u+=2}for(v=a.length;v--;)M=a[v],b=M.Ma>=c,f=M.Ta,d=f.length,b?(m.push(d),m=m.concat(f)):\n(k+=d,n=n.concat(f));c=[k].concat(n,m);c=e?(new Uint32Array(c)).buffer:c;this.postMessage(c,[c])});self.addEventListener(\"message\",function(a){a=new ff(a.data);var b=bf[a.b];if(b)try{b.apply(a,a.c)}catch(c){a.postError(c.message)}else a.postError(\"processor_not_found\")});(function(){var a=new ff;var b=function(c,d){ef.apply(a,[c,d,!0])};b(\"0\",cf);b(\"1\",ef);b(\"2\",df);b(\"3\",lf)})();\n";

/**!
 * The code below uses open source software. Please visit the URL below for an overview of the licenses: 
 * https://sdk.venues.here.com/v3/3.1/HERE_NOTICE 
 */
this.H=this.H||{},this.H.venues=function(e){"use strict";function t(e,t){void 0===t&&(t={});var n,r=t.insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===r&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function v(e,t,n){return(v=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(e,r));return n&&o(r,n.prototype),r}).apply(null,arguments)}function f(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(n){var r=a();return function(){var e,t=d(n);return e=r?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?g(t):e}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){e=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(e){t=Object.getOwnPropertyDescriptor(e,t);return t.get?t.get.call(n):t.value}})(e,t,n||e)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t(".H_l_right .venues-ui__drawings .trigger.button--active .arrow {\n  transform: rotate(90deg); }\n\n.H_l_right .venues-ui__drawings .drawings {\n  right: 45px;\n  left: initial; }\n");var I=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getData",value:function(){return this.model}},{key:"getAddress",value:function(){return this.model.getInternalAddress()}},{key:"getCenter",value:function(){var e=A(this.model.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"toGeoJSON",value:function(){return this.model.toJSON()}},{key:"getLevel",value:function(){return this.getParentEventTarget()}},{key:"getVenue",value:function(){return this.getLevel().getDrawing().getParentEventTarget()}}]),r}(),_=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getData",value:function(){return this.model}},{key:"getBoundingBox",value:function(){return v(H.geo.Rect,L(this.model.getBoundingBox()))}},{key:"getCenter",value:function(){var e=A(this.model.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"getLevel",value:function(t){return this.getLevels().find(function(e){return e.id===t})}},{key:"getLevels",value:function(){var t=this.getData().getLevels().map(function(e){return e.getId()});return this.getVenue().getLevels().filter(function(e){return-1!==t.indexOf(e.id)})}},{key:"getMainLevel",value:function(){return this.getLevel(this.model.getMainLevel().getId())}},{key:"getVenue",value:function(){return this.getParentEventTarget()}}]),r}(),E=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getGeometry",value:function(t){return this.getGeometries().find(function(e){return e.id===t})}},{key:"getGeometries",value:function(){var t=this.getData().getGeometries().map(function(e){return e.getId()});return this.getDrawing().getVenue().getGeometries().filter(function(e){return-1!==t.indexOf(e.id)})}},{key:"getData",value:function(){return this.model}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"getShortName",value:function(){return this.model.getShortName()}},{key:"getZIndex",value:function(){return this.model.getZIndex()}},{key:"isMain",value:function(){return this.model.isMain()}},{key:"getDrawing",value:function(){return this.getParentEventTarget()}},{key:"getVenue",value:function(){return this.getDrawing().getParentEventTarget()}}]),r}();function M(e,t,n,r){for(var i,o=r,a=n-t>>1,s=n-t,u=e[t],l=e[t+1],c=e[n],h=e[n+1],d=t+3;d<n;d+=3){var v=function(e,t,n,r,i,o){var a=i-n,s=o-r;{var u;0===a&&0===s||(1<(u=((e-n)*a+(t-r)*s)/(a*a+s*s))?(n=i,r=o):0<u&&(n+=a*u,r+=s*u))}return(a=e-n)*a+(s=t-r)*s}(e[d],e[d+1],u,l,c,h);o<v?(i=d,o=v):v!==o||(v=Math.abs(d-a))<s&&(i=d,s=v)}r<o&&(3<i-t&&M(e,t,i,r),e[i+2]=o,3<n-i&&M(e,i,n,r))}function T(e,t,n,r){r={id:void 0===e?null:e,type:t,geometry:n,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,n=e.type;if("Point"===n||"MultiPoint"===n||"LineString"===n)N(e,t);else if("Polygon"===n||"MultiLineString"===n)for(var r=0;r<t.length;r++)N(e,t[r]);else if("MultiPolygon"===n)for(r=0;r<t.length;r++)for(var i=0;i<t[r].length;i++)N(e,t[r][i])}(r),r}function N(e,t){for(var n=0;n<t.length;n+=3)e.minX=Math.min(e.minX,t[n]),e.minY=Math.min(e.minY,t[n+1]),e.maxX=Math.max(e.maxX,t[n]),e.maxY=Math.max(e.maxY,t[n+1])}function b(e,t,n,r){if(t.geometry){var i=t.geometry.coordinates,o=t.geometry.type,a=Math.pow(n.tolerance/((1<<n.maxZoom)*n.extent),2),s=[],u=t.id;if(n.promoteId?u=t.properties[n.promoteId]:n.generateId&&(u=r||0),"Point"===o)S(i,s);else if("MultiPoint"===o)for(var l=0;l<i.length;l++)S(i[l],s);else if("LineString"===o)k(i,s,a,!1);else if("MultiLineString"===o){if(n.lineMetrics){for(l=0;l<i.length;l++)s=[],k(i[l],s,a,!1),e.push(T(u,"LineString",s,t.properties));return}w(i,s,a,!1)}else if("Polygon"===o)w(i,s,a,!0);else{if("MultiPolygon"!==o){if("GeometryCollection"!==o)throw new Error("Input data is not a valid GeoJSON object.");for(l=0;l<t.geometry.geometries.length;l++)b(e,{id:u,geometry:t.geometry.geometries[l],properties:t.properties},n,r);return}for(l=0;l<i.length;l++){var c=[];w(i[l],c,a,!0),s.push(c)}}e.push(T(u,o,s,t.properties))}}function S(e,t){t.push(P(e[0])),t.push(C(e[1])),t.push(0)}function k(e,t,n,r){for(var i,o,a=0,s=0;s<e.length;s++){var u=P(e[s][0]),l=C(e[s][1]);t.push(u),t.push(l),t.push(0),0<s&&(a+=r?(i*l-u*o)/2:Math.sqrt(Math.pow(u-i,2)+Math.pow(l-o,2))),i=u,o=l}var c=t.length-3;t[2]=1,M(t,0,c,n),t[2+c]=1,t.size=Math.abs(a),t.start=0,t.end=t.size}function w(e,t,n,r){for(var i=0;i<e.length;i++){var o=[];k(e[i],o,n,r),t.push(o)}}function P(e){return e/360+.5}function C(e){e=Math.sin(e*Math.PI/180),e=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return e<0?0:1<e?1:e}function x(e,t,n,r,i,o,a,s){if(r/=t,(n/=t)<=o&&a<r)return e;if(a<n||r<=o)return null;for(var u=[],l=0;l<e.length;l++){var c=e[l],h=c.geometry,d=c.type,v=0===i?c.minX:c.minY,f=0===i?c.maxX:c.maxY;if(n<=v&&f<r)u.push(c);else if(!(f<n||r<=v)){var g=[];if("Point"===d||"MultiPoint"===d)!function(e,t,n,r,i){for(var o=0;o<e.length;o+=3){var a=e[o+i];n<=a&&a<=r&&(t.push(e[o]),t.push(e[o+1]),t.push(e[o+2]))}}(h,g,n,r,i);else if("LineString"===d)D(h,g,n,r,i,!1,s.lineMetrics);else if("MultiLineString"===d)R(h,g,n,r,i,!1);else if("Polygon"===d)R(h,g,n,r,i,!0);else if("MultiPolygon"===d)for(var p=0;p<h.length;p++){var y=[];R(h[p],y,n,r,i,!0),y.length&&g.push(y)}if(g.length)if(s.lineMetrics&&"LineString"===d)for(p=0;p<g.length;p++)u.push(T(c.id,d,g[p],c.tags));else"LineString"!==d&&"MultiLineString"!==d||(1===g.length?(d="LineString",g=g[0]):d="MultiLineString"),"Point"!==d&&"MultiPoint"!==d||(d=3===g.length?"Point":"MultiPoint"),u.push(T(c.id,d,g,c.tags))}}return u.length?u:null}function D(e,t,n,r,i,o,a){for(var s,u,l=V(e),c=0===i?j:F,h=e.start,d=0;d<e.length-3;d+=3){var v=e[d],f=e[d+1],g=e[d+2],p=e[d+3],y=e[d+4],m=0===i?v:f,I=0===i?p:y,_=!1;a&&(s=Math.sqrt(Math.pow(v-p,2)+Math.pow(f-y,2))),m<n?n<I&&(u=c(l,v,f,p,y,n),a&&(l.start=h+s*u)):r<m?I<r&&(u=c(l,v,f,p,y,r),a&&(l.start=h+s*u)):G(l,v,f,g),I<n&&n<=m&&(u=c(l,v,f,p,y,n),_=!0),r<I&&m<=r&&(u=c(l,v,f,p,y,r),_=!0),!o&&_&&(a&&(l.end=h+s*u),t.push(l),l=V(e)),a&&(h+=s)}var E=e.length-3,v=e[E],f=e[1+E],g=e[2+E];n<=(m=0===i?v:f)&&m<=r&&G(l,v,f,g),E=l.length-3,o&&3<=E&&(l[E]!==l[0]||l[1+E]!==l[1])&&G(l,l[0],l[1],l[2]),l.length&&t.push(l)}function V(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function R(e,t,n,r,i,o){for(var a=0;a<e.length;a++)D(e[a],t,n,r,i,o,!1)}function G(e,t,n,r){e.push(t),e.push(n),e.push(r)}function j(e,t,n,r,i,o){t=(o-t)/(r-t);return e.push(o),e.push(n+(i-n)*t),e.push(1),t}function F(e,t,n,r,i,o){n=(o-n)/(i-n);return e.push(t+(r-t)*n),e.push(o),e.push(1),n}function U(e,t){for(var n=[],r=0;r<e.length;r++){var i,o=e[r],a=o.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)i=B(o.geometry,t);else if("MultiLineString"===a||"Polygon"===a){i=[];for(var s=0;s<o.geometry.length;s++)i.push(B(o.geometry[s],t))}else if("MultiPolygon"===a)for(i=[],s=0;s<o.geometry.length;s++){for(var u=[],l=0;l<o.geometry[s].length;l++)u.push(B(o.geometry[s][l],t));i.push(u)}n.push(T(o.id,a,i,o.tags))}return n}function B(e,t){var n=[];n.size=e.size,void 0!==e.start&&(n.start=e.start,n.end=e.end);for(var r=0;r<e.length;r+=3)n.push(e[r]+t,e[r+1],e[r+2]);return n}function z(e,t){if(e.transformed)return e;for(var n,r=1<<e.z,i=e.x,o=e.y,a=0;a<e.features.length;a++){var s=e.features[a],u=s.geometry,l=s.type;if(s.geometry=[],1===l)for(n=0;n<u.length;n+=2)s.geometry.push(Y(u[n],u[n+1],t,r,i,o));else for(n=0;n<u.length;n++){for(var c=[],h=0;h<u[n].length;h+=2)c.push(Y(u[n][h],u[n][h+1],t,r,i,o));s.geometry.push(c)}}return e.transformed=!0,e}function Y(e,t,n,r,i,o){return[Math.round(n*(e*r-i)),Math.round(n*(t*r-o))]}function Z(e,t,n,r,i){for(var o=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,function(e,t,n,r){var i=t.geometry,o=t.type,a=[];if("Point"===o||"MultiPoint"===o)for(var s=0;s<i.length;s+=3)a.push(i[s]),a.push(i[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===o)W(a,i,e,n,!1,!1);else if("MultiLineString"===o||"Polygon"===o)for(s=0;s<i.length;s++)W(a,i[s],e,n,"Polygon"===o,0===s);else if("MultiPolygon"===o)for(var u=0;u<i.length;u++){var l=i[u];for(s=0;s<l.length;s++)W(a,l[s],e,n,!0,0===s)}if(a.length){var c=t.tags||null;if("LineString"===o&&r.lineMetrics){for(var h in c={},t.tags)c[h]=t.tags[h];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size}r={geometry:a,type:"Polygon"===o||"MultiPolygon"===o?3:"LineString"===o||"MultiLineString"===o?2:1,tags:c};null!==t.id&&(r.id=t.id),e.features.push(r)}}(a,e[s],o,i);var u=e[s].minX,l=e[s].minY,c=e[s].maxX,h=e[s].maxY;u<a.minX&&(a.minX=u),l<a.minY&&(a.minY=l),c>a.maxX&&(a.maxX=c),h>a.maxY&&(a.maxY=h)}return a}function W(e,t,n,r,i,o){var a=r*r;if(0<r&&t.size<(i?a:r))n.numPoints+=t.length/3;else{for(var s=[],u=0;u<t.length;u+=3)(0===r||t[u+2]>a)&&(n.numSimplified++,s.push(t[u]),s.push(t[u+1])),n.numPoints++;i&&function(e,t){for(var n=0,r=0,i=e.length,o=i-2;r<i;o=r,r+=2)n+=(e[r]-e[o])*(e[r+1]+e[o+1]);if(0<n===t)for(r=0,i=e.length;r<i/2;r+=2){var a=e[r],s=e[r+1];e[r]=e[i-2-r],e[r+1]=e[i-1-r],e[i-2-r]=a,e[i-1-r]=s}}(s,o),e.push(s)}}function J(e,t){var n=(t=this.options=function(e,t){for(var n in t)e[n]=t[n];return e}(Object.create(this.options),t)).debug;if(t.maxZoom<0||24<t.maxZoom)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var r,i,o,a,s=function(e,t){var n=[];if("FeatureCollection"===e.type)for(var r=0;r<e.features.length;r++)b(n,e.features[r],t,r);else"Feature"===e.type?b(n,e,t):b(n,{geometry:e},t);return n}(e,t);this.tiles={},this.tileCoords=[],n&&(this.stats={},this.total=0),r=s,o=(i=t).buffer/i.extent,e=x(a=r,1,-1-o,o,0,-1,2,i),t=x(r,1,1-o,2+o,0,-1,2,i),(e||t)&&(a=x(r,1,-o,1+o,0,-1,2,i)||[],e&&(a=U(e,1).concat(a)),t&&(a=a.concat(U(t,-1)))),(s=a).length&&this.splitTile(s,0,0,0),n&&s.length}function K(e,t,n){return 32*((1<<e)*n+t)+e}J.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},J.prototype.splitTile=function(e,t,n,r,i,o,a){for(var s=[e,t,n,r],u=this.options,l=u.debug;s.length;){r=s.pop(),n=s.pop(),t=s.pop(),e=s.pop();var c,h,d,v,f,g,p,y,m=1<<t,I=K(t,n,r),_=this.tiles[I];if(_||(_=this.tiles[I]=Z(e,t,n,r,u),this.tileCoords.push({z:t,x:n,y:r}),l&&(y="z"+t,this.stats[y]=(this.stats[y]||0)+1,this.total++)),_.source=e,i){if(t===u.maxZoom||t===i)continue;var E=1<<i-t;if(n!==Math.floor(o/E)||r!==Math.floor(a/E))continue}else if(t===u.indexMaxZoom||_.numPoints<=u.indexMaxPoints)continue;_.source=null,0!==e.length&&(h=.5-(c=.5*u.buffer/u.extent),d=1+c,p=v=f=g=null,y=x(e,m,n-c,n+(I=.5+c),0,_.minX,_.maxX,u),E=x(e,m,n+h,n+d,0,_.minX,_.maxX,u),e=null,y&&(p=x(y,m,r-c,r+I,1,_.minY,_.maxY,u),v=x(y,m,r+h,r+d,1,_.minY,_.maxY,u),y=null),E&&(f=x(E,m,r-c,r+I,1,_.minY,_.maxY,u),g=x(E,m,r+h,r+d,1,_.minY,_.maxY,u),E=null),s.push(p||[],t+1,2*n,2*r),s.push(v||[],t+1,2*n,2*r+1),s.push(f||[],t+1,2*n+1,2*r),s.push(g||[],t+1,2*n+1,2*r+1))}},J.prototype.getTile=function(e,t,n){var r=this.options,i=r.extent;r.debug;if(e<0||24<e)return null;r=1<<e,r=K(e,t=(t%r+r)%r,n);if(this.tiles[r])return z(this.tiles[r],i);for(var o,a=e,s=t,u=n;!o&&0<a;)a--,s=Math.floor(s/2),u=Math.floor(u/2),o=this.tiles[K(a,s,u)];return o&&o.source?(this.splitTile(o.source,a,s,u,e,t,n),this.tiles[r]?z(this.tiles[r],i):null):null};function X(e){for(var t,n=[],r=[],i=0,o=e.coordinates.length;i<o;i+=1){var a=e.coordinates[i],s=function(e){e=function(e){for(var t=0,n=e.length,r=0;r<n-1;r+=1){var i=e[r],o=e[r+1];t+=i[0]*o[1]-o[0]*i[1]}return t+=e[n-1][0]*e[0][1]-e[0][0]*e[n-1][1]}(e);return 0<e?ve:e<0?fe:void 0}(a);null!==s&&(s===(t=t||s)&&r.length&&(n.push(r),r=[]),r.push(a))}return 0<r.length&&n.push(r),1===n.length?(e.type=$,e.coordinates=n[0]):1<n.length?(e.type=ne,e.coordinates=n):e=null,e}function Q(e,t,n,r,i){var o;return i=(t=n=(o=n,n=r,r=i,t=1<<(i=t),(i=[])[0]=((e=e)[0]/r+o)/t,i[1]=(e[1]/r+n)/t,{x:i[0],y:i[1]})).x,n=t.y,t=360*(i-.5),i=Math.exp(Math.PI*(.5-n)/.25)-1,n=Math.exp(Math.PI*(.5-n)/.25)+1,[t,180*Math.asin(i/n)/Math.PI]}var q="Point",$="Polygon",ee="MultiPoint",te="MultiLineString",ne="MultiPolygon",re={fillColor:"#e0e0e0",outlineColor:"#829DB4",outlineWidth:1},ie={fill:"#333333",size:13},oe={fillColor:"#F2F285",outlineColor:"#0088BF",outlineWidth:1.2},ae=18,se=18,ue=24,le={FOOTPRINT:"FOOTPRINT",ICON:"ICON",TEXT:"TEXT",VECTOR:"VECTOR"},ce=1,he=2,de=3,ve="CW",fe="CCW";function ge(e){var t=void 0===(i=e.addressList)?[]:i,n=void 0===(r=e.geometries)?[]:r,r=void 0===(i=e.entity)?null:i,i=void 0===(i=e.name)?"":i,e=void 0===(e=e.icon)?"":e;u(this,ge),this.addressList=t,this.geometries=n,this.icon=e,this.entity=r,this.name=i}var pe,ye,me=(function(e){e.exports=function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==s(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){function c(e){return(c="function"==typeof Symbol&&"symbol"==s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}var o=n(1),n=n(7),I=n.get,P=(n.deepValue,n.isArray),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(_.prototype,[{key:"setCollection",value:function(e){return this.list=e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var r=e[t];this._keyWeights[r]=1,this._keyNames.push(r)}else{for(var i=0,o=0,a=e.length;o<a;o+=1){var s=e[o];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var u=s.name;if(this._keyNames.push(u),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');s=s.weight;if(s<0||1<s)throw new Error('"weight" property in key must bein the range of [0, 1)');i+=this._keyWeights[u]=s}if(1<i)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));t=this._prepareSearchers(e),e=t.tokenSearchers,t=t.fullSearcher,t=this._search(e,t);return this._computeScore(t),this.options.shouldSort&&this._sort(t),n.limit&&"number"==typeof n.limit&&(t=t.slice(0,n.limit)),this._format(t)}},{key:"_prepareSearchers",value:function(e){var e=0<arguments.length&&void 0!==e?e:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?t:void 0,i=this.list,o={},a=[];if("string"==typeof i[0]){for(var s=0,u=i.length;s<u;s+=1)this._analyze({key:"",value:i[s],record:s,index:s},{resultMap:o,results:a,tokenSearchers:n,fullSearcher:r});return a}for(var l=0,c=i.length;l<c;l+=1)for(var h=i[l],d=0,v=this._keyNames.length;d<v;d+=1){var f=this._keyNames[d];this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:l},{resultMap:o,results:a,tokenSearchers:n,fullSearcher:r})}return a}},{key:"_analyze",value:function(e,t){var T=this,N=e.key,n=e.arrayIndex,r=void 0===n?-1:n,i=e.value,o=e.record,n=e.index,e=t.tokenSearchers,b=void 0===e?[]:e,S=t.fullSearcher,e=t.resultMap,k=void 0===e?{}:e,t=t.results,w=void 0===t?[]:t;!function e(t,n,r,i){if(null!=n)if("string"==typeof n){var o=!1,a=-1,s=0;T._log("\nKey: ".concat(""===N?"--":N));var u=S.search(n);if(T._log('Full text: "'.concat(n,'", score: ').concat(u.score)),T.options.tokenize){for(var l=n.split(T.options.tokenSeparator),c=l.length,h=[],d=0,v=b.length;d<v;d+=1){var f=b[d];T._log('\nPattern: "'.concat(f.pattern,'"'));for(var g=!1,p=0;p<c;p+=1){var y=l[p],m=f.search(y),I={};m.isMatch?(I[y]=m.score,g=o=!0,h.push(m.score)):(I[y]=1,T.options.matchAllTokens||h.push(1)),T._log('Token: "'.concat(y,'", score: ').concat(I[y]))}g&&(s+=1)}a=h[0];for(var _=h.length,E=1;E<_;E+=1)a+=h[E];a/=_,T._log("Token score average:",a)}var M=u.score;-1<a&&(M=(M+a)/2),T._log("Score average:",M);var O=!T.options.tokenize||!T.options.matchAllTokens||s>=b.length;T._log("\nCheck Matches: ".concat(O)),(o||u.isMatch)&&O&&(M={key:N,arrayIndex:t,value:n,score:M},T.options.includeMatches&&(M.matchedIndices=u.matchedIndices),(u=k[i])?u.output.push(M):(k[i]={item:r,output:[M]},w.push(k[i])))}else if(P(n))for(var A=0,L=n.length;A<L;A+=1)e(A,n[A],r,i)}(r,i,o,n)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,r=0,i=e.length;r<i;r+=1){for(var o=e[r],a=o.output,s=a.length,u=1,l=0;l<s;l+=1){var c=a[l],h=c.key,d=n?t[h]:1,c=0===c.score&&t&&0<t[h]?Number.EPSILON:c.score;u*=Math.pow(c,d)}o.score=u,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var n,t=[];this.options.verbose&&(n=[],this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===c(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t},2)),n=null);var r=[];this.options.includeMatches&&r.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,i=n.length;r<i;r+=1){var o,a=n[r];0!==a.matchedIndices.length&&(o={indices:a.matchedIndices,value:a.value},a.key&&(o.key=a.key),a.hasOwnProperty("arrayIndex")&&-1<a.arrayIndex&&(o.arrayIndex=a.arrayIndex),t.matches.push(o))}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var i=0,o=e.length;i<o;i+=1){var a=e[i];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var s={item:a.item},u=0,l=r.length;u<l;u+=1)r[u](a,s);t.push(s)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),_);function _(e,t){var n=t.location,r=void 0===n?0:n,i=t.distance,o=void 0===i?100:i,a=t.threshold,s=void 0===a?.6:a,u=t.maxPatternLength,l=void 0===u?32:u,c=t.caseSensitive,h=void 0!==c&&c,d=t.tokenSeparator,v=void 0===d?/ +/g:d,f=t.findAllMatches,g=void 0!==f&&f,p=t.minMatchCharLength,y=void 0===p?1:p,m=t.id,n=void 0===m?null:m,i=t.keys,a=void 0===i?[]:i,u=t.shouldSort,c=void 0===u||u,d=t.getFn,f=void 0===d?I:d,p=t.sortFn,m=void 0===p?function(e,t){return e.score-t.score}:p,i=t.tokenize,u=void 0!==i&&i,d=t.matchAllTokens,p=void 0!==d&&d,i=t.includeMatches,d=void 0!==i&&i,i=t.includeScore,i=void 0!==i&&i,t=t.verbose,t=void 0!==t&&t;!function(e){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:o,threshold:s,maxPatternLength:l,isCaseSensitive:h,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y,id:n,keys:a,includeMatches:d,includeScore:i,shouldSort:c,getFn:f,sortFn:m,verbose:t,tokenize:u,matchAllTokens:p},this.setCollection(e),this._processKeys(a)}e.exports=n},function(e,t,n){var s=n(2),u=n(3),c=n(6),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(h.prototype,[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return r&&(i.matchedIndices=[[0,e.length-1]]),i}var o=this.options,a=o.maxPatternLength,t=o.tokenSeparator;if(this.pattern.length>a)return s(e,this.pattern,t);n=this.options,i=n.location,o=n.distance,a=n.threshold,t=n.findAllMatches,n=n.minMatchCharLength;return u(e,this.pattern,this.patternAlphabet,{location:i,distance:o,threshold:a,findAllMatches:t,minMatchCharLength:n,includeMatches:r})}}]),h);function h(e,t){var n=t.location,r=void 0===n?0:n,i=t.distance,o=void 0===i?100:i,a=t.threshold,s=void 0===a?.6:a,u=t.maxPatternLength,l=void 0===u?32:u,n=t.isCaseSensitive,i=void 0!==n&&n,a=t.tokenSeparator,u=void 0===a?/ +/g:a,n=t.findAllMatches,a=void 0!==n&&n,n=t.minMatchCharLength,n=void 0===n?1:n,t=t.includeMatches,t=void 0!==t&&t;!function(e){if(!(e instanceof h))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:o,threshold:s,maxPatternLength:l,isCaseSensitive:i,tokenSeparator:u,findAllMatches:a,includeMatches:t,minMatchCharLength:n},this.pattern=i?e:e.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=c(this.pattern))}e.exports=n},function(e,t){var u=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(u,"\\$&").replace(n,"|")),r=e.match(n),n=!!r,i=[];if(n)for(var o=0,a=r.length;o<a;o+=1){var s=r[o];i.push([e.indexOf(s),s.length-1])}return{score:n?.5:1,isMatch:n,matchedIndices:i}}},function(e,t,n){var k=n(4),w=n(5);e.exports=function(e,t,n,r){for(var i=r.location,o=void 0===i?0:i,a=r.distance,s=void 0===a?100:a,i=r.threshold,a=void 0===i?.6:i,i=r.findAllMatches,u=void 0!==i&&i,i=r.minMatchCharLength,i=void 0===i?1:i,r=r.includeMatches,r=void 0!==r&&r,l=o,c=e.length,h=a,d=e.indexOf(t,l),v=t.length,f=[],g=0;g<c;g+=1)f[g]=0;-1!==d&&(a=k(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),h=Math.min(a,h),-1!==(d=e.lastIndexOf(t,l+v))&&(S=k(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),h=Math.min(S,h))),d=-1;for(var p=[],y=1,m=v+c,I=1<<(v<=31?v-1:30),_=0;_<v;_+=1){for(var E=0,M=m;E<M;)k(t,{errors:_,currentLocation:l+M,expectedLocation:l,distance:s})<=h?E=M:m=M,M=Math.floor((m-E)/2+E);m=M;var O=Math.max(1,l-M+1),A=u?c:Math.min(l+M,c)+v,L=Array(A+2);L[A+1]=(1<<_)-1;for(var T=A;O<=T;--T){var N=T-1,b=n[e.charAt(N)];if(b&&(f[N]=1),L[T]=(L[T+1]<<1|1)&b,0!==_&&(L[T]|=(p[T+1]|p[T])<<1|1|p[T+1]),L[T]&I&&(y=k(t,{errors:_,currentLocation:N,expectedLocation:l,distance:s}))<=h){if(h=y,(d=N)<=l)break;O=Math.max(1,2*l-d)}}if(k(t,{errors:_+1,currentLocation:l,expectedLocation:l,distance:s})>h)break;p=L}var S={isMatch:0<=d,score:0===y?.001:y};return r&&(S.matchedIndices=w(f,i)),S}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,i=t.currentLocation,n=void 0===i?0:i,i=t.expectedLocation,i=void 0===i?0:i,t=t.distance,t=void 0===t?100:t,e=r/e.length,n=Math.abs(i-n);return t?e+n/t:n?1:e}},function(e,t){e.exports=function(){for(var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,r=[],i=-1,o=0,a=t.length;o<a;o+=1){var s=t[o];s&&-1===i?i=o:s||-1===i||((e=o-1)-i+1>=n&&r.push([i,e]),i=-1)}return t[o-1]&&n<=o-i&&r.push([i,o-1]),r}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var i=0;i<n;i+=1)t[e.charAt(i)]|=1<<n-i-1;return t}},function(e,t){function c(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function h(t){return null==t?"":function(){if("string"==typeof t)return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}()}function d(e){return"string"==typeof e}function v(e){return"number"==typeof e}e.exports={get:function(e,t){var l=[];return function e(t,n){if(n){var r=n.indexOf("."),i=n,o=null;-1!==r&&(i=n.slice(0,r),o=n.slice(r+1));var a=t[i];if(null!=a)if(o||!d(a)&&!v(a))if(c(a))for(var s=0,u=a.length;s<u;s+=1)e(a[s],o);else o&&e(a,o);else l.push(h(a))}else l.push(t)}(e,t),l},isArray:c,isString:d,isNum:v,toString:h}}])}(pe={exports:{}}),pe.exports),Ie=(ye=me)&&ye.__esModule&&Object.prototype.hasOwnProperty.call(ye,"default")?ye.default:ye,_e=(me.Fuse,{keys:[{name:"name",weight:.6},{name:"addressList",weight:.4}],threshold:.2}),Ee=function(){function t(e){u(this,t),this.fuseSearch=null,this.levels_=null,this.searchListEntities_=[],this.searchListIcons_=[],this.searchList_=[],this.venueModel=e,this.init()}return l(t,[{key:"init",value:function(){var e=this.venueModel.getGeometries().reduce(function(e,t){return e[t.getId()]=t,e},{});this.initEntityList(this.venueModel.entities),this.initIconList(e),this.levels_=this.venueModel.getLevels().map(function(e){return{levelId:e.getId(),levelName:e.getName(),drawingId:e.getDrawing().getId(),drawingName:e.getDrawing().getName()}});e=[].concat(L(this.searchListEntities_),L(this.searchListIcons_));this.searchList_=e.sort(function(e,t){return e.name.localeCompare(t.name)}),this.fuseSearch_=new Ie(this.searchList_,_e)}},{key:"initEntityList",value:function(e){e=(0<arguments.length&&void 0!==e?e:[]).map(function(e){return new ge({geometries:e.getGeometries(),addressList:e.getInternalAddress()||[],name:e.getName()||"",entity:e})});this.searchListEntities_=e}},{key:"initIconList",value:function(e){e=0<arguments.length&&void 0!==e?e:{};this.searchListIcons_=Object.values(e).filter(function(e){return e.getIcon()}).map(function(e){var t=e.getIcon();return new ge({geometries:[e],icon:t.getSVG(),name:t.ar||""})})}},{key:"all",value:function(){return this.searchList_}},{key:"allIconTypes",value:function(){var e=this.searchListIcons_.reduce(function(e,t){return e[t.name]=t.name,e},{});return Object.keys(e)}},{key:"find",value:function(e){e=0<arguments.length&&void 0!==e?e:"";return""===e?this.searchList_:this.fuseSearch_.search(e)}},{key:"groupByLevel",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.searchList_;return this.levels_?L(this.levels_.flatMap(function(n){return O(O({},n),{},{results:t.filter(function(e){return t=n,0<(e=e).geometries.length&&e.geometries.find(function(e){return Number(e.getLevel().getId())===Number(t.levelId)});var t})})})):[]}}]),t}(),Me="MFS",Oe=0,Ae=1,Le=2,Te=3,Ne=4,be=2,Se=0,ke=1,we=2,Pe=3,Ce="Point",xe="LineString",De="Polygon",Ve="MultiPoint",Re="MultiLineString",Ge="MultiPolygon",He=Object.freeze({STANDARD:"STANDARD",FLATTEN:"FLATTEN",OUTDOOR_MAIN:"OUTDOOR_MAIN",INDOOR_MAIN:"INDOOR_MAIN",NO_OUTDOORS:"NO_OUTDOORS",FLATTEN_INDOOR_MAIN:"FLATTEN_INDOOR_MAIN",FLATTEN_OUTDOOR_COPY:"FLATTEN_OUTDOOR_COPY"}),je=Object.freeze({THEME:"THEME",THEME_MAP:"THEME_MAP",PRESETS:"PRESETS",SDK_STRINGS:"SDK_STRINGS",ICON_FILE:"ICON_FILE",INPUT_COLORS:"INPUT_COLORS",BASE_MAP_INFO:"BASE_MAP_INFO",CONFIG_PROFILE:"CONFIG_PROFILE",NAV_THEME:"NAV_THEME",NAV_NAME_THEME:"NAV_NAME_THEME",NAV_PROP_MAP:"NAV_PROP_MAP",NAV_STRINGS:"NAV_STRINGS",NAV_THEME_MAP:"NAV_THEME_MAP",NAV_NAME_THEME_MAP:"NAV_NAME_THEME_MAP",V4_THEME_FAMILY:"V4_THEME_FAMILY",V4_MAPTYPE_THEME:"V4_MAPTYPE_THEME",ICON:"ICON",MARKER:"MARKER",PERMISSIONS:"PERMISSIONS",NAICS_ARRAY:"NAICS_ARRAY",NAICS_MAP:"NAICS_MAP"}),Fe=Object.freeze((c(zt={},je.THEME,"themeUrls"),c(zt,je.THEME_MAP,"themeMapUrl"),c(zt,je.PRESETS,"presetsUrl"),c(zt,je.SDK_STRINGS,"stringsUrl"),zt)),Ue=Object.freeze((c(Ft={},je.THEME,"themeOverrides"),c(Ft,je.THEME_MAP,"themeMapOverrides"),c(Ft,je.PRESETS,"presetOverrides"),c(Ft,je.SDK_STRINGS,"stringsOverrides"),c(Ft,je.INPUT_COLORS,"inputColorOverrides"),Ft)),Be=(Object.freeze((c(Ye={},je.THEME,["Modern","Standard","Factory","Navteq","TheBase","Westfield_noLabels","Westfield","TDM_noLabel"]),c(Ye,je.SDK_STRINGS,["Standard","SDK","sdk/standard"]),c(Ye,je.V4_THEME_FAMILY,["modern","standard"]),c(Ye,je.V4_MAPTYPE_THEME,["Airport Terminal","Airport","Casino","College Building","College Campus","Convention","General","Hospital","Outdoor","Retail","School Building","School Campus","Shopping Mall","Traffic","Train Station"]),c(Ye,je.NAV_THEME,["Factory","MapEditor"]),c(Ye,je.ICON,["Multicolor","Standard","TheBase","Factory"]),Ye)),Object.freeze((c(zt={},je.THEME,"Modern"),c(zt,je.THEME_MAP,"Standard"),c(zt,je.PRESETS,"Standard"),c(zt,je.SDK_STRINGS,"Standard"),c(zt,je.ICON_FILE,"Standard"),c(zt,je.INPUT_COLORS,"Standard"),c(zt,je.BASE_MAP_INFO,"Standard"),c(zt,je.CONFIG_PROFILE,"factory"),c(zt,je.NAV_THEME,"Factory"),c(zt,je.NAV_NAME_THEME,"FactoryName"),c(zt,je.NAV_PROP_MAP,"Standard"),c(zt,je.NAV_STRINGS,"Standard"),c(zt,je.NAV_THEME_MAP,"Standard"),c(zt,je.NAV_NAME_THEME_MAP,"StandardName"),c(zt,je.V4_THEME_FAMILY,"Standard"),c(zt,je.V4_MAPTYPE_THEME,"Standard"),c(zt,je.ICON,"Multicolor"),c(zt,je.MARKER,"Standard"),zt))),ze=Object.freeze({GEO_JSON:"GEO_JSON",V5_MAP:"V5_MAP",V5_NAV:"V5_NAV",V5_INFO:"V5_INFO",KML:"KML",SVG:"SVG",PNG:"PNG"}),Ye=Object.freeze((c(Ft={},ze.V5_MAP,{COMMUNITY_MAP:"COMMUNITY_MAP",COMMUNITY_DIRECTORY:"COMMUNITY_DIRECTORY",COMMUNITY_DETAIL:"COMMUNITY_DETAIL",LEVEL_GEOMETRY:"LEVEL_GEOMETRY",DRAWING_ENTITY:"DRAWING_ENTITY"}),c(Ft,ze.GEO_JSON,{COMMUNITY_MAP:"COMMUNITY_MAP",COMMUNITY_ENTITY:"COMMUNITY_ENTITY",PATH_LEVEL_GEOMETRY:"PATH_LEVEL_GEOMETRY",GEOJSON_LEVEL_GEOMETRY:"GEOJSON_LEVEL_GEOMETRY"}),c(Ft,ze.V5_NAV,{JSON_NAV:"JSON_NAV",BINARY_NAV:"BINARY_NAV",JSON_ENHANCED_NAV:"JSON_ENHANCED_NAV",BINARY_ENHANCED_NAV:"BINARY_ENHANCED_NAV"}),c(Ft,ze.V5_INFO,{GEOMETRY_INFO:"GEOMETRY_INFO"}),c(Ft,ze.SVG,{PLAIN:"PLAIN",PRETTY:"PRETTY",PRETTY_HORIZONTAL_LABEL:"PRETTY_HORIZONTAL_LABEL"}),c(Ft,ze.KML,{RASTER:"RASTER",VECTOR:"VECTOR",RASTER_HORIZONTAL:"RASTER_HORIZONTAL",VECTOR_HORIZONTAL:"VECTOR_HORIZONTAL"}),c(Ft,ze.PNG,{LOW_RESOLUTION:"LOW_RESOLUTION",HIGH_RESOLUTION:"HIGH_RESOLUTION",LOW_RESOLUTION_GEO:"LOW_RESOLUTION_GEO",HIGH_RESOLUTION_GEO:"HIGH_RESOLUTION_GEO",LOW_RESOLUTION_HORIZONTAL:"LOW_RESOLUTION_HORIZONTAL",HIGH_RESOLUTION_HORIZONTAL:"HIGH_RESOLUTION_HORIZONTAL",LOW_RESOLUTION_HORIZONTAL_GEO:"LOW_RESOLUTION_HORIZONTAL_GEO",HIGH_RESOLUTION_HORIZONTAL_GEO:"HIGH_RESOLUTION_HORIZONTAL_GEO"}),Ft));function Ze(){}function We(){We.init.call(this)}function Je(e){return void 0===e._maxListeners?We.defaultMaxListeners:e._maxListeners}function Ke(e,t,n,r){var i,o;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');return(i=e._events)?(i.newListener&&(e.emit("newListener",t,n.listener||n),i=e._events),o=i[t]):(i=e._events=new Ze,e._eventsCount=0),o?("function"==typeof o?o=i[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),o.warned||(r=Je(e))&&0<r&&o.length>r&&(o.warned=!0,(r=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit")).name="MaxListenersExceededWarning",r.emitter=e,r.type=t,r.count=o.length,console.warn)):(o=i[t]=n,++e._eventsCount),e}function Xe(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function Qe(e){var t=this._events;if(t){e=t[e];if("function"==typeof e)return 1;if(e)return e.length}return 0}function qe(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}Ze.prototype=Object.create(null),(We.EventEmitter=We).usingDomains=!1,We.prototype.domain=void 0,We.prototype._events=void 0,We.prototype._maxListeners=void 0,We.defaultMaxListeners=10,We.init=function(){this.domain=null,We.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new Ze,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},We.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},We.prototype.getMaxListeners=function(){return Je(this)},We.prototype.emit=function(e,t,n,r){var i,o,a,s="error"===e,u=this._events;if(u)s=s&&null==u.error;else if(!s)return!1;if(l=this.domain,s){if(s=t,l)return(s=s||new Error('Uncaught, unspecified "error" event')).domainEmitter=this,s.domain=l,s.domainThrown=!1,l.emit("error",s),!1;if(s instanceof Error)throw s;var l=new Error('Uncaught, unspecified "error" event. ('+s+")");throw l.context=s,l}if(!(i=u[e]))return!1;var c,h="function"==typeof i;switch(c=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=qe(e,r),o=0;o<r;++o)i[o].call(n)}(i,h,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=qe(e,i),a=0;a<i;++a)o[a].call(n,r)}(i,h,this,t);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,a=qe(e,o),s=0;s<o;++s)a[s].call(n,r,i)}(i,h,this,t,n);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var a=e.length,s=qe(e,a),u=0;u<a;++u)s[u].call(n,r,i,o)}(i,h,this,t,n,r);break;default:for(o=new Array(c-1),a=1;a<c;a++)o[a-1]=arguments[a];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=qe(e,i),a=0;a<i;++a)o[a].apply(n,r)}(i,h,this,o)}return!0},We.prototype.addListener=function(e,t){return Ke(this,e,t,!1)},We.prototype.on=We.prototype.addListener,We.prototype.prependListener=function(e,t){return Ke(this,e,t,!0)},We.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,Xe(this,e,t)),this},We.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,Xe(this,e,t)),this},We.prototype.removeListener=function(e,t){var n,r,i,o,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new Ze:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;0<o--;)if(n[o]===t||n[o].listener&&n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new Ze,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,a||t)}return this},We.prototype.removeAllListeners=function(e){var t,n=this._events;if(!n)return this;if(!n.removeListener)return 0===arguments.length?(this._events=new Ze,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new Ze:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new Ze,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(;this.removeListener(e,t[t.length-1]),t[0];);return this},We.prototype.listeners=function(e){var t=this._events,n=t&&(n=t[e])?"function"==typeof n?[n.listener||n]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(n):[];return n},We.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):Qe.call(e,t)},We.prototype.listenerCount=Qe,We.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};var $e="venues-ui-button--active",et="venues-ui-button",tt="venues-ui__drawings",nt="data-drawing",rt=function(){function o(e,t,n){var r=this;u(this,o),this.clickHandler=n,this.containerDiv=document.createElement("div"),this.containerDiv.setAttribute("class",tt);var i=document.createElement("div");i.setAttribute("class","trigger ".concat(et));n=document.createElement("div");n.setAttribute("class","arrow arrow--down"),i.appendChild(n),i.addEventListener("click",function(){i.classList.toggle($e),r.containerButtons.classList.toggle("drawings--open")}),this.containerDiv.appendChild(i),this.containerButtons=document.createElement("div"),this.containerButtons.setAttribute("class","drawings"),this.containerDiv.appendChild(this.containerButtons),t&&this.update(t),e.appendChild(this.containerDiv)}return l(o,[{key:"drawButton",value:function(e,t,n){var r=this,i=document.createElement("div"),n=Number(n)===Number(e);i.setAttribute("class",n?"".concat(et," ").concat($e):et),i.innerHTML=t,i.setAttribute(nt,e),i.addEventListener("click",function(){r.switch(e),r.clickHandler(e)}),this.containerButtons.appendChild(i)}},{key:"switch",value:function(e){this.containerButtons.querySelectorAll(".".concat(tt," .").concat($e)).forEach(function(e){return e.setAttribute("class",et)});e=this.containerButtons.querySelector("[".concat(nt,"='").concat(e,"']"));e&&e.setAttribute("class","".concat(et," ").concat($e))}},{key:"update",value:function(n){var r=this;this.containerButtons.innerHTML="";var e=function(e){e=e.getDrawings();return new Map(e.map(function(e){var t=e.getDisplayName()||e.getName();return[e.getId(),t]}))}(n);0<e.size&&e.forEach(function(e,t){return r.drawButton(t,e,n.getRootDrawing().getId())})}}]),o}(),it="venues-ui-button--active",ot="venues-ui-button",at="levels",st="data-level",ut="venues-ui__levels",lt=4,ct=function(){function o(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:lt;u(this,o),this.clickHandler=r,this.levelButtonCount=i,this.currentScrollIndex=0,this.containerUI=document.createElement("div"),this.containerUI.setAttribute("class","".concat(ut)),this.containerButtons=document.createElement("div"),this.containerButtons.setAttribute("class",at),this.containerUI.appendChild(this.containerButtons),t&&this.update(t,n),e.appendChild(this.containerUI)}return l(o,[{key:"clear",value:function(){this.containerButtons.innerHTML="",this.buttonScrollUp&&(this.containerUI.removeChild(this.buttonScrollUp),this.buttonScrollUp=null),this.buttonScrollDown&&(this.containerUI.removeChild(this.buttonScrollDown),this.buttonScrollDown=null)}},{key:"drawLevelButton",value:function(e,t){var n=this,r=document.createElement("div");r.innerHTML=t,r.style.fontSize="".concat(Math.max(Math.min(28.8/t.length,11.52),10),"px"),r.style.display="block",r.setAttribute("class",ot),r.setAttribute(st,e),r.addEventListener("click",function(){n.switch(e),n.clickHandler(e)}),this.containerButtons.appendChild(r)}},{key:"drawScrollButtons",value:function(){var e=this;this.buttonScrollUp=document.createElement("div"),this.buttonScrollUp.setAttribute("class","".concat(ot," ").concat(ot,"--up"));var t=document.createElement("div");t.setAttribute("class","arrow arrow--up"),this.buttonScrollUp.appendChild(t),this.buttonScrollUp.addEventListener("click",function(){return e.scroll(1)}),this.containerUI.insertBefore(this.buttonScrollUp,this.containerButtons),this.buttonScrollDown=document.createElement("div"),this.buttonScrollDown.setAttribute("class","".concat(ot," ").concat(ot,"--down"));t=document.createElement("div");t.setAttribute("class","arrow arrow--down"),this.buttonScrollDown.appendChild(t),this.buttonScrollDown.addEventListener("click",function(){return e.scroll(-1)}),this.containerUI.appendChild(this.buttonScrollDown)}},{key:"scroll",value:function(e){var t,n=0<arguments.length&&void 0!==e?e:0,r=Array.from(this.containerButtons.querySelectorAll(".".concat(ot))).reverse(),i=[];0<=n?(this.currentScrollIndex=Math.min(this.currentScrollIndex+n,r.length-this.levelButtonCount),e=Math.min(this.currentScrollIndex,r.length-this.levelButtonCount),t=Math.min(this.currentScrollIndex+this.levelButtonCount,r.length),i=r.slice(e,t)):n<0&&(this.currentScrollIndex=Math.max(this.currentScrollIndex+n,0),t=Math.max(0,this.currentScrollIndex),n=Math.min(r.length,this.currentScrollIndex+this.levelButtonCount),i=r.slice(t,n)),r.forEach(function(e){-1!==i.indexOf(e)?e.style.display="block":e.style.display="none"}),this.buttonScrollDown&&(0===this.currentScrollIndex?this.buttonScrollDown.setAttribute("disabled","disabled"):this.buttonScrollDown.removeAttribute("disabled")),this.buttonScrollUp&&(this.currentScrollIndex===r.length-this.levelButtonCount?this.buttonScrollUp.setAttribute("disabled","disabled"):this.buttonScrollUp.removeAttribute("disabled"))}},{key:"switch",value:function(e){this.containerButtons.querySelectorAll(".".concat(it)).forEach(function(e){return e.setAttribute("class",ot)});var t=this.containerButtons.querySelector(".".concat(ut," [").concat(st,"='").concat(e,"']"));t&&(e=Array.from(this.containerButtons.querySelectorAll(".".concat(ot))).reverse(),t.setAttribute("class","".concat(ot," ").concat(it)),((t=e.indexOf(t))<this.currentScrollIndex||t>=this.currentScrollIndex+lt)&&this.scroll(t-this.currentScrollIndex))}},{key:"update",value:function(e,t){var n=this,t=function(e){return new Map((0<arguments.length&&void 0!==e?e:[]).map(function(e){return[e.getZIndex(),e.getShortName()||e.getDisplayName()||e.getName()]}))}(function(e,t){if(t!==He.FLATTEN)return e.getLevels();e=e.getVenueModel().getLevelMapFlattenedByZIndex_();return Object.values(e).map(function(e){return e[0]})}(e,t).sort(function(e,t){return t.getZIndex()-e.getZIndex()})),r=e.getMainLevel().getZIndex();this.clear(),t.forEach(function(e,t){return n.drawLevelButton(t,e)}),t.size>this.levelButtonCount&&(t.size>this.levelButtonCount+1?this.currentScrollIndex=Math.min(Array.from(t).reverse().findIndex(function(e){return e[0]===r}),t.size-this.levelButtonCount):this.currentScrollIndex=0,this.drawScrollButtons(),this.scroll(0)),this.switch(r)}}]),o}(),ht={VENUE_DATA_LOADED:"VENUE_DATA_LOADED",VENUE_MAP_DATA_LOADED:"VENUE_MAP_DATA_LOADED",VENUE_ENTITY_DATA_LOADED:"VENUE_ENTITY_DATA_LOADED",VENUE_DATA_MODEL_LOADED:"VENUE_DATA_MODEL_LOADED",VENUE_NAV_DATA_LOADED:"VENUE_NAV_DATA_LOADED",META_DATA_LOADED:"META_DATA_LOADED",META_DATA_MODEL_LOADED:"META_DATA_MODEL_LOADED",META_DATA_MODEL_UPDATED:"META_DATA_MODEL_UPDATED",VENUE_ICONS_LOADED:"VENUE_ICONS_LOADED"},dt=(Object.freeze((c(zt={},ht.VENUE_DATA_LOADED,{description:"event fired when all requested files along with metadata & overrides are loaded",emitTemplate:{}}),c(zt,ht.VENUE_MAP_DATA_LOADED,{description:"event fired when requested levels, drawings & community files are loaded",emitTemplate:{}}),c(zt,ht.VENUE_ENTITY_DATA_LOADED,{description:"event fired when requested entity data is loaded",emitTemplate:{}}),c(zt,ht.VENUE_DATA_MODEL_LOADED,{description:"event fired when a map file is loaded",emitTemplate:{}}),c(zt,ht.VENUE_NAV_DATA_LOADED,{description:"event fired when requested navigation product is loaded",emitTemplate:{}}),c(zt,ht.META_DATA_LOADED,{description:"event fired when all requested meta files are loaded except icon & marker",emitTemplate:{}}),c(zt,ht.META_DATA_MODEL_LOADED,{description:"event fired when a specific model is loaded except icon & marker",emitTemplate:{}}),c(zt,ht.META_DATA_MODEL_UPDATED,{description:"event fired when a specific meta override is added or removed",emitTemplate:{}}),c(zt,ht.VENUE_ICONS_LOADED,{description:"event fired when all icons of venue are loaded",emitTemplate:{}}),zt)),new We);dt.EVENT_NAME=ht,dt.on("newListener",function(e){});function vt(t,n){var r,i,o,a,s=0;Object.keys(n).forEach(function(e){for(r=n[e],null==(o=r.priority)&&(o=0),a=!1;!a;)s<t.length?(i=t[s],null==(i=i.priority)&&(i=0)):i=Number.MAX_VALUE,o<=i&&(t.splice(s,0,r),a=!0),s+=1})}var ft=Math.PI/180,gt=180/Math.PI,pt=function(){function d(){u(this,d)}return l(d,null,[{key:"toRadians",value:function(e){return e*ft}},{key:"toDegrees",value:function(e){return e*gt}},{key:"getInverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2],t=[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,0,0];return t[4]=-(t[0]*e[4]+t[2]*e[5]),t[5]=-(t[1]*e[4]+t[3]*e[5]),t}},{key:"applyTransformToPoint",value:function(e,t){return[t[0]*e[0]+t[1]*e[2]+e[4],t[0]*e[1]+t[1]*e[3]+e[5]]}},{key:"transformProduct",value:function(e,t){var n=[0,0,0,0,0,0];return n[0]=t[0]*e[0]+t[2]*e[1],n[1]=t[1]*e[0]+t[3]*e[1],n[2]=t[0]*e[2]+t[2]*e[3],n[3]=t[1]*e[2]+t[3]*e[3],n[4]=t[0]*e[4]+t[2]*e[5]+t[4],n[5]=t[1]*e[4]+t[3]*e[5]+t[5],n}},{key:"convertLonLatToMerc",value:function(e){var t=e[0]*ft,e=e[1]*ft,e=Math.sin(e);return[.5+t/(2*Math.PI),.5-Math.log((1+e)/(1-e))/(4*Math.PI)]}},{key:"convertMercToLatLon",value:function(e){var t=2*Math.PI*(e[0]-.5),e=Math.atan(Math.sinh(2*Math.PI*(.5-e[1])));return[t/ft,e/ft]}},{key:"getTransformScale",value:function(e){return Math.sqrt(e[0]*e[3]-e[1]*e[2])}},{key:"getLonLatToMercTransform",value:function(e){var t=[1/360,0,0,-1/(360*Math.cos(e[1]*ft)),0,0],n=d.applyTransformToPoint(t,e),e=d.convertLonLatToMerc(e);return t[4]=e[0]-n[0],t[5]=e[1]-n[1],t}},{key:"getNatToMercTransform",value:function(e){var t=[e[4],e[5]],t=d.getLonLatToMercTransform(t);return d.transformProduct(e,t)}},{key:"convertMxMy2LonLat",value:function(e,t){return e.length&&t.length?d.applyTransformToPoint(e,t):[]}},{key:"convertLonLat2MxMy",value:function(e,t){if(!e.length||!t.length)return[];e=d.getInverseTransform(e);return d.applyTransformToPoint(e,t)}},{key:"getFlattenedQuadraticBezierCurve",value:function(e,t,n,r){var i=[],o=3<arguments.length&&void 0!==r?r:10;o<1&&(o=6);for(var a=0;a<=o;a+=1){var s=a/o,u=(1-s)*(1-s),l=2*s*(1-s),c=s*s,s=u*e[0]+l*t[0]+c*n[0],c=u*e[1]+l*t[1]+c*n[1];i.push([s,c])}return i}},{key:"getFlattenedCubicBezierCurve",value:function(e,t,n,r,i){var o=[],a=4<arguments.length&&void 0!==i?i:10;a<1&&(a=6);for(var s=0;s<=a;s+=1){var u=s/a,l=(1-u)*(1-u)*(1-u),c=3*u*(1-u)*(1-u),h=3*u*u*(1-u),d=u*u*u,u=l*e[0]+c*t[0]+h*n[0]+d*r[0],d=l*e[1]+c*t[1]+h*n[1]+d*r[1];o.push([u,d])}return o}},{key:"getRectangularCoordinatesOfLabelArea",value:function(e,t,n){var r=!(2<arguments.length&&void 0!==n)||n,i=A(e,6),o=i[0],a=i[1],s=i[2],u=i[3],n=i[5],i=d.getDeltaLonLatForMeterAtGivenLonLat(o,a),e=e[4];return r?(n&&(e*=-1),null!=t&&(e=(e+=t<0?2*Math.PI+t:t)<0?2*Math.PI+e:e)):e=0,d.getRectVerticesFromSignatureRectRepresentation([o,a],{xLength:s,yLength:u},e,i)}},{key:"getRotatedPoint",value:function(e,t,n,r){var i=!(2<arguments.length&&void 0!==n)||n,o=3<arguments.length&&void 0!==r?r:[0,0],a=Math.cos(t),n=Math.sin(t),r=e[0]-o[0],t=e[1]-o[1],e=[];return[(e=i?[r*a+t*n,t*a-r*n]:[r*a-t*n,t*a+r*n])[0]+o[0],e[1]+o[1]]}},{key:"getRectVerticesFromSignatureRectRepresentation",value:function(e,t,n,r,i){var o=t.xLength,t=t.yLength,a=!(4<arguments.length&&void 0!==i)||i,e=A(e,2),s=e[0],u=e[1],l=o/2,H=t/2,r=A(r,2),c=r[0],h=r[1];return[[1,1],[-1,1],[-1,-1],[1,-1]].map(function(e){return[e[0]*l,e[1]*H]}).map(function(e){return d.getRotatedPoint(e,n,a)}).map(function(e){return[e[0]*c,e[1]*h]}).map(function(e){return[e[0]+s,e[1]+u]})}},{key:"getScaleFactorForRectInSpace",value:function(e,t,n,r){n=e/n,r=t/r;return r<n?r:n}},{key:"getDeltaLonLatForMeterAtGivenLonLat",value:function(e,t){return[1/6371e3*(180/Math.PI)/Math.cos(t*Math.PI/180),1/6371e3*(180/Math.PI)]}},{key:"getBoundingBoxVertices",value:function(e){var t=0<arguments.length&&void 0!==e?e:[],e=[[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]];return t.reduce(function(e,t){return[[Math.min(t[0],e[0][0]),Math.min(t[1],e[0][1])],[Math.max(t[0],e[1][0]),Math.max(t[1],e[1][1])]]},e)}},{key:"isPointInBoundingBox",value:function(e,t){if(e&&t){var n=A(e,2),r=n[0],i=n[1],o=A(t,2),e=A(o[0],2),n=e[0],t=e[1],e=A(o[1],2),o=e[0],e=e[1];return r<=o&&n<=r&&i<=e&&t<=i}}},{key:"isPointOnLineSegment",value:function(e,t,n){var r=A(e,2),i=r[0],o=r[1],a=A(t,2),e=a[0],r=a[1],t=A(n,2),a=t[0],n=t[1],t=(r-o)*(n-o)<=0;return e===a?e===i&&t:o-n==(n-r)/(a-e)*(i-a)&&t}},{key:"rayIntersectLineSegment",value:function(e,t,n){var r=A(e,2),i=r[0],o=r[1],e=A(t,2),r=e[0],t=e[1],e=A(n,2),n=e[0],e=e[1];if(r===n)return!1;r=(i-r)/(n-r);return 0<=r&&r<1&&o<(e-t)*r+t}},{key:"isPointInPolygon",value:function(e,t){var e=A(e,2),n=e[0],r=e[1],e=t.length;if(e<3)return!1;var i=0,o=t[e-1];return t.forEach(function(e){d.rayIntersectLineSegment([n,r],o,e)&&(i+=1),o=e}),i%2!=0}},{key:"isPointOnLineString",value:function(e,t){var e=A(e,2),n=e[0],r=e[1],i=t.length;if(i<2)return!1;for(var o=t[i-1],a=0;a<i;a+=1){var s=t[a];if(d.isPointOnLineSegment([n,r],o,s))return!0;o=t[a]}return!1}},{key:"getAreaOfPolygon",value:function(e){var t=e.length;if(t<3)return null;var o=0,a=e[t-1];return e.forEach(function(e){var t,n,r,i;o+=.5*(n=e,r=A(t=a,2),i=r[0],t=r[1],r=A(n,2),n=r[0],i*r[1]-t*n),a=e}),o}},{key:"getDistanceBetweenPoints",value:function(e,t){var n=A(e,2),e=n[0],n=n[1],t=A(t,2),e=e-t[0],t=n-t[1];return Math.sqrt(e*e+t*t)}}]),d}(),yt=function(){function e(){u(this,e)}return l(e,null,[{key:"get",value:function(t,e){return fetch(t,1<arguments.length&&void 0!==e?e:{method:"GET"}).then(function(e){return e.ok?e.json():Promise.reject(new Error("Call failed for ".concat(t," : ").concat(e.status," ").concat(e.statusText)))})}}]),e}(),mt=!1,It=function(){function M(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:mt;u(this,M),e&&Object.assign(this,e),this.splitIconGeomBasisGeomType_=t,this.splitIconGeomBasisGeomType_&&this.splitMultiGeom()}return l(M,[{key:"flattenIconShape",value:function(e){var t,n=0<arguments.length&&void 0!==e&&e;this.isFlattened||(t=[],(e=this.g)&&e.forEach(function(e){var c,h=[];e.shp&&e.shp.forEach(function(e){var t,n=A(e,7),r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],u=n[5],l=n[6];switch(r){case Oe:case Ae:h.push(e),c=[i,o];break;case Le:t=pt.getFlattenedQuadraticBezierCurve(c,[i,o],[a,s]),c=[a,s];break;case Te:t=pt.getFlattenedCubicBezierCurve(c,[i,o],[a,s],[u,l]),c=[u,l];break;case Ne:h.push(e),c=void 0}t&&(t.splice(0,2),t.forEach(function(e){h.push([1].concat(L(e)))}))}),t.push(O(O({},e),{shp:h}))}),n&&(this.g_original=e),this.g=t,this.isFlattened=!0)}},{key:"splitMultiGeom",value:function(){var e=this;if(this.isIconGeomSplittedBasisGeomType)return this.isIconWithHole;this.splitIconGeomBasisGeomType_||(this.splitIconGeomBasisGeomType_=!0);var f=be,t=this.g,g=[],p=[],n=!1,y=!0,m=-1,I=Se,_=ke,E=we,r=Pe;return!!t&&(t.forEach(function(c){var h,d=[],v=[];c.gt===r||(c.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],u=t[6],l=null;switch(n){case Oe:d.push([r,i]),h=[r,i],y||m!==_&&m!==I||g.push(O(O({},c),{},{st:f},{gt:m,shp:p})),m=I,y=!(p=[]),p.push(e);break;case Ae:d.push([r,i]),h=[r,i],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Le:(l=pt.getFlattenedQuadraticBezierCurve(h,[r,i],[o,a],15)).splice(0,2),d.push.apply(d,L(l)),h=[o,a],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Te:(l=pt.getFlattenedCubicBezierCurve(h,[r,i],[o,a],[s,u],15)).splice(0,2),d.push.apply(d,L(l)),h=[s,u],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Ne:p.push(e),m=E,y=!0,2<d.length&&v.push({shp:p,area:pt.getAreaOfPolygon(d),points:d,children:[]}),h=void 0,d=[]}},e),M.getLinkedParentChildPolygonArray(v).forEach(function(e){var t=[];t.push.apply(t,L(e.shp)),e.children.forEach(function(e){n=!0,t.push.apply(t,L(e.shp))}),g.push(O(O({},c),{},{st:f},{gt:we,shp:t}))}))},this),this.g=g,this.isIconGeomSplittedBasisGeomType=!0,this.isIconWithHole=n,this.isIconWithHole)}},{key:"getIconWithOriginTranslatedToIconCenter",value:function(){var t=new M(this,this.splitIconGeomBasisGeomType_),c=Number.parseInt(t.w,10)/2*1,h=Number.parseInt(t.h,10)/2*1;return t.g=[],this.g&&this.g.forEach(function(e){var l=[];e.shp&&e.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],u=t[6];switch(n){case 0:case 1:l.push([n,r-c,i-h]);break;case 2:l.push([n,r-c,i-h,o-c,a-h]);break;case 3:l.push([n,r-c,i-h,o-c,a-h,s-c,u-h]);break;case 4:l.push(e)}}),t.g.push(O(O({},e),{shp:l}))}),t}},{key:"getTransformedIconThatFitsInLabelArea",value:function(e,t,n){var r=1<arguments.length&&void 0!==t?t:0,t=!(2<arguments.length&&void 0!==n)||n,n=new M(this,this.splitIconGeomBasisGeomType_),g=M.getParamForTransformedIconThatFitsInLabelArea(n,e,r,t),t=g.scaleFactor;n.w=t,n.h=t;var i=[];return n.g&&n.g.forEach(function(e){var f=[];e.shp&&e.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],t=t[6],i=A(M.getTransformedIconPointThatFitsInLabelArea([r,i],g),2),u=i[0],l=i[1],a=A(M.getTransformedIconPointThatFitsInLabelArea([o,a],g),2),c=a[0],h=a[1],t=A(M.getTransformedIconPointThatFitsInLabelArea([s,t],g),2),d=t[0],v=t[1];switch(n){case Oe:case Ae:f.push([n,u,l]);break;case Le:f.push([n,u,l,c,h]);break;case Te:f.push([n,u,l,c,h,d,v]);break;case Ne:f.push(e)}}),i.push(O(O({},e),{shp:f}))}),n.g=i,n}},{key:"getSVG",value:function(e){var t,n,r='<?xml version="1.0" encoding="utf-8"?>',i=this.w||50,o=this.h||50,a=this.g;if(r+='<svg viewBox="0 0 '.concat(i," ").concat(o,'" xmlns="http://www.w3.org/2000/svg" width="').concat(i,'" height="').concat(o,'">'),r+="<g>",a&&0<a.length)for(var s=0;s<a.length;s+=1){r+="<path ",a[s].gw&&(r+=' stroke-width="'.concat(a[s].gw,'"')),e?r+=' fill="'.concat(e,'"'):a[s].os&&a[s].os.m?r+=' fill="'.concat(a[s].os.m,'"'):r+=0===s?' fill="#006BB7"':' fill="#ffffff"',r+=' d="';for(var u=0;u<a[s].shp.length;u+=1)for(var l=0;l<a[s].shp[u].length;l+=1)r+=0===l?(t=a[s].shp[u][l],n=void 0,(c(n={},Oe,"M"),c(n,Ae,"L"),c(n,Le,"Q"),c(n,Te,"C"),c(n,Ne,"Z"),n)[t]):a[s].shp[u][l],0===l||l+1===a[s].shp[u][l].length?r+="":r+=" ";r+='" ></path>'}return r+="</g>",r+="</svg>"}}],[{key:"getParamForTransformedIconThatFitsInLabelArea",value:function(e,t,n,r){var i=2<arguments.length&&void 0!==n?n:0,o=!(3<arguments.length&&void 0!==r)||r,a=A(t,5),s=a[0],u=a[1],n=a[2],r=a[3],t=a[4],a=(o?0:t)+i,o=A(pt.getDeltaLonLatForMeterAtGivenLonLat(s,u),2),t=o[0],i=o[1],o=[Number.parseInt(e.w,10),Number.parseInt(e.h,10)],e=o[0],o=o[1];return{labelCenterX:s,labelCenterY:u,iconWidth:e,iconHeight:o,deltaLonPerMeter:t,deltaLatPerMeter:i,scaleFactor:pt.getScaleFactorForRectInSpace(n,r,e,o),effectiveRotation:a}}},{key:"getTransformedIconPointThatFitsInLabelArea",value:function(e,t){var n=A(e,2),r=n[0],i=n[1];if(void 0===r||void 0===i||null===r||null===i)return[];var o=t.labelCenterX,a=t.labelCenterY,s=t.iconWidth,u=t.iconHeight,l=t.deltaLonPerMeter,e=t.deltaLatPerMeter,n=t.scaleFactor,t=t.effectiveRotation,r=r,i=i;r-=+s/2,i-=+u/2,i*=-1;l=r*=n*l,e=i*=n*e,r=l*Math.cos(t)+e*Math.sin(t),i=e*Math.cos(t)-l*Math.sin(t);return[r+=o,i+=a]}},{key:"getWebGLSuitableCoordinatesOfIconSubGeom",value:function(e){var i,t=e.st,n=e.gt,r=e.shp,o=[];if(t!==be||!r||!n)return o;switch(n){case we:r.forEach(function(e){var t=A(e,3),e=t[0],n=t[1],r=t[2];switch(e){case Oe:(i=[]).push([n,r]);break;case Ae:i.push([n,r]);break;case Ne:o.push(i)}});break;case ke:r.forEach(function(e){var t=A(e,3),e=t[1],t=t[2];o.push([e,t])})}return o}},{key:"getLinkedParentChildPolygonArray",value:function(e){var t=[];e.sort(function(e,t){return Math.abs(t.area)-Math.abs(e.area)});for(var n=0;n<e.length;n+=1){for(var r=null,i=e[n],o=i.points[0],a=n-1;0<=a;--a){var s=e[a],u=i.area*s.area<0;if(u)if(pt.isPointInPolygon(o,s.points)||pt.isPointOnLineString(o,s.points)){r=s;break}}(r?r.children:t).push(i)}return t}}]),M}(),_t=Object.freeze({TEXT:"",ICON:"icon:",IMAGE:"icon:"}),Et=Object.freeze({VALUE:"<value>",SHORT:"<short>",LONG:"<long>",FULL:"<full>"}),Mt=Object.freeze({NONE:0,TEXT:1,ICON:2,IMAGE:3}),Ot=dt.EVENT_NAME,At=["resetBaseMetaFileRules_","updateOverridableComponents"],Lt=function(t){var n=[];return At.forEach(function(e){t[e]||n.push(e)}),0<n.length?n:null},Tt=function(){function i(e,t,n){if(u(this,i),!e)throw new Error("one should not instantiate object of this class without apt payload");var r=Lt(this);if(r)throw new Error("function definition missing in the implementation ".concat(r.join()));this.metaFileIdentifier=t,this.metaInformation_=n,this.basedata_=O({},e),this.baseOverrides_=[],this.customOverrides_=[],this.resetBaseMetaFileRules_()}return l(i,[{key:"applyOverride",value:function(e,t,n){var r=!(1<arguments.length&&void 0!==t)||t,t=2<arguments.length&&void 0!==n&&n;e&&(t||(r?this.customOverrides_:this.baseOverrides_).push(e),this.updateOverridableComponents(e),n=this.getMetaInformation(),!t&&n&&n.config.emitEventOnOverrideUpdate&&(e={applyOverride:!0,metaFileIdentifier:this.metaFileIdentifier,isCustomOverride:r,metaInformation:n,overrideJson:e},dt.emit(Ot.META_DATA_MODEL_UPDATED,e)))}},{key:"undoOverride",value:function(){var e,t,n=this;0!==this.customOverrides_.length&&(t=this.customOverrides_.pop(),this.resetBaseMetaFileRules_(),this.baseOverrides_.forEach(function(e){return n.applyOverride(e,!1,!0)}),this.customOverrides_.forEach(function(e){return n.applyOverride(e,!0,!0)}),(e=this.getMetaInformation())&&e.config.emitEventOnOverrideUpdate&&(t={metaFileIdentifier:this.metaFileIdentifier,undoOverride:!0,metaInformation:e,overrideJson:t},dt.emit(Ot.META_DATA_MODEL_UPDATED,t)))}},{key:"getMetaInformation",value:function(){return this.metaInformation_}},{key:"basedata_",get:function(){return this.basedata__},set:function(e){this.basedata__||(this.basedata__=e)}}]),i}(),Nt=je.PRESETS,bt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,Nt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){this.property_trees=null,this.named_groups=null,this.named_keys=null,this.updateOverridableComponents(this.basedata_)}},{key:"updateOverridableComponents",value:function(e){this.property_trees=e.property_trees,this.named_groups=e.named_groups,this.named_keys=e.named_keys}},{key:"getPropertyTree",value:function(e){var n,r=this,e=this.property_trees[e],i=[];return e.forEach(function(e){switch(e.input){case"named_group":n=r.getNamedGroup(r.getKeyKey(e)),i=[].concat(L(i),L(n));break;case"named_key":var t;(n=r.getKeyName(e))?((t=r.getNamedKey(n)).k=r.getKeyKey(e),t.name=n,i.push(t)):i.push(r.getNamedKey(r.getKeyKey(e)));break;default:i.push(e)}},this),i}},{key:"getNamedGroup",value:function(e){return this.named_groups[e]}},{key:"getNamedKey",value:function(e){return this.named_keys[e]}}],[{key:"getMetaFileIdentifier",value:function(){return Nt}}]),r}(),St=je.SDK_STRINGS,kt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,St,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){this.stringsTable={},this.updateOverridableComponents(this.basedata_)}},{key:"updateOverridableComponents",value:function(e){e&&this.updateTranslationsStringMap(e.translations)}},{key:"updateTranslationsStringMap",value:function(t){var n=this;t&&Object.keys(t).forEach(function(e){n.addToStringsTable(e,t[e])},this)}},{key:"addToStringsTable",value:function(e,t){this.stringsTable[e]=t}},{key:"translate",value:function(e,t){var n,r=t;return!this.stringsTable||(n=this.stringsTable[e])&&(r=n.en||n.en||(0<(e=Object.keys(n)).length?n[e.pop()]:t)),r}}],[{key:"getMetaFileIdentifier",value:function(){return St}}]),r}(),wt=je.THEME,Pt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,wt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){var e=this.basedata_;this.ft=e.ft,this.name=e.nm,this.iurl=e.iurl,this.styleMap={},this.iconInfoMap={},this.labelStyleMap={},this.markerMap={},this.updateOverridableComponents(e)}},{key:"updateOverridableComponents",value:function(e){e&&(this.updateStyleMap(e.s),this.updateIconInfoMap(e.i,e.iurl),this.updateLabelStyleMap(e.l),this.updateMarkerMap(e.m))}},{key:"updateStyleMap",value:function(e){this.styleMap=O(O({},this.styleMap),e)}},{key:"updateIconInfoMap",value:function(r,i){var o=this;r&&Object.keys(r).forEach(function(e){var t=r[e],n=i||o.iurl;n&&t.rurl&&(t.url=n+t.rurl),o.iconInfoMap[e]=t},this)}},{key:"updateLabelStyleMap",value:function(e){this.labelStyleMap=O(O({},this.labelStyleMap),e)}},{key:"updateMarkerMap",value:function(e){this.markerMap=O(O({},this.markerMap),e)}},{key:"getStyleMap",value:function(){return this.styleMap}},{key:"getGeometryStyle",value:function(e){return this.styleMap?this.styleMap[e]:null}},{key:"getGeometryDefaultStyle",value:function(){return this.styleMap?this.styleMap.Object:null}},{key:"getLabelStyle",value:function(e){return this.labelStyleMap?this.labelStyleMap[e]:null}},{key:"getLabelDefaultStyle",value:function(){return this.labelStyleMap?this.labelStyleMap.default:null}},{key:"getMarker",value:function(e){return this.markerMap&&e?this.markerMap[e]:null}},{key:"getIconInfo",value:function(e){return this.iconInfoMap&&e?this.iconInfoMap[e]:null}}],[{key:"getMetaFileIdentifier",value:function(){return wt}}]),r}(),Ct=function(){function e(){u(this,e)}return l(e,null,[{key:"createShortAddress",value:function(e){return e&&Array.isArray(e)?e[1]:null}},{key:"createLongAddress",value:function(e){return e&&Array.isArray(e)?e[0]+" "+e[1]:null}},{key:"createFullAddress",value:function(e){if(e&&Array.isArray(e)){var t=3===e.length?e[2]+" ":"";return t+=e[0]+" "+e[1]}return null}}]),e}(),xt=je.THEME_MAP,Dt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,xt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){var e=this.basedata_;this.ft=e.ft,this.styleTreeList=[],this.labelTreeList=[],this.updateOverridableComponents(e)}},{key:"updateOverridableComponents",value:function(e){this.updateLabelTreeList(e.label),this.updateStyleTreeList(e.style)}},{key:"updateLabelTreeList",value:function(e){e&&vt(this.labelTreeList,e)}},{key:"updateStyleTreeList",value:function(e){e&&vt(this.styleTreeList,e)}}],[{key:"getMetaFileIdentifier",value:function(){return xt}},{key:"extractThemeMapPayload",value:function(e){return{labelType:e.lt,labelRef:e.r,styleName:e.n}}},{key:"getGeomStyleLookupTag",value:function(e,t){e=e?e.styleName:null;return e=e===Et.VALUE?t:e}},{key:"getLabelRefConstructed",value:function(e,t,n){var r=e;switch(e){case Et.VALUE:r=n;break;case Et.SHORT:r=Ct.createShortAddress(t);break;case Et.LONG:r=Ct.createLongAddress(t);break;case Et.FULL:r=Ct.createFullAddress(t)}return r}},{key:"getLabelInfoConstructed",value:function(e,t,n,r){var i={lt:e,entry:n};switch(e){case Mt.NONE:break;case Mt.TEXT:n.trans?i.ar=t:i.r=t;break;case Mt.ICON:i.iconIdentifier=t,r?i=O(O({},r),i):i.error=!0;break;case Mt.IMAGE:i.url=t;break;default:i=null}return i}}]),r}(),Vt=je.THEME,Rt=je.THEME_MAP,Gt=je.PRESETS,Ht=je.SDK_STRINGS,jt=function(){function e(){u(this,e),this.config=Object.seal({emitEventOnOverrideUpdate:!0}),this.iconCache={},this.imageCache={},this.releaseSettings_={}}return l(e,[{key:"instantiateMetaFileAccessor_",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];switch(e){case Vt:this[Vt]=v(Pt,n.concat([this]));break;case Rt:this[Rt]=v(Dt,n.concat([this]));break;case Gt:this[Gt]=v(bt,n.concat([this]));break;case Ht:this[Ht]=v(kt,n.concat([this]));break;default:return null}return this[e]}},{key:"applyOverride",value:function(e,t){this[e]&&this[e].applyOverride(t)}},{key:"undoOverride",value:function(e){this[e]&&this[e].undoOverride()}},{key:"getTheme",value:function(){return this[Vt]||{}}},{key:"getThemeMap",value:function(){return this[Rt]||{}}},{key:"getPresets",value:function(){return this[Gt]||{}}},{key:"getStrings",value:function(){return this[Ht]||{}}},{key:"getIcon",value:function(e){return e&&e.iconIdentifier?this.iconCache[e.iconIdentifier]:null}},{key:"getImage",value:function(e){return this.imageCache[e]}},{key:"extractGeomStyle",value:function(e){var t=e.valueEntry,e=e.value,t=Dt.extractThemeMapPayload(t),e=Dt.getGeomStyleLookupTag(t,e);return this.getTheme()?this.getTheme().getGeometryStyle(e):null}},{key:"getStyle",value:function(n,e){var r=this,t=1<arguments.length&&void 0!==e&&e,i=this.getThemeMap().styleTreeList,o=this.processValueEntry_.bind(this);if(null===i||0===i.length||!this.getTheme())return null;var e=this.getTheme().getGeometryDefaultStyle(),a=this.extractGeomStyle.bind(this),s=n.getAddress(),u=n.getEntities(),l=null,c=null,h={};return u&&0<u.length?i.find(function(t){return c=u.find(function(e){return l=o({geometry:n,entity:e,address:s,valueEntry:t,value:void 0,returnValueFunction:a,valueEntryIdentified:h})},r)},this):i.find(function(e){return l=o({geometry:n,entity:c,address:s,valueEntry:e,value:void 0,returnValueFunction:a,valueEntryIdentified:h})},this),l||t||(l=e),l?JSON.parse(JSON.stringify(l)):void 0}},{key:"getLabelValue",value:function(e){var t=e.address,n=e.valueEntry,r=e.value,i=Dt.extractThemeMapPayload(n),e=i.labelType,i=i.labelRef,t=Dt.getLabelRefConstructed(i,t,r),r=e===Mt.ICON?this.getTheme().getIconInfo(t):null,r=Dt.getLabelInfoConstructed(e,t,n,r);return r?JSON.parse(JSON.stringify(r)):void 0}},{key:"convertLabelToText",value:function(e){if(e){var t,n=e.r,r=e.ar,e=e.lt;if(n)return n;if(r){switch(e){case Mt.TEXT:t=_t.TEXT+r;break;case Mt.ICON:t=_t.ICON+r;break;case Mt.IMAGE:t=_t.IMAGE+r;break;default:return null}return this.getStrings().translate(t,r)}}return null}},{key:"getLabelStyle",value:function(e,t){var n,r=1<arguments.length&&void 0!==t&&t,i=this.getTheme(),o=i.getLabelDefaultStyle(),a={};return e&&(n=e.t,t=e.zmin,e=e.l,n&&(a.t=n),t&&(a.zmin=t),(e=i.getLabelStyle(e))&&(a=O(O({},a),e))),a||r||(a=o),a}},{key:"getLabelConstantsSet_",value:function(){var e=this.getThemeMap().labelTreeList,t=this.processValueEntry_.bind(this);return null==e||0===e.length?{isInsufficientInput:!0}:{labelTreeList:e,returnValueFunction:this.getLabelValue.bind(this),processValueEntry:t}}},{key:"getGeometryLabelInfo",value:function(t){var n=this,e=this.getLabelConstantsSet_(),r=e.isInsufficientInput,i=e.labelTreeList,o=e.returnValueFunction,a=e.processValueEntry;if(r)return null;var s=t.getAddress(),u=null;return i.find(function(e){return(u=a({geometry:t,address:s,valueEntry:e,returnValueFunction:o}))&&(u.r=n.convertLabelToText(u)),u}),u?JSON.parse(JSON.stringify(u)):void 0}},{key:"getEntityLabelInfo",value:function(t){var e=this.getLabelConstantsSet_(),n=e.isInsufficientInput,r=e.labelTreeList,i=e.returnValueFunction,o=e.processValueEntry;if(n)return null;var a=null;return r.find(function(e){return a=o({entity:t,valueEntry:e,returnValueFunction:i})}),a?JSON.parse(JSON.stringify(a)):void 0}},{key:"getLabelInfo",value:function(o){var a=this,e=this.getLabelConstantsSet_(),t=e.isInsufficientInput,n=e.labelTreeList,s=e.returnValueFunction,u=e.processValueEntry;if(t)return null;var l,r,c=o.getAddress(),h=o.getEntities(),d=null;return h&&1<h.length?(l=null,n.find(function(t){var n,r=null,i=!1;return h.forEach(function(e){n=u({entity:e,valueEntry:t,returnValueFunction:s}),(r=a.convertLabelToText(n))&&0<r.length&&(l?l+=", "+r:(l=r,i=!0))},a),i||(n=u({geometry:o,address:c,valueEntry:t,returnValueFunction:s}),(r=a.convertLabelToText(n))&&0<r.length&&(l?l+=", "+r:l=r,i=!0)),i&&(d={lt:a.TEXT_LABEL_TYPE,r:l}),i},this)):(r=h?h[0]:null,n.find(function(e){return(d=u({geometry:o,entity:r,address:c,valueEntry:e,returnValueFunction:s}))&&(d.r=a.convertLabelToText(d)),d},this)),d?JSON.parse(JSON.stringify(d)):void 0}},{key:"processValueEntry_",value:function(e){var r=this,i=e.geometry,o=e.entity,a=e.address,t=e.valueEntry,n=e.value,s=e.returnValueFunction,u=null,e=t.ks;if(void 0!==e&&e.find(function(e){var t;if(e.gk&&i?(n=e.gk,t=i.properties[n]):e.ek&&o?(n=e.ek,t=o.properties[n]):e.ak&&a&&(n=e.ak)===a[0]&&(t=A(a,2)[1]),void 0!==t){if(e.v){var n=e.v[t];if(void 0!==n&&void 0!==(u=r.processValueEntry_({geometry:i,entity:o,address:a,valueEntry:n,value:t,returnValueFunction:s})))return!0}if(void 0!==(u=s({geometry:i,entity:o,address:a,valueEntry:e,value:t})))return!0}return!1},this))return u;return s?s({geometry:i,entity:o,address:a,valueEntry:t,value:n}):u}},{key:"setIcon",value:function(e,t){e&&t&&(this.iconCache[e]=t)}},{key:"setReleaseSettings_",value:function(e){this.releaseSettings_=e}}]),e}(),Ft={NODES_LB:"mfs.micello.com",US_1:"mfs-us-1.micello.com",US_2:"mfs-us-2.micello.com",AU_1:"mfs-au-1.micello.com",AU_2:"mfs-au-2.micello.com",EU_1:"mfs-eu-1.micello.com",SG_1:"mfs-sg-1.micello.com",HUB:"mfs-hub-master.micello.com",PREVIEW:"preview.micello.com/mfs",FACTORY:"factory-mfs.micello.com",CIT:"integration.mfs.hub.venues.ext.here.com",STG:"alpha.mfs.hub.venues.ext.here.com"},Ut=Ft.HUB,Bt=Object.freeze({MFILE:"MFILE",MVAR:"MVAR",MPATH:"MPATH",MKEY:"MKEY",MPATTERN:"MPATTERN",MPACKAGE:"MPACKAGE"}),zt=(Object.freeze((c(zt={},Bt.MFILE,"/mfile"),c(zt,Bt.MVAR,"/mvar"),c(zt,Bt.MPATH,"/mpath"),c(zt,Bt.MKEY,"/mkey"),c(zt,Bt.MPATTERN,"/mpattern"),c(zt,Bt.MPACKAGE,"/mpackage"),zt)),Object.freeze(Object.values(Ft).reduce(function(e,t){return O(O({},e),{},c({},t,{key:null}))},{}))),Yt=Object.freeze({apiKey:null,dataApiType:Me,fileHost:Ut,queryParamMap:zt}),Zt=ze.GEO_JSON,Ft=Ye[Zt],Wt=Ft.COMMUNITY_MAP,Jt=Ft.COMMUNITY_ENTITY,Kt=Ft.GEOJSON_LEVEL_GEOMETRY,Xt=function(){function t(e){u(this,t),this.baseApi=e}return l(t,[{key:"getBaseAPI",value:function(){return this.baseApi}},{key:"getCommunityMap",value:function(e,t,n){return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Wt,null,t,n))}},{key:"getCommunityEntity",value:function(e,t,n){return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Jt,null,t,n))}},{key:"getGeoJsonLevelGeometry",value:function(e,t,n,r){t="/".concat(t);return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Kt,t,n,r))}}]),t}(),Qt=Object.freeze({MAP:"MAP",META:"META",CUSTOMER:"CUSTOMER"}),qt=Object.freeze((c(zt={},Qt.MAP,"/map"),c(zt,Qt.META,"/meta"),c(zt,Qt.CUSTOMER,"/customer"),zt)),$t=Object.freeze({METACONFIG:"METACONFIG",OVERRIDES:"OVERRIDES",DATAHOSTS:"DATAHOSTS"}),en=Object.freeze((c(Ye={},$t.METACONFIG,"/metaConfig"),c(Ye,$t.OVERRIDES,"/overrides"),c(Ye,$t.DATAHOSTS,"/map/dataHosts"),Ye)),Ft=Object.freeze({V4:"V4",V5:"V5"}),tn=(Object.freeze((c(zt={},Ft.V4,"/v4"),c(zt,Ft.V5,"/v5"),zt)),Object.freeze((c(Ye={},je.THEME,"/theme/v5"),c(Ye,je.THEME_MAP,"/thememap/v5"),c(Ye,je.PRESETS,"/presets/v5"),c(Ye,je.SDK_STRINGS,"/strings/v5"),c(Ye,je.ICON_FILE,"/iconfile/v5"),c(Ye,je.INPUT_COLORS,"/miceditor/inputcolors"),c(Ye,je.BASE_MAP_INFO,"/miceditor/basemapinfo"),c(Ye,je.CONFIG_PROFILE,"/miceditor/configprofile"),c(Ye,je.NAV_THEME,"/navtheme/v5"),c(Ye,je.NAV_NAME_THEME,"/navtheme/v5"),c(Ye,je.NAV_PROP_MAP,"/navpropmap/v5"),c(Ye,je.NAV_STRINGS,"/strings/v5/nav"),c(Ye,je.NAV_THEME_MAP,"/navthememap/v5"),c(Ye,je.NAV_NAME_THEME_MAP,"/navthememap/v5"),c(Ye,je.V4_THEME_FAMILY,"/theme/v4"),c(Ye,je.V4_MAPTYPE_THEME,"/theme/v4"),c(Ye,je.ICON,"/theme/icon/v5"),c(Ye,je.MARKER,"/theme/marker"),c(Ye,je.PERMISSIONS,"/auth/stringroles"),c(Ye,je.NAICS_ARRAY,"/naics/2012/array"),c(Ye,je.NAICS_MAP,"/naics/2012/map"),Ye))),nn=Object.freeze((c(Ft={},ze.GEO_JSON,"/geojson"),c(Ft,ze.V5_MAP,"/v5_map"),c(Ft,ze.V5_NAV,"/v5_nav"),c(Ft,ze.V5_INFO,"/v5_info"),c(Ft,ze.KML,"/kml"),c(Ft,ze.SVG,"/svg"),c(Ft,ze.PNG,"/png"),Ft)),rn=Object.freeze((c(zt={},ze.V5_MAP,{COMMUNITY_MAP:"/com-map",COMMUNITY_DIRECTORY:"/com-dir",COMMUNITY_DETAIL:"/com-detail",LEVEL_GEOMETRY:"/level-geom",DRAWING_ENTITY:"/drawing-entity"}),c(zt,ze.GEO_JSON,{COMMUNITY_MAP:"/com-map",COMMUNITY_ENTITY:"/com-entity",PATH_LEVEL_GEOMETRY:"/path-level-geom",GEOJSON_LEVEL_GEOMETRY:"/geojson-level-geom"}),c(zt,ze.V5_NAV,{JSON_NAV:"/json",BINARY_NAV:"/bin",JSON_ENHANCED_NAV:"/json-enh",BINARY_ENHANCED_NAV:"/bin-enh"}),c(zt,ze.V5_NAV,{JSON_NAV:"/json",BINARY_NAV:"/bin",JSON_ENHANCED_NAV:"/json-enh",BINARY_ENHANCED_NAV:"/bin-enh"}),c(zt,ze.V5_INFO,{GEOMETRY_INFO:"/geom-info"}),c(zt,ze.SVG,{PLAIN:"/plain",PRETTY:"/pretty",PRETTY_HORIZONTAL_LABEL:"/pretty"}),c(zt,ze.KML,{RASTER:"/raster",RASTER_HORIZONTAL:"/raster",VECTOR:"/vector",VECTOR_HORIZONTAL:"/vector"}),c(zt,ze.PNG,{LOW_RESOLUTION:"/lo-res",HIGH_RESOLUTION:"/high-res",LOW_RESOLUTION_GEO:"/lo-res-geo",HIGH_RESOLUTION_GEO:"/high-res-geo",LOW_RESOLUTION_HORIZONTAL:"/lo-res",HIGH_RESOLUTION_HORIZONTAL:"/high-res",LOW_RESOLUTION_HORIZONTAL_GEO:"/lo-res-geo",HIGH_RESOLUTION_HORIZONTAL_GEO:"/high-res-geo"}),zt)),on=Object.freeze({venueId:null,language:"-",mapVersion:"-",entityVersion:"-",fileVersion:null,themeName:Be[je.THEME]}),an=Object.freeze({MFILE:"MFILE",MPATH:"MPATH",MVAR:"MVAR"}),sn=Object.freeze((c(Ye={},an.MFILE,"/mfile"),c(Ye,an.MPATH,"/mpath"),c(Ye,an.MVAR,"/mvar"),Ye)),un=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};u(this,r),this.productAPI={},this.hostConfig_=e,this.isHostCustom=!1}return l(r,[{key:"getBaseUrl",value:function(e){e=!(0<arguments.length&&void 0!==e)||e,e="".concat(this.hostConfig_.fileHost).concat(e?"/ms/v1":"");return e.startsWith("https://")||e.startsWith("http://")||(e="https://".concat(e)),e}},{key:"getFileServiceBaseUrl",value:function(e){e=0<arguments.length&&void 0!==e?e:an.MFILE;if(an[e])return"".concat(this.getBaseUrl()).concat(sn[e])}},{key:"getGlobalMetaBaseUrl",value:function(e){var t=qt[Qt.META],e=this.getFileServiceBaseUrl(e);return"".concat(e).concat(t)}},{key:"getVenueMapBaseUrl",value:function(e){var t=this.getFileServiceBaseUrl(e),e=qt[Qt.MAP];return"".concat(t).concat(e)}},{key:"getGlobalMetaFileUrl",value:function(e,t,n,r){var t=1<arguments.length&&void 0!==t?t:Be[e],i=2<arguments.length?n:void 0,r=3<arguments.length?r:void 0,o=this.getGlobalMetaBaseUrl(r),a=tn[e],s=null===t||""===t?"":"/".concat(t);switch(e){case je.THEME:case je.THEME_MAP:case je.PRESETS:case je.SDK_STRINGS:case je.ICON_FILE:case je.INPUT_COLORS:case je.BASE_MAP_INFO:case je.CONFIG_PROFILE:case je.NAV_THEME:case je.NAV_NAME_THEME:case je.NAV_PROP_MAP:case je.NAV_STRINGS:case je.NAV_THEME_MAP:case je.NAV_NAME_THEME_MAP:case je.V4_THEME_FAMILY:o+="".concat(a).concat(s);break;case je.ICON:case je.MARKER:case je.V4_MAPTYPE_THEME:o+=0<s.length&&i&&0<i.length?"".concat(a).concat(s,"/").concat(i):"".concat(a);break;case je.PERMISSIONS:case je.NAICS_ARRAY:case je.NAICS_MAP:o+="".concat(a)}return o}},{key:"getGeoJsonApi",value:function(){return this.productAPI[ze.GEO_JSON]||(this.productAPI[ze.GEO_JSON]=new Xt(this)),this.productAPI[ze.GEO_JSON]}},{key:"getMapProductUrlPath",value:function(e,t,n,r){t=!(1<arguments.length&&void 0!==t)||t,n=2<arguments.length?n:void 0,r=3<arguments.length?r:void 0,r=this.getVersionedVenueUrl(e,t,r);return n&&(r+="".concat(nn[n])),r}},{key:"getMapProductFileUrl",value:function(e,t,n,r,i,o){var a=rn[ze[t]][n],i=this.getMapProductUrlPath(e,!0,t,i);return n&&(i+="".concat(a)),r&&(i+="".concat(r)),!o&&0!==o||(i+="/fv/".concat(o)),i}},{key:"getMetaConfigUrl",value:function(e,t){var n=en[$t.METACONFIG],t=this.getVersionedVenueUrl(e,!0,t);return t+="".concat(n)}},{key:"getMetaFileUrl",value:function(e,t,n){n=2<arguments.length&&void 0!==n?n:Be[t];if(e){var r,t=Fe[t];return"object"===s(e[t])&&e[t][n]?r=new URL(e[t][n]):"string"==typeof e[t]&&(r=new URL(e[t])),r?this.isHostCustom?"".concat(this.getBaseUrl(!1)).concat(r.pathname):r.toString():null}}},{key:"getMetaOverrideFileUrls",value:function(e,t,n,r){r=3<arguments.length&&void 0!==r?r:Be[n];if(!t||!t.communityOverrides||!t.communityOverrides[e])return[];n=Ue[n],n=t.communityOverrides[e][n]||{};return Array.isArray(n)?n:n[r]||[]}},{key:"getVersionedVenueUrl",value:function(e,t,n){n=2<arguments.length?n:void 0,n=!(1<arguments.length&&void 0!==t)||t?this.getFileServiceBaseUrl(n):"";return n+=r.getVersionedVenuePathSegment(e)}},{key:"getNormalizedUrl",value:function(e){if(this.isHostCustom){var t=new URL(e);return"".concat(this.getBaseUrl(!1)).concat(t.pathname)}return e}},{key:"getMetaConfig",value:function(n){var r=this;if(!n)return null;var i={venueId:n.cid};Object.values(Fe).forEach(function(t){n[t]&&("string"==typeof n[t]?i[t]=n[t]:(i[t]={},Object.keys(n[t]).forEach(function(e){i[t][e]=n[t][e]})))});var e={},o=n.communityOverrides[i.venueId];return Object.keys(o).forEach(function(t){var n;Array.isArray(o[t])?e[t]=o[t].map(function(e){return"".concat(r.getFileServiceBaseUrl()).concat(e)}):"object"===s(o[t])&&(n={},Object.keys(o[t]).forEach(function(e){Array.isArray(o[t][e])&&(n[e]=o[t][e].map(function(e){return"".concat(r.getFileServiceBaseUrl()).concat(e)}))}),e[t]=n)}),i.communityOverrides=c({},i.venueId,e),O(O({},n),i)}}],[{key:"getVersionedVenuePathSegment",value:function(e,t,n){var r=1<arguments.length&&void 0!==t?t:"-",t=2<arguments.length&&void 0!==n?n:"-",n=qt[Qt.MAP];return"".concat(n,"/").concat(e,"/mv/").concat(r,"/ev/").concat(t)}},{key:"getVenueConfig",value:function(e){e=O(O({},on),e);return e.mapVersion=Number(e.mapVersion)||"-",e.entityVersion=Number(e.entityVersion)||"-",e.fileVersion=Number(e.fileVersion)||null,e.venueId=Number(e.venueId),e}}]),r}(),ln=function(){h(a,un);var n=p(a);function a(e){var t;return u(this,a),(t=n.call(this,e)).setAndUpdateHostConfig_(e),e.fileHost&&(t.isHostCustom=!0),t}return l(a,[{key:"setAndUpdateHostConfig_",value:function(e){var t=e.apiKey,e=e.fileHost,n={};Object.keys(Yt.queryParamMap).forEach(function(e){n[e]={key:t}}),e&&(n[e]={key:t}),this.hostConfig_={apiKey:t,dataApiType:Me,fileHost:e||Ut,queryParamMap:O(O({},n),Yt.QUERY_PARAM_MAP_DEFAULT)}}},{key:"addServer",value:function(e,t){var e=-1<e.indexOf("://")?e.split("://")[1]:e,n=this.hostConfig_.queryParamMap[e]?O(O({},this.hostConfig_.queryParamMap[e]),t):t;Object.keys(n).forEach(function(e){null!==n[e]&&void 0!==n[e]&&""!==n[e]||delete n[e]}),this.hostConfig_.queryParamMap[e]=n}},{key:"appendQueryParams",value:function(e){var t=this.hostConfig_.queryParamMap,n=-1<e.indexOf("://")?e.split("://")[1]:e,t=t[A(Object.keys(t).filter(function(e){return n.startsWith(e)}).sort(function(e,t){return t.length-e.length}),1)[0]];return a.appendParamList(e,t)}},{key:"fetch",value:function(e,t,n,r){r=3<arguments.length&&void 0!==r&&r;return e.startsWith("http://")&&(e=e.replace(/http:\/\//gm,"https://")),r||(e=this.appendQueryParams(e)),yt.get(e,t,n)}},{key:"getMapProductFileUrl",value:function(e,t,n,r,i,o){return y(d(a.prototype),"getMapProductFileUrl",this).call(this,e,t,n,r,i,o)}},{key:"getGlobalMetaFileUrl",value:function(e,t,n,r,i){i=4<arguments.length&&void 0!==i?i:0,n=y(d(a.prototype),"getGlobalMetaFileUrl",this).call(this,e,t,n,r);return r&&r===Bt.MPATH&&(n=a.appendParamList(n,{fvhistory:i})),n}}],[{key:"appendParamList",value:function(e,t){if(!t||"object"!==s(t))return e;var n=e.split("?"),r=A(n,2)[1],i=void 0===r?"":r;return Object.keys(t).filter(function(e){return-1===i.indexOf("".concat(e,"="))}).forEach(function(e){i+="&".concat(e,"=").concat(t[e])}),0<(i=i.startsWith("&")?i.substr(1):i).length?"".concat(n[0],"?").concat(i):e}}]),a}(),cn=function(){function i(){u(this,i)}return l(i,null,[{key:"isPointOnGeoJSONLineString",value:function(e,t){var n=!1;if(t&&1<t.length)for(var r,i,o=1;o<t.length;o+=1)if(r=t[o-1],i=t[o],pt.isPointOnLineSegment(e,r,i)){n=!0;break}return n}},{key:"isPointOnGeoJSONMultiLineString",value:function(e,t){for(var n=!1,r=0;r<t.length;r+=1)if(i.isPointOnGeoJSONLineString(e,t[r])){n=!0;break}return n}},{key:"isPointInsideGeoJSONPolygon",value:function(e,t){var n=!1;if(pt.isPointInPolygon(e,t[0])&&(n=!0),n)for(var r=1;r<t.length;r+=1)if(pt.isPointInPolygon(e,t[r])){n=!1;break}return n}},{key:"isPointInsideGeoJSONMultiPolygon",value:function(e,t){for(var n=t.length,r=0;r<n;r+=1)if(i.isPointInsideGeoJSONPolygon(e,t[r]))return!0;return!1}},{key:"convertIntAddressToGeometryAddressListFormat",value:function(e){if(e&&"string"==typeof e){var t=[];return e.split(" ").forEach(function(e){t.push.apply(t,L(e.split(" ")))}),t}return null}},{key:"getGeometriesByLonLat",value:function(t,e,n){for(var r=2<arguments.length&&void 0!==n&&n,i=[],o=e.filter(function(e){return pt.isPointInBoundingBox(t,e.getBoundingBox())}),a=0;a<o.length;a+=1){var s=o[a];if(s.isPointInsideGeometry(t,!0)&&(i.push(s),!r))break}return i.sort(function(e,t){return t.getZIndex()-e.getZIndex()})}}]),i}(),hn=function(){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length?arguments[2]:void 0;u(this,r),this.venueModel=n,this.id=e,this.properties=O({geometry:[],int_address:[]},t)}return l(r,[{key:"getId",value:function(){return this.id}},{key:"getGeometries",value:function(){var t=this;return this.properties.geometry.filter(function(e){return A(e,2)[1]}).map(function(e){e=A(e,1)[0];return t.venueModel.getGeometryById(e)})}},{key:"getInternalAddress",value:function(){return this.properties.int_address||[]}},{key:"getName",value:function(){return(Array.isArray(this.properties.name)?this.properties.name[0]:this.properties.name)||""}},{key:"getProperties",value:function(){return this.properties}},{key:"getLabelInfo",value:function(){return this.venueModel.metaInformation_.getEntityLabelInfo(this)}}]),r}(),dn=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;u(this,r),this.id=e.id,this.properties=e.properties||{},this.labelArea=e.label_area||[],this.geometry=e.geometry||{},this.location=e.location||{},this.level=t,this.zIndex=n,this.state_={isHighlighted:!1,highlightedStyle:{}}}return l(r,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"getAddress",value:function(){return cn.convertIntAddressToGeometryAddressListFormat(this.getInternalAddress())}},{key:"getInternalAddress",value:function(){return this.properties.int_address||""}},{key:"getCenter",value:function(){return this.location.coordinates||[]}},{key:"getCoordinates",value:function(){return this.geometry.coordinates||[]}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getStyle",value:function(){return this.getMetaInformation_().getStyle(this)}},{key:"getIcon",value:function(){return this.getMetaInformation_().getIcon(this.getLabelInfo())}},{key:"getLabelArea",value:function(){return this.labelArea||[]}},{key:"getLabelInfo",value:function(){return this.getMetaInformation_().getLabelInfo(this)}},{key:"getLabelStyle",value:function(){return O({fill:"#333333"},this.getMetaInformation_().getLabelStyle(this.getStyle()))}},{key:"getGeometryLabelInfo",value:function(){return this.getMetaInformation_().getGeometryLabelInfo(this)}},{key:"getEntities",value:function(){var t=this;return(this.properties.entities||[]).map(function(e){return t.level.getDrawing().getVenueModel().getEntityById(e)})}},{key:"getLevel",value:function(){return this.level}},{key:"getType",value:function(){return this.geometry.type}},{key:"getZIndex",value:function(){return this.zIndex}},{key:"getBoundingBox",value:function(){var e=this.getType(),t=this.getCoordinates(),n=[];switch(e){case Ce:n=[t,t];break;case Ve:case xe:n=t;break;case Re:case De:n=t.reduce(function(e,t){return e.concat(t)},[]);break;case Ge:n=t.reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return e.concat(t)},[])}return pt.getBoundingBoxVertices(n)}},{key:"isIcon",value:function(){var e=this.getLabelInfo();return e&&e.lt===Mt.ICON}},{key:"isPointInsideGeometry",value:function(e,t){var n,r=1<arguments.length&&void 0!==t&&t,i=!1;switch(this.getType()){case Ce:n=this.getLabelArea()&&pt.getRectangularCoordinatesOfLabelArea(this.getLabelArea()),i=pt.isPointInPolygon(e,n);break;case Ve:break;case xe:i=r&&cn.isPointOnGeoJSONLineString(e,this.getCoordinates());break;case Re:i=r&&cn.isPointOnGeoJSONMultiLineString(e,this.getCoordinates());break;case De:i=cn.isPointInsideGeoJSONPolygon(e,this.getCoordinates());break;case Ge:i=cn.isPointInsideGeoJSONMultiPolygon(e,this.getCoordinates())}return i}},{key:"highlight",value:function(e,t){e=!(0<arguments.length&&void 0!==e)||e,t=1<arguments.length?t:void 0;this.state_.isHighlighted=e,this.state_.highlightedStyle=e?t:{}}},{key:"isHighlighted",value:function(){return Boolean(this.state_.isHighlighted)}},{key:"getHighlightedStyle",value:function(){return this.state_.highlightedStyle||{}}},{key:"toJSON",value:function(){return O({},this.geometry)}},{key:"getMetaInformation_",value:function(){return this.getLevel()?this.getLevel().getDrawing().getVenueModel().metaInformation_:null}}]),r}(),vn=function(){function o(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i=3<arguments.length?arguments[3]:void 0;u(this,o),this.id=e,this.properties=O({},n),this.zIndexCount=0,this.geometries=r.map(function(e){return t.zIndexCount+=1,new dn(e,t,t.zIndexCount)}),this.drawing=i}return l(o,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getDrawing",value:function(){return this.drawing}},{key:"getShortName",value:function(){return this.properties["short name"]||""}},{key:"getZIndex",value:function(){return Number(this.properties.zlevel)}},{key:"getFeatureCollectionArray",value:function(){return this.getGeometries().map(function(e){return e.toJSON()})}},{key:"getGeometryById",value:function(t){return this.geometries.find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(e){return 0<arguments.length&&void 0!==e&&e?this.geometries.sort(function(e,t){return t.getZIndex()-e.getZIndex()}):this.geometries.sort(function(e,t){return e.getZIndex()-t.getZIndex()})}},{key:"getGeometriesByAddress",value:function(t){return this.geometries.filter(function(e){return e.getInternalAddress()===t})}},{key:"isMain",value:function(){return Boolean(this.properties.main)}}]),o}(),fn=function(){function a(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[],o=4<arguments.length?arguments[4]:void 0;u(this,a),this.venueModel=o,this.levels=i.map(function(e){return new vn(e.id,e.properties,e.features,t)}),this.id=e,this.properties=n,this.frame_=r}return l(a,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"isRoot",value:function(){return Boolean(this.properties.is_root)}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getBoundingBox",value:function(){var e=this.frame_,t=e.height,n=e.width,e=e.transform,n=A(pt.getBoundingBoxVertices([pt.convertMxMy2LonLat(e,[0,0]),pt.convertMxMy2LonLat(e,[0,t]),pt.convertMxMy2LonLat(e,[n,0]),pt.convertMxMy2LonLat(e,[n,t])]),2),t=n[0],n=n[1];return[n[1],t[0],t[1],n[0]]}},{key:"getCenter",value:function(){var e=this.frame_;if(e)return pt.convertMxMy2LonLat(e.transform,[e.width/2,e.height/2])}},{key:"getGeometryById",value:function(t,e){return e?e.getGeometryById(t):this.getGeometries().find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.levels.flatMap(function(e){return e.getGeometries()})}},{key:"getLevelById",value:function(t){return this.levels.find(function(e){return e.getId()===t})}},{key:"getLevelByZIndex",value:function(t){return this.levels.find(function(e){return e.getZIndex()===t})}},{key:"getLevels",value:function(){return this.levels}},{key:"getMainLevel",value:function(){return this.levels.find(function(e){return e.isMain()})}},{key:"getVenueModel",value:function(){return this.venueModel}}]),a}(),gn=He.STANDARD,pn=function(){function o(){var n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:new jt;u(this,o),this.metaInformation_=i,this.id=e.id,this.location=e.location||{},this.properties=O({},e.properties),this.drawings=(e.drawings||[]).map(function(e){var t=e.levels.map(function(e){var t=e.id;return r.find(function(e){return e.id===t})});return new fn(e.id,e.properties,e.ref_frame,t,n)}),this.entities=(t.entities||[]).map(function(e){return new hn(e.id,e.properties,n)})}return l(o,[{key:"getDisplaySettings",value:function(){return this.metaInformation_.releaseSettings_.displayOptions.display||gn}},{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.properties.name}},{key:"getBoundingBox",value:function(){var e=pt.getBoundingBoxVertices(this.getDrawings().flatMap(function(e){var t=A(e.getBoundingBox(),4),e=t[0];return[[t[1],t[2]],[t[3],e]]})),t=A(e,2),e=t[0],t=t[1];return[t[1],e[0],e[1],t[0]]}},{key:"getCenter",value:function(){return this.location.coordinates}},{key:"getEntityById",value:function(t){return this.entities.find(function(e){return e.id===t})}},{key:"getGeometryById",value:function(t){return this.getGeometries().find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.getLevels().sort(function(e,t){return e.getZIndex()-t.getZIndex()}).flatMap(function(e){return e.getGeometries()})}},{key:"getGeometriesByLonLat",value:function(t,e,n){var r=this,n=!(2<arguments.length&&void 0!==n)||n,e=(1<arguments.length&&void 0!==e?e:[]).map(function(e){return r.getLevelById(e)});return 0===e.length&&(e=this.drawings.filter(function(e){e=e.getBoundingBox();return pt.isPointInBoundingBox(t,e)}).flatMap(function(e){return e.getLevels()})),cn.getGeometriesByLonLat(t,e.flatMap(function(e){return e.getGeometries(!0)}),n)}},{key:"getDrawingById",value:function(t){return this.drawings.find(function(e){return e.getId()===t})}},{key:"getDrawings",value:function(){return this.drawings}},{key:"getRootDrawing",value:function(){return this.drawings.find(function(e){return e.isRoot()})}},{key:"getLevelById",value:function(t){return this.getLevels().find(function(e){return e.getId()===t})}},{key:"getLevelsByZIndex",value:function(e){var t=0<arguments.length&&void 0!==e?e:0;return this.getLevels().filter(function(e){return Number(e.getZIndex())===Number(t)})}},{key:"getLevels",value:function(){return this.drawings.flatMap(function(e){return e.getLevels()})}},{key:"getLevelMapFlattenedByZIndex_",value:function(){return this.getLevels().reduce(function(e,t){var n=t.getZIndex(),e=e;return e[n]||(e[n]=[]),e[n].push(t),e},{})}},{key:"getIconsInformation",value:function(){var t=new Map;return this.getGeometries().filter(function(e){return e.isIcon()}).forEach(function(e){e=e.getLabelInfo();t.set(e.iconIdentifier,e)}),Array.from(t.values())}}]),o}(),yn={PRD:"vfs.venue.maps.api.here.com",STG:"vfs.sit.venue.maps.api.here.com"},mn=function(){h(i,un);var r=p(i);function i(e){var t=e.apiKey,n=e.fileHost,e=e.token;return u(this,i),e=r.call(this,{apiKey:t,fileHost:n||yn.PRD,token:e}),n&&(e.isHostCustom=!0),e}return l(i,[{key:"fetch",value:function(e,t,n){var r=this.hostConfig_,i=r.apiKey,o=r.token,r=O({method:"GET",headers:{}},t),t=e;return t.startsWith("http://")&&(t=t.replace(/http:\/\//gm,"https://")),o?(e="Bearer ",o=o.startsWith(e)?o:"".concat(e).concat(o),r.headers instanceof Headers?r.headers.append("Authorization",o):r.headers.Authorization=o):i&&(t="".concat(t,"?apiKey=").concat(i)),yt.get(t,r,n)}}]),i}(),In={isIconsEnabled:!0,isMetaEnabled:!0,metaOptions:{},iconOptions:{}},_n=Object.keys(Fe).map(function(e){return{identifier:e,name:void 0,url:void 0}}),En=function(){function i(e){var t=e.apiKey,n=e.baseUrl,r=e.token,e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];u(this,i);r={apiKey:t,fileHost:n,token:r};this.dataApi_=new(e?ln:mn)(r)}return l(i,[{key:"load",value:function(n,e){var r=this,e=1<arguments.length&&void 0!==e?e:{},e=O(O({},In),e),i=e.isIconsEnabled,t=e.isMetaEnabled,o=e.iconOptions,a=e.metaOptions;return Promise.resolve().then(function(){return t?r.getMeta_(n,a).catch(function(e){return Promise.resolve()}):new jt}).then(function(e){return r.getVenue_(n,e)}).then(function(e){if(dt.emit(ht.VENUE_MAP_DATA_LOADED,{data:e}),i){var t=e.getIconsInformation();return r.getIcons_(n,e.metaInformation_,t,o).then(function(){return e})}return e})}},{key:"getVenue_",value:function(t,r){var n=this;return this.getCommunityMap_(t).then(function(e){return Promise.all([Promise.resolve(e),n.getCommunityEntity_(t),n.getLevels_(t,e.drawings.flatMap(function(e){return e.levels.map(function(e){return e.id})}))])}).then(function(e){var t=A(e,3),n=t[0],e=t[1],t=t[2];return new pn(n,e,void 0===t?[]:t,r)})}},{key:"getCommunityMap_",value:function(t){return this.dataApi_.getGeoJsonApi().getCommunityMap(t).catch(function(e){return Promise.reject(new Error("Community map load failed for venue id ".concat(t,' with error "\n ').concat(e.message,'"')))})}},{key:"getCommunityEntity_",value:function(t){return this.dataApi_.getGeoJsonApi().getCommunityEntity(t).catch(function(e){return Promise.reject(new Error("Community Entity failed for venue id ".concat(t,' with error "').concat(e.message,'"')))})}},{key:"getLevels_",value:function(e,t){var n=this,t=1<arguments.length&&void 0!==t?t:[];return Promise.all(t.map(function(t){return n.dataApi_.getGeoJsonApi().getGeoJsonLevelGeometry(e,t).catch(function(e){return Promise.reject(new Error("Level load failed for level id ".concat(t,' with error: "').concat(e.message,'"')))})}))}},{key:"getIcon_",value:function(e,t,n,r){var i=2<arguments.length&&void 0!==n?n:{},o=3<arguments.length&&void 0!==r&&r,a=i.iconIdentifier,r=i.url;return a&&r?this.dataApi_.fetch(this.dataApi_.getNormalizedUrl(r)).then(function(e){e=new It(O(O({},i),e),o);return t.setIcon(a,e),e}):Promise.reject(new Error("Issue with icon data, iconIdentifier and url should be available: ".concat(i)))}},{key:"getIcons_",value:function(e,n,t,r){var i=this,t=2<arguments.length&&void 0!==t?t:[],o=(3<arguments.length&&void 0!==r?r:{}).isMultiObjectToSplit;return Promise.all(t.map(function(t){return i.getIcon_(e,n,t,o).catch(function(e){return Promise.resolve(t)})})).catch(function(e){return Promise.resolve()})}},{key:"getMeta_",value:function(t,e,n){var r=this,i=1<arguments.length&&void 0!==e?e:{},o=2<arguments.length&&void 0!==n?n:_n,a=new jt;return Promise.resolve().then(function(){return r.getMetaConfig_(t,i).then(function(e){return a.releaseSettings_=e.settings,r.dataApi_.getMetaConfig(e)})}).then(function(e){return r.getMetaFiles_(e,a,o).then(function(){return r.getMetaOverrides_(t,e,a,o)})}).then(function(){return a})}},{key:"getMetaConfig_",value:function(e){e=this.dataApi_.getMetaConfigUrl(e);return this.dataApi_.fetch(e).catch(function(e){return Promise.reject(e)})}},{key:"getMetaFiles_",value:function(r,i,e,t){var o=this,e=2<arguments.length&&void 0!==e?e:[],a=!(3<arguments.length&&void 0!==t)||t;return Promise.all(e.map(function(e){var t=e.identifier,n=e.name,e=e.url;return!e&&a&&(e=o.dataApi_.getMetaFileUrl(r,t,n)),e=e||o.dataApi_.getGlobalMetaFileUrl(t,n),o.dataApi_.fetch(e).then(function(e){return i.instantiateMetaFileAccessor_(t,e),e}).catch(function(e){return Promise.resolve()})}))}},{key:"getMetaOverrides_",value:function(r,i,o,e){var a=this,e=3<arguments.length&&void 0!==e?e:[];return Promise.all(e.map(function(e){var t=e.identifier,n=e.name,n=(e=t,n=n,r&&i&&a.dataApi_.getMetaOverrideFileUrls(r,i,e,n)||[]);return Promise.all(n.map(function(e){return a.dataApi_.fetch(e).then(function(e){return o[t]&&o[t].applyOverride(e,!1),Promise.resolve()}).catch(function(e){return Promise.resolve()})}))}))}}]),i}(),Mn="https://meta-indoor-routing.api-gateway.ls.hereapi.com",On=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(u(this,t),!e.apiKey&&!e.token)throw new Error("API key or Token is missing");this.config_=O({baseUrl:Mn},e)}return l(t,[{key:"calculateRoute",value:function(e){var t=e.origin,n=void 0===t?{}:t,r=e.destination,i=void 0===r?{}:r,t=f(e,["origin","destination"]);if(!n.coordinates||!i.coordinates)throw new Error("Waypoint coordinates are missing");var r=function(e){var t=e.coordinates,n=e.venueId,e=e.levelId,t=t.join(",");return n&&e?t.concat(";indoorMapId=",n,";levelId=",e):t},e=new URL("".concat(this.config_.baseUrl,"/v1/routes")),o=new URLSearchParams({origin:r(n),destination:r(i),apiKey:this.config_.apiKey});return Object.entries(t).forEach(function(e){var t=A(e,2),e=t[0],t=t[1];o.append(e,"object"===s(t)?JSON.stringify(t):t)}),e.search=o,fetch(e,{headers:{"X-Api-Key":this.config_.apiKey}}).then(function(e){return e.json()})}}]),t}(),An=function(){h(s,H.map.Feature);var t=p(s);function s(e){var n;if(u(this,s),n=t.call(this),!(e instanceof pn))throw new Error("It is mandatory to provide valid instance of venueModel");return n.venueModel=e,n.search_=new Ee(e),n.status_={activeDrawingId:e.getRootDrawing().getId(),activeLevelIndex:e.getRootDrawing().getMainLevel().getZIndex()},n.mapObjectStore_=n.getDefaultMapObjectsStore_(),n.drawings=e.getDrawings().map(function(e){e=new _(e);return e.setParentEventTarget(g(n)),e}),n.levels=e.getLevels().map(function(e){var t=new E(e);return t.setParentEventTarget(n.drawings.find(function(e){return e.getId()===t.getData().getDrawing().getId()})),t}),n.geometries=e.getGeometries().map(function(e){var t=new I(e);return t.setParentEventTarget(n.levels.find(function(e){return e.getId()===t.getData().getLevel().getId()})),t}),n}return l(s,[{key:"getData",value:function(){return this.venueModel}},{key:"getBoundingBox",value:function(){return v(H.geo.Rect,L(this.venueModel.getBoundingBox()))}},{key:"getCenter",value:function(){var e=A(this.venueModel.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.venueModel.getId()}},{key:"getName",value:function(){return this.venueModel.getName()}},{key:"getDrawing",value:function(t){return this.drawings.find(function(e){return e.getId()===t})}},{key:"getDrawings",value:function(){return this.drawings}},{key:"getLevel",value:function(t){return this.levels.find(function(e){return e.getId()===t})}},{key:"getLevels",value:function(){return this.levels}},{key:"getGeometry",value:function(t){return this.geometries.find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.geometries}},{key:"getActiveLevels",value:function(){var t=this;return this.getData().getDisplaySettings()===He.FLATTEN?this.venueModel.getLevelsByZIndex(this.status_.activeLevelIndex).map(function(e){return t.getLevel(e.getId())}):[this.venueModel.getDrawingById(this.status_.activeDrawingId).getLevelByZIndex(this.status_.activeLevelIndex)].map(function(e){return t.getLevel(e.getId())})}},{key:"getActiveDrawing",value:function(){return this.getDrawing(this.status_.activeDrawingId)}},{key:"setActiveDrawing",value:function(e){if(this.status_.activeDrawingId!==e){var t=this.venueModel.getDrawingById(e);if(!t)throw new Error("Drawing ".concat(e," was not found"));var n=this.status_.activeDrawingId;this.status_.activeDrawingId=e,this.setActiveLevelIndex(t.getMainLevel().getZIndex()),this.dispatchEvent(new H.util.ChangeEvent(s.EVENTS.DRAWING_CHANGE,e,n))}}},{key:"getActiveLevelIndex",value:function(){return this.status_.activeLevelIndex}},{key:"setActiveLevelIndex",value:function(e){var t;this.venueModel.getLevelsByZIndex(e)&&(t=this.status_.activeLevelIndex,this.status_.activeLevelIndex=e,this.dispatchEvent(new H.util.ChangeEvent(s.EVENTS.LEVEL_CHANGE,e,t)))}},{key:"isActive",value:function(){var e=this.getParentEventTarget();return!!e&&this===e.activeVenue}},{key:"getHighlightedGeometries",value:function(){var t=this;return this.venueModel.getGeometries().filter(function(e){return e.isHighlighted()}).map(function(e){return t.getGeometry(e.getId())})}},{key:"setHighlightedGeometries",value:function(e,t,n){var r=!(0<arguments.length&&void 0!==e)||e,t=1<arguments.length&&void 0!==t?t:[],n=2<arguments.length&&void 0!==n?n:{},n=O(O({},oe),n),i=n.fillColor,o=n.outlineColor,a=n.outlineWidth;t.forEach(function(e){e.getData().highlight(r,{m:i,o:o,w:a})}),this.dispatchEvent(s.EVENTS.GEOMETRY_HIGHLIGHT)}},{key:"getMapObjects",value:function(e,t){e=0<arguments.length&&void 0!==e?e:this.getActiveLevelIndex(),t=1<arguments.length&&void 0!==t?t:this.getActiveDrawing();return this.mapObjectStore_[e][t.getId()]}},{key:"setMapObjects",value:function(e,t,n){e=0<arguments.length&&void 0!==e?e:[],t=1<arguments.length&&void 0!==t?t:this.getActiveLevelIndex(),n=2<arguments.length&&void 0!==n?n:this.getActiveDrawing();this.mapObjectStore_[t]&&this.mapObjectStore_[t][n.getId()]&&(this.mapObjectStore_[t][n.getId()]=L(e)),this.updateMapObjectsVisibility_()}},{key:"search",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:"";return this.search_.find(e).flatMap(function(e){return e.geometries.map(function(e){return t.getGeometry(e.getId())})})}},{key:"updateMapObjectsVisibility_",value:function(){Object.values(this.mapObjectStore_).forEach(function(e){Object.values(e).forEach(function(e){return e.forEach(function(e){return e.setVisibility(!1)})})}),this.isActive()&&this.mapObjectStore_[this.getActiveLevelIndex()][this.getActiveDrawing().getId()].forEach(function(e){return e.setVisibility(!0)})}},{key:"getDefaultMapObjectsStore_",value:function(){var r=this,i=this.getData().getDisplaySettings()===He.FLATTEN;return this.venueModel.getLevels().reduce(function(e,t){var n=t.getZIndex(),e=O({},e);return e[n]||(e[n]={}),e[n][t.getDrawing().getId()]=[],i&&(e[n][r.venueModel.getRootDrawing().getId()]=[]),e},{})}}]),s}();An.EVENTS={ACTIVE_VENUE_CHANGE:"activevenuechange",DRAWING_CHANGE:"drawingchange",LEVEL_CHANGE:"levelchange",GEOMETRY_HIGHLIGHT:"geometryhighlight"};function Ln(e,t,n){return n===Rn.ObjectType.SEGMENT_START_MARKER?0===e?Cn:Dn:n===Rn.ObjectType.SEGMENT_FINISH_MARKER?1===t.length||e===t.length-1?xn:Vn:"indoor"===t[e].departure.place.type?wn:Pn}var Tn=function(){function e(){u(this,e)}return l(e,null,[{key:"getIconLayer",value:function(e){return{type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.isIcon()&&e.getIcon()}).map(function(e){var t=A(e.getLabelArea(),2),n=t[0],r=t[1],i=e.getLevel(),t=e.getIcon().getSVG();return{type:"Feature",properties:{id:e.getId(),geometryId:e.getId(),levelId:i.getId(),name:e.getDisplayName(),venueId:i.getDrawing().getVenueModel().getId(),url:t?"data:image/svg+xml;utf8,".concat(encodeURIComponent(t)):""},geometry:{type:q,coordinates:[n,r]}}})}}},{key:"getLabelLayer",value:function(e){return{type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.getDisplayName()&&!e.isIcon()}).map(function(e){var t=A(e.getLabelArea(),2),n=t[0],r=t[1],i=e.getLabelStyle(),o=i.fill,t=i.zmin,i=e.getLevel();return{type:"Feature",properties:{id:e.getId(),geometryId:e.getId(),levelId:i.getId(),venueId:i.getDrawing().getVenueModel().getId(),name:e.getDisplayName(),minZoom:t||15,textFillColor:o.toLowerCase()},geometry:{type:q,coordinates:[n,r]}}})}}},{key:"getGeometryLayer",value:function(e){return{type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.getType()!==q}).map(function(e){var t=e.getHighlightedStyle()||{},n=t.m,r=t.o,i=t.w,o=O({},e.getStyle()),a=o.m,s=o.o,u=o.w,l=re.fillColor,c=re.outlineColor,t=re.outlineWidth,o=e.getLevel();return{type:"Feature",properties:{id:e.getId(),fillColor:(n||a||l).toLowerCase(),geometryId:e.getId(),levelId:o.getId(),venueId:o.getDrawing().getVenueModel().getId(),outlineColor:(r||s||c).toLowerCase(),outlineWidth:Number(((i||u||t)/3).toFixed(2)),zIndex:e.getZIndex()},geometry:{type:e.getType(),coordinates:e.getCoordinates()}}})}}},{key:"getFootprintLayer",value:function(e){return{type:"FeatureCollection",features:e.flatMap(function(e){var t=e.getData().getRootDrawing().getMainLevel().getId(),n=e.getLevel(t).getData().getGeometries().filter(function(e){return e.getType()===$});return[{type:"Feature",properties:{isFootprint:!0,levelId:t,venueId:e.getId(),zIndex:1},geometry:{type:"MultiPolygon",coordinates:n.map(function(e){return e.getCoordinates()})}},{type:"Feature",properties:{isFootprint:!0,levelId:t,venueId:e.getId(),zIndex:2,venueName:e.getName()},geometry:{type:"Point",coordinates:e.getCenter().toGeoJSON().coordinates.slice(0,2)}}]})}}}]),e}(),Nn=function(){function e(){u(this,e)}return l(e,null,[{key:"getStyle",value:function(e){var e=0<arguments.length&&void 0!==e?e:[],n={styles:[{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#613F8E",lineWidth:"2px",renderOrder:1},{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#AF91B4",renderOrder:2},{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Point"],technique:"text",color:"black",size:16,text:["get","venueName"],priority:61},{layer:le.VECTOR,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:["get","fillColor"],renderOrder:["get","zIndex"]},{layer:le.VECTOR,technique:"solid-line",color:["get","outlineColor"],lineWidth:["get","outlineWidth"],renderOrder:["get","zIndex"]},{layer:le.TEXT,minZoomLevel:["get","minZoom"],technique:"text",color:["get","textFillColor"],size:ie.size,text:["get","name"],priority:60},{layer:le.ICON,minZoomLevel:ae,when:["==",["geometry-type"],"Point"],technique:"labeled-icon",textIsOptional:!0,size:0,imageTexture:["concat","texture",["get","name"]],screenWidth:["interpolate",["linear"],["zoom"],15,3,21,25],screenHeight:["interpolate",["linear"],["zoom"],15,3,21,25],priority:61}],images:{},imageTextures:[]};return e.forEach(function(e){var t="texture"+e.properties.name;n.images[t]||(n.images[t]={url:e.properties.url,preload:!0},n.imageTextures.push({name:t,image:t}))}),new H.map.render.harp.Style(n)}}]),e}(),bn=function(){function n(){u(this,n)}return l(n,null,[{key:"getIconsTextures",value:function(e){var i={},o={},a=(0<arguments.length&&void 0!==e?e:[]).reduce(function(e,t){var n=t.properties.name;return e[n]||(e[n]=[]),e[n].push(t),e},{});return Object.keys(a).forEach(function(e){var t="texture".concat(e),n="sprite".concat(e),r=a[e][0].properties.url;i[t]={url:r,sprites:c({},n,[0,0,50,50])},a[e].forEach(function(e){e=e.properties;o["icon".concat(e.name)]={filter:{name:e.name,$zoom:{min:ae}},draw:{points:{interactive:!0,priority:1,size:[[15,"5%"],[16,"10%"],[17,"15%"],[18,"25%"],[19,"35%"],[20,"40%"],[21,"50%"]],texture:t,sprite:n}}}})}),{textures:i,iconLayers:o}}},{key:"getFootprintLayer",value:function(){return{data:{source:"venues",layer:le.FOOTPRINT},draw:{polygons:{interactive:!0,color:"#AF91B4",order:2},lines:{color:"#613F8E",width:"2px",order:1},points:{color:"[0, 0, 0, 0]",size:"0px",order:3,priority:1,text:{anchor:"center",collide:!1,font:{fill:"black",size:"16px"},text_source:"function() { return feature.venueName }"}}}}}},{key:"getGeometryLayer",value:function(){return{data:{source:"venues",layer:le.VECTOR},draw:{polygons:{interactive:!0,color:"function() { return feature.fillColor }",order:"function() { return feature.zIndex }"},lines:{color:"function() { return feature.outlineColor }",order:"function() { return feature.zIndex }",width:"function() { return feature.outlineWidth }"}}}}},{key:"getTextLayer",value:function(){return{filter:{$zoom:{min:se}},data:{source:"venues",layer:le.TEXT},draw:{points:{filter:"function() { return $zoom > feature.minZoom }",color:"[0, 0, 0, 0]",size:"0px",offset:["0px","-10px"],priority:2,text:{font:{fill:"function() { return feature.textFillColor }",size:ie.size},text_source:"function() { return feature.name }"}}}}}},{key:"getIconLayer",value:function(e){return O({data:{source:"venues",layer:le.ICON}},e)}},{key:"getStyle",value:function(e){var t=n.getIconsTextures(0<arguments.length&&void 0!==e?e:[]),e=t.textures,t=t.iconLayers,t={venue_footprints:n.getFootprintLayer(),venue_geometries:n.getGeometryLayer(),venue_labels:n.getTextLayer(),venue_icons:n.getIconLayer(t)},e=H.gl.yaml.safeDump({sources:{venues:{max_zoom:ue,type:"GeoJSONTileSource"}},layers:t,textures:e});return new H.map.render.webgl.Style(e)}}]),n}(),Sn={type:"FeatureCollection",features:[]},kn={extent:4096,indexMaxZoom:0,maxZoom:24,tolerance:3},Ft=function(){h(n,H.map.provider.RemoteTileProvider);var t=p(n);function n(e){return u(this,n),(e=t.call(this,e)).venues=[],e.activeVenue=null,e.dataLayers_={},e.tileIndexes_={},e.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,e.activeVenueChangeHandler_,void 0,g(e)),e}return l(n,[{key:"setStyle",value:function(e){return this.setStyleInternal(e)}},{key:"getStyle",value:function(){return this.getStyleInternal()}},{key:"isFeatureVisible_",value:function(e,t){var n=e.properties;return this.activeVenue&&n.venueId===this.activeVenue.getId()?t!==le.FOOTPRINT&&this.activeVenue.getActiveLevels().some(function(e){return e.id===n.levelId}):!0===n.isFootprint&&t===le.FOOTPRINT}},{key:"requestInternal",value:function(s,u,l,e){function c(e){for(var t=0;t<e.length;t+=1)e[t]=e[t].map(function(e){return Q(e,l,s,u,kn.extent)})}var h=this,d={};return Object.keys(this.tileIndexes_).forEach(function(t){var e=h.tileIndexes_[t].getTile(l,s,u);d[t]=e?function(e){var t=[],n=e&&e.features;if(n)for(var r=0,i=n.length;r<i;r+=1){var o=n[r],a=o.type,s=void 0,u=!1;switch(a){case ce:s={type:ee,coordinates:o.geometry.map(function(e){return e.slice()})};break;case he:case de:s={type:te,coordinates:o.geometry.map(function(e){return e.map(function(e){return e.slice()})})},a===de&&null==(s=X(s))&&(u=!0);break;default:u=!0}u||t.push({geometry:s,id:o.id,properties:o.tags,type:"Feature"})}return{type:"FeatureCollection",features:t}}(e):Sn,d[t].features=d[t].features.filter(function(e){return h.isFeatureVisible_(e,t)});for(var n=0;n<d[t].features.length;n+=1){var r=d[t].features[n],i=r.geometry.type;if(i===$||i===te)c(r.geometry.coordinates);else if(i===ne)r.geometry.coordinates.map(c);else for(var o=r.geometry.coordinates,a=0;a<o.length;a+=1)o[a]=Q(o[a],l,s,u,kn.extent)}}),e(d),{cancel:function(){}}}},{key:"getActiveVenue",value:function(){return this.activeVenue}},{key:"getVenue",value:function(t){return t?this.venues.find(function(e){return e.getId()===Number(t)}):this.activeVenue}},{key:"setActiveVenue",value:function(e){var t=this.activeVenue;this.activeVenue=e,this.dispatchEvent(new H.util.ChangeEvent(An.EVENTS.ACTIVE_VENUE_CHANGE,e,t)),this.reload()}},{key:"addVenue",value:function(e,t){var n=1<arguments.length&&void 0!==t&&t;if(!(e instanceof An))throw new Error("Invalid argument");t=e.getId();if(this.getVenue(t))throw new Error("Please invoke provider.removeVenue to remove old instance of venue ".concat(t," before adding new"));e.setParentEventTarget(this),this.venues.push(e),n||(this.reloadData_(),this.reloadStyle_())}},{key:"addVenues",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:[];0<e.length&&(e.forEach(function(e){e instanceof An&&t.addVenue(e,!0)}),this.reloadData_(),this.reloadStyle_())}},{key:"removeVenue",value:function(e){var t;e instanceof An&&-1<this.venues.indexOf(e)&&(t=e.getId(),this.activeVenue&&this.activeVenue.getId()===t&&this.setActiveVenue(null),this.venues.splice(this.venues.indexOf(e),1),this.reloadData_(),this.reloadStyle_(),this.reload())}},{key:"getFeatureProxy",value:function(e,t,n){var r=e.geometryId,e=e.venueId,e=this.getVenue(e);return r?n(e.getGeometries().find(function(e){return e.id===r})):e&&n(e),!0}},{key:"addVenueEventListeners_",value:function(e){e&&(e.addEventListener(An.EVENTS.GEOMETRY_HIGHLIGHT,this.geometryHighlightHandler_,void 0,this),e.addEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),e.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this))}},{key:"removeVenueEventListeners_",value:function(e){e&&(e.removeEventListener(An.EVENTS.GEOMETRY_HIGHLIGHT,this.geometryHighlightHandler_,void 0,this),e.removeEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),e.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this))}},{key:"activeVenueChangeHandler_",value:function(e){var t=e.oldValue,e=e.newValue;t&&(this.removeVenueEventListeners_(t),t.updateMapObjectsVisibility_()),e&&(this.addVenueEventListeners_(e),e.updateMapObjectsVisibility_())}},{key:"drawingChangeHandler_",value:function(){this.reload()}},{key:"levelChangeHandler_",value:function(){this.activeVenue&&(this.activeVenue.updateMapObjectsVisibility_(),this.reload())}},{key:"geometryHighlightHandler_",value:function(){this.reloadData_([le.VECTOR]),this.reload()}},{key:"createDataLayers_",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:Object.keys(le),n=le.FOOTPRINT,r=le.ICON,i=le.TEXT,o=le.VECTOR;e.forEach(function(e){switch(e){case o:t.dataLayers_[o]=Tn.getGeometryLayer(t.venues);break;case n:t.dataLayers_[n]=Tn.getFootprintLayer(t.venues);break;case r:t.dataLayers_[r]=Tn.getIconLayer(t.venues);break;case i:t.dataLayers_[i]=Tn.getLabelLayer(t.venues);break;default:throw new Error("Unsupported Layer ".concat(e))}})}},{key:"createTileIndexes_",value:function(e){var t=this;(0<arguments.length&&void 0!==e?e:Object.keys(le)).forEach(function(e){t.tileIndexes_[e]=new J(t.dataLayers_[e],kn)})}},{key:"reloadData_",value:function(e){e=0<arguments.length&&void 0!==e?e:Object.keys(le);this.createDataLayers_(e),this.createTileIndexes_(e)}},{key:"reloadStyle_",value:function(){var e=this.dataLayers_[le.ICON]?this.dataLayers_[le.ICON].features:[];this.getEngineType()===H.Map.EngineType.WEBGL?this.setStyle(bn.getStyle(e)):this.getEngineType()===H.Map.EngineType.HARP&&this.setStyle(Nn.getStyle(e))}},{key:"providesGeoJSON",value:function(){return!0}}]),n}(),wn=new H.map.SpatialStyle({strokeColor:"#1ab4bf",lineWidth:3}),Pn=new H.map.SpatialStyle({strokeColor:"#1ab4bf",lineWidth:3}),Cn=new H.map.Icon("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImIiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PG1hc2sgaWQ9ImMiIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NiIgeD0iMCIgeT0iMCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSI0NS4xNiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9Ii4yNSIgcng9IjMuNSIgcnk9IjMuNSIvPjx1c2UgZmlsbD0iIzAxQjZCMiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBmaWxsPSIjMzIzMjMyIiBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMTEuODEgMzcuNjZoMTYuMzhsLTguMiA4eiIvPjx1c2Ugc3Ryb2tlPSIjNDE2QTg2IiBzdHJva2Utd2lkdGg9Ii41IiBtYXNrPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjYSIvPjxlbGxpcHNlIGN4PSIxOS44MSIgY3k9IjE5LjE5IiBmaWxsPSIjRkZGIiByeD0iNC44MSIgcnk9IjQuODEiLz48L2c+PC9zdmc+"),xn=new H.map.Icon("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzMi44MyAzMy4xMDRjLjQwNy0uMzc0IDEuNDE5LTEuNDUyIDEuNDE5LTEuNDUyeiIvPjxtYXNrIGlkPSJjIiB3aWR0aD0iMzgiIGhlaWdodD0iNDYiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PGVsbGlwc2UgaWQ9ImIiIGN4PSIxOS44MDciIGN5PSIxOS4xNjgiIHJ4PSIxMi4zNjMiIHJ5PSIxMi4xOTciLz48bWFzayBpZD0iZCIgd2lkdGg9IjI1LjcyNSIgaGVpZ2h0PSIyNS4zOTQiIHg9Ii0uNSIgeT0iLS41Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi45NDQgNi40NzFoMjUuNzI1djI1LjM5NEg2Ljk0NHoiLz48dXNlIHhsaW5rOmhyZWY9IiNiIi8+PC9tYXNrPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjQ1LjE2IiBmaWxsPSIjRkZGIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iLjI1IiByeD0iMy41IiByeT0iMy41Ii8+PHVzZSBmaWxsPSIjMzIzMjMyIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGZpbGw9IiM3RDdEN0QiIGQ9Ik0xMi4wMTEgMzcuODA1aDE1Ljk3OGwtNy45MTYgOHoiLz48dXNlIHN0cm9rZT0iIzdDN0M3QyIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNlKSIgeGxpbms6aHJlZj0iI2EiLz48dXNlIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNjKSIgeGxpbms6aHJlZj0iI2EiLz48ZWxsaXBzZSBmaWxsPSIjRkZGIiBjeD0iMTkuODA3IiBjeT0iMTkuMTY4IiByeD0iMTIuMzYzIiByeT0iMTIuMTk3Ii8+PHBhdGggZmlsbD0iIzMyMzIzMiIgZD0iTTYuODEyIDYuOTQ4aDYuNDV2Ni4zNjRoLTYuNDV6bTAgMTIuNzI3aDYuNDV2Ni4zNjRoLTYuNDV6bTYuNDUtNi4zNjNoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS0xOS4wOTFoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS02LjM2M2g2LjQ1djYuMzY0aC02LjQ1em0wIDEyLjcyN2g2LjQ1djYuMzY0aC02LjQ1eiIvPjx1c2Ugc3Ryb2tlPSIjRkZGIiBtYXNrPSJ1cmwoI2QpIiB4bGluazpocmVmPSIjYiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4="),Dn=null,Vn=null,Rn=function(){function v(e,t){u(this,v),this.indoorMapObjects_=null,this.outdoorMapObjects_=null,this.createRouteObjects_(e,t)}return l(v,[{key:"createRouteObjects_",value:function(e,t){var c=this,e=e.sections,h=void 0===e?[]:e,d=1<arguments.length&&void 0!==t?t:Ln;this.indoorMapObjects_={},this.outdoorMapObjects_=new H.map.Group;for(var n=function(e){var t=h[e],n=t.departure.place,r=n.id,i=n.type,o=H.util.flexiblePolyline.decode(t.polyline).polyline,a=void 0,s=void 0,n=d(e,h,v.ObjectType.SEGMENT_START_MARKER);n&&(a=new H.map.Marker(t.departure.place.location,{icon:n}));n=d(e,h,v.ObjectType.SEGMENT_FINISH_MARKER);n&&(s=new H.map.Marker(t.arrival.place.location,{icon:n}));var u,l=d(e,h,v.ObjectType.SEGMENT_POLYLINE);"indoor"===i?(i=function(e){var e=0<arguments.length&&void 0!==e?e:[],t=new Map,n=new H.geo.LineString,r=A(e[0],3)[2];return t.set(r,[n]),e.forEach(function(e){e[2]!==r&&(r=e[2],n=new H.geo.LineString,t.has(r)?t.get(r).push(n):t.set(r,[n])),n.pushLatLngAlt.apply(n,L(e))}),t}(o),u=Array.from(i.keys()).reduce(function(e,t){return e[t]||(e[t]=new H.map.Group),e},{}),l&&i.forEach(function(e,t){e.forEach(function(e){1<e.getPointCount()&&(e=new H.map.Polyline(e,{style:l}),u[t].addObject(e))})}),a&&u[t.departure.place.location.lvl].addObject(a),s&&u[t.arrival.place.location.lvl].addObject(s),c.indoorMapObjects_[r]=O(O({},c.indoorMapObjects_[r]||{}),u)):(l&&(o=new H.geo.LineString(o.flatMap(function(e){return[e[0],e[1],0]})),o=new H.map.Polyline(o,{style:l}),c.outdoorMapObjects_.addObject(o)),a&&c.outdoorMapObjects_.addObject(a),s&&c.outdoorMapObjects_.addObject(s))},r=0;r<h.length;r++)n(r)}},{key:"getIndoorObjects",value:function(){return this.indoorMapObjects_}},{key:"getOutdoorObjects",value:function(){return this.outdoorMapObjects_}}]),v}();Rn.ObjectType={SEGMENT_START_MARKER:1,SEGMENT_FINISH_MARKER:2,SEGMENT_POLYLINE:3};var Gn=function(){h(a,H.service.Service);var o=p(a);function a(e){var t;u(this,a),t=o.call(this,a,e);var n={apiKey:e.apikey,baseUrl:e.baseUrl&&e.baseUrl.getHost(),token:e.token},r={apiKey:n.apiKey,token:n.token};n.apiKey||(n.apiKey=t.getUrl().getQuery().apikey);var i=e.useLegacy||!1;return t.venueService_=new En(n,i),r.apiKey||(r.apiKey=t.getUrl().getQuery().apikey),e.routingBaseUrl&&(r.baseUrl=e.routingBaseUrl),t.routingService_=new On(r),t}return l(a,[{key:"loadVenue",value:function(e,t){t=1<arguments.length&&void 0!==t?t:{};return this.venueService_.load(e,t).then(function(e){return new An(e)})}},{key:"calculateRoute",value:function(e){return this.routingService_.calculateRoute(e)}}]),a}();Gn.CONFIG_KEY="venues",H.service.Platform.prototype.getVenuesService=function(e){return this.createService(Gn,e)};zt=function(){h(i,H.ui.Control);var r=p(i);function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u(this,i),(t=r.call(this)).provider_=null,t.levelSelectorUI_=null,t.setAlignment(n&&n.alignment||H.ui.LayoutAlignment.RIGHT_BOTTOM),t.addClass("venues-ui"),e instanceof An&&t.setVenue(e),t}return l(i,[{key:"renderInternal",value:function(e,t){y(d(i.prototype),"renderInternal",this).call(this,e,t),this.createLevelSelectorUI_(e),this.venue&&this.setVenue(this.venue)}},{key:"setVenue",value:function(e){e instanceof An&&(this.removeEventListeners_(),this.venue=e,this.provider_=e.getParentEventTarget(),this.update_(),this.addEventListeners_())}},{key:"createLevelSelectorUI_",value:function(e){var t=this;e.innerHTML="",this.levelSelectorUI_=null;this.levelSelectorUI_=new ct(e,null,null,function(e){return t.venue.setActiveLevelIndex(e)})}},{key:"update_",value:function(){var e,t;this.levelSelectorUI_&&(e=this.venue.getActiveDrawing().getData(),t=this.venue.getData().getDisplaySettings(),this.levelSelectorUI_.update(e,t),this.levelChangeHandler_())}},{key:"addEventListeners_",value:function(){this.venue&&(this.venue.addEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),this.venue.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this)),this.provider_&&this.provider_.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this)}},{key:"removeEventListeners_",value:function(){this.venue&&(this.venue.removeEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),this.venue.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this)),this.provider_&&this.provider_.removeEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this)}},{key:"levelChangeHandler_",value:function(){this.levelSelectorUI_.switch(this.venue.getActiveLevelIndex())}},{key:"drawingChangeHandler_",value:function(){this.update_()}},{key:"activeVenueChangeHandler_",value:function(e){this.setVenue(e.newValue)}}]),i}(),Ye=function(){h(i,H.ui.Control);var r=p(i);function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u(this,i),(t=r.call(this)).provider_=null,t.drawingSelectorUI_=null,t.addClass("venues-ui"),t.setAlignment(n&&n.alignment||H.ui.LayoutAlignment.RIGHT_BOTTOM),e instanceof An&&t.setVenue(e),t}return l(i,[{key:"renderInternal",value:function(e,t){y(d(i.prototype),"renderInternal",this).call(this,e,t),this.createDrawingSelectorUI_(e),this.venue&&this.setVenue(this.venue)}},{key:"setVenue",value:function(e){e instanceof An&&(this.removeEventListeners_(),this.venue=e,this.provider_=e.getParentEventTarget(),this.drawingSelectorUI_&&this.drawingSelectorUI_.update(e.getData()),this.addEventListeners_())}},{key:"createDrawingSelectorUI_",value:function(e){var t=this;e.innerHTML="",this.drawingSelectorUI_=null,this.drawingSelectorUI_=new rt(e,null,function(e){return t.venue.setActiveDrawing(e)})}},{key:"addEventListeners_",value:function(){this.venue&&this.venue.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this),this.provider_&&this.provider_.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this)}},{key:"removeEventListeners_",value:function(){this.venue&&this.venue.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this),this.provider_&&this.provider_.removeEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this)}},{key:"drawingChangeHandler_",value:function(){this.drawingSelectorUI_.switch(this.venue.getActiveDrawing().id)}},{key:"activeVenueChangeHandler_",value:function(e){this.setVenue(e.newValue)}}]),i}(),zt=Object.freeze({__proto__:null,DrawingControl:Ye,LevelControl:zt});return t(".venues-ui * {\n  font-family: 'Fira Sans', 'Helvetica Neue', Helvetica, sans-serif;\n  color: #0F1621; }\n\n.venues-ui .arrow {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center; }\n  .venues-ui .arrow--up {\n    background-image: url(\"data:image/svg+xml,%0A%3Csvg width='13px' height='9px' viewBox='0 0 13 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='VenueMap_Facilities_Detail' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Floorplan-Switcher' transform='translate(-426.000000, -584.000000)' fill='%23383C45'%3E%3Cg id='Map-Controls-Copy' transform='translate(417.753906, 572.000000)'%3E%3Cg id='Chevron,-Dark' transform='translate(15.000000, 16.499023) rotate(-180.000000) translate(-15.000000, -16.499023) translate(9.000000, 12.749023)'%3E%3Cpath d='M6.0105,7.5 L4.1895,5.76404817 L0.1695,1.90510321 C0.057,1.79759174 0,1.68291284 0,1.56106651 C0,1.44065367 0.057,1.32597477 0.1695,1.2184633 L1.2465,0.16771789 C1.347,0.0587729358 1.47,0.00430045872 1.617,0.00430045872 C1.764,0.00430045872 1.887,0.0587729358 1.986,0.166284404 L6.009,3.98365826 L10.023,0.161983945 C10.122,0.0530389908 10.236,0 10.3695,0 C10.503,0 10.62,0.0530389908 10.7205,0.161983945 L11.841,1.21129587 C12.0525,1.43922018 12.0525,1.67144495 11.8425,1.89793578 L7.827,5.76118119 L6.0105,7.5 Z' id='Fill-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); }\n  .venues-ui .arrow--down {\n    background-image: url(\"data:image/svg+xml,%0A%3Csvg width='13px' height='9px' viewBox='0 0 13 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='VenueMap_Facilities_Detail' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Floorplan-Switcher' transform='translate(-347.000000, -704.000000)' fill='%23383C45'%3E%3Cg id='Map-Controls' transform='translate(338.251953, 572.000000)'%3E%3Cg id='Chevron,-Dark' transform='translate(9.000000, 132.746094)'%3E%3Cpath d='M6.0105,7.5 L4.1895,5.76404817 L0.1695,1.90510321 C0.057,1.79759174 0,1.68291284 0,1.56106651 C0,1.44065367 0.057,1.32597477 0.1695,1.2184633 L1.2465,0.16771789 C1.347,0.0587729358 1.47,0.00430045872 1.617,0.00430045872 C1.764,0.00430045872 1.887,0.0587729358 1.986,0.166284404 L6.009,3.98365826 L10.023,0.161983945 C10.122,0.0530389908 10.236,0 10.3695,0 C10.503,0 10.62,0.0530389908 10.7205,0.161983945 L11.841,1.21129587 C12.0525,1.43922018 12.0525,1.67144495 11.8425,1.89793578 L7.827,5.76118119 L6.0105,7.5 Z' id='Fill-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); }\n\n.venues-ui .venues-ui-button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: #fff;\n  border: none;\n  border-bottom: 1px solid #9FA2A6;\n  cursor: pointer;\n  overflow: hidden;\n  color: #6e737a;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .venues-ui .venues-ui-button:hover, .venues-ui .venues-ui-button--active {\n    background-color: #f0f0f0;\n    color: #0F1621; }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.venues-ui__drawings .drawings {\n  position: absolute;\n  top: 0;\n  right: 45px;\n  display: none;\n  opacity: 0;\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__drawings .drawings--open {\n    display: block;\n    opacity: 1;\n    animation: fade 1s; }\n  .venues-ui__drawings .drawings .venues-ui-button {\n    width: auto;\n    padding: 0 10px; }\n    .venues-ui__drawings .drawings .venues-ui-button:first-of-type {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n    .venues-ui__drawings .drawings .venues-ui-button:last-of-type {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n.venues-ui__drawings .trigger {\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__drawings .trigger .arrow {\n    transform: rotate(0);\n    transition: 0.4s; }\n  .venues-ui__drawings .trigger.venues-ui-button--active .arrow {\n    transform: rotate(90deg);\n    transition: 0.4s; }\n\n.venues-ui__levels {\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__levels .levels {\n    overflow: hidden; }\n  .venues-ui__levels .venues-ui-button--up + .levels .venues-ui-button {\n    border-radius: 0; }\n  .venues-ui__levels .venues-ui-button:first-of-type {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .venues-ui__levels .venues-ui-button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .venues-ui__levels .venues-ui-button[disabled=disabled] .arrow {\n    opacity: 0.5; }\n\n.venues-ui__directory {\n  position: absolute;\n  top: 10px;\n  right: 60px;\n  bottom: calc(100% - 45px);\n  width: 350px;\n  overflow: hidden;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__directory.active {\n    bottom: 10px; }\n  .venues-ui__directory .directory__list {\n    top: 80px;\n    bottom: 20px;\n    position: absolute;\n    overflow-y: scroll;\n    right: 10px;\n    left: 10px;\n    font-size: 12px; }\n    .venues-ui__directory .directory__list svg {\n      width: 25px;\n      height: 25px; }\n  .venues-ui__directory .directory__heading {\n    margin: 8px;\n    font-size: 15px;\n    font-weight: normal;\n    cursor: pointer; }\n  .venues-ui__directory .directory__input {\n    margin: 10px; }\n    .venues-ui__directory .directory__input input {\n      width: 100%;\n      padding: 5px 0; }\n  .venues-ui__directory .directory__trigger {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    width: 10px;\n    height: 10px; }\n    .venues-ui__directory .directory__trigger .arrow {\n      transform: rotate(0);\n      transition: 0.4s; }\n    .venues-ui__directory .directory__trigger--active .arrow {\n      transform: rotate(-180deg);\n      transition: 0.4s; }\n"),e.Drawing=_,e.Geometry=I,e.Level=E,e.Provider=Ft,e.Route=Rn,e.Service=Gn,e.Venue=An,e.ui=zt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
}).call(self);
/* harmony default export */ __webpack_exports__["a"] = (H);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17), __webpack_require__(18)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./mapsjs-ui.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./mapsjs-ui.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "/*\n * Explanation why the layout looks so complicated:\n * The UI container needs a position (absolute or relative) to prevent z-index issues (DomMarker on top of UI)\n * Therefore it has these additional styles:\n *    position: absolute;\n *    width: 100%;\n *    height: 100%;\n * To prevent that the UI container captures all events the container is displaced by\n *   left: 100%;\n * To neutralize the displacement for the UI elements within the UI container the following adjustments are needed:\n *  - InfoBubble (.H_ib):            left: -100%;\n *  - left anchor (.H_l_left):       margin-left: -100%;\n *  - center anchor (.H_l_center):   left: -50%;            (was left: 50%)\n *  - right anchor (.H_l_right):     right: 100%;           (was right: 0)\n *                                        margin-left: -100%;\n */\n\n.H_ui {\n  font-size: 10px;\n  font-family: \"Lucida Grande\", Arial, Helvetica, sans-serif;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n  /* position ui on top of imprint to make both clickable */\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 100%;\n}\n.H_ui * {\n  /* normalize in case some other normalization CSS likes things differently */\n  box-sizing: content-box;\n  -moz-box-sizing: content-box;\n}\n.H_noevs {\n  pointer-events: none;\n}\n\n/*\n * Layout\n */\n.H_l_left {\n  position: absolute;\n  left: 16px;\n  margin-left: -100%;\n}\n.H_l_center {\n  position: absolute;\n  left: -50%;\n}\n.H_l_right {\n  position: absolute;\n  right: calc(100% + 16px);\n  margin-left: -100%;\n}\n.H_l_top {\n  top: 16px;\n}\n.H_l_middle {\n  top: 50%;\n}\n.H_l_bottom {\n  bottom: 16px;\n}\n\n/* Fix MAPSJS-579 for modern browsers */\n[class^=H_l_] {\n    pointer-events: none;\n}\n.H_ctl {\n    /* hack for IE9-10, auto doesn't work for them */\n    pointer-events: visiblePainted;\n    pointer-events: auto;\n}\n\n.H_l_horizontal .H_ctl {\n  float: left;\n}\n\n.H_l_anchor {\n  clear: both;\n  float: right;\n}\n\n.H_l_vertical .H_ctl {\n  clear: both;\n}\n\n.H_l_right .H_l_vertical .H_ctl {\n  float: right;\n}\n\n.H_l_right.H_l_middle.H_l_vertical .H_ctl{\n  float: right;\n}\n\n/**\n *  Element styles\n */\n\n.H_ctl {\n  margin: .8em;\n  position: relative;\n  -ms-touch-action: none;\n}\n\n.H_btn {\n  cursor: pointer;\n}\n\n.H_grp .H_btn,\n.H_rdo_buttons .H_btn {\n    box-shadow: none;\n}\n.H_grp .H_btn.H_active,\n.H_rdo_buttons .H_btn.H_active {\n  background: none;\n}\n\n.H_btn {\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n  border-radius: 0.5em;\n  width: 4em;\n  height: 4em;\n  background: #fff;\n}\n\n.H_disabled,\n.H_disabled:hover {\n  cursor: default;\n}\n\n.H_rdo_title {\n  font-size: 14px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #575B63;\n  color: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-radius: 5px 5px 0 0;\n  margin-bottom: 8px;\n  cursor: default;\n}\n\n.H_ui[dir=rtl] .H_rdo_title {\n  text-align: right;\n}\n\n.H_rdo ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n}\n\n/**\n *   Base Elements\n */\n.H_ctl.H_grp {\n  background: #fff;\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n  border-radius: 0.5em;\n}\n/* Button divider */\n.H_zoom .H_el {\n  position: relative;\n}\n.H_l_vertical .H_zoom .H_el:last-child::after,\n.H_l_horizontal .H_zoom .H_el:last-child::after {\n  content: none;\n}\n\n.H_l_vertical .H_zoom .H_el {\n  margin-bottom: 0.1em;\n}\n.H_l_vertical .H_zoom .H_el:last-child {\n  margin-bottom: 0;\n}\n.H_l_vertical .H_zoom .H_el::after {\n  content: \"\";\n  position: absolute;\n  width: 2.6em;\n  height: 0.1em;\n  bottom: -0.1em;\n  left: 0.7em;\n  background: rgba(15, 22, 33, 0.1);\n}\n\n.H_l_horizontal .H_zoom .H_el {\n  margin-right: 0.1em;\n}\n.H_l_horizontal .H_zoom .H_el:last-child {\n  margin-right: 0;\n}\n.H_l_horizontal .H_zoom .H_el::after {\n  content: \"\";\n  position: absolute;\n  width: 0.1em;\n  height: 2.6em;\n  top: 0.7em;\n  right: -0.1em;\n  background: rgba(15, 22, 33, 0.1);\n}\n/* End: Button divider */\n.H_l_horizontal .H_grp .H_btn,\n.H_l_vertical .H_ctl {\n  float: left;\n}\n\n\n/** Menu panel */\n.H_overlay {\n  font-size: 14px;\n  color: rgba(15, 22, 33, 0.6);\n  box-shadow: 0px 0 4px 0 rgba(15, 22, 33, 0.6);\n  border-radius: 5px;\n  position: absolute;\n  min-width: 200px;\n  background: #fff;\n  display: none;\n  z-index: 100;\n  padding-bottom: 4px;\n}\n\n.H_overlay .H_separator {\n  content: \"\";\n  position: relative;\n  display: block;\n  margin: 8px 16px 8px 16px;\n  height: 1px;\n  background: rgba(15, 22, 33, 0.1);\n}\n\n.H_overlay .H_btn,\n.H_overlay .H_rdo li {\n  width: 184px;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 16px;\n}\n.H_overlay .H_btn{\n  border-radius: 0px;\n}\n\n.H_overlay .H_btn:hover,\n.H_overlay .H_rdo li:hover {\n  color: rgba(15, 22, 33, 0.8);\n}\n\n.H_overlay .H_btn.H_disabled,\n.H_overlay .H_rdo.H_disabled li,\n.H_overlay .H_btn.H_disabled:hover,\n.H_overlay .H_rdo.H_disabled li:hover {\n  color: rgba(15, 22, 33, 0.2);\n}\n\n.H_overlay .H_btn.H_active,\n.H_overlay .H_rdo.H_active li,\n.H_overlay .H_btn.H_active:hover,\n.H_overlay .H_rdo.H_active li:hover {\n  color: #0F1621;\n}\n\n.H_overlay>*:last-child {\n  clear: both;\n}\n.H_overlay>.H_btn {\n  white-space: nowrap;\n}\n\n.H_overlay.H_open {\n  display: block;\n}\n\n.H_overlay::before, .H_overlay::after {\n  content: \" \";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n}\n.H_overlay.H_left::before {\n  border-width: 10px 10px 10px 0;\n  border-color: transparent rgba(15, 22, 33, 0.2) transparent transparent;\n  left: -12px;\n}\n.H_overlay.H_left::after {\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  left: -10px;\n}\n.H_overlay.H_top.H_left::after {\n  border-color: transparent #575B63 transparent transparent;\n}\n\n.H_overlay.H_right::before {\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent rgba(15, 22, 33, 0.2);\n  left: calc(100% + 1px);\n}\n.H_overlay.H_right::after {\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  left: 100%;\n}\n.H_overlay.H_top.H_right::after {\n  border-color: transparent transparent transparent #575B63;\n}\n\n.H_overlay.H_top::before,\n.H_overlay.H_top::after {\n  top: 10px;\n}\n.H_overlay.H_bottom::before,\n.H_overlay.H_bottom::after {\n  bottom: 10px;\n}\n.H_overlay.H_middle::before,\n.H_overlay.H_middle::after {\n  top: 50%;\n  margin-top: -10px;\n}\n\n.H_overlay.H_top.H_center::before {\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent rgba(15, 22, 33, 0.2) transparent;\n  top: -11px;\n  left: 50%;\n  margin-left: -10px;\n}\n.H_overlay.H_top.H_center::after {\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #575B63 transparent;\n  top: -10px;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.H_overlay.H_bottom.H_center::before {\n  border-width: 10px 10px 0 10px;\n  border-color: rgba(15, 22, 33, 0.2) transparent transparent transparent;\n  bottom: -11px;\n  left: 50%;\n  margin-left: -10px;\n}\n.H_overlay.H_bottom.H_center::after {\n  border-width: 10px 10px 0 10px;\n  border-color: #fff transparent transparent transparent;\n  bottom: -10px;\n  left: 50%;\n  margin-left: -10px;\n}\n\n\n/** InfoBubble */\n.H_ib {\n  position: absolute;\n  left: .91em;\n  left: -100%;\n}\n.H_ib_tail {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  margin: -10px -10px;\n}\n\n.H_ib_tail::before{\n  bottom: -1px;\n  border-width: 10px;\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n  right: 0px;\n}\n\n.H_ib_tail::after{\n  bottom: 0;\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: white;\n  border-style: solid;\n  border-width: 10px;\n}\n\n.H_ib.H_ib_top .H_ib_tail::after {\n  border-width: 10px 10px 0px 10px;\n  border-color: white transparent;\n}\n\n.H_ib.H_ib_top .H_ib_tail::before {\n  border-top-color: rgba(15, 22, 33, 0.2);\n  border-bottom-width: 0px;\n}\n\n.H_ib_notail .H_ib_tail {\n  display: none;\n}\n.H_ib_body {\n  background: white;\n  position: absolute;\n  bottom: .5em;\n  padding: 0;\n  right: 0px;\n  border-radius: 5px;\n  margin-right: -3em;\n  box-shadow: 0px 0 4px 0 rgba(15, 22, 33, 0.6);\n  margin-bottom: 0.5em;\n}\n\n.H_ib_close {\n  font-size: .6em;\n  position: absolute;\n  right: 12px;\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n  top: 12px;\n  z-index: 1;\n  background: none;\n  box-shadow: none;\n}\n\n.H_ui[dir=rtl] .H_ib_close {\n  left: 12px;\n  right: auto;\n}\n\n.H_ib_close svg.H_icon {\n    top: 0;\n    transform: none;\n    width: auto;\n    height: auto;\n}\n\n.H_ib_noclose .H_ib_close {\n  display: none;\n}\n.H_ib_noclose .H_ib_body {\n  padding: 0 0 0 0;\n}\n\n.H_ib_content {\n  min-width: 6em;\n  font: 14px \"Lucida Grande\", Arial, Helvetica, sans-serif;\n  line-height: 24px;\n  margin: 16px 28px 20px 16px;\n  color: rgba(15,22,33,.8);\n  user-select: text;\n  -moz-user-select: text;\n  -khtml-user-select: text;\n  -webkit-user-select: text;\n  -o-user-select: text;\n  -ms-user-select: text;\n}\n\n.H_ui[dir=rtl] .H_ib_content {\n  margin: 16px 16px 20px 28px;\n}\n\n\n/*##################################################  SLIDER  ########################################################*/\n\n.H_l_horizontal .H_zoom_slider {\n  min-width: 262px;\n}\n.H_slider {\n  cursor: pointer;\n}\n.H_l_horizontal.H_slider {\n  float: left;\n  height: 4em;\n  width: auto;\n  padding: 0 1em;\n}\n\n.H_slider .H_slider_track {\n  width: 0.4em;\n  height: 100%;\n}\n\n.H_l_horizontal.H_slider .H_slider_track {\n  height: 0.4em;\n  width: 100%;\n}\n\n.H_l_horizontal.H_slider .H_slider_cont {\n  height: 100%;\n}\n\n.H_l_horizontal.H_slider .H_slider_knob_cont {\n  margin-top: -0.4em;\n}\n\n.H_slider {\n  background-color: #fff;\n  padding: 1em 0em;\n  width: 4em;\n}\n\n\n.H_slider .H_slider_cont {\n  position: relative;\n}\n\n.H_slider .H_slider_knob_cont,\n.H_slider .H_slider_knob_halo {\n  width: 1.8em;\n  height: 1.8em;\n  margin-left: 0em;\n  border-radius:9em;\n}\n\n\n.H_slider .H_slider_knob {\n  width: 1.2em;\n  height: 1.2em;\n  background-color: white;\n  border-radius:9em;\n  -webkit-transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 50%;\n  box-shadow: 0em 0 0.5em 0 rgba(15, 22, 33, 0.6);\n  position: absolute;\n}\n\n.H_slider:hover .H_slider_knob {\n  box-shadow: 0em 0 0.5em 0 rgba(15, 22, 33, 0.8);\n}\n.H_slider.H_disabled .H_slider_knob {\n  box-shadow: 0em 0 0.5em 0 rgba(15, 22, 33, 0.2);\n}\n.H_slider.H_slider_active .H_slider_knob {\n  box-shadow: 0em 0 0.5em 0 rgba(15, 22, 33, 1);\n}\n\n.H_slider:hover .H_slider_track {\n  background-color: rgba(15, 22, 33, 0.8);\n}\n\n.H_disabled .H_slider_track {\n  background-color: rgba(15, 22, 33, 0.2);\n}\n.H_slider:hover .H_slider_track_active {\n  background-color: rgba(0, 182, 178, 0.8);\n}\n.H_disabled .H_slider_track_active {\n  background-color: rgba(0, 182, 178, 0.2);\n}\n.H_slider.H_slider_active .H_slider_track {\n  background-color: rgba(15, 22, 33, 1.0);\n}\n.H_slider.H_slider_active .H_slider_track_active {\n  background-color: rgba(0, 182, 178, 1.0);\n}\n\n.H_slider .H_slider_track,\n.H_slider .H_slider_knob_cont{\n  position:relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n  transform: translate(-50%,-50%);\n}\n\n.H_slider .H_slider_track {\n  background-color: rgba(15, 22, 33, 0.6);\n  overflow: hidden;\n}\n.H_slider .H_slider_track_active {\n  background-color: #00B6B2;\n  position: absolute;\n  transform: translate(-50%,0%);\n}\n\n.H_slider.H_disabled .H_slider_track {\n  background-color: rgba(15, 22, 33, 0.2);\n}\n.H_slider.H_disabled .H_slider_track_active {\n  background-color: #bae2e3;\n}\n\n.H_slider.H_l_horizontal .H_slider_track_active {\n  transform: translate(-200%, -50%);\n}\n\n.H_slider.H_disabled {\n  cursor: default;\n}\n\n/*###############################################  CONTEXT MENU  #####################################################*/\n.H_context_menu {\n  font-size: 14px;\n  min-width: 158px;\n  max-width: 40%;\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n  position: absolute;\n  left: -100%;\n  top: 0;\n  color: rgba(15, 22, 33, 0.6);\n  background-color: #fff;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n  padding: 16px 16px 4px 16px;\n  -moz-user-select: initial;\n  -khtml-user-select: initial;\n  -webkit-user-select: initial;\n  -o-user-select: initial;\n  -ms-user-select: initial;\n  z-index: 200;\n}\n\n.H_context_menu_closed {\n    display: none;\n}\n\n.H_context_menu_item {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 24px;\n  margin-bottom: 16px;\n  outline: none;\n}\n\n.H_context_menu_item.clickable:hover {\n  color: rgba(15, 22, 33, 0.8);\n  cursor: pointer;\n}\n.H_context_menu_item.disabled:hover,\n.H_context_menu_item.disabled {\n    background: transparent !important;\n    color: rgba(15, 22, 33, 0.2);\n    cursor: default !important;\n\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n}\n.H_context_menu_item_separator {\n    height: 0;\n    border-top: 1px solid rgba(15, 22, 33, 0.1);\n    padding-bottom: 16px;\n    line-height: 0;\n    font-size: 0;\n}\n\n\n/*#################################################  SCALE BAR  ######################################################*/\n.H_scalebar {\n  margin-top: 36px;\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  text-shadow:\n    -1px -1px 0 rgba(255, 255, 255, 0.7),\n    1px -1px 0 rgba(255, 255, 255, 0.7),\n    -1px 1px 0 rgba(255, 255, 255, 0.7),\n    1px 1px 0 rgba(255, 255, 255, 0.7);\n}\n\n\n/*###################################  DISTANCE MEASUREMENT AND TRAFFIC INCIDENTS ####################################*/\n\n.H_tib_content {\n  width: 25em;\n  position: relative;\n  margin: -16px -28px -20px -16px;\n}\n\n[dir=\"rtl\"] .H_tib_content {\n  margin: -16px -16px -20px -28px;\n}\n\n.H_tib .H_tib_desc { padding: 0px 16px 20px 16px }\n.H_tib .H_tib_time {color: rgba(15,22,33,.4);margin-top: 0.8em;}\n.H_tib_right { float:right; }\n\n.H_tib .H_btn > svg.H_icon {\n  fill: rgba(255,255,255, .6);\n}\n\n.H_tib .H_btn:hover > svg.H_icon {\n  fill: white;\n}\n\n.H_dm_label {\n  font: 12px \"Lucida Grande\", Arial, Helvetica, sans-serif;\n  color: black;\n  text-shadow: 1px 1px .5px #FFF, 1px -1px .5px #FFF, -1px 1px .5px #FFF, -1px -1px .5px #FFF;\n  white-space: nowrap;\n  margin-left: 12px;\n  margin-top: -7px;\n  /* This will not work on IE9, but it is accepted! */\n  pointer-events: none;\n}\n\n\n/*###################################################  ICON  #########################################################*/\nsvg.H_icon {\n  display: block;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin:auto;\n  width: 24px;\n  height: 24px;\n  fill: rgba(15, 22, 33, 0.6);\n}\nsvg.H_icon .H_icon_stroke {\n  stroke: rgba(15, 22, 33, 0.6);\n  fill: none;\n}\n.H_btn:hover > svg.H_icon {\n  fill: rgba(15, 22, 33, 0.8);\n}\n.H_btn:hover > svg.H_icon .H_icon_stroke {\n  stroke: rgba(15, 22, 33, 0.8);\n}\n.H_btn.H_active {\n  background-color: #CFD0D3;\n}\n.H_rdo .H_btn.H_active {\n  background: none;\n}\n\n.H_active > svg.H_icon,\n.H_active:hover > svg.H_icon {\n  fill: #0F1621 !important;\n}\n.H_active > svg.H_icon .H_icon_stroke,\n.H_active:hover > svg.H_icon .H_icon_stroke {\n  stroke: #0F1621;\n}\n\n.H_disabled svg.H_icon,\n.H_disabled:hover svg.H_icon {\n  fill: rgba(15, 22, 33, 0.2);\n  cursor: default;\n}\n.H_disabled svg.H_icon .H_icon_stroke,\n.H_disabled:hover svg.H_icon .H_icon_stroke {\n  stroke: rgba(15, 22, 33, 0.2);\n}\n\n/*###############################################  OVERVIEW MAP  #####################################################*/\n.H_overview {\n  transition: width 0.2s,height 0.2s,margin-top 0.2s, padding 0.2s;\n  width: 0em;\n  height: 0em;\n  overflow: hidden;\n  cursor: default;\n  position: absolute;\n  margin: auto;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n}\n\n.H_l_vertical .H_overview_active {\n    margin: auto 5px;\n}\n\n.H_l_horizontal .H_overview_active {\n  margin: 5px auto;\n}\n\n.H_l_center .H_overview {\n  left: -9999px;\n  right: -9999px;\n}\n\n.H_l_middle .H_overview {\n  top: -9999px;\n  bottom: -9999px;\n}\n\n.H_l_right .H_overview {\n  right: 100%;\n}\n\n.H_l_left .H_overview {\n  left: 100%;\n}\n\n.H_l_bottom .H_overview {\n  bottom: 0;\n}\n.H_l_center.H_l_bottom .H_overview {\n  bottom: 100%;\n}\n\n.H_l_top .H_overview {\n  top: 0;\n}\n.H_l_center.H_l_top .H_overview {\n  top: 100%;\n}\n\n.H_overview .H_overview_map {\n  background-color: rgba(256,256,256,0.6);\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n}\n\n\n.H_overview_map .H_ui {\n  display: none;\n}\n\n.H_zoom_lasso {\n  position: absolute;\n  display: none;\n  box-shadow: 0em 0 0.4em 0 rgba(15, 22, 33, 0.6);\n  z-index: 100000;\n  background-color: rgba(15, 22, 33, 0.2);\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(26);
var mergeConfig = __webpack_require__(9);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(2);
axios.CancelToken = __webpack_require__(40);
axios.isCancel = __webpack_require__(8);
axios.VERSION = __webpack_require__(10).version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(42);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(4);
var InterceptorManager = __webpack_require__(27);
var dispatchRequest = __webpack_require__(28);
var mergeConfig = __webpack_require__(9);
var validator = __webpack_require__(39);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(29);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(1);
var Cancel = __webpack_require__(2);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var defaults = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(35);
var combineURLs = __webpack_require__(36);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VERSION = __webpack_require__(10).version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(2);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("heading", { staticClass: "mb-6" }, [_vm._v(_vm._s(_vm.heading))]),
      _vm._v(" "),
      _c(
        "card",
        {
          staticClass: "flex flex-col p-8",
          staticStyle: { "min-height": "auto" }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.error,
                expression: "!error"
              }
            ],
            ref: "map",
            staticClass: "my-3",
            staticStyle: { height: "600px" }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.distance,
                  expression: "distance"
                }
              ],
              staticClass: "mt-2"
            },
            [_c("b", [_vm._v("Distance : " + _vm._s(_vm.distance) + " Km")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.estimated_time,
                  expression: "estimated_time"
                }
              ],
              staticClass: "mt-2"
            },
            [
              _c("b", [
                _vm._v(
                  "Estimated Time : " + _vm._s(_vm.toMMSS(_vm.estimated_time))
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.route_instructions.length > 0,
                  expression: "route_instructions.length > 0"
                }
              ],
              staticClass: "mt-2"
            },
            [
              _c("b", [_vm._v("Instructions :")]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "h-60 overflow-auto " },
                _vm._l(_vm.route_instructions, function(ri, index) {
                  return _c("li", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(index + 1) +
                        "- " +
                        _vm._s(ri) +
                        "\n                "
                    )
                  ])
                }),
                0
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);