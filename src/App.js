import Clock from "./components/Clock.jsx";
import LoginControl from "./components/LoginControl.jsx";
import React from "react";
import Welcome from "./components/welcome.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import ReactDOM from "react-dom";
import { aA, aB } from "./utils/utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: false,
    };
  }
  goDetail = (name, e) => {
    console.log("外部事件", name, e);
  };
  addCart = (name, e) => {
    e.stopPropagation();
    console.log("点击加车，内部事件", name, e);
    this.a();
  };

  a = () => {
    this.setState({
      isToggleOn: true,
    });
    this.request().then((_) => {
      this.setState({
        isToggleOn: false,
      });
    });
  };
  request = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  render() {
    const { isToggleOn } = this.state;
    return (
      <div>
        <h1>Hello React & Webpack!</h1>
        {/* <Welcome name="Creator" value={123}/>
           
            <Clock name="clock1" />
            <Clock name="clock2" />
            <LoginControl /> */}
        {isToggleOn && <div>变量变化时候控制显示隐藏</div>}
        <ul>
          {["a", "b", "c"].map((name) => {
            return (
              <li key={name}>
                <div>
                  <p>{`I'm ${name}!`}</p>
                  <ShoppingList
                    goDetail={this.goDetail.bind(this, name)}
                    customize={
                      <div onClick={(e) => this.addCart(name, e)}>
                        hahah-自定义内容
                      </div>
                    }
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    //   this.setState({
    //       isLogin:true
    //   })
  }

  componentWillUnmount() {}
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
