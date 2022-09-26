import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri'

const Technologies = () => {
  return (
    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> React
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> JavaScript
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> SCSS
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> Node 
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                   <RiRadioButtonFill className='pr-1' /> Jest
                </p>
            </div>
        </div>
    </div>
  )
}

export default Technologies