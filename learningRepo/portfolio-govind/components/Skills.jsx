import React from 'react'
import { Skill } from './skill'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col h-full justify-center'>
            <p className='text-xl tracking-widest uppercase text-[#2c69af]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <Skill/>
        </div>
        </div>
  )
}

export default Skills