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
import PackageIconEditorial from '@/data/assets/package-icons-editorial.svg'
import PackageIconData from '@/data/assets/package-icons-data.svg'

export default function Home({ posts }) {
  return (
    <>
      <SectionContainer id="landing" className="pb-12">
        <div className="max-w-xs pb-32 pt-4 md:max-w-md">
          <p className="text-xl md:text-2xl">{siteMetadata.description}</p>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-right text-6xl !leading-tight sm:text-7xl md:text-8xl lg:text-[8vw]">
            <span className="font-semibold">Let's make a </span>
            <span className="inline-block font-semibold">
              <span className="flex flex-nowrap">
                website{' '}
                <span className="translate-y-2 md:-translate-x-1 md:translate-y-3">
                  <SpinningAsterix />
                </span>{' '}
              </span>
            </span>
            <span className="font-semibold"> you'll </span>
            <span className="handwriting">{` love`}</span>
          </h1>
          <p className="py-8 text-right text-xl md:text-2xl">
            *or app, tool, automation, bot... whatever it is you're dreaming of!
          </p>
        </div>
      </SectionContainer>

      <SectionContainer id="intro" className="py-12 md:py-20">
        <div className="bg-white p-8 py-12 dark:bg-primary-500 md:p-16 md:py-24">
          <div className="md:flex">
            <div className="md:basis-1/2">
              <h2 className="mb-12 text-4xl font-semibold !leading-tight md:text-5xl">
                <span className="handwriting">Hello!</span> I'm Shay and I'll be your web developer.
              </h2>
              <p className="mb-4 text-xl">
                I'm a creative developer with a decade of experience spanning full-stack web
                development, web design, graphic design, online communications, and project
                management.
              </p>
              <p className="mb-4 text-xl">
                In 2018, I co-founded Nomadic Labs, a digital agency committed to working with
                nonprofits and social enterprises. In 2024, Nomadic Labs rebranded as Studio Shay,
                with a renewed vision for creating digital products that engage and empower
                communities and enable organizations to accelerate their impact.
              </p>
              <a
                className="btn-theme !text-xl font-semibold"
                href={`mailto:${siteMetadata.email}`}
              >{`Say hi 👋`}</a>
            </div>
            <div className="md:basis-1/2">
              <ProfilePic />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="overflow-hidden py-12 md:py-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold !leading-tight md:text-5xl">
            I work with organizations who share my <span className="handwriting">values</span>
          </h2>
        </div>

        <Values />
      </SectionContainer>

      <SectionContainer id="services" className="py-12 md:py-20">
        <div className="h-full w-full justify-between md:flex">
          <div className="flex w-full flex-col justify-between md:order-2 md:w-1/3">
            <div className="mb-12">
              <h2 className="mb-6 text-4xl font-semibold !leading-tight md:text-5xl">
                What I <span className="handwriting">do</span>
              </h2>
              <p className="text-xl">
                Beyond specific services, I take the time to deeply understand my clients' needs
                (and constraints) so that we can come up with an appropriate digital strategy
                together.
              </p>
            </div>
            {/*<div className="">
              <Image src="/images/pair-programming.svg" width={400} height={400} />
            </div>*/}
          </div>
          <div className="relative h-[60vh] w-full md:order-1 md:h-[80vh] md:w-2/3">
            <div className="absolute bottom-0 left-0 top-0 overflow-hidden">
              <Services />
              {/*<div className="absolute top-0 w-full h-12 bg-gradient-to-b from-white dark:from-primary-500 to-transparent" />*/}
              {/*<div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white dark:from-primary-500 to-transparent" />*/}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="projects" className="py-12 md:py-20">
        <div className="mb-12 md:w-1/2">
          <h2 className="mb-4 text-4xl font-semibold !leading-tight md:text-5xl">
            Here are some of my favourite <span className="handwriting">projects</span>
          </h2>
        </div>
        {/*<p className="text-right mb-4"><span className="">Scroll</span><span className="text-lg ml-2">→</span></p>*/}
        <Projects />
      </SectionContainer>

      <section id="clients" className="max-w-[100vw] overflow-hidden py-12 md:py-20">
        <Clients />
      </section>

      <SectionContainer id="packages" className="py-12 md:py-12">
        <div className="space-y-12 bg-white p-8 py-12 dark:bg-primary-500 md:p-16">
          <h2 className="text-4xl font-semibold !leading-tight md:text-5xl">
            So what do <span className="handwriting">you</span> have in mind?
          </h2>

          <div>
            <p className="mb-4 text-xl">
              I offer two standard packages that cover the requirements of many typical projects. If
              you have more specialized needs, I'd be happy to put together a proposal for you.
            </p>
            <p className="mb-4 text-xl">
              Feel free to reach out to me at{' '}
              <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a> and we'll get the
              conversation started!
            </p>
          </div>
          <div className="gap-6 max-md:space-y-6 md:grid md:grid-cols-2">
            <div className="space-y-6 border-[1px] border-primary-300 p-6 text-lg dark:border-secondary-300">
              <div className="mb-4 h-28 w-28 text-primary-300 dark:text-secondary-300">
                <PackageIconEditorial />
              </div>
              <h3 className="text-3xl font-semibold dark:text-secondary-300">Editorial website</h3>

              <p>
                If your website is going to be focused on great content such as a blog, portfolio,
                or news site, this is the package for you.
              </p>

              <ul className="ml-6 list-disc">
                <li>
                  Custom designed website with up to five page templates to suit your content needs
                </li>
                <li>
                  Modern content management system so you can edit and update the website yourself
                </li>
                <li>Ability to tag, categorize, and sort your content</li>
                <li>Built to look great and work fast on all screen sizes</li>
                <li>Meets WCAG 2.0 accessibility standards</li>
                <li>Includes web analytics</li>
                <li>Includes SEO tools</li>
              </ul>

              <p className="">Optional add-ons:</p>
              <ul className="ml-6 list-disc">
                <li>Managed hosting</li>
                <li>Ongoing tech support and development</li>
                <li>
                  Additional features such as commenting, social media integrations, email
                  notifications, and more.
                </li>
              </ul>

              <p className="text-xl font-semibold dark:text-secondary-300">$6,000 + HST</p>
            </div>

            <div className="space-y-6 border-[1px] border-primary-300 p-6 text-lg dark:border-secondary-300">
              <div className="mb-4 h-28 w-28 text-primary-300 dark:text-secondary-300">
                <PackageIconData />
              </div>
              <h3 className="text-3xl font-semibold dark:text-secondary-300">
                Data-centric website
              </h3>
              <p>
                If you're looking to build a website with a more data-centric purpose such as
                location mapping, data visualization, or a resource directory, this package may be
                right for you.
              </p>
              <p>It includes everything from the Editorial website package, plus:</p>
              <ul className="ml-6 list-disc">
                <li>Custom developed database with a data management system</li>
                <li>
                  Data visualizations for your use case, such as mapping, graphs, tables, etc.
                </li>
                <li>User interface for sorting, filtering, and searching data</li>
              </ul>
              <p className="">Optional add-ons:</p>
              <ul className="ml-6 list-disc">
                <li>Managed hosting</li>
                <li>Ongoing tech support and development</li>
                <li>
                  Additional features such as integrations with other apps, automated data input,
                  and more.
                </li>
              </ul>
              <p className="text-xl font-semibold dark:text-secondary-300">$9,000 + HST</p>
            </div>

            <div className="col-span-2 space-y-6 border-[1px] border-primary-300 p-6 text-lg dark:border-secondary-300">
              <h3 className="text-3xl font-semibold dark:text-secondary-300">Something else?</h3>
              <p>
                I am very open to taking on projects that fall outside my standard packages. I'll
                work with you to understand your needs, come up with an appropriate strategy, and
                create a proposal for your approval.
              </p>
              <p>Here are some examples of projects that would be in my wheelhouse:</p>
              <ul className="ml-6 list-disc">
                <li>Creating a web app with user accounts and members-only features</li>
                <li>Branding, logo design, and illustration</li>
                <li>Develping a custom plugin or component</li>
                <li>Refreshing the design of an existing website</li>
                <li>Technical support and/or training</li>
              </ul>
              <p className="text-xl font-semibold dark:text-secondary-300">
                Contact me to discuss your needs and request a proposal.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              className="btn-theme text-center !text-3xl font-semibold"
              href={`mailto:${siteMetadata.email}`}
            >{`Say hi at ${siteMetadata.email}`}</a>
          </div>
        </div>
      </SectionContainer>
      <BackgroundGlow />
      <BackgroundLines />
    </>
  )
}
