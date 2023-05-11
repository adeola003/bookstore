import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookObject }) => (
  <div className="book-wrap">
    <div className="book-element">
      <p className="book-category">{bookObject.category}</p>
      <strong className="book-title">{bookObject.title}</strong>
      <small className="book-author">{bookObject.author}</small>
      <button type="submit" className="remove">remove</button>
    </div>
    <div className="book-progress">
      <img src="" alt="" />
      <p>
        70%
        <br />
        <span>Completed</span>
      </p>
    </div>
    <div className="porgress-details">
      <small>CURRENT CHAPTER</small>
      <p>Chapter 17</p>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
  </div>
);

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
