import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../app/landing-page';
import PortofolioPage from '../../app/portofolio-page';
import BlogDetail from '../../app/BlogDetail';
import Blog from '../../app/Blog';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/portofolio" component={PortofolioPage}/>
                <Route path="/blog/articleId" component={BlogDetail} />
                <Route path="/blog" component={Blog}/>
            </Switch>
        );
    }
}

export default Router;