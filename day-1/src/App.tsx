
import { Routes, Route } from "react-router";
import Works from "./pages/Works";
import Layout from "./components/Layout";

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/works" element={<Works />} />
      </Routes>  
    </Layout>
  )
}

export default App
