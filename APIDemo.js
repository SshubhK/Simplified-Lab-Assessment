import "./APIDemo.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
    useEffect(() => {

        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    
    const ShowData = () => {


        console.log("I m here");

    }

    return (
        <div className="App">
            <h1>ABES </h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map(({ id,title }) => (
                        <li key={id}>
                            <h3>{title} <button type="submit" onClick={ShowData} class="btn btn-primary">Delete</button></h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
