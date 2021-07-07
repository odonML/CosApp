import React from "react"
import { useLayoutResizing } from '../../../hooks'

interface ContentContainerProps {
  children?: React.ReactNode;
  styles: any;
}

export function ContentContainer(props: ContentContainerProps) {
  const {
    sidebarCollapsed,
    windowWidth,
    windowSize
  } = useLayoutResizing()

  const { styles } = props

  const windowIsSmall = windowSize === "SMALL"

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      {props.children}
    </div>
  );
}
