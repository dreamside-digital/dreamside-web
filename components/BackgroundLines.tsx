export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 -z-20 hidden h-full items-stretch justify-around dark:flex">
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto border-secondary-500 md:border-r-[1px]" />
      <div className="hidden flex-auto dark:border-secondary-500 md:block" />
    </div>
  )
}
