function mergeSort2(sortedArr1, sortedArr2){
    let p1=0;
    let p2=0;
    let res = []
    while(p1 < sortedArr1.length && p2 < sortedArr2.length){
        if(sortedArr1[p1] < sortedArr2[p2]){
            res.push(sortedArr1[p1]);
            p1++;
        } else {
            res.push(sortedArr2[p2]);
            p2++;
        }
        while(p1 < sortedArr1.length){
            res.push(sortedArr1[p1]);
            p1++;
        }
        while(p2 < sortedArr2.length){
            res.push(sortedArr2[p2]);
            p2++;
        }
    }
    return res;
}

let result = mergeSort2([4,6,7],[1,5]);
console.log(result);