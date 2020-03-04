//const変数
console.log('========= const変数 =========');
{
  const val1 = 100
  console.log(val1)

  // true
  // true
  // 100
}

//const 配列の一部の書き換えはOK
console.log('========= const配列 =========');
{
  const data = [1, 2, 3];
  data[0] = 10;
  console.log(data);

  //[ 10, 2, 3 ]
}

//整数リテラル
console.log('========= 整数リテラル =========');
{
  console.log(0o10 === 8)       //8進数 true
  console.log(0b1111 == 15)     //2進数 true

  let num = 10
  console.log(num.toString(8))  //8進数 12
  console.log(num.toString(2))  //2進数 1010
  console.log(Number('0o12'))   //8進数 10
  console.log(Number('0b1010')) //2進数 10
}

//べき乗演算子
console.log('========= べき乗演算子 =========');
{
  console.log(Math.pow(2, 3))   //8
  console.log(2 ** 3)           //8
}

//テンプレート文字列
console.log('========= テンプレート文字列 =========');
{
  let str1 = `こんにちは、
  あかちゃん`
  console.log(str1)     //こんにちは、(改行)あかちゃん

  let name = 'Yamada'
  console.log(`Hello,${name}!!`)
}

//2.テンプレート文字列を加工して埋め込み文字列をブラケットで括る関数
{
  function taggedStr(formats,...args) {
    console.log(formats); //結果：["","、","さん！"]
    console.log(args);    //結果：["こんにちは","山田"]
    return formats[0]+'['+args[0]+']'+formats[1]+'['+args[1]+']'+formats[2];
  }
  
  let greeting='こんにちは', name='山田';
  
  //1.テンプレート文字列をtaggedStr関数で加工
  console.log(taggedStr`${greeting}、${name}さん！`); //結果：[こんにちは]、[山田]さん！
}

//与えられた文字列をエスケープ処理するための_e関数
function _e(str) {
  if(!str){return'';}
  //変換表ESCに従って、文字列を置き換え
  return str.replace(/[<>&"']/g, function(submatch){
    const ESC = {
      '<':'&lt;',
      '>':'&gt;',
      '&':'&amp;',
      '"':'&quot;',
      "'":'&#39;'
    };
    return ESC[submatch];
  });
}

//分解されたtemplatesとvaluesを順に連結（valuesは_e関数でエスケープ
{
  function escape(templates,...values) {
    let result='';
    for(let i=0; i<templates.length; i++) {
      result+=templates[i]+_e(values[i]);
    }
    return result;
  }

  //テンプレート文字列をエスケープ処理
  let name='<Tom&Jerry>';
  console.log(escape`こんにちは、${name}さん！`); //結果：こんにちは、&lt;Tom&amp;Jerry&gt;さん！
}

//エスケープシーケンスをそのまま出力[ECMA20定数として]
console.log('========= エスケープシーケンス そのまま出力 =========');
{
  function e(templates, ...values) {
    let result = '';

    //生の文字列を取得
    for (let i=0; i<templates.raw.lentgth;i++){
      result+=templates.raw[i]+(values[i]?values[i]:'');
    }
    return result;
  }
  let name='山田';
  const msg=e`\uNameis\use${name}.`;
  console.log(msg);   //結果：\uNameis\use山田.
}

//Symbol
console.log('========= Symbol =========');
{
  let hoge = Symbol('hoge');
  let hoge2 = Symbol('hoge')
  console.log(typeof hoge);   //symbol

  console.log(hoge.toString());   //Symbol(hoge)
  console.log(hoge.description);  //なぜかundefined hogeのはず
  console.log(hoge === hoge2);    //false > 別々に作成されたシンボルは別物として扱われる！！
  // console.log(hoge+'');           //Cannot convert a Symbol value to a string
  // console.log(hoge - 0);          //Cannot convert a Symbol value to a number
}

//シンボルの利用例
console.log('========= シンボルの利用例 =========');
{
  //定数として
  const JAVASCRIPT = Symbol();
  const RUBY = Symbol();

  // export class MyClazz {
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
  
}

//分割代入
console.log('========= 分割代入 =========');
{
  {
    let [hoge, foo] = [15, 21];
    console.log(hoge);  //15
    console.log(foo);   //21
  }

  {
    let [hoge, foo, ...other] = [10, 20, 30, 40, 50, 60];
    console.log(hoge);    //10
    console.log(foo);     //20
    console.log(other);   //[30, 40, 50, 60]
  }

  {
    let {hoge, foo} = {hoge:'ほげ', foo:'ふー'};    //順番を入れ替えても同じ
    console.log(hoge);    //ほげ
    console.log(foo);     //ふー
  }

  {
    let data = { hoge:'ほげ', foo: { piyo:'ぴよ', goo:'ぐぅ'}};
    let {hoge, foo, foo:{piyo, goo}} =  data;
    console.log(hoge);    //ほげ
    console.log(foo);     //{piyo: "ぴよ", goo: "ぐぅ"}
    console.log(piyo);    //ぴよ
    console.log(goo);     //ぐぅ
  }

  {
    let {hoge:x, foo} = {hoge:'ほげ', foo:'ふー'};
    console.log(x);   //ほげ
    // console.log(hoge);  //エラー hoge is not defined
    console.log(foo); //ふー
  }

  {
    //ES2018以降
    let {hoge, ...other} = {hoge:'ほげ', foo:'ふー', piyo:'ぴよ'};
    console.log(hoge);    //ほげ
    console.log(other);   //{foo: "ふー", piyo: "ぴよ"}
  }

  //宣言のない分割代入
  {
    let hoge, foo;
    [hoge, foo] = [15, 21];
    console.log(hoge);    //15
    console.log(foo);     //21
  }

  //宣言のないオブジェクトの分割代入
  {
    let hoge, foo;
    ({hoge:x, foo} = {hoge:'ほげ', foo:'ふー'});
    console.log(x);    //ほげ
    console.log(foo);     //ふー    
  }

  //使い方
  {
    function destructure() {
      let result1 = 10;
      let result2 = 20;
      return [result1, result2];
    }

    let [hoge, foo] = destructure();
    console.log(hoge);  //10
    console.log(foo);   //20

    //戻り値無視
    let [, piyo] = destructure();
    console.log(piyo);    //20
  }

  //入れ替え
  {
    let hoge = 1;
    let foo = 15;
    [hoge, foo] = [foo, hoge];
    console.log(hoge);  //15
    console.log(foo);   //1
  }
}

//名前付き引数{引数}
console.log('========= 名前付き引数{引数} =========');
{
  function trapezoid({upper = 1, lower = 1, height = 1}) {
    return (upper + lower) * height / 2;
  }

  console.log(
    trapezoid({
      upper: 5,
      lower: 10,
      height: 2,
    })      //15
  )

  //名前付き引数{引数} プロパティ
  {
    let book = {
      isbn: '978-4-7741-7568-3',
      title:'AngularJSアプリケーションプログラミング',
      price: 3700
    };

    function getTitle({title}) {  //titleプロパティだけを分割代入で受け取っている
      console.log(title);
    }

    getTitle(book); //AngularJSアプリケーションプログラミング
  }

  //正規表現で分割代入
  {
    let tel = '000-111-2222';
    let tel_pattern = /^(0\d{2,4})-(\d{1,4})-(\d{2,5})$/;
    let [, area, local, privated] = tel_pattern.exec(tel);  //正規表現オブジェクトメソッドexec
    console.log(area);
    console.log(local);
    console.log(privated);
  }
}

//展開演算子
console.log('========= 展開演算子 =========');
{
  console.log(Math.max(100, -10, 50, 108));                 //可変長引数を受け取り最大値を返す
  console.log(Math.max([100, -10, 50, 108]));               //配列を渡すと NaN エラー
  console.log(Math.max.apply(null, [100, -10, 50, 108]));   //従来
  console.log(Math.max(...[100, -10, 50, 108]));            //ES2015以降
}

//for文
console.log('========= for文 =========');
{
  //for...of
  {
    let data = ['うめ', 'もも', 'さくら'];
    Array.prototype.hoge = function() {};
    for(let d of data) {
      console.log(d);   //うめ、もも、さくら ※値だけ出力、拡張関数hogeは出力しない
    }

    
  }

  {
    let data = ['うめ', 'もも', 'さくら'];
    Array.prototype.fuga = function() {};   
    //従来
    for(let d in data) {
      console.log(d);   //0、1、2、hoge、fuga ※拡張関数も出力してしまう
    }

    for(let d in data) {
      console.log(data[d]); //うめ、もも、さくら、{}、{} ※同じく
    }
  }
}

//try-catch
console.log('========= try-catch =========');

{
  //従来
  {
    try {
      throw new Error('エラーが発生しました');
    } catch(e) {
      console.log('エラーを補足しました');  //こっちが出力される

    }
  }

  //2019
  {
    try {
      throw new Error('エラーが発生しました');
    } catch {                             //(e) を省略できるようになった
      console.log('エラーを補足しました');
    }
  }
}

//JSON
{
  let str = '"\u2028\u2029"';
  let json_str = JSON.parse(str);
  console.log(json_str);
  let eval_str = eval(str);         //NG
  console.log(eval_str);
}

//関数
console.log('========= 関数 =========');
{
  //従来
  {
    function show(name) {
      if (name === undefined) { name = '権兵衛';}
      console.log('私の名前は' + name + 'です！');
    }

    show();
  }

  //デフォルト値
  {
    function show(name ='権兵衛') {
      console.log('私の名前は' + name + 'です！');
    }
    show(); //私の名前は権兵衛です
    show('たかし'); //私の名前はたかしです
  }

  //デフォルト値2
  {
    function add (a, b = a) {
      return a + b;
    }
    console.log(add(1, 4));   //5
    console.log(add(1));      //2
  }

  //デフォルト値3
  {
    function dateFormat(date = new Date()) {
      return date.toLocaleString();
    }
    console.log(dateFormat(new Date(2019, 11, 4, 0, 0, 0))); //2019/12/4 0:00:00
    console.log(dateFormat());                               //2020/1/30 23:47:39
    console.log(null);                                      //null
    console.log(undefined);                                 //undefined
  }

  //必須パラメータ
  {
    function required() {
      throw new Error('Arguments is missing');
    }
    function hoge(value = required()) {
      return value;
    }
    // hoge();   //Arguments is missing
    console.log(hoge('hogehoge'));      //hogehoge
  }

  //可変長引数(... Rest Parameter)
  {
    function sum(...args) {
      let result = 0;
      for(let arg of args) {
        result += arg;
      }
      return result;
    }

    console.log(sum(10, 20, 30, 40, 50));   //150
  }

  //アロー関数
  {
    let data = [1, 2, 3];

    //従来の関数リテラルでの表記
    let formatted1 = data.map(function(value, index) {
      return value * value;
    });
    console.log(formatted1);

    //アロー関数による表記
    let formatted2 = data.map((value, index) => value * value);
    console.log(formatted2);  // [1, 4, 9]

    //引数がひとつの場合はカッコを省略できる
    console.log(data.map(value => value * value));  // [1, 4, 9]

    //引数がない場合は()を省略できない
    console.log(data.map(() => 5 * 5));   //[25, 25, 25]

    //アロー関数はthisを固定する
    {
      var Counter = function() {
        //現在のthisを退避
        // var _this = this;    //不要
        this.count = 0;

        //1000ミリ秒感覚でcountプロパティをインクリメント
        setInterval(() => {
          // _this.count++;   //こうでなく
          this.count++;       //こう
        }, 1000);
      }
      var c = new Counter();
    }
  }
}

//fetch 非同期通信 (Promiseを前提、$.ajaxと似ている)
console.log('========= fetch =========');

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
  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json')   //Promiseとして返す
    .then(response => response.json())
    .then(text => console.log(new Date(parseInt(text.st) * 1000).toString()));  //Tue Feb 04 2020 22:40:07 GMT+0900 (日本標準時)

  //通信の成否を確認する場合
  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json')   //Promiseとして返す
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      else {
        throw new Error('通信時にエラーが発生しました');
      }
    })
    .then(text => console.log(new Date(parseInt(text.st) * 1000).toString()))
    .catch(error => console.log(error));

  //POST通信
  let data = new FormData();    //URLSearchParams()でもOK
  data.append('format', 'Y年m月d日 H:i:s');
  fetch('https://ntp-a1.nict.go.jp/cgi-bin/json', {
    method:'POST',
    body:data,

    //JSONを送信する場合
    // headers: {
    //   'content-type':'application/json'
    // },
    // body:JSON.stringify(data),
  })   
    .then(response => response.json())
    .then(text => console.log(new Date(parseInt(text.st) * 1000).toString()));
}

//Proxyオブジェクト > オブジェクトの挙動をカスタマイズする(set/get/enumerate/iterate/deleteProperty)
console.log('========= Proxyオブジェクト =========');
{
  let obj = {hoge:'ほげ', foo:'ふー'};
  var p_obj = new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : '?';
    }
  });
  console.log(p_obj.hoge);    //ほげ
  console.log(p_obj.nothing);   // ?
  
  p_obj.goo = 'ぐう';
  console.log(obj.goo);     //ぐう  > 本体にも反映されている
  console.log(p_obj.goo);     //ぐう
}

//Map
console.log('========= MAPオブジェクト =========');
{
  let obj = [];

  //マップの生成&値の登録
  let m = new Map();
  m.set('hoge', 'ホゲ');
  m.set('foo', 'ふう');
  m.set('piyo', 'ぴよ');

  m.set(obj, 'オブジェクト');
  console.log(m.get('hoge')); //ほげ
  console.log(m.get(obj));    //オブジェクト
  console.log(m.get({}));   //undefined
  console.log(m.has('hoge')); //true
  
  //マップのキーを列挙
  for(let key of m.keys()) {  
    console.log(key);   //hoge, foo, piyo, []
  }
  
  //マップの値を列挙
  for(let value of m.values()) {
    console.log(value);  //ホゲ、ふう、ぴよ、オブジェクト
  }

  //マップのキー、値を列挙
  for(let [key, value] of m) {
    console.log(`${key}:${value}`);   //hoge:ほげ、foo:ふぅ、piyo:ぴよ、:オブジェクト
  }

  //マップを順番に処理
  m.forEach((value, key) => console.log(`${key}=${value}`));  //hoge=ほげ、foo=ふぅ、piyo=ぴよ、=オブジェクト

  //hogeキーを削除
  m.delete('hoge');
  console.log(m); //{"foo" => "ふう", "piyo" => "ぴよ", Array(0) => "オブジェクト"}

  //すべてのキーを削除
  m.clear();
  console.log(m); //Map(0) {}

  //配列内配列定義
  let mm = new Map([['hoge', 'ほげ'], ['foo', 'ふう'], ['piyo', 'ぴよ'], [obj, 'オブジェクト！']]);
  console.log(mm);    //  {"hoge" => "ほげ", "foo" => "ふう", "piyo" => "ぴよ", Array(0) => "オブジェクト！"}
  console.log(mm.get(obj));   //オブジェクト！
}

//Setオブジェクト・・・重複しない値の集合を管理、重複した場合、これを無視
console.log('========= Setオブジェクト =========');
{
  let obj = {};

  //セットの生成&値の登録
  let s = new Set();
  s.add(5);
  s.add(10);
  s.add(8);
  s.add(0);

  //重複した値は無視
  s.add(8);

  //任意のオブジェクト型を登録可能
  s.add(obj);

  //確認
  console.log(s.size);      //5
  console.log(s.has(5));    //true
  console.log(s.has({}));   //false 参照型に注意！
  console.log(s.has(obj));  //true

  //値を削除
  s.delete(5);

  //列挙
  for(let value of s) {
    console.log(value);   //10、8、0、{}
  }

  //クリア
  s.clear();

  //確認
  console.log(`s:${s}`);  // s:[object Set]

  //コンストラクターで初期化
  let ss = new Set([5, 10, 8, 0, 8, obj]);
  console.log(ss);
}

//Unicode
console.log('========= Unicode =========')
{
  //サロゲートペア(最大4byte文字)   
  let str = '叱られて';         //叱は特殊文字扱いで4byte扱いだったので2文字でカウント
  console.log(str.length);    //4 ※よって従来は5だった

  //for...ofでもサロゲートペア
  for(let d of str) {
    console.log(d);     //叱、ら、れ、て
  }

  //エスケープシーケンス拡張
  console.log('\\u{udf9f}'==='?');    //true ※のはずだがfalse ブラウザが非対応？

  //サロゲートペアからコードポイントを取得、設定
  console.log('叱られ'.codePointAt(0).toString(16));    //20b9f のはずだが 53f1
  console.log(String.fromCodePoint(0x20b9f));          //叱
}

//正規表現
console.log('========= 正規表現 =========');
{
  let str = '叱られ';
  console.log(/^.られ$/u.test(str));    //true .は任意の一文字 ＾：は先頭完全一致 ＄：後方完全一致
  
  str = '叱られ.....'
  console.log(/^.られ/u.test(str));    //true ＾：先頭完全一致

  str = '---叱られ'
  console.log(/.られ$/u.test(str));    //true ＄：後方完全一致


  let re = /WINGS/y;
  console.log(re.flags);            //y フラグ
  console.log(re.test('WINGS'));    //true .testは一致を判定
  re.lastIndex = 2;                 //3文字目を比較対象にマッチングする設定
  console.log(re.test('出版WINGS')); //true 3文字目と比較

  //sフラグ > .(任意の一文字)がCR/LFなどの改行にも一致させるフラグ
  let re2 = /WINGSプロジェクト.メンバー募集中！/s;
  let re3 = 'WINGSプロジェクト\nメンバー募集中！';
  console.log(re2.test(re3));       //true
}

//正規表現 Unicodeプロパティエスケープ \p{}
console.log('========= 正規表現 Unicodeプロパティエスケープ =========');

{
  let str = 'あか巻紙あお巻紙き巻紙';

  //uフラグは必須(p大文字で否定、scxで濁点、句読点含む)
  console.log(str.match(/\p{sc=Hiragana}/gu));      //ひらがな  ["あ", "か", "あ", "お", "き"]
  console.log(str.match(/\p{sc=Katakana}/gu));      //カタカナ  null
  console.log(str.match(/\p{sc=Han}/gu));           //漢字     ["巻", "紙", "巻", "紙", "巻", "紙"]
  console.log(str.match(/\p{P}/gu));               //句読点     null
}

//正規表現「名前付きキャプチャグループ」 [2018]
console.log('========= 正規表現「名前付きキャプチャグループ」 =========');
{
  let re = /(?<area>0\d{1,4})-(?<city>\d{1,4})-(?<local>\d{3,4})/;
  let msg = '電話番号は0297-66-1703です。';
  let result = msg.match(re);   
  console.log(`市外局番：${result.groups.area}`);
  console.log(`市内局番：${result.groups.city}`);
  console.log(`加入者番号：${result.groups.local}`);

  //後方参照
  {
    let mail = '問合せは<a href="mailto:hoge@example.com">hoge@example.com</a>から';
    let re = /<a href="mailto:(?<mail>.+?)">\k<mail><\/a>/;
    console.log(mail.match(re)[0]); //<a href="mailto:hoge@example.com">hoge@example.com</a>
  }

  //replace
  {
    let re = /(?<area>0\d{1,4})-(?<city>\d{1,4})-(?<local>\d{3,4})/g;
    let msg = '電話番号は012-345-6789です';
    console.log(msg.replace(re, '$<area>($<city>)$<local>'));  // 電話番号は012(345)6789です
  }
}

//正規表現 肯定後読みと否定後読み [2018]
console.log('========= 正規表現 肯定後読みと否定後読み =========');
{
  let re1 = /いろ(?=はに)/g;    //後ろに「はに」を含む「いろ」を検索
  let re2 = /いろ(?!はに)/g;    //後ろに「はに」を含まない「いろ」を検索
  let re3 = /(?<=。)いろ/g;     //前に「。」を含む「いろ」を検索
  let re4 = /(?<!。)いろ/g;     //前に「。」を含まない「いろ」を検索

  let msg1 = 'いろはにほへと';
  let msg2 = 'いろものですね。いろいろと';
  console.log(msg1.match(re1));   // ["いろ"]
  console.log(msg2.match(re1));   // null
  console.log(msg1.match(re2));   // null
  console.log(msg2.match(re2));   // ["いろ", "いろ", "いろ"]
  console.log(msg1.match(re3));   // null
  console.log(msg2.match(re3));   // ["いろ"]
  console.log(msg1.match(re4));   // ["いろ"]
  console.log(msg2.match(re4));   // ["いろ", "いろ"]
}

//String/Array/Math/Object 組み込みオブジェクトメソッド拡充
{
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
}

//オブジェクト指向構文
console.log('========= オブジェクト指向構文 =========');
{
  //変数名を同名のプロパティ名にする
  {
    let title = 'AngularJSアプリケーションプログラミング';
    let price = 3700;
    let publish = '技術評論者';
    let book = { title, price, publish };
    console.log(book);        //{title: "AngularJSアプリケーションプログラミング", price: 3700, publish: "技術評論者"}
    console.log(book.title);  //AngularJSアプリケーションプログラミング
  }

  //メソッド定義
  {
    let book = {
      title: 'AngularJSアプリケーションプログラミング',
      price: 3700,
      toString() {
        console.log(`${this.title}:${this.price}`);
      }
    }
    book.toString();  // AngularJSアプリケーションプログラミング:3700
  }

  //プロパティ動的生成
  {
    let i = 0;
    let data = {
      ['hoge'+ ++i]: 15,
      ['hoge'+ ++i]: 20,
      ['hoge'+ ++i]: 25
    };
    console.log(data);  //{hoge1: 15, hoge2: 20, hoge3: 25}
  }
}

//クラス(class)定義 [2015/ES6]
console.log('========= クラス(class)定義 =========');
{
  //クラス定義
  {
    class Person {
      constructor(name, sex) {
        this.name = name;
        this.sex = sex;
      }

      show() {
        return `${this.name}は${this.sex}です`;
      }
    }
    let p = new Person('理央', '女');
    console.log(p.show());          //理央は女です
  }

  //匿名クラスで定義
  {
    const Person = class {
      constructor(name, sex) {
        this.name = name;
        this.sex = sex;
      }

      show() {
        return `${this.name}は${this.sex}です`;
      }
    }
    let p = new Person('理央', '女');
    console.log(p.show());          //理央は女です
  }

  //静的メソッド static
  {
    class Figure {
      static triangle(base, height) {
        return base * height / 2;
      }
    }
    console.log(Figure.triangle(10, 5));    //25
  }

  //getter/setter
  {
    //EX20XXではclassブロックの名でletインスタンス変数は定義できないらしいのでthisで定義/参照する
    class Person {
      constructor(name, sex) {
        this.name = name;
        this.sex = sex;
      }
      //ageプロパティのgetter/setter(実体は_ageに格納)
      get age() {
        return this._age;
      }

      set age(value) {
        this._age = value;
      }

      show() {
        return `${this.name}は${this.sex}、${this.age}歳です`;
      }
    }
    let p = new Person('理央', '女');
    p.age = 10;
    console.log(p.show());  //理央は女、10歳です
  }

  //extends 継承 (Array/Date/Errorなどの組み込みオブジェクトも継承可能になってるらしい)
  {
    class Person {
      constructor(name, sex) {
        this.name = name;
        this.sex = sex;
      }

      show() {
        return `${this.name}は${this.sex}です。`;
      }
    }

    class BusinessPerson extends Person {
      constructor(name, sex, clazz) {
        super(name, sex);
        this.clazz = clazz;
      }
      show() {
        return `${super.show()} 役職は${this.clazz}です。`;
      }
    }
    let bp = new BusinessPerson('理央', '女', '主任');
    console.log(bp.show());   //理央は女です。 役職は主任です。
  }
}

//Promiseオブジェクト
console.log('========= Promiseオブジェクト =========');
{
  //シンプルなPromise
  {
    function hoge(value) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (value) {
            resolve(`x${value}x`);
          }
          else {
            reject(new Error('入力値が空です'));
          }
        }, 1000);
      })
    }

    hoge('山田')    //x山田x、終了
    .then(
      response => {
        console.log(response);
      }
    )
    .catch(
      error => {
        console.log(`Error. ${error.message}`);
      }
    )
    .finally(
      () => {
        console.log('終了');
      }
    )

    //catchを簡略化も可能
    hoge('')    //Error. 入力値が空です
    .then(
      response => {
        console.log(response);
      },
      error => {
        console.log(`Error. ${error.message}`);
      }
    )
    .finally(
      () => {
        console.log('終了');
      }
    )

    //Promiseの連結
    hoge('山田')
    .then(
      response => {
        return hoge(response);
      }
    )
    .then(
      response => {
        return hoge(response);
      }
    )
    .then(
      response => {
        console.log(response);
      }
    )
    .catch(
      error => {
        console.log(`Error. ${error.message}`);
      }
    )

    //async/await構文 + Promise で非同期処理を同期処理風に記述する
    {
      async function serial(value) {    //asyncの中でawaitが使えてPromise関数が同期で動く
        let result = await hoge(value);
        result = await hoge(result);
        result = await hoge(result);

        //非同期処理後に実行
        console.log('処理が終了しました');
        return result;    //Promise
      }

      //実行
      serial('山田たかし').then(response => {
        console.log(response);
      }).catch(error => {
        console.log(`Error. ${error.message}`);
      });

      //非同期処理中に処理すべき処理
      console.log('Promise ---他の処理---');
    }

    //Promise.all 風数の非同期処理を並列して実行
    {
      Promise.all([
        hoge('山田卓史'),
        hoge('山田たかし'),
        hoge('ヤマダタカシ')
      ])
      .then(
        response => {
          console.log(response);  //["x山田卓史x", "x山田たかしx", "xヤマダタカシx"]
        }
      )
      .catch(
        error => {
          console.log(`Error.${error.message}`);
        }
      )
    }

    //raceメソッド 並行して実行された非同期処理のいずれかひとつが最初に完了したところで後続処理実行
    {
      Promise.race([
        hoge('123'),
        hoge('234'),
        hoge('345')
      ])
      .then(
        response => {
          console.log(response);    //x123x ※処理の重さによって変動する場合あり
        }
      )
      .catch(
        error => {
          console.log(`Error.${error.message}`);
        }
      );
    }
  }
}