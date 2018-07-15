import React from 'react';
import './modal.css';
// import VideoPlayer from '../../player/containers/video-player';

function Modal(props) {
	return (
		<div className="Modal">	
			 <button onClick={props.handleClick}>Cerrar</button>
			 {props.children}

		</div>
	)
}

export default Modal;