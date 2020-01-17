import React, { useState, useEffect } from "react";
import TechList from "./TechList";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };
  return (
    <div className='modal' id='tech-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && techs.length === 0 ? (
            <p className='center'>No Technician found!</p>
          ) : (
            techs.map(tech => (
              <TechList tech={tech} key={tech.id}/>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
