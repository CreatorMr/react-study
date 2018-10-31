import React from 'react';
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    );
}
export  {
    LoginButton,
    LogoutButton
} 
// module.exports = {
//     LoginButton,
//     LogoutButton
// }


/* 
exports、module.exports和export、export default

require: node 和 es6 都支持的引入
export / import : 只有es6 支持的导出引入
module.exports / exports: 只有 node 支持的导出
node遵循的事CommonJs 

CommonJS定义的模块分为：模块标识module、模块定义exports、模块引用require
在node执行的时候，会给一个文件内生成module和exports对象
而module又有一个exports属性，所以之间的关系：
exports = module.exports = {};
由于utils.js
其实require导出的内容是module.exports的指向的内存块内容，并不是exports的。
区分他们之间的区别就是 exports 只是 module.exports的引用，辅助后者添加内容用的。

为避免糊涂，尽量都用 module.exports 导出，然后用require导入。


在ES6模块中
export 和 export default    import a from ..,import {a} from ..

export与export default均可用于导出常量、函数、文件、模块等
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在导入时要加{ }，export default则不需要
export能直接导出变量表达式，export default不行。


*/