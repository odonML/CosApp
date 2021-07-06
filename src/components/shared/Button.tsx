
export const Button =(props:any) => {

    let clickButton=()=>{
        props.click();
    }

    return(
        <button onClick={clickButton}>{props.titulo}</button>
    );
}
