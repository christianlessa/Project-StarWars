import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextPlanets from './contextPlanets';

function ProviderPlanets({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((date) => setData((prevState) => prevState.concat(date.results)));
  }, []);

  const context = {
    data,
    setData,
  };

  return (
    <contextPlanets.Provider value={ context }>
      {children}
    </contextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderPlanets;
