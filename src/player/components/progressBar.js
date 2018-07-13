import React from 'react';
import './progressbar.css';

function ProgressBar(props) {
  return(
      <div className="ProgressBar">
        <input type="range"
          min={0}
          max={props.durationFloat}
          value={props.value}
          onChange={props.handleProgressChange}
        />
      </div>
  )
}

export default ProgressBar;