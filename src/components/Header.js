import React from 'react'
import LogoSvg from './LogoSvg'

function Header () {
  return (
    <header className='Header'>
      <LogoSvg />
      <h1>Spoti <span>React</span></h1>
    </header>
  )
}

export default Header
