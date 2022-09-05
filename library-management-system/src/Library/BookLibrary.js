
import { useState } from "react";


function BookLibrary(){

    const [library, setLibrary] = useState(["Wings of fire", "First Flight",
 "The Man who sold his farari", "The Alcemist", "5 AM Club"]);
 
    const [newBook, setNewBook] = useState("");

   let handleBookRemove =(bookName)=>{
    console.log(bookName);
    let newLibrary = library.filter(book => {
        return !(book === bookName); 
    });    
    setLibrary(newLibrary);
   }

  let handleNewBook = (e)=>{
        setNewBook(e.target.value);
        console.log(newBook);
  }



  let handleNewBookAdd = () =>{
        setLibrary([...library,newBook]);
        setNewBook("");
  }

    return (
        <div style={{backgroundColor:'cyan'}}>
            <h3 style={{backgroundColor:'blue'}}>Library Management System</h3>
            <h2>Books</h2>
            <table>
                {library.map(bookName => (
                    <tbody>
                        <td>{bookName}</td>
                        <td><button onClick={() => handleBookRemove(bookName)}>Remove</button></td>
                    </tbody>
                ))}
            </table>
            <input type={Text} value={newBook} id="newBook" onChange={handleNewBook}></input>
            <button onClick={() =>handleNewBookAdd()}>Add New Book</button>
        </div>);
}


export default BookLibrary;