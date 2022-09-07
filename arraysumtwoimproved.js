// 6,5,7,9,4,0,2
// target 10

function arraytwoSum(arr, target){
    var set = new Set()
    for (let i = 0; i< arr.length; i++){
        let num = arr[i];
        let diff = target - num
        if(set.has(diff)){
            return [ num, diff]
        }else{
            set.add(num)
        }
    }

    return []
}


let arr = [ 6,5,7,9,4,0,2]
let target = 50
let result = arraytwoSum( arr, target)

console.log(result)