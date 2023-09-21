function Football() {
  // without argument
  // const shoot = () => alert("great shot!")

  // with argument
  const shoot = (a) => alert(a);

  // identified event object
  const identified = (a) => alert(a.type);

  return (
    <div>
      {/* without argument  */}
      {/* <button onClick={shoot}>Take the shot!</button> */}

      {/* with argument */}
      <button onClick={() => shoot("let's gooo")}>Take the shot!</button>

      {/* identified event object */}
      <button onClick={(event) => identified(event)}>What event on me?</button>
    </div>
  );
}

export default Football;
