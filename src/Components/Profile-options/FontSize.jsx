import React from 'react'
import { Plus, Minus } from "./assets";
function Button({ icon, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className='size-7 rounded-full text-xl flex items-center justify-center'
    >
      {icon}
    </button>
  )
}

function FontSize() {
  const [fontSize, setFontSize] = React.useState(2);

  return (
    <div className='flex rounded-full border bg-slate-100'>
      <Button icon={<Minus color={fontSize === 1 ? '#94a3b8' : ''} />} disable={fontSize === 1} onClick={() => setFontSize((size) => size - 1)} />

      {<div className='size-6 flex my-auto items-center justify-center text-xl font-medium text-slate-600 font-baloo'>{fontSize == 1 ? 'S' : fontSize == 2 ? 'M' : 'L'}</div>}

      <Button icon={<Plus color={fontSize === 3 ? '#94a3b8' : ''} />} disable={fontSize === 3} onClick={() => setFontSize((size) => size + 1)} />
    </div>
  )
}

export default FontSize