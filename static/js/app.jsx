//////////////////////////////////////////////////////////
// A React Mini Primer:
// React components have...
// props - an immutable object passed in as an argument to the component
// state - a variable defined in the component, can be changed, causes a re-render when it changes

// React built-in functions are called Hooks.
// React.useState - Hook used to control state
// React.useEffect - Hook used to manage side effects
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// The App component is our top-level component. 
// All other components are inside it.
// In this component, we define our routes and determine what will display at each route
// using ReactRouterDOM.
function App() {
  return (
    // We use the ReactRouterDOM.BrowserRouter component to control our app logic.
    <ReactRouterDOM.BrowserRouter>
      {/* By the way, this is how you write a comment in your jsx */}

      {/* The navbar is displayed on every page because it is outside
      the ReactRouterDOM.Switch component. */}
      <nav>
          {/* Instead of using <a> tags for our navbar links
          we need to use a ReactRouterDOM.Link component
          so that ReactRouterDOM will properly handle the URLs.
          */}
          <ReactRouterDOM.Link to="/">Homepage | </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/button">My Button | </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/list">My Books | </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/timer">My Timer | </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/ajax">Do AJAX</ReactRouterDOM.Link>
          <hr></hr>
      </nav>

      <ReactRouterDOM.Switch>
        {/* Inside the ReactRouterDOM.Switch component
        we define our routes and what they should display */}

        {/* If the requested url matches "/" exactly, show the homepage */}
        <ReactRouterDOM.Route exact path="/">
          <div>This is the homepage</div>
        </ReactRouterDOM.Route>

        {/* If the url matches "/button" show the ClickableButton component */}
        <ReactRouterDOM.Route path="/button">
          <ClickableButton name="Click me!" onClick={()=>alert("you clicked me!")} />
        </ReactRouterDOM.Route>

        {/* If the url matches "/list" show the List component */}
        <ReactRouterDOM.Route path="/list">
          <List />
        </ReactRouterDOM.Route>

        {/* If the url matches "/timer" show the List component */}
        <ReactRouterDOM.Route path="/timer">
          <Timer />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/ajax">
          <AJAX />
        </ReactRouterDOM.Route>

        {/* For any other URL, display page not found */}
        <ReactRouterDOM.Route path="*">
          <div>Page not found :(</div>
        </ReactRouterDOM.Route>

      </ReactRouterDOM.Switch>

      {/* If you want something else to be displayed on every page below the main content
      you can add it after the ReactRouterDOM.Switch component */}
      <hr></hr>
      <footer>
        <p>Made by: Balloonicorn</p>
      </footer>

    </ReactRouterDOM.BrowserRouter>
  );
}
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// We'll select an element with the id "root" and 
// attach our React App component there.
ReactDOM.render(<App />, document.getElementById("root"));
//////////////////////////////////////////////////////////
