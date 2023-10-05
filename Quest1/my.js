let arr1 = [7, 8, 19, 12, 6, 19, 24, 24, 32, 16];

function findThirdMax (arr) {
    let max = arr[0];
    let secondmax = arr[0];
    let thirdmax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondmax = max;
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max && arr[i] > secondmax) {
            thirdmax = secondmax;
            secondmax = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < secondmax && arr[i] > thirdmax) {
            thirdmax = arr[i];
        }
    }
    alert('Số lớn thứ 3 trong mảng là: ' + thirdmax);
}

findThirdMax(arr1);