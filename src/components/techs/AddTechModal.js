import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addTechs } from "../../actions/techAction";
import { connect } from "react-redux";

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    if (firstName === "" || lastName === "")
      M.toast({ html: "Please enter first and last name" });
    else {
      addTechs({ firstName, lastName });
      M.toast({html: `${firstName} ${lastName} added as a Technician`})
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className='modal' id='tech-add-modal' style={{ height: "45%" }}>
      <div className='modal-content'>
        <h4>Add Technician</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <label htmlFor='message'>Enter First Name</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            <label htmlFor='message'>Enter Last Name</label>
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

export default connect(null, { addTechs })(AddTechModal);
