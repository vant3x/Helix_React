import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/Title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
  state = {
    pause: true
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
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un vídeo chido"
        />
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="../../../public/assets/demo_prueba2_api_veggiez_manejo_usuarios.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;