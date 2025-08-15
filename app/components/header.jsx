import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-[80vh] p-32 flex flex-col items-center justify-center gap-4">
      
      <motion.div
        initial={{ scale:0  }}
        whileInView={{ scale:1 }}
        transition={{ duration: 0.8, type: "spring",stiffness:100 }}
        >
      <Image
        src={assets.profile_img}
        alt="Profile"
        className="rounded-full w-32 mb-4"
      />
</motion.div>
      <motion.h3 initial={{y:-20,opacity:0}
    }whileInView={{y:0,opacity:1}}
        transition={{ duration: 0.6,delay:0.3 }}
     className="flex items-center gap-2 text-xl md:text-2xl font-Ovo mb-3">
        Hi!  <span className="inline-flex items-center whitespace-nowrap">I'm Adithya S</span>
        <Image
          src={assets.hand_icon}
          alt="Wave"
          className="w-6 h-6"
        />
      </motion.h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[60px] font-Ovo mb-4">
        Software developer based in Kerala
      </h1>

      <p className="max-w-2xl font-Ovo text-sm sm:text-base text-gray-700 mb-6">
        I am a Software developer from Palakkad, Kerala with 1 and half years of experience in
        dot net framework and C#. I have a passion for creating efficient and scalable software solutions. I am also an educator, teaching computer science at GHSS Pattambi.
        I am always eager to learn new technologies and improve my skills.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-black bg-black text-white rounded-full flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 h-4"
          />
        </a>

        <a
          href="/adithya-dot.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
