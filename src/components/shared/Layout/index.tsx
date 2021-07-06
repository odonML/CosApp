import React from 'react';
import "./Layout.styles.css"

interface LayoutProps {
  navbar: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) =>{
    return(
        <div>
            <main>
              {props.navbar}
              {props.children}
            </main>
        </div>

    );
}

