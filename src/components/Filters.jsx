import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function Filters() {
  const { setFilter } = useContext(contextPlanets);

  const handleChange = ({ target }) => {
    setFilter({
      filterByName: { name: target.value } });
  };

  return (
    <header>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        placeholder="Pesquise o planeta"
      />
    </header>
  );
}

export default Filters;
