import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {addLog} from "../../actions/logActions";
import {connect} from "react-redux";

const AddBtnModal = ({addLog}) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const submit = () => {
    if (message === "" || tech === "")
      M.toast({ html: "Please enter message and select technician" });
    else {
      addLog({message, attention, date: new Date(), tech});
      M.toast({html: `Log added by ${tech}`})
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div
      className='modal'
      id='logs-add-modal'
      style={{ width: "75%", height: "45%" }}
    >
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <label htmlFor='message'>Enter Log Message</label>
          </div>
        </div>
        
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              onChange={event => setTech(event.target.value)}
              className='browser-default'
            >
              <option disabled value=''>
                Select Technicians
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Rishabh Jain'>Rishabh Jain</option>
            </select>
          </div>
        </div>
        
        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                name='attention'
                value={attention}
                checked={attention}
                onChange={event => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
        
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-dark blue btn'
            onClick={submit}
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {addLog})(AddBtnModal);
