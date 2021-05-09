//////////////////////////////////////////////////////////
// books is an array of objects that we'll use in Example 2.
const books = [
{
    id: 1,
    title: "The Road to React",
    read: false,
},
{
    id: 2,
    title: "Practical Modern Javascript",
    read: true,
},
{
    id: 3,
    title: "Learning React",
    read: false,
},
];
//////////////////////////////////////////////////////////
// Example 2: A List component
function List(props) {
    // This component demonstrates conditional rendering using && short-circuiting.
    return (
        <React.Fragment>
        <p> My Reading list: </p>
        <ul>
        {/* Here we use the map method with the books Array.
        The map method takes a function and applies it to each item in the Array.
        */}
        {books.map(
            // For each book, we create an li element only if the book is unread.
            (book) => !book.read && <li key={book.id}>{book.title}</li>
            // We could have also written...
            // (book) => { if (!book.read) {return <li key={book.id}>{book.title}</li>} }
        )}
        </ul>
        </React.Fragment>
    );
}
//////////////////////////////////////////////////////////