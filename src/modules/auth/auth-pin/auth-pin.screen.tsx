import React from "react";
import symbleLogo from '../../../assets/S.svg';

export default function AuthPin() {
    return (
        <div>
            {/* header */}
                <div className="symbleLogo">
                    <img src={symbleLogo} alt="Symble logo" />
                </div>
                <h1 className='rev-title'>
                    One more thing...
                </h1>

                <h1 className="blue-text">
                    Set transaction pin
                </h1>

                <h1 className="light-text">
                    This pin will be required for all your transactions.
                </h1>
            {/* header */}

            {/* form */}
                <form>
                    <input className="pin-input-1" type="password" />

                    <input className="pin-input-2" type="Password" placeholder=""/>

                    <input className="pin-input-3" type="Password" placeholder=""/>

                    <input className="pin-input-4" type="Password" placeholder=""/>

                    <button className='pin-btn-signin' type='button'>
                        Next
                    </button>
                </form>
            {/* form */}
        </div>
    )
}