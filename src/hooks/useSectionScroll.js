import { useEffect, useRef } from 'react'

export const useSectionScroll = (sectionId, setActiveSection) => {
  const ref = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection(sectionId)
          }
        }
      }, 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutRef.current)
    }
  }, [sectionId, setActiveSection])

  return ref
}
