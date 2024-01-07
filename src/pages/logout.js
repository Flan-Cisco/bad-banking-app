import { useUser } from "../componentes/userLogin";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LogOut () {

    const { logout } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        handleLogout();
    })

    function handleLogout() {
        
    logout();
    navigate("/");
    }

    return (
        <></>
    )


}


export default LogOut;