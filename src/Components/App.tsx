import { useState } from "react";
import "../Styles/App.css";
import CardLogin from "./CardLogin";
import Button from "./Button";
import CardRegister from "./CardRegister";

function App() {
  const [login, setLogin] = useState(true);

  return login ? (
    <div className="container-main">
      <button className="button" onClick={() => setLogin(!login)}>Register</button>
      <h1>Login</h1>
      <CardLogin />
    </div>
  ) : (
    <div>
      <button className="button" onClick={() => setLogin(!login)}>Login</button>
      <h1>Register</h1>
      <CardRegister />
    </div>
  );
}

export default App;
