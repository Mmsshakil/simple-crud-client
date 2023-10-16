import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUser = useLoaderData();
    // console.log(loadedUser);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };

        console.log(name, email);

        // here updated user
        // -----------------------------------
        // this part will sent the data to the server side
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            // -----------------------------------
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // -----------------------------------
    }

    return (
        <div>
            <h2>User name: {loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder={loadedUser.name} />
                <br />
                <input type="email" name="email" id="" placeholder={loadedUser.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;