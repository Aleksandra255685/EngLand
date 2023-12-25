import React from 'react'
import ReadingListComponent from '../components/Reading_list'
import {r_list}  from '../helpers/ReadingList'

export default function Reading() {
  return (
    <div className='list'>
      <h2>Reading</h2>
        <ul className="concreate-list">
            {r_list.map((reading, index) => {
                return <ReadingListComponent key={index} title={reading.title} index={index}/>
            })}
        </ul>
    </div>
  )
}
