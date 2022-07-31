import React, {useState, useContext} from 'react'
import Symble from '../../../assets/S.svg';
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';


import Twittericon from '../../../assets/Twitter.svg';
import { login } from '../auth.service';
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { field_rules } from './auth-login.helper';
import { AuthContext } from '../auth.context';
import './auth-login.styles.css'

function AuthLogin() {
  const {setToken}:any = useContext(AuthContext)
  let history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState(false);
  


  const onSubmit = async (e:any) => {
    e.preventDefault()
    try {
      if(!email){
        setEmailError(true)        
      }
      if(!password){

      }
      const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/login',{email:email, password:password}
      )
      history.push("/cartegories1")
      console.log(response.data);
      const {token} = response.data
      setToken(token)
      console.log(token);
      
      
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
      <div className='page-container'>
        {/* Header */}
        <div >
        <div className='auth-logo'>
          <img src={symbleLogo} alt="Symble logo" />
          </div>
          <h1 className='auth-title'>
          Let's sign in
          </h1>
          <h1 className='auth-grey-text'>
          Don't have an account? <span><Link className='a-text' to="/signup">Sign up</Link></span>
          </h1>
        </div>
       <form>
        <div className='input-container'>
          <label className='input-label' htmlFor="Email">
            Email address
          </label>
          <input 
          placeholder='Enter email' 
          type='email' 
          className='input-field'
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        <div className='input-container'>
          <label
          className='input-label'
          htmlFor="Password"
          >
            Password
          </label>
          <div className='password-input-container'>
            <input
            className='input-field'
            placeholder='Enter password'
            type={showPassword?'text': 'password'}
            autoComplete='new-password'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
              />
              <div>
                <img src={showPassword? eyeslash: eye} alt="" className='eye' onClick={()=>setShowPassword(!showPassword)}/>
              </div>
          </div>
          <p className='forgot-password'>Forgot password?</p>
        </div>
        <button type='button' onClick={onSubmit} className='auth-cta'>
          <span className='auth-btn-text'> Sign in </span>
        </button>
      </form>
      {/* footer */}
      <div>
        <div className='auth-footer-title'>
          <hr className='footer-line'/>
          <p className='auth-footer-text'>or sign in with</p>
          <hr className='footer-line'/>
        </div>
        <div className='socials'>
          <a href='https://spray-dev.herokuapp.com/api/auth/google/signin'>
            <div>
            <img src={Googleicon} alt=""/>
            </div>
          </a>
          <div>
          <img src={Facebookicon} alt=""/>
          </div>
          <div>
          <img src={Twittericon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLogin;
