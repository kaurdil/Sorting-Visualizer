const t2 = ms => new Promise(res => setTimeout(res, ms))

async function selectionSort() {
    const arr=document.querySelectorAll('.bar')
    var minIdx, temp,
        len = arr.length;
        var c=0;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        arr[i].style.background='red';
        await t2(delay);
        for (var j = i + 1; j < len; j++) {
            if (parseInt(arr[j].style.height)<parseInt(arr[minIdx].style.height)) {

                minIdx = j;
                arr[minIdx].style.background="blue";
                await t2(delay);
            }
            arr[minIdx].style.background="yellow";
        }
        await t2(delay);
       swap(arr[minIdx],arr[i])
       arr[i].style.background="green";
        await t2(delay);
        console.log(arr);
    }

    return arr;
}

const selectbtn=document.querySelector(".selection")
selectbtn.addEventListener('click',async function(){
   await selectionSort();
})
