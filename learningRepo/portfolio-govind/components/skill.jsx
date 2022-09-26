import Image from 'next/image'
import React from 'react'
import { skillsData } from '../public/assets/MockData/SkillsLogoMockData'

export const Skill = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
       {skillsData.map((data)=> {
        return(
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ' key={data.id}>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
              <div className='m-auto'> 
              {data.path}
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{data.name}</h3>
              </div>
              </div>
            </div>
        )
       })}
    
    </div>
  )
}
