import React, { Component } from 'react';
import logo from '../../../img/logo1.png';
import './related.css';

function Related(props) {
	return (
		<div className="Related">
			<img src={logo} width={120}/>
			<h3 className="tl-helix">HELIX</h3>
			<div className="list-relation">
			<ul >
				<li><a href="">Consumir API con React</a></li>
				<li><a href="">Manejo de rutas privadas en React</a></li>
				<li><a href=""></a></li>
			</ul>
			</div>
		</div>
	)
}

export default Related;