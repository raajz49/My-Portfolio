import React from 'react';
import { FooterInfo } from '../Constants';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='h-full bg-gray-800 flex justify-center items-center '>
      <div className='container mx-auto flex flex-col items-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-8'>
          <div className='flex flex-col gap-10'>
            <Link href={'/'}>
              <Image 
                src={'/logo2.png'}
                alt='This is image'
                width={130}
                height={29}
                className='object-contain h-30'
              />
            </Link> 
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-white text-2xl font-bold mb-4'>ABOUT ME</h1>
            <p className='text-white mb-4'>
            This is Raj Koirala. Although I am currently employed, I am actively seeking new opportunities 
            in the development sector and am ready to face any challenges related to it.
            </p>
            <div className='flex flex-row justify-start items-center space-x-6'>
              {FooterInfo.map((item, index) => (
                <Link key={index} href={item.href} className='text-white text-2xl hover:text-gray-400'>
                  {item.Icon}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-row items-center text-white mt-5'>
            <FaRegCopyright className='mr-2' />
            <p className='text-[12px]'>Copyright all rights reserved</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <p className='text-white text-[14px] flex items-center'>
            Made with <FaHeart className='text-red-500 mx-1' /> by Raajz
          </p>
        </div> 
      </div> 
    </div>
  );
};

export default Footer;
