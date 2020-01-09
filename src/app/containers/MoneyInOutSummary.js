import React from "react";
import {connect} from "react-redux";
import FormLabel from "../components/FormLabel";
import TextInput from "../components/TextInput";

//import {bindActionCreators} from 'redux';

class Summary extends React.Component {
       render() {  
       
        return (
            <div>
                <h1>Summary</h1>               
                <FormLabel text="Total Money In:"  /> {this.props.summary.totalMoneyIn}  <br/>             
                <FormLabel text="Total Money Out:" /> {this.props.summary.totalMoneyOut} <br/>               
                <FormLabel text="Total Savings:" />   {this.props.summary.savings}            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
     summary: state.summary
  };
};

const mapDispatchToProps = (dispatch) => {
     return {
      //moneyInOutSummaryActions: bindActionCreators(moneyInOutSummaryActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
