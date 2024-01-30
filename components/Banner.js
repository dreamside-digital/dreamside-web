const Banner = ({ children }) => {
  return (
    <div className="w-full bg-primary-600 text-primary-100 dark:bg-primary-800">
      <div className="container mx-auto p-2 text-center">{children}</div>
    </div>
  )
}

export default Banner
