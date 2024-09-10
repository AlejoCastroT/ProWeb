import { Route, Routes } from 'react-router-dom'
import LoginMain from './pages/LoginMain'
import Index from './pages/Index'
import Register from './pages/Register'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/Login" element={<LoginMain />} />  
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
