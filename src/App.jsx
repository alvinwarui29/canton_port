import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Routes/About';
import Navbar from './Components/Navbar/Navbar'
import Home from './Routes/Home'
import Contact from './Routes/Contact';
import Services from './Routes/Services';
function App() {

  return (
    <div className="app">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />

          </Routes>


     
    </div>
  )
}

export default App
 