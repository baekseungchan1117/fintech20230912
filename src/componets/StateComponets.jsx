// rfac 화살표 함수 단축키

import React, { useState } from 'react'

export default function StateComponets() {
    let value = "초기값";
    const [username, setUsername]  = useState('초기값');

    setInterval(() => {
        setUsername('변경된 값')
    }, 2000)
  return (
    <div>
      <b>{username}</b>
      <br />
      <b>{value}</b>
    </div>
  )
}
