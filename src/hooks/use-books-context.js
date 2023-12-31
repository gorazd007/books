import { useContext} from 'react'
import BooksContext from '../context/books'


export default function useBookContext() {
    return useContext(BooksContext)
}