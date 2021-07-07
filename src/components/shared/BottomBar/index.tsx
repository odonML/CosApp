import React from "react"

interface BottomBar {
  children: React.ReactNode[] | React.ReactNode
}

export function BottomBar(props: BottomBar) {
  const { children } = props
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: 50,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0
      }}>
      {children}
    </div>
  );
}
