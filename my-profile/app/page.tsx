"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Code2, Terminal, Cpu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-6 px-4 md:px-10 max-w-7xl mx-auto selection:bg-neo-pink selection:text-white pb-20">
      
      {/* Navbar (Top bar) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="neo-box bg-white flex justify-between items-center px-6 py-4 rounded-xl mb-10 w-full"
      >
        <span className="font-extrabold text-2xl tracking-tighter">HAESOO.KIM</span>
        <button className="neo-box neo-box-hover bg-neo-yellow text-black font-bold py-2 px-6 rounded-lg uppercase tracking-wider text-sm flex items-center gap-2">
          Let's Talk <ArrowRight size={16} strokeWidth={3} />
        </button>
      </motion.nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="md:col-span-8 neo-box bg-neo-purple rounded-2xl p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="inline-block bg-white text-black font-black uppercase px-4 py-1 rounded-md border-2 border-black w-fit mb-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-sm md:text-base">
            Front-end Explorer 🚀
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase leading-[0.9] tracking-tighter text-black [text-shadow:4px_4px_0px_#fff]">
            HELLO, <br /> I'M HAESOO.
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-4 bg-white/20 p-4 rounded-xl border-l-[6px] border-black text-black">
            바이브 코딩 앤 크리에이티브 디자인 
          </p>
        </motion.div>

        {/* Profile Avatar Card */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="md:col-span-4 neo-box bg-neo-mint rounded-2xl p-6 flex flex-col items-center justify-center group"
        >
          <div className="relative w-48 h-48 md:w-full md:h-full min-h-[250px] rounded-full border-4 border-black overflow-hidden bg-neo-yellow shadow-[4px_4px_0px_#000]">
            <Image 
              src="/neo_avatar.png"
              alt="Pop art Avatar"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* About Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="md:col-span-7 neo-box bg-white rounded-2xl p-8 flex flex-col"
        >
          <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-2 border-b-4 border-black pb-2">
            Who am I <span className="inline-block w-8 h-8 rounded-full bg-neo-pink border-2 border-black"></span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed mt-4">
            웹 기술과 아트의 경계를 사랑하는 대학생입니다. 
            <strong>정형화된 틀을 깨고</strong> 개성 넘치는 사용자 경험을 구현하는 것에 항상 열정을 쏟고 있어요. 
            문제를 해결하는 코드 이상의 <span className="bg-neo-yellow px-1 border border-black shadow-[1px_1px_0px_#000]">시각적 퍼포먼스</span>를 추구합니다.
          </p>
        </motion.div>

        {/* Skills Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
          className="md:col-span-5 neo-box bg-neo-green rounded-2xl p-8"
        >
          <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
             Tech Stack <Terminal size={28} strokeWidth={3} />
          </h2>
          <div className="flex flex-wrap gap-4">
            {['React', 'Next.js', 'Tailwind', 'AI Prompts', 'Figma', 'TypeScript'].map((skill, i) => (
              <span key={i} className="neo-box bg-white px-4 py-2 font-bold text-sm uppercase rounded-md shadow-[3px_3px_0px_#000] rotate-[-2deg] hover:rotate-[2deg] transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Social Bottom */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
        className="mt-10 flex gap-4 w-full flex-wrap"
      >
        <a href="#" className="flex-1 neo-box neo-box-hover bg-white flex items-center justify-center p-4 rounded-xl text-black">
          <GithubIcon className="w-8 h-8" />
        </a>
        <a href="#" className="flex-1 neo-box neo-box-hover bg-neo-yellow flex items-center justify-center p-4 rounded-xl text-black">
          <TwitterIcon className="w-8 h-8" />
        </a>
        <a href="#" className="flex-1 neo-box neo-box-hover bg-neo-pink flex items-center justify-center p-4 rounded-xl text-black">
          <Mail className="w-8 h-8" strokeWidth={2.5} />
        </a>
      </motion.div>

      {/* Marquee Footer Component */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t-4 border-black py-2 overflow-hidden z-20">
        <div className="whitespace-nowrap flex animate-marquee text-neo-yellow text-xl font-black uppercase">
           <span className="mr-8">★ AVAILABLE FOR FREELANCE WORK ★ LET'S BUILD SOMETHING AWESOME</span>
           <span className="mr-8">★ AVAILABLE FOR FREELANCE WORK ★ LET'S BUILD SOMETHING AWESOME</span>
           <span className="mr-8">★ AVAILABLE FOR FREELANCE WORK ★ LET'S BUILD SOMETHING AWESOME</span>
           <span className="mr-8">★ AVAILABLE FOR FREELANCE WORK ★ LET'S BUILD SOMETHING AWESOME</span>
           <span className="mr-8">★ AVAILABLE FOR FREELANCE WORK ★ LET'S BUILD SOMETHING AWESOME</span>
        </div>
      </div>

    </div>
  );
}

/* Custom SVG for Brand Icons */
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.996 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  )
}
