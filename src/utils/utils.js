const a = 100;
// console.log(module.exports);
// console.log(exports)

exports.a = 200;
// console.log(exports)
// console.log(module.exports);

function aA(){
    console.log("a")
}
function aB(){
    console.log("b");
}

module.exports  = {
aA,
aB
}