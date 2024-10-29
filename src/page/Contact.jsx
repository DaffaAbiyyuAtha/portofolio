import React, {useRef, useEffect} from "react";
import Foto from "../assets/img/foto.png"
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa6";

function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const handleNavigation = (path) => {
    setLoading(true); 
    setTimeout(() => {
      navigate(path); 
      setLoading(false); 
    }, 2000); 
  };

  const handleOpenCV = () => {
    setLoading(true);
    setTimeout(() => {
      window.open("/src/assets/pdf/CV.pdf", "_blank");
      setLoading(false)
    }, 2000);
  };

  const email = "daffaabiyyu7861@gmail.com"; 
  const subject = "portofolio"; 
  const body = "Halo, saya melihat portofolio Anda dan sangat tertarik. Saya ingin menanyakan beberapa informasi lebih lanjut.";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      <div className="flex gap-5 justify-end w-full fixed z-10 py-10 px-32">
        <div className="flex gap-5 bg-[#191B33] py-4 px-7 rounded-full shadow-xl">
          <button 
            onClick={() => handleNavigation("/")} 
            className="text-[#C6CBD7] hover:text-[#00F3D5] hover:underline">
              Home
          </button>
          <button 
            onClick={() => handleNavigation("/about")} 
            className="text-[#C6CBD7] hover:text-[#00F3D5] hover:underline">
              About Me
          </button>
          <button 
            onClick={() => handleNavigation("/contact")}
            className="text-[#575D77]"
            disabled>
            Contact
          </button>
        </div>
        <button onClick={handleOpenCV} className="p-4 bg-[#10273B] text-[#00F3D5] hover:bg-[#00F3D5] hover:text-[#12122B] rounded-full">
          CV
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2 p-32 fixed">
          <div className="flex flex-col justify-center h-screen items-center gap-5 mb-14 my-[-128px]">
            <img src={Foto} alt="" className="max-w-64"/>
            <div className="text-[#C6CBD7] text-4xl">
              Daffa Abiyyu Atha
            </div>
            <div className="text-[#C6CBD7] text-xl">
              Full Stack Web Developer
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-end fixed text-[#575D77] px-32 py-16 h-screen">
          <a href="https://github.com/DaffaAbiyyuAtha" className="hover:text-[#C6CBD7]">
           <FaGithub className="w-5 h-5"/>
          </a>
          <a href="https://www.linkedin.com/in/daffa-abiyyu/" className="hover:text-[#C6CBD7]">
           <FaLinkedinIn className="w-5 h-5"/>
          </a>
          <a href="https://www.instagram.com/daffaabiyyuatha" className="hover:text-[#C6CBD7]">
           <FaInstagram className="w-5 h-5"/>
          </a>
        </div>
        <div className="w-1/2">
        </div>
        <div className="w-1/2 ">
          <div className="w-full py-32 h-screen pr-32">
            <div className="text-[#C6CBD7] fixed text-2xl underline mb-36">
                Contact Me
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-screen fixed my-[-128px]">
                <a href="https://wa.me/6281249704047?text=Halo,%20saya%20melihat%20portofolio%20Anda%20dan%20sangat%20tertarik.%20Saya%20ingin%20menanyakan%20beberapa%20informasi%20lebih%20lanjut" 
                    className="flex items-center justify-center gap-2 text-2xl mb-5 text-[#575D77] group">
                    < FaWhatsapp className="group-hover:text-[#00F3D5]"/>
                    <div className="group-hover:text-[#00F3D5]">
                        WhatsApp
                    </div>
                </a>
                <div className="flex justify-center text-[#575D77] mb-5">
                    or
                </div>
                <a href={gmailLink} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 text-2xl mb-5 text-[#575D77] group">
                    < FaEnvelope className="group-hover:text-[#00F3D5]"/>
                    <div className="group-hover:text-[#00F3D5]">
                        Gmail
                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
