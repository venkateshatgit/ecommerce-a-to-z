import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
