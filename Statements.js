if(2){
    console.log("condition is true");
}
if(2){
    console.log("condition is true");
}
else{
    console.log("condition is true");
}
//without using curly{} brace
if(2<1)
    console.log("condition is true");
else
    console.log("condition is false");

if(4>2){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//using falsy value
if(0){
    console.log("condition is true");
}else{
    console.log("condition is false");
}
if(null)
{
    console.log("condition is true");
}else{
    console.log("condition is false");
}
if(undefined){
    console.log("condition is true");
}
else{
   console.log("condition is false"); 
}

//without using curly{} braces
if("")
    console.log("condition is true");
else
    console.log("condition is false");

//else if
let marks=50;
if(marks>=45)
{
    console.log("Grade:" +"o+");
}
else if(marks>=50)
{
        console.log("Grade:" +"A+");
}
else if(marks>=30)
{
        console.log("Grade:" +"B+");
}
else if(marks>=20)
{
        console.log("fail");
}

let mark=50;
if(mark>=45)
{
        console.log("Grade:" +"o+");
}
if(mark>=50)
{
        console.log("Grade:" +"A+");
}
if(mark>=30)
{
        console.log("Grade:" +"B+");
}
if(mark>=20)
{
        console.log("fail");
}

//nested if

let mark1=70;
if(mark1>=60)
{
    if(mark1>=50){
        console.log("pass");
    }
    else{
        console.log("fail");
    }
}

//iterative statements

let arr=[2,3,4,5,6,7,8,1,9];
for(let i=0;i<10;i++)
{
    console.log("array index:" +i);
}

let i=0;
while(i<6)
{
    console.log("while array element is:" +arr[1]);
    i++;
}

let j=0;
do{
    console.log("Do while element is:" +j);
    j++;
}
while(j<5);