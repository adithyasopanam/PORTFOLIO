import { assets, serviceData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20">
     {/*<h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">What I Offer</h4>*/}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">
 I have offering tutoring services for those who are interested in computer science and also looking for software development opportunities that improves my skill set
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link ,year}, index) => (
          <div
            key={index}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm px-6 py-8 bg-white dark:bg-darkTheme hover:shadow-lg transform hover:-translate-y-1 hover:bg-lightHover dark:hover:bg-darkHover transition duration-300"
          >
                     <h1 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{icon}</h1>

            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 mb-4">{description}</p>
            <p className='text-amber-600'>{year}</p>

          {/*  <a
              href={link}
              className="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:underline"
            >
              Read more
              <Image src={assets.right_arrow} className="w-4" alt="arrow" />
            </a>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
