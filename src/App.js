import './App.css';
import DataProvider from './Context/DataProvider.js';
import Home from "./Components/Home.js"
function App() {


  return (
    <DataProvider>
      <Home />
    </DataProvider>

  );
}

export default App;
