import { useState } from 'react'
import React from 'react'
import './Body.css'

function Body() {
    const [cont, setCont] = useState(7)
    const [inputValor, setInputValor] = useState('')
    const [inputN1, setInputN1] = useState('')
    const [inputN2, setInputN2] = useState('')

    function aumentar() {
        setCont(cont + 1)
    }

    function diminuir() {
        setCont(cont - 1)
    }

    function alterar() {
        setCont(Number(inputN1 + inputN2))
    }

    function somar(){
        setCont(Number(inputN1)+Number(inputN2))
    }
    function subtrair(){
        setCont(Number(inputN1)-Number(inputN2))
    }
    function multiplicar(){
        setCont(Number(inputN1)*Number(inputN2))
    }
    return (
        <div className='Body'>
            <h2 className='titulo2'>Dinos são muito legais</h2><br />
            <div className='cont'>
                <button onClick={aumentar}>+</button>
                <p>{cont}</p>
                <button onClick={diminuir}>-</button>
            </div>


            <div className='form'>
                <input type="number"
                    value={inputValor}
                    onChange={(e) => setInputValor(e.target.value)}
                />
                <button onClick={alterar}>Alterar</button>
            </div>

            <div className='calculadora'>
                <input type="text"
                    value={inputN1}
                    onChange={(e) => setInputN1(e.target.value)}
                />
                <button onClick={somar}>+</button>
                <button onClick={subtrair}>-</button>
                <button onClick={multiplicar}>*</button>
                <input type="text"
                       value={inputN2}
                       onChange={(e) => setInputN2(e.target.value)}

                />

            </div>
        </div>

    )
}

export default Body