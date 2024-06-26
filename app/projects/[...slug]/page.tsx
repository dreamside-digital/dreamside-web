import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import type { Project } from 'contentlayer/generated'
import ProjectLayout from '@/layouts/ProjectLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allProjects.find((p) => p.slug === slug)

  if (!post) {
    return
  }

  let imageList = [{ src: siteMetadata.socialBanner, alt: 'Dreamside Digital' }]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [{ src: post.images }] : post.images
  }
  const ogImages = imageList.map((img) => {
    const imgSrc = img.src
    return {
      url: imgSrc.includes('http') ? imgSrc : siteMetadata.siteUrl + imgSrc,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: ogImages,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allProjects.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allProjects.filter((p) => !p.draft)
  sortedCoreContents.sort((a, b) => a.order - b.order)
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allProjects.find((p) => p.slug === slug) as Project
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectLayout content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </ProjectLayout>
    </>
  )
}
