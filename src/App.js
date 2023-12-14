import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectLogin from './Component/ProjectLogin';
import ProjectSignup from './Component/ProjectSignup';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=<ProjectLogin></ProjectLogin>></Route>
          <Route path='/signup' element=<ProjectSignup></ProjectSignup>></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}