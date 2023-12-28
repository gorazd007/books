import { useState } from "react"

export default function BookEdit({book, handleSubmit}){

    const [title, setTitle] = useState(book.title)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        handleSubmit(book.id, title)
    }

    return (
        <div>
            <form className="book-edit" onSubmit={onHandleSubmit}>
                <input value={title} autoFocus className="input" onChange={handleChange} placeholder="Title" />
                <button className="button is-primary" >Save</button>
            </form>
        </div>
    )
}