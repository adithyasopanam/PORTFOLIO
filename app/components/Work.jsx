import React from 'react';
import Image from 'next/image';
import { assets, infoList, workData } from '@/assets/assets';

const Work = () => {
  return (
    <div id='work' className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>My Latest Works</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base'>
        Welcome to my development portfolio! Explore a collection of projects showcasing my skills.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 items-center'>
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className='aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group'
          >
            <div className='bg-white w-11/12 sm:w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-5 flex items-center justify-between gap-3 transition-all duration-500 group-hover:bottom-7 shadow-md'>
              <div className='text-sm sm:text-base'>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-gray-600 text-xs sm:text-sm'>{project.description}</p>
              </div>
              <Image src={assets.send_icon} alt='open' className='w-4 sm:w-5' />
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <a
          href=''
          className='w-max flex items-center justify-center gap-2 px-4 py-2 border-[0.5px] border-gray-700 rounded-full text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-darkHover transition'
        >
          Show More
          <Image src={assets.right_arrow_bold} alt='arrow' className='w-3 sm:w-4' />
        </a>
      </div>
    </div>
  );
};

export default Work;
