import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ListofProject = ({imagePath, title, projectUrl}) => {
  return (
   
    <div className='relative flex items-center p-4 justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#2c69af] to-[#2f83e4]'>
            <Image className='rounded-xl group-hover:opacity-5' src={imagePath} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
                <p className='pb-4 pt-4 text-white text-center'> React JS</p>
                <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
                </Link>
            </div>
    </div>
  )
}

export default ListofProject