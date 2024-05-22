"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../Constants'
import Button from './Button'

const Navbar = () => {

  const handleDownloadCV=()=>{
    const cvUrl='/CV/Raajz-CV.pdf';
    window.open(cvUrl);
  }
  return (
    <header className='  bg-black text-white '>
      <nav className='container mx-auto flex justify-between items-center '>
        <Link
        href={'/'}>
          <Image 
          src={'/logo2.png'}
          alt='This is image'
          width={130}
          height={29}
          className='object-contain h-20'
          />
          </Link> 
          <ul className='flex flex-row justify-center gap-8'>
            {navLinks.map((item)=>(
              <li key={item.label}
              className='hover:text-gray-400 font-montserrat leading-normal text-lg transition-colors duration-300'>
                <Link
                href={item.href}
                className=' '
                >
               {item.label} 
                </Link>
              </li>
            ))}
          </ul>
          {/* <Button 
             title='Download CV'
             type='submit'
             variant='button1 '
             onClick="handleDownloadCV"
             /> */}
             <button className="bg-blue-500 hover:bg-blue-600 text-white 
             font-bold py-2 px-4 rounded" onClick={handleDownloadCV}>Download CV</button>
      </nav>
    </header>
  )
}

export default Navbar
