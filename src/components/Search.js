import React from 'react'
import SearchSvg from './SearchSvg'

function Search ({searchTracks}) {
  return (
    <div className='Search'>
      <SearchSvg />
      <input type='text' placeholder='Buscar canción' onChange={searchTracks} />
    </div>
  )
}

export default Search
