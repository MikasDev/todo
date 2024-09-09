import React from 'react'

const Box = ({ title, textColor }) => {
  return (
    <div className="w-[400px] h-[450px] rounded-[10px] bg-white flex justify-center   text-[30px]">
      <h1 className={textColor}>{title}</h1>
    </div>
  )
}

export default Box
