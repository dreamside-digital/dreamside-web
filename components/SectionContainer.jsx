export default function SectionContainer({ children, ...rest }) {
  return (
    <section {...rest}>
      <div
        className={`container mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0`}
      >
        {children}
      </div>
    </section>
  )
}
