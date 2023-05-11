import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispacth = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.title.value && event.target.author.value){
      const newBook = {
        item_id: `item${Date.now()}`,
        title: event.target.title.value,
        author: event.target.author.value,
        category: 'Uncategorized',
      }
      
      dispacth(addBook(newBook))
      event.target.reset();
    }
    else {
      alert('Enter a book title and the author')
    }
  };

  return (
    <form action="" id="books-form" onSubmit={handleSubmit}>
      <label htmlFor="Title">
        <input type="text" id="title" placeholder="Enter the book title" />
      </label>
      <label htmlFor="Author">
        <input type="text" id="auhor" placeholder="Enter the author's name" />
      </label>
      <button className="submit-btn" type="submit" onClick={()=>dispacth(addBook())}>Submit</button>
    </form>
  );
};

export default Form;
