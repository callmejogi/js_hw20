// const arr = [1,2,3,4,5,'Jora'];
const arr = ['Jora','Tom','Paul','Rob','Fox'];

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

const cb = function(element,index,array){
    for(let i = 0; i <= arr.length ;i++){
        if (index === arr[i]) return true;
        if (array[i] === element) return element;
    }
}

function find(callback){
    
    return callback(element,index,array)
}

cb('Jora',3,arr);
console.log(find(cb))

// console.log(cb('Jora',3,arr));
// console.log(cb('Dick',7,arr));
// console.log(cb('Tom',3,arr))

// find()