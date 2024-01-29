export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 -z-20 flex h-full items-stretch justify-around">
      <div className="flex-auto border-r-[1px] border-primary-200 dark:border-primary-800" />
      <div className="flex-auto border-r-[1px] border-primary-200 dark:border-primary-800" />
      <div className="flex-auto border-r-[1px] border-primary-200 dark:border-primary-800" />
      <div className="flex-auto border-primary-200 dark:border-primary-800 md:border-r-[1px]" />
      <div className="hidden flex-auto border-primary-200 dark:border-primary-800 md:block" />
    </div>
  )
}
