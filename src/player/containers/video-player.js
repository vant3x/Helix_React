import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/Title';
import PlayPause from '../components/play-pause';
import Timer from '../components/Timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progressBar';

import FormattedTime from '../../libs/formatted.js';

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationFloat: 0,
    currentTimeFloat:0,
    progress: 0
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: FormattedTime(this.video.duration),
      durationFloat: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: FormattedTime(this.video.currentTime),
      currentTimeFloat: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    // event.target.value
    this.video.currentTime = event.target.value
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un vídeo chido"
        />
        {/* -- Controles del reproductor -- */}
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.durationFloat}
            value={this.state.currentTimeFloat}
            handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        {/* -- Fin Controles del reproductor -- */}

  
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="../../../public/assets/ia_animate.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;