import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react'


const SelectedTask = ({handleSetAns , num, question, ans1, ans2, ans3, ans4}) => {
    const q=  [
        {id:'1', ans: ans1},
        {id:'2', ans: ans2},
        {id:'3', ans: ans3},
        {id:'4', ans: ans4},
    ]

    const [toggleState, setToggleState] = useState(q[0]);
    
    return ( 
        <Listbox onChange={handleSetAns(num, toggleState.id)} name="ans" className='group' as={Fragment}>
            <div className='listbox'>
                <Listbox.Label className='lable'>{num}. {question}</Listbox.Label>
                <Listbox.Button > <button> {toggleState.ans}</button> </Listbox.Button>
                <Listbox.Options className='ans'>
                    <Listbox.Option key={ans1} value={ans1}  className={toggleState.id === '1' ? "options active-options" : "options"} onClick={() => setToggleState({id:'1', ans: ans1},)}> {ans1}</Listbox.Option>
                    <Listbox.Option key={ans2} value={ans2}  className={toggleState.id === '2' ? "options active-options" : "options"} onClick={() => setToggleState({id:'2', ans: ans2})}> {ans2} </Listbox.Option>
                    <Listbox.Option key={ans3} value={ans3}  className={toggleState.id === '3' ? "options active-options" : "options"} onClick={() => setToggleState({id:'3', ans: ans3})}> {ans3} </Listbox.Option>
                    <Listbox.Option key={ans3} value={ans4}  className={toggleState.id === '4' ? "options active-options" : "options"} onClick={() => setToggleState({id:'4', ans: ans4})}> {ans4} </Listbox.Option>
                </Listbox.Options>
            </div>
        </Listbox>
    );
}
 
export default SelectedTask;