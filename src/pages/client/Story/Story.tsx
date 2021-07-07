import React from 'react';
import { useParams } from 'react-router';
import './Story.style.css'

export const Story = () => {
    const param:any = useParams();
    console.log(param);
    return (
        <div className="showStory">
            <div className="contenido">
                 <img className="storyImg" src={require("../../../assets/Usuarios/plantacion.jpg").default} alt="showStory" />
                <div className="storyText">
                    <h2>Plantando</h2>
                    <p>Realizando la plantacion de cafe en Chiapas</p>
                </div>
            </div>
        </div>
    );
}

