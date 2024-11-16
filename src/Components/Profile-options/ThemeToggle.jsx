import React from 'react'
import { Light, Dark } from "./assets"

function ThemeToggle() {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div>
      <button className={`bg-slate-100 border-slate-200 rounded-2xl w-11 h-6 transition-all duration-400 shadow relative ${toggled ? 'bg-orange-200' : ''}`} onClick={() => setToggled(!toggled)}>

        <div className={`thumb size-5 bg-slate-400 rounded-full absolute left-[2px] top-1/2 transition-all duration-300 translate-y-[-50%] ${toggled ? 'translate-x-5 bg-red-400' : ''}`}>
          {toggled ? <Dark /> : <Light />}
        </div>
      </button>
    </div>
  )
}

export default ThemeToggle