import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewForm from "./Pages/NewForm";
import Show from "./Pages/Show";
import "./App.css";

function App() {


  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dreams" element={<Index />} />
        <Route path="/dreams/:id" element={<Show />} />
        <Route path="/dreams/:id/edit" element={<Edit />} />
        <Route path="/dreams/new" element={<NewForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
