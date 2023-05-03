let increment = 0;
let show = document.querySelector(".show")
let cuerpo = document.querySelector(".container")

document.addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.matches("#decrease")){
        increment--;
        show.innerHTML = increment;
      }
})
     document.addEventListener("click",(e)=>{ 
        console.log(e)
      if(e.target.matches("#increase")){  
      increment++
      show.innerHTML = increment

  }
})
