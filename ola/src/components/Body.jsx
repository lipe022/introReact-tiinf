import { useState } from 'react'
import React from 'react'
import './Body.css'

function Body(props) {
    console.log(props.characters);

    return (
        <div className='Body'>
            {props.characters.map((character) => (

                <div className='card'>
                    {character.image ? (
                        <img src={character.image} alt={character.name} />
                    ) : (
                        <div className='noImagem'>indisponivel</div>

                    )}
                    <h2>Personagem</h2>
                    <p>
                        <strong>Casa:</strong> Desconhecida
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Body