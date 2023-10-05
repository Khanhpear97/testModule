function tryRemoveFromArray(arr,index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let arr = [5,7,2,4,9];
console.log(tryRemoveFromArray(arr,4))