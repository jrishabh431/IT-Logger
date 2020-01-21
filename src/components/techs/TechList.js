import React from "react";
import PropTypes from "prop-types";
import { deleteTechs } from "../../actions/techAction";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

const TechList = ({ tech, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(tech.id);
    M.toast({html: `Technician deleted`})
  };
  return (
    <li className='collection-item'>
      {tech.firstName} {tech.lastName}
      <a href='#!' className='secondary-content'>
        <i className='material-icons grey-text' onClick={onDelete}>
          delete
        </i>
      </a>
    </li>
  );
};

TechList.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(null, { deleteTechs })(TechList);
