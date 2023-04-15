import { Link } from "react-router-dom"
import { addFavorites, deleteFavorite } from "../redux/actions"
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({ name, species, gender, image, onClose, id, addFavorites, deleteFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else if (isFav === false) {
         setIsFav(true)
         addFavorites({ name, species, gender, image, id, addFavorites, deleteFavorite })
      }
   }; 

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true); 
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>
                  ❤️
               </button>
            ) : (
               <button onClick={handleFavorite}>
                  🤍
               </button>
            )
         }
         <button onClick={onClose}>X</button>

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img alt="text" src={image}/> 
         <hr />
      </div>
   )
}; 

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}; 

const mapDispatchToProps = (dispatch) => {
      return {
         addFavorites: (character) => {dispatch(addFavorites(character))},
         deleteFavorite: (id) => {dispatch(deleteFavorite(id))}
      }
   }; 



export default connect(mapStateToProps, mapDispatchToProps)(Card); 

// Es null, pero seria mapStateToProps: Esto me daria acceso al estado global.
// mapDispatchToProps: Esto me da el 'poder' de despachar actions. 
