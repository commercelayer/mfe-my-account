import { useState, useEffect } from "react"

export default function useWindowSizeDetect() {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window
      setViewportWidth(innerWidth)
      setViewportHeight(innerHeight)
      if (window.screen && typeof window.screen !== "undefined") {
        const { width, height } = window.screen
        setScreenWidth(width)
        setScreenHeight(height)
      }
    }
  }, [])

  return {
    isDesktop: screenWidth >= 1280,
    viewport: { width: viewportWidth, height: viewportHeight },
    screen: { width: screenWidth, height: screenHeight },
  }
}
