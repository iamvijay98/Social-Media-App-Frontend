import React, { useEffect, useState } from 'react'
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import "../RegisterPage/RegisterPage.css"
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate =useNavigate()
    const [error,setError] =useState({})
    const [submit,setSubmit] =useState(false)
  
    const [data,setData] =useState({
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        const newObj={...data,[e.target.name]:e.target.value}
        setData(newObj)
    }
 

    const handleSignUp=(e)=>{
        e.preventDefault()
       setError(validationLogin(data))
       setSubmit(true)
    }

    useEffect(()=>{
        if(Object.keys(error).length === 0 && submit){
            navigate("/home")
        }
    },[error])



   function validationLogin(data){
        const error ={}

        const emailPattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const passwordPattern= /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;

        if(data.email === ""){
            error.email ="* Email is Required"
        }
        else if(!emailPattern.test(data.email)){
            error.email="* Email did not match"
        }

        
        if(data.password === ""){
            error.password = "* Password is Required"
        }
        else if(!passwordPattern.test(data.password)){
            error.password="* Password not valid"
        }
        
        return error
   }



  return (
    <div className="container">
        <div className="container-form">
            <form onSubmit={handleSignUp}>
                <h1>Login</h1>
                <p>Please sign in to continue.</p>
                <div className="inputBox">
                    <FiMail className='mail'/>
                    <input type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleChange}
                            placeholder='Email'/> 
                </div>
                {error.email && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.email}</span>}

                <div className="inputBox">
                    <RiLockPasswordLine className='password'/>
                    <input type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleChange}
                            placeholder='Password'/>
                </div>
                {error.password && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.password}</span>}
               

                <div className='divBtn'>
                    <small className='FG'>Forgot Password?</small>
                    <button type='submit' className='loginBtn'>LOGIN</button>
                </div>
                
            </form>

            <div className='dont'>
                <p>Don't have an account? <Link to="/signup"><span>Sign up</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login