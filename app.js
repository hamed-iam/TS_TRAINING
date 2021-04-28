var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log('Result: ' + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
printResult(add(5, 10));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(20, 40, function (result) {
    console.log(result);
});
