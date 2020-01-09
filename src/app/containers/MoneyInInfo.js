import React, {PropTypes} from "react";
import {connect} from "react-redux";
import FormLabel from "../components/FormLabel";
import TextInput from "../components/TextInput";
import BlueButton from "../components/BlueButton";
import SummaryBox from "../components/summaryBox";
import * as moneyInActions from '../actions/moneyInActions';
import {bindActionCreators} from 'redux';
import InactivityModal from "../components/InactivityModal";

class MoneyInInfo extends React.Component {
constructor(props, context) {
    super(props, context);
       this.updateMoneyin = this.updateMoneyin.bind(this);    
       this.editMoneyIn = this.editMoneyIn.bind(this);  
       this.state = { errors: {} ,timer: 0 , showModal : false}; 
        this.resetTimer = this.resetTimer.bind(this);
       this.incrementTimer = this.incrementTimer.bind(this)
       document.addEventListener("onmousemove", this.resetTimer); 
       document.addEventListener("onclick", this.resetTimer); 
       document.addEventListener("onkeypress", this.resetTimer);  
       this.loadInterval = window.setInterval(this.incrementTimer,5000) ;
     this.HidePopUp = this.HidePopUp.bind(this); 
    }
    
    
     resetTimer() {
        this.setState({
          timer : 0
        })                     
    }

    incrementTimer(){
      this.setState({
          timer : this.state.timer + 1
        })

      if(this.state.timer == 1)
      {
          this.setState({
            showModal : true
          })
      } 
    }
    
     HidePopUp(){
      this.setState({
            showModal : false
          })
    } 

    componentWillUnmount(){
       console.log('componentWillUnmount')
       window.clearInterval(this.loadInterval);
       document.removeEventListener("onmousemove", this.resetTimer); 
       document.removeEventListener("onclick", this.resetTimer); 
       document.removeEventListener("onkeypress", this.resetTimer);  
    }

    courseFormIsValid() {
      let formIsValid = true;
      let errors = {};

      if (this.props.moneyIn.salary == '') {
        errors.salary = 'Salary should be greater than Zero.';
        formIsValid = false;
      }

      if (this.props.moneyIn.spouseSalary == '') {
        errors.spouseSalary = 'Spouse salary should be greater than Zero.';
        formIsValid = false;
      }

      if (this.props.moneyIn.otherIncome == '') {
        errors.otherIncome = 'Income should be greater than Zero.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
    }

    updateMoneyin(event) {
       if (!this.courseFormIsValid()) {
          return;
        }

       this.props.moneyInActions.saveMoneyIn(this.props.moneyIn)
       this.context.router.push('/moneyout');
    }

    editMoneyIn(type, e) {
       this.props.moneyInActions.editMoneyIn(type, e.target.value)
    }

    render() {       
        return (
            <div>
            <InactivityModal isShowing={this.state.showModal} onCancel={this.HidePopUp}/>
            
                <h1>Money In</h1>               
                <FormLabel text="Salary" />
                <TextInput type="number" placeholder="enter numeric values" value={this.props.moneyIn.salary}
                  name="salary"  onChange={e => this.editMoneyIn('salary', e)} error={this.state.errors.salary}/> <br />     
                <FormLabel text="Spouse Salary" />
                <TextInput type="number" placeholder="enter numeric values" value={this.props.moneyIn.spouseSalary} 
                 name="spouseSalary" onChange={e => this.editMoneyIn('spouseSalary', e)} error={this.state.errors.spouseSalary}/> <br />         
                <FormLabel text="Other Income" />
                <TextInput type="number" placeholder="enter numeric values" value={this.props.moneyIn.otherIncome}  
                name="otherIncome" onChange={e => this.editMoneyIn('otherIncome', e)} error={this.state.errors.otherIncome}/> <br />             
                <BlueButton buttonType="button" buttonText="Next" handleClick={this.updateMoneyin} error={this.state.errors.income} />
                
                
            </div>
                
                
        );
    }
}

MoneyInInfo.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
     moneyIn: state.moneyIn
  };
};

const mapDispatchToProps = (dispatch) => {
     return {
      moneyInActions: bindActionCreators(moneyInActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoneyInInfo);
