import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';
import BookProgress from './BookProgress';

const Book = ({ bookObject }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(delBook(bookObject.item_id));
  };

  return (
    <div className="book-wrap">
      <div className="book-element">
        <p className="book-category">{bookObject.category}</p>
        <strong className="book-title">{bookObject.title}</strong>
        <small className="book-author">{bookObject.author}</small>
        <div className="book-btns">
          <button type="submit" className="remove" onClick={handleRemoveBook}>remove</button>
          <div className="Line-2"> </div>
          <button type="submit" className="comment">Comment</button>
          <div className="Line-2"> </div>
          <button type="submit" className="edit">Edit</button>
        </div>
      </div>
      <BookProgress />
      <div className="progress-details">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 17</p>
        <div className="Rectangle-2"><span className="Update-progress">UPDATE PROGRESS</span></div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookObject: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
};

Book.defaultProps = {
  bookObject: {
    item_id: '',
    title: '',
    author: '',
    category: '',
  },
};

export default Book;
