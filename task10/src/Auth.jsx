import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoading: false,
        };
    }

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };
    
    onLogin = () => {
        this.setState({
            isLoading: true,
        });
        setTimeout(() => {
            this.setState({
                isLoggedIn: true,
                isLoading: false,
            });
        }, 2000)
    };

    render() {
        const {isLoggedIn, isLoading} = this.state;
        if (isLoading) {
            return <Spinner size="16"/>;
        }
        if(isLoggedIn) {
            return <Logout handleLogout={this.onLogout} />;
        }
        return <Login handleLogin={this.onLogin} />;
    }
}

export default Auth;
