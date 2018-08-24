import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SuperstarDashBoard from '../containers/SuperstarDashBoard';
import SuperstarForm from '../components/SuperstarForm';
import Menu from '../components/Menu';

class AppRouter extends Component
{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Switch>
                        <Route path="/" component={SuperstarDashBoard} exact={true}/>
                        <Route path="/create" component={SuperstarForm}/>
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}

export default AppRouter;