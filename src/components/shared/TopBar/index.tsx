import React from "react"

interface TopBarProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  title: string;
}

export function TopBar(props: TopBarProps) {

  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#FFF",
    borderBottom: `1px solid 0.1`,
    fontWeight: 'bold',
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    // @ts-ignore
    <div style={topBarStyle}>
      <span>{props.leftComponent}</span>
        {props.title}
      <span>{props.rightComponent}</span>
    </div>
  )
}
