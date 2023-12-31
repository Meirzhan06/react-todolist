import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
