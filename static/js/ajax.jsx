//////////////////////////////////////////////////////////
// Example 4: An AJAX component
function AJAX (props){
    const [compliments, setCompliments] = React.useState([]);

    const [clickedButtonId, setClickedButtonId] = React.useState('');

    // Get compliments from the server using fetch. 
    // Do this only once - when the component mounts.
    React.useEffect(() =>{
        fetch('/compliments.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCompliments(data);
        })
    }, [])

    // Create a button for each compliment
    const complimentButtons = [];
    for (const key in compliments) {
        // updateDetails is the callback function we'll use when the button is clicked
        function updateDetails () {
            // clickedButtonId is passed in to the Details component
            // so updating clickedButtonId affects some logic in the Details component!
            // This is how we'll get the Details compoment to re-render and
            // show the correct details based on which button was clicked.
            setClickedButtonId(key); 
            console.log(clickedButtonId);
        }
        complimentButtons.push(
            // Give each button a unique key so that React can identify it.
            // Let's go ahead and use the ClickableButton component
            // that we made earlier.
            <ClickableButton key={key} name={compliments[key]} onClick={updateDetails}/>
        )
    }

    return (
        <div>
        {complimentButtons}
        {clickedButtonId && <Details id={clickedButtonId} />}
        </div>
        )
}
//////////////////////////////////////////////////////////