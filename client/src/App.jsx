import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Home  from './views/Home';
import Profile from './views/profile';
import ErrorPage from './views/404.js';
import getRoute from './functions/getRoute';
import Navbar from './components/Navbar';
import Register  from './views/Register';
import Login  from './views/Login';
import RegisterConfirm from './views/confirmRegister';
// functions
  getRoute();

const App = () => {
  const userBrowserData = localStorage.getItem('taskManagerUserData');
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    console.log(userBrowserData);
    if (!isLoggedIn) {
      console.log('Redirecting');
      document.querySelector('.register-redirect').click();
      console.log('Redirected');
    }
  })
  // const checkForLogin = () => {
  //   if (isLoggedIn) {
  //    window.location.href = '/'
  //   } else {
  //     window.location.href = '/register';
  //   }
  // }
  
  // checkForLogin();

  return (
    <div className=''>
      {
        isLoggedIn ?
        <div>
          <div className='relative flex flex-col h-screen items-center bg-gray-200'>

          { /*  Header Section starts here   */ }
          <header className='w-full'>
            <Navbar/>
          </header>
          { /*  Header Section ends here   */ }

          { /*  Main Section starts here   */ }
          <main className='flex flex-col w-full max-w-3xl px-4 mb-20 h-full overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/register-confirmation' element={<RegisterConfirm />}/>
              <Route path='/*' element={<ErrorPage />}/>
            </Routes>
          </main>
          { /*  Main Section ends here   */ }

          { /*  Footer Section starts here   */ }
          <footer className='w-full absolute bottom-0'>
            <div className='flex w-full border-x border-t border-x border-x-cyan-500 border-t-cyan-500 py-4 rounded-tr-3xl rounded-tl-3xl'>
              <span className='flex justify-center w-1/2'>
                <Link className='' to='/'><i className='fa fa-home'></i></Link>
              </span>
              <span className='flex justify-center w-1/2'>
                <i className='fa fa-user'></i>
              </span>
              <div className='w-full flex justify-center absolute -top-7'>
                <button type='button' className='flex justify-center items-center w-14 h-14 border-[1.4px] border-cyan-500 rounded-full bg-cyan-500'>
                  <i className='fa fa-plus text-cyan-50'></i>
                </button>
              </div>
            </div>
          </footer>
          { /*  Footer Section starts here   */ }
          </div>
        </div>
        :
        <div>
          <Link to='/register' className='sr-only register-redirect'></Link>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login
              isLoggedIn = {isLoggedIn}
              setLogin = {setLogin}
            />}/>
            <Route path='/*' element={<ErrorPage />}/>
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;