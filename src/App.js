import { useState, useEffect } from "react";
import axios from 'axios'
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'

function App() {

  const [books, setBooks] = useState([])
  //const [currentId, setCurrentId] = useState(0)

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle
    })
    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
        //return {...book, title: newTitle}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      title
    })
    const updatedBooks = [
      ...books,
      response.data
    ]
    setBooks(updatedBooks)

    // const updatedBooks = [
    //   ...books,
    //   {id: currentId, title}
    // ]
    // setBooks(updatedBooks)
    // setCurrentId(currentId+1)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} deleteBookById={deleteBookById} editBookById={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
