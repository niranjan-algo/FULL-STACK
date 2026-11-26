import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/login'
import Projects from '../src/pages/projects'
import Tasks from './pages/tasks'
import Settings from './pages/settings'
import Calender from './pages/calender'
import Dashboard from './pages/Dashboard'
import Clients from './pages/clients'
import Team from './pages/team'
import Register from './pages/register'
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/calender" element={<Calender/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App