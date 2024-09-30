import { Route, Routes } from 'react-router-dom'
import LoginMain from './pages/LoginMain'
import Index from './pages/Index'
import Register from './pages/Register'
import Main from './pages/Main'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/Login" element={<LoginMain />} />  
      <Route path='/register' element={<Register/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}

export default App
