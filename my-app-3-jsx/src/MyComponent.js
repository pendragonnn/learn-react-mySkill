function MyComponent() {
  return (
    <div>
    {/* implementing JSX with '{...}' */}
      <button>{1 + 2}</button> <br/>
      <button>{ Date.now() }</button> <br/>
      <button>{12 * 5} </button>
    </div>  
  )
}

export default MyComponent;