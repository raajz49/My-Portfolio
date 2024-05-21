import React from 'react';
import Button from '../Components/Button';
import { ContactInfo } from '../Constants';
import ContactCard from '../Components/ContactCard';

const Contact = () => {
  return (
    <div>
      <div className='flex flex-col justify-center lg:items-center gap-3'>
        <h1 className='lg:text-center text-4xl font-serif font-medium mb-6'>CONTACT</h1>
        <hr className='h-[5px] bg-yellow-400 w-[8rem] mb-10' />
      </div>
      <div className='justify-center flex flex-col lg:flex-row gap-20'>
        <div className='p-6 rounded-lg'>
        {ContactInfo.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.Name}
            icon={contact.icon}
            iconColor={contact.iconColor} // Example color values
            textColor="text-gray-400" // Example text color values
            
          />
        ))}
        </div>
        <div className=''>
          <form>
            <div className='container mx-auto px-4 py-8 grid grid-cols-12 gap-4'>
              <div className=" rounded-lg col-span-6">
                <input 
                  type='text'
                  name='Name'
                  placeholder='Name'
                  className='input w-full p-2 rounded'
                />
              </div>
              <div className=" rounded-lg col-span-6">
                <input 
                  type='text'
                  name='Phone'
                  placeholder='Phone Number'
                  className='input w-full p-2 rounded'
                />
              </div>
              <div className="rounded-lg col-span-12">
                <input 
                  type='text'
                  name='Email'
                  placeholder='Email Address'
                  className='input w-full p-2 rounded'
                />
              </div> 
              <div className="rounded-lg col-span-12">
                <textarea 
                  name='Description'
                  placeholder='Message'
                  className='border-b-2 border-gray-300 bg-gray-900 h-32 px-2  w-full rounded-lg p-2'
                />
              </div>  
              <div className="rounded-lg col-span-12">
                <Button
                  type='submit'
                  title='CONTACT ME'
                  variant=' button1  hover:bg-blue-600 transition'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
