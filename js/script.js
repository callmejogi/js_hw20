// const arr = [1,2,3,4,5,'Jora'];


// function indexOf(arr,val,fromIndex = 0){
//     if (fromIndex >= arr.length) return -1;

//     for(let i = fromIndex; i <= arr.length ;i++){
//         if (arr[i] === val) return i;
//     }

//     return -1;
// }


// console.log(indexOf(arr,'Jora',10));
// console.log(indexOf(arr,'Jora'));

// function lastIndexOf(arr,val,fromIndex = arr.length){
//         if (fromIndex > arr.length) fromIndex = arr.length;
//         if (fromIndex < 0) fromIndex = 0;

//         for(let i = fromIndex; i >= 0 ;i--){
//         if (arr[i] === val) return i;
//         }

//     return -1;
// }

// console.log(lastIndexOf(arr,3));
// console.log(lastIndexOf(arr,1,2));
// console.log(lastIndexOf(arr,1,-2));
// console.log(lastIndexOf(arr,5,10));

const arr = ['Jora','Tom','Paul','Rob','Fox'];

// function find(arr,callback){
//     for(let i = 0; i < arr.length ;i++){
        
//         if (callback(arr[i],i,arr)) return arr[i];
//     }
// }

// console.log(find(
//     arr,
//     item => item === 'Fox'
// ))

// const findIndex = (arr,callback) => {
//     for(let i = 0; i < arr.length ;i++){
//         if (callback(arr[i],i,arr)) return i;
//     }

//     return -1;
// }

// console.log(findIndex(
//     arr,
//     item => item === 'Jora'
// ))


// const includesItem = (arr,searchElement,fromIndex = 0) => {
//     if (fromIndex >= arr.length) return false;

//     for(let i = fromIndex; i <= arr.length ;i++){
//         if (arr[i] === searchElement ) return true;
//     }

//     return false;
// }

// console.log(includesItem(arr,'Tom'));
// console.log(includesItem(arr,'Jimmy'));
// console.log(includesItem(arr,'Tom',7));

// function some(arr,callback){
//     for(let i = 0;i < arr.length ; i++){
//         if (callback(arr[i],i,arr)) return true;
//     }

//     return false
// }

// console.log(some(arr,check => check === 'Jora'));

function every(arr,callback){
    for(let i = 0;i < arr.length ; i++){
        if (!callback(arr[i],i,arr)) return false;
    }

    return true
}


const arr1 = [20,30,40,40,60];

console.log(every([2,2,3,4],item => item > 1));
console.log(every([20,30,40,40,60],item => item > 10));
console.log(every([20,30,40,40,2],item => item > 10));

// function forEach(arr,callback){
//     for (let i = 0; i < arr.length; i++){
//         return callback(arr[i],i,arr);
//     }
// }

// console.log(forEach(arr, item => item**2))