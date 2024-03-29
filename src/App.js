import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Switch } from "react-router-dom";
import Nav from "./Components/Nav";
// import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import NewForm from "./Pages/NewForm";
// import Show from "./Pages/Show";
import "./App.css";
// import Profile from "./Components/Profile";
// import Journal from "./Components/Journal";
// import Login from "./Pages/Login";
// import Register from"./Pages/Register"

// import { AuthContextProvider } from "./Components/auth/AuthContext";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route> */}

        {/* <Route exact path="/dreams" element={<Index />}>
        </Route>

        <Route exact path="/dreams/:id" element={<Show />}>
        </Route>

        <Route exact path="/dreams/:id/edit" element={<Edit />}>
        </Route>

        <Route exact path="/dreams/new" element={<NewForm />}>
        </Route>
        <Route exact path="/profile" element={<Profile/>}>
        </Route> */}
   

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
