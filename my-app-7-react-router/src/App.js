import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
