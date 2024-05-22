import React from 'react';
import { ProjectInfo } from '../Constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const ProjectCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
      {ProjectInfo.map((project, index) => (
        <div
          key={index}
          className='relative bg-gray-950 text-white m-4 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105'
        >
          <h3 className='text-xl font-bold mb-4'>{project.Title}</h3>
          <div className='relative'>
            <Image
              src={project.Image}
              alt='picture perfect you dont need no filter'
              height={300}
              width={600}
              className='rounded-lg'
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-lg">
              <Link
              href={project.href}>
             <Button 
             title='View on Github'
             type='submit'
             variant='button2'
             />
              </Link>
            </div>
          </div>
          {/* <p className='text-gray-300'>{project.Description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
