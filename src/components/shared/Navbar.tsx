import React from "react"

export function Navbar({ children }: any) {
  return (
    <aside style={{ background: "#000", color: "#fff" }}>
      {children}
    </aside>
  )
}
