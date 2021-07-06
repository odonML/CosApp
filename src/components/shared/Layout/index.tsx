import React, { useEffect, useState } from 'react'
import { TopBar } from '../TopBar'
import { BottomBar } from "../BottomBar"
import { ContentContainer } from '../ContentContainer'
import "./Layout.styles.css"

interface LayoutProps {
  children?: React.ReactNode;
  navbar: React.ReactNode;
  //bottomBar: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const [state, setState] = useState<any>({
    windowWidth: 0,
    windowHeight: 0
  })

  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  function updateDimensions() {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0

    setState({
      windowHeight,
      windowWidth
    })
  }



  const menuItems = [
    { icon: `😀`, text: "Item 1" },
    { icon: `😉`, text: "Item 2" },
    { icon: `😎`, text: "Item 3" },
    { icon: `🤔`, text: "Item 4" },
    { icon: `😛`, text: "Item 5" }
  ];

  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    showFooterMenuText: state.windowWidth > 500
  };

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}>
      <TopBar styles={styles} />
      <ContentContainer styles={styles}>
        {props.children}
      </ContentContainer>
      <BottomBar menuItems={menuItems} styles={styles} />
    </div>
  )
}

