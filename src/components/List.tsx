import React, { useState } from 'react'
import { Task } from './Todo'

export default function List({task, done}:Task) {

  const [doneComp, setDoneComp] = useState<boolean>(done);

  return (
    <>
      <p>할 일: {task}</p>
      <span>완료?: {doneComp ? '완료' : '미완료'}</span> <button onClick={() => setDoneComp((cur)=>!cur)}>완료함</button>
    </>
  )
}
