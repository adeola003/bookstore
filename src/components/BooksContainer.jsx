import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { fetchBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const booksList = useSelector((store) => store.book.booksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

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
