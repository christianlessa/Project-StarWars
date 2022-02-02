import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function Filters() {
  const { setFilter, filterByNumericValues,
    setFilterByNumericValues, handleClick } = useContext(contextPlanets);

  const handleChange = ({ target }) => {
    setFilter({
      filterByName: { name: target.value } });
  };

  const handleSelect = ({ target: { name, value } }) => {
    setFilterByNumericValues({
      ...filterByNumericValues,
      [name]: value,
    });
  };

  const { column, comparison, value } = filterByNumericValues;

  return (
    <header>
      <div>
        <input
          data-testid="name-filter"
          placeholder="Pesquise o planeta"
          onChange={ handleChange }
          type="text"
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ handleSelect }
          value={ column }
          name="column"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleSelect }
          value={ comparison }
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          onChange={ handleSelect }
          type="number"
          min="0"
          value={ value }
          name="value"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick(column, comparison, value) }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Filters;
