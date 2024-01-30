'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Home',
            keywords: '',
            shortcut: ['h'],
            section: 'Shortcuts',
            perform: () => router.push('/'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Shortcuts',
            perform: () => router.push('/projects'),
          },
          {
            id: 'blog',
            name: 'Blog',
            keywords: '',
            shortcut: ['b'],
            section: 'Shortcuts',
            perform: () => router.push('/blog'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: post.type === 'Blog' ? 'Blog Posts' : 'Projects',
            subtitle: post.type === 'Blog' ? formatDate(post.date, 'en-US') : post.client,
            perform: () => router.push(post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
