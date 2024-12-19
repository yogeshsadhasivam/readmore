let td1=document.getElementsByClassName("td1");
console.log(td1);
td1[0].style.display="none";    
let readmore=false;
td1[1].addEventListener('click',()=>{
    readmore=!readmore;
   if(readmore){
    td1[1].textContent="Read Less";
    td1[0].style.display="inline";
   }
   else{
    td1[1].textContent="Read More";
    td1[0].style.display="none";
   }
})
let td2=document.getElementsByClassName("td2");
console.log(td2);
td2[0].style.display="none";
let readmore1=false;
td2[1].addEventListener('click',()=>{
    readmore1=!readmore1;
   if(readmore1){
    td2[1].textContent="Read Less";
    td2[0].style.display="inline";
   }
   else{
    td2[1].textContent="Read More";
    td2[0].style.display="none";
   }
})
let td3=document.getElementsByClassName("td3");
console.log(td3);
td3[0].style.display="none";
let readmore2=false;
td3[1].addEventListener('click',()=>{
    readmore2=!readmore2;
   if(readmore2){
    td3[1].textContent="Read Less";
    td3[0].style.display="inline";
   }
   else{
    td3[1].textContent="Read More";
    td3[0].style.display="none";
   }
})
let td4=document.getElementsByClassName("td4");
console.log(td4);
td4[0].style.display="none";
let readmore3=false;
td4[1].addEventListener('click',()=>{
    readmore3=!readmore3;
   if(readmore3){
    td4[1].textContent="Read Less";
    td4[0].style.display="inline";
   }
   else{
    td4[1].textContent="Read More";
    td4[0].style.display="none";
   }
})