"use strict";
// basic types
let id = 5;
let company = 'Eirik';
let isPublished = true;
let x = 'hello';
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'string'];
// tuple
let person = [1, 'string', true];
// tuple array
let employee;
employee = [
    [1, 'string'],
    [2, 'string'],
    [3, 'string'],
];
// union
let productId = 22; // kan be a string or number
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left); // --> 0
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // --> Up
const user = {
    id: 1,
    name: 'John',
};
// type assertion
let cid = 1;
let customerId = cid; // now customerId is a number
let personId = cid; // alternative syntax
// functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    // message can be string or number, return value nothing (void)
    console.log(message);
}
log('hello');
