
import { Routes, Route } from "react-router";
import Works from "./pages/Works";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>  
    </Layout>
  )
}

export default App
