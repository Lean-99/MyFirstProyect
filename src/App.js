import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorite from './components/Favorites/Favorite';






function App () {
  // ESTADOS 
  
  const [characters, setCharacters] = useState([])

  //const location = useLocation()

  //DATOS DE PRUEBA

  //const username = 'leo@mail.com'
  //const password = 'leo123'

  //------------------------

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{padding: '25px'}}>
      <Nav onSearch={onSearch}/>
      <hr/>
      <Routes>
        <Route path='/favorites' element={<Favorite />}/> 
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}/>
        <Route path='/About' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}


export default App
