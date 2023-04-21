import { FC, useState, useEffect } from 'react'

const App =  () => {
  const [data, setData] = useState("")

  useEffect(() => {
    fetch('/api')
     .then(res => res.json())
     .then(data => setData(data.message))
  }, []);

  return (
    <h2 className='text-1xl font-bold underline'> {data ? data : "Hello Friend!"} </h2>
  )
}

export default App
