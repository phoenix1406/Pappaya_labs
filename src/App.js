
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Foot from './components/Foot';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
 
 
   <Router>
   <Navbar/>
   <Routes>
          <Route exact path="/about" element ={ <About/>}>
          
          </Route>
          <Route exact path="/services" element  = {<Home/>}>
        
          </Route>
          <Route exact path="/" element = {<Home/>}>
            
          </Route>

           <Route exact  path="/blogs" element={ <Home/>}>
        
          </Route> 
          <Route exact path="/portfolio" element ={ <Home/>}>
      
          </Route>
          <Route exact path="/login" element ={ <Login/>}>
      
          </Route>
          <Route exact path="/register" element ={ <Register/>}>
      
          </Route>
         
        </Routes>
        <Foot/>
    </Router>
    
    </>
  );
}

export default App;
