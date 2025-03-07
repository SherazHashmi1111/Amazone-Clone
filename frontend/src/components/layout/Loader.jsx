import React from 'react'

function Loader() {
  return (
    <div className='w-full max-w-[100%] h-screen bg-white grid place-items-center'>
        <div className="border-red-500 w-[10vmax] h-[10vmax] rounded-[50%] border-b-5 animate-spin"></div>
    </div>
  )
}

export default Loader