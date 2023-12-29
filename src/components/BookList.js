import { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'

export default function BookList({ books, deleteBookById, editBookById }) {

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} deleteBookById={deleteBookById} editBookById={editBookById} />
    })

    return (
        <div className='book-list'>
            {renderBooks}
        </div>
    )
}