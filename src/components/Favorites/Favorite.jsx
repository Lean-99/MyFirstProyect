import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Card from "../Card/Card"


function Favorite ({ myFavorites }) {

    return (
        <div>
            <Link to='/home'>Home</Link>
            {
                myFavorites.map(({name, species, gender, image, id}) => {
                    return (
                        <div>
                            <Card 
                            key={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image}
                            id={id}
                            />
                        </div>
                    )
                })
            }
        
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorite); 