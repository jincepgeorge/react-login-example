import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./navigation/MainRouter";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
