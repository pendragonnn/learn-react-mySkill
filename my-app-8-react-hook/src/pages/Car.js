import { useState } from 'react'

export default function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return{...previousState, color:"blue"}
    })
  }

  const updateYear = () => {
    setCar(previousState => {
      return{...previousState, year: "1999"}
    })
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateColor}>Blue Car</button>
      <button onClick={updateYear}>1999</button>
    </> 
  )
}