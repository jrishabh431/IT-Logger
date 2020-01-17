import React from "react";

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a href="#logs-add-modal" className='btn-floating btn-large modal-trigger blue darken-1'>
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-modal" className='btn-floating red modal-trigger'>
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href="#tech-add-modal" className='btn-floating green modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
