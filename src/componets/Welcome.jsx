import React from 'react'

export default function Welcome({username, age}) {
  return (
    <div>
      <h1>안녕하세요</h1>
      <h1>{username}</h1>
      <h1>{age}</h1>
      <h1>잘가요</h1>
    </div>
  )
}
