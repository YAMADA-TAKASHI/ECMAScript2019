import { triangle, circle } from "../libs/Figure.js";
import * as fig from "../libs/Figure.js";
import Fig from "../libs/Figure2.js";

//モジュール  ES Modules [2015]
console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log(triangle(10, 5)); //結果 25
  console.log(circle(2));       //結果 12.566
}

console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log(triangle(10, 5)); //結果 25
  console.log(circle(2));       //結果 12.566
}

console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log(Fig(10, 5)); //結果 25
}
