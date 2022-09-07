// 6,1,6,8,10,5,4,5,3,5,6,9,6,5
// 6,1,6,8,10,6 4,5,3,5,6,9,5,5
// 6,1,6,8,10,6,4,9,3,5,6,5,5,5

// 6,1,6,8,10,6,4,9,3,6,5,5,5,5

//
// target = 5
function arrayCommonElements(arr, target){
    let j = arr.length -1;

    for (let i = 0; i<arr.length; i++){
        if(arr[j] === target){
            j--
        }

        if(arr[i] === target){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            j--
        }

        if(i === j){
            break;
        }
    }

    return arr;
}

let arr = [6,1,6,8,10,5,4,5,3,5,6,9,6,5]
let target = 5

let result = arrayCommonElements(arr,target)

console.log(result)