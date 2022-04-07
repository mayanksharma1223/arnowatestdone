import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ValueState from './context/values/ValueState';

function App() {
  return (
    <div className="App">
      <ValueState>

    <BrowserRouter>
<Routes>

     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/signup" element={<Signup/>}/>
</Routes>
    </BrowserRouter>
      </ValueState>
    </div>
  );
}

export default App;
