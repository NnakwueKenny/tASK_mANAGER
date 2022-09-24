import React, {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Preloader1 from '../components/preloaders/preloader1';

// import {Label, TextInput, Checkbox, Button } from 'flowbite-react';

const Login = ({isLoggedIn, setLogin, darkMode}) => {

  const [loginMessage, setLoginMessage] = useState('');
  const [loading, setLoading] = useState(false)

  const loginUser = async (formClass) => {
    setLoading(true);
    const formData = {};
    console.log(formClass);
    const formInput = formClass.querySelectorAll('input');

    await formInput.forEach(item => {
      if (item.type !== 'checkbox') {
        formData[`${item.name}`] = item.value
      }
    })
    // console.log(formData)
    await fetch('http://localhost:3500/user/login',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(formData)
      }
    )
    .then(res => res.json())
    .then(data => {
      setLoginMessage(data.message);
      console.log(data.message);
      setLogin(true);
      document.querySelector('.home').click();
      console.log('User Successfully logged in!😊')
    })
    .catch(err => {
      return {
        err: err.json()
      }
    });
  }
  
  const darkmode = darkMode? 'text-gray-50  bg-gray-800': 'text-gray-500';
  return (
    <div className={`flex flex-col w-full h-screen items-center justify-center px-6 ${darkmode}`}>
      <Link to='/' className='sr-only home'></Link>
      <React.Fragment>
        <div>
          {
            loading &&
            <Preloader1 color={'green'}/>
          }
        </div>
      </React.Fragment>
      {  (isLoggedIn === '' || loading === false) &&
        <div className='flex flex-col gap-4 w-full max-w-2xl'>
            <form className="register-user flex flex-col gap-4 h-full">
                <div>
                    <h1 className='text-center text-cyan-500 font-semibold text-3xl pb-6'>tASK mANAGER</h1>
                    <p className='text-lg pb-1 font-semibold'>Create an Account</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <label
                            className='sr-only'
                            htmlFor="username">Your Username or Password</label>
                        </div>
                        <input
                        id="username"
                        name='username'
                        type="text"
                        placeholder="Email or Password"
                        required={true}
                        shadow={true}
                        className='py-3 shadow-md shadow-gray-300 border-0 border-t border-gray-200 rounded-lg w-full required'
                        />
                    </div>
                <div>
                    <div className="mb-2 block">
                    <label
                        className='sr-only'
                        htmlFor="password">Password</label>
                    </div>
                    <input
                    id="password"
                    name='password'
                    type="password"
                    placeholder="Your Password"
                    required={true}
                    shadow={true}
                    className='py-3 shadow-md shadow-gray-300 border-0 border-t border-gray-200 rounded-lg w-full required'
                    />
                </div>
                <button className='shadow-lg shadow-cyan-100 mt-2 py-2.5 rounded-lg text-white bg-cyan-500 font-semibold' type="button" onClick={() => {loginUser(document.querySelector(`.register-user`))}}>
                Sign In
                </button>
            </form>
            <form>
            <p className='text-center pb-3'>-- or sign in with --</p>
            <div className='flex justify-center justify-around'>
                <button type='button' className='flex justify-center items-center shadow w-[68px] h-[68px] rounded-xl'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className='w-10 h-10'>
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                </span>
                </button>
                <button type='button' className='flex justify-center items-center shadow w-[68px] h-[68px] rounded-xl'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className='w-10 h-10'>
                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
                    <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
                    </svg>
                </span>
                </button>
                <button type='button' className='flex justify-center items-center shadow w-[68px] h-[68px] rounded-xl'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className='w-10 h-10'>
                    <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/>
                    </svg>
                </span>
                </button>
            </div>
            </form>
            <div className='py-4 text-center'>
            <p>Don't have an account? <Link className='text-cyan-500 font-semibold' to='/register'>Register</Link> here</p>
            </div>
        </div>
      }
    </div>
  )
}

export default Login