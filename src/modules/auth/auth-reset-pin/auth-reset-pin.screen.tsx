import React from "react";
import symbleLogo from '../../../assets/S.svg';

export default function AuthResetPin() {
    return (
        <div>
        {/* header */}
            <div className="symbleLogo">
                <img src={symbleLogo} alt="Symble logo" />
            </div>
            <h1 className='rev-title'>
                Almost done...
            </h1>

            <h1 className="blue-text">
                Confirm pin
            </h1>

            <h1 className="light-text">
                Retype the pin you set
            </h1>
        {/* header */}

        {/* form */}
            <form>
                <input className="pin-input-1" type="password" />

                <input className="pin-input-2" type="Password" placeholder=""/>

                <input className="pin-input-3" type="Password" placeholder=""/>

                <input className="pin-input-4" type="Password" placeholder=""/>

                <button className='pin-btn-signin' type='button'>
                    Set pin
                </button>
            </form>
        {/* form */}
    </div>
    )
}