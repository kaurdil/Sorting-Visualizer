//select size slider
let arraySize=document.querySelector("#arr_sz")

//add eventlistener to update arraysize
arraySize.addEventListener('input',function(){
    createArray(parseInt(arraySize.value))
})

let delay=260;
let delayElement = document.querySelector("#speed_input")

// event listener to update delay time
delayElement.addEventListener('input',function(){
    console.log(delay+" "+delayElement.value);
    delay=320-parseInt(delayElement.value);
})


createArray();

// creating Array of bars
function createArray(nbars=50){
    deletebars();
    array=[];
    for(let i=0;i<nbars;i++){
        array.push(Math.floor(Math.random()*250)+1);
    }
   const bars=document.querySelector("#bars")
   for(var i=0;i<nbars;i++){
       var bar=document.createElement("div")
       bar.style.height=`${array[i]*2}px`
       bar.classList.add('bar');
       bar.classList.add('flex-item')
       bars.appendChild(bar)
    
   }
}

function deletebars(){
    const bar=document.querySelector("#bars");
    bar.innerHTML='';
}


// swapping
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
var count_var=0;

// comparisons
function update_comparisons(count_var){
    document.getElementById("count").innerHTML = count_var;
}


// function for delaying loop
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}