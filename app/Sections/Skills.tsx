import React from 'react';
import { ButtonConfig } from '../Constants';
import Button from '../Components/Button';

const Skills = () => {
  return (
    <div className=" mx-auto">
      <div>
        <h1 className='text-center font-serif font-bold text-5xl mb-10'>MY SKILLS</h1>
        <h1 className='mx-10 text-3xl mb-2 font-semibold font-serif'>Familiar Technologies and Tools</h1>
        <p className='mx-10 text-lg font-serif'>
          Crafting user-centric applications and websites across devices,
          leveraging cutting-edge technologies and trusted open-source software.
        </p>
      </div>
      
      <div className=' container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
        {ButtonConfig.map((button, index) => (
          <Button
            key={index}
            type={button.type}
            title={button.title}
            icon={button.icon}
            iconColor={button.iconColor}
            variant={button.variant}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
