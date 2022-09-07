

// 6,5,7,9,4,0,2
function arraySumTwoNumbers(arr, target){
    for(let i =0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length-1; j++){
            if(arr[i] + arr[j] === target){
                return [ arr[i], arr[j]]
            }
        }
    }

    return []
}



let arr = [ 6,5,7,9,4,0,2]
let target = 10
let result = arraySumTwoNumbers( arr, target)

console.log(result)