import React from "react"

interface BottomBar {
  menuItems: any;
  styles: any;
}

export function BottomBar(props: BottomBar) {
  const { menuItems, styles } = props
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0
      }}
    >
      {menuItems.map((item: any, i: any) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}>
            <span
              style={{
                fontSize: 20,
                marginRight: styles.showFooterMenuText ? 5 : 0
              }}>
              {item.icon}
            </span>
            {styles.showFooterMenuText && item.text}
          </div>
        );
      })}
    </div>
  );
}
