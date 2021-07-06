import React from 'react';
import './CardProduct.style.css';

export const CardProduct = (props: any) => {
    return (
        <div className="card">
            <div>
                    <img className="imgProduct" src={props.img} alt={props.nombre}/>
                </div>
                <div>
                    <h2 className="nombreProduct">{props.nombre}</h2>
                    <p className="descriptProduct">{props.descripcion}</p>
                    <p className="precioProduct">$ {props.precio}</p>
                </div>
        </div>
    );
}