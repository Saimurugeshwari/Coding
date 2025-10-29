function varTest() {
    var x =1;
    if(true) {
        var x =2;
        console.log(x); // this will print 2
    }
    console.log(x);
}
varTest();

function letTest() {
    x = 1;
    if(true) {
        let x = 2;
        y = 3;
        console.log(x);  // this will print 2
    }
    console.log(y);
    console.log(x); //  this will  print 1
}
letTest();

function constTest() {
    const x =1;
    if(true) {
        const x =2;
        console.log(x); // this will print 2
    }
}