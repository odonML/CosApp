import React from "react"

interface ContentContainerProps {
  children?: React.ReactNode;
  styles: any;
}

export function ContentContainer(props: ContentContainerProps) {
  const { styles } = props

  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20
  };

  return (
    <div style={contentStyle}>
      {props.children}
    </div>
  );
}
