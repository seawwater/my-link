"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, Code2, Terminal, Cpu } from "lucide-react";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-50 p-6 selection:bg-purple-500/30">
      
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-purple-600/20"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-600/20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-pink-600/20" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.main 
        className="relative z-10 w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 p-8 sm:p-12 shadow-2xl backdrop-blur-xl ring-1 ring-white/50 dark:ring-white/10 dark:shadow-purple-900/10">
          
          <div className="flex flex-col items-center text-center">
            
            {/* Avatar Profile Picture */}
            <motion.div variants={itemVariants} className="relative group mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative h-32 w-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-900">
                <Image 
                  src="/avatar.png" 
                  alt="Profile Picture" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-2">
                김해수
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-zinc-400 mb-6">
                Vibe Coding Learner
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-16 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
            
            {/* Bio */}
            <motion.p variants={itemVariants} className="max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-700 dark:text-zinc-300 mb-10 break-keep">
              안녕하세요! 최신 웹 기술과 디자인을 사랑하는 대학생입니다. 
              현재 아름답고 인터랙티브한 UI를 구현하는 <strong>바이브 코딩</strong>을 깊게 파고들고 있습니다.
            </motion.p>

            {/* Skill Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-sm font-semibold text-slate-700 dark:text-zinc-200 ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition-transform hover:-translate-y-1">
                <Code2 size={16} className="text-purple-500" /> Web Dev
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-sm font-semibold text-slate-700 dark:text-zinc-200 ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition-transform hover:-translate-y-1">
                <Terminal size={16} className="text-blue-500" /> CLI Tools
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-sm font-semibold text-slate-700 dark:text-zinc-200 ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition-transform hover:-translate-y-1">
                <Cpu size={16} className="text-pink-500" /> AI Prompts
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="p-3 rounded-2xl bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>

          </div>
        </div>
      </motion.main>
    </div>
  );
}

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

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  )
}
