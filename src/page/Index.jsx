import React, { useRef, useState, useEffect } from "react";
import Foto from "../assets/img/foto.png";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaArrowDown } from "react-icons/fa6";

function Index() {
  const [showMoreText, setShowMoreText] = useState(false);
  const [show, setShow] = useState(false);
  const [ums, setUms] = useState(false);
  const [fazz, setFazz] = useState(false);
  const [bwa, setBwa] = useState(false);
  const [formal, setFormal] = useState(false);
  const [nonFormal, setNonFormal] = useState(false);
  const [loading, setLoading] = useState(true);
  const showRef = useRef(null);
  const navigate = useNavigate();
  const umsRef = useRef(null);
  const ftRef = useRef(null);
  const bwaRef = useRef(null);

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

  const handleOpenCV = () => {
    setLoading(true);
    setTimeout(() => {
      window.open("/CV.pdf", "_blank");
      setLoading(false)
    }, 2000);
  };

  function education1() {
    if (formal === false) {
      setFormal(true)
      setNonFormal(false)
    } else {
      setFormal(false)
      setUms(false)
    }
  }

  function education2() {
    if (nonFormal === false) {
      setNonFormal(true)
      setFormal(false)
    } else {
      setNonFormal(false)
    }
  }

  function edu() {
    if (ums === false) {
      setUms(true)
      setFazz(false)
      setBwa(false)
      setTimeout(() => {
        if (umsRef.current) {
          umsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setUms(false)
    }
  }

  function edu2() {
    if (fazz === false) {
      setFazz(true)
      setUms(false)
      setBwa(false)
      setTimeout(() => {
        if (ftRef.current) {
          ftRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setFazz(false)
    }
  }

  function edu3() {
    if (bwa === false) {
      setBwa(true)
      setFazz(false)
      setUms(false)
      setTimeout(() => {
        if (bwaRef.current) {
          bwaRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setFazz(false)
    }
  }

  return (
    <div className="">
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="spinner"></div>
          </div>
        )}
      <div className="flex gap-5 justify-end w-full fixed py-10 px-32 z-50">
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
          <button 
            onClick={() => handleNavigation("/contact")}
            className="text-[#C6CBD7] hover:underline hover:text-[#00F3D5]">
            Contact
          </button>
        </div>
        <button onClick={handleOpenCV} className="p-4 bg-[#10273B] text-[#00F3D5] hover:bg-[#00F3D5] hover:text-[#12122B] rounded-full">
          CV
        </button>
      </div>
      <div className="flex">
        <div className="flex items-center justify-center h-screen w-full">
          <div className="flex flex-col items-center gap-5 mb-14">
            <div className="text-[#00F3D5] font-bold text-6xl">Daffa Abiyyu Atha</div>
            <div className="text-[#C6CBD7] text-2xl text-center">
              Passionate Full Stack Web Developer ready to <br /> bring your ideas to life!
            </div>
            <button 
              onMouseEnter={() => setShowMoreText(true)}
              onMouseLeave={() => setShowMoreText(false)}
              onClick={scroll}
              className="flex items-center text-[#C6CBD7] border-2 border-[#C6CBD7] p-3 rounded-full hover:text-[#00F3D5] hover:border-[#00F3D5]">
              <FaArrowDown />
              {showMoreText && ( 
                <div className="absolute px-10 text-[#00F3D5] mt-2">See My Educational Journey</div>
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
          <a href="https://www.instagram.com/daffaabiyyuatha" className="hover:text-[#C6CBD7]">
            <FaInstagram className="w-5 h-5"/>
          </a>
        </div>
      </div>
      {show && (
        <div ref={showRef} className="flex flex-col gap-5 h-screen p-32 text-[#575D77] relative">
          <div className="">
            <button 
              onClick={education1} 
              className="bg-[#10273B] text-[#00F3D5] py-3 w-60 rounded-lg hover:bg-[#00F3D5] hover:text-[#12122B]">
                Formal Education
            </button>
          </div>
          {formal ? (
            <div className="px-10">
              <button 
                onClick={edu} 
                className="bg-[#10273B] text-[#00F3D5] p-3 w-60 rounded-lg hover:bg-[#00F3D5] hover:text-[#12122B]">
                  Universitas Mummahadiyah Surakarta
              </button>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          <div className="">
            <button 
              onClick={education2} 
              className="bg-[#10273B] text-[#00F3D5] py-3 w-60 rounded-lg hover:bg-[#00F3D5] hover:text-[#12122B]">
                non-formal education
            </button>
          </div>
          {nonFormal ? (
            <div className="flex flex-col gap-5">
              <div className="px-10">
                <button 
                  onClick={edu2} 
                  className="bg-[#10273B] text-[#00F3D5] p-3 w-60 rounded-lg hover:bg-[#00F3D5] hover:text-[#12122B]">
                    FazzTrack
                </button>
              </div>
              <div className="px-10">
                <button 
                  onClick={edu3} 
                  className="bg-[#10273B] text-[#00F3D5] p-3 w-60 rounded-lg hover:bg-[#00F3D5] hover:text-[#12122B]">
                    Build With Angga
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          {ums ? (
            <div ref={umsRef} className="flex justify-center w-full items-center">
              <div className="mt-10 text-[#C6CBD7] rounded-2xl border-2 max-w-[640px] p-10">
                <div className="flex w-full justify-center mb-12 text-2xl">
                  Universitas Muhammadiyyah Surakarta
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="text-center max-w-[600px]">
                    I began my academic journey at Universitas Muhammadiyah Surakarta in 2017, choosing to major in Informatics to build a solid foundation in the technology field. During my studies, I explored fundamental concepts of Informatics, such as algorithms, data structures, computer networks, and web development. These courses provided me with a deeper understanding of how software and applications are developed, as well as how programming logic is effectively applied. I also engaged in various group projects that helped enhance my technical skills and collaborative abilities.
                    <br /><br />
                    Beyond the technical aspects, my university experience taught me the importance of responsibility in the learning process. Achieving good grades and success in education is a personal choice and responsibility, which encouraged me to be more disciplined in my studies. I also honed my communication skills, both in group settings and during presentations in class. This experience gave me the confidence to articulate ideas clearly and professionally—skills that are invaluable in the workplace. Most notably, I learned how to build well-structured web programs, which laid the groundwork for my career in web development.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          {fazz ? (
            <div ref={ftRef} className="flex justify-center w-full items-center">
              <div className="mt-10 text-[#C6CBD7] rounded-2xl border-2 max-w-[640px] p-10">
                <div className="flex w-full justify-center mb-12 text-2xl">
                  Build With Angga
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="text-center max-w-[600px]">
                    In 2022, I enrolled in online courses at Build With Angga to enhance my skills in web programming. In the PHP and Laravel 7 class, I developed an online store project, which provided me with hands-on experience in implementing essential features for e-commerce. This project deepened my understanding of how to work with the Laravel framework, from design to testing and deployment, and solidified my ability to create functional and user-friendly applications.
                    <br /><br />
                    In addition to programming, I also took a UI/UX design class, where I learned the fundamentals of user-centered design. Utilizing Figma, I was taught how to create visually appealing and intuitive designs that not only look good but are also easy to use. This experience enriched my understanding of the importance of user-friendly design, enhancing my ability to create applications that are both functional and aesthetically pleasing. This training equipped me with design skills to complement my web development work.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          {bwa ? (
            <div ref={bwaRef} className="flex justify-center w-full items-center">
              <div className="mt-10 text-[#C6CBD7] rounded-2xl border-2 max-w-[640px] p-10">
                <div className="flex w-full justify-center mb-12 text-2xl">
                  FazzTrack
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="text-center max-w-[600px]">
                    In 2024, I participated in an intensive bootcamp at FazzTrack to deepen my capabilities in full-stack development and sharpen my skills in the latest technologies such as ReactJS and Go. Through this program, I gained an in-depth understanding of end-to-end web application development, utilizing ReactJS on the client side and Go on the server side. Each module in this bootcamp was designed to be immediately applicable to real-world projects, allowing me to see the direct impact of my learning.
                    <br /><br />
                    In addition to technical skills, FazzTrack also provided training in communication, particularly in public speaking. I was trained to effectively convey technical ideas clearly and understandably, both to my team and a wider audience. This training proved invaluable, especially when presenting work outcomes or collaborating with teams from non-technical backgrounds. My experience at FazzTrack equipped me with not only technical skills but also the confidence to communicate and collaborate in a professional environment.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          <div className="p-32"></div>
        </div>
      )}
    </div>
  );
}

export default Index;
