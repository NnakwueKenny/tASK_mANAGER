import React from 'react';

const Home = () => {
  return (
    <div className='text-gray-500'>
      <div className='welcome pb-2 text-xl font-bold'>Hi, Kenechukwu</div>
      <div className='greeting text-sm font-normal'>Good Morning</div>
      <div className='flex pt-4 pb-2'>Upcoming Tasks</div>
      <div className='overflow-x-auto pb-6 mb-8'>
        <div className='inline-flex gap-3 w-auto'>
          <div className='p-2 border-2 rounded-xl shadow w-52'>
            <div className='flex flex-col border rounded-xl p-2'>
              <span className='pb-2'>10 Tasks</span>
              <span>LEARNCHA PROJECT</span>
              <span>Make Icon</span>
            </div>
            <div class="flex -space-x-4 pt-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <a  href="/" class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800">+99</a>
            </div>
          </div>
          <div className='p-2 border-2 rounded-xl shadow w-52'>
            <div className='flex flex-col border rounded-xl p-2'>
              <span className='pb-2'>10 Tasks</span>
              <span>LEARNCHA PROJECT</span>
              <span>Make Icon</span>
            </div>
            <div class="flex -space-x-4 pt-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <a  href="/" class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800">+99</a>
            </div>
          </div>
          <div className='p-2 border-2 rounded-xl shadow w-52'>
            <div className='flex flex-col border rounded-xl p-2'>
              <span className='pb-2'>10 Tasks</span>
              <span>LEARNCHA PROJECT</span>
              <span>Make Icon</span>
            </div>
            <div class="flex -space-x-4 pt-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <a  href="/" class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800">+99</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex gap-2 border rounded-lg p-2 mb-6 shadow'>
          <span className='inline-flex w-1/2 bg-cyan-500 text-cyan-50 justify-center items-center py-2 rounded-lg'>All Tasks</span>
          <span className='inline-flex w-1/2 justify-center items-center py-2'>Completed Tasks</span>
        </div>
      </div>
      
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 border rounded-lg p-2 shadow'>
          <span className='inline-flex border border-gray-400 rounded-lg w-8 h-8 items-center justify-center'>
            <i className='fa fa-tasks'></i>
          </span>
          <span className='inline-flex w-1/2 justify-center items-center py-2'>Completed Tasks</span>
        </div>
      </div>
    </div>
  )
}

export default Home