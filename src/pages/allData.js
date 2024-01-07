import { useUser } from "../componentes/userLogin";



function AllData() {

    const {user, users} = useUser();


    return (
        <>
        { user ? <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item, index) => (
                    <tr key="index">
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}                                
                        </td>
                        <td>
                            {item.password}                                
                        </td>
                        <td>
                            {item.balance}                                
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>: <h1>You don't have access to see the information</h1>}
    </>
        
    )
}

export default AllData;