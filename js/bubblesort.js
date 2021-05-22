const timer = ms => new Promise(res => setTimeout(res, ms))
var c=0;
async function bubblesort(){
    var bars=document.querySelectorAll(".bar")
    for(var i=0;i<bars.length-1;i++){
        for(var j=0;j<bars.length-i-1;j++){
            bars[j].style.background='red';
            bars[j+1].style.background='red';
            c++;
            update_comparisons(c);
            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
                 await timer(delay);
                 swap(bars[j],bars[j+1])
            }
            bars[j].style.background='yellow';
            bars[j+1].style.background='yellow';
        }
        bars[bars.length-1-i].style.background='green';
    }
    bars[0].style.background='green'
}

const bubblebtn=document.querySelector(".bubble");

bubblebtn.addEventListener('click',async function(){
    await bubblesort()
})