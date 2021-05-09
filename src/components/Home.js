import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const style = {
    content: {
        textAlign: 'center',
        color: 'white',
    },
    welcomeContent: {
        width: '100%',
        height: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSignIn: {
        padding: '10px 30px',
        textDecoration: 'none',
        background: '#2F9A4C',
        borderRadius: '5px',
        margin: '10px',
        color:'white'
    },
    btnSignUp: {
        padding: '10px 30px',
        textDecoration: 'none',
        background: '#f23037',
        borderRadius: '5px',
        margin: '10px',
        color:'white'
    }
}
function Home() {
    return (
        <>
            <div style={style.welcomeContent}>
                <div style={style.content}>
                    <h1>THE WORLD'S #1 PLATFORM</h1>
                    <br />
                    <h1 style={{padddingBottom:'40px'}}>FOR FANS AND THEIR IDOLS TO CONNECT</h1>
                    <div style ={{marginTop:'20px'}}> 
                        <a style={style.btnSignUp} href="/signup">
                            <span >Sign Up</span>
                        </a>
                        <Link style={style.btnSignIn} to="/login"  ><span >Login</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
