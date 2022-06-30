import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/gState';
import SearchBar from "./context/SearchBar";
import Data from "./data.json";
function App() {
  return (
    <GlobalProvider>
      <SearchBar placeholder="Enter a Event Name" data={Data} />
      <Main />
    </GlobalProvider>
  );
}

export default App;