let btn1=document.querySelector("#btn1");

let currmode="light";

btn1.addEventListener("click",()=>{
     if(currmode=="light"){
        currmode="dark";
        document.querySelector("#btn1").style.backgroundColor ="white";
        document.querySelector("#btn1").style.color="black";
     }
     else{
        currmode="light";
        document.querySelector("#btn1").style.backgroundColor ="black";
        document.querySelector("#btn1").style.color="white";

     }
})
