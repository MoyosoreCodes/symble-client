import React from 'react'
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';

function AuthLogin() {
  return (
    <div className='white-container'>
      {/* Header */}
        <div className="auth-hearder">
          <div className="symbleLogo">
            <img src={symbleLogo} alt="Symble logo" />
          </div>
          <h1 className='title'>
            Let's sign in
          </h1>

          <h1 className='red-text'>
              Don't have an account?<span><a className='a-text' href="">Sign up</a></span>
          </h1>
        </div>
      {/* Header */}

      {/* form */}
        <div className="auth-form">
          <form>
            <label className='user-label' htmlFor="Email Address/Username"> Email Address or Username</label>
            <input className='user-input' type="text" placeholder='Email Address or Username'/>

            <label className='password-label' htmlFor="Password">Password</label>
            <input className='password-input' type="Password" placeholder='Password'></input>
            <a className='rev-text' href="">Forgot password?</a>

            <button className='btn-signin' type='button'>
              <span className='btn-text'> Sign in </span>
            </button>
          </form>
        </div>
      {/* form */}  

      {/* line */}
        <hr className='log-line-left'/>
          <span className='log-line-text'>or sign in with</span>
        <hr className='log-line-right'/>
      {/* line */}

      {/* auth-botton */}
      <div className="cic-log-google">
        <img className='log-google' src={Googleicon} alt=""/>
      </div>
      <div className="cic-log-facebook">
        <img className='log-facebook'src={Facebookicon} alt=""/>
      </div>
      <div className="cic-log-twitter">
        <img className='log-twitter' src={Twittericon} alt=""/>
      </div>
      {/* auth-botton */}
    </div>
  )
}

export default AuthLogin;
