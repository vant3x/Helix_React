import React from 'react';
import './modal.css';
import VideoPlayer from '../../player/containers/video-player';

function Modal(props) {
	return (
		<div className="Modal">	
			 {props.children}
			 <button onClick={props.handleClick}>Cerrar</button>
		</div>
	)
}

export default Modal;