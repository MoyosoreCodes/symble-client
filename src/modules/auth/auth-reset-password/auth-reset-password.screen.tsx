import React from 'react'
import Symble from '../../../assets/S.svg';

export default function AuthResetPassword() {
  return (
    <div className="auth-hearder">
      {/* header */}
        <div className="symble">
          <img src={Symble} alt="Symble logo" />
        </div>
        <h1 className='rev-title'>
          Reset password
        </h1>
      {/* header */}

      {/* form */}
        <div className="auth-form">
          <form>
          <label className='reset-password-label-1' htmlFor="Password">New password</label>
            <input className='reset-password-input-1' type="Password" placeholder='Enter new password'></input>

            <label className='reset-password-label-2' htmlFor="Password">Confirm password</label>
            <input className='reset-password-input-2' type="Password" placeholder='Re-enter password'></input>

            <button className='reset-btn-signin' type='button'>
              Reset password
            </button>
          </form>
        </div>
      {/* form */}
    </div>
  )
}
