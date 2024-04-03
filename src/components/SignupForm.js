import React, {useState} from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate= useNavigate();
    const [formData, setFormData] = useState({
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

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword ){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
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

        <form onSubmit={submitHandler}>
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
                        value={formData.fname}
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
                        value={formData.lname}
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
                    value={formData.email}
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
                        value={formData.password}
                    />
                     <span onClick={()=>setShowPassword((prev)=>!prev)}>
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
                        value={formData.confirmPassword}
                    />
                    <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
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