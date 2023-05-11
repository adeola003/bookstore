import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const BooksContainer = () => {
  const booksList = useSelector((store) => store.book.booksList);

  return (
    <>
      <section className="books-container">
        {booksList.map((book) => <Book key={book.item_id} bookObject={book} />)}
      </section>
      <section className="form container"><Form /></section>
    </>
  );
};

export default BooksContainer;
