// app/_components/Header.jsx
"use client";
import Logo from "./Logo";
import { MainMenu } from "./constants";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavItem = ({ title, url }) => (
  <a href={url} className="text-secondary hover:text-blue-800">{title}</a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuClasses = isMenuOpen ? "translate-x-0" :"translate-x-full";
console.log(menuClasses)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#eee] py-8 shadow-xl hover:shadow-inner ">
      <div className="container mx-auto flex justify-between items-center max-w-7xl lg:px-10 px-4">
        
        
        <div className="flex gap-8">
        <Logo />
          <nav className="hidden md:flex gap-6 text-2xl text-secondary mt-3">
            {MainMenu.map((item, index) => (
              <NavItem key={index} title={item.title} url={item.url} />
            ))}
          </nav>
          
        </div>
        <a href="/#contact" className="bg-secondary px-4 py-2 text-lg text-white rounded-lg  hidden visible-above-320">
            Contact us
          </a>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 text-secondary">
          {isMenuOpen ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
        </button>

        <div className={`absolute top-10 mt-8 right-0 h-[100vh] w-[50%] bg-white p-5 
        transition-transform transform z-50 ${menuClasses} shadow-xl
         md:hidden`}>
          <nav className="flex flex-col gap-8 text-xl text-secondary  mt-2 h-full" onClick={() => setIsMenuOpen(false)}>
            {MainMenu.map((item, index) => (
              <NavItem key={index} title={item.title} url={item.url} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );

}