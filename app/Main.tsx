import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Services from '@/components/Services'
import Values from '@/components/Values'
import Projects from '@/components/Projects'


export default function Home({ posts }) {

  return (
    <div>
      <SectionContainer id="landing">
        <div className="max-w-xs md:max-w-md pt-4 pb-32">
          <p className="text-xl md:text-2xl">We are a digital product studio committed to using design and technology for good</p> 
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-right text-6xl sm:text-7xl md:text-8xl lg:text-[8vw]">
            <span className="font-semibold">Let's make a website* you'll </span><span className="font-display inline-block lg:text-[11vw] ml-1 translate-y-4 text-primary-400 dark:text-primary-300">{` love`}</span>
          </h1>
          <p className="text-right text-xl md:text-2xl py-8">*or app, tool, automation, bot... whatever it is you're dreaming of!</p>
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="py-16">
        <div className="md:w-1/2 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold">We want to work with organizations who share our <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">values</span></h2>
        </div>

        <Values />
       
      </SectionContainer>

      <SectionContainer id="services" className="py-12">
        <div className="w-full h-full md:flex justify-between">
          <div className="w-full md:w-1/3 order-2 flex justify-end items-center order-1 md:order-2">
            <div className="mb-12">
              <h2 className="text-5xl font-semibold mb-6">What we <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">do</span></h2>
              <p className="text-xl">Beyond specific services, we take the time to deeply understand our clients' needs (and constraints) and come up with an appropriate digital strategy together.</p>
            </div>
          </div>
          <div className="w-full h-[60vh] md:w-2/3 relative order-2 md:order-1">
            <div className="absolute left-0 top-0 bottom-0 overflow-hidden">
              <Services />  
              <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-primary-900 to-transparent" />
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-primary-900 to-transparent" />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="projects" className="py-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold mb-12">Here's are some of our favourite <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">projects</span></h2>
        </div>
        <Projects />
      </SectionContainer>

      <SectionContainer id="contact" className="py-16">
        <div className="md:w-1/2 mb-12">
          <h2 className="text-5xl font-semibold">So what do <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">you</span> have in mind?</h2>
        </div>

        <div className="flex">
          <div className="aspect-square bg-primary-600 order-2">
          </div>
          <div className="md:w-1/2 mb-12">
            <p className="text-xl mb-4">Hi! I'm Shay and I'll be your web developer.</p> 
            <p className="text-xl mb-4">I'd love to meet you and hear more about your project. Feel free to email me at <a href="mailto:shay@brightbit.ca">shay@brightbit.ca</a> and we'll set up a call.</p>
            <p className="text-xl mb-4">Let's get this started!</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
