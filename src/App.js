import React from 'react';
import background from './bg.png';
import logo from './logo.png';
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { UserProvider } from './contexts/UserContext';
import FanSignUp from './components/FanSignUp';
import TalentSignUp from './components/TalentSignUp';
function App() {

    const style = {
        bodyContent: {
            background: `url(${background}) center center / cover no-repeat fixed`,
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            // display:'flex',
            // justifyContent: 'center',
            // alignItem: 'center',

        },
        logoStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
        },
        content: {
            textAlign: 'center',
            color: 'white'
        },
        center: {
            textAlign: 'center'
        },
        button1: {
            background: 'red'
        }//ban code chay o day any` :v the h sao ? dcm ban muon' cho sang ben trai' nhu nao` tuc la cai app nay van giu nguyen nhma cai ben kia thi cho no mac dinh
    }
    return (
        <UserProvider>
            <Router>
                <div style={style.bodyContent}>
                    <div style={style.before}>
                        <div style={style.logoStyle}>
                            <a style={{paddingTop:'43px'}} href="/"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div >

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/fan" component={FanSignUp} />
                            <Route exact path="/talent" component={TalentSignUp} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </UserProvider>
    )
}

export default App