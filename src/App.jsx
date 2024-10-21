import { Route, Routes } from 'react-router-dom'
import LoginMain from './pages/LoginMain'
import Index from './pages/Index'
import Register from './pages/Register'
import Main from './pages/Main'
import UserPage from './pages/UserPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/Login" element={<LoginMain />} />  
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/User' element={<UserPage/>} />
    </Routes>
  )
}

export default App
