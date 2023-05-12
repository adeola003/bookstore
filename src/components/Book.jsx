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
        <button type="submit" className="remove" onClick={handleRemoveBook}>remove</button>
      </div>
      <BookProgress />
      <div className="porgress-details">
        <small>CURRENT CHAPTER</small>
        <p>Chapter 17</p>
        <button type="submit">UPDATE PROGRESS</button>
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
