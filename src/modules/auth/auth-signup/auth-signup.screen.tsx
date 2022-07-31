import React,{useEffect, useState} from 'react'
import Symble from '../../../assets/S.svg';
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './auth-signup.styles.css'



export default function AuthSignup() {
  const history = useHistory();
  const [username, setUsername]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [password2, setPassword2]= useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)


  // const [disabled, setDisabled] = useState(true)

  // const handleGoogleSignup = async () =>{
  //   try {
  //     const response =await axios.post('https://spray-dev.herokuapp.com/api/users/google'
  //     );
  //   } catch (error) {
      
  //   }
  // }

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
    // <div>
    //   {/* Header */}
    //   <div className="auth-header">
    //       <div>
    //         <img src={symbleLogo} alt="Symble logo" />
    //       </div>
    //       <h1 className='title'>
    //        Sign up
    //       </h1>

    //       <h1 className='red-text'>
    //           Already have an account?<span><Link className='a-text' to="/login">Sign in</Link></span>
    //       </h1>
    //     </div>
    //   {/* Header */}

    //   {/* form */}
    //   <div className="auth-form">
    //       <form>

    //         <label className='user-label' htmlFor="Email Address/Username">Email Address</label>
    //         <input className='user-input' type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

    //         <label className='sig-user-label' htmlFor="Username">Username</label>
    //         <input className='sig-user-input' type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>

    //         <label className='sig-password-label-1' htmlFor="Password">Password</label>
    //         <input className='sig-password-input-1' type="Password" placeholder='Enter Password' autoComplete='new-password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>


    //         <label className='sig-password-label-2' htmlFor="password2">Confirm Password</label>
    //         <input className='sig-password-input-2' type="password" placeholder='Re-enter Password' value={password2} onChange={(e)=>setPassword2(e.target.value)}></input>


    //         <button className='sig-btn-signin' type='button' onClick={onSubmit}>
    //           <span className='sig-btn-text'> Sign in </span>
    //         </button>
    //       </form>
    //     </div>
    //   {/* form */}

    //   {/* line */}
    //   <hr className='sig-line-left'/>
    //       <span className='sig-line-text'>or sign up with</span>
    //     <hr className='sig-line-right'/>
    //   {/* line */}

    //   {/* auth-botton */}
    //   <a href="https://spray-dev.herokuapp.com/api/auth/google/signup">
    //     <img className='sig-google' src={Googleicon} alt=""/>
    //   </a>
    //     <img className='sig-facebook'src={Facebookicon} alt=""/>
    //     <img className='sig-twitter' src={Twittericon} alt=""/>
    //   {/* auth-botton */}
    // </div>
    <div className='page-container'>
    {/* Header */}
    <div >
    <div className='auth-logo'>
      <img src={symbleLogo} alt="Symble logo" />
      </div>
      <h1 className='auth-title'>
      Sign up
      </h1>
      <h1 className='auth-grey-text'>
      Already have an account? <span><Link className='a-text' to="/login">Sign in</Link></span>
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
      <label className='input-label' htmlFor="Email">
        Username
      </label>
      <input 
      placeholder='Enter username' 
      type='email' 
      className='input-field'
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}
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
                <img src={showPassword? eyeslash: eye} 
                alt="" className='eye' 
                onClick={()=>setShowPassword(!showPassword)}/>
              </div>
          </div>
        </div>
        <div className='input-container'>
          <label
          className='input-label'
          htmlFor="Password"
          >
            Confirm Password
          </label>
          <div className='password-input-container'>
            <input
            className='input-field'
            placeholder='Re-enter password'
            type={showPassword1?'text': 'password'}
            autoComplete='new-password'
            value={password2} 
            onChange={(e)=>setPassword2(e.target.value)}
              />
              <div>
                <img src={showPassword1? eyeslash: eye} alt="" className='eye' onClick={()=>setShowPassword1(!showPassword1)}/>
              </div>
          </div>
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
