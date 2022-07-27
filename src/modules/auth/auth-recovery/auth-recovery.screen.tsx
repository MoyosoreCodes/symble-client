import React,{useState} from 'react';
import Symble from '../../../assets/S.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default function AuthRecovery() {
  const history = useHistory();
  const [disabled, setDisabled]= useState(true)
  const [email, setEmail] = useState("")

  const onSubmit = async (e:any) => {
    e.preventDefault()
    try {
      if (email) {
        setDisabled(false)
      }
      const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/forgot-password',{email:email}
      )
      console.log(response.data);
      setEmail("");

      history.push('/login');
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
          <h1 className='rev-title'>
            Forgot password
          </h1>

          <h1 className='rev-red-text'>
            No worries, we’ll help you. We’ll send a password reset link to your inbox.
          </h1>
        </div>
      {/* Header */}

      {/* form */}
        <div className="auth-form">
          <form>
            <label className='rev-user-label' htmlFor="Email Address/Username">Email Address</label>
            <input className='rev-user-input' type="text" placeholder='Enter account email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <button className='rev-btn-signin' type='button'  onClick={onSubmit} disabled={disabled}>
              Send email
            </button>
          </form>
        </div>
      {/* form */}
    </div>
  )
}
