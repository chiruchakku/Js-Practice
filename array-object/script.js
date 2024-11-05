const arr =[];
const div = document.createElement('div');
document.body.appendChild(div);

function push(){

    const input = document.querySelector('.input-box').value;
    const p = document.createElement('p');
    p.innerHTML = input;
    div.appendChild(p)


// this is for console
// //     arr.push(input)
// //     console.log(arr);
  }


function pop(){
    div.removeChild(div.lastChild);
arr.pop();
console.log(arr)
}



function shift(){
    div.removeChild(div.firstChild)
}

function unshift(){
    const input = document.querySelector('.input-box').value;
    const p = document.createElement('p');
    p.innerHTML = input;
    div.insertBefore(p, div.first);
}

function concat(){
    const tempArr =[10,11,12]
    
    tempArr.forEach((data)=>{
        const p = document.createElement('p');
        p.innerHTML= data;
        div.appendChild(p);

    })
}

function slice(){
// const  sliceArr =[50,60,70,90]
// const temp = sliceArr.slice(0,1)
// console.log(temp)
const para = document.querySelectorAll("div  p")
console.log(para);
para.forEach((p,index)=>{
    if(index>1){
      p.innerHTML = "" 
    }
})

}

