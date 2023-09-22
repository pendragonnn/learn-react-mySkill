import {useState} from 'react'

export default function Select() {
  const [myName, setMyName] = useState("Reza")
  
  const handleChange = (event) => {
    setMyName(event.target.value)
  }

  return (
    <form>
    <label>Choose Your Name! </label>
      <select value={myName} onChange={handleChange}>
        <option value="Reza">Reza</option>
        <option value="Arap">Arap</option>
        <option value="Oktovian">Oktovian</option>
      </select>
    </form>
  )
}
