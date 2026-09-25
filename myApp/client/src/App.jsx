import {BrowserRouter,Routes,Route} from "react-router-dom"
import Counter from "./components/Counter"
import Stopwatch from "./components/Stopwatch"
import Admin from "./components/Admin"
import User from "./components/User"
import Login from "./components/Login"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<h1>Home Page</h1>}/>
        <Route path ="/counter" element ={<Counter/>}/>
        <Route path ="/stopwatch" element= {<Stopwatch/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/admin" element= {<Admin/>}/>
        <Route path ="/user" element ={<User/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
