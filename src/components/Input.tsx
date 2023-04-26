import React, { useRef, useState } from 'react'

export default function Input() {
  const [str, setStr] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (): void => {
    if(inputRef.current !== null) {
      setStr(inputRef.current.value);
    }
  }

  return (
    <>
      <h1>{str}</h1>
      <input ref={inputRef} onChange={handleChange}/>
    </>
  )
}
