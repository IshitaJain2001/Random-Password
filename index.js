let val=document.querySelector('span')
let button= document.querySelector("button")
let inputslide= document.querySelector('.slider')
let inputval= document.querySelector(".input")
let smallalpha= document.querySelector("#smalpha")
let capital= document.querySelector("#caalpha")
let symbol= document.querySelector("#sym")
let numbers= document.querySelector("#num")
let inputtags= document.querySelectorAll("input[type='radio']")

val.textContent= inputslide.value
let length= inputslide.value
inputslide.addEventListener('input',(e)=>{
    val.textContent= e.target.value
    length= e.target.value
})

button.addEventListener("click",()=>{
    str='';
    let smallchar= 'abcdefghijklmnopqrstuvwxyz'
    let capletter='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let num= '0123456789'
    let ar= '`~!@#$%^&*()_-;:"/?.>,<{[\|'
    
   let psswrd= ''
if(smallalpha.checked){
 psswrd += smallchar
}
if(capital.checked) {
  psswrd += capletter
}
if(symbol.checked) {
psswrd += ar
}
if(numbers.checked) {
 psswrd += num
}

for(let i=0;i<length;i++) {
    str += psswrd[Math.floor(Math.random()*(psswrd.length))]
}
inputval.value= str
inputval.style.color='green'
 str=''
 if(psswrd.length===0){
    alert("select at least one")
    inputval.value= 'select at least one'
    inputval.style.color='red'
}
})





    




