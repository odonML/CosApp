import { useEffect, useState } from "react"

interface UseLayoutResizingState {
  windowWidth: number;
  windowHeight: number;
  windowSize: "EXTRA_SMALL" | "SMALL" | "MEDIUM" | "LARGE";
}

export function useLayoutResizing() {
  const [state, setState] = useState<UseLayoutResizingState>({
    windowWidth: 0,
    windowHeight: 0,
    windowSize: "SMALL"
  })

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  function updateDimensions() {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0

    setState({
      windowHeight,
      windowWidth,
      windowSize: getWindowSize(windowWidth ?? 0)
    })
  }

  function getWindowSize(windowWidth: number) {
    if (windowWidth <= 500)
      return "EXTRA_SMALL"
    if (windowWidth <= 768)
      return "SMALL"
    if (windowWidth <= 1100)
      return "MEDIUM"
    else
      return "LARGE"
  }

  const sidebarCollapsed = state.windowWidth < 1100;

  return {
    ...state,
    sidebarCollapsed
  }
}
