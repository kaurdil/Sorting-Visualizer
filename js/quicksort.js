const t3 = ms => new Promise(res => setTimeout(res, ms));


async function quickSort(input,si,ei){
    if(ei-si>0){
    var pos=await partition(input,si,ei);
    console.log(pos);
    await quickSort(input,si,pos-1);
    await quickSort(input,pos+1,ei);
    }
}
async function partition(input,si,ei){
    var pivot= si;
    var count=0;
    for(var i=si;i<=ei;i++){
        if( parseInt(input[i].style.height)<pivot){
             count++;
        }
    }
    console.log(count);
    await t3(delay);
    swap(input[si],input[si+count])
    
    var i= si;
     var j=ei;

        pivot=input[si+count]
        input[si+count].style.background='blue';
        while(i<si+count && j>si+count){
            if(parseInt(input[i].style.height)<parseInt(pivot)){
                await t3(delay);
                i++;
            }
            else if(parseInt(input[i].style.height)>=pivot){
                await t3(delay);
                j--;
            }
            else{
                await t3(delay);
               swap(input[i],input[j])
            }
        }
    console.log(input);           
    return si+count;   
}

const quickbtn=document.querySelector(".quick")
quickbtn.addEventListener('click',async function(){
    var bars=document.querySelectorAll(".bar");
    var l=0;
    var r=bars.length-1;
    await quickSort(bars,l,r);
})
