//1

function processNumbers( a ,b ,callback ){
      return callback(a ,b);
}
var output= processNumbers( 3, 4, function( x, y){
     return x+y;
})
console.log("The sum of 3 and 4 is",output)

//2

function greet(callback) {
      return callback("alice!")
}
var result=greet(function(name){
      return "Hello,"+" "+ name
})
console.log("The result is",result)

//3

function calculate(i,j,callback){
      return callback(i,j)
}
var callit = calculate(10,5,function(x , y){
      return y-x;
});
console.log(" The Difference is:",callit)