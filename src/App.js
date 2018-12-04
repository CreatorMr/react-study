import Clock from './components/Clock.jsx'
import LoginControl from './components/LoginControl.jsx'
import React from 'react';
import Welcome from './components/welcome.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import ReactDOM from 'react-dom';
import {aA,aB} from './utils/utils.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            isToggleOn: false
        }
    }
    render() {
        return <div>
            <h1>Hello React & Webpack!</h1>
            <Welcome name="Creator" value={123}/>
           
            <Clock name="clock1" />
            <Clock name="clock2" />
            <LoginControl />
            <ShoppingList />
            <ul>
                {
                    ['a', 'b', 'c'].map(name => <li key={name}>{`I'm ${name}!`}</li>)
                }
            </ul>

        </div>
    }
    
    componentDidMount() {
    //   this.setState({
    //       isLogin:true
    //   })
   
    }
  
    componentWillUnmount() {
  
    }
  
}


export default App;

//ES6写法
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }