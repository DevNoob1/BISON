import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../src/components/ui/infinite-moving-cards";
import { Link } from 'react-router-dom';
import { AnimatedTooltip } from "../src/components/ui/animated-tooltip";

import { ContainerScroll } from "./components/ui/container-scroll-animation";

import { LampContainer } from "./components/ui/lamp";
import { motion } from 'framer-motion';


const welcomeText = "Virtual Palette.ai";

const Welcome = () => {
  const people = [
    {
      id: 1,
      name: "Arnav Sharma",
      designation: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Ayush Kumar Rai",
      designation: "Web Dev.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Kushagra Singhal",
      designation: "Web Dev.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Nikhal Regi",
      designation: "Web Dev.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

  ];
  const testimonials = [
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY5HRxQyiGWKfAFsm6G7EDaSdWaVzhkjwlV3PF6VMq8sepIUhzf-TtHwJaGsiAvpIDMubWRJ94ivusPqAvut5o_f0lD2g=w1920-h977', name: 'John Doe', title: 'Software Developer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihby1VQ9xZ_Gwc0z5VYUZAy9X-wX7E6fyjlis1Q2-FoJ0vmGTkd0_ux-bTJubc0q1S6qgL_1E42QA-X4MkeWqaBuqDTwlA=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZEwMzEk5SrESmyoZEJXvqcFMPcg_Vph0JJRuUqDrLSY1WOgLEryu4qQQXxerrWWaW8-DJXdxvnsi_xN4S1CpYeHHEGUg=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbQuWfEoVMD17gUxpL66olQpc-EMqYuFtANY68YDyniIxgb9Yu_y6hQowXAgbohbmRI5lncq58IE9dfoq_ENCDgV0za=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbnxLDKaUHqBhL0VDbIlDWpf6QIbsG-TmkSl2lS6CurcdiMXEPGI7HG7lrKL3XjPpZhKWsNKMpkt51XBPDZg12cNvE7Mw=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaelqTxA49iYFAzKTbS9dUYw_57_hS-c_g0lgnBvzXSq9zI3yPM0IzAsWvEeV9QbElW2Xf0dXjGzWorBTJ_dflbY9clwA=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbMHv3AbshcV9d-6uxvawq9jLAc05wTGEoukGUwk7qR68acaZbzy4-ac7KQS517GD1opZGo7VYwU-mwO544SCetrAcyjA=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihad2fwzfPOqPDe-o9LypWdp5lymBb-Uz81NpO7V-m78Qxlmbp36EJHLl_wigqgPIL_jzfrqr4ElblB9imj8hvdaO5c_rQ=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbA-3EwUQNLojjDXHCOcBzrVBr6Llt_zhBjDTMJ3uGf6Jvyqo1cGhoiOZbZLgxFhCkBdonCsGdPb9z4DCE-FSpG3ck0AQ=w1920-h977', name: 'Jane Smith', title: 'UX Designer' },
    // Add more image URLs as needed
  ];



  return (

    <div className="flex flex-col min-h-screen bg-zinc-950 ">
      <div className="flex flex-col items-center justify-center flex-1" style={{ marginTop: '0px' }}>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.10,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
          >
            Virtual Palette.ai <br />
            <Link to="/about" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mr-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                About
              </span>
            </Link>
            <Link to="/login" className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                <span>Login</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </motion.h1>
        </LampContainer>
      </div>
      <div className="flex flex-col">
        <p className=" text-white text-3xl font-bold text-center mt-5 " >Created by</p>
        <p className=" text-white text-6xl font-extrabold text-center mt-5 " >Alpha Musketeers</p>
        <div className="flex flex-row items-center justify-center pt-[80px] mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
      {/* ContainerScroll */}
      <div className="flex-1 overflow-hidden" style={{ marginTop: '.1px' }}>
        <ContainerScroll
          titleComponent={
            <>
              <h4 className="text-6xl md:text-5xl font-semibold text-white  mb-4">
                Empowering Education with
              </h4>
              <span className="text-5xl md:text-6xl font-bold mt-1 text-white  leading-none">
                Machine Learning & Computer Vision
              </span>
            </>
          }
        />
      </div>
      <InfiniteMovingCards
        className="ml-28 mt-[-200px] mb-5 "
        items={testimonials}
        direction="left"
        speed="slow"
      />
      <footer />
    </div>
  );
};

export default Welcome;
