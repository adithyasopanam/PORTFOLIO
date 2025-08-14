import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b28fb0f0-4de4-49a1-8314-ab537bc29e02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-5 md:px-10 xl:px-4 sm:px-6 py-20 mx-auto text-center 
                 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] 
                 dark:bg-darkTheme dark:text-white transition-colors duration-300"
    >
      <h4 className="text-lg md:text-xl font-Ovo mb-2">Contact With me</h4>
      <h2 className="text-3xl md:text-5xl font-Ovo mb-8">Get in touch</h2>

      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-Ovo">
        I'd love to hear from you! If you have any questions, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 md:p-4 text-base md:text-lg border border-gray-400 rounded-md
                       bg-white dark:bg-darkTheme dark:text-white dark:placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 md:p-4 text-base md:text-lg border border-gray-400 rounded-md
                       bg-white dark:bg-darkTheme dark:text-white dark:placeholder-gray-400 outline-none"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          required
          placeholder="Your Message"
          className="w-full p-3 md:p-4 text-base md:text-lg border border-gray-400 rounded-md
                     bg-white dark:bg-darkTheme dark:text-white dark:placeholder-gray-400 outline-none"
        ></textarea>

        <button
          type="submit"
          className="mt-6 py-3 px-8 text-base md:text-lg bg-black/80 text-white rounded-full mx-auto
                     hover:bg-black duration-500 flex items-center gap-2"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        <p className={`mt-4 text-center ${result.includes("Success") ? "text-green-600" : "text-red-600"}`}>
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
