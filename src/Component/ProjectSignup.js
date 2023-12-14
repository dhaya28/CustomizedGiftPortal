import React from 'react'
import './ProjectSignup.css'
import { Link } from 'react-router-dom'

export default function ProjectSignup() {
    return (
        <div className='sign'>
            <div className='split right'>
                <img id='image' src='https://media.istockphoto.com/id/1136598403/vector/simple-logo-illustration-for-gift-shop-logo-design-emblem-design-concept.jpg?s=612x612&w=0&k=20&c=2pGNrfIFXvg-EUtT8MU6zU852b52QCBA7X-EScer6Cc='></img>
            </div>
            <div className='split left'>
                <div className='main'>
                    <center>
                        <img id='logo' src='https://media.istockphoto.com/id/1136598403/vector/simple-logo-illustration-for-gift-shop-logo-design-emblem-design-concept.jpg?s=612x612&w=0&k=20&c=2pGNrfIFXvg-EUtT8MU6zU852b52QCBA7X-EScer6Cc='></img>
                    </center>
                    <h2 >Gift Shop</h2>
                    <div className='inform'>
                    <h3>Sign up</h3>
                    <p>The way to happiness is to sign up.</p>
                        <form>
                            <br></br>
                            <input type='text' placeholder='Username'></input>
                            <br></br>
                            <br></br>
                            <input type='text' placeholder='New Password'></input>
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
                        <Link to='/login'>Sign in</Link>.
                        </p>
                        </center>
                </div>
            </div>
        </div>
    )
}
