import React from 'react'

const page = () => {
  return (
    <div className='w-full flex justify-center py-32'>
      <div className='flex flex-col justify-center pt-10 pb-14 px-14 gap-12 rounded-md shadow-lg shadow-violet-100 border border-y-teal-300 border-x-violet-300 bg-gradient-to-br from-[50%] from-violet-100 to cyan-100'>
        <div className='flex flex-col gap-4 rounded-sm shadow-sm shadow-violet-400 bg-gradient-to-l from-white to-violet-100'>
          <h1 className='pt-3 text-2xl text-center'>- AMPHORA ξ -</h1>
        <h2 className='pb-4 text-2xl text-center text-violet-600'>User Registration</h2>
        </div>
        <div className='flex flex-col justify-center gap-12'>
          <input type="text" placeholder='Username' className='py-3 px-4 rounded-sm shadow-sm shadow-violet-400 focus:outline-none focus:shadow-teal-300'/>
          <input type="text" placeholder='Password' className='py-3 px-4 rounded-sm shadow-sm shadow-violet-400 focus:outline-none focus:shadow-teal-300' />
        </div>
            <button className='p-4 font-semibold rounded-md border border-teal-200 bg-teal-100 active:bg-white shadow-md shadow-violet-300 text-violet-600 cursor-pointer active:scale-110 transition duration-100'>Register</button>
      </div>
    </div>
  )
}

export default page