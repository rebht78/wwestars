import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';



class Menu extends Component
{
    render() {
        return (
            <header className="tc">
                <h1 className="heading">WWE Superstar</h1>
                <nav class="bt bb mw7 center mt4 ma4">
                    <NavLink className="f6 fw8 f5-l link bg-animate black-80 hover-bg-lightest-blue  dib pa3 ph4-l" to="/" exact={true}>Dashboard</NavLink>
                    <NavLink className="f6 fw8 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/create">Create Superstar</NavLink>
                    <NavLink className="f6 fw8 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/help">Help!</NavLink> 
                </nav>
               
            </header>
        );
    }
}

export default Menu;