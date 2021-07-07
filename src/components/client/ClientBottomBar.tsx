import React from "react"
import { BottomBar } from '../shared/BottomBar'
import { NavigationOptionButton } from '../shared/NavigationOptionButton'
import { useLayoutResizing } from '../../hooks'

export function ClientBottomBar() {
  const { windowSize } = useLayoutResizing()

  const showLabel = ["SMALL"].includes(windowSize)

  return (
    <BottomBar>
      <NavigationOptionButton showLabel={showLabel} icon={"🏠"} label="Tienda" url="/client" />
      <NavigationOptionButton showLabel={showLabel} icon={"📦"} label="Pedidos" url="/client/not-available-yet" />
      <NavigationOptionButton showLabel={showLabel} icon={"🛒"} label="Carrito" url="/client/not-available-yet" />
      <NavigationOptionButton showLabel={showLabel} icon={"💬️"} label="Chat" url="/client/not-available-yet"  />
      <NavigationOptionButton showLabel={showLabel} icon={"🙂"} label="Perfil" url="/client/producer/profile" />
    </BottomBar>
  )
}
