import React from "react"
import { useHistory } from "react-router"

interface SidebarProps {
  menuItems: any;
  styles: any;
}

export function Sidebar(props: SidebarProps) {
  const { menuItems, styles } = props
  const history = useHistory()

  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    backgroundColor: "#333",
    paddingTop: 40
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9)
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 0 : 10
  };

  const logoStyle = {
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold"
  };

  const onClickOption = (url: string) => {
    history.push(url)
  }

  return (
    // @ts-ignore
    <div style={sidebarStyle}>
      {/* @ts-ignore */}
      <div style={logoStyle}>{styles.sidebarCollapsed ? "C" : "COSAPP"}</div>
      {menuItems.map((item: any, i: any) => (
        <div key={i} style={menuItemStyle} onClick={() => onClickOption(item.url)} className="clickable">
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  )
}
