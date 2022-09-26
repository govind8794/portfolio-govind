import React from 'react'
import Blog from '../public/assets/logos/Blog.png'
import DSG from '../public/assets/logos/DSG.PNG'
import ATT from '../public/assets/logos/AT&T.PNG'
import FloridaBlue from '../public/assets/logos/FB.PNG'
import ListofProject from './ListofProject'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 '>
            <p className='text-xl tracking-widest uppercase text-[#2c69af]'>Projects</p>
            <h2 className='py-4'>What Ive Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ListofProject title={'Blog Template'} imagePath={Blog} projectUrl={'/Blog'} />
            <ListofProject title={'Wireless Internet'} imagePath={ATT} projectUrl={'/TeleCom'} />
           <ListofProject title={'E-Commerce'} imagePath={DSG} projectUrl={'/E-Commerce'} />
           <ListofProject title={'Healthcare domain'} imagePath={FloridaBlue} projectUrl={'/HealthCare'} />
            </div>
        </div>
    </div>
  )
}

export default Projects