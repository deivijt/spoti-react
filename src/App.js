import React, { Component } from 'react'
import Header from './components/Header'
import Tracks from './components/Tracks'
import Search from './components/Search'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.baseUrl = 'https://api.spotify.com/v1'
    this.audio = null

    this.state = {
      tracks: [],
      trackPlaying: '',
      trackPaused: false,
      loading: false
    }

    this.searchTracks = this.searchTracks.bind(this)
    this.playTrack = this.playTrack.bind(this)
    this.pauseTrack = this.pauseTrack.bind(this)
  }

  async searchTracks ({target}) {
    let {value} = target

    if (value) {
      this.setState({loading: true})
      let results = await window.fetch(`${this.baseUrl}/search?q=${value}&type=track`)
      let {tracks} = await results.json()

      this.setState({tracks: tracks.items}, () => {
        this.setState({loading: false})
      })
    }
  }

  playTrack ({target}, preview, trackId) {
    if (this.audio) {
      if (trackId === this.state.trackPlaying) {
        this.audio.play()
        return this.setState({trackPaused: true})
      }

      this.audio.src = preview
      this.audio.play()
    } else {
      this.audio = new window.Audio(preview)
      this.audio.play()
    }

    this.setState({trackPlaying: trackId})

    this.audio.addEventListener('ended', (e) => {
      this.setState({trackPlaying: ''})
    })

    this.setState({trackPaused: true})
  }

  pauseTrack () {
    this.setState({trackPaused: false})
    this.audio.pause()
  }

  render () {
    return (
      <section className='Main'>
        <Header />
        <div className='Container'>
          <Search searchTracks={this.searchTracks} />
          {
            !this.state.loading ? (
              <Tracks
                tracks={this.state.tracks}
                playTrack={this.playTrack}
                pauseTrack={this.pauseTrack}
                trackPlaying={this.state.trackPlaying}
                trackPaused={this.state.trackPaused}
              />
            ) : <span className='Loading'>Cargando...</span>
          }
        </div>
      </section>
    )
  }
}

export default App
