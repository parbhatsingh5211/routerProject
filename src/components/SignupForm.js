import React, {useState} from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignupForm = () => {

    const [FormData, setFormData] = useState({
        fname:"", lname:"", email:"",
        password:"", confirmPassword:""
    })

    const[showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData)=>({
          ...prevData, 
          [event.target.name]:event.target.value
        }))
      }

  return (
    <div>
        {/* Student- instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form>
            {/* first name and last name */}
            <div>
                <label>
                    <p>First Name</p><sup>*</sup>
                    <input
                        required
                        type="text"
                        name='fname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={FormData.fname}
                    />
                </label>

                <label>
                    <p>Last Name</p><sup>*</sup>
                    <input
                        required
                        type="text"
                        name='lname'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={FormData.lname}
                    />
                </label>
            </div>
            

            <label>
                <p>Email</p><sup>*</sup>
                <input
                    required
                    type="email"
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email id'
                    value={FormData.email}
                />
            </label>

            {/* create Password and confirm password */}
           <div>
                <label>
                    <p>Create Password</p><sup>*</sup>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={FormData.password}
                    />
                     <span onClick={setShowPassword((prev)=>!prev)}>
                        {showPassword ? 
                        (<AiOutlineEyeInvisible/>) : 
                        (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>Confirm Password</p><sup>*</sup>
                    <input
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={FormData.confirmPassword}
                    />
                    <span onClick={setShowConfirmPassword((prev)=>!prev)}>
                        {showConfirmPassword ? 
                        (<AiOutlineEyeInvisible/>) : 
                        (<AiOutlineEye/>)}
                    </span>
                </label>
           </div>

           <button>
            Create Account
           </button>
        </form>
    </div>
  )
}

export default SignupForm