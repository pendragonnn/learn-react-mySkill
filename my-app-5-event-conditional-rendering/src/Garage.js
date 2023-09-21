// conditional rendering with logical && operator

export default function Garage(props) {
  const cars = props.cars

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && 
        <h2>You have {cars.length} cars in your Garage.</h2>
      }
    </>
  )
}
