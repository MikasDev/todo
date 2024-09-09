
import React from 'react'
import Box from './Box'  
export const Boxes = () => {
  return (
    <div className="flex gap-[50px] mt-[100px] w-full ml-[100px]">
      <Box title="To-Do" textColor="text-gray-400" />
      <Box title="In Progress" textColor="text-blue-400" />
      <Box title="Finished" textColor="text-green-400" />
    </div>
  )
}
