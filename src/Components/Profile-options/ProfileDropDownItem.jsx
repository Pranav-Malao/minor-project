import React from 'react'
import { Link } from 'react-router-dom'

function ProfileDropDownItem({ icon, title }) {
  return (
    <Link>
      <div  className='flex bg-slate-100 rounded-md w-36 h-10 mb-1 items-center px-3'>
        <div className='mr-4'>{icon}</div>
        <div><p className='text-xl font-medium text-slate-600 font-baloo'>{title}</p></div>
      </div>
    </Link>
  )
}

export default ProfileDropDownItem