/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import pages from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import AdminLayout from "./components/layout/AdminLayout";
import AdminContacts from "./pages/AdminContacts";
import AdminUsers from "./pages/AdminUsers";
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<pages.Home/>} />
          <Route path="/about" element={<pages.About/>} />
          <Route path="contact" element={<pages.Contact/>} />
          <Route path="service" element={<pages.Service/>} />
          <Route path="register" element={<pages.Register/>} />
          <Route path="login" element={<pages.Login/>} />
          <Route path="logout" element={<pages.Logout/>}/>
          <Route path="*"  element={<pages.Error/>}/>

          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>} />
            <Route path="contacts" element={<AdminContacts/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
