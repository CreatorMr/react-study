import React from 'react';

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            date: new Date(),
        }
    }

    render(){
        return (
            <div>
                <h1>Hello,欢迎您，VIP{this.state.name}</h1>
                <h3>登录时间为{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
export default UserGreeting;