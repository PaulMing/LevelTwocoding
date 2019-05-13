console.log('wo shi test');
var a = 123;
var b = 'abc';


// module.exports = a;
// module.exports = b;
console.log(module);
console.log(module.exports);
// 那接收的时候，b会覆盖a


// module是对象,exports也是对象
module.exports.a = a;
module.exports.b = b;


// module是对象，exports是其的属性，其也是对象 ->初始值空对象
exports.a = a;
exports.b = b;

// module.exports和exports有什么区别？
console.log(module.exports);//{}
console.log(exports);//{}
console.log(module.exports == exports);//true; -> 说明两者指向同一个空间

// 当两者空间指向发生改变后，导出的永远都是module.exports上的值 -> 建议使用moudle.exports
exports.a = a;
module.exports.b = b;

exports = a;
module.exports = b;//最终只会导出b




