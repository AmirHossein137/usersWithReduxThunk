import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Users from './pages/Users'
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/users" element={<Users />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
