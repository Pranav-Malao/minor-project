import React from 'react'

function QuestionBox({ message = "shloka" }) {
  return (
    <div className='border w-[90%] mx-2 mt-[2px] mb-2 p-2 rounded-md bg-orange-100'>
      {message}
    </div>
    
  )
}

export default QuestionBox