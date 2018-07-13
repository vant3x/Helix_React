import React from 'react';
import './video-player-controls.css';
function videoPlayerControls(props) {
  return (
    <div class="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default videoPlayerControls;