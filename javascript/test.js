function foo (arg1, arg2){
    var result = [];
    result = arg1.push(...arg2);
    return arg1;
}
//arg1 =["hello", 1];
//arg2 =[" hi", 2];
var result = foo(["hello", 1], [" hi", 2]);
console.log(result)











// write a function that accepts 2 arg - arg1 and arg 2. arg is an array and arg 2 is also an array. your function should add these array an arry that has elements for