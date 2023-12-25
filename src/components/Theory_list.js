import { NavLink } from "react-router-dom";

const TheoryListComponent = ({title, index}) => {
    return ( 
    <NavLink to={`/theory/${index}`}>
        <li >
            <h3>{title}</h3>
        </li> 
    </NavLink>
    );
}
 
export default TheoryListComponent;