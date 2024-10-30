// function sum(){
//     var x  =document.querySelector(".title");
//     const y =x.value;
//     alert(y);
//     const z = document.querySelectorAll(".title");
//     z[2].innerText = y;

// }

// const inputFirst = document.querySelector('.input-first');
// const inputTwo = document.querySelector('.input-two');

// const result_sol = document.querySelector('.result')


//  function multi(){
//     var x = parseInt(inputFirst.value);
//     var y =parseInt(inputTwo.value);
//     console.log(x*y);
//     result_sol.innerText = x*y;
//  }

 const input_no = document.querySelector('.input-first')

 

 function table(){
   // alert("hello")
   let n = input_no.value;
for (let i = 1; i <= 100; ++i){
   // console.log( n + " * " + i +
   //    " = " + n * i);
      const divnew = document.createElement("div")
   
      divnew.innerText= n + " * " + i +
       " = " + n * i;
    
       document.body.appendChild(divnew);
   }

    
}
   

 