
async function selectionSort() {
    const arr=document.querySelectorAll('.bar')
    var minIdx, temp,
        len = arr.length;
        var c=0;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        arr[i].style.background='red';
        await waitforme(delay);;
        for (var j = i + 1; j < len; j++) {
            c++;
            update_comparisons(c);
            if (parseInt(arr[j].style.height)<parseInt(arr[minIdx].style.height)) {

                minIdx = j;
                arr[minIdx].style.background="blue";
                await waitforme(delay);
            }
            arr[minIdx].style.background="yellow";
        }
        await waitforme(delay);
       swap(arr[minIdx],arr[i])
       arr[i].style.background="green";
       await waitforme(delay);
        console.log(arr);
    }

    return arr;
}

const selectbtn=document.querySelector(".selection")
selectbtn.addEventListener('click',async function(){
   await selectionSort();
})
