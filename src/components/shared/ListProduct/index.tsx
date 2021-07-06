import React from 'react';
import { CardProduct } from '../CardProduct';
import './ListProduct.style.css';

export const ListProduct = ({products}:any) => {
    return (
        <ul className="catalogoProduct">
            {products.map((product:any) => {
                return <CardProduct key={product.id} {...product} />
            })}
        </ul>
    );
}


