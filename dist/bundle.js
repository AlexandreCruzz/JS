/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************!*
  !*** ./src/app.js ***!
  \********************/
eval("let els = document.querySelector(\"ul\");\r\nconsole.log(els)\r\n\r\ndocument.body.onload = permutNumber();\r\n\r\nfunction permutNumber(){\r\n    let tag = document.getElementsByTagName(\"li\");\r\n    let myArray = [3, 1, 2];\r\n\r\n    for (let i = 0; i < myArray.length; i++){\r\n        tag.item(i).querySelector('span').innerHTML = myArray[i];\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://projet_01_list_numbers_start/./src/app.js?");
/******/ })()
;