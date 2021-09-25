
async function merge(bars,l,mid,r){
    //range of first half and create array for it
    const r1=mid-l+1;
    const a1=new Array(r1);
    //range of second half and create array for it
    const r2=r-mid
    const a2=new Array(r2);

    // highlight the first half and add it into a1
    for(var i=0;i<r1;i++){
        await waitforme(delay);
        bars[l+i].style.background="pink";
        a1[i]=bars[l+i].style.height;
    }
     // highlight the second half and add it into a2
     for(var i=0;i<r2;i++){
        await waitforme(delay);
        bars[mid+i+1].style.background="orange";
        a2[i]=bars[mid+i+1].style.height;
    }
    //iterate both arrays and make changes in the original bars
    var i=0;
    var j=0;
    var k=l;
    while(i<r1 && j<r2){
        if(parseInt(a1[i])<parseInt(a2[j])){
            bars[k].style.height=a1[i];
            await waitforme(delay);
            bars[k].style.background="green";
            i++;
            k++;
        }
        else{
            bars[k].style.height=a2[j];
            await waitforme(delay);
            bars[k].style.background="green";
            j++;
            k++;
        }
    }
    while(i<r1){
        bars[k].style.height=a1[i];
        await waitforme(delay);
        bars[k].style.background="green";
        i++;
        k++;
    }
    while(j<r2){
        bars[k].style.height=a2[j];
        await waitforme(delay);
            bars[k].style.background="green";
            j++;
            k++;
    }



}
async function mergeSort(bars,p,r){
  if(p>=r){
      return;
  }
  var mid=p + Math.floor((r - p) / 2);
  await mergeSort(bars,p,mid);
  await mergeSort(bars,mid+1,r);
  await merge(bars,p,mid,r);
}

const mergebtn=document.querySelector(".merge");

mergebtn.addEventListener('click',async function(){
    var bars=document.querySelectorAll(".bar")
    var p=0;
    var r=parseInt(bars.length)-1;
    await mergeSort(bars,p,r)
})