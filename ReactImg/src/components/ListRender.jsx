import { useState } from "react";

export const ListRender = () => {

    const [listName] = useState(["thiago", "pedro", "joao"]);
    const [users, setUsers] = useState([
        {id: 1, name:"Thiago", age: 22},
        {id: 2, name:"jas", age: 22},
        {id: 3, name:"didi", age: 23}
    ])

    const DeleteUsers = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));

    }

  return (
    <div>
        {/* Render sem Key */}
        <ul>
            {listName.map((item) => (
                  <li>{item}</li>  
            ))}
        </ul>

         {/* Render com Key */}
         <ul>
            {users.map((user) => (
                <li key={user.id} >
                    {user.name}-{user.age} anos
                </li>
            ))}
         </ul>
             {/* Previous Key */}
             <button onClick={DeleteUsers}>Delete random user</button>

    </div>
  );
};

export default ListRender
