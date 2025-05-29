import React from 'react'
import './Header.css'

function Header() {
  const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <div className='Header'>
      <center>
        <h1>Buscador de Personagem - Harry Potter 🪄</h1>

        <input
          type="text"
          placeholder='Digite o Nome'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search'
        />

      </center>
    </div>
  )
}

export default Header