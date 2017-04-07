import React from 'react'

function PauseSvg ({pauseTrack, isTrackPlaying, trackPaused}) {
  console.log(trackPaused)
  let display = trackPaused && isTrackPlaying ? 'u-displayBlock' : 'u-displayNone'
  return (
    <svg width="35px" height="35px" className={display} onClick={pauseTrack} viewBox="901 369 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="pause" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(901.000000, 369.000000)">
            <g id="Capa_1" fillRule="nonzero" fill="#FFFFFF">
                <g id="Group">
                    <path d="M13.8066102,12.9160546 L13.8066102,22.6506685 C13.8066102,23.6686347 15.3972316,23.6686347 15.3972316,22.6506685 L15.3972316,12.9160546 C15.3972316,11.8980226 13.8066102,11.8980226 13.8066102,12.9160546 L13.8066102,12.9160546 Z" id="Shape"></path>
                    <path d="M20.1054896,12.9160546 L20.1054896,22.6506685 C20.1054896,23.6686347 21.6961111,23.6686347 21.6961111,22.6506685 L21.6961111,12.9160546 C21.6961111,11.8980226 20.1054896,11.8980226 20.1054896,12.9160546 L20.1054896,12.9160546 Z" id="Shape"></path>
                    <path d="M17.4968362,34.9938701 C7.82589454,34.9938701 0,27.1043691 0,17.4970339 C0,7.82602637 7.88950094,0.000197740113 17.4968362,0.000197740113 C27.1678437,0.000197740113 34.9936723,7.88969868 34.9936723,17.4970339 C35.0573446,27.1680414 27.1678437,34.9938701 17.4968362,34.9938701 Z M17.4968362,1.52721281 C8.71658192,1.52721281 1.59062147,8.65317326 1.59062147,17.4334275 C1.59062147,26.2136817 8.71658192,33.3396422 17.4968362,33.3396422 C26.2770904,33.3396422 33.4030508,26.2136817 33.4030508,17.4334275 C33.4667232,8.71677966 26.3406968,1.52721281 17.4968362,1.52721281 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </svg>
  )
}

export default PauseSvg