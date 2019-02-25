import React, {Component} from 'react'

const ShadowCat = ({src})=>{
   console.log(src)
    return (
        <iframe width="560" height="315" src={src} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
    )
}



export default ShadowCat

