import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Users, Result } from 'pages';
import { Helmet } from "react-helmet";
import Menu from 'components/Menu';
import Search from 'components/Search';

class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>React Router & SSR</title>
                </Helmet>
                <Search />
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/users" component={Users}/>
                <Route path="/api" component={Result}/>
            </div>
        );
    }
}

export default App;