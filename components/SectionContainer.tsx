import { ReactNode } from 'react'

interface Props {
  children: ReactNode,
  className: string,
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={`container mx-auto max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 xl:max-w-6xl xl:px-0 ${className}`}>{children}</section>
  )
}
