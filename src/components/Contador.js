import React, { useState, useEffect } from 'react';

export const Contador = () => {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState(0);
    const [peliculas, setPeliculas] = useState([]);

    const peliculasHTML = [];

    const titanic = () => {
        setCount(count+1)
    }

    const avatar = () =>{
        setUsername(username+1)
    }

    useEffect(() =>{

        for (let i=0; i < peliculas.length; i++){
            peliculasHTML.push(
                "<div></div>"
            )
        }
    }, [count]);

  return (
    <>
        <button onClick = {titanic}>
            Titanic
        </button>
        <button onClick={avatar}>
            Avatar
        </button>
        Peliculas de Titanic {count}
        Peliculas de Avatar {username}
        {peliculasHTML}
    </>

  );
};

export default Contador;
