import { NavLink } from "react-router-dom";

const ListeningListComponent = ({title, index}) => {
    return ( 
    <NavLink to={`/listening/${index}`} >
        <li >
            <h3>{title}</h3>
        </li> 
    </NavLink>
    );
}
 
export default ListeningListComponent;