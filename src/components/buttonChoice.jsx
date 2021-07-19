import React from "react";
import '../componentsStylee/buttonStylee.css'

function ButtonChoice(props) {

    const myStyle = {
        opacity: '0.45',
        filter: 'alpha(opacity=90)',
    };

    /* if(props.isReadOnly){
         return (
             <button style={myStyle} >
                 {props.collor}
             </button>);
     }*/

    {
        if (props.isReadOnly) {
            console.log("am intrat!");
            return (

                <button style={myStyle} onClick={() => props.clickAction(props.id)}>
                    {props.collor}
                </button>
            );
        } else {
            return (
                <button style={{backgroundColor: props.collor}} onClick={(event) => props.clickAction(event, props.id)}>
                    {props.collor}
                </button>
            );
        }
    }
}


export default ButtonChoice;

