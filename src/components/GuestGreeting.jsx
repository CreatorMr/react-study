import React from 'react';

class GuestGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    render(){
        return (
            <div>
                <h1>Hello,游客</h1>
                <h3>登录时间为{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
export default GuestGreeting;