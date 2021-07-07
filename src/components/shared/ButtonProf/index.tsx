import "./button.style.css"

const ButtonProf = (props: any) => {
    return(
        <a className={props.clase}>{props.title}</a>
    )
}

export default ButtonProf;