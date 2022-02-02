import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <h1 className="project">Project Star Wars</h1>
      <Filters />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
