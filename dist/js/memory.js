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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/alert.js":
/*!*********************!*\
  !*** ./js/alert.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datas.js */ "./js/datas.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Alert = /*#__PURE__*/function () {
  /**
   * Init alert
   * @param {Object} game Game instance
   * @param {Object} database Database settings
   */
  function Alert(game, database) {
    var _this = this;

    _classCallCheck(this, Alert);

    // DOM elements
    this.overlayElmt = document.getElementById('overlay');
    this.alertElmt = document.getElementById('alert');
    this.bodyElmt = document.getElementById('alert-body');
    this.footerElmt = document.getElementById('alert-footer'); // Game instance

    this.game = game; // Datas instance

    this.datas = new _datas_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.game.backupMethod, database); // If game ranking is enabled

    var setDb = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var createDatabase;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.datas.createDatabase();

              case 2:
                createDatabase = _context.sent;

                if (createDatabase) {
                  // Show ranking
                  _this.showRanking();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function setDb() {
        return _ref.apply(this, arguments);
      };
    }();

    setDb(); // Define buttons

    this.buttons = [{
      action: 'Play',
      label: 'Jouer'
    }, {
      action: 'Replay',
      label: 'Rejouer'
    }, {
      action: 'Save',
      label: 'Enregistrer mon score'
    }, {
      action: 'Cancel',
      label: 'Terminé'
    }]; // Append buttons to DOM

    for (var i in this.buttons) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = this.buttons[i].label;
      button.classList.add('hide', 'alert__button');
      this.footerElmt.appendChild(button);
      this["btn".concat(this.buttons[i].action)] = button;
    } // Play when click on play button


    this.btnPlay.addEventListener('click', function () {
      _this.hide();

      _this.game.launch();
    }); // Replay when click on replay button

    this.btnReplay.addEventListener('click', function () {
      _this.hide();

      _this.game.replay();
    }); // Cancel when click on cancel button

    this.btnCancel.addEventListener('click', function () {
      _this.hide();
    }); // Save score when click on save button

    this.btnSave.addEventListener('click', function () {
      var playerName = _this.bodyElmt.querySelector('input').value.trim(),
          datas = {
        player: playerName,
        score: _this.game.score
      };

      _this.hide();

      var setScore = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var success, content;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.datas.setScore(datas);

                case 2:
                  success = _context2.sent;
                  content = '<p>Votre score a bien été enregistré.</p>';

                  if (success === false) {
                    content = '<p>Une erreur est survenue. Votre score n\'a pas été enregistré.</p>';
                  }

                  _this.btnCancel.classList.remove('hide');

                  _this.btnReplay.classList.remove('hide');

                  _this.show(content);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function setScore() {
          return _ref2.apply(this, arguments);
        };
      }();

      setScore();
    });
  }
  /**
   * Hide alert
   */


  _createClass(Alert, [{
    key: "hide",
    value: function hide() {
      this.overlayElmt.classList.remove('show');
      this.alertElmt.classList.remove('alert--scores');
      this.bodyElmt.innerHTML = '';

      for (var i in this.buttons) {
        this["btn".concat(this.buttons[i].action)].classList.add('hide');
      }
    }
    /**
     * Append content and show alert
     * @param {string} content Alert body content 
     */

  }, {
    key: "show",
    value: function show(content) {
      this.bodyElmt.innerHTML = content;
      this.overlayElmt.classList.add('show');
    }
    /**
     * On win
     * @param {string} time Player formated score
     */

  }, {
    key: "win",
    value: function win(time) {
      var _this2 = this;

      var content = "<p>F\xE9licitations, vous avez gagn\xE9 !<br>Votre temps est de <strong>".concat(time, "</strong>.</p>"); // Get rank

      var getRank = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var rank;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this2.datas.getRank(_this2.game.score);

                case 2:
                  rank = _context3.sent;

                  if (rank <= _this2.datas.rankingLimit) {
                    content += "<p>Vous occupez la <strong>".concat(rank + (rank === 1 ? 'ère' : 'ème'), "</strong> place du classement&nbsp;!</p>\n        <p><input type=\"text\" name=\"pseudo\" placeholder=\"Votre pseudo\" maxlength=\"15\" class=\"alert__input\"></p>");

                    _this2.btnSave.classList.remove('hide');
                  } else {
                    _this2.btnReplay.classList.remove('hide');
                  } // Show alert


                  _this2.show(content);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function getRank() {
          return _ref3.apply(this, arguments);
        };
      }();

      getRank();
    }
    /**
     * On loose
     */

  }, {
    key: "loose",
    value: function loose() {
      var content = '<p>Désolé, le temps imparti est écoulé !</p>';
      this.btnCancel.classList.remove('hide');
      this.btnReplay.classList.remove('hide');
      this.show(content);
    }
    /**
     * Display highest's scores in a table
     */

  }, {
    key: "showRanking",
    value: function showRanking() {
      var _this3 = this;

      var getRanking = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
          var ranking, content;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this3.datas.getRanking();

                case 2:
                  ranking = _context4.sent;

                  if (Array.isArray(ranking)) {
                    content = '<h2 class="alert__title">Meilleurs scores</h2>';

                    if (ranking.length) {
                      content += "<table class=\"alert__table\">\n            <tbody>";
                      ranking.forEach(function (party, i) {
                        var position = String(i + 1).padStart(2, 0);
                        content += "\n                <tr>\n                  <td class=\"rank\">".concat(position, "</td>\n                  <td class=\"player\">\n                    <strong>").concat(party.player === null ? '-' : party.player, "</strong>\n                    <span class=\"hide-md\"><br>").concat(party.date.split(' ')[0], " <small>").concat(party.date.split(' ')[1], "</small></span>\n                  </td>\n                  <td class=\"date show-md\">").concat(party.date.split(' ')[0], " <small>").concat(party.date.split(' ')[1], "</small></td>\n                  <td class=\"time\"><strong>").concat(_this3.game.counter.secondsToMinutes(party.score), "</strong></td>\n                </tr>");
                      });
                      content += "</tbody>\n          </table>";
                    } else {
                      content += '<p>Aucun score sauvegardé. Jouez maintenant pour enregistrer le vôtre !</p>';
                    } // Show alert


                    _this3.btnPlay.classList.remove('hide');

                    _this3.alertElmt.classList.add('alert--scores');

                    _this3.show(content);
                  }

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function getRanking() {
          return _ref4.apply(this, arguments);
        };
      }();

      getRanking();
    }
  }]);

  return Alert;
}();



/***/ }),

/***/ "./js/card.js":
/*!********************!*\
  !*** ./js/card.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card =
/**
 * Define card settings
 * @param {string} value Card value 
 * @param {string} bgPosition Card background Position 
 */
function Card(value, bgPosition) {
  _classCallCheck(this, Card);

  this.bgPosition = bgPosition; // Card background-position;

  this.value = value; // Card value

  this.isActive = true; // Card state

  this.isClickable = false; // Clickable card state

  this.isFlipped = false; // Card flipped state
};



/***/ }),

/***/ "./js/counter.js":
/*!***********************!*\
  !*** ./js/counter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter = /*#__PURE__*/function () {
  /**
   * Init counter
   * @param {Number} duration Time duration in seconds
   */
  function Counter(duration) {
    _classCallCheck(this, Counter);

    // DOM elements
    this.countUpElmt = document.getElementById('count-up');
    this.durationElmt = document.getElementById('duration'); // Elapsed time

    this.elapsedTime = 0; // Display max duration

    this.durationElmt.innerHTML = this.secondsToMinutes(duration);
  }
  /**
   * Convert seconds to minutes
   * @param {number} seconds Time in seconds
   * @returns {string} Time in seconds e.g. 10:00
   */


  _createClass(Counter, [{
    key: "secondsToMinutes",
    value: function secondsToMinutes(seconds) {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    }
    /**
     * Start counter
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var self = this;
      var startDate = new Date();
      var endDate = new Date(); // each 1 second

      this.interval = setInterval(function () {
        endDate.setSeconds(endDate.getSeconds() + 1);
        var diffTime = Math.abs(endDate - startDate); // Display count up

        _this.countUpElmt.innerHTML = new Date(diffTime).toISOString().substr(14, 5);
        self.elapsedTime++;
      }, 1000);
    }
    /**
     * Stop counter
     */

  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
    /**
     * Reset counter
     */

  }, {
    key: "reset",
    value: function reset() {
      this.elapsedTime = 0;
      this.countUpElmt.innerHTML = '00:00';
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ "./js/datas.js":
/*!*********************!*\
  !*** ./js/datas.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datas = /*#__PURE__*/function () {
  /**
   * Init datas object
   * @param {string} backupMethod Database | localStorage
   * @param {object} settings Ranking settings
   */
  function Datas(backupMethod, settings) {
    _classCallCheck(this, Datas);

    // Datas file
    this.endPoint = 'datas.php'; // Backup Method

    this.backupMethod = backupMethod; // Set datas settings

    for (var setting in settings) {
      this[setting] = settings[setting];
    }
  }
  /**
   * Create scores database
   * @param {number} elapsedTime
   */


  _createClass(Datas, [{
    key: "createDatabase",
    value: function createDatabase() {
      // Create database
      if (this.backupMethod === 'database') {
        return fetch("".concat(this.endPoint, "?setDb"), {
          method: 'POST',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (responseData) {
          if (responseData.success === false) {
            throw new Error('Impossible de créer la base de données');
          }

          return responseData.success;
        })["catch"](function (error) {
          alert(error);
        }); // Create localStorage array
      } else {
        if (localStorage.getItem('memoryGame') === null) {
          localStorage.setItem('memoryGame', JSON.stringify([]));
        }

        return true;
      }
    }
    /**
     * Get player rank
     * @param {number} elapsedTime
     */

  }, {
    key: "getRank",
    value: function getRank(elapsedTime) {
      if (this.backupMethod === 'database') {
        return fetch("".concat(this.endPoint, "?getRank"), {
          method: 'POST',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            score: elapsedTime
          })
        }).then(function (response) {
          return response.json();
        }).then(function (responseData) {
          return Number(responseData.rank);
        });
      } else {
        var ranking = JSON.parse(localStorage.getItem('memoryGame'));
        var rank = 0;
        ranking.push({
          identifier: true,
          score: elapsedTime
        });
        ranking.sort(function (a, b) {
          return a.score > b.score ? 1 : b.score > a.score ? -1 : 0;
        });
        ranking.every(function (party, index) {
          if (Object.prototype.hasOwnProperty.call(party, 'identifier')) {
            rank = index + 1;
            return false;
          }

          return true;
        });
        return rank;
      }
    }
    /**
     * Get highest scores
     */

  }, {
    key: "getRanking",
    value: function getRanking() {
      if (this.backupMethod === 'database') {
        return fetch("".concat(this.endPoint, "?getRanking"), {
          method: 'POST',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            limit: this.rankingLimit
          })
        }).then(function (response) {
          return response.json();
        }).then(function (responseData) {
          return responseData.ranking;
        });
      } else {
        var ranking = JSON.parse(localStorage.getItem('memoryGame'));
        ranking.sort(function (a, b) {
          return a.score > b.score ? 1 : b.score > a.score ? -1 : 0;
        });
        return ranking;
      }
    }
    /**
     * Set player score
     * @param {object} datas Datas game to store
     */

  }, {
    key: "setScore",
    value: function setScore(datas) {
      if (this.backupMethod === 'database') {
        return fetch('datas.php?setScore', {
          method: 'POST',
          body: JSON.stringify(datas)
        }).then(function (response) {
          return response.json();
        }).then(function (responseData) {
          return responseData.success;
        });
      } else {
        var ranking = JSON.parse(localStorage.getItem('memoryGame')),
            currentdate = new Date(),
            dateEn = currentdate.toISOString().substr(0, 10);
        datas.date = "".concat(dateEn.split('-')[2], "-").concat(dateEn.split('-')[1], "-").concat(dateEn.split('-')[0], " ").concat(currentdate.toISOString().substr(11, 8));
        datas.player = datas.player.trim() === '' ? '-' : datas.player.trim();
        ranking.push(datas);
        localStorage.setItem('memoryGame', JSON.stringify(ranking));
      }
    }
  }]);

  return Datas;
}();



/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory.js */ "./js/memory.js");
// Import Memory module
 // Lauch game

new _memory_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./js/memory.js":
/*!**********************!*\
  !*** ./js/memory.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Memory; });
/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.js */ "./js/alert.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ "./js/card.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ "./js/counter.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress.js */ "./js/progress.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Memory = /*#__PURE__*/function () {
  /**
   * Game instance
   */
  function Memory() {
    var _this = this;

    _classCallCheck(this, Memory);

    // Get settings
    fetch('settings.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      // Check settings integrity
      if (!_this.checkSettings(data)) {
        return false;
      } // DOM elements


      _this.boardElmt = document.getElementById('cards');
      _this.countDownElmt = document.getElementById('countdown');
      _this.countDownValueElmt = document.getElementById('countdown-value'); // Cards game

      _this.cards = []; // Nb of visible cards

      _this.nbVisibleCards = 0; // Current selected cards

      _this.selectedCards = []; // Game status

      _this.isWin = false; // Player score

      _this.score = 0; // Progress bar instance

      _this.progress = new _progress_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // Counter instance

      _this.counter = new _counter_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this.duration); // Alert instance

      _this.alert = new _alert_js__WEBPACK_IMPORTED_MODULE_0__["default"](_this, data.database); // Init game

      _this.init();
    });
  }
  /**
   * Init game : create cards game
   */


  _createClass(Memory, [{
    key: "init",
    value: function init() {
      // Set cards values
      var n = 1;

      while (n < this.nbOccurences) {
        this.cardsValues = this.cardsValues.concat(this.cardsValues);
        n++;
      } // Add cards to cards game


      for (var i = 0; i < this.cardsValues.length; i++) {
        var value = this.cardsValues[i],
            bgPosition = "0px ".concat(this.bgCardIncrement * -1 * i, "px"),
            // Card instance
        card = new _card_js__WEBPACK_IMPORTED_MODULE_1__["default"](value, bgPosition); // Add card to cards game

        this.cards.push(card);
      } // Display cards


      this.displayCards();
    }
    /**
     * Append cards into DOM
     */

  }, {
    key: "displayCards",
    value: function displayCards() {
      var _this2 = this;

      // Mix card game
      this.cards.sort(function () {
        return Math.random() - 0.5;
      }); // Create li elements contains card's back and front

      var _loop = function _loop(i) {
        var card = _this2.cards[i],
            liElmt = document.createElement('li'),
            frontElmt = document.createElement('div'),
            backElmt = document.createElement('div'),
            self = _this2; // Card properties

        card.isFlipped = false;
        card.isClickable = true;
        card.isActive = true; // Card css properties

        liElmt.className = '';
        liElmt.classList.add('card');
        frontElmt.classList.add('card__front');
        frontElmt.style.backgroundPosition = card.bgPosition;
        backElmt.classList.add('card__back'); // Show card's value in debug mode

        backElmt.innerHTML = _this2.debug ? "<span class=\"card__value\">".concat(card.value, "</span>") : ''; // Append back and front to card element

        liElmt.append(backElmt, frontElmt); // Store liElemt in card object

        card.elmt = liElmt; // On card click

        liElmt.addEventListener('click', function () {
          card.isFlipped = true; // Is card clickable ?

          if (card.isClickable) {
            // Disable clickable state
            card.isClickable = false; // Flip card

            liElmt.classList.add('card--flipped'); // Store card's value

            self.selectedCards.push(card.value); // If stored cards number === number cards to find

            if (self.selectedCards.length === self.nbOccurences) {
              // Compare selected cards
              self.checkFlippedCards();
            }

            return;
          } // Prevent click on the card


          return false;
        }); //Append card to list element

        _this2.boardElmt.appendChild(liElmt);
      };

      for (var i in this.cards) {
        _loop(i);
      }
    }
    /**
     * Compare selected cards
     * @returns {void}
     */

  }, {
    key: "checkFlippedCards",
    value: function checkFlippedCards() {
      var self = this,
          isSame = this.selectedCards[0] === this.selectedCards[1]; // Disable active cards

      for (var i in this.cards) {
        var liElmt = Array.from(this.boardElmt.querySelectorAll('li'))[i];

        if (isSame && this.cards[i].isFlipped) {
          this.cards[i].isActive = false;
          liElmt.classList.add('card--blink');
        } else if (this.cards[i].isActive && this.cards[i].isFlipped === false) {
          liElmt.classList.add('card--disabled');
        }
      } // if same cards


      if (isSame) {
        // update visible cards number
        this.nbVisibleCards += this.selectedCards.length;
      } // Empty selected cards


      this.selectedCards = []; // if all cards are visible

      if (this.nbVisibleCards === this.cards.length) {
        this.isWin = true; // game over

        this.gameOver();
        return;
      } // Flip actives cards


      setTimeout(function () {
        for (var _i in self.cards) {
          if (self.cards[_i].isActive) {
            self.cards[_i].isClickable = true;
            self.cards[_i].isFlipped = false;

            Array.from(self.boardElmt.querySelectorAll('li'))[_i].classList.remove('card--flipped', 'card--disabled');
          }
        }
      }, self.visibleDuration * 1000);
    }
  }, {
    key: "launch",
    value: function launch() {
      var self = this;
      var countFrom = 3; // Show countdown

      this.countDownElmt.classList.remove('hide');
      this.countDown = setInterval(function () {
        var countDownValue;

        switch (countFrom) {
          case 0:
            countDownValue = 'GO';
            break;

          case -1:
            self.play();
            countDownValue = '';
            break;

          default:
            countDownValue = countFrom;
        }

        self.countDownValueElmt.innerHTML = countDownValue;
        self.countDownElmt.classList.toggle('hide', countFrom < 0);
        countFrom--;
      }, 1000);
    }
    /**
     * Play game
     */

  }, {
    key: "play",
    value: function play() {
      console.log('play');
      var self = this; // Remove countdown

      clearInterval(this.countDown); // Launch counter

      this.counter.start(); // Check counter

      this.checkCounter = setInterval(function () {
        if (self.counter.elapsedTime === self.duration) {
          self.gameOver();
        } // Progress width


        var width = (self.counter.elapsedTime + 1) / self.duration * 100;
        self.progress.move(width);
      }, 1000);
    }
    /**
     * Game stop
     */

  }, {
    key: "gameOver",
    value: function gameOver() {
      // Remove counter checking
      clearInterval(this.checkCounter); // Stop counter

      this.counter.stop(); // Disable click on active's cards

      for (var i in this.cards) {
        if (this.cards[i].isActive) {
          this.cards[i].isClickable = false;
        }
      } // If player loose, display loose alert


      if (this.isWin === false) {
        this.alert.loose();
        return;
      } // Set score


      this.score = this.counter.elapsedTime; // Get formated score

      var time = this.counter.secondsToMinutes(this.score); // Display win alert

      this.alert.win(time);
    }
    /**
     * Play again
     */

  }, {
    key: "replay",
    value: function replay() {
      this.boardElmt.innerHTML = ''; // Reset counter

      this.counter.reset(); // Reset progress bar

      this.progress.reset(); // Display cards

      this.displayCards(); // Reset nb Visible cards

      this.nbVisibleCards = 0; // Launch game

      this.launch();
    }
    /**
     * Check settings parameters integrity
     * @param {object} settings App settings
     * @returns {boolean} Settings integrity
     */

  }, {
    key: "checkSettings",
    value: function checkSettings(settings) {
      // Set game settings
      for (var setting in settings.game) {
        // Get setting value
        var settingValue = settings.game[setting]; // Value integrity

        switch (setting) {
          case 'debug':
            if (typeof settingValue !== 'boolean') {
              console.error('debug setting is not a boolean.');
              return false;
            }

            break;

          case 'duration':
            if (typeof settingValue !== 'number') {
              console.error('Duration setting is not a number.');
              return false;
            } else if (settingValue < 60 || settingValue > 3599) {
              console.error('duration setting must be between 60 and 3599.');
              return false;
            }

            break;

          case 'bgCardIncrement':
            if (typeof settingValue !== 'number') {
              console.error('bgCardIncrement setting is not a number.');
              return false;
            }

            break;

          case 'cardsValues':
            if (!Array.isArray(settingValue)) {
              console.error('cardsValues setting is not an array.');
              return false;
            }

            break;

          case 'nbOccurences':
            if (typeof settingValue !== 'number') {
              console.error('nbOccurences setting is not a number.');
              return false;
            }

            break;

          case 'visibleDuration':
            if (typeof settingValue !== 'number') {
              console.error('visibleDuration setting is not a number.');
              return false;
            }

            break;

          case 'backupMethod':
            if (!['database', 'localStorage'].includes(settingValue)) {
              console.error('backupMethod setting must be equal to "database" or "localStorage".');
              return false;
            }

            break;

          default:
            console.error("".concat(setting, " setting is not valid."));
            return false;
        }

        this[setting] = settingValue;
      } // Database settings integrity


      if (this.backupMethod === 'database') {
        for (var _setting in settings.database) {
          // Get setting value
          var _settingValue = settings.database[_setting]; // Value integrity

          switch (_setting) {
            case 'host':
              if (typeof _settingValue !== 'string') {
                console.error('host setting is not a string.');
                return false;
              }

              break;

            case 'dbName':
              if (typeof _settingValue !== 'string') {
                console.error('dbName setting is not a string.');
                return false;
              }

              break;

            case 'tableName':
              if (typeof _settingValue !== 'string') {
                console.error('tableName setting is not a string.');
                return false;
              }

              break;

            case 'userName':
              if (typeof _settingValue !== 'string') {
                console.error('userName setting is not a string.');
                return false;
              }

              break;

            case 'password':
              if (typeof _settingValue !== 'string') {
                console.error('host setting is not a string.');
                return false;
              }

              break;

            case 'rankingLimit':
              if (typeof _settingValue !== 'number') {
                console.error('rankingLimit setting is not a number.');
                return false;
              } else if (_settingValue < 2 || _settingValue > 11) {
                console.error('rankingLimit setting must be between 2 and 10.');
                return false;
              }

              break;

            default:
              console.error("".concat(_setting, " setting is not valid."));
              return false;
          }
        }
      }

      return true;
    }
  }]);

  return Memory;
}();



/***/ }),

/***/ "./js/progress.js":
/*!************************!*\
  !*** ./js/progress.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Progress; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Progress = /*#__PURE__*/function () {
  /**
   * Init progress bar
   */
  function Progress() {
    _classCallCheck(this, Progress);

    // DOM elements
    this.barElmt = document.getElementById('progress-bar');
  }
  /**
   * Progress bar width
   * @param {string} width Progress bar width
   */


  _createClass(Progress, [{
    key: "move",
    value: function move(width) {
      this.barElmt.style.width = "".concat(width, "%");
    }
    /**
     * Reset progress bar width
     */

  }, {
    key: "reset",
    value: function reset() {
      this.barElmt.removeAttribute('style');
    }
  }]);

  return Progress;
}();



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./scss/memory.scss":
/*!**************************!*\
  !*** ./scss/memory.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./js/index.js ./scss/memory.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\wamp64\www\memory\src\js\index.js */"./js/index.js");
module.exports = __webpack_require__(/*! D:\wamp64\www\memory\src\scss\memory.scss */"./scss/memory.scss");


/***/ })

/******/ });