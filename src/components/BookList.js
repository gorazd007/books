import BookShow from './BookShow'
import useBookContext from '../hooks/use-books-context'



export default function BookList() {
    const { books } = useBookContext()

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })

    return (
        <div className='book-list'>
            {renderBooks}
        </div>
    )
}