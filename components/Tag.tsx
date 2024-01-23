import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-secondary-300"
    >
      {text}
    </Link>
  )
}

export default Tag
