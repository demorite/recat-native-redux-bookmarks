import React, {Component} from 'react';
import {Text, View, StatusBar} from "react-native";
import {connect} from "react-redux";
import Home from '../routes/home/home'
import Login from '../routes/auth/login '

const propTypes = {};

class App extends Component {
    componentWillMount() {
        StatusBar.setHidden(true);
    }

    render() {
        const {isLoggedIn} = this.props;

        return isLoggedIn ? <Home/> : <Login/>
    }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(App);
