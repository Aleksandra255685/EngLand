import React from 'react'
import TheoryListComponent from '../components/Theory_list'
import {t_list}  from '../helpers/TheoryList'

export default function Theory() {
  return (
    <div className='list'>
      <h2>Theory</h2>
        <ul className="concreate-list">
            {t_list.map((theory, index) => {
                return <TheoryListComponent key={index} title={theory.title} index={index}/>
            })}
        </ul>
    </div>
  )
}
