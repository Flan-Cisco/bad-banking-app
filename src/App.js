import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { memo } from "react";

import Home from "./pages/home.js";
import CreateAccount from "./pages/createAccount.js";
//import LogIn from "./pages/login.js";
import LogOut from "./pages/logout.js";
import AllData from "./pages/allData.js";
import Bank from "./pages/bank.js";

import Header from "./componentes/header.js";
import { UserProvider } from "./componentes/userLogin.js";

function App() {
  return (
    <Router>
      <Header />
      <div className="body">
        <UserProvider>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="createAccount" element={<CreateAccount />}></Route>
            {/* <Route path="logIn" element={<LogIn></LogIn>}></Route> */}
            <Route path="allData" element={<AllData />}></Route>
            <Route path="bank" element ={<Bank/>}></Route>
            <Route path="logout" element={<LogOut />}></Route>
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}
export default memo(App);
