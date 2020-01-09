import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const BlueButton = (props) => {
	var buttonBlue = {
		backgroundColor: '#008ae6',
		border: 'none',
		color: 'white',
		padding: '5px 32px',
		textAlign: 'center',
		textDecoration: 'none',
		display: 'inline-block',
		fontSize: '16px',
		margin: '15px 78px',
		cursor: 'pointer',
		borderRadius: '4px',
		float: 'right'
	}
		
	return (
		<button style={buttonBlue} type= {props.buttonType} onClick={() => props.handleClick()}> {props.buttonText} </button>
	
	);

}

export default BlueButton;