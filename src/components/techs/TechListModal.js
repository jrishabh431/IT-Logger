import React, { useEffect } from "react";
import TechList from "./TechList";
import { getTechs } from "../../actions/techAction";
import { connect } from "react-redux";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='modal' id='tech-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && techs === null ? (
            <p className='center'>No Technician found!</p>
          ) : (
            techs.map(tech => <TechList tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
