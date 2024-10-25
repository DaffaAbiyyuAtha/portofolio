import React from "react";
import './App.css'
import Foto from "./assets/img/foto.png"
import Project1 from "./assets/img/project1.png"
import Project2 from "./assets/img/project2.png"
import Project3 from "./assets/img/project3.jpg"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";

function App() {
  const [more1, setMore1] = React.useState(true);
  const [more2, setMore2] = React.useState(true);
  const [more3, setMore3] = React.useState(true);

  function open1() {
    if (more1 === true) {
      setMore1(false)
      setMore2(true)
      setMore3(true)
    } else {
      setMore1(true)
    }
  }
  function open2() {
    if (more2 === true) {
      setMore1(true)
      setMore2(false)
      setMore3(true)
    } else {
      setMore2(true)
    }
  }
  function open3() {
    if (more3 === true) {
      setMore1(true)
      setMore2(true)
      setMore3(false)
    } else {
      setMore3(true)
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-32 fixed">
        <div className="flex flex-col items-center gap-5 mb-14">
          <img src={Foto} alt="" className="max-w-64"/>
          <div className="text-[#C6CBD7] text-6xl">
            Daffa Abiyyu Atha
          </div>
          <div className="text-[#C6CBD7] text-2xl">
            Full Stack Web Developer
          </div>
        </div>
        <div className="text-[#575D77] hover:text-[#C6CBD7] mb-5">
          <button>
            About Me
          </button>
        </div>
        <div className="text-[#575D77] hover:text-[#C6CBD7] mb-5">
          <a href="#project">
            Project
          </a>
        </div>
        <div className="text-[#575D77] hover:text-[#C6CBD7]">
          <button>
            Experience
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
      <div className="w-1/2">
      </div>
      <div className="w-1/2 ">
        <div className="w-full py-32 pr-32">
          <div className="text-[#C6CBD7] text-2xl underline mb-5">
            About Me
          </div>
          <div className="text-[#575D77] text-sm mb-2">
            Daffa is a beginner who is currently pursuing a career in the programming world with a specialization as a full-stack web developer. He is skilled in using JavaScript and Go programming languages, as well as proficient in HTML, React.js, Tailwind CSS, and UI/UX Design. His educational background is in informatics, provides a strong foundation for technical understanding.
          </div>
          <div className="text-[#575D77] text-sm mb-5">
            He is also a graduate of the Fazztrack Bootcamp, where he learned in depth how to become a full-stack developer with a focus on JavaScript and Go. This experience strengthened his technical skills and gave him a deeper understanding of application development from both the frontend and backend perspectives. His ambition is to continue growing in the industry and contribute through effective and innovative solutions. He is excited to join and grow with a team that drives technological innovation.
          </div>
          <div id="project" className="text-[#C6CBD7] text-2xl underline mb-5">
            Project
          </div>
          <div className="flex gap-12 mb-5 hover:bg-[#191B33] hover:p-4 hover:rounded-xl hover:shadow-xl group">
            <div className="max-w-64 min-w-[128px]">
              <img src={Project1} alt="" className="w-full h-auto" />
            </div>
            <div>
              <a href="http://103.93.58.89:20201/" className="text-[#C6CBD7] text-xl mb-3 group-hover:text-[#00F3D5]">Mytick</a>
              {more1 ? (
                <div className="text-[#575D77] text-sm">
                  Welcome to the MyTick Full Stack Web Project! This project integrates a powerful backend with a sleek and responsive frontend using Tailwind ...
                </div>
              ) :  (
                <div className="text-[#575D77] text-sm">
                  Welcome to the MyTick Full Stack Web Project! This project integrates a powerful backend with a sleek and responsive frontend using Tailwind CSS, creating a seamless and engaging experience for purchasing tickets online.
                  <br /><br />
                  MyTick is like a superhero for online events in Indonesia! Imagine easily exploring the latest events or trending gatherings and booking them with confidence. It's like having a magic platform that lets you browse, book, and securely pay for tickets—all supported by a reliable backend to ensure smooth, uninterrupted service.
                </div>
              )}
              <button onClick={open1} className="text-[#00F3D5] text-sm mb-3">See More</button>
              <div className="flex w-full overflow-x-scroll scrollbar-hide text-sm gap-2">
                <div className="flex gap-2 flex-shrink-0">
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">ReactJS</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">Golang</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">Tailwind</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 mb-5 hover:bg-[#191B33] hover:p-4 hover:rounded-xl hover:shadow-xl group">
            <div className="max-w-64 min-w-[128px]">
              <img src={Project2} alt="" className="w-full h-auto" />
            </div>
            <div>
              <div className="text-[#C6CBD7] text-xl mb-3 group-hover:text-[#00F3D5]">Conis</div>
              {more2 ? (
                <div className="text-[#575D77] text-sm">
                  Welcome to the Conis Full Stack Web Project! This platform combines a powerful backend with a sleek and responsive frontend designed with Tailwind ...
                </div>
              ) :  (
                <div className="text-[#575D77] text-sm">
                  Welcome to the Conis Full Stack Web Project! This platform combines a powerful backend with a sleek and responsive frontend designed with Tailwind CSS, creating a seamless and engaging experience for purchasing coffee online.
                  <br /><br />
                  Conis is like a superhero for coffee lovers in Indonesia! Imagine browsing the finest coffee selections and ordering them with ease. It’s like having a magical platform that lets you explore, select, and securely pay for coffee—backed by a reliable backend that ensures smooth transactions and a premium experience from start to finish.
                </div>
              )}
              <button onClick={open2} className="text-[#00F3D5] text-sm mb-3">See More</button>
              <div className="flex w-full overflow-x-scroll scrollbar-hide text-sm gap-2">
                <div className="flex gap-2 flex-shrink-0">
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">ReactJS</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">Golang</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">Tailwind</div>
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 mb-5 hover:bg-[#191B33] hover:p-4 hover:rounded-xl hover:shadow-xl group">
            <div className="max-w-64 min-w-[128px]">
              <img src={Project3} alt="" className="w-full h-40" />
            </div>
            <div>
              <div className="text-[#C6CBD7] text-xl mb-3 group-hover:text-[#00F3D5]">WeddingPres</div>
              {more3 ? (
                <div className="text-[#575D77] text-sm">
                  Welcome to the WeddingPress Mobile Invitation Web Project! This mobile-only website, crafted entirely with WordPress, provides a seamless and ...
                </div>
              ) :  (
                <div className="text-[#575D77] text-sm">
                  Welcome to the WeddingPress Mobile Invitation Web Project! This mobile-only website, crafted entirely with WordPress, provides a seamless and stylish experience for creating and sharing wedding invitations online.
                  <br /><br />
                  WeddingPress is like a personal assistant for couples in Indonesia! Imagine effortlessly inviting guests and sharing wedding details all in one place, directly accessible on their mobile devices. It’s like having a magical portal that allows guests to RSVP, view event details, and celebrate the couple's journey—all from the convenience of their phones, backed by the simplicity and reliability of WordPress.
                </div>
              )}
              <button onClick={open3} className="text-[#00F3D5] text-sm mb-3">See More</button>
              <div className="flex w-full overflow-x-scroll scrollbar-hide text-sm gap-2">
                <div className="flex gap-2 flex-shrink-0">
                  <div className="text-[#00F3D5] bg-[#10273B] py-2 px-4 rounded-full">WordPress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default App
