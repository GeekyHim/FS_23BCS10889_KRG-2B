import React from 'react'
import { useForm } from "react-hook-form";


const SignUp = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
      } = useForm();

  async function onSubmitFunction(data){ // data by default handlesubmit provide karega
    console.log("Submitting the signup form",data);
    // SIMULATING API HERE
    await new Promise((resolve)=> setTimeout(resolve,1000))
  }

  return (

    <div className='h-[100vh] w-full'>
<div className='bg-blue-100  mt-[5vh] h-[90vh] w-[1000px] mx-auto border-2'> 

      <form onSubmit={handleSubmit(onSubmitFunction)} 
      className='  flex flex-col gap-7 justify-center h-full w-full items-center' >
        
        <div className='flex flex-col gap-1 w-[275px]'>

          <div className='flex justify-between w-full h-full' >
            <label>Name:</label> 
          <input {...register('fullName',
          {
            required:{value:true, message:"Name is required"},
            minLength:{ value : 3, message:"Minimum length should be 3"},
            pattern:{
              value: /^[A-Za-z ]+$/, // allows only alphabets
              message: "Special characters and numbers are not allowed",
            }
          
          })} 
          type='text' placeholder='Enter Name' className= {`pl-1.5 w-[185px] border-black border-2 ${errors.fullName ? "border-red-500 border-2":"" }`} /> </div>

          <div className='w-full h-[5px] text-right' > {errors.fullName && <p className='text-red-500 text-xs'>{errors.fullName.message}</p>} </div>
        </div>


        <div className='flex flex-col gap-1 w-[275px]'>
          <div className='flex justify-between w-full h-full' >
          <label> Email:</label> 
          <input 
            type='email' placeholder='Enter Email' className={`pl-1.5 w-[185px] border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}`}
          {...register('email',
            {required:{value:true, message:"Email is required"},
            pattern:{value: /^[A-Za-z0-9@. ]+$/, // @ allowed
              message: "Special characters are not allowed"}
          })}
          />
        </div>

        <div className='w-full h-[5px] text-right'>{errors.email && <p className='text-red-500 text-xs '> {errors.email.message} </p>}</div>
        </div>
        

        <div className='flex flex-col gap-1 w-[275px]'>
          <div className='flex justify-between w-full h-full' >
          <label> Password:</label>
          <input 
          className={` pl-1.5 w-[185px] border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}` } type='password' placeholder='Enter Password' {...register('password',{
            required:{value:true, message:"password is required"},
            minLength:{value:8, message:"password length must be atleast 8"}
          })}/>
          </div>

         <div className='w-full h-[5px] text-right' > {errors.password && <p className='text-red-500 text-xs' >{errors.password.message}</p>} </div> 
         
        </div>

  {/* confrim password logic is left here  */}
          
          <div className='flex flex-col gap-1 w-[275px]'>
            <div className='flex justify-between w-full h-full' >
          <label> Confirm Password:</label>
          <input 
          className={` pl-1.5 w-[185px] border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}` } type='password' placeholder='Confirm Password' 
          {...register('confirmPassword',{
            required:{value:true, message:" LOIGC LEFT HERE password is required"},
            // minLength:{value:8, message:"password length must be atleast 8"}
          })}/>
          </div>
          <div className='w-full h-[5px] text-right' > {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword.message}</p>} </div>
          </div>
          
        
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submiting' : 'Submit'} className=' border-2 w-[275px] ' />
        {/* <button>Submit</button> */}

        
      </form>
</div>
    </div>
  )
}

export default SignUp