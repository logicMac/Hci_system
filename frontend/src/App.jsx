import {Routes, Route} from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
