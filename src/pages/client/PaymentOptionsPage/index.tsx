import ButtonProf from "../../../components/shared/ButtonProf";
import PaymentMethod from "../../../components/shared/PaymentMethod";
import {Method} from "./PaymentOptionsPageDummyData";
import "./PaymentOptionPage.style.css"

export const PaymentOptions = () =>{
    return(
        <div>
            <form>
                <div className="PaymentMethod">
                    {Method.map((m) => <PaymentMethod img={m.img} method={m.method} label={m.label}/>)}
                </div>
            </form>
            <ButtonProf title="Metods de pago" clase="ButtonProf ButtonProfGrey" />
        </div>
    )
}