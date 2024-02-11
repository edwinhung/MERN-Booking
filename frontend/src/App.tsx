import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
