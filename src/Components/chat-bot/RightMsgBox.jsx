import React from 'react'
import "./Loader.css"
import Text from '../Book-Viewer/Text'
function Loader() {
  return (
    <div className="loader">
      <div className="loader-spinner">
        <div className="loader-spinner-dot"></div>
        <div className="loader-spinner-dot"></div>
        <div className="loader-spinner-dot"></div>
      </div>
    </div>
  )
}

function RightMsgBox({ message }) {
  return (
    <div className='border w-[90%] m-2 p-2 rounded-md ml-auto bg-yellow-200 relative'>
      {(message) ? <Text text={message} /> : <Loader />} 
    </div>
  )
}
export default RightMsgBox