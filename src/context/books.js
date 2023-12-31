import { createContext, useCallback, useState } from "react";
import axios from 'axios'


const BooksContext = createContext()

const Provider = ({ children }) => {

    const [books, setBooks] = useState([])

// using useCallback function to clear eslint error of empty dependency array in useEffect
// referencing the same memory location after second render
  const fetchBooks = useCallback( async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  },[])

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
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
  }

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook
  }
    
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider }
export default BooksContext