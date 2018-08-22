import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SuperstarDashBoard from './SuperstarDashBoard';

const deadC = () => (
    <p>This is it!</p>
);
class App extends Component
{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={SuperstarDashBoard} exact={true}/>
                    <Route path="/create" component={deadC}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;