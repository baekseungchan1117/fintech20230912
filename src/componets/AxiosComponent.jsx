import React from 'react'
import axios from "axios";

const AxiosComponent = () => {
    const handleClick = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=677982bdcd6549329d32edfcb90766bd")
        .then((res) => {
            console.log(res);
        })
    }

  return (
    <div>
        <button onClick={handleClick}>요청 생성</button>
    </div>
  )
}

export default AxiosComponent
