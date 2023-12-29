import React, { useContext, useState } from 'react';
import '../Style/ProjectLogin.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import img2 from '../Asserts/img2.png';
import img3 from '../Asserts/img3.png';
import { MyContext } from './ProjectContext';
import { useNavigate } from 'react-router-dom';

export default function ProjectLogin() {
    const navigate = useNavigate();
    const loginButton = () => {
        login( username );
        console.log(username);
        navigate('/home')
    }
    const { login, InputUsername } = useContext(MyContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div style={{ paddingTop: 65 }}>
            <div className='split1 loginleft'>
                <img id='image1' src={img3}></img>
            </div>
            <div className='split1 loginright'>
                <div className='main1'>
                    <center>
                        <Avatar id='logo' alt="i" src={img2} />
                    </center>
                    <h2 style={{ textAlign: "center" }}>Gift Shop</h2><br></br>
                    <h3 style={{ paddingLeft: 37 }}>Sign in</h3>
                    <p style={{ paddingLeft: 37 }}>The key to happiness is to sign in.</p>
                    <div className='inform1'>
                        <form>
                            <br></br>
                            <br></br>
                            <input id='ip' type='text' placeholder='username' required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                            <br></br>
                            <br></br>
                            <br></br>
                            <input id='ip' type='password' placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button id='loginButton1' onClick={loginButton}>Login</button>
                        </form>
                        <p style={{ paddingLeft: 37 }}>Don't have an account?
                            <Link to='/signup'>Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
