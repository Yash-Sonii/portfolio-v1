import logo from "../assets/projects/image.png"
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-screen flex items-center justify-between px-4 py-6 overflow-hidden">
      <div className="flex-shrink-0 rounded-xl shadow-md">
        <img src={logo} alt="logo" className="w-[6rem] h-auto object-contain cursor-pointer" />
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 text-white text-3xl">
       <a href="https://www.linkedin.com/in/yash-soni-273464298/"> <FaLinkedin className="cursor-pointer hover:text-sky-400 transition-colors" /></a>

       <a href="https://github.com/Yash-Sonii/"> <FaGithub className="cursor-pointer hover:text-sky-400 transition-colors" /></a>

       <a href="https://x.com/YashSon80956620"> <FaSquareXTwitter className="cursor-pointer hover:text-sky-400 transition-colors" /></a>

       <a href="https://www.instagram.com/yash._.sonii/"> <FaInstagram className="cursor-pointer hover:text-sky-400 transition-colors" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
