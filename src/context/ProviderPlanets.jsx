import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextPlanets from './contextPlanets';

function ProviderPlanets({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((date) => setData((prevState) => prevState.concat(date.results)));
  }, []);

  // Requisito 3 feito com ajuda do Gabriel Borges e Lucas Fernandes.

  const handleClick = (column, comparison, value) => {
    console.log(typeof (value));
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planet) => (planet[column] > Number(value))));
    case 'menor que':
      return setData(data.filter((planet) => (planet[column] < Number(value))));
    case 'igual a':
      return setData(data.filter((planet) => (planet[column] === (value))));
    default: break;
    }
  };

  const context = {
    data,
    setData,
    filter,
    setFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    handleClick,
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
