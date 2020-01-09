import React, { Component } from 'react'
import { connect } from 'react-redux'


//class InactivityModal extends Component {
  const InactivityModal = ({isShowing,onCancel})=> {
 
    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">'Your sesssion is inactive for 60 secoonds'</span>
              <button className="btn" onClick={() => onCancel()}>Cancel</button> 
            </div>
          </div>
        }
        
        
        
       
      </div>
    );
};


export default InactivityModal