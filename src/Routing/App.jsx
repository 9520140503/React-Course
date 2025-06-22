import {BrowserRouter as Router,NavLink,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from './Components/Layout'
import Nothing from './Components/Nothing'

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/> 
            <Route path="/about" element={<About/>}/> 
            <Route path="/contact" element={<Contact/>}/> 
            <Route path="*" element={<Nothing/>}/> 
        </Route>
       </Routes>
    </Router>
  )
}

export default App