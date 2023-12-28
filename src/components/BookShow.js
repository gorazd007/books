import { useState } from "react"
import BookEdit from '../components/BookEdit'

export default function BookShow({book, deleteBookById, editBookById}){
    const [showEdit, setShowEdit] = useState(false)

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        editBookById(id, newTitle)
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