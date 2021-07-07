import React from 'react';
import { useHistory } from 'react-router';
import './Historia.style.css';

export const Historia = ({id, img}:any) => {
    const history = useHistory();
    function handelOnClick(){
        history.push(`/client/producer/stories/${id}`);
    }

    return (
        <div className="linkCircular" onClick={handelOnClick}>
            <img className="historia" src={img.default} alt="historia"/>
        </div>
    );
}

