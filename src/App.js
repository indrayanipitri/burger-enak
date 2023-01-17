import './App.css';
import { Routes, Route } from 'react-router-dom';
import OnProcess from './Pages/OnProcess';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<OnProcess/>} />
        <Route path='*' element={<OnProcess/>} />
      </Routes>
    </div>
  );
}

export default App;
