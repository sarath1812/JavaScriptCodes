function minMax(array){
let arr=array
low =Math.min(...arr)
high=Math.max(...arr)
console.log(`The lowest is  ${low} and  the highest is ${high}`);
}

minMax([1,2,3,4,5,6])