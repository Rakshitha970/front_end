let a=50;
let b=a++ + a++ + ++a + a + ++a;
console.log(a);
console.log(b);



let c=24;
let d=50;
let e=c+d;
console.log(e);


console.log( "4" * 8);
console.log("7a" *2);// its prints NAN
console.log("true" *7);//its prints NAN

console.log(a * null);//its prints 0
console.log(null * null);//its prints 0
console.log(null * undefined);//its prints NAN
console.log(4 * null);//its prints 0
console.log(4 +undefined);//its prints NAN

console.log(2/0);
console.log(0.9+0.1);
console.log(2.1+ 4.2);
console.log(2.1 + 2.2);
console.log(3.1+3.2);
console.log(4 -undefined);



console.log(2.1 - 4.2);
console.log(2.1 - 2.2);


console.log(2.1 * 2.2);

console.log([1,2,3] *[2,3,4]);
console.log([2,1] + [2,2]);

console.log({ name: "rakshii"} * {name1:"Deepa" });


console.log("2" > "12");
console.log("undefined" <"null");//its prints false
console.log("undefined" >"undefined");//its prints false

console.log("undefined" >"null");//its prints true
console.log("undefined" <"null");//its prints false
console.log("null" >"null");//its prints false

console.log("a" <"c");//its prints ture


