import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GobblePlatform from "./components/gobble/GobblePlatform";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GobbleState from "./context/gobble/gobbleState";
import AlertState from "./context/alert/AlertState";
function App() {
    return (
        <Router>
        <GobbleState>
            <AlertState>

                    <Navbar/>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path={'/about'} component={About}/>
                            <Route exact path='/gobble' component={GobblePlatform}/>
                        </Switch>
                    </div>

            </AlertState>

        </GobbleState>
        </Router>
    );
}

export default App;
