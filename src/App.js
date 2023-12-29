import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectLogin from './Component/ProjectLogin';
import ProjectSignup from './Component/ProjectSignup';
import ProjectContext from './Component/ProjectContext';
import Footer from './Component/Footer';import Home from './Component/Home';
export default function App() {
  return (
    <div>
    <BrowserRouter>
    <ProjectContext>
      <Routes>
      <Route path='/' element=<ProjectLogin></ProjectLogin>></Route>
      <Route path='/signup' element=<ProjectSignup></ProjectSignup>></Route>
      <Route path='/home' element=<Home></Home>></Route>
      </Routes>
      </ProjectContext>
    </BrowserRouter>
    </div>
  )
}