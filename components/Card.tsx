import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, url, path }) => (
  <div className="p-12 bg-white dark:bg-primary-500 snap-always snap-start">
      {imgSrc &&
        <Link href={path} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      }
      <div className="">
        <h2 className="mb-3 text-2xl font-semibold leading-8 tracking-tight">
          {path ? (
            <Link href={path} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-md">{description}</p>
        <div className="flex space-x-4 text-md">
          <Link
            href={path}
            className="btn-theme"
            aria-label={`Link to ${title}`}
          >
            Case Study
          </Link>
          { url && 
            <Link
              href={url}
              className="btn-theme"
              aria-label={`Link to ${title}`}
            >
              Website
            </Link>
          }
        </div>
      </div>
  </div>
)

export default Card
