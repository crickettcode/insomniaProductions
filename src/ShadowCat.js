import React, {Component} from 'react'

const ShadowCat = ({src})=>{
   console.log(src)
    return (
        <iframe width="560" height="315" src={src} frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
    )
}



export default ShadowCat

