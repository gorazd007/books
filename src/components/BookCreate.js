import { useState } from "react"

export default function BookCreate({onCreate}) {

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
    setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
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