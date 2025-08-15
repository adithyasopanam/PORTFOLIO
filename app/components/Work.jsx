import React from 'react';
import Image from 'next/image';
import { assets, infoList, workData } from '@/assets/assets';

const Work = () => {
  return (
    <div id='work' className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20'>
    {/*  <h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'>My Portfolio</h4>*/}
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>Education</h2>
     
<div className='relative border-dashed border-gray-700'>
  {workData.map((project, index) => (
    <div key={index} className='mb-10 flex items-start gap-3'>
      <span className='w-5 h-5 bg-yellow-500 rounded-full flex-shrink-0'></span>
      <div>
        <h3 className='text-xl font-semibold'>{project.title}</h3>
        <p className='text-yellow-400 text-sm'>{project.year}</p>
        <p className='text-gray-300'>{project.description}</p>
      </div>
    </div>
  ))}
</div>

 { /*<div className='flex justify-center'>
        <a
          href=''
          className='w-max flex items-center justify-center gap-2 px-4 py-2 border-[0.5px] border-gray-700 rounded-full text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-darkHover transition'
        >
          Show More
          <Image src={assets.right_arrow_bold} alt='arrow' className='w-3 sm:w-4' />
        </a>
      </div> */}
    </div>
  );
};

export default Work;
