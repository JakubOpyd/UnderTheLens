import './App.css'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
function App() {

  return (
    <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App
