/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes }  from "react-router-dom"
import pages from "./pages/Index"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<pages.Home/>} />
          <Route path="/about" element={<pages.About/>} />
          <Route path="contact" element={<pages.Contact/>} />
          <Route path="service" element={<pages.Service/>} />
          <Route path="register" element={<pages.Register/>} />
          <Route path="login" element={<pages.Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
