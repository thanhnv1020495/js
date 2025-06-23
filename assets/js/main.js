function timUCLN(a,b) {
    if ( b > a) {
       const temp = a;
       a = b;
       b = temp;
    }

    while(b != 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
 console.log(timUCLN(48,60));



 function countGreaterThan (arr , value) {
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++) {
       if(arr[i] > value) {
        count ++;
       }
    }
    return count;
}

function alternateSum(arr) {
    let total = 0;
    for(let i = 0 ; i < arr.length;i++) {
        total += (i % 2 === 0) ? arr[i] : -arr[i];
    }
    return total;
}

function sumOfSquares (arr) {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

function filterEvensAndSum(arr) {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

function findLongestWord(arr) {
    let string = '';
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].length > string.length) {
            string = arr[i];
        }
    }
    return string;
}