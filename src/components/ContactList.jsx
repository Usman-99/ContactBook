import React from 'react';
import man from "./man.png";
import woman from "./woman.jpg"
import hovercss from "./addStyle.css"

export default function ContactList(props) {
    let image=(props.contact.gender.toUpperCase().startsWith('M')? man: woman)
    return (
        <div className='row mt-4 mb-3'>
            <hr />
            <div className="col-4 text-center">
        <img width={65} height={70} src={image} alt="" /></div>
            <div className='col-4'>
                <h4>{props.contact.name}</h4>
                <p className='mt-0  text-primary'>{props.contact.email}</p>
            </div>
            <div className='col-2 text-end mt-3'>
                <i class="fa-regular fa-trash-can remove" style={hovercss} onClick={()=>{
                    props.onDelete(props.contact.id)
                }}></i>
            </div>
            <hr /> 
        </div>
    )
}
