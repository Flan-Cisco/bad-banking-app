import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home.js";
import Products from "./pages/products.js";
import About from "./pages/about.js";
import CreateAccount from "./pages/createAccount.js";
import LogIn from "./pages/login.js";

import Header from "./componentes/header.js";
import UserContext from "./componentes/userContext";

function App() {
  return (
    <Router>
      <Header />
      <div className="body">
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <Routes>
            <Route path="" exact element={<Home />}></Route>
            <Route path="about/" element={<Products />}></Route>
            <Route path="products/" element={<About />}></Route>
            <Route path="createAccount/" element={<CreateAccount />}></Route>
            <Route path="logIn" element={<LogIn></LogIn>}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
export default App;
