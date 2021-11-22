// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _handlebarsBase = __webpack_require__(3);

      var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)


      var _handlebarsSafeString = __webpack_require__(36);

      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

      var _handlebarsException = __webpack_require__(5);

      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

      var _handlebarsUtils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_handlebarsUtils);

      var _handlebarsRuntime = __webpack_require__(37);

      var runtime = _interopRequireWildcard(_handlebarsRuntime);

      var _handlebarsNoConflict = __webpack_require__(43);

      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace


      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;

        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _handlebarsNoConflict2['default'](inst);

      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _helpers = __webpack_require__(9);

      var _decorators = __webpack_require__(29);

      var _logger = __webpack_require__(31);

      var _logger2 = _interopRequireDefault(_logger);

      var _internalProtoAccess = __webpack_require__(32);

      var VERSION = '4.7.7';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};

        _helpers.registerDefaultHelpers(this);

        _decorators.registerDefaultDecorators(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }

            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }

            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }

            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },

        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];
      /***/
    },
    /* 4 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
          possible = /[&<>"'`=]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj
      /* , ...source */
      ) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;
      exports.toString = toString; // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt

      /* eslint-disable func-style */

      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      }; // fallback for older versions of Chrome and Safari

      /* istanbul ignore next */


      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }

      exports.isFunction = isFunction;
      /* eslint-enable func-style */

      /* istanbul ignore next */

      var isArray = Array.isArray || function (value) {
        return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
      };

      exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }

        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          } // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.


          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }

        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$defineProperty = __webpack_require__(6)['default'];

      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            endLineNumber = undefined,
            column = undefined,
            endColumn = undefined;

        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.

        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }
        /* istanbul ignore else */


        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value

            /* istanbul ignore next */

            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, 'endColumn', {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }

      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(7),
        __esModule: true
      };
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);

      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;

      var _helpersBlockHelperMissing = __webpack_require__(10);

      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

      var _helpersEach = __webpack_require__(11);

      var _helpersEach2 = _interopRequireDefault(_helpersEach);

      var _helpersHelperMissing = __webpack_require__(24);

      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

      var _helpersIf = __webpack_require__(25);

      var _helpersIf2 = _interopRequireDefault(_helpersIf);

      var _helpersLog = __webpack_require__(26);

      var _helpersLog2 = _interopRequireDefault(_helpersLog);

      var _helpersLookup = __webpack_require__(27);

      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

      var _helpersWith = __webpack_require__(28);

      var _helpersWith2 = _interopRequireDefault(_helpersWith);

      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);

        _helpersEach2['default'](instance);

        _helpersHelperMissing2['default'](instance);

        _helpersIf2['default'](instance);

        _helpersLog2['default'](instance);

        _helpersLookup2['default'](instance);

        _helpersWith2['default'](instance);
      }

      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];

          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);

              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }

            return fn(context, options);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        var _Object$keys = __webpack_require__(12)['default'];

        var _interopRequireDefault = __webpack_require__(2)['default'];

        exports.__esModule = true;

        var _utils = __webpack_require__(4);

        var _exception = __webpack_require__(5);

        var _exception2 = _interopRequireDefault(_exception);

        exports['default'] = function (instance) {
          instance.registerHelper('each', function (context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }

            var fn = options.fn,
                inverse = options.inverse,
                i = 0,
                ret = '',
                data = undefined,
                contextPath = undefined;

            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }

            if (_utils.isFunction(context)) {
              context = context.call(this);
            }

            if (options.data) {
              data = _utils.createFrame(options.data);
            }

            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;

                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }

              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }

            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();

                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }

                context = newContext;

                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;

                  _Object$keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }

                    priorKey = key;
                    i++;
                  });

                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }

            if (i === 0) {
              ret = inverse(this);
            }

            return ret;
          });
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(13),
        __esModule: true
      };
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(14);

      module.exports = __webpack_require__(20).Object.keys;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__(15);

      __webpack_require__(17)('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(16);

      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/

    },
    /* 16 */

    /***/
    function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
      /***/

    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(18),
          core = __webpack_require__(20),
          fails = __webpack_require__(23);

      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
      /***/

    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(19),
          core = __webpack_require__(20),
          ctx = __webpack_require__(21),
          PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (param) {
              return this instanceof C ? new C(param) : C(param);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      module.exports = $export;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(22);

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function
          /* ...args */
        () {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },
    /* 22 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },
    /* 23 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function ()
        /* [args, ]options */
        {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#if requires exactly one argument');
          }

          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          } // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.


          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#unless requires exactly one argument');
          }

          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 26 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('log', function ()
        /* message, options */
        {
          var args = [undefined],
              options = arguments[arguments.length - 1];

          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }

          var level = 1;

          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }

          args[0] = level;
          instance.log.apply(instance, args);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 27 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field, options) {
          if (!obj) {
            // Note for 5.0: Change to "obj == null" in 5.0
            return obj;
          }

          return options.lookupProperty(obj, field);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#with requires exactly one argument');
          }

          if (_utils.isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!_utils.isEmpty(context)) {
            var data = options.data;

            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }

            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;

      var _decoratorsInline = __webpack_require__(30);

      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }
      /***/

    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;

          if (!props.partials) {
            props.partials = {};

            ret = function (context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }

          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());

            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }

          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);

          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level]; // eslint-disable-next-line no-console

            if (!console[method]) {
              method = 'log';
            }

            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }

            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };
      exports['default'] = logger;
      module.exports = exports['default'];
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];

      var _Object$keys = __webpack_require__(12)['default'];

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;

      var _createNewLookupObject = __webpack_require__(35);

      var _logger = __webpack_require__(31);

      var logger = _interopRequireWildcard(_logger);

      var loggedProperties = _Object$create(null);

      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = _Object$create(null);

        defaultMethodWhiteList['constructor'] = false;
        defaultMethodWhiteList['__defineGetter__'] = false;
        defaultMethodWhiteList['__defineSetter__'] = false;
        defaultMethodWhiteList['__lookupGetter__'] = false;

        var defaultPropertyWhiteList = _Object$create(null); // eslint-disable-next-line no-proto


        defaultPropertyWhiteList['__proto__'] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }

      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === 'function') {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }

      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }

        if (protoAccessControlForType.defaultValue !== undefined) {
          return protoAccessControlForType.defaultValue;
        }

        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }

      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }

      function resetLoggedProperties() {
        _Object$keys(loggedProperties).forEach(function (propertyName) {
          delete loggedProperties[propertyName];
        });
      }
      /***/

    },
    /* 33 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(34),
        __esModule: true
      };
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);

      module.exports = function create(P, D) {
        return $.create(P, D);
      };
      /***/

    },
    /* 35 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];

      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;

      var _utils = __webpack_require__(4);
      /**
       * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
       * The resulting object can be used with "object[property]" to check if a property exists
       * @param {...object} sources a varargs parameter of source objects that will be merged
       * @returns {object}
       */


      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }

        return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
      }
      /***/

    },
    /* 36 */

    /***/
    function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;

      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$seal = __webpack_require__(38)['default'];

      var _Object$keys = __webpack_require__(12)['default'];

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _utils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_utils);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _base = __webpack_require__(3);

      var _helpers = __webpack_require__(9);

      var _internalWrapHelper = __webpack_require__(42);

      var _internalProtoAccess = __webpack_require__(32);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _base.COMPILER_REVISION;

        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }

        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
              compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }

        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
        }

        templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as pseudo-supported APIs.

        env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)

        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);

            if (options.ids) {
              options.ids[0] = true;
            }
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }

          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');

              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }

              result = lines.join('\n');
            }

            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        } // Just add water


        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
              });
            }

            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];

            if (result == null) {
              return result;
            }

            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }

            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }

            return undefined;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;

            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);

              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);

            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }

            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }

            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;

          ret._setup(options);

          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }

          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;

          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }

          function main(context
          /*, options*/
          ) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }

          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }

        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;

            if (templateSpec.usePartial) {
              // Use mergeIfNeeded here to prevent compiling global partials multiple times
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }

            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }

            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;

            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);

            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl; // internal option

            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }

          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };

        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;

          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }

          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }

        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }
      /**
       * This is currently part of the official API, therefore implementation details should not be changed.
       */


      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }

        return partial;
      }

      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;

        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }

        var partialBlock = undefined;

        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure

            var fn = options.fn;

            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.

              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };

            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }

        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }

        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }

        return data;
      }

      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }

        return prog;
      }

      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        _Object$keys(mergedHelpers).forEach(function (helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }

      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function (options) {
          return Utils.extend({
            lookupProperty: lookupProperty
          }, options);
        });
      }
      /***/

    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(39),
        __esModule: true
      };
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(40);

      module.exports = __webpack_require__(20).Object.seal;
      /***/
    },
    /* 40 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __webpack_require__(41);

      __webpack_require__(17)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });
      /***/

    },
    /* 41 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },
    /* 42 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;

      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== 'function') {
          // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
          // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
          return helper;
        }

        var wrapper = function wrapper()
        /* dynamic arguments */
        {
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };

        return wrapper;
      }
      /***/

    },
    /* 43 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        exports.__esModule = true;

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */

          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }

            return Handlebars;
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    }
    /******/
    ])
  );
});

;
},{}],"../src/components/modals/sidebarModal/editProfileModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"edit-profile-modal-overlay modal-overlay\">\n  <div class=\"edit-profile-modal modal-content profile-modal\">\n    <header class=\"profile-modal__header\">\n      <div class=\"top\">\n        <span class=\"close\"></span>\n      </div>\n      <div class=\"bottom\">\n        <span class=\"avatar\">\n          <span class=\"avatar__icon\"></span>\n        </span>\n\n        <button class=\"change-button profile-modal-button\">Set profile photo</button>\n      </div>\n    </header>\n    <main class=\"profile-modal__content\">\n      <form class=\"profile-modal__form modal-form\" action=\"#\" method=\"POST\">\n        <div class=\"modal-form__inputs\">\n          <div class=\"left-block\">\n            <span class=\"left-block__icon left-block__icon_man\"></span>\n          </div>\n          <div class=\"right-block\">\n            <div class=\"input-group\">\n              <input id=\"edit-surname\" type=\"text\" placeholder=\"Enter your surname\" value=\"Mask\">\n              <label for=\"edit-surname\">Surname</label>\n            </div>\n\n            <div class=\"input-group\">\n              <input id=\"edit-name\" type=\"text\" placeholder=\"Enter your name\" value=\"Ilon\">\n              <label for=\"edit-name\">Name</label>\n            </div>\n          </div>\n        </div>\n\n          <div class=\"modal-form__inputs\">\n          <div class=\"left-block\">\n            <span class=\"left-block__icon left-block__icon_dog\"></span>\n          </div>\n          <div class=\"right-block\">\n            <div class=\"input-group\">\n              <input id=\"edit-surname\" type=\"text\" placeholder=\"Enter your surname\" value=\"Iamgodofspace\">\n              <label for=\"edit-surname\">Login</label>\n            </div>\n\n            <div class=\"input-group\">\n              <input id=\"edit-name\" type=\"text\" placeholder=\"Enter your name\" value=\"Ilon\">\n              <label for=\"edit-name\">Chat name</label>\n            </div>\n          </div>\n        </div>\n\n          <div class=\"modal-form__inputs\">\n          <div class=\"left-block\">\n            <span class=\"left-block__icon left-block__icon_phone-book\"></span>\n          </div>\n          <div class=\"right-block\">\n            <div class=\"input-group\">\n              <input id=\"edit-surname\" type=\"text\" placeholder=\"Enter your e-mail\" value=\"ilon@mask\">\n              <label for=\"edit-surname\">E-mail</label>\n            </div>\n\n            <div class=\"input-group\">\n              <input id=\"edit-name\" type=\"text\" placeholder=\"Enter your phone\" value=\"+7(999)899-11-11\">\n              <label for=\"edit-name\">Phone</label>\n            </div>\n          </div>\n        </div>\n        <button class=\"modal-form__button profile-modal-button\">Save changes</button>\n      </form>\n    </main>\n    \n  </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/sidebarModal/editProfileModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _editProfileModal = _interopRequireDefault(require("./editProfileModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('editProfileModal', _editProfileModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./editProfileModal.hbs":"../src/components/modals/sidebarModal/editProfileModal.hbs"}],"../src/components/modals/sidebarModal/editPasswordModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"edit-password-modal-overlay modal-overlay\">\n  <div class=\"edit-password-modal modal-content profile-modal\">\n    <header class=\"profile-modal__header\">\n      <div class=\"top\">\n        <span class=\"close\"></span>\n      </div>\n      <div class=\"bottom\">\n          <span class=\"bottom__text\">Change your Password</span>\n        </span>\n\n      </div>\n    </header>\n    <main class=\"profile-modal__content\">\n      <form class=\"profile-modal__form modal-form\" action=\"#\" method=\"POST\">\n        <div class=\"modal-form__inputs\">\n          <div class=\"left-block\">\n            <span class=\"left-block__icon left-block__icon_key\"></span>\n          </div>\n          <div class=\"right-block\">\n            <div class=\"input-group\">\n              <input id=\"edit-surname\" type=\"password\" placeholder=\"Enter your old password\" value=\"password\">\n              <label for=\"edit-surname\">Old password</label>\n            </div>\n\n            <div class=\"input-group\">\n              <input id=\"edit-name\" type=\"password\" placeholder=\"Enter your new password\" value=\"new_password\">\n              <label for=\"edit-name\">New password</label>\n            </div>\n\n            <div class=\"input-group\">\n              <input id=\"edit-name\" type=\"password\" placeholder=\"Enter your new password\" value=\"new_password\">\n              <label for=\"edit-name\">Repeat new password</label>\n            </div>\n          </div>\n        </div>\n        <button class=\"modal-form__button profile-modal-button\">Save changes</button>\n      </form>\n    </main>\n    \n  </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/sidebarModal/editPasswordModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _editPasswordModal = _interopRequireDefault(require("./editPasswordModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('editPasswordModal', _editPasswordModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./editPasswordModal.hbs":"../src/components/modals/sidebarModal/editPasswordModal.hbs"}],"../src/components/modals/sidebarModal/sidebarModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<div class=\"sidebar-modal-overlay\">\n  <div class=\"sidebar-modal\">\n    <header class=\"sidebar-modal__header\">\n      <div class=\"sidebar-modal__header-block\">\n        <span class=\"sidebar-modal__avatar\">\n        </span>\n        <div class=\"sidebar-modal__user-shortinfo user-shortinfo\">\n          <span class=\"user-shortinfo__item user-name\">Ilon Mask</span>\n          <span class=\"user-shortinfo__item user-phone\">+7(999)-889-11-11</span>\n          <span class=\"user-shortinfo__item user-nickname\">@Iamgodofspace</span>\n        </div>\n      </div>\n    </header>\n    <main class=\"sidebar-modal__content\">\n      <div class=\"info-table\">\n        <div class=\"info-table__row\">\n          <span class=\"title\">Surname</span>\n          <span class=\"description\">Mask</span>\n        </div>\n        <div class=\"info-table__row\">\n          <span class=\"title\">Name</span>\n          <span class=\"description\">Ilon</span>\n        </div>\n        <div class=\"info-table__row\">\n          <span class=\"title\">Login</span>\n          <span class=\"description\">Iamgodofspace</span>\n        </div>\n        <div class=\"info-table__row\">\n          <span class=\"title\">Chat name</span>\n          <span class=\"description\">Ilon</span>\n        </div>\n        <div class=\"info-table__row\">\n          <span class=\"title\">E-mail</span>\n          <span class=\"description\">ilon@mask</span>\n        </div>\n        <div class=\"info-table__row\">\n          <span class=\"title\">Phone</span>\n          <span class=\"description\">+7(999)-899-11-11</span>\n        </div> \n      </div>\n  \n      <div class=\"action-buttons\">\n         <div class=\"action-buttons__row\">\n          <button id=\"edit-profile\" class=\"edit-btn edit-profile-btn\">Edit profile</button>\n        </div>\n         <div class=\"action-buttons__row\">\n          <button id=\"edit-password\" class=\"edit-btn edit-password-btn\">Edit password</button>\n        </div>\n        <div class=\"action-buttons__row\">\n          <button class=\"edit-btn logout-btn\">Logout</button>\n        </div>\n      </div>\n    </main>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "editProfileModal"), depth0, {
      "name": "editProfileModal",
      "data": data,
      "indent": "    ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "editPasswordModal"), depth0, {
      "name": "editPasswordModal",
      "data": data,
      "indent": "     ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "  </div>\n</div>";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/sidebarModal/sidebarModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _sidebarModal = _interopRequireDefault(require("./sidebarModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('sidebarModal', _sidebarModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./sidebarModal.hbs":"../src/components/modals/sidebarModal/sidebarModal.hbs"}],"../src/components/modals/headerModal/headerModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"header-modal-overlay modal-overlay\">\n  <div class=\"header-modal modal-content\">\n    <div id=\"delete-chat\" class=\"header-modal__item modal-content__item\">\n      <span class=\"icon delete\"></span>\n      <span class=\"text\">Delete chat</span>\n    </div>\n    <div class=\"header-modal__item modal-content__item\">\n      <span class=\"icon edit\"></span>\n      <span class=\"text\">Edit chat</span>\n    </div>\n  </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/headerModal/headerModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _headerModal = _interopRequireDefault(require("./headerModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('headerModal', _headerModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./headerModal.hbs":"../src/components/modals/headerModal/headerModal.hbs"}],"../src/components/modals/footerModal/footerModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"footer-modal-overlay modal-overlay\">\n  <div class=\"footer-modal modal-content\">\n    <div class=\"footer-modal__item modal-content__item\">\n      <span class=\"icon photo\"></span>\n      <span class=\"text\">Photo / Video</span>\n    </div>\n    <div class=\"footer-modal__item modal-content__item\">\n      <span class=\"icon file\"></span>\n      <span class=\"text\">File</span>\n    </div>\n     <div class=\"footer-modal__item modal-content__item\">\n      <span class=\"icon location\"></span>\n      <span class=\"text\">Location</span>\n    </div>\n  </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/footerModal/footerModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _footerModal = _interopRequireDefault(require("./footerModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('footerModal', _footerModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./footerModal.hbs":"../src/components/modals/footerModal/footerModal.hbs"}],"../src/components/modals/headerModal/confirmDelModal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"confirm-del-modal-overlay modal-overlay\">\n  <div class=\"confirm-del-modal modal-content\">\n    <div class=\"confirm-del-modal__container\">\n      <span class=\"emoji\">&#128562;</span>\n      <p class=\"text\">Are you sure <br> want to delete the user?</p>\n      <div class=\"buttons-block\">\n        <button class=\"buttons-block__btn buttons-block__btn_acsept\">Yes, shure</button>\n        <button class=\"buttons-block__btn buttons-block__btn_cancel\">Oh, I accidentally pressed</button>\n      </div>\n    </div>\n    \n  </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/components/modals/headerModal/confirmDelModal.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _confirmDelModal = _interopRequireDefault(require("./confirmDelModal.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('confirmDelModal', _confirmDelModal.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./confirmDelModal.hbs":"../src/components/modals/headerModal/confirmDelModal.hbs"}],"../src/hello/hello.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<h1 class=\"title\">" + container.escapeExpression((lookupProperty(helpers, "helloHelper") || depth0 && lookupProperty(depth0, "helloHelper") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "firstname") : depth0, {
      "name": "helloHelper",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 44
        }
      }
    })) + "</h1>\n\n<p>Роутинг по страницам пока реализован переходом на страницу через нажатие соответствующей кнопки</p>\n\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/hello/hello.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _hello = _interopRequireDefault(require("./hello.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('hello', _hello.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./hello.hbs":"../src/hello/hello.hbs"}],"../src/modules/Chat/header/header.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<header id=\"header\" class=\"chat-header\">\n  <div class=\"chat-header__title-block\">\n\n    " + container.escapeExpression((lookupProperty(helpers, "currentChatInfo") || depth0 && lookupProperty(depth0, "currentChatInfo") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "title") : depth0, depth0 != null ? lookupProperty(depth0, "status") : depth0, {
      "name": "currentChatInfo",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 4
        },
        "end": {
          "line": 4,
          "column": 37
        }
      }
    })) + "\n  </div>\n  <button class=\"chat-header__settings\"></button>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "headerModal"), depth0, {
      "name": "headerModal",
      "data": data,
      "indent": "  ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "confirmDelModal"), depth0, {
      "name": "confirmDelModal",
      "data": data,
      "indent": "   ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "</header>";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/Chat/header/header.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _header = _interopRequireDefault(require("./header.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('header', _header.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./header.hbs":"../src/modules/Chat/header/header.hbs"}],"../src/modules/Chat/footer/footer.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<footer id=\"footer\" class=\"footer\">\n  <div class=\"footer__input-group\">\n    <span class=\"clip-icon\"></span>\n    <input class=\"send-input\" type=\"text\" placeholder=\"Write a message\">\n    <span class=\"send__icon\"></span>\n  </div>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "footerModal"), depth0, {
      "name": "footerModal",
      "data": data,
      "indent": "    ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "</footer>";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/Chat/footer/footer.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _footer = _interopRequireDefault(require("./footer.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('footer', _footer.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./footer.hbs":"../src/modules/Chat/footer/footer.hbs"}],"../src/modules/Chat/sidebar/sidebar.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "    <div class=\"sidebar-content__item\">\n      <span class=\"sidebar-content__avatar\">\n      </span>\n      <div class=\"sidebar-content__preview\">\n        <span class=\"chat-name\">" + alias4((helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "chatName",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 15,
          "column": 32
        },
        "end": {
          "line": 15,
          "column": 44
        }
      }
    }) : helper)) + "</span>\n        <div class=\"text-preview\">\n          <span class=\"username\">" + alias4((helper = (helper = lookupProperty(helpers, "userName") || (depth0 != null ? lookupProperty(depth0, "userName") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "userName",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 17,
          "column": 33
        },
        "end": {
          "line": 17,
          "column": 45
        }
      }
    }) : helper)) + ":</span>\n          <p class=\"text\">" + alias4((helper = (helper = lookupProperty(helpers, "userText") || (depth0 != null ? lookupProperty(depth0, "userText") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "userText",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 18,
          "column": 26
        },
        "end": {
          "line": 18,
          "column": 38
        }
      }
    }) : helper)) + "</p>  \n        </div>\n      </div>\n    </div>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<aside id=\"sidebar\" class=\"sidebar\">\n  <header class=\"sidebar__header\">\n    <div class=\"sidebar__input-group\">\n      <button class=\"profile-open\"></button>\n      <input class=\"search-input\" type=\"text\" placeholder=\"Search\">\n    </div>\n  </header>\n\n  <main class=\"sidebar__content sidebar-content\">\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "chatInfo") : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 10,
          "column": 4
        },
        "end": {
          "line": 22,
          "column": 13
        }
      }
    })) != null ? stack1 : "") + "  </main>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "sidebarModal"), depth0, {
      "name": "sidebarModal",
      "data": data,
      "indent": "  ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "</aside>";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/Chat/sidebar/sidebar.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

var _sidebar = _interopRequireDefault(require("./sidebar.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerPartial('sidebar', _sidebar.default);
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js","./sidebar.hbs":"../src/modules/Chat/sidebar/sidebar.hbs"}],"../src/helpers/hello.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerHelper('helloHelper', function (firstname) {
  return "Hello, ".concat(firstname, "!");
});
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/helpers/index.js":[function(require,module,exports) {
"use strict";

require("./hello");
},{"./hello":"../src/helpers/hello.js"}],"../src/helpers/error/error.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerHelper('errorCode', function (code) {
  return "".concat(code);
});
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/helpers/error/index.js":[function(require,module,exports) {
"use strict";

require("./error");
},{"./error":"../src/helpers/error/error.js"}],"../src/helpers/chat/header/header.js":[function(require,module,exports) {
"use strict";

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerHelper('currentChatInfo', function (title, status) {
  var chatInfo = "<span class=\"chat-title\">".concat(title, "</span> <span class=\"chat-status\">").concat(status, "</span>");
  return new _handlebars.default.SafeString(chatInfo);
});
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/lib/sidebar/modalUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleModal = void 0;

var toggleModal = function toggleModal(trigger, overlay, modalClass) {
  var modal = document.querySelector(modalClass);
  console.log('modal: ', modal);
  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
      overlay.classList.remove('open');
    }
  });
  trigger.addEventListener('click', function () {
    overlay.classList.add('open');
  });
  overlay.addEventListener('click', function (e) {
    var target = e.target;
    target = target.closest(modalClass);

    if (!target) {
      overlay.classList.remove('open');
    }
  });
};

exports.toggleModal = toggleModal;
},{}],"../src/modules/SignIn/signIn.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div id=\"sign-in\" class=\"card-page\">\n  <div class=\"card\">\n    <div class=\"card__content\">\n      <div class=\"card__logo\"></div>\n      <div class=\"card__title\">Sign In</div>\n      <form class=\"card__form form\" action=\"#\" >\n        <div class=\"form__input-group input-group error\">\n          <label class=\"input-group__label\" for=\"login\">Login</label>\n          <input class=\"input-group__input\" type=\"text\" id=\"login\" placeholder=\"Enter your login or e-mail\" required>\n          <span class=\"error-message\">Login is incorected</span>\n        </div>\n      \n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"password\">Password</label>\n          <input class=\"input-group__input\" type=\"password\" id=\"password\" placeholder=\"Enter your password\" required>\n          <span class=\"error-message\">Password is incorected</span>\n        </div>\n      \n        <button class=\"form__submit-btn ripple\" type=\"submit\">Sign In</button>\n      </form>\n      \n      <button id=\"create-account-btn\" class=\"card__link\">Create account</button>\n      <button id=\"forgot-password-btn\"class=\"card__link\">Forgot your password</button>\n      </div>\n    </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/SignUp/signUp.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div id=\"sign-up\" class=\"card-page\">\n  <div class=\"card\">\n    <div class=\"card__content\">\n      <div class=\"card__logo\"></div>\n      <div class=\"card__title\">Sign Up</div>\n      <form class=\"card__form form\" action=\"#\">\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"email\">Email</label>\n          <input class=\"input-group__input\" type=\"email\" id=\"email\" placeholder=\"Enter your e-mail\" required>\n          <span class=\"error-message\">Email is incorected</span>\n        </div>\n      \n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"name\">Name</label>\n          <input class=\"input-group__input\" type=\"text\" id=\"name\" placeholder=\"Enter your name\" required>\n          <span class=\"error-message\">Name is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"secondName\">Second name</label>\n          <input class=\"input-group__input\" type=\"text\" id=\"secondName\" placeholder=\"Enter your second name\" required>\n          <span class=\"error-message\">Second name is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"secondName\">Phone</label>\n          <input class=\"input-group__input\" type=\"tel\" id=\"secondName\" placeholder=\"Enter your phone\" required>\n          <span class=\"error-message\">Phone is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"phone\">Phone</label>\n          <input class=\"input-group__input\" type=\"tel\" id=\"phone\" placeholder=\"Enter your phone\" required>\n          <span class=\"error-message\">Login is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"login\">Login</label>\n          <input class=\"input-group__input\" type=\"text\" id=\"login\" placeholder=\"Enter your login\" required>\n          <span class=\"error-message\">Login is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group success\">\n          <label class=\"input-group__label\" for=\"password\">Password</label>\n          <input class=\"input-group__input\" type=\"password\" id=\"password\" placeholder=\"Enter your password\" required>\n          <span class=\"error-message\">Password is incorected</span>\n        </div>\n\n        <div class=\"form__input-group input-group error\">\n          <label class=\"input-group__label\" for=\"password\">Confirm password</label>\n          <input class=\"input-group__input\" type=\"password\" id=\"password\" placeholder=\"Confirm your password\" required>\n          <span class=\"error-message\">Password is incorected or mismatch</span>\n        </div>\n      \n      \n        <button class=\"form__submit-btn ripple\" type=\"submit\">Create you account</button>\n      </form>\n      \n      <button class=\"card__link\">Sign In</button>\n      </div>\n    </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/ErrorPages/error.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<div class=\"error-page error-404\">\n  <h1>Error " + container.escapeExpression((lookupProperty(helpers, "errorCode") || depth0 && lookupProperty(depth0, "errorCode") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "code") : depth0, {
      "name": "errorCode",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 2,
          "column": 12
        },
        "end": {
          "line": 2,
          "column": 32
        }
      }
    })) + "</h1>\n  <p>Something went wrong :(</p>\n  <span>Go to Home</span>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/modules/Chat/Chat.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<article id=\"chat\">\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "sidebar"), depth0, {
      "name": "sidebar",
      "data": data,
      "indent": "  ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "  <section id=\"main\">\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "header"), depth0, {
      "name": "header",
      "data": data,
      "indent": "    ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "    <main id=\"main-content\"><h1>Main</h1></main>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "footer"), depth0, {
      "name": "footer",
      "data": data,
      "indent": "    ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "  </section>\n</article>";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/index.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<div id=\"root\">\n    <div class=\"welcome-content\">\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "hello"), depth0, {
      "name": "hello",
      "data": data,
      "indent": "      ",
      "helpers": helpers,
      "partials": partials,
      "decorators": container.decorators
    })) != null ? stack1 : "") + "    </div>\n</div>\n\n<div class=\"buttons-box\">\n  <button id=\"login\">Login</button>\n  <button id=\"create-btn\">Create Account</button>\n  <button id=\"go-to-error404\">Error-404</button>\n  <button id=\"go-to-error5xx\">Error-500</button>\n  <button id=\"go-to-chat\">Go to Chat</button>\n</div class=\"buttons-box\">\n";
  },
  "usePartial": true,
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

require("./components/modals/sidebarModal/editProfileModal");

require("./components/modals/sidebarModal/editPasswordModal");

require("./components/modals/sidebarModal/sidebarModal");

require("./components/modals/headerModal/headerModal");

require("./components/modals/footerModal/footerModal");

require("./components/modals/headerModal/confirmDelModal");

require("./hello/hello");

require("./modules/Chat/header/header");

require("./modules/Chat/footer/footer");

require("./modules/Chat/sidebar/sidebar");

require("./helpers");

require("./helpers/error/");

require("./helpers/chat/header/header");

var _modalUtils = require("./lib/sidebar/modalUtils");

var _signIn = _interopRequireDefault(require("./modules/SignIn/signIn.hbs"));

var _signUp = _interopRequireDefault(require("./modules/SignUp/signUp.hbs"));

var _error2 = _interopRequireDefault(require("./modules/ErrorPages/error.hbs"));

var _Chat = _interopRequireDefault(require("./modules/Chat/Chat.hbs"));

var _index = _interopRequireDefault(require("./index.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = (0, _index.default)({
    firstname: 'Reviewer'
  });
  var goToLoginBtn = document.getElementById('login');
  var goToSignUpBtn = document.getElementById('create-btn');
  var goToError404 = document.getElementById('go-to-error404');
  var goToError5xx = document.getElementById('go-to-error5xx');
  var goToChat = document.getElementById('go-to-chat');
  var chatInfo = [{
    chatName: 'Yandex Practicum',
    userName: 'Аня Краева',
    userText: 'А почуму бы и нет'
  }, {
    chatName: 'Инвестиции',
    userName: 'Набибулина',
    userText: 'Скупайте крипту'
  }, {
    chatName: 'Кулинария',
    userName: 'Василий Емильянов',
    userText: 'Как приготовить дошик'
  }];
  goToLoginBtn.addEventListener('click', function () {
    document.body.innerHTML = (0, _signIn.default)();
  });
  goToSignUpBtn.addEventListener('click', function () {
    document.body.innerHTML = (0, _signUp.default)();
  });
  goToError404.addEventListener('click', function () {
    document.body.innerHTML = (0, _error2.default)({
      code: '404'
    });
  });
  goToError5xx.addEventListener('click', function () {
    document.body.innerHTML = (0, _error2.default)({
      code: '500'
    });
  });
  goToChat.addEventListener('click', function () {
    document.body.innerHTML = (0, _Chat.default)({
      title: 'Yandex Practicum',
      status: 'online',
      chatInfo: chatInfo
    });
    var openModalBtn = document.querySelector('.profile-open');
    var modal = document.querySelector('.sidebar-modal-overlay');
    var headerSettingsBtn = document.querySelector('.chat-header__settings');
    var headerModal = document.querySelector('.header-modal-overlay');
    var clipBtn = document.querySelector('.clip-icon');
    var footerModal = document.querySelector('.footer-modal-overlay');
    var delChatBtn = document.getElementById('delete-chat');
    var confirmDelModal = document.querySelector('.confirm-del-modal-overlay');
    var editProfileBtn = document.getElementById('edit-profile');
    var editProfileModal = document.querySelector('.edit-profile-modal-overlay');
    var editPasswordBtn = document.getElementById('edit-password');
    var editPasswordModal = document.querySelector('.edit-password-modal-overlay');
    (0, _modalUtils.toggleModal)(openModalBtn, modal, '.sidebar-modal');
    (0, _modalUtils.toggleModal)(headerSettingsBtn, headerModal, '.header-modal');
    (0, _modalUtils.toggleModal)(clipBtn, footerModal, '.footer-modal');
    (0, _modalUtils.toggleModal)(delChatBtn, confirmDelModal, '.confirm-del-modal');
    (0, _modalUtils.toggleModal)(editProfileBtn, editProfileModal, '.edit-profile-modal');
    (0, _modalUtils.toggleModal)(editPasswordBtn, editPasswordModal, '.edit-password-modal');
  });
});
},{"./components/modals/sidebarModal/editProfileModal":"../src/components/modals/sidebarModal/editProfileModal.js","./components/modals/sidebarModal/editPasswordModal":"../src/components/modals/sidebarModal/editPasswordModal.js","./components/modals/sidebarModal/sidebarModal":"../src/components/modals/sidebarModal/sidebarModal.js","./components/modals/headerModal/headerModal":"../src/components/modals/headerModal/headerModal.js","./components/modals/footerModal/footerModal":"../src/components/modals/footerModal/footerModal.js","./components/modals/headerModal/confirmDelModal":"../src/components/modals/headerModal/confirmDelModal.js","./hello/hello":"../src/hello/hello.js","./modules/Chat/header/header":"../src/modules/Chat/header/header.js","./modules/Chat/footer/footer":"../src/modules/Chat/footer/footer.js","./modules/Chat/sidebar/sidebar":"../src/modules/Chat/sidebar/sidebar.js","./helpers":"../src/helpers/index.js","./helpers/error/":"../src/helpers/error/index.js","./helpers/chat/header/header":"../src/helpers/chat/header/header.js","./lib/sidebar/modalUtils":"../src/lib/sidebar/modalUtils.js","./modules/SignIn/signIn.hbs":"../src/modules/SignIn/signIn.hbs","./modules/SignUp/signUp.hbs":"../src/modules/SignUp/signUp.hbs","./modules/ErrorPages/error.hbs":"../src/modules/ErrorPages/error.hbs","./modules/Chat/Chat.hbs":"../src/modules/Chat/Chat.hbs","./index.hbs":"../src/index.hbs"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61046" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)