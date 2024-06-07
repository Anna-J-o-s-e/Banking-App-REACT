import logo from './logo.svg';
import './App.css';
import AddAccount from './components/AddAccount';
import SearchAccount from './components/SearchAccount';
import DeleteAccount from './components/DeleteAccount';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddAccount/>}/>
      <Route path='/search' element={<SearchAccount/>}/>
      <Route path='/delete' element={<DeleteAccount/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
