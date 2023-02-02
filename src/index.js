// // Library
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import book from './book.js';
import { Book } from './Books';

// root APP
const Booklist = () => {
  const bookTitle = 'this is  our book store';
  return (
    <div>
      <h2 className="titile-head">{bookTitle}</h2>
      <article className="bookList">
        {book.map((el, i) => {
          const { id } = el;
          return <Book {...el} key={id} number={i} />;
        })}
      </article>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);
