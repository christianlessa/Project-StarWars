import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function Filters() {
  const { setFilter, filterByNumericValues,
    setFilterByNumericValues, handleClick,
    option, handleClearOption } = useContext(contextPlanets);

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
    <header className="headerInputs">
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
          className="inputFilters"
          data-testid="column-filter"
          onChange={ handleSelect }
          value={ column }
          name="column"
          id="select1"
        >
          {
            option.map((opt) => (<option key={ opt }>{ opt }</option>))
          }
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
          className="btnFilter"
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            handleClick(column, comparison, value);
            handleClearOption(column);
          } }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Filters;
