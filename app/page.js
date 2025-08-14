'use client';
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkmode(true);
    } else {
      setIsDarkmode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkmode]);

  return (
    <>
      <Navbar isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Header isDarkmode={isDarkmode} />
      <About isDarkmode={isDarkmode} />
      <Services isDarkmode={isDarkmode} />
      <Work isDarkmode={isDarkmode} />
      <Contact isDarkmode={isDarkmode} />
      <Footer isDarkmode={isDarkmode} />
    </>
  );
}
