import { useState } from "react"
import useBookContext from "../hooks/use-books-context"

export default function BookCreate() {

    const [title, setTitle] = useState('')
    const { createBook } = useBookContext()

    const handleChange = (e) => {
    setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input autoFocus className='input' value={title} onChange={handleChange} placeholder="title"/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}