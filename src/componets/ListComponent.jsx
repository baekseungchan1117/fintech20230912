import React, {useState} from 'react'
import Welcome from "./Welcome";

export default function ListComponent() {
    const [users, setUsers] = useState([
        {username : "홍길동", age : 12, major : "경영학"},
        {username : "고길동", age : 30, major : "회계학"},
        {username : "김길동", age : 40, major : "컴공"},
    ]);
  return (
    <div>
    {users.map((user, index) => {
        return <Welcome key={index} username={user.username} age={user.age}></Welcome>
    })}
    </div>
  )
}

