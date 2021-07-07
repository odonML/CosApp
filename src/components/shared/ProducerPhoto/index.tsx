import React from "react"
import "./ProducerPhoto.styles.css"

const ProducerPhoto = (props: any) =>{   

    return(
        <img src={props.img} className="ProducerPhoto" alt="img"/>
    )
}

export default ProducerPhoto;