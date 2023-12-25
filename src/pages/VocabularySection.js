import { useParams } from 'react-router-dom';
import {v_list} from '../helpers/VocabularyList';
import Cards from '../components/Cards'

const VocabularySection = () => {
    const {id} = useParams();
    const vocabulary = v_list[id];
    const words = vocabulary.words;
    
    return ( 
        <div className="info">
            <h2>{vocabulary.title}</h2>
            <div className='words'>
                {words.map((card) => {
                        return <Cards word = {card.word} translation = {card.translation}/>;
                    })}
            </div>
        </div>
    
    );
}
 
export default VocabularySection;