//////////////////////////////////////////////////////////
// Example 3: A Timer component.
// This example is complicated but it illustrates some useful logic.
function Timer(props) {
    // First we'll set up some state for the Timer component.
    // numberSecondsElapsed is a state variable.
    // setNumberSecondsElapsed is the function we'll 
    // always use to update numberSecondsElapsed.
    const [numberSecondsElapsed, setNumberSecondsElapsed] = React.useState(0);
    
    // React.useEffect takes two arguments:
    // - a function (always runs at least once - when the component is first mounted)
    // - a dependency that determines when to re-run the function
    // If the dependency is an empty list, the function will only run once.
    React.useEffect(() => {
      // setInterval and clearInterval are built-in browser functions.
      // setInterval takes a function and the number of seconds to wait before calling the function again.
      const myTimer = setInterval(() => {
        // Use an anonymous function as the input to the function that manages state.
        // This ensures that our state gets updated correctly.
        setNumberSecondsElapsed( (numberSecondsElapsed) => numberSecondsElapsed + 1);
      }, 1000);
      // Our useEffect function returns a function!
      // React will call the returned function when it's time to unmount the component.
      // This makes sure myTimer doesn't keep running forever. 
      return () => { clearInterval(myTimer); }
    }, []); // Empty list is the dependency for useEffect. So it will only run once.
  
    // Components can only return one thing. So we'll wrap our HTML in a React.Fragment component.
    // Now we can return two paragraphs as one thing: a React.Fragment!
    return (
    <React.Fragment>
      <p>The timer has started!</p>
      <p>Seconds: {numberSecondsElapsed}</p>
    </React.Fragment>
    )
  
  }
  //////////////////////////////////////////////////////////