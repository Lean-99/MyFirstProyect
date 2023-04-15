import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


export default function Nav ({ onSearch }) {
    return (
        <nav>
            <Link to='/favorites'>Favorites</Link>
            <>///</>
            <Link to='/about' >About</Link>
            <>///</>
            <Link to='/home' >Home</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
};