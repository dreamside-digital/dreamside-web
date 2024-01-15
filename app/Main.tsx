'use client'

import Link from '@/components/Link'
import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Values from '@/components/Values'
import Projects from '@/components/Projects'
import ProfilePic from '@/components/ProfilePic'
import clients from '@/data/clients'
import { useRef, useEffect } from 'react'


export default function Home({ posts }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);


  return (
    <>
    <div
      ref={targetRef}
      className="pt-36 bg-[radial-gradient(circle_70vw_at_var(--x,10vw)_var(--y,10vh),_#FFFFFF_0%,_transparent_100%)] dark:bg-[radial-gradient(circle_80vw_at_var(--x,10vw)_var(--y,10vh),_rgba(0,245,212,0.3)_0%,_transparent_100%)]"
    >
      <SectionContainer id="landing">
        <div className="max-w-xs md:max-w-md pt-4 pb-32">
          <p className="text-xl md:text-2xl">We are a digital product studio committed to using design and technology for good</p> 
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-right text-6xl sm:text-7xl md:text-8xl lg:text-[8vw] !leading-tight">
            <span className="font-semibold">Let's make a website* you'll </span><span className="handwriting">{` love`}</span>
          </h1>
          <p className="text-right text-xl md:text-2xl py-8">*or app, tool, automation, bot... whatever it is you're dreaming of!</p>
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="py-16">
        <div className="md:w-1/2 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold !leading-tight">We want to work with organizations who share our <span className="handwriting">values</span></h2>
        </div>

        <Values />
       
      </SectionContainer>

      <SectionContainer id="services" className="py-16">
        <div className="w-full h-full md:flex justify-between">
          <div className="w-full md:w-1/3 flex justify-end">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-6">What we <span className="handwriting">do</span></h2>
              <p className="text-xl">Beyond specific services, we take the time to deeply understand our clients' needs (and constraints) and come up with an appropriate digital strategy together.</p>
            </div>
          </div>
          <div className="w-full h-[60vh] md:h-[80vh] md:w-2/3 relative">
            <div className="absolute right-0 top-0 bottom-0 overflow-hidden">
              <Services />  
              <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-white dark:from-primary-500 to-transparent" />
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white dark:from-primary-500 to-transparent" />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="projects" className="py-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-4">Here are some of our favourite <span className="handwriting">projects</span></h2>
        </div>
        <p className="text-right mb-4"><span className="">Scroll</span><span className="text-lg ml-2">→</span></p>
        <Projects />
      </SectionContainer>

      <SectionContainer id="clients" className="py-24">
        <div className="">
          <h2 className="uppercase text-center font-semibold !leading-tight mb-6 tracking-wider">The stellar organizations we've worked with</h2>
        </div>
        <Clients />
      </SectionContainer>

      <SectionContainer id="contact" className="py-16">
        <div className="md:flex">
          <div className="md:basis-1/2 mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-12">So what do <span className="handwriting">you</span> have in mind?</h2>
            <p className="text-xl mb-4">Hi! I'm Shay and I'll be your web developer.</p> 
            <p className="text-xl mb-4">I'd love to meet you and learn more about your project. Feel free to email me at <a href="mailto:shay@brightbit.ca">shay@brightbit.ca</a> and we'll set up a call.</p>
          </div>
          <div className="md:basis-1/2">
            <ProfilePic />
          </div>
        </div>
      </SectionContainer>
    </div>
    </>
  )
}
