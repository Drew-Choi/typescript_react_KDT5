import React, { useRef, useState } from 'react'
import List from './List';

export interface Task {
  task: string;
  done: boolean;
}

export default function Todo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoArr, setTodoArr] = useState<Array<Task>>([]);
  //Task[] 이렇게 해도 됨

  const todoHandle = ():void => {
    if(inputRef.current){
      //네로잉 처리
      const newtodo: Task = {
        task: inputRef.current.value,
        done: false
      }
      setTodoArr([...todoArr, newtodo])
      // let copy:Array<Task> = [...todoArr]
      // //...이걸 써야 새로운 주소를 인식하게 됨
      // copy.push(newtodo)
      // setTodoArr((cur: Array<Task>) => copy);
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={todoHandle}>할 일 추가</button>
      <br />
      <h1>TO DO LIST</h1>
      {
        todoArr.map((el:Task, id:number) => {
          return (
           <div key={id}>
              <List {...el}/>
           </div>
          )
         }
        )
      }
    </>
  )
}
