import { NavLink } from "react-router-dom";

const ReadingListComponent = ({title, index}) => {
    return ( 
    <NavLink to={`/reading/${index}`} >
        <li >
            <h3>{title}</h3>
        </li> 
    </NavLink>
    );
}
 
export default ReadingListComponent;