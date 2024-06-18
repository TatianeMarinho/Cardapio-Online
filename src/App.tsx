import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path='/menu' element={ <Menu /> } />
      <Route path='/login' element={ <Login />} />
    </Routes>
  )
}

export default App;
