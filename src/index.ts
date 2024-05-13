// basic types
let id: number = 5;
let company: string = 'Eirik';
let isPublished: boolean = true;
let x: any = 'hello';
x = true;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'string'];

// tuple
let person: [number, string, boolean] = [1, 'string', true];
// tuple array
let employee: [number, string][];

employee = [
  [1, 'string'],
  [2, 'string'],
  [3, 'string'],
];

// union
let productId: string | number = 22; // kan be a string or number

// enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Left); // --> 0

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction2.Up); // --> Up

// objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// type assertion
let cid: any = 1;
let customerId = <number>cid; // now customerId is a number
let personId = cid as number; // alternative syntax

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

// void
function log(message: string | number): void {
  // message can be string or number, return value nothing (void)
  console.log(message);
}

log('hello');
