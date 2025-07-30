let a="abc";
let k=12;
let k1=14;
console.log(k);

//arrar 
let b=[12,13,23,89 ,"hello"];
console.log(b[1]);
console.log(b[21]);// its prints undefined
console.log(b[2]);//Read
b[3]=34;//update
b[16]=45;//create 
console.log(b);
console.log(b.length);

//shallow copy only for non primitive datatype
let r=b;
r[1]=21;
console.log(r[1]);
console.log(b[1]);//shallow copy

//object key, value pair
let obj={name:"Rakshii" ,class:"frontend" ,marks:[34,56,78]};
//Object.seal(obj);
//Object.freeze(obj);
obj["name"]="krishna";
obj["name"]="Deepa";//updated
obj["name1"]="rakshii";//adding new key
console.log(obj);
console.log(obj["name1"]);
console.log(obj["marks"]);

//shallow copy
let obj1=obj;
obj1[1]="Dilliraj";
console.log(obj1[1]);
console.log(obj[1]);
