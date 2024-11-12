import React from 'react'

const page = () => {
  return (
    <div className='w-full flex justify-center'>
      <div>
        <h1>Login</h1>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
        <div>
          <input type="checkbox" />
          <span>Remember Me</span>
          </div>
          <span>Forget me</span>
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default page