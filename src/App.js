import './App.css';
import React from "react";
import { BatteryProvider } from './context/BatteryContext';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';

function App() {

  return (

    <ThemeProvider>
      <BatteryProvider>
        <Dashboard />
      </BatteryProvider>
    </ThemeProvider>
  );
}

export default App;