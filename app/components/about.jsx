"use client";

import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 
                 bg-white dark:bg-darkTheme transition-colors duration-300 
                 text-lg sm:text-xl font-outfit"
    >
      {/* Section Title */}
      <h4 className="text-center mb-2 text-xl sm:text-2xl font-ovo">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-ovo">About me</h2>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 my-16">
        
        {/* Profile Image */}
        <div className="w-48 sm:w-64 md:w-80 flex-shrink-0">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full width={112}
  height={112}
            rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="mb-10 font-outfit leading-relaxed text-justify text-gray-700 dark:text-gray-300">
            I am a passionate software developer and educator with 1.5 years of experience in ASP.NET development, SQL, C#, and PL/SQL.
            During my time as a developer, I worked on building scalable and efficient applications, handling databases, and optimizing queries for better performance.
            <br /><br />
            Currently, I am leveraging my technical expertise to teach Computer Science and Computer Applications to higher secondary students.
            My goal is to bridge the gap between theoretical knowledge and practical application, helping students develop a strong foundation in programming and problem-solving.
            I am always eager to learn, grow, and explore new technologies while inspiring the next generation of tech enthusiasts.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-400 rounded-xl p-6 text-center
                           hover:bg-lightHover dark:hover:bg-darkHover 
                           hover:-translate-y-1 hover:shadow-md duration-300"
              >
                <Image src={icon} alt={title} className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-8 text-gray-700 dark:text-gray-200 font-ovo text-xl">Tools I use</h4>
          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
                           border border-gray-400 rounded-lg hover:-translate-y-1 duration-300"
              >
                <Image src={tool} alt="tool" className="w-6 sm:w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
