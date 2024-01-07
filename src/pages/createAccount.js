
import React from "react";
import BankForm from "../componentes/form";
import { useUser } from "../componentes/userLogin";

function CreateAccount() {

  const {createAccount} = useUser();

  function handle(data) {
    console.log(data)
    createAccount({
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
