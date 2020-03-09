"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral([void 0, "."], ["\\uNameis\\use", "."]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\u3053\u3093\u306B\u3061\u306F\u3001", "\u3055\u3093\uFF01"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", "\u3001", "\u3055\u3093\uFF01"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

//const変数
console.log('========= const変数 =========');
{
  var val1 = 100;
  console.log(val1); // true
  // true
  // 100
} //const 配列の一部の書き換えはOK

console.log('========= const配列 =========');
{
  var data = [1, 2, 3];
  data[0] = 10;
  console.log(data); //[ 10, 2, 3 ]
} //整数リテラル

console.log('========= 整数リテラル =========');
{
  console.log(8 === 8); //8進数 true

  console.log(15 == 15); //2進数 true

  var num = 10;
  console.log(num.toString(8)); //8進数 12

  console.log(num.toString(2)); //2進数 1010

  console.log(Number('0o12')); //8進数 10

  console.log(Number('0b1010')); //2進数 10
} //べき乗演算子

console.log('========= べき乗演算子 =========');
{
  console.log(Math.pow(2, 3)); //8

  console.log(Math.pow(2, 3)); //8
} //テンプレート文字列

console.log('========= テンプレート文字列 =========');
{
  var str1 = "\u3053\u3093\u306B\u3061\u306F\u3001\n  \u3042\u304B\u3061\u3083\u3093";
  console.log(str1); //こんにちは、(改行)あかちゃん

  var name = 'Yamada';
  console.log("Hello,".concat(name, "!!"));
} //2.テンプレート文字列を加工して埋め込み文字列をブラケットで括る関数

{
  var taggedStr = function taggedStr(formats) {
    console.log(formats); //結果：["","、","さん！"]

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    console.log(args); //結果：["こんにちは","山田"]

    return formats[0] + '[' + args[0] + ']' + formats[1] + '[' + args[1] + ']' + formats[2];
  };

  var greeting = 'こんにちは',
      _name = '山田'; //1.テンプレート文字列をtaggedStr関数で加工

  console.log(taggedStr(_templateObject(), greeting, _name)); //結果：[こんにちは]、[山田]さん！
} //与えられた文字列をエスケープ処理するための_e関数

function _e(str) {
  if (!str) {
    return '';
  } //変換表ESCに従って、文字列を置き換え


  return str.replace(/[<>&"']/g, function (submatch) {
    var ESC = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return ESC[submatch];
  });
} //分解されたtemplatesとvaluesを順に連結（valuesは_e関数でエスケープ


{
  var _escape = function _escape(templates) {
    var result = '';

    for (var i = 0; i < templates.length; i++) {
      result += templates[i] + _e(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
    }

    return result;
  }; //テンプレート文字列をエスケープ処理


  var _name2 = '<Tom&Jerry>';
  console.log(_escape(_templateObject2(), _name2)); //結果：こんにちは、&lt;Tom&amp;Jerry&gt;さん！
} //エスケープシーケンスをそのまま出力[ECMA20定数として]

console.log('========= エスケープシーケンス そのまま出力 =========');
{
  var e = function e(templates) {
    var result = ''; //生の文字列を取得

    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    for (var i = 0; i < templates.raw.lentgth; i++) {
      result += templates.raw[i] + (values[i] ? values[i] : '');
    }

    return result;
  };

  var _name3 = '山田';
  var msg = e(_templateObject3(), _name3);
  console.log(msg); //結果：\uNameis\use山田.
} //Symbol

console.log('========= Symbol =========');
{
  var hoge = Symbol('hoge');
  var hoge2 = Symbol('hoge');
  console.log(_typeof(hoge)); //symbol

  console.log(hoge.toString()); //Symbol(hoge)

  console.log(hoge.description); //なぜかundefined hogeのはず

  console.log(hoge === hoge2); //false > 別々に作成されたシンボルは別物として扱われる！！
  // console.log(hoge+'');           //Cannot convert a Symbol value to a string
  // console.log(hoge - 0);          //Cannot convert a Symbol value to a number
} //シンボルの利用例

console.log('========= シンボルの利用例 =========');
{
  //定数として
  var JAVASCRIPT = Symbol();
  var RUBY = Symbol(); // export class MyClazz {
  //   constructor(secret) {
  //     this.data1 = 1;
  //     this.data2 = 2;
  //     //JAVASCRIPTプロパティに値を設定
  //     this[JAVASCRIPT] = secret;
  //   }
  //   //JAVASCRIPTプロパティを利用したメソッド
  //   checkJAVASCRIPT(script) {
  //     return this[JAVASCRIPT] ===  script;
  //   }
  // }
} //分割代入

console.log('========= 分割代入 =========');
{
  {
    var _hoge = 15,
        foo = 21;
    console.log(_hoge); //15

    console.log(foo); //21
  }
  {
    var _hoge2 = 10,
        _foo = 20,
        other = [30, 40, 50, 60];
    console.log(_hoge2); //10

    console.log(_foo); //20

    console.log(other); //[30, 40, 50, 60]
  }
  {
    var _hoge$foo = {
      hoge: 'ほげ',
      foo: 'ふー'
    },
        _hoge3 = _hoge$foo.hoge,
        _foo2 = _hoge$foo.foo; //順番を入れ替えても同じ

    console.log(_hoge3); //ほげ

    console.log(_foo2); //ふー
  }
  {
    var _data = {
      hoge: 'ほげ',
      foo: {
        piyo: 'ぴよ',
        goo: 'ぐぅ'
      }
    };
    var _hoge4 = _data.hoge,
        _foo3 = _data.foo,
        _data$foo = _data.foo,
        piyo = _data$foo.piyo,
        goo = _data$foo.goo;
    console.log(_hoge4); //ほげ

    console.log(_foo3); //{piyo: "ぴよ", goo: "ぐぅ"}

    console.log(piyo); //ぴよ

    console.log(goo); //ぐぅ
  }
  {
    var _hoge$foo2 = {
      hoge: 'ほげ',
      foo: 'ふー'
    },
        _x = _hoge$foo2.hoge,
        _foo4 = _hoge$foo2.foo;
    console.log(_x); //ほげ
    // console.log(hoge);  //エラー hoge is not defined

    console.log(_foo4); //ふー
  }
  {
    //ES2018以降
    var _hoge$foo$piyo = {
      hoge: 'ほげ',
      foo: 'ふー',
      piyo: 'ぴよ'
    },
        _hoge5 = _hoge$foo$piyo.hoge,
        _other = _objectWithoutProperties(_hoge$foo$piyo, ["hoge"]);

    console.log(_hoge5); //ほげ

    console.log(_other); //{foo: "ふー", piyo: "ぴよ"}
  } //宣言のない分割代入

  {
    var _hoge6, _foo5;

    _hoge6 = 15;
    _foo5 = 21;
    console.log(_hoge6); //15

    console.log(_foo5); //21
  } //宣言のないオブジェクトの分割代入 (babelでうまく変換できない、webpackを使う)

  {
    var _hoge7, _foo6;

    var _hoge$foo3 = {
      hoge: 'ほげ',
      foo: 'ふー'
    };
    x = _hoge$foo3.hoge;
    _foo6 = _hoge$foo3.foo;
    console.log(x); //ほげ

    console.log(_foo6); //ふー    
  } //使い方

  {
    var destructure = function destructure() {
      var result1 = 10;
      var result2 = 20;
      return [result1, result2];
    };

    var _destructure = destructure(),
        _destructure2 = _slicedToArray(_destructure, 2),
        _hoge8 = _destructure2[0],
        _foo7 = _destructure2[1];

    console.log(_hoge8); //10

    console.log(_foo7); //20
    //戻り値無視

    var _destructure3 = destructure(),
        _destructure4 = _slicedToArray(_destructure3, 2),
        _piyo = _destructure4[1];

    console.log(_piyo); //20
  } //入れ替え

  {
    var _hoge9 = 1;
    var _foo8 = 15;
    var _ref = [_foo8, _hoge9];
    _hoge9 = _ref[0];
    _foo8 = _ref[1];
    console.log(_hoge9); //15

    console.log(_foo8); //1
  }
} //名前付き引数{引数}

console.log('========= 名前付き引数{引数} =========');
{
  var trapezoid = function trapezoid(_ref2) {
    var _ref2$upper = _ref2.upper,
        upper = _ref2$upper === void 0 ? 1 : _ref2$upper,
        _ref2$lower = _ref2.lower,
        lower = _ref2$lower === void 0 ? 1 : _ref2$lower,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? 1 : _ref2$height;
    return (upper + lower) * height / 2;
  };

  console.log(trapezoid({
    upper: 5,
    lower: 10,
    height: 2
  }) //15
  ); //名前付き引数{引数} プロパティ

  {
    var getTitle = function getTitle(_ref3) {
      var title = _ref3.title;
      //titleプロパティだけを分割代入で受け取っている
      console.log(title);
    };

    var book = {
      isbn: '978-4-7741-7568-3',
      title: 'AngularJSアプリケーションプログラミング',
      price: 3700
    };
    getTitle(book); //AngularJSアプリケーションプログラミング
  } //正規表現で分割代入

  {
    var tel = '000-111-2222';
    var tel_pattern = /^(0\d{2,4})-(\d{1,4})-(\d{2,5})$/;

    var _tel_pattern$exec = tel_pattern.exec(tel),
        _tel_pattern$exec2 = _slicedToArray(_tel_pattern$exec, 4),
        area = _tel_pattern$exec2[1],
        local = _tel_pattern$exec2[2],
        privated = _tel_pattern$exec2[3]; //正規表現オブジェクトメソッドexec


    console.log(area);
    console.log(local);
    console.log(privated);
  }
} //展開演算子

console.log('========= 展開演算子 =========');
{
  console.log(Math.max(100, -10, 50, 108)); //可変長引数を受け取り最大値を返す

  console.log(Math.max([100, -10, 50, 108])); //配列を渡すと NaN エラー

  console.log(Math.max.apply(null, [100, -10, 50, 108])); //従来

  console.log(Math.max.apply(Math, [100, -10, 50, 108])); //ES2015以降
} //for文

console.log('========= for文 =========');
{
  //for...of
  {
    var _data2 = ['うめ', 'もも', 'さくら'];

    Array.prototype.hoge = function () {};

    for (var _i2 = 0, _data3 = _data2; _i2 < _data3.length; _i2++) {
      var d = _data3[_i2];
      console.log(d); //うめ、もも、さくら ※値だけ出力、拡張関数hogeは出力しない
    }
  }
  {
    var _data4 = ['うめ', 'もも', 'さくら'];

    Array.prototype.fuga = function () {}; //従来


    for (var _d2 in _data4) {
      console.log(_d2); //0、1、2、hoge、fuga ※拡張関数も出力してしまう
    }

    for (var _d3 in _data4) {
      console.log(_data4[_d3]); //うめ、もも、さくら、{}、{} ※同じく
    }
  }
} //try-catch

console.log('========= try-catch =========');
{
  //従来
  {
    try {
      throw new Error('エラーが発生しました');
    } catch (e) {
      console.log('エラーを補足しました'); //こっちが出力される
    }
  } //2019

  {
    try {
      throw new Error('エラーが発生しました');
    } catch (_unused) {
      //(e) を省略できるようになった
      console.log('エラーを補足しました');
    }
  }
} //JSON

{
  var str = "\"\u2028\u2029\"";
  var json_str = JSON.parse(str);
  console.log(json_str);
  var eval_str = eval(str); //NG

  console.log(eval_str);
} //関数

console.log('========= 関数 =========');
{
  //従来
  {
    var show = function show(name) {
      if (name === undefined) {
        name = '権兵衛';
      }

      console.log('私の名前は' + name + 'です！');
    };

    show();
  } //デフォルト値

  {
    var _show = function _show() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '権兵衛';
      console.log('私の名前は' + name + 'です！');
    };

    _show(); //私の名前は権兵衛です


    _show('たかし'); //私の名前はたかしです

  } //デフォルト値2

  {
    var add = function add(a) {
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
      return a + b;
    };

    console.log(add(1, 4)); //5

    console.log(add(1)); //2
  } //デフォルト値3

  {
    var dateFormat = function dateFormat() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
      return date.toLocaleString();
    };

    console.log(dateFormat(new Date(2019, 11, 4, 0, 0, 0))); //2019/12/4 0:00:00

    console.log(dateFormat()); //2020/1/30 23:47:39

    console.log(null); //null

    console.log(undefined); //undefined
  } //必須パラメータ

  {
    var required = function required() {
      throw new Error('Arguments is missing');
    };

    var _hoge10 = function _hoge10() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : required();
      return value;
    }; // hoge();   //Arguments is missing


    console.log(_hoge10('hogehoge')); //hogehoge
  } //可変長引数(... Rest Parameter)

  {
    var sum = function sum() {
      var result = 0;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      for (var _i3 = 0, _args = args; _i3 < _args.length; _i3++) {
        var arg = _args[_i3];
        result += arg;
      }

      return result;
    };

    console.log(sum(10, 20, 30, 40, 50)); //150
  } //アロー関数

  {
    var _data5 = [1, 2, 3]; //従来の関数リテラルでの表記

    var formatted1 = _data5.map(function (value, index) {
      return value * value;
    });

    console.log(formatted1); //アロー関数による表記

    var formatted2 = _data5.map(function (value, index) {
      return value * value;
    });

    console.log(formatted2); // [1, 4, 9]
    //引数がひとつの場合はカッコを省略できる

    console.log(_data5.map(function (value) {
      return value * value;
    })); // [1, 4, 9]
    //引数がない場合は()を省略できない

    console.log(_data5.map(function () {
      return 5 * 5;
    })); //[25, 25, 25]
    //アロー関数はthisを固定する

    {
      var Counter = function Counter() {
        var _this = this;

        //現在のthisを退避
        // var _this = this;    //不要
        this.count = 0; //1000ミリ秒感覚でcountプロパティをインクリメント

        setInterval(function () {
          // _this.count++;   //こうでなく
          _this.count++; //こう
        }, 1000);
      };

      var c = new Counter();
    }
  }
} //fetch 非同期通信 (Promiseを前提、$.ajaxと似ている)

{
  /** 
  * 基本構文：fetch(url[, init])
  * オプション
  * method リクエストメソッド(デフォルトはGET)
  * headers リクエストヘッダー
  * body リクエスト本体
  * returns void
  * URLSearchParams/FormDataでGET/POSTクエリ作成
  * ただし クロスオリジン(サイトまたぎ通信)をする場合は、レスポンスヘッダに Access-Control-Allow-Headersが必要
  */
  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json') //Promiseとして返す
  .then(function (response) {
    return response.json();
  }).then(function (text) {
    return console.log(new Date(parseInt(text.st) * 1000).toString());
  }); //Tue Feb 04 2020 22:40:07 GMT+0900 (日本標準時)
  //通信の成否を確認する場合

  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json') //Promiseとして返す
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('通信時にエラーが発生しました');
    }
  }).then(function (text) {
    return console.log(new Date(parseInt(text.st) * 1000).toString());
  })["catch"](function (error) {
    return console.log(error);
  }); //POST通信

  var _data6 = new FormData(); //URLSearchParams()でもOK


  _data6.append('format', 'Y年m月d日 H:i:s');

  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json', {
    method: 'POST',
    body: _data6 //JSONを送信する場合
    // headers: {
    //   'content-type':'application/json'
    // },
    // body:JSON.stringify(data),

  }).then(function (response) {
    return response.json();
  }).then(function (text) {
    console.log('========= fetch =========');
    console.log(new Date(parseInt(text.st) * 1000).toString());
  });
} //Proxyオブジェクト > オブジェクトの挙動をカスタマイズする(set/get/enumerate/iterate/deleteProperty)

console.log('========= Proxyオブジェクト =========');
{
  var obj = {
    hoge: 'ほげ',
    foo: 'ふー'
  };
  var p_obj = new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : '?';
    }
  });
  console.log(p_obj.hoge); //ほげ

  console.log(p_obj.nothing); // ?

  p_obj.goo = 'ぐう';
  console.log(obj.goo); //ぐう  > 本体にも反映されている

  console.log(p_obj.goo); //ぐう
} //Map

console.log('========= MAPオブジェクト =========');
{
  var _obj = []; //マップの生成&値の登録

  var m = new Map();
  m.set('hoge', 'ホゲ');
  m.set('foo', 'ふう');
  m.set('piyo', 'ぴよ');
  m.set(_obj, 'オブジェクト');
  console.log(m.get('hoge')); //ほげ

  console.log(m.get(_obj)); //オブジェクト

  console.log(m.get({})); //undefined

  console.log(m.has('hoge')); //true
  //マップのキーを列挙

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = m.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;
      console.log(key); //hoge, foo, piyo, []
    } //マップの値を列挙

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = m.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var value = _step3.value;
      console.log(value); //ホゲ、ふう、ぴよ、オブジェクト
    } //マップのキー、値を列挙

  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = m[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _step4$value = _slicedToArray(_step4.value, 2),
          _key4 = _step4$value[0],
          _value2 = _step4$value[1];

      console.log("".concat(_key4, ":").concat(_value2)); //hoge:ほげ、foo:ふぅ、piyo:ぴよ、:オブジェクト
    } //マップを順番に処理

  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  m.forEach(function (value, key) {
    return console.log("".concat(key, "=").concat(value));
  }); //hoge=ほげ、foo=ふぅ、piyo=ぴよ、=オブジェクト
  //hogeキーを削除

  m["delete"]('hoge');
  console.log(m); //{"foo" => "ふう", "piyo" => "ぴよ", Array(0) => "オブジェクト"}
  //すべてのキーを削除

  m.clear();
  console.log(m); //Map(0) {}
  //配列内配列定義

  var mm = new Map([['hoge', 'ほげ'], ['foo', 'ふう'], ['piyo', 'ぴよ'], [_obj, 'オブジェクト！']]);
  console.log(mm); //  {"hoge" => "ほげ", "foo" => "ふう", "piyo" => "ぴよ", Array(0) => "オブジェクト！"}

  console.log(mm.get(_obj)); //オブジェクト！
} //Setオブジェクト・・・重複しない値の集合を管理、重複した場合、これを無視

console.log('========= Setオブジェクト =========');
{
  var _obj2 = {}; //セットの生成&値の登録

  var s = new Set();
  s.add(5);
  s.add(10);
  s.add(8);
  s.add(0); //重複した値は無視

  s.add(8); //任意のオブジェクト型を登録可能

  s.add(_obj2); //確認

  console.log(s.size); //5

  console.log(s.has(5)); //true

  console.log(s.has({})); //false 参照型に注意！

  console.log(s.has(_obj2)); //true
  //値を削除

  s["delete"](5); //列挙

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = s[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _value3 = _step5.value;
      console.log(_value3); //10、8、0、{}
    } //クリア

  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  s.clear(); //確認

  console.log("s:".concat(s)); // s:[object Set]
  //コンストラクターで初期化

  var ss = new Set([5, 10, 8, 0, 8, _obj2]);
  console.log(ss);
} //Unicode

console.log('========= Unicode =========');
{
  //サロゲートペア(最大4byte文字)   
  var _str = '叱られて'; //叱は特殊文字扱いで4byte扱いだったので2文字でカウント

  console.log(_str.length); //4 ※よって従来は5だった
  //for...ofでもサロゲートペア

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = _str[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var _d4 = _step6.value;
      console.log(_d4); //叱、ら、れ、て
    } //エスケープシーケンス拡張

  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  console.log("\\u{udf9f}" === '?'); //true ※のはずだがfalse ブラウザが非対応？
  //サロゲートペアからコードポイントを取得、設定

  console.log('叱られ'.codePointAt(0).toString(16)); //20b9f のはずだが 53f1

  console.log(String.fromCodePoint(0x20b9f)); //叱
} //正規表現

console.log('========= 正規表現 =========');
{
  var _str2 = '叱られ';
  console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\u3089\u308C$/.test(_str2)); //true .は任意の一文字 ＾：は先頭完全一致 ＄：後方完全一致

  _str2 = '叱られ.....';
  console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\u3089\u308C/.test(_str2)); //true ＾：先頭完全一致

  _str2 = '---叱られ';
  console.log(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\u3089\u308C$/.test(_str2)); //true ＄：後方完全一致

  var re = new RegExp("WINGS", "y");
  console.log(re.flags); //y フラグ

  console.log(re.test('WINGS')); //true .testは一致を判定

  re.lastIndex = 2; //3文字目を比較対象にマッチングする設定

  console.log(re.test('出版WINGS')); //true 3文字目と比較
  //sフラグ > .(任意の一文字)がCR/LFなどの改行にも一致させるフラグ

  var re2 = /WINGS\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8[\s\S]\u30E1\u30F3\u30D0\u30FC\u52DF\u96C6\u4E2D\uFF01/;
  var re3 = 'WINGSプロジェクト\nメンバー募集中！';
  console.log(re2.test(re3)); //true
} //正規表現 Unicodeプロパティエスケープ \p{}

console.log('========= 正規表現 Unicodeプロパティエスケープ =========');
{
  var _str3 = 'あか巻紙あお巻紙き巻紙'; //uフラグは必須(p大文字で否定、scxで濁点、句読点含む)

  console.log(_str3.match(/(?:[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1E\uDD50-\uDD52]|\uD83C\uDE00)/g)); //ひらがな  ["あ", "か", "あ", "お", "き"]

  console.log(_str3.match(/(?:[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C[\uDC00\uDD64-\uDD67])/g)); //カタカナ  null

  console.log(_str3.match(/(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FEF\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])/g)); //漢字     ["巻", "紙", "巻", "紙", "巻", "紙"]

  console.log(_str3.match(/(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])/g)); //句読点     null
} //正規表現「名前付きキャプチャグループ」 [2018]

console.log('========= 正規表現「名前付きキャプチャグループ」 =========');
{
  var _re = /*#__PURE__*/_wrapRegExp(/(0[0-9]{1,4})\x2D([0-9]{1,4})\x2D([0-9]{3,4})/, {
    area: 1,
    city: 2,
    local: 3
  });

  var _msg = '電話番号は0297-66-1703です。';

  var result = _msg.match(_re);

  console.log("\u5E02\u5916\u5C40\u756A\uFF1A".concat(result.groups.area));
  console.log("\u5E02\u5185\u5C40\u756A\uFF1A".concat(result.groups.city));
  console.log("\u52A0\u5165\u8005\u756A\u53F7\uFF1A".concat(result.groups.local)); //後方参照

  {
    var mail = '問合せは<a href="mailto:hoge@example.com">hoge@example.com</a>から';

    var _re2 = /*#__PURE__*/_wrapRegExp(/<a href="mailto:(.+?)">\1<\/a>/, {
      mail: 1
    });

    console.log(mail.match(_re2)[0]); //<a href="mailto:hoge@example.com">hoge@example.com</a>
  } //replace

  {
    var _re3 = /*#__PURE__*/_wrapRegExp(/(0[0-9]{1,4})\x2D([0-9]{1,4})\x2D([0-9]{3,4})/g, {
      area: 1,
      city: 2,
      local: 3
    });

    var _msg2 = '電話番号は012-345-6789です';
    console.log(_msg2.replace(_re3, '$<area>($<city>)$<local>')); // 電話番号は012(345)6789です
  }
} //正規表現 肯定後読みと否定後読み [2018]

console.log('========= 正規表現 肯定後読みと否定後読み =========');
{
  var re1 = /いろ(?=はに)/g; //後ろに「はに」を含む「いろ」を検索

  var _re4 = /いろ(?!はに)/g; //後ろに「はに」を含まない「いろ」を検索

  var _re5 = /(?<=。)いろ/g; //前に「。」を含む「いろ」を検索

  var re4 = /(?<!。)いろ/g; //前に「。」を含まない「いろ」を検索

  var msg1 = 'いろはにほへと';
  var msg2 = 'いろものですね。いろいろと';
  console.log(msg1.match(re1)); // ["いろ"]

  console.log(msg2.match(re1)); // null

  console.log(msg1.match(_re4)); // null

  console.log(msg2.match(_re4)); // ["いろ", "いろ", "いろ"]

  console.log(msg1.match(_re5)); // null

  console.log(msg2.match(_re5)); // ["いろ"]

  console.log(msg1.match(re4)); // ["いろ"]

  console.log(msg2.match(re4)); // ["いろ", "いろ"]
} //String/Array/Math/Object 組み込みオブジェクトメソッド拡充

{}
/** String
  fromCodePoint(code,…)	コードポイント値から文字列を生成
  raw`str`				      テンプレート文字列の生の文字列を取得
  codePointAt(pos)		  UTF16エンコードされたコードポイント値を取得（引数posは文字列内の位置）
  normalize([form])		  文字列を引数formの形式で正規化（引数formの値はNFC、NFD、NFKCなど6）
  repeat(num)			    	文字列を指定回数だけ繰り返したものを取得
  startsWith(search[,pos])文字列が指定された部分文字列searchで始まるか（引数posは検索開始位置
  endsWith(search[,pos])	文字列が指定された部分文字列searchで終わるか
  includes(search[,pos])	文字列に指定された部分文字列searchが含まれるか
  pasStart(len[,pad])		文字列が指定された長さlenになるよう、文字pad（既定は空白）を左側に補う［2017］
  padEnd(len[,pad])		  文字列が指定された長さlenになるよう、文字pad（既定は空白）を右側に補う［2017］
  trimStart()				    文字列の先頭から空白を除去［2019］
  trimEnd()				      文字列の末尾から空白を除去［2019］
*/

/** Array
  ＊from(alike[,map[,othis])				  配列ライクなオブジェクト、列挙可能なオブジェクトを配列に変換（引数mapは要素を変換するための関数、othisはthisとなるオブジェクト）
  ＊of(e1,…)								          可変長引数e1…から配列を生成
  copyWithin(target,start[,end])			start～end1番目の要素をtargetの位置にコピー
  find(fn(elem,index,ary)[,othis])		コールバック関数fnが初めてtrueを返した要素を取得（コールバック関数の引数は、先頭から要素値、インデックス、配列）
  findIndex(fn(elem,index,ary)[,othis])	コールバック関数fnが初めてtrueを返した要素のインデックス番号を取得（コールバック関数の引数は、先頭から要素値、インデックス、配列）
  fill(v,start,end)					        	start～end1番目の要素に値vをセット
  includes(elem[,start])					    指定された要素elemが配列に含まれてるか（引数startは検索開始位置）［2016］
  flat([depth])							          配列を指定の深さdepthでフラット化［2019］
  flatMap(fn(elem,index,ary)[,othis])	配列をコールバック関数で処理した後にフラット化（コールバック関数の引数は、先頭から要素値、インデックス、配列）［2019］
  keys()									            配列のすべてのキーを含んだイテレーターを取得
  values()								            配列のすべての値を含んだイテレーターを取得
  entries()								            配列のすべてのエントリー（キー／値）を含んだイテレーターを取得
*/

/** Math
  clz32(x)		指定した値を32ビット符号なし整数にした時の、先頭の0の個数
  sign(x)			指定した値が正数の場合は1、負数の場合は1、0の場合は0を返す
  trunc(x)		小数部分を単純に切り捨て、整数部分を取得
  cbrt(x)			立方根を取得
  hypot(x1,x2,…)	引数の二乗和の平方根を取得
  log10(x)		底を10とする対数を取得
  log2(x)			底を2とする対数を取得
  log1p(x)		引数xに1を加えたものの自然対数を取得
  expm1(x)		e^x1を取得
  cosh(x)			ハイパーボリックコサインを取得
  sinh(x)			ハイパーボリックサインを取得
  tanh(x)			ハイパーボリックタンジェントを取得
  acosh(x)		ハイパーボリックアークコサインを取得
  asinh(x)		ハイパーボリックアークサインを取得
  atanh(x)		ハイパーボリックアークタンジェントを取得
  imul(a,b)		高速な32ビット整数の乗算
  fround(x)		指定した値に最も近い単精度float値を取得
 */

/**
  ＊EPSILON			1と、Number値で表現できる1よりも大きい最小値との差（2.2204460492503130808472633361816E16）
  ＊MIN_SAFE_INTEGER	JavaScriptにおいて正確に扱える最小の整数（9007199254740991）
  ＊MAX_SAFE_INTEGER	JavaScriptにおいて正確に扱える最大の整数（9007199254740991）
  ＊isNaN(num)			NaN（NotaNumber）であるかを判定＊isFinite(num)有限値であるかを判定
  ＊isInteger(num)		整数値であるかを判定
  ＊isSafeInteger(num)	SafeInteger（正しくIEEE754倍精度数として表現できるか）であるかを判定
  ＊parseFloat(str)	文字列を小数点数に変換
  ＊parseInt(str[,radix])文字列を整数に変換（引数radixは基数）
*/

/** Object
  ＊assign(target,src,…)				オブジェクトtargetに対してオブジェクトsrc,…のプロパティをコピー
  ＊is(v1,v2)							引数同士が等しいかどうかを判定
  ＊getOwnPropertyDescriptors(obj)		オブジェクトobjに含まれるすべてのプロパティ情報を取得［2017］
  ＊getOwnPropertySymbols(obj)			オブジェクトobj配下に含まれるすべてのシンボルプロパティを取得（具体的な例はシンボルの項を参照）
  ＊setPrototypeOf(obj,proto)			オブジェクトobjに新たなプロトタイプprotoを設定
  ＊values(obj)						オブジェクトobj自身に存在する列挙可能なプロパティ値の配列を取得［2017］
  ＊entries(obj)						オブジェクトobj自身に存在する列挙可能なプロパティ（[名前,値]の組み）の配列を取得［2017］
  ＊fromEntries(list)					「キー,値」のリストからオブジェクトを生成［2019］
*/
//オブジェクト指向構文

console.log('========= オブジェクト指向構文 =========');
{
  //変数名を同名のプロパティ名にする
  {
    var title = 'AngularJSアプリケーションプログラミング';
    var price = 3700;
    var publish = '技術評論者';
    var _book = {
      title: title,
      price: price,
      publish: publish
    };
    console.log(_book); //{title: "AngularJSアプリケーションプログラミング", price: 3700, publish: "技術評論者"}

    console.log(_book.title); //AngularJSアプリケーションプログラミング
  } //メソッド定義

  {
    var _book2 = {
      title: 'AngularJSアプリケーションプログラミング',
      price: 3700,
      toString: function toString() {
        console.log("".concat(this.title, ":").concat(this.price));
      }
    };

    _book2.toString(); // AngularJSアプリケーションプログラミング:3700

  } //プロパティ動的生成

  {
    var _data8;

    var i = 0;

    var _data7 = (_data8 = {}, _defineProperty(_data8, 'hoge' + ++i, 15), _defineProperty(_data8, 'hoge' + ++i, 20), _defineProperty(_data8, 'hoge' + ++i, 25), _data8);

    console.log(_data7); //{hoge1: 15, hoge2: 20, hoge3: 25}
  }
} //クラス(class)定義 [2015/ES6]

console.log('========= クラス(class)定義 =========');
{
  //クラス定義
  {
    var Person = /*#__PURE__*/function () {
      function Person(name, sex) {
        _classCallCheck(this, Person);

        this.name = name;
        this.sex = sex;
      }

      _createClass(Person, [{
        key: "show",
        value: function show() {
          return "".concat(this.name, "\u306F").concat(this.sex, "\u3067\u3059");
        }
      }]);

      return Person;
    }();

    var p = new Person('理央', '女');
    console.log(p.show()); //理央は女です
  } //匿名クラスで定義

  {
    var _Person = /*#__PURE__*/function () {
      function _Person(name, sex) {
        _classCallCheck(this, _Person);

        this.name = name;
        this.sex = sex;
      }

      _createClass(_Person, [{
        key: "show",
        value: function show() {
          return "".concat(this.name, "\u306F").concat(this.sex, "\u3067\u3059");
        }
      }]);

      return _Person;
    }();

    var _p = new _Person('理央', '女');

    console.log(_p.show()); //理央は女です
  } //静的メソッド static

  {
    var Figure = /*#__PURE__*/function () {
      function Figure() {
        _classCallCheck(this, Figure);
      }

      _createClass(Figure, null, [{
        key: "triangle",
        value: function triangle(base, height) {
          return base * height / 2;
        }
      }]);

      return Figure;
    }();

    console.log(Figure.triangle(10, 5)); //25
  } //getter/setter

  {
    //EX20XXではclassブロックの名でletインスタンス変数は定義できないらしいのでthisで定義/参照する
    var _Person2 = /*#__PURE__*/function () {
      function _Person2(name, sex) {
        _classCallCheck(this, _Person2);

        this.name = name;
        this.sex = sex;
      } //ageプロパティのgetter/setter(実体は_ageに格納)


      _createClass(_Person2, [{
        key: "show",
        value: function show() {
          return "".concat(this.name, "\u306F").concat(this.sex, "\u3001").concat(this.age, "\u6B73\u3067\u3059");
        }
      }, {
        key: "age",
        get: function get() {
          return this._age;
        },
        set: function set(value) {
          this._age = value;
        }
      }]);

      return _Person2;
    }();

    var _p2 = new _Person2('理央', '女');

    _p2.age = 10;
    console.log(_p2.show()); //理央は女、10歳です
  } //extends 継承 (Array/Date/Errorなどの組み込みオブジェクトも継承可能になってるらしい)

  {
    var _Person3 = /*#__PURE__*/function () {
      function _Person3(name, sex) {
        _classCallCheck(this, _Person3);

        this.name = name;
        this.sex = sex;
      }

      _createClass(_Person3, [{
        key: "show",
        value: function show() {
          return "".concat(this.name, "\u306F").concat(this.sex, "\u3067\u3059\u3002");
        }
      }]);

      return _Person3;
    }();

    var BusinessPerson = /*#__PURE__*/function (_Person4) {
      _inherits(BusinessPerson, _Person4);

      function BusinessPerson(name, sex, clazz) {
        var _this2;

        _classCallCheck(this, BusinessPerson);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BusinessPerson).call(this, name, sex));
        _this2.clazz = clazz;
        return _this2;
      }

      _createClass(BusinessPerson, [{
        key: "show",
        value: function show() {
          return "".concat(_get(_getPrototypeOf(BusinessPerson.prototype), "show", this).call(this), " \u5F79\u8077\u306F").concat(this.clazz, "\u3067\u3059\u3002");
        }
      }]);

      return BusinessPerson;
    }(_Person3);

    var bp = new BusinessPerson('理央', '女', '主任');
    console.log(bp.show()); //理央は女です。 役職は主任です。
  }
} //イテレーター iterator

console.log('========= イテレーター iterator =========');
{
  var array_data = [1, 2, 3];
  var str_data = 'いろは';
  var map_data = new Map();
  map_data.set('JS', 'JavaScript');
  map_data.set('PL', 'Perl');
  map_data.set('PY', 'Python');

  for (var _i4 = 0, _array_data = array_data; _i4 < _array_data.length; _i4++) {
    var tmp = _array_data[_i4];
    console.log(tmp); //1、2、3
  }

  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = str_data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var _tmp = _step7.value;
      console.log(_tmp); //い、ろ、は
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = map_data[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var _step8$value = _slicedToArray(_step8.value, 2),
          _key5 = _step8$value[0],
          _value4 = _step8$value[1];

      console.log("".concat(_key5, ":").concat(_value4)); //JS:JavaScript、PL:Perl、PY:Python
    } //原始的に書いてみる

  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  var itr = array_data.values();

  var _c;

  while (_c = itr.next()) {
    if (_c.done) {
      break;
    } //doneがtrueでbreak
    //doneはイテレータプロパティ > イテレータが終端まで到達したかをboolで持つ


    console.log(_c.done); //false,false,false,

    console.log(_c.value); //1,2,3
  } //イテレーターを実装したクラスの準備


  {
    var MyClazz = /*#__PURE__*/function () {
      //引数で渡された配列を保持
      function MyClazz(data) {
        _classCallCheck(this, MyClazz);

        this.data = data;
      } //デフォルトイテレーターを取得するためのメソッドを準備


      _createClass(MyClazz, [{
        key: Symbol.iterator,
        value: function value() {
          var current = 0;
          var that = this;
          return {
            //dataプロパティの辻の要素を取得
            next: function next() {
              return current < that.data.length ? {
                value: that.data[current++],
                done: false
              } : {
                done: true
              };
            }
          };
        } //ジェネレーターを利用

      }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
          var current;
          return regeneratorRuntime.wrap(function value$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  current = 10;

                case 1:
                  if (!(current < this.data.length)) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 4;
                  return this.data[current++];

                case 4:
                  _context.next = 1;
                  break;

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, value, this);
        })
      }]);

      return MyClazz;
    }(); //MyClazz内部で保持された配列を列挙


    var _c2 = new MyClazz(['ほげ', 'ふー', 'ぴよ']);

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = _c2[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var _d5 = _step9.value;
        console.log(_d5); //ほげ、ふー、ぴよ
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
          _iterator9["return"]();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  }
} //非同期処理を伴うイテレーター Async Iterators [2019]

console.log('========= 非同期処理を伴うイテレーター Async Iterators =========');
{
  //非同期イテレーターを定義
  var multi = function multi() {
    return _multi.apply(this, arguments);
  };

  var _multi = function (_multi2) {
    function _multi() {
      return _multi2.apply(this, arguments);
    }

    _multi.toString = function () {
      return _multi2.toString();
    };

    return _multi;
  }(function () {
    _multi = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _i5, _result;

      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _i5 = 1;

            case 1:
              if (!(_i5 < 4)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 4;
              return _awaitAsyncGenerator(fetch("../../assets/text".concat(_i5, ".txt")));

            case 4:
              _result = _context2.sent;
              _context2.next = 7;
              return _result.text();

            case 7:
              _i5++;
              _context2.next = 1;
              break;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));
    return _multi.apply(this, arguments);
  });

  var _hoge11 = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, content;

      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //multi関数から順にtestX.txtの結果を取得&出力
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context3.prev = 2;
              _iterator = _asyncIterator(multi());

            case 4:
              _context3.next = 6;
              return _iterator.next();

            case 6:
              _step = _context3.sent;
              _iteratorNormalCompletion = _step.done;
              _context3.next = 10;
              return _step.value;

            case 10:
              _value = _context3.sent;

              if (_iteratorNormalCompletion) {
                _context3.next = 18;
                break;
              }

              content = _value;
              //fetch(非同期)でも同期出力
              console.log('========= 非同期処理を伴うイテレーター =========');
              console.log(content);

            case 15:
              _iteratorNormalCompletion = true;
              _context3.next = 4;
              break;

            case 18:
              _context3.next = 24;
              break;

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](2);
              _didIteratorError = true;
              _iteratorError = _context3.t0;

            case 24:
              _context3.prev = 24;
              _context3.prev = 25;

              if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                _context3.next = 29;
                break;
              }

              _context3.next = 29;
              return _iterator["return"]();

            case 29:
              _context3.prev = 29;

              if (!_didIteratorError) {
                _context3.next = 32;
                break;
              }

              throw _iteratorError;

            case 32:
              return _context3.finish(29);

            case 33:
              return _context3.finish(24);

            case 34:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, null, [[2, 20, 24, 34], [25,, 29, 33]]);
    }));

    return function _hoge11() {
      return _ref4.apply(this, arguments);
    };
  }();

  _hoge11();
} //ジェネレーター function* yeildが使用可能に(returnと似た命令)

console.log('========= ジェネレーター function* yeildが使用可能に =========');
{
  //yieldはreturnとは違い、処理を一時停止/再開する
  var myGenerator = /*#__PURE__*/regeneratorRuntime.mark(function myGenerator() {
    return regeneratorRuntime.wrap(function myGenerator$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return 'あ';

          case 2:
            _context4.next = 4;
            return 'い';

          case 4:
            _context4.next = 6;
            return 'う';

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, myGenerator);
  }); //for文で回せる

  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = myGenerator()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var _t = _step10.value;
      console.log(_t); //あ、い、う
    } //カウントダウンするジェネレーター

  } catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
        _iterator10["return"]();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
      }
    }
  }

  {
    var countdown = /*#__PURE__*/regeneratorRuntime.mark(function countdown(begin) {
      return regeneratorRuntime.wrap(function countdown$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(begin >= 0)) {
                _context5.next = 5;
                break;
              }

              _context5.next = 3;
              return begin--;

            case 3:
              _context5.next = 0;
              break;

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, countdown);
    });
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = countdown(10)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var t = _step11.value;
        console.log(t);
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
          _iterator11["return"]();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }
  }
} //Promiseオブジェクト

{
  //シンプルなPromise
  {
    var _hoge12 = function _hoge12(value) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (value) {
            resolve("x".concat(value, "x"));
          } else {
            reject(new Error('入力値が空です'));
          }
        }, 1000);
      });
    };

    _hoge12('山田') //x山田x、終了
    .then(function (response) {
      console.log('========= Promiseオブジェクト =========');
      console.log(response);
    })["catch"](function (error) {
      console.log("Error. ".concat(error.message));
    })["finally"](function () {
      console.log('終了');
    }); //catchを簡略化も可能


    _hoge12('') //Error. 入力値が空です
    .then(function (response) {
      console.log(response);
    }, function (error) {
      console.log("Error. ".concat(error.message));
    })["finally"](function () {
      console.log('終了');
    }); //Promiseの連結


    _hoge12('山田').then(function (response) {
      return _hoge12(response);
    }).then(function (response) {
      return _hoge12(response);
    }).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log("Error. ".concat(error.message));
    }); //async/await構文 + Promise で非同期処理を同期処理風に記述する


    {
      var serial = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
          var result;
          return regeneratorRuntime.wrap(function _callee3$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _hoge12(value);

                case 2:
                  result = _context6.sent;
                  _context6.next = 5;
                  return _hoge12(result);

                case 5:
                  result = _context6.sent;
                  _context6.next = 8;
                  return _hoge12(result);

                case 8:
                  result = _context6.sent;
                  //非同期処理後に実行
                  console.log('処理が終了しました');
                  return _context6.abrupt("return", result);

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee3);
        }));

        return function serial(_x2) {
          return _ref5.apply(this, arguments);
        };
      }(); //実行


      serial('山田たかし').then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log("Error. ".concat(error.message));
      }); //非同期処理中に処理すべき処理

      console.log('Promise ---他の処理---');
    } //Promise.all 風数の非同期処理を並列して実行

    {
      Promise.all([_hoge12('山田卓史'), _hoge12('山田たかし'), _hoge12('ヤマダタカシ')]).then(function (response) {
        console.log(response); //["x山田卓史x", "x山田たかしx", "xヤマダタカシx"]
      })["catch"](function (error) {
        console.log("Error.".concat(error.message));
      });
    } //raceメソッド 並行して実行された非同期処理のいずれかひとつが最初に完了したところで後続処理実行

    {
      Promise.race([_hoge12('123'), _hoge12('234'), _hoge12('345')]).then(function (response) {
        console.log(response); //x123x ※処理の重さによって変動する場合あり
      })["catch"](function (error) {
        console.log("Error.".concat(error.message));
      });
    }
  }
}