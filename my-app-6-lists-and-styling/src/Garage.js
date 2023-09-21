import Car from "./Car"

export default function Garage() {
  const cars = [
    { id: 1, brand: 'Ford'},
    { id: 2, brand: 'BMW'},
    { id: 3, brand: 'Audi'},
  ]
  return (
    <>
    {/* using css stylesheet */}
      <h1 className="header-title">Who lives in my garage?</h1>
      <ul>
        {
          cars.map((car) => 
            <Car key={car.id} brand={car.brand}/ >
          )
        }
      </ul>
    </>
  )
}
