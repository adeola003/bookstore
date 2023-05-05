import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

const Books = ({ title, author }) => (
  <>
    <div>
      <ul>
        <li>
          Title :
          {title}
        </li>
        <li>
          Author :
          {author}
        </li>
      </ul>
      <button type="submit" className="remove">remove</button>
    </div>
    <div>
      <Form />
    </div>
  </>
);

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Books.defaultProps = {
  title: '',
  author: '',
};

export default Books;
