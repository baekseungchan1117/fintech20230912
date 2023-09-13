import React,{useState} from 'react'

export default function EventComponent() {
  const [text, setText] = useState('')

  const handleOnchange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }

  const handleOnclick = () => {
    alert('안녕하세요');
  }

  return (
    <div>
      <input onChange={handleOnchange} />
      <button onClick={handleOnclick}>제출</button>
    </div>
  )
}
