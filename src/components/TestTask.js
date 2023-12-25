import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'


const TestTask = ({handleSetAns , num, question, ans1, ans2, ans3, ans4}) => {
    

    const [toggleState, setToggleState] = useState();
    const toggleTab = (id) => {
        setToggleState(id);
    };
    return ( 
        <RadioGroup onChange={handleSetAns(num, toggleState)} name="ans" className='group'>
            <RadioGroup.Label className='lable'>{num}. {question}</RadioGroup.Label>
            <RadioGroup.Option key={ans1} value={ans1} className={toggleState === '1' ? "options active-options" : "options"} onClick={() => toggleTab('1')}> {ans1}</RadioGroup.Option>
            <RadioGroup.Option key={ans2} value={ans2} className={toggleState === '2' ? "options active-options" : "options"} onClick={() => toggleTab('2')}> {ans2} </RadioGroup.Option>
            <RadioGroup.Option key={ans3} value={ans3} className={toggleState === '3' ? "options active-options" : "options"} onClick={() => toggleTab('3')}> {ans3} </RadioGroup.Option>
            <RadioGroup.Option key={ans3} value={ans4} className={toggleState === '4' ? "options active-options" : "options"} onClick={() => toggleTab('4')}> {ans4} </RadioGroup.Option>
      </RadioGroup>
    );
}
 
export default TestTask;