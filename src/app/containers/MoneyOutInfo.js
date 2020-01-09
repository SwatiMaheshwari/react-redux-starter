import React, {PropTypes} from "react";
import {connect} from "react-redux";
import FormLabel from "../components/FormLabel";
import BlueButton from "../components/BlueButton";
import TextInput from "../components/TextInput";
import SummaryBox from "../components/summaryBox";
import * as moneyOutActions from "../actions/moneyOutAction";
import {bindActionCreators} from 'redux';

class MoneyOutInfo extends React.Component {    
    constructor(props, context) {
		super(props, context)
		this.clickNext = this.clickNext.bind(this)	
       // this.editMoneyOutDetails = this.editMoneyOutDetails.bind(this)
        this.state = { errors: {} }
	}
    
   clickNext() {
       if (!this.courseFormIsValid()) {
          return;
        }
  		this.props.moneyOutActions.saveMoneyOutDetails(this.props.moneyOut)
        this.context.router.push('/summary');
  	}
    
     
    editMoneyOutDetails(type, e) {	
       
		this.props.moneyOutActions.editMoneyOutDetails(type, e.target.value)
	}
    
    editMoneyOutLoanDetails(type, e) {	
       
		this.props.moneyOutActions.editMoneyOutLoanDetails(type, e.target.value)
	}
    
    
    
   
    
    
    courseFormIsValid() {
      let formIsValid = true;
      let errors = {};
    
      if (this.props.moneyOut.houseRent == '') {
        errors.houseRent = 'House rent should be greater than Zero.';
        formIsValid = false;
      }

      if (this.props.moneyOut.groceries == '') {
        errors.groceries = 'Groceries salary should be greater than Zero.';
        formIsValid = false;
      }

      if (this.props.moneyOut.monthlyBills == '') {
        errors.monthlyBills = 'Monthly Bill should be greater than Zero.';
        formIsValid = false;
      }
   
     if ( this.props.moneyOut.monthlyEmi == '') {
        errors.monthlyEmi = 'Monthly EMI should be greater than Zero.';
        formIsValid = false;
      }  
        
     if ( this.props.moneyOut.interestRate == '') {
        errors.interestRate = 'Interest rate should be greater than Zero.';
        formIsValid = false;
      }  
           
     if (this.props.moneyOut.others == '') {
        errors.others = 'Others should be greater than Zero.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
    }
    
    
    
    
    render() {
         const {houseRent, groceries, monthlyBills, others,monthlyEmi, interestRate } = this.props.moneyOut
        
         
                
              
        return (
           <div className="container">
                <h1>Money Out Details</h1>
               <FormLabel  text="House Rent" />
            
      				<TextInput type="text" value={houseRent} onChange={e => this.editMoneyOutDetails('houseRent', e)} error={this.state.errors.houseRent} name="house-rent" /> <br />
              <FormLabel   text="Groceries" />
      				<TextInput type="text" value={groceries} onChange={e => this.editMoneyOutDetails('groceries', e)} error={this.state.errors.groceries} name="groceries" /> <br />
              <FormLabel  text="Monthly Bills" />
      				<TextInput type="text" value={monthlyBills} onChange={e => this.editMoneyOutDetails('monthlyBills', e)} error={this.state.errors.monthlyBills}  name="monthly_bills" /> <br />
                        
                 
          <FormLabel  text="Monthly Loan EMI" />
      				<TextInput type="text" value={monthlyEmi} onChange={e => this.editMoneyOutLoanDetails('monthlyEmi', e)} 
                error={this.state.errors.monthlyEmi}    name="monthly_emi" /> <br />
           
        <FormLabel  text="Interest Rate" />
      				<TextInput type="text" value={interestRate} onChange={e => this.editMoneyOutLoanDetails('interestRate', e)} error={this.state.errors.interestRate}    name="monthly_emi" /> <br />
                        
                        
                        
              <FormLabel  text="Other Expenses" />
      				<TextInput type="text" value={others} onChange={e => this.editMoneyOutDetails('others', e)} error={this.state.errors.others} name="other_expenses" /> <br />             
               <BlueButton buttonType="button" buttonText="Next" handleClick={this.clickNext}  />
               
            </div>
        );
    }
}

MoneyOutInfo.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      moneyOut: state.moneyOut,
       summary: state.summary
  };
};

function mapDispatchToProps(dispatch) {
  return {
    moneyOutActions: bindActionCreators(moneyOutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyOutInfo);
