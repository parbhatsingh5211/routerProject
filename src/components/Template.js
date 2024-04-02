import React from 'react'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import frameImg from '../assets/frame.png'


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm/>) : 
            (<LoginForm/>)}

            <div>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            
            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div>
            <img src={frameImg} alt='Pattern'
                width={558} height={504} loading='lazy'
            />
            <img src={image} alt='Student'
                width={558} height={504} loading='lazy'
            />

        </div>

    </div>
  )
}

export default Template