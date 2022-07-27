import React, {useState} from 'react'
import Symble from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';
import { login } from '../auth.service';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const onSubmit = async (e:any) => {
    e.preventDefault()
    try {
      const response =await axios.post('https://spray-dev.herokuapp.com/api/users/auth/',{email:email, password:password}
      )
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className='auth-container'>
      {/* Header */}
        <div className="auth-hearder">
          <div className="symble">
            <img src={Symble} alt="Symble logo" />
          </div>
          <h1 className='title'>
            Let's sign in
          </h1>

          <h1 className='red-text'>
              Don't have an account?<span><Link className='a-text' to="/signup">Sign up</Link></span>
          </h1>
        </div>
      {/* Header */}

      {/* form */}
        <div className="auth-form">
          <form>
            <label className='user-label' htmlFor="Email Address/Username"> Email Address or Username</label>
            <input className='user-input' type="text" placeholder='Email Address or Username' value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label className='password-label' htmlFor="Password">Password</label>
            <input className='password-input' type="Password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='new-password'/>
            <Link to="/recovery"className='rev-text' href="">Forgot password?</Link>

            <button className='btn-signin' type='button' onClick={onSubmit}>
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
