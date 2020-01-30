//const変数
{
  const val1 = 100
  console.log(val1)

  // true
  // true
  // 100
}

//const 配列の一部の書き換えはOK
{
  const data = [1, 2, 3];
  data[0] = 10;
  console.log(data);

  //[ 10, 2, 3 ]
}

//整数リテラル
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
{
  console.log(Math.pow(2, 3))   //8
  console.log(2 ** 3)           //8
}

//テンプレート文字列
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
{
  console.log(Math.max(100, -10, 50, 108));                 //可変長引数を受け取り最大値を返す
  console.log(Math.max([100, -10, 50, 108]));               //配列を渡すと NaN エラー
  console.log(Math.max.apply(null, [100, -10, 50, 108]));   //従来
  console.log(Math.max(...[100, -10, 50, 108]));            //ES2015以降
}

//for文 ES2019
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
}