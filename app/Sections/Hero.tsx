import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center 
    sm:px-6 lg:px-8 bg-cover bg-center text-white" style={{backgroundImage: "url('/bglogin.avif')" }}>
    <div>
      <div className='text-center'>
        <h1 className="text-4xl font-semibold font-serif mb-10">Hi, I'm a Software Engineer</h1>
        <hr className='w-1/4 mx-auto mb-10 bg-yellow-500 h-1' />
        <h2 className="text-3xl font-medium font-serif">Front-End Developer</h2>
      </div>
      </div>
    </div>
  );
};

export default Hero;
