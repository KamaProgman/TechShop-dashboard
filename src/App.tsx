import { Dashboard } from "./pages/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
