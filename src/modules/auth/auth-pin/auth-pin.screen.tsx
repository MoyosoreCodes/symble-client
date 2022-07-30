import React,{useState, useContext} from "react";
import symbleLogo from '../../../assets/S.svg';
import axios from 'axios';
import { AuthContext } from '../auth.context';


export default function AuthPin() {
    // const {token}:any = useContext(AuthContext)
    const [pin, setPin] = useState("")
    const token = localStorage.getItem('token')

    const handlePin = async(e:any)=>{
        console.log(pin);
        console.log(token);
        e.preventDefault()
        try {
          const response =await axios.post('https://spray-dev.herokuapp.com/api/users/pin',{pin:pin},{
            headers :{ authorization: 'Bearer ' + token}
          }
          )
          console.log(token);
          
          setPin("")
          console.log(response.data);
          
        } catch (error) {
          console.log(error);
          
        }
    }
    return (
        <div className="white-container">
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
                    <input className="pin-input-1" type="password" value={pin} onChange={(e)=>setPin(e.target.value)} autoComplete='new-password'/>

                    <input className="pin-input-2" type="Password" placeholder=""/>

                    <input className="pin-input-3" type="Password" placeholder=""/>

                    <input className="pin-input-4" type="Password" placeholder=""/>

                    <button className='pin-btn-signin' type='button' onClick={handlePin}>
                        Next
                    </button>
                </form>
            {/* form */}
        </div>
    )
}