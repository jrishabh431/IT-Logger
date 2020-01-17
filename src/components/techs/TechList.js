import React from "react";
import PropTypes from "prop-types";

const TechList = ({ tech }) => {
  return <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
      </a>
  </li>;
};

TechList.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechList;
