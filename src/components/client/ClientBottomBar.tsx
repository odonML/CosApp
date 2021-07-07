import React from "react"
import { BottomBar } from '../shared/BottomBar'
import { NavigationOptionButton } from '../shared/NavigationOptionButton'
import { useLayoutResizing } from '../../hooks'

export function ClientBottomBar() {
  const { windowSize } = useLayoutResizing()

  const showLabel = ["SMALL"].includes(windowSize)

  return (
    <BottomBar>
      <NavigationOptionButton showLabel={showLabel} icon={"🍔"} label="Opción 1" />
      <NavigationOptionButton showLabel={showLabel} icon={"🐻"} label="Opción 2" />
      <NavigationOptionButton showLabel={showLabel} icon={"⚽"} label="Opción 3" />
      <NavigationOptionButton showLabel={showLabel} icon={"❤️"} label="Opción 4" />
      <NavigationOptionButton showLabel={showLabel} icon={"🔥"} label="Opción 5" />
    </BottomBar>
  )
}
