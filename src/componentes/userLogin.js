
import { createContext, useContext, useState } from 'react';


const UserContext = createContext(null);


export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "John",
        email: "john@test.com",
        password: "!a123123",
        balance: 2500
    });
    const [users, setUsers] = useState([user]);

    
    const login = (userData) => {
        console.log('User logged in:', userData);
        setUser(userData);
    }

    const logout = () => {
        setUser(null);
    }

    const createAccount = (userData) => {
        let tmpUsers = users;
        tmpUsers.push(userData);
        setUsers(tmpUsers);
        if (!user) {
            login(userData);
        }
    }

    

    return (
        <UserContext.Provider value={{user, users, login, logout, createAccount}}>

            {children}

        </UserContext.Provider>
    )


}

export const useUser = () => {
    return useContext(UserContext)
}

