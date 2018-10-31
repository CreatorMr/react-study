/* import React from 'react';

function Clock(props) {
    return (
        <div>
            <h1>Hello, Clock!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Clock; */
import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        console.log(">>>>>>>>>>>>")
        console.log(props)
        super(props)
        this.state = {
            date: new Date(),
            isToggleOn: false
        }
        // 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
        // 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }
    tick() {
        /*
                //此代码不会重新渲染组件
                构造函数是唯一初始化this.state的地方
                状态更新可能是一步的：React 可以将多个setState() 调用合并成一个调用来提高性能。
                this.setState({
                    counter: this.state.counter + this.props.increment----错误的
                })
                // Correct---使用箭头函数或者常规函数均可以
                请使用第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数
                this.setState((prevState, props) => ({
                    counter: prevState.counter + props.increment
                }));

                状态更新合并：当你调用setState的时候，React会将你提供的对象合并到当前状态
         */
        this.setState({
            date: new Date()
        });
    }
    ActionLink(date,e) {
        e.preventDefault();
        console.log(e)
        console.log('The link was clicked.');
        console.log(date)
    }
    handleClick(date) {
        /* 
        如果不在constructor中绑定this，那么此处的this为undefined
         */
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log("当前点击的打印时间" + " " + date)
    }
    //属性初始化器，需要bable转译
    // handleClick = () =>{
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    render() {
        return (
            <div>
                <h1>Hello, Clock!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.ActionLink.bind(this,this.state.date)}>停止当前的计时器</button>
                {/* 推荐 */}
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {/* 没有使用属性初始化器语法，绑定this
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                
            </div>
        );
    }
}
export default Clock; 