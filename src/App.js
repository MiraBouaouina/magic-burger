import React from 'react';
import './App.css';
import ToolBar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
function App() {
  return (// nom du components de import
    <div>
      <ToolBar />
      <BurgerBuilder />

    </div>

  );
}

export default App;
