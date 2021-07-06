import React from "react";
import './LableIcon.style.css';

interface LabelIconProps {
    icon: React.ReactNode;
    text: String;
}

const LabelIcon = (props: LabelIconProps) => {
    return(
        <div className="LableIcon">
            {props.icon} 
            <p>{props.text}</p>
        </div>
    )
}

export default LabelIcon;