import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function Table() {
  const { data } = useContext(contextPlanets);
  return (
    <header>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((result) => (
              <tr key={ result.name }>
                <td>{result.name}</td>
                <td>{result.rotation_period}</td>
                <td>{result.orbital_period}</td>
                <td>{result.diameter}</td>
                <td>{result.climate}</td>
                <td>{result.gravity}</td>
                <td>{result.terrain}</td>
                <td>{result.surface_water}</td>
                <td>{result.population}</td>
                <td>{result.films}</td>
                <td>{result.created}</td>
                <td>{result.edited}</td>
                <td>{result.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </header>
  );
}

export default Table;
