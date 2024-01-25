import Image from './Image'
import Link from './Link'

const Card = ({ title, description, images = [], url, path }) => {
  const image = images[0]
  return (
    <div className="relative lg:aspect-video snap-start snap-always overflow-hidden bg-white shadow-[0_0_50px_0_rgba(10,0,41,0.3)] dark:bg-primary-500 dark:shadow-[0_0_60px_0_rgba(0,163,141,0.7)]">
      {image && (
        <Link href={path} aria-label={`Link to ${title}`}>
          <Image
            alt={image.alt}
            src={image.src}
            className="lg:absolute inset-0 aspect-video w-full object-cover object-center"
            width={1400}
            height={788}
          />
        </Link>
      )}
      <div className="lg:absolute bottom-0 right-0 lg:w-1/2 bg-white p-6 dark:bg-primary-500">
        <h2 className="mb-2 text-lg font-semibold uppercase leading-8 tracking-wide">
          {path ? (
            <Link href={path} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="">{description}</p>
        <div className="text-md flex space-x-4">
          <Link href={path} className="btn-theme" aria-label={`Link to ${title}`}>
            Case Study
          </Link>
          {url && (
            <Link href={url} className="btn-theme" aria-label={`Link to ${title}`}>
              Website
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
