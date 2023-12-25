import React from 'react'
import ListeningListComponent from '../components/Listening_list'
import {l_list}  from '../helpers/ListeningList'

export default function Listening() {
  return (
    <div className='list'>
      <h2>Listening</h2>
        <ul className="concreate-list">
            {l_list.map((listening, index) => {
                return <ListeningListComponent key={index} title={listening.title} index={index}/>
            })}
        </ul>
    </div>
  )
}
