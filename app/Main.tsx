import Link from '@/components/Link'
import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Values from '@/components/Values'
import Projects from '@/components/Projects'
import ProfilePic from '@/components/ProfilePic'
import SpinningAsterix from '@/components/SpinningAsterix'
import clients from '@/data/clients'
import siteMetadata from '@/data/siteMetadata'
import BackgroundGlow from '@/components/BackgroundGlow'
import BackgroundLines from '@/components/BackgroundLines'

export default function Home({ posts }) {

  return (
    <>
      <SectionContainer id="landing" className="pb-12">
        <div className="max-w-xs md:max-w-md pt-4 pb-32">
          <p className="text-xl md:text-2xl">{siteMetadata.description}</p> 
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-right text-6xl sm:text-7xl md:text-8xl lg:text-[8vw] !leading-tight">
            <span className="font-semibold">Let's make a </span>
            <span className="font-semibold inline-block">
              <span className="flex flex-nowrap">website <span className="translate-y-2 md:-translate-x-1 md:translate-y-3"><SpinningAsterix /></span> </span>
            </span>
            <span className="font-semibold"> you'll </span>
            <span className="handwriting">{` love`}</span>
          </h1>
          <p className="text-right text-xl md:text-2xl py-8">*or app, tool, automation, bot... whatever it is you're dreaming of!</p>
        </div>
      </SectionContainer>

      <SectionContainer id="intro" className="py-12 md:py-20">
        <div className="bg-white dark:bg-primary-500 p-8 py-12 md:p-16 md:py-24">
          <div className="md:flex">
            <div className="md:basis-1/2">
              <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-12"><span className="handwriting">Hello!</span> I'm Shay and I'll be your web developer.</h2>
              <p className="text-xl mb-4">I'm a creative developer with a decade of experience spanning full-stack web development, web design, graphic design, online communications, and project management.</p>
              <p className="text-xl mb-4">In 2018, I co-founded Nomadic Labs, a digital agency committed to working with nonprofits and social enterprises. In 2024, Nomadic Labs rebranded as Studio Shay, with a renewed vision for creating digital products that engage and empower communities and enable organizations to accelerate their impact.</p>
              <a className="btn-theme !text-xl font-semibold" href={`mailto:${siteMetadata.email}`}>{`Say hi 👋`}</a>
            </div>
            <div className="md:basis-1/2">
              <ProfilePic />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="py-12 md:py-20 overflow-hidden">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold !leading-tight">I work with organizations who share my <span className="handwriting">values</span></h2>
        </div>

        <Values />
       
      </SectionContainer>

      <SectionContainer id="services" className="py-12 md:py-20">
        <div className="w-full h-full md:flex justify-between">
          <div className="w-full md:w-1/3 flex flex-col justify-between md:order-2">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-6">What I <span className="handwriting">do</span></h2>
              <p className="text-xl">Beyond specific services, I take the time to deeply understand my clients' needs (and constraints) so that we can come up with an appropriate digital strategy together.</p>
            </div>
            {/*<div className="">
              <Image src="/images/pair-programming.svg" width={400} height={400} />
            </div>*/}
          </div>
          <div className="w-full h-[60vh] md:h-[80vh] md:w-2/3 relative md:order-1">
            <div className="absolute left-0 top-0 bottom-0 overflow-hidden">
              <Services />  
              {/*<div className="absolute top-0 w-full h-12 bg-gradient-to-b from-white dark:from-primary-500 to-transparent" />*/}
              {/*<div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white dark:from-primary-500 to-transparent" />*/}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="projects" className="py-12 md:py-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold !leading-tight mb-4">Here are some of my favourite <span className="handwriting">projects</span></h2>
        </div>
        <p className="text-right mb-4"><span className="">Scroll</span><span className="text-lg ml-2">→</span></p>
        <Projects />
      </SectionContainer>

      <section id="clients" className="py-12 md:py-20 max-w-[100vw] overflow-hidden">
        <Clients />
      </section>

      <SectionContainer id="packages" className="py-12 md:py-12">
        <div className="bg-white dark:bg-primary-500 p-8 py-12 md:p-16 space-y-12">
          <h2 className="text-4xl md:text-5xl font-semibold !leading-tight">So what do <span className="handwriting">you</span> have in mind?</h2>
          
          <div>
            <p className="text-xl mb-4">I offer two standard packages that cover the requirements of many typical projects. If you have more specialized needs, I'd be happy to put together a proposal for you.</p>
            <p className="text-xl mb-4">Feel free to reach out to me at <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a> and we'll get the conversation started!</p>
          </div>
          <div className="md:grid md:grid-cols-2 gap-6 max-md:space-y-6">

            <div className="space-y-6 border-[1px] border-primary-300 dark:border-secondary-300 p-6 text-lg">
              <h3 className="text-3xl font-semibold dark:text-secondary-300">Editorial website</h3>

              <p>If your website is going to be focused on great content such as a blog, portfolio, or news site, this is the package for you.</p>

              <ul className="list-disc ml-6">
                <li>Custom designed website with up to five page templates to suit your content needs</li>
                <li>Modern content management system so you can edit and update the website yourself</li>
                <li>Ability to tag, categorize, and sort your content</li>
                <li>Built to look great and work fast on all screen sizes</li>
                <li>Meets WCAG 2.0 accessibility standards</li>
                <li>Includes web analytics</li>
                <li>Includes SEO tools</li>
              </ul>

              <p className="dark:text-secondary-300 text-xl font-semibold">$6,000 base fee</p>

              <p className="">Optional add-ons:</p>
              <ul className="list-disc ml-6">
                <li>Managed hosting</li>
                <li>Ongoing support and development</li>
                <li>Additional features such as commenting, social media integrations, email notifications, and more.</li>
              </ul>
            </div>

            <div className="space-y-6 border-[1px] border-primary-300 dark:border-secondary-300 p-6 text-lg">
              <h3 className="text-3xl font-semibold dark:text-secondary-300">Data-centric website</h3>
              <p>If you're looking to build a website with a more data-centric purpose such as location mapping, data visualization, or a resource directory, this package may be right for you.</p>
              <p>It includes everything from the Editorial website package, plus:</p>
              <ul className="list-disc ml-6">
                <li>Custom developed database with a data management system</li>
                <li>Custom data visualizations for your use case, such as mapping, graphs, tables, etc.</li>
                <li>User interface for sorting, filtering, and searching data</li>
              </ul>
              <p className="dark:text-secondary-300 text-xl font-semibold">$9,000 base fee</p>
              <p className="">Optional add-ons:</p>
              <ul className="list-disc ml-6">
                <li>Managed hosting</li>
                <li>Ongoing support and development</li>
                <li>Additional features such as integrations with other apps, automated data input, and more.</li>
              </ul>

            </div>

            <div className="col-span-2 space-y-6 border-[1px] border-primary-300 dark:border-secondary-300 p-6 text-lg">
              <h3 className="text-3xl font-semibold dark:text-secondary-300">Something else?</h3>
              <p>I am very open to taking on projects that fall outside my standard packages. I'll work with you to understand your needs, come up with an appropriate strategy, and create a proposal for your approval.</p>
              <p>Here are some examples of projects that would be in my wheelhouse:</p>
              <ul className="list-disc ml-6">
                <li>Creating a web app with user accounts and members-only features</li>
                <li>Branding, logo design, and illustration</li>
                <li>Develping a custom plugin or component</li>
                <li>Refreshing the design of an existing website</li>
                <li>Technical support and/or training</li>
              </ul>
              <p className="dark:text-secondary-300 text-xl font-semibold">Contact me to discuss your needs and request a proposal.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a className="btn-theme text-center !text-3xl font-semibold" href={`mailto:${siteMetadata.email}`}>{`Say hi at ${siteMetadata.email}`}</a>
          </div>
        </div>
      </SectionContainer>
      <BackgroundLines />
      <BackgroundGlow />
    </>
  )
}
