import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id);


        // here  deleted user
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted sucess');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }


    return (
        <div>
            <h1>USers length: {users.length}</h1>
            <div>
                {
                    users.map(users =>
                        <p key={users._id}>
                            {users.name} - {users.email}
                            <Link to={`/update/${users._id}`}>
                                <button>Update</button>
                            </Link>

                            <button onClick={() => handleDelete(users._id)}>Delete
                            </button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;