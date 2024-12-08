import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register.jsx";
import Assigncase from "./Assigncase.jsx";
import Login from "./Login.jsx";
import Index from "./Index.jsx";
import Vicindex from "./Vicindex.jsx";
import Vicicoun from "./Vicicoun.jsx";
import Chat from "./Chat.jsx";
import AdminLogin from "./AdminLogin.jsx";
import Adminindex from "./Adminindex.jsx";
import Addcoun from "./Addcoun.jsx";
import Addlegalad from "./Addlegalad.jsx";
import Addlegelri from "./Addlegelri.jsx";
import About from "./About.jsx";
import Legaladvisor from "./Legaladvisor.jsx";
import Counlogin from "./Counlogin.jsx";
import Legaladassigned from "./Legaladassigned.jsx";
import Session from "./Session.jsx";
import Displayhealth from "./displayhealth.jsx";
import Health from "./Health.jsx";
import Datacase from "./Datacase.jsx";
import Mainindex from "./Mainindex.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/mainindex" element={<Mainindex />} />
        <Route path="/datacase" element={<Datacase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counlogin" element={<Counlogin />} />
        <Route path="/legaladassigned" element={<Legaladassigned />} />
        <Route path="/" element={<Index />} />
        <Route path="/legaladvisor" element={<Legaladvisor />} />
        <Route path="/victimindex" element={<Vicindex />} />
        <Route path="/displayhealth" element={<Displayhealth />} />
        <Route path="/vicicoun" element={<Vicicoun />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/addcoun" element={<Addcoun />} />
        <Route path="/addlegalad" element={<Addlegalad />} />
        <Route path="/addlegelri" element={<Addlegelri />} />
        <Route path="/about" element={<About />} />
        <Route path="/assigncase" element={<Assigncase />} />
        <Route path="/adminindex" element={<Adminindex />} />
        <Route path="/session" element={<Session />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
