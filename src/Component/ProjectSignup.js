import React from 'react';
import '../Style/ProjectSignup.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import img2 from '../Asserts/img2.png'
import img3 from '../Asserts/img3.png';
import { useContext } from "react";
import {MyContext} from './ProjectContext'

export default function ProjectSignup() {
    const {InputUsername} = useContext(MyContext)
    return (
        <div className='sign'>
            <div className='split right'>
                <img id='image' src={img3}></img>
            </div>
            <div className='split left'>
                <div className='main'>
                    <center>
                    <Avatar id='logo' alt="i" src={img2} />
                    </center>
                    <h2 >Gift Shop</h2>
                    <div className='inform'>
                    <h3>Sign up</h3>
                    <p>The way to happiness is to sign up.</p>
                        <form>
                            <br></br>
                            <input type='text' placeholder='Username' ></input>
                            <br></br>
                            <br></br>
                            <input type='password' placeholder='New Password'></input>
                            <br></br>
                            <br></br>
                            <input type='number' placeholder='Age'></input>
                            <br></br>
                            <br></br>
                            <input type='email' placeholder='Email'></input>
                            <br></br>
                            <br></br>
                            <input type='phonenumber' placeholder='Mobile Number'></input>
                            <br></br>
                            <br></br>
                            <button id='signupButton'>Sign up</button>
                        </form>
                        </div>
                        <center>
                        <p>Already have an account?
                        <Link to='/'>Log in</Link>
                        </p>
                        </center>
                </div>
            </div>
        </div>
    )
}
