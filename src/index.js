import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));


// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
  
//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };
  
//   const element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );
// //   function tick(){
//       const element1 = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//       );
//       ReactDOM.render(
//           element1,
//           document.getElementById('root')
//       )
//   }
//   setInterval(tick,1000)
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );//最后负责渲染的放在最后否则不能在页面展示出来


// //组件使用
// function Welcome(props){
//     return <h1>hello,{props.name}</h1>
// }
// const element2 = <Welcome name="Creator"/>;
// ReactDOM.render(
//     element2,
//     document.getElementById('root')
// )