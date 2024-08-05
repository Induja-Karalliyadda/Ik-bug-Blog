import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashbord from "./pages/Dashbord"
import Projects from "./pages/Projects"
import Header from './components/Header'
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-Up" element={<SignUp/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashbord/>}/>
      </Route>
      
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
