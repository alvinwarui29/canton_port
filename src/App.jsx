import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Routes/Home'
function App() {

  return (
    <div className="app">
    <h1>Hello</h1>
      <BrowserRouter>
          <Navbar/>
          <Route to="/"><Home/></Route>
       


      </BrowserRouter>
    </div>
  )
}

export default App
 