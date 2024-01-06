import React from "react";
import BankForm from "../componentes/form";
import UserContext from "../componentes/userContext";

function LogIn() {
  const userContext = React.useContext(UserContext);

  function handle(data) {
    //Add Logic
    return true;
  }
    return (
        <BankForm
            bgColor = "secondary"
            label = "Log In"
            handle = {handle}
            hideAmount = {true}
            successBtn = "Loged in"
            submitBtn = "Log In"
        ></BankForm>
      );
}

export default LogIn;