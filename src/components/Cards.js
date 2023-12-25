import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { GoIterations } from "react-icons/go";

export default function Cards({word, translation}) {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className='card'>
        <div className='word'>{word}</div>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
            click to translate  <GoIterations />
      </button>
      <Transition show={isShowing} className='translations'>{translation}</Transition>
    </div>
  )
}