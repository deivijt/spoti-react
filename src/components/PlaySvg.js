import React from 'react'

function PlaySvg ({preview, playTrack, trackId, isTrackPlaying, trackPaused}) {
  let display = trackPaused && isTrackPlaying ? 'u-displayNone' : 'u-displayBlock'
  return (
    <svg width='35px' height='35px' className={display} onClick={(e) => playTrack(e, preview, trackId) } viewBox='901 365 35 35' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id='play-button' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform='translate(901.000000, 365.000000)'>
            <g id='Capa_1' fillRule='nonzero' fill='#FFFFFF'>
                <g id='Group'>
                    <path d='M26.5784167,17.0181667 L13.7450833,8.26816667 C13.566,8.14683333 13.335,8.13341667 13.1436667,8.23433333 C12.9529167,8.33525 12.8333333,8.53358333 12.8333333,8.75 L12.8333333,26.25 C12.8333333,26.4664167 12.9529167,26.66475 13.14425,26.7656667 C13.2294167,26.8111667 13.3233333,26.8333333 13.4166667,26.8333333 C13.5315833,26.8333333 13.6465,26.7989167 13.7450833,26.7318333 L26.5784167,17.9818333 C26.7376667,17.8733333 26.8333333,17.6930833 26.8333333,17.5 C26.8333333,17.3069167 26.7376667,17.1266667 26.5784167,17.0181667 Z M14,25.14575 L14,9.85425 L25.2145833,17.5 L14,25.14575 Z' id='Shape'></path>
                    <path d='M17.5,0 C7.8505,0 0,7.8505 0,17.5 C0,27.1495 7.8505,35 17.5,35 C27.1495,35 35,27.1495 35,17.5 C35,7.8505 27.1495,0 17.5,0 Z M17.5,33.8333333 C8.49391667,33.8333333 1.16666667,26.5060833 1.16666667,17.5 C1.16666667,8.49391667 8.49391667,1.16666667 17.5,1.16666667 C26.5060833,1.16666667 33.8333333,8.49391667 33.8333333,17.5 C33.8333333,26.5060833 26.5060833,33.8333333 17.5,33.8333333 Z' id='Shape'></path>
                </g>
            </g>
        </g>
    </svg>
  )
}

export default PlaySvg
