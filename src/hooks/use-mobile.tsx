import * as React from "react"

const MOBILE_BREAKPOINT = 768

// Use a default value of false to avoid hydration mismatch
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  // Use useLayoutEffect to update the value as soon as possible after hydration
  React.useLayoutEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}
