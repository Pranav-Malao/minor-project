import React from 'react'

function LeftMsgBox({ message = "shloka" }) {
  return (
    <div className='border w-[90%] mx-2 mt-2 p-2 rounded-md bg-orange-200'>
      {message}
    </div>
    
  )
}

export default LeftMsgBox