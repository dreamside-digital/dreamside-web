import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Project, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Project>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, title, tags, github, url, images, client } = content
  const basePath = path.split('/')[0]

  return (
    <div>
      <ScrollTopAndComment />
      <article>
        <SectionContainer>
          <div>
            <header className="pt-6 xl:pb-6">
              <div className="gap-6 max-lg:mb-6 max-lg:space-y-6 lg:grid lg:grid-cols-2">
                {images.map((image, index) => (
                  <Image
                    key={image.src}
                    alt={image.alt}
                    src={image.src}
                    className={`shadow-md ${
                      index === 0
                        ? 'col-span-2 aspect-video w-full object-cover object-center'
                        : 'object-contain'
                    }`}
                    width={1400}
                    height={788}
                    priority={index === 0}
                  />
                ))}
              </div>
            </header>
            <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
              <div className="py-4 xl:col-span-3 xl:row-span-2 xl:py-8 xl:pb-0">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className="prose max-w-none pb-8 pt-10 dark:prose-invert dark:prose-a:text-white dark:hover:prose-a:text-secondary-300">
                  {children}
                </div>
              </div>
              <aside>
                <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                  {client && (
                    <div className="py-4 xl:py-8">
                      <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Client
                      </h2>
                      <p>{client}</p>
                    </div>
                  )}
                  {tags && (
                    <div className="py-4 xl:py-8">
                      <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Tags
                      </h2>
                      <div className="flex xl:flex-col">
                        {tags.map((tag) => (
                          <div key={tag} className="mr-3 text-sm font-medium">{tag}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  {url && (
                    <div className="py-4 xl:py-8">
                      <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Website
                      </h2>
                      <Link href={url}>Visit the website</Link>
                    </div>
                  )}
                  {github && (
                    <div className="py-4 xl:py-8">
                      <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Source
                      </h2>
                      <Link href={github}>View on GitHub</Link>
                    </div>
                  )}
                </div>
              </aside>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-span-3 xl:col-start-1 xl:divide-y">
                {(next || prev) && (
                  <div className="flex justify-between py-4">
                    {prev && prev.path && (
                      <div>
                        <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Project
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Project
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="py-4">
                  <Link href={`/${basePath}`} className="btn-theme" aria-label="Back to projects">
                    &larr; Back to projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </article>
    </div>
  )
}
