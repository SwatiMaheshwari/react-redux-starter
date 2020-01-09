import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const FormLabel = (props) => {
	
	return (
		<label style={props.labelStyle}><b>{props.text}</b></label>	
	);
};

export default FormLabel;