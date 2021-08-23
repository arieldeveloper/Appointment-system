import React from "react";
import {useState, useEffect } from "react";
import {Link} from "react-router-dom";



function handleClickFunc(age, setAge) {
    setAge(age + 1);
}

function HomePage() {
    const [age, setAge] = useState(10);
    const handleClick = () => handleClickFunc(age, setAge);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getData();

        async function getData() {
            const apiURL = "api/posts"
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }


    }, []);


    return (
        [<div>
            <h1>Home</h1>
            { posts && (
                <div>
                    {posts.map ((post, index) => (
                        <h5>{post.description}</h5>
                    ))}
                </div>
            ) }
            <h3>\I am { age } years old</h3>
            <button onClick = {handleClick}> Click </button>
            <Link to="/users">Users</Link>
        </div>]
    );
}

export default HomePage;