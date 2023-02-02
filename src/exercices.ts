// Exercise 1

let pi = 3.14159 
let tau = pi * 2

console.log(`${tau} is ${pi} times two.`)

// Exercise 2

let pie: string
pie = 'blueberry'

console.log(`I like to eat ${pie}-Flavored pie`)

// Exercise 3

let isFelipe: boolean = true

console.log(`${ isFelipe? 'Olá Felipe' : 'Como é seu nome?'}`)

// Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber
];

members[0] = parseInt('12345');

console.log(members);