import React from 'react'
import { useHistory } from 'react-router'

interface NavigationOptionButtonProps {
  icon: any;
  label: string;
  showLabel?: boolean;
  url?: string
}

export function NavigationOptionButton(props: NavigationOptionButtonProps) {
  const { icon, label, showLabel } = props;

  const history = useHistory()

  const onClickOption = (url: string = "") => {
    history.push(url)
  }

  return (
    <div style={containerStyles} className="clickable" onClick={() => onClickOption(props.url)}>
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
