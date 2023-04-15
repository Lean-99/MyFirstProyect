import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 


export default function Detail () {
    
    const {detailId} = useParams();

    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            }       else {
                window.alert("No hay personajes con ese ID");
            }
            })
            .catch((err) => {
            window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);
    

    

    return (
        <div>
            <button>
                <Link to='/home'>HOME</Link>
            </button>
            <h1>{character?.name}</h1>
            <h3>{character?.status}</h3>
            <h3>{character?.specie}</h3>
            <h3>{character?.gender}</h3>
            <h3>{character?.origin?.name}</h3>
            <img src={character?.image} alt="" />
        </div>
    )
}; 