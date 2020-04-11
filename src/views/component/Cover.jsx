import React from 'react'
import "./Cover.css"

const Cover = (props) => {
    return (
        <>
        <img src={props.cover.image} alt="" className="image"/>
        </>
    )
}
export default Cover