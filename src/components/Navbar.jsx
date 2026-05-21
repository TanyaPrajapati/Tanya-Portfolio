import React from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setshowMenu] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Tanya Prajapati
          </a>
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 hover:text-pink-200 group transition duration-300"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-200  transition-all group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="relative text-white/80 hover:text-pink-200 group transition duration-300"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-200  transition-all group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 hover:text-pink-200 group transition duration-300"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-200  transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 hover:text-pink-200 group transition duration-300"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-200  transition-all group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 hover:text-pink-200 group transition duration-300"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-200  transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="md:hidden">
          {showMenu ? 
            <FaXmark
              onClick={() => setshowMenu(!showMenu)}
              className=" text-2xl cursor-pointer"
            />
           : 
            <FaBars
              onClick={() => setshowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          }
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300  h-screen rounded-lg backdrop-blur-sm py-4 px-8 shadow-lg text-center">
          <a onClick={() => setshowMenu(!showMenu)}
            href="#home"
            className="block text-white/80 hover:text-pink-200 group transition duration-300 py-2"
          >
            <span>Home</span>
          </a>
          <a onClick={() => setshowMenu(!showMenu)}
            href="#about"
            className="block text-white/80 hover:text-pink-200 group transition duration-300 py-2"
          >
            <span>About</span>
          </a>
          <a onClick={() => setshowMenu(!showMenu)}
            href="#skills"
            className="block text-white/80 hover:text-pink-200 group transition duration-300 py-2"
          >
            <span>Skills</span>
          </a>
          <a onClick={() => setshowMenu(!showMenu)}
            href="#projects"
            className="block text-white/80 hover:text-pink-200 group transition duration-300 py-2"
          >
            <span>Projects</span>
          </a>
          <a onClick={() => setshowMenu(!showMenu)}  
            href="#contact"
            className="block text-white/80 hover:text-pink-200 group transition duration-300 py-2"
          >
            <span>Contact</span>
          </a>
        </div>
       )}
    </nav>
  );
};

export default Navbar;
