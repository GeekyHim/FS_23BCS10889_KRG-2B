// will use react hook form library 
import React from 'react'
import { useForm } from "react-hook-form";

// form creation
// registration, data taking
// submit button se kya hoga

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function submitFn(data) {console.log("Subbmited", data)}
  return (
    <div className='h-[100vh] w-full'> 
      <form onSubmit={handleSubmit(submitFn)} 
      className='flex flex-col space-y-2 justify-center h-full w-full items-center' >
       
        <div className='space-x-2.5 flex-col' >
          <label> Email:</label> 
          <input 
            type='email' placeholder='Enter Email' className={`border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}`}
          {...register('email',
            {required:{value:true, message:"Email is required"},
            pattern:{value: /^[A-Za-z0-9@. ]+$/, // @ allowed
              message: "Special characters are not allowed"}
          })}
          />
          {errors.email && <p className='text-red-500 text-xs'> {errors.email.message} </p>}  
        </div>


        <div className='space-x-2.5 flex-col' >
          <label> Password:</label>
          <input 
          className={`border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}` } type='password' placeholder='Enter Password' {...register('password',{
            required:{value:true, message:"password is required"},
            minLength:{value:8, message:"password length must be atleast 8"}
          })}/>

          {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
        </div>

        <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submiting' : 'Submit'} />
        {/* <button>Submit</button> */}
        
      </form>
    </div>
    // <>
    //   <h1>HELLO</h1>
    // </>
    )
}

export default Login