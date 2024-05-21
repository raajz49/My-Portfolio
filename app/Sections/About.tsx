import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='lg:h-screen  overflow-hidden py-20'>
      <div className=' mx-4 lg:mx-16 flex  flex-col lg:flex-row gap-10  '>
      <div className='sm:w-full lg:w-1/2'>
        <div className=' font-serif mt-20'>
        <h1 className='text-5xl font-semibold mb-10'>ABOUT</h1>
        <hr className='h-[7px]  bg-yellow-400 w-[8rem] mb-6' />
        <p>Hey there! I'm Raj Koirala, a frontend developer with a knack for building sleek and intuitive web
           applications. Armed with skills in React, Next.js, and TypeScript, I specialize in creating dynamic 
           user interfaces that bring ideas to life. While I'm passionate about crafting pixel-perfect designs
           and seamless user experiences, I also dabble in backend technologies like Node.js and databases to
           ensure smooth data management and retrieval. As I continue my journey in this ever-evolving landscape,
           I'm excited to leverage my skills to develop innovative solutions that make a difference</p>
        </div>
      </div>
      <div className=' sm:w-full lg:w-1/2 lg:h-screen  '>
        <Image 
        src={'/aboutus.jpg'}
        alt='About'
        height={500}
        width={500}
        className='h-full w-full object-cover object-center '/>
      </div>
      </div>
    </section>
  )
}

export default About
