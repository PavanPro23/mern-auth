import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/sign-in' element={<Signin />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}