// import state
import { useState } from 'react'

// export default function FavoriteColor() {
//   // declare useState
//   const [color, setColor] = useState("red")

//   return <h1>My favorite color is {color}!</h1>
// }

// update state
export default function FavoriteColor() {
  const [color, setColor] = useState("red")

  return (
    <>
      <h1>Ny favorite color is {color}!</h1>
      <button type='button' onClick={ () => setColor("blue") }>Blue</button>
    </>  
  )
}