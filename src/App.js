
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
import SignUP from "./Components/auth/SignUp";
import PrivateRoute from './Components/auth/PrivateRoute';
;

function App() {


  return (
    <Router>
      <Nav/>
      <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/' element={<PrivateRoute/>}>

</Route>
     

<Route exact path='/dreams' element={<Index/>}>
      <Route exact path='/dreams' element={<PrivateRoute/>}/>
</Route>
           

<Route exact path='/dreams:id' element={<Show/>}>
      <Route exact path='/dreams:id' element={<PrivateRoute/>}/>
</Route>
       

<Route exact path='/dreams/:id/edit' element={<Edit/>}>
      <Route exact path='/dreams/:id/edit' element={<PrivateRoute/>}/>
</Route>

       
<Route exact path='/dreams/new' element={<NewForm/>}>
      <Route exact path='/dreams/new' element={<PrivateRoute/>}/>
</Route>
        {/* <Route path="/dreams/new" element={<NewForm />} />
        <Route path="/dreams/new" element={<PrivateRoute />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
