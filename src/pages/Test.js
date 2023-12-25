import { useParams, NavLink } from 'react-router-dom';
import { useState } from 'react'
import {t_list} from '../helpers/TheoryList';
import TestTask from '../components/TestTask'
import { Dialog } from '@headlessui/react'

const Test = () => {
    const {id} = useParams();
    const theory = t_list[id];
    const test = theory.test;
    let initialAns = [
        { id: 1, user_ans: ''},
        { id: 2, user_ans: ''},
        { id: 3, user_ans: ''},
        { id: 4, user_ans: ''},
        { id: 5, user_ans: ''},
        { id: 6, user_ans: ''},
        { id: 7, user_ans: ''},
        { id: 8, user_ans: ''},
        { id: 9, user_ans: ''},
        { id: 10, user_ans: ''},
    ];
    let result = 0;
    const [ans, setAns] = useState([]);

    function handleSetAns(num, user_ans) {
        initialAns.map((t) => {
            if (t.id === num) {
                t.user_ans = user_ans;
            } return t;
        })
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        test.map((task) => {
            if (task.right === ans[task.num-1].user_ans) {
                result++;
            } return task;
        })
        setIsOpen([true,result]);
    }
    const [isOpen, setIsOpen] = useState([false,0]);
    return ( 
        <div className="info">
            <h2>Тест по разделу "{theory.title}"</h2>  
            <form className='questions' onSubmit={handleSubmit}>
                {test.map((task) => {
                    return <TestTask handleSetAns = {handleSetAns} num={task.num} question={task.question} ans1={task.ans1} ans2={task.ans2} ans3={task.ans3} ans4={task.ans4}/>;
                })}
                <button className="button" type='submit' onClick={() =>  setAns(initialAns)}>Завершить тестирование</button>
            </form>
            <Dialog open={isOpen[0]} onClose={() => setIsOpen([false,0])}>
                <div className="bg">
                    <Dialog.Panel className="popup">
                        <h2>Ваш результат {isOpen[1]}/10</h2>
                        <NavLink to={`/`} className="test_link">На главную</NavLink>
                    </Dialog.Panel>
                </div>
            </Dialog>
            
        </div>
    );
}
 
export default Test;