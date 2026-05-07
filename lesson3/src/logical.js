const a = 0;
const b = 1;
const c = '1';
const d = true;
const e = false;
const f = undefined;
const g = null;
const h = 'last';


console.log(a > b);
console.log(a < b);
console.log(a > c);
console.log(a < c);

console.log(a >= b);
console.log(a <= b);

console.log(a == b);
console.log(a === b);
console.log(b == c);
console.log(b === c);
console.log(a == d);
console.log(a === d);
console.log(a == e);
console.log(a === e);

console.log(a != b);
console.log(a !== b);

console.log(b != c);
console.log(b !== c);

console.log(d && e);
console.log(d || e);
console.log(!d);
console.log(!e);
console.log(!!b);
console.log(!!c);

let i = f ?? g ?? h;
console.log(i);

i = f ?? b ?? h;
console.log(i);

i = f ?? e ?? h;
console.log(i);
