
import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer.jsx"

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
