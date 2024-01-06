import UserContext from "../componentes/userContext";
import React from "react";
import BankForm from "../componentes/form";

function CreateAccount() {
  const userContext = React.useContext(UserContext);

  function handle(data) {
    userContext.user.push({
        name: data.name,
        email: data.email,
        password: data.password,
        balance: 100
    });
    return true;
  }

  return (
    <BankForm
        bgColor= "primary"
        label = "Create Account"
        handle = {handle}
        hideAmount = {true}
        successBtn = "Add another account"
        submitBtn = "Create Account"
    ></BankForm>
  );
}

export default CreateAccount;
