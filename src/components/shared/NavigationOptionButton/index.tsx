import React from 'react'

interface NavigationOptionButtonProps {
  icon: any;
  label: string;
  showLabel?: boolean;
}

export function NavigationOptionButton(props: NavigationOptionButtonProps) {
  const { icon, label, showLabel } = props;

  return (
    <div style={containerStyles}>
      <span style={iconContainerStyle()}>
        {icon}
      </span>
      {showLabel && label}
    </div>
  )
}

const containerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1
}

const iconContainerStyle = (showLabel?: boolean) => ({
  fontSize: 20,
  marginRight: showLabel ? 5 : 0
})
