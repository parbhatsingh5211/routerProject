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

        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            {/* first name and last name */}
            <div>
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >First Name<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700'
                        required
                        type="text"
                        name='fname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.fname}
                    />
                </label>

                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]'
                    >Last Name<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700'
                        required
                        type="text"
                        name='lname'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lname}
                    />
                </label>
            </div>
            

            <label className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700'
                required
                type="email"
                value =  {formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                />
            </label>

            {/* create Password and confirm password */}
           <div>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Create Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700'
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                    />
                     <span 
                        className='absolute right-3 top-[38px] cursor-pointer '
                        onClick={()=>setShowPassword((prev)=>!prev)}>
                        {showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]'
                    >Confirm Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700'
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                    />
                    <span 
                        className='absolute right-3 top-[72px] cursor-pointer '
                        onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                        {showConfirmPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                </label>
           </div>

           <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
           </button>
        </form>
    </div>
  )
}

export default SignupForm