import React from 'react';


export const Layout = (props:any) =>{

    return(
        <div>
            <main>
                {props.children}
            </main>
        </div>

    );
}

