import {BrowserRouter,Routes,Route} from "react-router-dom"
import Counter from "./components/Counter"
import Stopwatch from "./components/Stopwatch"
import Admin from "./pages/AdminLayout"
import User from "./pages/UserLayout"
import Login from "./pages/Login"
import UserContext from "./components/UserContext"

const App = () => {
  const user={
    name:"Nanu",
    role:"Sabse bada post"
  }
  const admin={
    name:"DODO",
    role:"Sabse bada Admin"
  }
  return (
    <div>
      <UserContext.Provider value={{user,admin}}>
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
      </UserContext.Provider>
    </div>
  )
}

export default App
