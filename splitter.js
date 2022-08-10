
/////Second Attempt////
function splitter(arr, num) {
    //Create empty array to push to
    arrrayOfArrays = [];
    //Create while loop to iterate over array
    while (arr.length > num){
    //Splice (returns selected elements for given indexes)
    var nestedArray = arr.splice(0, num);
    //How do I get the last number that is not less than the number?...
    //Push selection to empty array declared arrayOfArrays
    nestedArray.push(arrrayOfArrays)
    }
}
    
const arr = [1,2,3,4,5,6,7,8,9,10]
const num = 3
console.log(arrrayOfArrays)
console.log(splitter(arr, num))


// Write the splitter function that: 

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

    // Subarrays cannot have a length of > num
    // sub array CAN have a length that is <= num

////First Attempt
// function splitter(arr, num) {
//     arrrayOfArrays = [];
//     for (var i = 0; i < arr.length; i++){
//         var arrOfArr1 = arr.slice(0,2);
//         var arrOfArr2 = arr.slice(3,5);
//         var arrOfArr3 = arr.slice(6,8);
//         var arrOfArr4 = arr.push(9);
//         arr = arr.concat(arrOfArr1, arrOfArr2, arrOfArr3, arrOfArr4);
//         arr.push(concattedArray)
//     }
//     return concattedArray;
// }
// console.log(arrrayOfArrays)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const num = 3

// should return [[1,2,3], [4,5,6], [7,8,9], [10]]

//console.log(splitter(arr, num))
