
import { createContext, useContext, useState } from 'react';


const UserContext = createContext(null);


export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 1,
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
        userData.id = tmpUsers.length +1;
        tmpUsers.push(userData);
        setUsers(tmpUsers);
        if (!user) {
            login(userData);
        }
    }
    const updateUser = (userData) => {
        setUser(userData);
        let tmpUsers = users.map((user) => {
            if (user.id === userData.id) {
                return {...user, balance: userData.balance};
            }
            return user;
        })
        setUsers(tmpUsers);

    }

    

    return (
        <UserContext.Provider value={{user, users, login, logout, createAccount, updateUser}}>

            {children}

        </UserContext.Provider>
    )


}

export const useUser = () => {
    return useContext(UserContext)
}

