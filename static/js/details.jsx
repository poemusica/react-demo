//////////////////////////////////////////////////////////
// Example 4, part 2: An Details component
function Details(props) {
    const [details, setDetails] = React.useState("");

    // We need to update the Details component whenever it's props.id changes
    //  When props.id changes, we'll make a GET request to the server
    // and update the component to display the result
    React.useEffect(() => {
        fetch(`/details.json?id=${props.id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setDetails((details)=>data);
        })
        }, [props.id])
    
    return <p>{details}</p>
}