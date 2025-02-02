import React from 'react';
import {LoginButton,LogoutButton} from './Button.jsx';
import Greeting from './Greeting.jsx'

class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      // handleLogoutClick() {
      //   this.setState({isLoggedIn: false});
      // }
      handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
      }
      render() {
        const isLoggedIn = this.state.isLoggedIn;
    
        let button = null;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
    
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
        );
      }
}
export default LoginControl;