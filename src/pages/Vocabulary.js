import React from 'react'
import VocabularyListComponent from '../components/Vocabulary_list'
import {v_list}  from '../helpers/VocabularyList'

export default function Vocabulary() {
  return (
    <div className='list'>
      <h2>Vocabulary</h2>
        <ul className="concreate-list">
            {v_list.map((vocabulary, index) => {
                return <VocabularyListComponent key={index} title={vocabulary.title} index={index}/>
            })}
        </ul>
    </div>
  )
}
