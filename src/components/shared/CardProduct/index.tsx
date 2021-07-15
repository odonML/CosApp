import React from "react";
import {ReactComponent as PhoneIcon} from "../../../assets/bxs-phone.svg"

import "./CardProduct.style.css";

export const CardProduct = (props: any) => {
  return (
    <div className="cardProduct">
      <div className="cardImg br">
        <img className="imgProduct" src={props.img} alt={props.nombre} />
      </div>
      <div className="cardBody bb">
        <div className="headCard">
          <h2 className="nombreProduct">{props.nombre}</h2>
        </div>
        <div className="contenidoCard">
          <p className="descripcionProduct">{props.descripcion}</p>
        </div>
        <div className="fotterCard">
          <p className="precioProduct">$ {props.precio}</p>
        </div>
      </div>
    </div>
  );
};
