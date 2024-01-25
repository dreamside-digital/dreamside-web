import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoLight from '@/data/assets/logo-05.svg'
import LogoDark from '@/data/assets/logo-04.svg'
import Link from './Link'
import Image from './Image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="w-full">
    <div className="container mx-auto max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
    <div className="w-full flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div id="main-logo" className="rotate-45 hidden dark:block mr-3 text-primary-300 dark:text-secondary-300 text-xl sm:text-2xl md:text-3x">
              <LogoDark />
            </div>
            <div id="main-logo" className="rotate-45 dark:hidden mr-3 text-primary-300 dark:text-secondary-300 text-xl sm:text-2xl md:text-3x">
              <LogoLight />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white">
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
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/*<SearchButton />*/}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </div>
    </div>
    </header>
  )
}

export default Header
