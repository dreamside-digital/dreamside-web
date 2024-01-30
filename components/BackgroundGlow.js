'use client'

import { useRef, useEffect } from 'react'

export default function BackgroundGlow() {
  const targetRef = useRef(null)

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!targetRef.current) return
      const { clientX, clientY } = ev
      targetRef.current.style.setProperty('--x', `${clientX}px`)
      targetRef.current.style.setProperty('--y', `${clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div
      ref={targetRef}
      className="fixed inset-0 -z-10 h-full bg-[radial-gradient(circle_80vw_at_var(--x,10vw)_var(--y,10vh),_#FFFFFF_0%,_transparent_100%)] dark:bg-transparent dark:bg-[radial-gradient(circle_80vh_at_var(--x,10vw)_var(--y,20vh),_rgba(0,245,212,0.15)_0%,_transparent_100%)] md:dark:bg-[radial-gradient(circle_75vw_at_var(--x,10vw)_var(--y,10vh),_rgba(0,245,212,0.2)_0%,_transparent_100%)]"
    />
  )
}
