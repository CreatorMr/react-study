import React from 'react';
function Welcome(props) {
    console.log('打印props')
    console.log(props)
    return (
        <div>
            <h1>hello,{props.name}</h1>
            {/* <h6>{props.date.toLocaleTimeString()}</h6> */}
        </div>
    );
}

export default Welcome;