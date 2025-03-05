//1 Q
arr =[123,45,677,78,34]
console.log(arr);
//2 Q
arr =[56,67,56,89,90]
console.log(arr[2]) 
//3 Q
arr =[34,56,78,90,234,5]
console.log("Intial data")
console.log(arr);
console.log("Updated data")
arr[1]=78;
console.log(arr);
//4 Q
arr=[34,56,78,465,78,23]
console.log(arr.length);
//5 Q
arr =[354,5556,5767,78,789,56]
arr.push(8)
console.log(arr)
// 6 Q
arr =[354,5556,5767,78,789,56]
arr.pop()
console.log(arr)
//7 Q
arr =[354,5556,5767,78,789,56]
for (var i = 0; i<=5; i++ ) {
    console.log(arr[i])
}
//8 Q
function arrayEight(array,sample){
    return array.includes(sample)
}
console.log(arrayEight([56,6,7,76,67,34] , 5))
console.log(arrayEight([34,56,67,67,34] , 3))
//9 Q
var arrNine = ['dup1','dup2','dup3','dup4']
var sample = arrNine.slice();
console.log(sample)
//10 Q
var arrTen = [263,455,66,556,566,656]
var chr = arrTen.join();
console.log(chr)