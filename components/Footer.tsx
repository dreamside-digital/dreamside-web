import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Footer() {
  return (
    <footer className="container mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
      <div className="flex items-center justify-between py-6 max-sm:flex-col">
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center py-4">
            <NewsletterForm />
          </div>
        )}
        <div className="mb-3 flex space-x-6">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-primary-200">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
