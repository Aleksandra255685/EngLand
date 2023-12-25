import { useParams } from 'react-router-dom';
import {t_list} from '../helpers/TheoryList';
import { NavLink } from "react-router-dom";

const TheorySection = () => {
    const {id} = useParams();
    const theory = t_list[id];
    
    return ( 
        <div className="info">
            <h2>{theory.title}</h2>
            <p>{theory.p1}</p>
            <p>{theory.p2}</p>
            <p>{theory.p3}</p>
            <p>{theory.p4}</p>  
            <p>{theory.p5}</p>  
            <p>{theory.p6}</p>
            <p>{theory.p7}</p>
            <p>{theory.p8}</p>
            <p>{theory.p9}</p>
            <p>{theory.p10}</p>
            <img src={theory.img} alt={theory.title}/>     
            
            <NavLink to={`/theory/${id}/test`} className="test_link">Пройти тест</NavLink>
            
        </div>
    
    );
}
 
export default TheorySection;