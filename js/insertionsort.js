const t = ms => new Promise(res => setTimeout(res, ms))

async function insertionsort(){
    var bars=document.querySelectorAll(".bar")
    for(var i=1;i<bars.length-1;i++){
        var key=bars[i].style.height;
        var j=i-1;
        bars[i].style.background='red';
        while(j>=0 && parseInt(bars[j].style.height)>parseInt(key)){
            bars[j].style.background='green'
            await t(delay);
            bars[j+1].style.height=bars[j].style.height
            j--;
        }
        bars[j+1].style.height=key;
        await t(delay)
        bars[i].style.background='green';
    }
}

const insertbtn=document.querySelector(".insertion");

insertbtn.addEventListener('click',async function(){
    await insertionsort()
})