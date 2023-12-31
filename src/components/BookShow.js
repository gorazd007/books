import { useState } from "react"
import BookEdit from '../components/BookEdit'
import useBookContext from "../hooks/use-books-context"

export default function BookShow({ book }){
    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById } = useBookContext()

    const handleSubmit = () => {
        setShowEdit(false)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit book={book} handleSubmit={handleSubmit}/>
    }

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }
    return (
        <div className="book-show" style={{boxShadow: '5px 5px 10px 7px lightGrey, inset 0 0 8px Grey'}}>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="books"
            style={{borderRadius: '5px'}}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}