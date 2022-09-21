import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Button, {Button2} from './Buttons/Button';
import {TextInput, Label, Checkbox} from 'flowbite-react';

const Navbar = (props) => {
  return (
    <nav className={'flex justify-center items-center w-full text-gray-500 py-2'}>
          <nav className='flex justify-between items-center w-full max-w-4xl px-4'>
            <button>
              <span><i className='fa fa-bars'></i></span>
            </button>
            <ul className='flex'>
              <li className='font-semibold'><Link className='block py-3 px-2' to='/'>Scheduler</Link></li>
              {/*<li className='font-semibold'><Link className='block py-3 px-2' to='/register'>Register</Link></li>*/}
            </ul>
            <div>
              <span className='block w-8 h-8 rounded-full overflow-hidden'>
                <img className='w-full h-full' src='https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
              </span>
            </div>
          </nav>
  
    </nav>
  )
}

export default Navbar