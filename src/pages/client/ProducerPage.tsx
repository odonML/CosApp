import ButtonProf from "../../components/shared/ButtonProf"
import LabelIcon from "../../components/shared/LableIcon/index"
import {ReactComponent as UbicationIcon} from "../../assets/bxs-map.svg"
import {ReactComponent as ChatIcon} from "../../assets/bx-comment-detail.svg"
import {ReactComponent as PhoneIcon} from "../../assets/bxs-phone.svg"
import Parrafo from "../../components/shared/Parrafo"
import ProducerPhoto from "../../components/shared/ProducerPhoto"
import { producer } from "./ProducerPageDummyData"

export const ProducerPage = () => {
    return(
        <div>
            <ProducerPhoto img="/   productor.png"/>
            <LabelIcon text={producer.name} icon={<UbicationIcon />}/ >
            <Parrafo text={producer.resumen}/>
            <Parrafo text="Estamos muy agradecidos contigo por tu interes en nuestros productos. 
            Te aseguramos que esta hecho con todo nuestro esfuerzo y corazon."/>
            <LabelIcon text="maria.gc@gmail.com" icon={<ChatIcon />}/ >
            <LabelIcon text="272-258-47-40" icon={<PhoneIcon />}/ >

            <ButtonProf title="Productos"/>
            <ButtonProf title="Historias"/>
            <ButtonProf title="Enviar Mensaje"/>
        </div>
    )
}