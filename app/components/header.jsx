import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-[80vh] p-32 flex flex-col items-center justify-center gap-4">
      <Image
        src={assets.profile_img}
        alt="Profile"
        className="rounded-full w-32 mb-4"
      />

      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo mb-3">
        Hi! I'm Adithya S
        <Image
          src={assets.hand_icon}
          alt="Wave"
          className="w-6 h-6"
        />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[60px] font-Ovo mb-4">
        Software developer based in Kerala
      </h1>

      <p className="max-w-2xl font-Ovo text-sm sm:text-base text-gray-700 mb-6">
        I am a Software developer from Palakkad, Kerala with 1 and half years of experience in
        Manappuram Finance Limited
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
          href="/sample-resume.pdf"
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
