
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewForm from "./Pages/NewForm";
import Show from "./Pages/Show";
import "./App.css";
import About from "./Components/About";
import SignIn from "./Components/auth/SignIn";
import PrivateRoute from './Components/auth/PrivateRoute';
import SignUp from "./Components/auth/SignUp";
;

function App() {


  return (
    <Router>
  <Nav />
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route index element={<Home />} />
    </Route>

    <Route path="/dreams" element={<PrivateRoute />}>
      <Route index element={<Index />} />
      <Route path=":id" element={<Show />} />
      <Route path=":id/edit" element={<Edit />} />
      <Route path="new" element={<NewForm />} />
    </Route>

    <Route path="/about" element={<About />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>

  );
}

export default App;
