import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import services from '@/data/services'

export default function Home({ posts }) {
  return (
    <div>
      <SectionContainer id="landing">
        <div className="max-w-sm md:max-w-md pt-4 pb-32">
          <p className="text-xl md:text-2xl">We are a digital product studio committed to using design and technology for good</p> 
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-right text-6xl sm:text-7xl md:text-8xl lg:text-[8vw]">
            <span className="font-semibold">Let's make a website<span>*</span> you'll </span><span className="font-display inline-block lg:text-[11vw] ml-1 translate-y-4 text-primary-400 dark:text-primary-300">{` love`}</span>
          </h1>
          <p className="text-right text-xl md:text-2xl py-8">*or app, tool, automation, bot... whatever it is you're dreaming of!</p>
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="py-16">
        <div className="w-3/4 md:w-1/2 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold">We want to work with organizations who share our <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">values</span></h2>
        </div>

        <div className="flex justify-end">
          <div className="w-3/4 md:w-1/2 space-y-12">
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Inclusive design</h3>
              <p className="text-xl">We use human-centred design practices to create products for diverse audiences with a wide range of abilities. We know our way around the WCAG guidelines but we go beyond compliance - accessibility is a foundational part of the design process and not a checklist.</p>
            </div>

            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Collaborative process</h3>
              <p className="text-xl">Collaborative design is a team effort that combines your subject matter expertise, our design and technical know-how, and the lived experiences of the communities you serve. We work with you to understand your organization's objectives and strategize towards products that can help you achieve greater social impact.</p>
            </div>

            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Ethical tech</h3>
              <p className="text-xl">We believe in the power of open and actively contribute to the open-source community. We'll discuss with you to decide how your project can take part in the open-source ecosystem.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="services" className="py-12 relative">
        <div className="flex justify-between">
          <div className="w-3/4 md:w-1/3 order-2 flex justify-end items-center">
            <div>
              <h2 className="text-5xl font-semibold mb-6">What we <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">do</span></h2>
              <p className="text-xl">Beyond specific services, we take the time to deeply understand our clients' needs (and constraints) and come up with an appropriate digital strategy together.</p>
            </div>
          </div>
          <div className="">
            <div id="services-list">
              <ul className="text-7xl font-semibold space-y-6">
                {
                  services.map(service => (<li key={service.title}>{service.title}</li>))
                }
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="projects" className="py-16">
        <div className="w-3/4 md:w-1/2">
          <h2 className="text-5xl font-semibold mb-12">Here's are some of our favourite <span className="font-display inline-block font-normal text-7xl ml-1 translate-y-2 text-primary-400 dark:text-primary-300">projects</span></h2>
        </div>
        <div>
          <ul className="flex flex-nowrap space-x-6 overflow-auto styled-scrollbar snap-x snap-mandatory ">
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">Unboring KW</h3>
            </li>
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">The Longest Night: A Solstice Play</h3>
            </li>
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">Samuelson-Glushko Canadian Internet Policy and Public Interest Clinic</h3>
            </li>
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">Abortion Access Tracker</h3>
            </li>
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">Pathways to Care</h3>
            </li>
            <li className="w-10/12 md:w-4/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square bg-primary-600">
              </div>
              <h3 className="my-4 font-semibold text-xl text-primary-200 hover:text-primary-600 dark:hover:text-primary-400">RISE Cities</h3>
            </li>
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer id="contact" className="py-16">
        <div className="w-3/4 md:w-1/2 mb-12">
          <h2 className="text-5xl font-semibold">So what do you have in mind?</h2>
        </div>

        <div className="flex">
          <div className="aspect-square bg-primary-600 order-2">
          </div>
          <div className="w-3/4 md:w-1/2 mb-12">
            <p className="text-xl mb-4">Hi! I'm Shay and I'll be your web developer.</p> 
            <p className="text-xl mb-4">I'd love to meet you and hear more about your project. Feel free to email me at <a href="mailto:shay@brightbit.ca">shay@brightbit.ca</a> and we'll set up a call.</p>
            <p className="text-xl mb-4">Let's get this started!</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
