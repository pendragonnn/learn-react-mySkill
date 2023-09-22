import React from 'react'
import {useState} from 'react'

export default function MyForm() {
  // const [name, setName] = useState("")
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${inputs.username} and ${inputs.age}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text"
            name='username'
            values={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Enter your age:
          <input
            type="number"
            name='age'
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit"/>
      </form>
    </>
  )
}
