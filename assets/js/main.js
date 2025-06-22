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
