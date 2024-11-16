import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import "./DropDown.css"

function DropDownItem({ img = "", text, description = "Jai Shree Ram mahakal maharaj", to="" }) {
  return (
    <li className='py-2 px-4 border-black hover:cursor-pointer dark:hover:bg-black hover:bg-white/90 w-full rounded-md mb-1'>
      <Link to={text} className='flex'>
        <div className='size-11 mr-2 rounded p-1'>{img}</div>
        <div>
          <h5 className='font-medium dark:text-white'>{text}</h5>
          <p className='text-slate-800 dark:text-slate-300'>{description}</p>
        </div>
      </Link>
    </li>
  );
}

DropDownItem.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.string,
};

export default DropDownItem