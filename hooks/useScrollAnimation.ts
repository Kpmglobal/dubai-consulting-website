import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { isVisible, elementRef }
}

// Predefined animation classes for common use cases
export const scrollAnimationClasses = {
  fadeInUp: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-10 opacity-0'
    }`,
  
  fadeInLeft: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-x-0 opacity-100' 
        : '-translate-x-10 opacity-0'
    }`,
  
  fadeInRight: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-10 opacity-0'
    }`,
  
  scaleIn: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'scale-100 opacity-100' 
        : 'scale-95 opacity-0'
    }`,
  
  slideInUp: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-20 opacity-0'
    }`,
  
  slideInDown: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-20 opacity-0'
    }`,
  
  slideInLeft: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-x-0 opacity-100' 
        : '-translate-x-20 opacity-0'
    }`,
  
  slideInRight: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-20 opacity-0'
    }`,
  
  rotateIn: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'rotate-0 opacity-100' 
        : 'rotate-12 opacity-0'
    }`,
  
  bounceIn: (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-700 delay-${delay} ${
      isVisible 
        ? 'scale-100 opacity-100' 
        : 'scale-75 opacity-0'
    }`,
}

// Stagger animation for lists
export const useStaggerAnimation = (itemCount: number, baseDelay: number = 100) => {
  const { isVisible, elementRef } = useScrollAnimation()
  
  const getStaggerDelay = (index: number) => baseDelay * index
  
  return { isVisible, elementRef, getStaggerDelay }
}
