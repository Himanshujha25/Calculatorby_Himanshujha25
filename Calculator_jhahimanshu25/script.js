let string= "";
let button= document.querySelectorAll(".btn");
let display=document.querySelector(".number")

button.forEach(button=>{
  button.addEventListener("click",(e)=>{
    let buttontext=e.target.innerHTML;
    if(buttontext=="="){
      try{if(string){
        string=eval(string);
        display.value=string;}}
      catch(err){
        display.value="Error";
      }
    }
    else if(buttontext==='C'){
      string="";
      display.value=string;}
    else{
      string+=buttontext;
      display.value=string;}
    });
});





