import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Timer from './page/Timer';
import SignUp from './page/user-login/SignUp';
import SignIn from './page/user-login/SignIn';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Timer />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
