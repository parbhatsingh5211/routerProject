import React from 'react'
import Template from '../components/Template'
import SignupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template 
        title="Join the millions learning to code with studyNotion for free"
        desc1="Build skills for today, tommorow, and beyond."
        desc2="Education to future-proof your career."
        image={SignupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup;