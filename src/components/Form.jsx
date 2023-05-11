import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;

    if (title && author) {
      const newBook = {
        item_id: `item${Date.now()}`,
        title,
        author,
        category: 'Uncategorized',
      };

      dispatch(postBook(newBook));
      event.target.reset();
    } else {
      alert('Enter a book title and the author');
    }
  };

  return (
    <form action="" id="books-form" onSubmit={handleSubmit}>
      <label htmlFor="Title">
        <input type="text" id="title" placeholder="Enter the book title" />
      </label>
      <label htmlFor="Author">
        <input type="text" id="author" placeholder="Enter the author's name" />
      </label>
      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
};

export default Form;
