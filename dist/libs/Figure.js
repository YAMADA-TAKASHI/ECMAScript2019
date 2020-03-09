"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triangle = triangle;
exports.circle = circle;
var PI = 3.1415;

function triangle(base, height) {
  return base * height / 2;
}

;

function circle(radius) {
  return radius * radius * PI;
}