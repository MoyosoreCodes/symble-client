import React from 'react';
import symbleLogo from '../../../assets/S.svg';


export default function AuthRecovery() {
  return (
    <div className='auth-container'>
      {/* Header */}
      <div className="auth-hearder">
          <div className="symbleLogo">
            <img src={symbleLogo} alt="Symble logo" />
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
            <input className='rev-user-input' type="text" placeholder='Enter account email'/>

            <button className='rev-btn-signin' type='button'>
              Send email
            </button>
          </form>
        </div>
      {/* form */}
    </div>
  )
}
