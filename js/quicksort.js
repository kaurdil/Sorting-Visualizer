
async function partition(ele, l, r){
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        // pause
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pause
            await waitforme(delay);;
        }
       
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
   
    ele[i].style.background = 'green';

    

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickbtn=document.querySelector(".quick")
quickbtn.addEventListener('click',async function(){
    var bars=document.querySelectorAll(".bar");
    var l=0;
    var r=bars.length-1;
    await quickSort(bars,l,r);
})
