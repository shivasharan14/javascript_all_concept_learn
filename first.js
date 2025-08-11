//Areithmetic opeerator
// let a=5;
// let b=7

// console.log("a+b",a+b);
// console.log(a,b);
// console.log("a-b",a-b);
// console.log("a*b",a*b);
// console.log("a/b",a/b);
// console.log("a%b",a%b);
// console.log("a**b",a**b);

// //Uanary operator;
//  a++;
 
//  b--;
//  console.log(a);
//  console.log(b);

//  assignment operator
// a+=4;
// console.log(a);
// a-=4;
// console.log(a);
// b*=3;
// console.log(b);
// let c=8;
// c%=3;
// console.log("c=",c);
// c**=3;
// console.log("c=",c);

// comparison operator;

// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);

// logical operator
// let cond1=a>b;
// let cond2=a<b;
// console.log(cond1&&cond2);
// let st=a==5;
// let st1=b==7;
// console.log(st&&st1);
// console.log(!(a<=b));

//conditional statement
//1.if{} 
// let modal="dark";

 
// if(modal=="dark")
// {
//    color= "black";
// }
// console.log(color);

//2.if-else

// let mode ="day";
// if(mode=="dark"){
//    color="black";
// }
// else{
//    color= "white";
// }
// console.log(color);

// let age=17;
// if(age>18){
//    console.log("he can vote");
// }
// else{
//     console.log("he can  not vote");

// }

//number odd or even
// let num=23;
// if(num%2==0){
//     console.log("number is even",num);
// }

// else{
//     console.log("number is odd",num);

// }

// 3.else-if statement (it is used for multiple condition checking)

// let a=18;
// let b=34;

// if(a==b){
//    console.log("he is atudent ");

// }

// else if(a==18||b==34){
//    console.log("he is man");
// }
// else{
//    console.log("he is grandfather");

// }


//Ternary oerator
// let age=17;
//  let result=age<18? console.log(" not adult") : console.log(" adult ");

//prctice set

// let name= prompt("hello");
// console.log(name);


// console.log("hi everyone")
/* prompt to use prompt it gives to input from the user for temporary */
// simple prompt
// let num=prompt("hello");
// console.log(num);

// practice question  1 use prompt check whether num is multiply of 5 or not
// let num =prompt("enter the number")
// if(num%5==0){
//     console.log("num is multiply by 5 ",num);
// }
// else {
//     console.log(num," is not multiply by 5 ");
// }

/* write a code which can give grades to students according  to their scores
 80-100 a,70-89 b,60-69,50-59d,0-49f */

//  let score=86;
//  let grade;
//  if(score>=80 && score<=100)
//  {
//     grade="A";
//  }

// else if(score==70 && score==89)
//         {
//            grade="B";
//         }
//  else if(score==60 && score==69)
//             {
//                grade="C";
//             }
//           else  if(score>=50 && score<=59)
//                 {
//                    grade="D";
//                 }
               
// else if(score>=0 && score<=49)
//                 {
//                    grade="F";
//                 }
// console.log("your grade is ",grade);
                                 
/*Loops in Js*/
// loos are used execute a piece of code agaian  and agaian

//1.FOR LOOP
//program calculate the first five element sum;

/*let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum is",sum);*/

//2 print the first five number by using for loop 

//for (let i =1;i<=5;i++){
 //   console.log("i=",i);
//}
/*for (let i =1;i<=5;i++){
    console.log("i=",i);
} the let variable work with the only this block of code */
// by using var variable it work with global(overall)
/*for (var i =1;i<=5;i++){
    console.log("i=",i);
}
console.log(i); */

//2.WHILE LOOP
//print the first five number by using while loop

/*var i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}
console.log(i);*/

//It work same as for loop syntax will different;

//3.DO WHILE LOOP
//it execute at least one time 
/*let i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=7);
*/
 
//
// 4.FOR OF LOOP
// It used for itrator checking line by line 

/*let str="sushil Shivasharan";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log(size);
*/

//5.FOR IN LOOP USED FOR Object
// It always return the key value
/*let student ={
    name :"sushil shivasharan",
    age: 25,
    cgpa: 7.7,
    isPass :true
}

for(let key in student){
    console.log("key =",key ,"value",student[key] );
} */

//practice qusetion on loop

//1.print all even numbers from 0 to 100


/*for(let i=0;i<100;i++){
    if(i%2==0){
        console.log("even numbers is",i);

    }
    
} */

//2.create a game where you start with any  random number ask user to keep guessing the number until the user enters correct values 

/*let gameNum=23;
let usernum=prompt("guess the number");

while(gameNum!=usernum){
    usernum=prompt("you entered wrong the number");
}
console.log("you have entered correct number");
*/

 // NEW POINT STRING IN JAVASCRIPT

 /*let str="hello Ganesh how are you";
 console.log(str);*/

 //access the string;
 
//  let str="hello Ganesh how are you";
//  console.log(str[6]);

// finding the length of the string

// let str="hello Ganesh how are you";
// console.log(str.length);

// all above the string simple 

// // Templets string in js 
// in the templets use ``  for text represent 
// it have feature in the object only in one line can multiple properties can print 
// simple template

// let str=`hello Ganesh how are you where are you`;
// console.log(str);

// why use backticks
// for the Object concept it is very useful 
// let obj={
//     age:"23",
//     name:"sushil"

// }
// // console.log("this is name of brand is",obj.name,"there" ,obj.age);
// let output=`this is the name ${obj.age} ,${obj.name}`;
// console.log(output);

// let str="sushil shivasharan";
// console.log(str.toUpperCase());

// let small="EVERY THING IS POSSIBLE ";
// console.log(small.toLowerCase());

// trim()

// let can="    EVERY THING IS POSSIBLE     ";
// console.log(can.trim());

//slice operation in String

// let str="sushil shivasharan";
// let output=str.slice(1,11);
// console.log(output);
// if you print some part next from start such as slice(1)

// let str="sushil shivasharan";
// let output=str.slice(5);
// console.log(output);

// Concate operation in string
//it has string operation of Concatenating jion the two string 
// let str1="Hii everyone how are you "
// let str2= "where you live"
// console.log(str1.concat(str2));

// replce methode in string

//it is used for searching value in string
//syntax str.replce(searchVal,newVal);
// let str="help me from tiger attack";
// console.log(str.replace("er","end"));

//practice set 1 

// 1.prompt the user to enter the name genrate a name for them based on input start name with @ then name last namelengthh

// let set = prompt("enter your name  ");
// let same= "@" + set + set.length ; 
// console.log(same);

//**ARRAYS IN JAVASCRIPT
//Array means collection of item 
//array creatioin

// let arr=[10,12,14,134,132];
// console.log(arr);

//by using for loop we are printing array 
// let arr=[10,12,14,134,132];

// for (let i=0;i<arr.length;i++){
//     console.log(i);
// }

//* we are also use  of for in and for off loop

// let arr=[13,4334,23432,4324,4324,423];
// for(let val of arr){
//     console.log(val);

// }
 
// by using for of loop we are print all the element in array

//practice set 1 on array 
//* for given array with array of students[43,56,76,75,73,87] find average marks of entire class
// let mark=[43,56,76,75,73,87];
// let sum=0;
// for(let val of mark){
//     sum= sum +val;
// }
// console.log("average of marks=",sum/mark.length);

//practice set 2 on array
//* have an array prices of item [250,645,300,900,501] all item have an offer of 10% OFF on them Change their price applying offer
// let item=[250,645,300,900,501];

// for(let i=0;i<=item.length;i++){
//    let offer= item[i]/10;
//    item[i]-=offer
//    i++;
// }
// console.log(item);

// ARRAY METHOD IN JAVASCRIPT 
//1.PUSH() METHOD 
// push() method are used add the element in array at the end of an array

//  let arr = ["sushil","ramesh","swati","sachin"];
//    arr.push("Ravindra");
//  console.log(arr);

//2.POP() METHOD 
// POP() method are used DELETE the element in array at the end of an array

// let arr = ["sushil","ramesh","swati","sachin"];
//  arr.pop("ramesh");
// console.log(arr);

//3.toString Method it used for conserting ray element in array 
// let arr = ["sushil","ramesh","swati","sachin"];
// console.log(arr.toString());

//4.slice method
// slice method gives an start and end  same working as string operation in string
// let arr = ["sushil","ramesh","swati","sachin"];
// console.log(arr.slice(2,3));

//5.unshift() METHODE it is same as push() methode but it add from the starting only this difference
// let arr = ["sushil","ramesh","swati","sachin"];
// arr.unshift("devendra")
//  console.log(arr);

//6.shift() METHODE it is same as pop() methode but it add from the starting only this difference
// let arr = ["sushil","ramesh","swati","sachin"];
// arr.shift()

//  console.log(arr);

// ** CHAPTER NO 5. FUNCTIONS IN THE JAVASCRIPT 

// function syntax 
// function  myfunction(){
//     //body of function 
// } 
//simple function
// function my(){
//     console.log("hi sushil");
// }

// my(); //function call

// function my(){
//        console.log("hi sushil");
//      }
//     my();
//     my();

//It removes the redundancy of code 
//this output does not any input 

//* for specific inut taken input as variable wil/

//1.crete a function to calculate the two number of sum 

// function sum(c,l){
//     console.log(c+l);
    
// }
// sum(2,4)

// function take input same as it returns also the value  

// function sum(c,l){//  function parameter are used as local parameter i.e block of scope
//           s=c+l; // here the variable act as local variable i.e only for this block code scope
//          return s;
//          }
//     let t=sum(2,4)
//     console.log(t);

//* ARROW FUNCTION => (compact way of writing a function)
 //for eg
 //syntax of arrow function  is  const variable= (a,b)=>{ //do work of code} here a,b is not compulsary it just parameter

//1.program on arrow funcion (it is use only for small function  task for calculation ,return something  );

// let df=(a,b)=>{
//     console.log(a+b); //for sum calculate 
// }

// const lm=(a,b)=>{//it consist the function varible
//     console.log(a*b); //for multiplication  
// }

//  df=3;
// console.log(df);

//* PRACTICE QUESTION 
// 1. create a funcrion using function keyword that takes a string as an argument and return the number of vowel in the string  
//vowel are are such as a,e,i,o,u

// function countVowel(str){
//     let count=0;
    
//     for(let char of str){
//         if(char =="a"|| char=="e"||char=="i"||char=="o"||char=="u" ){
//             count++;
//         }
//     }
//     console.log(count);


// }

//2. same by using arrow  function 
// const dm=(str)=>{
//     let count=0;
    
//         for(let char of str){
//             if(char =="a"|| char=="e"||char=="i"||char=="o"||char=="u" ){
//              count++;
//              }
//        }
//         return count;
    

// }

//* .FOR EACH LOOOP IN ARRAY
// syntax of for each function of an array  
// arr.forEach(callBack function);(in parameter  there are 3 parameter are used val, index,array itself)
//example
//it is only used for array not for string 
// let arr=[23,43,53,56,2,3,13];
// arr.forEach(function myfunction(val,idx,arr){
//     console.log(val,idx,arr);
// });

// in call function there are three parameter are used 1.val 2.index 3.array itself 

// for interview question  is what is an higher order method or function hof(in this another function are used as parameter or return it )

// Practice question 1 . for an a given array print the square of each valuve using the for Each loop 

// let arr=[23,34,25,56];
// arr.forEach(function my(suc){
//     console.log( suc*suc);
// });
 
// SOME ARRAY METHODES

// 1.MAP
// it is an similar to an FOREACH METHODE  but it returns an new array 
// syntax array name.map(callbak(ValidityState,indexe array));
//1. simple print an array 
// let arr=[2,3,45,6,77];
// let newarr=arr.map(function fun(val){
//     return val+val;
// });
// console.log(newarr);

//2..FILTER
//it gives filter value of an array based on condition
//eg on even number
// let arr=[23,34,12,45,55,46,78];
// let newarr=arr.filter(function my(val){
//     return val%2==0;
// })
// console.log(newarr);

//3.REDUCE METHODE
//it works with an only arrow methode   eg avg,sum 

//syntax let arr=set.reduce((accumulator,current value){
//     return any operation
// })
// let  arr=[1,2,3,4];
// const set=arr.reduce((res,cur)=>{
//     return res+cur;
// });
// console.log(set);

// **PRACTICE QUESTION  1.we are  given array  of marks of student that scored 90.
// let arr=[97,34,98,89,99];
// let su=arr.filter((val)=>{
//     return val>90;
// });
// // console.log(su);
// 2. take a number n as input from user create an array of number from 1 to n .
//    Use the reduce methode to calculate sum of all number in the array .
//    Use the reduce methode to calculate product  of all number in the array .
    // let d=prompt("enter a number ");
    // let arr=[];
    // for(let i=0;i<=d;i++){
    //     arr[i-1]=i;
    // }
    // console.log(arr);

    // let sum = arr.reduce((res,cur)=>{
    //     return res+cur;
    // });
    // console.log(sum);

    // let fact = arr.reduce((res,cur)=>{
    //     return res*cur;
    // });
    // console.log(fact);

/// new chapter 5. DOM

//1. methode to access  element of html in javascript with help of an id(it represent unique id )
// syntax : document getElementById("idname");// that can store in varible  it has an return value so for this purpodse it is used it 
// let set=document.getElementById("my");
// console.dir(set);
// console.log(set);

//2.  methode to access  element of html in javascript with help of an className(it represent same category )
//syntax : document.getElementclassName("classname");
//let set=document.getElementsByClassName("head");
//console.dir(set);
//console.log(set);

//3.  methode to access  element of html in javascript with help of an selctingtag name (it select tag )
//syntax : document.getElementBytagname("tagname");
// let set=document.getElementsByTagName("h1");
// console.dir(set);
// console.log(set);

//# level up methode to acess element i.e querySelector
//syntax : document.querySelector("myId/ myclass/ tag");
// let set=document.querySelector(".head");//by class name
// console.dir(set);
// console.log(set);

// let net=document.querySelector("#my");//by id name
// console.dir(net);
// console.log(net);

// let het=document.querySelectorAll("p");//by tag name
// console.dir(het);
// console.log(het);

// console.dir(document.body.firstChild);

//** Propertis accessing element 

// 2.innerText property
// acessing div of  //it returns  the text content 
//let div=document.querySelector("#fruit");
//console.dir(div);

// 3.innerHTML property
// acessing div of  //it returns  the plain text or Html content in the element
//let div=document.querySelector("#fruit");
//console.dir(div);

// We can also set value by following syntax for example
// 1. div.innerText= "abcd"
// 2.div,innerHtml="<div>inner div </div>"

//4.innerContent
// it retutrns textual content even for hidden elements 
//example

//let heading= document.querySelector(".heading");
//console.dir(heading);
//heading.textContent //rinting the hidden content

// LET PRACTICE QUESTION 
//1. CREATE a H2 heading element with text - "Hello JavaScript".Append "My name is Sushil Shivasharan" to this text using JS
// let h2= document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +"My name is sushil shivasharan";// concatenate

//2.Create three divs with commen class name - "box". access them and some unique text to each of them 
// let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);
// console.log(divs[0]);
// divs[0].innerText =" new unique value 1";
// divs[1].innerText =" new unique value 2";
// divs[2].innerText =" new unique value 3";

// by using the for loop 
// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;

// }

// ## DOM PART 2
// *ATTRIBUTE *

//1. getAttribute(attr) // to get the attribute value access 
// let div =document.querySelector("div")
// console.dir(div);

// let id=div.getAttribute("id")
// console.log(id);

// let para=div.getAttribute("name")
// console.log(para);

// 2. methode is * setAttribute(attr,value) * //(to set the attribute with value) i.e attribute value can be changed occur in element in console 
// let para= document.querySelector(".para");
// let par=para.setAttribute("class","newstart")
// console.log(par);

// 3. style atrribute 
// // node.style
// let div=document.querySelector("div") ;
// div.style.backgroundColor="green";
// div.style.fontSize="34px";

// * DOM MANIPULATION *
// >>INSERT ELEMENTS<< // how element add in  is a 2 step process 1) create and 2) then add
// creating syntax let el = document.createElement("div");

//for creating button 
// let newbutton= document.createElement("button");
// newbutton.innerText="click me ";
// console.log(newbutton);

// 1 .Methode add element in screen
// node.append(el); // for that in this first access the node then append(add at the end of inside node  ) the element 
//let div= document.querySelector("div");
//div.append(newbutton);

// 2 .Methode add element in screen
//syantax: node.prepend(el); // for that in this first access the node then prepend(add at the first of inside node  ) the element 
//let div= document.querySelector("div");
//div.prepend(newbutton);

// 3 .Methode add element in screen
//syntax: node.before(el); // for that in this first access the node then append(add at the first of outside node  ) the element 
//let div= document.querySelector("div");
//div.before(newbutton);

// 4 .Methode add element in screen
// syntax:node.append(el); // for that in this first access the node then append(add at the end of outside node  ) the element 
//let div= document.querySelector("div");
//div.after(newbutton);

//adding the heading on screen 
// let head=document.createElement("h1");
// head.innerHTML="<i>hii everyone this add heading by js</i>";
// console.log(head);
// // accesing body 
// let body=document.querySelector("body");
// body.prepend(head);

// DELETE ELEMENT 
// syntax: node.remove()// remove the node  same proces as like adding element
// let para=document.querySelector("p");
// para.remove();

//LETS PRACTICE QUESTION
//1. Create a new button element give it a text "click me ",background color of red & text color of white insert the button as the first element inside the body tag 
// let button= document.createElement("button");
// button.innerText= "click me!";
// button.style.color="white";
// button.style.backgroundColor="blue";
// let body=document.querySelector("body");
// body.prepend(button);

//2. create a <p> tag in html , give it a class & some styling.now create a new class in css and try to append this class to the <p> element.
//did you notice, how you overwrite the class name when you add a new one solve this problem using classList.
// let para=document.querySelector("p")
// console.log(para);
// para.classList.add("newclass")

//**  NEW POINT  in DOM CHAPTER . EVENT HANDLING IN JS 

// syntax node.event=()=>{ do work in side this block}
// let div=document.querySelector("#box");
// div,onmouseover=()=>{
//     console.log("you are inside box");
// }

//  let btn1=document.querySelector("#btn1");
//  btn1.onclick=()=>{
//     console.log("hii welcome ");
//    alert("hello")
//        let a=24
//        a++;
//        console.log(a);
//  }

//** */ Event Object
// It is a special object that has details about the event 
// It gives an additional information of event j
// All event handlers have access to the Event Objects properties and methods 
// syntax:  node.event= {e}=>{
    //handle event 
//}
// It gives an additional information 

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX,evt.clientY)
// }

//**EVENT LISTNER  */
// syntax : node.addEventListner(event,callback); for add 
// syntax : node.removeEventListner(event,callback); for remove
// for add

 //let btn1=document.querySelector("#btn1");

//  btn1.addEventListener("click",()=>{
//       console.log("button was clicked handler1");
//  })

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked handler2");
// })

//for remove
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked handler1");
// })

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked handler3");
// })
// //for remove an 2nd handler 
// const handler2=()=>{
//     console.log("button was clicked handler2");
// }
// btn1.addEventListener("click",handler2);
// btn1.removeEventListener("click",handler2);

// lets an practice question
// 1.create a toggle button that changes the button to dark-mode when clicked & light-mode when clicked again

// let btn1=document.querySelector("#btn1");
// let currmode="light";
// btn1.addEventListener("click",()=>{
//      if(currmode=="light"){
//         currmode="dark";
//         document.querySelector("#btn1").style.backgroundColor ="white";
//         document.querySelector("#btn1").style.color="black";
//      }
//      else{
//         currmode="light";
//         document.querySelector("#btn1").style.backgroundColor ="black";
//         document.querySelector("#btn1").style.color="white";
//      }
// }) 


// ** CLASSES AND OBJECTS **//
// OBJECTS : IT is an entity having state and behavior 

// const student ={
//     fullName :"sushil shivasharan",
//     marks: 94.4,
//     printMarks: function (){
//         console.log("marks =",this.marks);
//     },
// };

// ** PROTOTYPE  IN JS
// A js obect is an entity having state and beviour 
// js obect have a special property called prototype 
// we can set prototype using .--proto--

//** example
// const employee={
//     calculatTax() {
//         console.log("tax will be 10%")
//     }
// }
// const student={
//     salary:"5000",
// }
// student.__proto__=employee;

// ** if object and prototype have same method,then object methode is first prefereces**//

// /// *** Classes in JS ***///
// class is  a program-code template for creting object .
// those objects will have some state(variables)and some behaviour (functions) inside ImageTrack.

//ex.

// class Toyotacar {
//     start(){
//         console.log("start the car");
//     }

//      stop(){
       
//         console.log("stop the car");
//     }
//     setbrand(set){
//         this.Brandname=set;
//     }
// }

// let fortuner= new Toyotacar();
// let avenger= new Toyotacar();
// fortuner.setbrand("fortuner");
// avenger.setbrand("avenger");


//* CONSTRUCTOR *//
// constructor() methode is 
// 1.automatically invoked by new 
// it is used for the initializes object in the constructor itself .


// class Toyotacar {


//    start(){
//            console.log("start the car");
//      }
//       stop(){
       
//         console.log("stop the car");
//      }
// constructor(set,milege){
//          console.log("creating a constructor");
//          this.Brandname=set;
//          this.milege=milege;  
//            }
//  }

//  let fortuner= new Toyotacar("fortuner",10);
//  let avenger= new Toyotacar();


// ** INHERITANCE IN JS ** //
// inheritence is passing  down the properties and methods from parent class to child class .
// * SYNTAX -
// class Parent {  }  ->  class Child extends Parent {}
//** methode overriding will occur if same methode define in class (it execute the child methode) */

// class Parent {
//     start(){
//         console.log("start the car");
//     }

//     stop(){
//         console.log("stop the car");
//     }

//       work(){
//         console.log("do carefully work");
//     }
// }

// class Child extends Parent{
//     work(){
//         console.log("do hard work");
//     }
// }

// let obj=new Child;

//** */ Super Key word
// the super key word are used to access the parents properties and methods or to call the constructor 

// super(args)//call the Parents constructor 
// super.parentMethod(args)



















