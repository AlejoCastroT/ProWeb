import { Route, Routes } from 'react-router-dom'
import LoginMain from './pages/LoginMain'
import Index from './pages/Index'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/Login" element={<LoginMain />} />  
    </Routes>
  )
}

export default App
