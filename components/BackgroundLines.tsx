export default function BackgroundLines() {
  return (
    <div className="hidden dark:flex h-full justify-around items-stretch absolute inset-0 -z-20">
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto border-r-[1px] border-secondary-500" />
      <div className="flex-auto md:border-r-[1px] border-secondary-500" />
      <div className="hidden md:block flex-auto dark:border-secondary-500" />
    </div>
  )
}
