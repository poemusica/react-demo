//////////////////////////////////////////////////////////
// Example 1: A ClickableButton component
function ClickableButton(props) {
    // This component returns a button.
    return (
      <button
        className="fancy"
        onClick={props.onClick}
        style={ { backgroundColor: "green", color:"white" } }
      >
        {props.name}
      </button>
    );
  }
//////////////////////////////////////////////////////////