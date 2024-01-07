import React from "react";
import Card from "../componentes/card";

function BankForm(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  function setError(text, time = 3000) {
    setStatus(text);
    setTimeout(() => {
      setStatus("");
    }, time);
  }
  function validate(field, label) {
    if (!field) {
      setError(label + " field shouldn't be empty");
      return false;
    }
    if (label === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.exec(field)) {
        setError("Email format is not valid");
        return false;
      }
    }
    if (label === "password") {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      if (!passwordRegex.exec(field)) {
        setError(
          "Password should have at least 8 characters and include numbers and special characters",
          5000
        );
        return false;
      }
    }
    if (label === "withdraw" || label === "deposit") {
      if (field < 0) {
        setError("Please try a different amount");
        return false;
      }
      if (label === "withdraw" && props.balance < field) {
        setError("You don't have enough balance for this transaction");
        return false;
      }
    }
    return true;
  }

  function handleSubmit() {
    if (props.label === "Create Account") {
      handleCreate();
    } else if (props.label === "Log In") {
      handleLogin();
    } else {
      handleDepositWithdraw();
    }
  }
  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    setShow(false);
    props.handle({ name, email, password, balance: 100 });
  }
  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    //Add logic to save user info
    setShow(false);
    props.handle();
  }

  function handleDepositWithdraw() {
    if (!validate(amount,"withdraw")) return;
    if (!validate(amount,"deposit")) return;

    props.handle({amount, header: props.label});
  }

  const handleKeyDown = (event) => {
    if (
      [46, 8, 9, 27, 13, 110, 40].includes(event.keyCode) ||
      (event.keyCode === 65 && event.ctrlKey === true) ||
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      return;
    }
    if (
      (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  };

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setAmount("");
    setShow(true);
  }

  return (
    <Card
      bgcolor={props.bgColor}
      header={props.label}
      status={status}
      body={
        show ? (
          <>
            {" "}
            {props.label === "Create Account" ? (
              <>
                Name
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
              </>
            ) : (
              <></>
            )}
            {props.label !== "Withdraw" && props.label !== "Deposit" ? (
              <>
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
              </>
            ) : (
              <>
                Balance
                <p>${props.balance}</p>
                <br />
                {props.label} Amount
                <input
                  onKeyDown={handleKeyDown}
                  type="number"
                  min={0}
                  className="form-control"
                  id={"amount" + props.label}
                  placeholder={props.label + " Amount"}
                  value={amount}
                  onChange={(e) => setAmount(e.currentTarget.value)}
                />
              </>
            )}
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleSubmit}
            >
              {props.submitBtn}
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              {props.successBtn}
            </button>
          </>
        )
      }
    />
  );
}

export default BankForm;
