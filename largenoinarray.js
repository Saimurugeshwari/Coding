//3. Find the largest number in an array in JavaScript.

function largestnoinarray(arr){
    let largest = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];

        }
    }
    return largest;
}
console.log(largestnoinarray([1,2,3,4,5]));

//using math operation

function findlarge(arr){
    return Math.max(...arr);
}
console.log(findlarge([100,66,55,22,11]))

