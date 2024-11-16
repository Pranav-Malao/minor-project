import React from 'react'
import DropDownItem from './DropDownItem'
import "./DropDown.css"
import Blog from '../../Assests/Drop-Down/Blog';
import Docs from '../../Assests/Drop-Down/Docs';


function DropDownList() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className='relative w-1/4'>
      <div className="menu-trigger size-12">
        <button onClick={() => setIsActive(!isActive)}>
          <img src="/tripund.png"
            className="size-12 rounded-full overflow-hidden cursor-pointer"
            alt="menu-trigger" />
        </button>
      </div>

      <div className={`absolute top-16 left-0 w-auto ${isActive ? 'active' : 'inactive'} bg-yellow-200 bg-opacity-95 backdrop-blur-sm border-2 rounded-lg`}>
        <ul>
          <DropDownItem text="Home" img={<Docs/>} />
          <DropDownItem text="Home" img={<Blog/>} />
          <DropDownItem text="Home" img={<Blog/>} />
          <DropDownItem text="Home" img={<Blog/>} />
          <DropDownItem text="Home" img={<Blog/>} />
        </ul>
      </div>
    </div>
  )
}

export default DropDownList