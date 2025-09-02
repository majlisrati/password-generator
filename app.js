
const choices=document.querySelectorAll(".choice");
let user=document.querySelector("#user");
let comp=document.querySelector("#computer");
let msg=document.querySelector("#msg");
 

let userscore=0;
let computerscore=0;
    
const drawgame=()=>{
     msg.innerText="Match draw,Try again";
     msg.style.backgroundColor="#181b41"
}
    
    const result_function=(winner,user_val,comp_val)=>{
          if(winner)
          {
              
            user.innerText++;
            msg.innerText=`You Win! Your ${user_val} beats ${comp_val}`
            msg.style.backgroundColor="green"
          }
           else {
               
           comp.innerText++;
            msg.innerText=`You Loss! ${comp_val} beats Your ${user_val}`;
            msg.style.backgroundColor="red "
           }
    } 

  const  checkfunction=(userclick)=>{
       let winner;
       let computer=["rock","paper","scissor"];
       let index= Math.floor(Math.random()*3);
       if(userclick===computer[index])
       {
           drawgame();

       }
       else{
          
          if(userclick==="rock") 
          {
             winner= computer[index]==="paper"?false:true;
          }
          else if(userclick==="paper")
          {
             winner=computer[index]==="scissor"?false:true;
          }
         else{
              winner=computer[index]==="rock"?false:true;
         } 

         result_function(winner,userclick,computer[index]);
        }

  }

  choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
          
      
            let userclick=choice.getAttribute("id");
             checkfunction(userclick);
           
            
     });
});