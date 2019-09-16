import React from 'react';

const Heroe = ({id,name,descr,thumb,comics}) => 
{
    return(
        <div key={id}>
            <img src={thumb} alt="" />
            <h3>{name}</h3>
            <p>{descr}</p>
            <ol>
                {comics.map(comic => (
                    <li><p>{comic.name}</p></li>
                ))}
            </ol>

        </div>
    )
}

export default Heroe;

