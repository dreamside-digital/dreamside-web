import Image from './Image'
import Link from './Link'

const Card = ({ title, description, images=[], url, path }) => {
  const image = images[0]
  return (
    <div className="bg-white dark:bg-primary-500 snap-always snap-start aspect-video relative overflow-hidden shadow-[0_0_50px_0_rgba(10,0,41,0.3)] dark:shadow-[0_0_60px_0_rgba(0,163,141,0.7)]">
        {image &&
          <Link href={path} aria-label={`Link to ${title}`}>
            <Image
              alt={image.alt}
              src={image.src}
              className="object-cover object-center w-full aspect-video absolute inset-0"
              width={1400}
              height={788}
            />
          </Link>
        }
        <div className="p-6 absolute bottom-0 right-0 w-1/2 bg-white dark:bg-primary-500">
          <h2 className="mb-2 text-lg uppercase font-semibold leading-8 tracking-wide">
            {path ? (
              <Link href={path} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="">{description}</p>
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
}

export default Card
