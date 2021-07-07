import React from 'react';
import { ListProduct } from '../../components/shared';
import { ListHistorias } from '../../components/shared';

const products = [
    {
        id: "1",
        nombre: "Cafe 1", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    },
    {
        id: "2",
        nombre: "Cafe 2", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    },
    {
        id: "3",
        nombre: "Cafe 4", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    },
    {
        id: "4",
        nombre: "Cafe 4", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    },
    {
        id: "5",
        nombre: "Cafe 5", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    },
    {
        id: "6",
        nombre: "Cafe 6", 
        descripcion: "Cafe de la sierra de Chiapas",
        precio: 50,
        img: "https://www.obioorganico.com/wp-content/uploads/2021/06/golden_cloud_cafe_organico_tostado_y_molido_500g_1-300x300.png"
    }
]
const historias = [
    {
        id: "1",
        imgUser: "productor.png",
    },
    {
        id: "2",
        imgUser: "productor.png",
    },
    {
        id: "3",
        imgUser: "productor.png",
    },
    {
        id: "4",
        imgUser: "productor.png",
    }
];

export const ClientStore = () => {
    return (
        <div>
        <ListHistorias historias={historias}/>
        <ListProduct products={products}/>
        </div>
        );
}


