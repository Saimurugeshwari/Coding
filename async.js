// is Js async or sync language ? explain with example

// async is there no hard wait or block the code excution

console.log('Start');
console.log('2nd line');

setTimeout(function(){
    console.log('this 3rd line');
}, 2000);

console.log('4th line');
console.log('End');