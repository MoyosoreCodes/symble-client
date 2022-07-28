import React,{useState} from 'react'
import Symble from '../../../assets/S.svg';
import axios from 'axios';
import symbleLogo from '../../../assets/S.svg';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function AuthResetPassword() {
  // let {token} = useParams

  const [password, setPassword]= useState("")
  const [confirmPassword, setConfirmPassword]= useState("")
  const history = useHistory();

  const handleSubmit = async(e:any)=> {
    e.preventDefault()
    try {
      const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/reset-password',{confirmPassword:confirmPassword, password:password}
      );
      history.push('/login');
    } catch (error) {
      
    }

  }
  return (
    <div className="white-container">
      {/* header */}
        <div className="symbleLogo">
          <img src={symbleLogo} alt="Symble logo" />
        </div>
        <h1 className='rev-title'>
          Reset password
        </h1>
      {/* header */}

      {/* form */}
        <div className="auth-form">
          <form>
          <label className='reset-password-label-1' htmlFor="Password">New password</label>
            <input className='reset-password-input-1' type="Password" placeholder='Enter new password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            <label className='reset-password-label-2' htmlFor="Password">Confirm password</label>
            <input className='reset-password-input-2' type="Password" placeholder='Re-enter password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>

            <button className='reset-btn-signin' type='button' onClick={handleSubmit}>
              Reset password
            </button>
          </form>
        </div>
      {/* form */}
    </div>
  )
}
