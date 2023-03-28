import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Routes/Home'
function App() {

  return (
    <div className="app">
          <Routes>
          <Route to="/" element={<Home/>}/>
          </Routes>


     
    </div>
  )
}

export default App
 