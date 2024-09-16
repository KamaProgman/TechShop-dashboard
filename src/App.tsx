import { Dashboard } from "./pages/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import Layout from "./layout/Layout";
import Orders from "./pages/orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
