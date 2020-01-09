import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import FormLabel from "./FormLabel";


const SummaryBox = ({totalMoneyIn ,totalMoneyOut,savings}) => {
	var style = {
		
	}
		
	return (
		<div style={style}>
                <h1>Summary</h1>               
                <FormLabel text="Total Money In:"  /> {totalMoneyIn}  <br/>             
                <FormLabel text="Total Money Out:" /> {totalMoneyOut} <br/>               
                <FormLabel text="Total Savings:" />   {savings}            
        </div>
	);

}

export default SummaryBox;