import LoginForm from "./components/pages/loginform";
import RegisterForm from "./components/pages/registerform";
import Propostas from "./components/pages/propostas"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/Projeto_de_pes" element={<LoginForm />} />
            <Route exact path="/registerform" element={<RegisterForm />} />
            <Route exact path="/propostas" element={<Propostas />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

