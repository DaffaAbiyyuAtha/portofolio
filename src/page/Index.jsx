import React, { useRef, useState, useEffect } from "react";
import Foto from "../assets/img/foto.png";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaArrowDown } from "react-icons/fa6";

function Index() {
  const [showMoreText, setShowMoreText] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const showRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function scroll() {
    setShow(true);
    setTimeout(() => {
      if (showRef.current) {
        showRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="">
        {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="spinner"></div>
            </div>
        )}
      <div className="flex justify-end w-full fixed py-10 px-32">
        <div className="flex gap-5 bg-[#191B33] py-4 px-7 rounded-full shadow-xl">
          <button 
            onClick={() => handleNavigation("/")} 
            className="text-[#575D77]"
            disabled>
              Home
          </button>
          <button 
            onClick={() => handleNavigation("/about")} 
            className="text-[#C6CBD7] hover:text-[#00F3D5] hover:underline">
              About Me
          </button>
          <button className="text-[#C6CBD7] hover:underline hover:text-[#00F3D5]">
            Contact
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center justify-center h-screen w-full">
          <div className="flex flex-col items-center gap-5 mb-14">
            <img src={Foto} alt="" className="max-w-64"/>
            <div className="text-[#C6CBD7] text-6xl">Daffa Abiyyu Atha</div>
            <div className="text-[#C6CBD7] text-2xl">Full Stack Web Developer</div>
            <button 
              onMouseEnter={() => setShowMoreText(true)}
              onMouseLeave={() => setShowMoreText(false)}
              onClick={scroll}
              className="flex items-center text-[#C6CBD7] border-2 border-[#C6CBD7] p-3 rounded-full hover:text-[#00F3D5] hover:border-[#00F3D5]">
              <FaArrowDown />
              {showMoreText && ( 
                <div className="absolute px-10 text-[#00F3D5] mt-2">More for me</div>
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-3 items-end fixed text-[#575D77] px-32 py-16 h-screen">
          <a href="https://github.com/DaffaAbiyyuAtha" className="hover:text-[#C6CBD7]">
            <FaGithub className="w-5 h-5"/>
          </a>
          <a href="https://www.linkedin.com/in/daffa-abiyyu/" className="hover:text-[#C6CBD7]">
            <FaLinkedinIn className="w-5 h-5"/>
          </a>
          <a href="https://wa.me/6281249704047?text=Halo,%20saya%20melihat%20portofolio%20Anda%20dan%20sangat%20tertarik.%20Saya%20ingin%20menanyakan%20beberapa%20informasi%20lebih%20lanjut" className="hover:text-[#C6CBD7]">
            <FaWhatsapp className="w-5 h-5"/>
          </a>
          <a href="https://www.instagram.com/daffaabiyyuatha" className="hover:text-[#C6CBD7]">
            <FaInstagram className="w-5 h-5"/>
          </a>
        </div>
      </div>
      {show && (
        <div ref={showRef} className="h-screen p-32">hallo</div>
      )}
    </div>
  );
}

export default Index;
