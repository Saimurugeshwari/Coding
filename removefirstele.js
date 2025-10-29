//4. How Remove the first element from an array in JavaScript?
function removefistele(arr, newitem){
    arr.shift(); 
    arr.unshift(newitem);
    return arr;
}
console.log(removefistele(['tea'], 'milk'));
console.log(removefistele(['apple', 'banana', 'cherry']));