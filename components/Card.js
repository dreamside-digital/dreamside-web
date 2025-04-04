import Image from './Image'
import Link from './Link'

const Card = ({ title, summary, images = [], url, path }) => {
  const image = images[0]
  return (
    <div className="relative snap-start snap-always overflow-hidden bg-white shadow-[0_0_50px_0_rgba(10,0,41,0.3)] dark:bg-primary-900 dark:shadow-[0_0_60px_0_rgba(87,31,255,0.3)] lg:aspect-video">
      {image && (
        <Link href={path} aria-label={`Link to ${title}`}>
          <Image
            alt={image.alt}
            src={image.src}
            className="inset-0 aspect-video w-full object-cover object-center lg:absolute"
            width={1400}
            height={788}
          />
        </Link>
      )}
      <div className="bottom-0 right-0 bg-white p-6 shadow-lg dark:bg-primary-900 lg:absolute lg:w-1/2">
        <h2 className="mb-2 text-lg font-semibold uppercase leading-8 tracking-wide">
          {path ? (
            <Link href={path} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="">{summary}</p>
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
