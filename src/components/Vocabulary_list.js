import { NavLink } from "react-router-dom";

const VocabularyListComponent = ({title, index}) => {
    return ( 
    <NavLink to={`/vocabulary/${index}`}>
        <li >
            <h3>{title}</h3>
        </li> 
    </NavLink>
    );
}
 
export default VocabularyListComponent;