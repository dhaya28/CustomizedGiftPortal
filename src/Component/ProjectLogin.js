import React from 'react';
import './ProjectLogin.css';
import { Link } from 'react-router-dom';

export default function ProjectLogin() {
    return (
        <div style={{ paddingTop: 65 }}>
            <div className='split loginleft'>
                <img id='image' src='https://media.istockphoto.com/id/1136598403/vector/simple-logo-illustration-for-gift-shop-logo-design-emblem-design-concept.jpg?s=612x612&w=0&k=20&c=2pGNrfIFXvg-EUtT8MU6zU852b52QCBA7X-EScer6Cc='></img>
            </div>
            <div className='split loginright'>
                <div className='main'>
                    <center>
                        <img id='logo' src='https://media.istockphoto.com/id/1136598403/vector/simple-logo-illustration-for-gift-shop-logo-design-emblem-design-concept.jpg?s=612x612&w=0&k=20&c=2pGNrfIFXvg-EUtT8MU6zU852b52QCBA7X-EScer6Cc='></img>
                    </center>
                    <h2 >Gift Shop</h2><br></br>
                    <h3 style={{ paddingLeft: 37 }}>Sign in</h3>
                    <p style={{ paddingLeft: 37 }}>The key to happiness is to sign in.</p>
                    <div className='inform'>
                        <form>
                            <br></br>
                            <br></br>
                            <input type='text' placeholder='username'></input>
                            <br></br>
                            <br></br>
                            <br></br>
                            <input type='password' placeholder='password'></input>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button id='loginButton' >Login</button>
                        </form>
                        <p style={{ paddingLeft: 37 }}>Don't have an account?
                            <Link to='/signup'>Sign up</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
