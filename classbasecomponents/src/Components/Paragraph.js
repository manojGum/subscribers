import "./Paragraph.css"
import React from "react";

// react.memo is used when we do not went to reander our componets when whithout any change 
const Paragraph=(props)=>{
    return (
    <p>{props.show ? 'This is shown conditionally':''}</p>
    )
}


export default React.memo(Paragraph);