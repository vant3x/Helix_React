import React, { Component } from 'react';
import logo from '../../../img/logo1.png';
import './related.css';

function Related(props) {
	return (
		<div className="Related">
			<img src={logo} width={120}/>
			<h3 className="tl-helix">HELIX</h3>
		</div>
	)
}

export default Related;