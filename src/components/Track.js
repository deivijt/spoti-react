import React from 'react'
import PlaySvg from './PlaySvg'
import PauseSvg from './PauseSvg'

function Track ({track, playTrack, pauseTrack, trackPlaying, trackPaused}) {
  let {url} = track.album.images[1]
  let isTrackPlaying = track.id === trackPlaying && trackPaused ? 'Waves' : ''
  return (
    <article className='Track' style={{backgroundImage: `url(${url})`}}>
      <div className='Track__info'>
        <h4>{track.name}</h4>
        <PlaySvg
          preview={track.preview_url}
          playTrack={playTrack}
          trackId={track.id}
          isTrackPlaying={isTrackPlaying}
          trackPaused={trackPaused}
        />
        <PauseSvg
          isTrackPlaying={isTrackPlaying}
          trackPaused={trackPaused}
          pauseTrack={pauseTrack}
        />
      </div>
      <div className={isTrackPlaying}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <span />
    </article>
  )
}

export default Track
