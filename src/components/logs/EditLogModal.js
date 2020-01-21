import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateLog, clearCurent } from "../../actions/logActions";

const EditLogModal = ({ log: { current }, updateLog, clearCurent }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);
  const submit = () => {
    if (message === "" || tech === "")
      M.toast({ html: "Please enter message and select technician" });
    else {
      updateLog({
        message, attention, date: new Date(), tech, id: current.id
      });
      clearCurent();
    }
  };

  return (
    <div
      className='modal'
      id='logs-edit-modal'
      style={{ width: "75%", height: "45%" }}
    >
      <div className='modal-content'>
        <h4>Edit System Log</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
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

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { updateLog, clearCurent })(EditLogModal);
