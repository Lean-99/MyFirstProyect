import { useState } from "react";
import style from './SearchBar.module.css'


export default function SearchBar({ onSearch }) {

   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={style.buscador}>
         <input type='search' value={character} onChange={handleChange}/>
         <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
};
