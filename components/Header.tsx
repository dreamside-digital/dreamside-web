import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import LogoLight from '@/data/assets/logo-05.svg'
// import LogoDark from '@/data/assets/logo-04.svg'
import Logomark from '@/data/assets/logomark.svg'
import Logo from '@/data/assets/logo.svg'
import Link from './Link'
import Image from './Image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
        <div className="flex w-full items-start justify-between py-5 sm:items-center sm:py-8">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-end justify-between">
                <div
                  id="main-logo"
                  className="mr-4 text-3xl text-primary-500 dark:text-secondary-300 sm:hidden"
                >
                  <Logo />
                </div>
                <div
                  id="main-logo"
                  className="mr-4 hidden text-sm text-primary-500 dark:text-secondary-300 sm:block"
                >
                  <Logomark />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="flex hidden items-center font-logo text-4xl text-primary-500 dark:text-secondary-300 sm:block sm:text-5xl md:text-5xl">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 sm:block"
                >
                  {link.title}
                </Link>
              ))}
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
