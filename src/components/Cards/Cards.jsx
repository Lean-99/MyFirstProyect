import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
      
   return (
      <div className={style.cards}> 
         {
            characters.map(({name, species, gender, image, id}) => {
               return (
                  <div>
                     <Card 
                     key={id}
                     name={name}
                     species={species}
                     gender={gender} 
                     image={image}
                     id={id}
                     onClose={() => onClose(id)}
                     />
                  </div>
               )
            })
         }
      </div>
   )
}
