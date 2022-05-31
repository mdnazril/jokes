import { useState, useEffect } from "react";


const GetJokes = ({jokeList}) => {
    
    const [body, setBody] = useState([]);
    

        const jokeCaller = async()=>{
            const response = await fetch('https://icanhazdadjoke.com/',{
                method: 'GET',
                headers:{
                    'Accept': 'application/json'
                }
            })
            const data = await response.json();
            setBody(data);
        }
        useEffect(()=>{
            jokeCaller()
        },[]);
        

    return (
        <div className="getJokes">
            <div className="jokeContainer">
               <p>{body.joke}</p> 
            </div>
            <button onClick={jokeCaller}>get jokes</button>
        </div>
    );
}
 
export default GetJokes;