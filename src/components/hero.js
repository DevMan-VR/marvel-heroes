import React from "react";
import { Image } from 'semantic-ui-react'

const Hero = ({id,thumbnail}) =>
{
    return(
        <div key={id} style={{display:'inline-block'}}>
            <Image src={thumbnail} />
        </div>
    )
}

export default Hero;