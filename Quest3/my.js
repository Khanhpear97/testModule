let str1 = "new world";
let str2 = "Hello new world";

function checkStr (str1, str2) {
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    let check;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                check = true;
                break;
            } else {
                check = false;
            }
        }
    }
    return check;
}

console.log(checkStr(str1,str2))