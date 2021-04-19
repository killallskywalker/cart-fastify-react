import React, { useEffect , useState } from 'react';
import { getUsers } from './../services/api/user/index';

export const UserContext = React.createContext([]);

const UserProvider = ({ children }) => {

    const [ users , setUsers ] = useState([])

    useEffect( () => {
        const fetch = async () => {
            try{
                const response = await getUsers();
                console.log(response)
                setUsers(response.data)
            }catch(e){
                alert(e.data.message)
            }
        };

        fetch();
    },[]);

    return (
        <UserContext.Provider value={{ users , setUsers }}>
          {children}
        </UserContext.Provider>
    );
 
}

export default UserProvider;