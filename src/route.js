import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App'
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        );
    }
}
export default Router;