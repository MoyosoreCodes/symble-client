import React from 'react'
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';

export default function AuthSignup() {
  return (
    <div className='white-container'>
      {/* Header */}
      <div className="auth-hearder">
          <div className="symbleLogo">
            <img src={symbleLogo} alt="Symble logo" />
          </div>
          <h1 className='title'>
           Sign up
          </h1>

          <h1 className='red-text'>
              Already have an account?<span><a className='a-text' href="">Sign in</a></span>
          </h1>
        </div>
      {/* Header */}

      {/* form */}
      <div className="auth-form">
          <form>
            <label className='user-label' htmlFor="Email Address/Username">Email Address/Username</label>
            <input className='user-input' type="text" placeholder='Enter Username'/>

            <label className='sig-user-label' htmlFor="Username">Username</label>
            <input className='sig-user-input' type="text" placeholder='Username'/>

            <label className='sig-password-label-1' htmlFor="Password">Password</label>
            <input className='sig-password-input-1' type="Password" placeholder='Enter Password'></input>

            <label className='sig-password-label-2' htmlFor="Password">Confirm password</label>
            <input className='sig-password-input-2' type="Password" placeholder='Re-enter password'></input>

            <button className='sig-btn-signin' type='button'>
              <span className='sig-btn-text'> Sign in </span>
            </button>
          </form>
        </div>
      {/* form */}

      {/* line */}
      <hr className='sig-line-left'/>
          <span className='sig-line-text'>or sign up with</span>
        <hr className='sig-line-right'/>
      {/* line */}

      {/* auth-botton */}
        <img className='sig-google' src={Googleicon} alt=""/>
        <img className='sig-facebook'src={Facebookicon} alt=""/>
        <img className='sig-twitter' src={Twittericon} alt=""/>
      {/* auth-botton */}
    </div>
  )
}
