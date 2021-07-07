
import React from 'react';
import { Historia } from '../Historia';
import './ListHistorias.style.css'

export const ListHistorias = ({historias}:any) => {
    return (
        <ul className="listHistorias">
            {historias.map((historia:any)=>{
                const img = require(`../../../assets/Usuarios/${historia.imgUser}`);
                return <Historia key={historia.id} {...historia} img={img}/>;
            })}
        </ul>
    );
}

