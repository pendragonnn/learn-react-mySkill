export default function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "dodgerBlue",
    padding: "10px",
    fontFamily: "Sans-serif"
  }
  return (
    <>
    {/* inline styling */}
     <h1 style={{color: "red"}}>Hello Style</h1> 

     {/* camelCase */}
     <h1 style={{backgroundColor: "lightblue"}}>Hello World</h1>

     {/* javascript object */}
     <h1 style={myStyle}>Hello object</h1>

     <p>Add a little style!</p>
    </>
  )
}
