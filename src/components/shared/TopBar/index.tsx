import React from "react"

interface TopBarProps {
  styles: any
}

export function TopBar(props: TopBarProps) {
  const { styles } = props

  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    // @ts-ignore
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
        CosApp
      <span>{`⚙️`}</span>
    </div>
  )
}
