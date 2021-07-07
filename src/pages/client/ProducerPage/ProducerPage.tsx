import ButtonProf from "../../../components/shared/ButtonProf/index"
import LabelIcon from "../../../components/shared/LableIcon/index"
import {ReactComponent as UbicationIcon} from "../../../assets/bxs-map.svg"
import {ReactComponent as ChatIcon} from "../../../assets/bx-comment-detail.svg"
import {ReactComponent as PhoneIcon} from "../../../assets/bxs-phone.svg"
import Parrafo from "../../../components/shared/Parrafo"
import ProducerPhoto from "../../../components/shared/ProducerPhoto/index"
import { producer } from "./ProducerPageDummyData"
import "./ProducerPage.style.css"
import ProducerName from "../../../components/shared/ProducerName"

export const ProducerPage = () => {
    return(
        <div className="ProducerPage">
            <ProducerPhoto img={producer.img}/>
            <ProducerName name={producer.name}/>
            <LabelIcon text={producer.ubicacion} icon={<UbicationIcon />}/ >
            <Parrafo text={producer.resumen}/>
            <LabelIcon text="maria.gc@gmail.com" icon={<ChatIcon />}/ >
            <LabelIcon text="272-258-47-40" icon={<PhoneIcon />}/ >
            <div className="ButtonGrid">
                <ButtonProf title="Productos" clase="ButtonProf ButtonProfGrey"/>
                <ButtonProf title="Enviar Mensaje" clase="ButtonProf ButtonProfGrey"/>
                <ButtonProf title="Historias" clase="ButtonProf ButtonProfRed"/>
            </div>
        </div>
    )
}