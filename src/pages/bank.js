import BankForm from "../componentes/form";
import { useUser } from "../componentes/userLogin";

function Bank() {

    const {user, updateUser} = useUser();

    function handleTransaction(data) {
        
        let userData = user;
        if (data.header === "Deposit"){
            userData.balance = userData.balance + Number(data.amount);
        } else {
            userData.balance = userData.balance - Number(data.amount);
        }
        updateUser(userData)
        
    }
  return (
    <>
      <BankForm
        bgColor="info"
        label="Deposit"
        handle={handleTransaction}
        hideAmount={false}
        successBtn="Deposit"
        submitBtn="Deposit"
        balance = {user.balance}
      ></BankForm>

      <BankForm
        bgColor="warning"
        label="Withdraw"
        handle={handleTransaction}
        hideAmount={false}
        successBtn="Withdraw"
        submitBtn="Withdraw"
        balance = {user.balance}
      ></BankForm>
    </>
  );
}

export default Bank;
