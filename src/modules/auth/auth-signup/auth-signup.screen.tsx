import React,{useEffect, useState} from 'react'
import Symble from '../../../assets/S.svg';
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function AuthSignup() {
  const history = useHistory();
  const [username, setUsername]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [password2, setPassword2]= useState("")
  // const [disabled, setDisabled] = useState(true)



  const onSubmit = async (e:any) => {
    e.preventDefault()
    try {
      const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/register',{username:username,email:email, password:password}
      );
      setEmail("");
      setPassword("");
      setPassword2("");
      setUsername("");
      history.push('/login');


      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  };
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
              Already have an account?<span><Link className='a-text' to="/login">Sign in</Link></span>
          </h1>
        </div>
      {/* Header */}

      {/* form */}
      <div className="auth-form">
          <form>

            <label className='user-label' htmlFor="Email Address/Username">Email Address</label>
            <input className='user-input' type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label className='sig-user-label' htmlFor="Username">Username</label>
            <input className='sig-user-input' type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>

            <label className='sig-password-label-1' htmlFor="Password">Password</label>
            <input className='sig-password-input-1' type="Password" placeholder='Enter Password' autoComplete='new-password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>


            <label className='sig-password-label-2' htmlFor="password2">Confirm Password</label>
            <input className='sig-password-input-2' type="password" placeholder='Re-enter Password' value={password2} onChange={(e)=>setPassword2(e.target.value)}></input>


            <button className='sig-btn-signin' type='button' onClick={onSubmit}>
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
      <a href='https://spray-dev.herokuapp.com/api/users/google/'>
        <img className='sig-google' src={Googleicon} alt="" />
      </a>
        <img className='sig-facebook'src={Facebookicon} alt=""/>
        <img className='sig-twitter' src={Twittericon} alt=""/>
      {/* auth-botton */}
    </div>
  )
}
