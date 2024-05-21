import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../Constants'

const Navbar = () => {
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
      </nav>
    </header>
  )
}

export default Navbar
