import "./PaymentMethod.style.css"

const PaymentMethod = (props: any) => {
    return (
            <div className="Method">
                <img src={props.img} />
                <label htmlFor="PaymentMethod">{props.label}</label>
                <input type="radio" id="PaymentMethod" value={props.method} />
            </div>
    )
}

export default PaymentMethod;