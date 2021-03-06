import React, { useEffect, useState } from 'react'
import { TopBar } from '../TopBar'
import { BottomBar } from "../BottomBar"
import { ContentContainer } from '../ContentContainer'
import "./Layout.styles.css"
import { Sidebar } from '../Sidebar'
import { ClientBottomBar } from '../../client/ClientBottomBar'
import { useLayoutResizing } from '../../../hooks'

interface LayoutProps {
  children?: React.ReactNode;
  navbar: React.ReactNode;
  //bottomBar: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const {
    sidebarCollapsed,
    windowWidth,
    windowSize
  } = useLayoutResizing()

  const menuItems = [
    { icon: `π`, text: "Tienda" },
    { icon: `π`, text: "Pedidos" },
    { icon: `π`, text: "Carrito" },
    { icon: `π€`, text: "Chat" },
    { icon: `π`, text: "Perfil" }
  ];


  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarCollapsed,
    sidebarWidth: sidebarCollapsed ? 50 : 150
  };

  if (styles.showSidebar) { // adds the header options to the sidebar
    menuItems.push({ icon: `πΊοΈ`, text: "Favoritos" });
    menuItems.push({ icon: `β`, text: "Ajustes" });
  }

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}>
      {
        ["MEDIUM", "LARGE"].includes(windowSize) ?
        <Sidebar menuItems={menuItems} styles={styles} />
        : <TopBar leftComponent={`πΊοΈ`} rightComponent={`β`} title="COSAPP" />
      }
      <ContentContainer styles={styles}>
        {props.children}
      </ContentContainer>
      {["EXTRA_SMALL", "SMALL"].includes(windowSize) && <ClientBottomBar />}
    </div>
  )
}

